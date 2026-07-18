/**
 * mdx-components.tsx — Global MDX Component Overrides
 *
 * Arquivo de convenção do @next/mdx (App Router): o `useMDXComponents`
 * exportado aqui é aplicado automaticamente a TODO conteúdo .mdx
 * compilado no projeto, sem precisar passar `components` manualmente
 * em cada render. Precisa estar na raiz do projeto (ou em src/).
 *
 * Estilo editorial premium (newsletter): âncoras em headings, callouts,
 * divisores decorativos e tabelas com scroll. Os headings recebem `id`
 * automaticamente via rehype-slug (configurado em next.config.ts).
 *
 * Referência: https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-custom-styles-and-components
 */

import type { MDXComponents } from 'mdx/types';
import { Link as LinkIcon, PawPrint } from 'lucide-react';

function Heading({
  as: Tag,
  id,
  children,
}: {
  as: 'h2' | 'h3';
  id?: string;
  children: React.ReactNode;
}) {
  const isH2 = Tag === 'h2';
  return (
    <Tag
      id={id}
      className={`group relative scroll-mt-28 font-serif text-brand-black ${
        isH2
          ? 'mt-14 mb-5 text-2xl md:text-3xl'
          : 'mt-10 mb-4 text-xl md:text-2xl'
      }`}
    >
      {id && (
        <a
          href={`#${id}`}
          aria-label="Link para esta seção"
          className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:inline-flex opacity-0 group-hover:opacity-100 text-accent-500 transition-opacity"
        >
          <LinkIcon className="w-4 h-4" />
        </a>
      )}
      {children}
    </Tag>
  );
}

// Divisor decorativo entre blocos (substitui o <hr /> plano)
function Divider() {
  return (
    <div className="my-12 flex items-center justify-center gap-3 text-brand-200" role="separator">
      <span className="h-px w-16 bg-brand-100" />
      <PawPrint className="w-4 h-4 text-accent-400" aria-hidden="true" />
      <span className="h-px w-16 bg-brand-100" />
    </div>
  );
}

const blogComponents: MDXComponents = {
  h2: (props) => <Heading as="h2" {...(props as { id?: string; children: React.ReactNode })} />,
  h3: (props) => <Heading as="h3" {...(props as { id?: string; children: React.ReactNode })} />,

  p: ({ children }) => (
    <p className="article-paragraph text-brand-gray leading-[1.85] mb-6">{children}</p>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent-500 font-medium underline decoration-accent-200 decoration-2 underline-offset-4 hover:decoration-accent-500 transition-colors"
      {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  ),

  strong: ({ children }) => <strong className="font-semibold text-brand-black">{children}</strong>,

  // Blockquote funciona como pull-quote / callout editorial (uso atual do conteúdo: "> **Importante:** ...")
  blockquote: ({ children }) => (
    <blockquote className="not-italic my-8 rounded-2xl border border-brand-100 bg-brand-50/60 px-6 py-5 md:px-8 md:py-6">
      <div className="font-serif text-lg md:text-xl leading-snug text-brand-black [&_p]:mb-0">
        {children}
      </div>
    </blockquote>
  ),

  ul: ({ children }) => <ul className="article-list mb-6 space-y-2.5">{children}</ul>,
  ol: ({ children }) => (
    <ol className="article-list article-list--ordered mb-6 space-y-2.5 list-decimal marker:text-accent-500 marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="relative text-brand-gray leading-relaxed article-list-item">{children}</li>
  ),

  hr: Divider,

  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-brand-100">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-brand-900 text-white">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 border-t border-brand-100 text-brand-gray">{children}</td>
  ),
  tr: ({ children }) => <tr className="even:bg-brand-50/50">{children}</tr>,

  // Imagens: usa uma figure wrapper para responsividade e legenda via alt
  img: ({ src, alt, ...props }) => (
    <figure className="my-10">
      <img
        src={typeof src === 'string' ? src : undefined}
        alt={alt || ''}
        className="w-full rounded-2xl shadow-lg"
        loading="lazy"
        {...props}
      />
      {alt && <figcaption className="text-center text-sm text-brand-gray/60 mt-3">{alt}</figcaption>}
    </figure>
  ),

  code: ({ children }) => (
    <code className="text-accent-600 bg-brand-50 px-1.5 py-0.5 rounded text-[0.9em]">{children}</code>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...blogComponents,
  };
}
