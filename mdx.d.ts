/**
 * mdx.d.ts — Ambient module declaration for .mdx imports
 *
 * @types/mdx fornece os tipos auxiliares (MDXProps, MDXComponents), mas
 * não declara o wildcard `*.mdx` sozinho — isso precisa ser feito no
 * projeto consumidor. Necessário para os imports estáticos em
 * app/blog/[slug]/page.tsx (`import X from '@/content/blog/.../index.mdx'`).
 */

declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export default function MDXContent(props: MDXProps): React.JSX.Element;
}
