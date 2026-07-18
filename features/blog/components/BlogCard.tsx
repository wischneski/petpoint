/**
 * components/BlogCard.tsx — Blog Post Card Component
 *
 * Card de preview de artigo do blog, usado na listagem (/blog)
 * e nos hubs de categoria (/blog/caes, /blog/gatos).
 */

import Link from 'next/link';
import type { BlogPostMeta } from '../types';

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className={`
          relative overflow-hidden rounded-2xl bg-white shadow-md
          hover:shadow-xl transition-shadow duration-300
          ${featured ? 'md:grid md:grid-cols-2 md:gap-0' : ''}
        `}
      >
        {/* Cover Image */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-4/3 md:aspect-auto md:h-full' : 'aspect-4/3'}`}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-900/20" />
          {/* Category badge */}
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-accent-500 text-white rounded-full">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className={`p-6 flex flex-col ${featured ? 'justify-center' : ''}`}>
          <time className="text-brand-gray/50 text-xs mb-2" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </time>
          <h3 className={`font-serif text-brand-black leading-tight mb-3 group-hover:text-accent-500 transition-colors ${featured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          <p className="text-brand-gray text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <span className="text-xs text-brand-gray/60">{post.author}</span>
            <span className="text-xs text-brand-gray/40">·</span>
            <span className="text-xs text-brand-gray/60">{post.readingTime} min de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
