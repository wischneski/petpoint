/**
 * components/BlogPostBody.tsx — Article Body Renderer
 *
 * Renderiza o conteúdo MDX de um artigo com tipografia editorial premium.
 * Usa next-mdx-remote/rsc, compatível com `output: 'export'`.
 *
 * remark-gfm habilita tabelas/strikethrough (usados no conteúdo);
 * rehype-slug gera os `id` dos headings, consumidos pelo Sumário (TOC)
 * e pelos links de âncora dos componentes h2/h3 custom.
 */

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '../lib/mdx-components';
import { ArticleActions } from './ArticleActions';

interface BlogPostBodyProps {
  content: string;
  slug: string;
  title: string;
  url: string;
}

export function BlogPostBody({ content, slug, title, url }: BlogPostBodyProps) {
  return (
    <article className="article-content text-[1.0625rem]">
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
      <ArticleActions slug={slug} title={title} url={url} />
    </article>
  );
}
