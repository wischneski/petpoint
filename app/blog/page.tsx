/**
 * app/blog/page.tsx — Blog Listing Page
 *
 * Página estática de listagem do blog (/blog).
 * Dados carregados em build time via features/blog/lib/mdx.ts.
 *
 * Rota: /blog
 * Estratégia: Static Generation (compatível com output: 'export')
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts } from '@/features/blog/lib/mdx';
import { BlogList } from '@/features/blog/components/BlogList';
import { BlogSectionTabs } from '@/features/blog/components/BlogSectionTabs';
import { BlogSearch } from '@/features/blog/components/BlogSearch';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meupetpoint.com.br'),
  title: 'Blog | PetPoint Hospital Veterinário',
  description: 'Dicas, artigos e novidades sobre saúde, nutrição e bem-estar animal da equipe PetPoint.',
  alternates: { canonical: 'https://www.meupetpoint.com.br/blog' },
  openGraph: {
    title: 'Blog PetPoint',
    description: 'Conteúdo especializado sobre saúde e bem-estar animal.',
    url: 'https://www.meupetpoint.com.br/blog',
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
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-brand-silver">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-900/30 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Blog</span>
          </nav>
          <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Blog & Conteúdo
          </span>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-4">
            Saúde e bem-estar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              para o seu pet
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Artigos escritos pela equipe médica da PetPoint para ajudar você a cuidar melhor do seu companheiro.
          </p>
        </div>
      </header>

      <BlogSectionTabs active="todos" />

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <BlogSearch>
          {posts.length === 0 ? (
            <p className="text-brand-gray text-center py-20">Nenhum artigo publicado ainda.</p>
          ) : (
            <BlogList posts={posts} currentPage={1} totalPages={1} />
          )}
        </BlogSearch>
      </section>

      {/* Back to home */}
      <div className="container mx-auto px-6 pb-20 text-center">
        <Link
          href="/#clinica"
          className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página principal
        </Link>
      </div>
    </main>
  );
}
