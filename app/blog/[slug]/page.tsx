/**
 * app/blog/[slug]/page.tsx — Individual Article Page
 *
 * Página estática de artigo individual (/blog/[slug]).
 * generateStaticParams() gera todas as rotas em build time.
 *
 * Rota: /blog/longevidade-prevencao, /blog/linguagem-felinos, etc.
 * Estratégia: Static Generation (compatível com output: 'export')
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/features/blog/lib/mdx';
import { getAuthorProfile } from '@/features/blog/lib/authors';
import { markdownToPlainText } from '@/features/blog/lib/plain-text';
import { BlogPostBody } from '@/features/blog/components/BlogPostBody';
import { BlogFAQ } from '@/features/blog/components/BlogFAQ';
import { TableOfContents } from '@/features/blog/components/TableOfContents';
import { ReadingProgressBar } from '@/features/blog/components/ReadingProgressBar';
import { CopyArticleButton } from '@/features/blog/components/CopyArticleButton';

interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Static generation ──────────────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

/* ── Per-page metadata ──────────────────────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonicalUrl = `https://www.meupetpoint.com.br/blog/${post.slug}`;

  return {
    metadataBase: new URL('https://www.meupetpoint.com.br'),
    title: `${post.title} | Blog PetPoint`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      images: [{ url: post.coverImage, width: 1200, height: 900, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      locale: 'pt_BR',
      siteName: 'PetPoint',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

/* ── Page Component ─────────────────────────────────────────────────────── */

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const canonicalUrl = `https://www.meupetpoint.com.br/blog/${post.slug}`;
  const authorProfile = getAuthorProfile(post.author);
  const articlePlainText = `${post.title}\n\n${markdownToPlainText(post.content)}`;
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meupetpoint.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.meupetpoint.com.br/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#post`,
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'pt-BR',
        author: { '@type': 'Person', name: post.author },
        publisher: { '@id': 'https://www.meupetpoint.com.br/#business' },
        url: canonicalUrl,
        ...(post.mentions && post.mentions.length > 0
          ? {
              mentions: post.mentions.map((mention) => ({
                '@type': 'Organization',
                name: mention.name,
                url: mention.url,
              })),
            }
          : {}),
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${canonicalUrl}#faq`,
              mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ReadingProgressBar />

      {/* Hero do artigo */}
      <header className="relative h-[50vh] min-h-[400px] overflow-hidden bg-brand-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent" />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-12 z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/70">{post.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent-500 text-white rounded-full w-fit">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readingTime} min de leitura</span>
            </div>
            <CopyArticleButton text={articlePlainText} />
          </div>
        </div>
      </header>

      {/* Corpo do artigo */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          <TableOfContents headings={post.headings} />

          <div className="min-w-0 max-w-[720px]">
            <BlogPostBody content={post.content} slug={post.slug} title={post.title} url={canonicalUrl} />

            {/* Bio do autor + CTA */}
            <div className="mt-14 pt-10 border-t border-brand-100">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10">
                {authorProfile ? (
                  <img
                    src={authorProfile.image}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover shrink-0 shadow-md"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center shrink-0 font-serif text-xl text-brand-600">
                    {post.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-serif text-lg text-brand-black">{post.author}</p>
                  {authorProfile && <p className="text-sm text-brand-gray/60">{authorProfile.role} · PetPoint</p>}
                </div>
              </div>

              <div className="rounded-2xl bg-brand-900 text-white px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div>
                  <p className="font-serif text-xl md:text-2xl mb-1">Ficou com alguma dúvida?</p>
                  <p className="text-white/60 text-sm">Fale com a nossa equipe pelo WhatsApp e agende uma avaliação.</p>
                </div>
                <a
                  href="https://wa.me/554899120084"
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {post.faqs && <BlogFAQ faqs={post.faqs} />}

            <div className="flex items-center justify-between pt-8 mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
