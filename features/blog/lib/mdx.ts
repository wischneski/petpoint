/**
 * lib/mdx.ts — Blog Data Layer (build-time only)
 *
 * Lê os metadados de posts-data.ts e o corpo bruto de content/blog/{slug}/index.mdx
 * (usado para extrair headings/TOC e texto puro — não para renderizar, isso
 * acontece via import estático do .mdx compilado pelo @next/mdx, em
 * app/blog/[slug]/page.tsx). Como o projeto usa `output: 'export'`, toda
 * leitura de arquivo acontece em build time — nunca no cliente.
 */

import fs from 'fs';
import path from 'path';
import GithubSlugger from 'github-slugger';
import { POSTS_META } from './posts-data';
import type { BlogPost, BlogPostMeta, BlogFilters, TocHeading } from '../types';

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const PLACEHOLDER_COVER = '/images/blog/placeholder-cover.svg';

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
 * Retorna todos os slugs cadastrados em posts-data.ts.
 * Usado em generateStaticParams() para gerar páginas estáticas.
 */
export function getAllPostSlugs(): string[] {
  return POSTS_META.map((post) => post.slug);
}

/**
 * getPostBySlug(slug)
 * Busca os metadados em posts-data.ts e lê o corpo bruto do .mdx (para
 * headings/TOC e extração de texto puro). Se a imagem de capa declarada
 * ainda não existir em public/, usa uma capa placeholder no lugar.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const meta = POSTS_META.find((post) => post.slug === slug);
  if (!meta) return null;

  const filePath = path.join(BLOG_CONTENT_DIR, slug, 'index.mdx');
  const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';

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
