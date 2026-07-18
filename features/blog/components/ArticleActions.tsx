/**
 * components/ArticleActions.tsx — Like + Share Bar
 *
 * Barra de engajamento ao final do corpo do artigo: curtir/descurtir
 * (estado local por navegador, via localStorage — site é 100% estático,
 * sem backend, então não existe contador real agregado entre visitantes)
 * e compartilhamento nas redes sociais via web intents.
 */

'use client';

import { useEffect, useState } from 'react';
import { Heart, MessageCircle, Link2, Check, X as XIcon } from 'lucide-react';
import { FacebookIcon } from '@/components/ui/FacebookIcon';
import { LinkedinIcon } from '@/components/ui/LinkedinIcon';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

interface ArticleActionsProps {
  slug: string;
  title: string;
  url: string;
}

/** Seed determinístico por slug — mesmo valor no server e no client (evita hydration mismatch) */
function seedFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return 8 + (hash % 27); // range 8–34
}

function LikeButton({ slug }: { slug: string }) {
  const baseCount = seedFromSlug(slug);
  const [liked, setLiked] = useState(false);
  const storageKey = `petpoint-blog-like-${slug}`;

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === '1');
  }, [storageKey]);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    localStorage.setItem(storageKey, next ? '1' : '0');
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={liked}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium text-sm transition-colors ${
        liked
          ? 'bg-accent-500 border-accent-500 text-white'
          : 'bg-white border-brand-100 text-brand-gray hover:border-accent-300 hover:text-accent-500'
      }`}
    >
      <Heart className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} />
      {liked ? baseCount + 1 : baseCount} curtidas
    </button>
  );
}

function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const [instagramCopied, setInstagramCopied] = useState(false);

  const shareLinks = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: 'Facebook',
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: 'X (Twitter)',
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: 'LinkedIn',
      icon: LinkedinIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // O Instagram não tem web intent de compartilhamento (nem no app, nem
  // no site) — a única forma real de "compartilhar" é copiar o link e
  // colar manualmente no Story, Direct ou bio.
  const copyForInstagram = async () => {
    await navigator.clipboard.writeText(url);
    setInstagramCopied(true);
    setTimeout(() => setInstagramCopied(false), 2500);
  };

  return (
    <div className="flex items-center gap-2">
      {shareLinks.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartilhar no ${label}`}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-50 text-brand-gray hover:bg-brand-900 hover:text-white transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}

      <div className="relative">
        <button
          type="button"
          onClick={copyForInstagram}
          aria-label="Copiar link para compartilhar no Instagram"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-50 text-brand-gray hover:bg-brand-900 hover:text-white transition-colors"
        >
          {instagramCopied ? <Check className="w-4 h-4" /> : <InstagramIcon className="w-4 h-4" />}
        </button>
        {instagramCopied && (
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-900 text-white text-xs px-3 py-1.5 shadow-lg">
            Link copiado! Cole no Story ou Direct
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={copyLink}
        aria-label="Copiar link do artigo"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-50 text-brand-gray hover:bg-brand-900 hover:text-white transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}

export function ArticleActions({ slug, title, url }: ArticleActionsProps) {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 py-6 border-y border-brand-100">
      <LikeButton slug={slug} />
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray/50">Compartilhar</span>
        <ShareButtons title={title} url={url} />
      </div>
    </div>
  );
}
