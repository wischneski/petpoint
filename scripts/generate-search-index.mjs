/**
 * scripts/generate-search-index.mjs — Build-time Embeddings for Blog Search
 *
 * Gera um embedding (vetor denso) por artigo publicado, usado pela busca
 * híbrida do blog (similaridade de cosseno + BM25 lexical, combinados via
 * Reciprocal Rank Fusion no client — ver features/blog/lib/hybrid-search.ts).
 *
 * Modelo: Xenova/all-MiniLM-L6-v2 (384 dimensões, ~23MB quantizado) —
 * mesmo modelo usado no client (features/blog/components/BlogSearch.tsx),
 * para garantir que query e documentos vivam no mesmo espaço vetorial.
 *
 * Rodar manualmente após criar/editar um artigo:
 *   node scripts/generate-search-index.mjs
 *
 * Saída: public/search-index.json (servido como asset estático,
 * compatível com output: 'export' — nenhuma API/backend necessário).
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { pipeline } from '@huggingface/transformers';

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json');
const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
const PLACEHOLDER_COVER = '/images/blog/placeholder-cover.svg';

function stripLeadingH1(markdown) {
  return markdown.replace(/^\s*#\s+.+\r?\n/, '').trimStart();
}

function markdownToPlainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^-{3,}\s*$/gm, '')
    .replace(/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/gm, '')
    .replace(/^\|(.+)\|$/gm, (_, row) => row.split('|').map((c) => c.trim()).filter(Boolean).join(' '))
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function main() {
  const slugs = fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((dir) => fs.existsSync(path.join(BLOG_CONTENT_DIR, dir, 'index.mdx')));

  const posts = slugs
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_CONTENT_DIR, slug, 'index.mdx'), 'utf-8');
      const { data, content } = matter(raw);
      const coverPath = path.join(process.cwd(), 'public', data.coverImage ?? '');
      const coverImage = fs.existsSync(coverPath) ? data.coverImage : PLACEHOLDER_COVER;
      const faqText = (data.faqs ?? [])
        .map((faq) => `${faq.question} ${faq.answer}`)
        .join(' ');
      const plainText = [markdownToPlainText(stripLeadingH1(content)), faqText].filter(Boolean).join(' ');
      return { slug, ...data, coverImage, plainText };
    })
    .filter((post) => post.published);

  console.log(`Gerando embeddings para ${posts.length} artigo(s) com ${MODEL_ID}...`);
  const extractor = await pipeline('feature-extraction', MODEL_ID);

  const index = [];
  for (const post of posts) {
    const textForEmbedding = `${post.title}. ${post.excerpt}. ${post.plainText}`.slice(0, 4000);
    const output = await extractor(textForEmbedding, { pooling: 'mean', normalize: true });
    const embedding = Array.from(output.data);

    index.push({
      slug: post.slug,
      title: post.title,
      date: post.date,
      author: post.author,
      excerpt: post.excerpt,
      category: post.category,
      tags: post.tags,
      coverImage: post.coverImage,
      readingTime: post.readingTime,
      published: post.published,
      plainText: post.plainText,
      embedding,
    });
    console.log(`  ✓ ${post.slug} (${embedding.length}d)`);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ model: MODEL_ID, generatedAt: new Date().toISOString(), posts: index }));
  console.log(`\nsearch-index.json gerado em ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
