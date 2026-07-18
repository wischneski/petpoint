/**
 * components/BlogList.tsx — Blog Post Grid Listing
 *
 * Grade de artigos com suporte a paginação.
 * Usa BlogCard internamente e recebe a lista de posts como prop
 * (dados carregados em build time pelo lib/mdx.ts).
 */

import { BlogCard } from './BlogCard';
import type { BlogPostMeta } from '../types';

interface BlogListProps {
  posts: BlogPostMeta[];
  currentPage: number;
  totalPages: number;
}

export function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Artigo em destaque */}
      {currentPage === 1 && featured && (
        <div className="mb-10">
          <BlogCard post={featured} featured />
        </div>
      )}

      {/* Grade de artigos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(currentPage === 1 ? rest : posts).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-2 mt-14">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <a
              key={page}
              href={page === 1 ? '/blog' : `/blog?page=${page}`}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                page === currentPage
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-white text-brand-gray border border-gray-200 hover:border-accent-500 hover:text-accent-500'
              }`}
            >
              {page}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
