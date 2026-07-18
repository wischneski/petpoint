/**
 * components/BlogPostBody.tsx — Article Body Renderer
 *
 * Renderiza o componente MDX de um artigo (já compilado em build time
 * pelo @next/mdx a partir de content/blog/{slug}/index.mdx — ver o
 * CONTENT_REGISTRY em app/blog/[slug]/page.tsx). Os componentes
 * customizados (headings com âncora, callouts, tabelas etc.) vêm do
 * mdx-components.tsx na raiz do projeto, aplicados automaticamente
 * pelo @next/mdx a qualquer .mdx compilado — não precisam ser passados
 * manualmente aqui.
 */

import type { ComponentType } from 'react';
import { ArticleActions } from './ArticleActions';

interface BlogPostBodyProps {
  Content: ComponentType;
  slug: string;
  title: string;
  url: string;
}

export function BlogPostBody({ Content, slug, title, url }: BlogPostBodyProps) {
  return (
    <article className="article-content text-[1.0625rem]">
      <Content />
      <ArticleActions slug={slug} title={title} url={url} />
    </article>
  );
}
