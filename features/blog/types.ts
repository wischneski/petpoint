/**
 * types.ts — Blog Domain Types
 *
 * Define todos os tipos relacionados ao domínio de Blog.
 * Segue a Vertical Slice Architecture: o slice "blog" possui seus
 * próprios tipos isolados, sem dependência de domínios externos.
 */

/** Pergunta frequente — usada no schema FAQPage (AEO) e na seção de FAQ do artigo */
export interface BlogFAQ {
  question: string;
  answer: string;
}

/** Entidade externa citada no artigo (ex: WSAVA, AVMA) — vira `mentions` no schema BlogPosting (GEO) */
export interface BlogMention {
  name: string;
  url: string;
}

/** Frontmatter extraído dos arquivos .mdx */
export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;          // ISO 8601 string: "YYYY-MM-DD"
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage: string;    // path relativo ao /public: "/images/blog/..."
  readingTime: number;   // minutos estimados de leitura
  published: boolean;
  faqs?: BlogFAQ[];         // perguntas frequentes do artigo (opcional)
  mentions?: BlogMention[]; // entidades externas citadas no artigo (opcional)
}

/** Heading extraído do corpo do artigo, usado para montar o sumário (TOC) */
export interface TocHeading {
  id: string;
  text: string;
  depth: 2 | 3;
}

/** Post completo, com o conteúdo MDX como string serializada */
export interface BlogPost extends BlogPostMeta {
  content: string;         // corpo bruto do .mdx (sem frontmatter) — usado para TOC/texto puro, não para renderizar
  headings: TocHeading[];  // headings h2/h3 extraídos para o sumário
}

/** Resultado paginado para listagem de posts */
export interface BlogListResult {
  posts: BlogPostMeta[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Filtros disponíveis para a listagem */
export interface BlogFilters {
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
}
