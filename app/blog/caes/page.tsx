/**
 * app/blog/caes/page.tsx — Blog Category Hub: Cães
 *
 * Lista os artigos do blog marcados com a tag "cães".
 * Rota: /blog/caes
 * Estratégia: Static Generation (compatível com output: 'export')
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/features/blog/lib/mdx';
import { BlogList } from '@/features/blog/components/BlogList';
import { BlogSectionTabs } from '@/features/blog/components/BlogSectionTabs';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'Blog para Tutores de Cães | PetPoint',
  description:
    'Artigos sobre saúde, comportamento e cuidados específicos para cães, escritos pela equipe da PetPoint em Morro da Fumaça/SC.',
  alternates: { canonical: 'https://www.meupetpoint.com.br/blog/caes' },
  openGraph: {
    title: 'Blog para Tutores de Cães | PetPoint',
    description: 'Conteúdo especializado sobre saúde e bem-estar canino.',
    url: 'https://www.meupetpoint.com.br/blog/caes',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PetPoint',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meupetpoint.com.br/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.meupetpoint.com.br/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cães', item: 'https://www.meupetpoint.com.br/blog/caes' },
  ],
};

export default function BlogCaesPage() {
  const posts = getAllPosts({ tag: 'cães' });

  return (
    <main className="min-h-screen bg-brand-silver">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-900/30 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/70">Cães</span>
          </nav>
          <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Blog & Conteúdo
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-4">
            Tudo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              o seu cão
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Artigos sobre saúde, comportamento e cuidados específicos para cães, escritos pela equipe da PetPoint.
          </p>
        </div>
      </header>

      <BlogSectionTabs active="caes" />

      <section className="container mx-auto px-6 py-20">
        {posts.length === 0 ? (
          <p className="text-brand-gray text-center py-20">Nenhum artigo publicado ainda para cães.</p>
        ) : (
          <BlogList posts={posts} currentPage={1} totalPages={1} />
        )}
      </section>
    </main>
  );
}
