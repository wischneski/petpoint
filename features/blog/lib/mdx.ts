/**
 * lib/mdx.ts — Blog Data Layer (build-time only)
 *
 * Lê e parseia os arquivos .mdx do diretório content/blog/. Como o projeto
 * usa `output: 'export'` (site estático), todas as operações de leitura de
 * arquivo acontecem exclusivamente em build time — nunca no cliente.
 *
 * Padrão usado: Repository Pattern dentro do slice blog.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import type { BlogPost, BlogPostMeta, BlogFilters, TocHeading } from '../types';

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const PLACEHOLDER_COVER = '/images/blog/placeholder-cover.svg';

/**
 * stripLeadingH1(content)
 * O corpo do artigo já exibe o título no header da página (hero), então
 * remove o primeiro `# Título` do MDX para evitar H1 duplicado.
 */
function stripLeadingH1(content: string): string {
  return content.replace(/^\s*#\s+.+\r?\n/, '').trimStart();
}

/**
 * extractHeadings(content)
 * Varre as linhas `## ` e `### ` do MDX bruto e gera os ids com o mesmo
 * slugger usado pelo rehype-slug, para que os links do sumário (TOC)
 * apontem exatamente para os headings renderizados.
 */
function extractHeadings(content: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();
    headings.push({ id: slugger.slug(text), text, depth });
  }

  return headings;
}

/**
 * getAllPostSlugs()
 * Lê o diretório content/blog/ e retorna todos os slugs disponíveis.
 * Usado em generateStaticParams() para gerar páginas estáticas.
 */
export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((dir) => fs.existsSync(path.join(BLOG_CONTENT_DIR, dir, 'index.mdx')));
}

/**
 * getPostBySlug(slug)
 * Lê e parseia o arquivo index.mdx de um artigo específico.
 * Se a imagem de capa declarada no frontmatter ainda não existir em
 * public/, usa uma capa placeholder no lugar (evita <img> quebrada).
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_CONTENT_DIR, slug, 'index.mdx');
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content: rawContent } = matter(fileContent);
  const meta = data as BlogPostMeta;
  const content = stripLeadingH1(rawContent);

  const coverPath = path.join(process.cwd(), 'public', meta.coverImage);
  const coverImage = fs.existsSync(coverPath) ? meta.coverImage : PLACEHOLDER_COVER;

  return { ...meta, coverImage, content, headings: extractHeadings(content) };
}

/**
 * getAllPosts(filters?)
 * Retorna todos os posts publicados, opcionalmente filtrados.
 * Ordenados por data decrescente.
 */
export function getAllPosts(filters?: BlogFilters): BlogPostMeta[] {
  const posts = getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return applyFilters(posts, filters);
}

function applyFilters(posts: BlogPostMeta[], filters?: BlogFilters): BlogPostMeta[] {
  if (!filters) return posts;
  return posts.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.tag && !p.tags.includes(filters.tag)) return false;
    if (filters.author && p.author !== filters.author) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      return p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    }
    return true;
  });
}
