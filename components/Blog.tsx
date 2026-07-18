import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { BlogCard } from '@/features/blog/components/BlogCard';
import type { BlogPostMeta } from '@/features/blog/types';

interface BlogProps {
  posts: BlogPostMeta[];
}

function Blog({ posts }: BlogProps) {
  const featured = posts.slice(0, 3);

  return (
    <section className="relative py-32 bg-white z-10 below-fold">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
            <div>
              <span className="text-accent-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                Jornal PetPoint
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-black leading-tight">
                Conteúdo para quem <br />
                <span className="text-brand-600">cuida de verdade.</span>
              </h2>
            </div>
            <p className="text-brand-gray text-lg max-w-sm leading-relaxed">
              Artigos escritos pela equipe médica da PetPoint sobre saúde, comportamento e bem-estar animal.
            </p>
          </div>
        </Reveal>

        {featured.length === 0 ? (
          <p className="text-brand-gray text-center py-10">Novos artigos em breve.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {featured.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100} width="100%">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={300} width="100%">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105"
            >
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Blog;
