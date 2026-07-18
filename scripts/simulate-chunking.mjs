/**
 * scripts/simulate-chunking.mjs — RAG Chunking Diagnostic
 *
 * Não faz parte do runtime do site. É uma ferramenta de auditoria pontual:
 * simula como o RecursiveCharacterTextSplitter do LangChain (o fatiador
 * padrão da indústria para RAG) cortaria o texto de cada artigo publicado,
 * pra detectar cortes ruins (meio de frase, pergunta separada da resposta
 * do FAQ, heading sem o parágrafo seguinte).
 *
 * Isso é uma SIMULAÇÃO — não sabemos, e não há como saber, se ChatGPT/
 * Perplexity/Claude usam exatamente esse fatiador. É o proxy mais próximo
 * disponível publicamente do "padrão da indústria" citado no pedido.
 *
 * Rodar: node scripts/simulate-chunking.mjs
 */

import fs from 'fs';
import path from 'path';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { POSTS_META } from '../features/blog/lib/posts-data.ts';

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

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

const CONFIGS = [
  { chunkSize: 500, chunkOverlap: 100 },
  { chunkSize: 1000, chunkOverlap: 200 }, // default do LangChain
];

async function main() {
  for (const meta of POSTS_META) {
    if (!meta.published) continue;

    const filePath = path.join(BLOG_CONTENT_DIR, meta.slug, 'index.mdx');
    const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';

    const faqText = (meta.faqs ?? [])
      .map((faq) => `Pergunta: ${faq.question}\nResposta: ${faq.answer}`)
      .join('\n\n');

    // Texto completo como um crawler veria: título + corpo + FAQ (a mesma
    // ordem em que aparecem na página renderizada). O corpo do .mdx já não
    // tem H1 nem frontmatter (metadados vivem em posts-data.ts).
    const fullText = [`# ${meta.title}`, markdownToPlainText(content), '## Perguntas frequentes', faqText]
      .filter(Boolean)
      .join('\n\n');

    console.log(`\n${'='.repeat(70)}`);
    console.log(`ARTIGO: ${meta.slug}  (${fullText.length} caracteres no total)`);
    console.log('='.repeat(70));

    for (const config of CONFIGS) {
      const splitter = new RecursiveCharacterTextSplitter(config);
      const chunks = await splitter.splitText(fullText);

      console.log(`\n--- chunkSize=${config.chunkSize} / chunkOverlap=${config.chunkOverlap} → ${chunks.length} chunk(s) ---`);
      chunks.forEach((chunk, i) => {
        const preview = chunk.replace(/\n+/g, ' ⏎ ').slice(0, 90);
        const endsAbruptly = !/[.!?:]\s*$/.test(chunk.trim());
        const flag = endsAbruptly ? '  ⚠️ termina sem pontuação (pode indicar corte no meio da ideia)' : '';
        console.log(`  [${i + 1}] (${chunk.length} chars) "${preview}${chunk.length > 90 ? '...' : ''}"${flag}`);
      });
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
