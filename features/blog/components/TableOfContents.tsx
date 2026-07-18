/**
 * components/TableOfContents.tsx — Article Table of Contents
 *
 * Sumário do artigo: sidebar sticky no desktop, card colapsável no mobile.
 * Destaca a seção ativa via IntersectionObserver (scrollspy leve).
 */

'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';
import type { TocHeading } from '../types';

interface TableOfContentsProps {
  headings: TocHeading[];
}

function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function TocLinks({ headings, activeId, onNavigate }: { headings: TocHeading[]; activeId: string | null; onNavigate?: () => void }) {
  return (
    <ul className="space-y-1">
      {headings.map((heading) => (
        <li key={heading.id} className={heading.depth === 3 ? 'pl-4' : ''}>
          <a
            href={`#${heading.id}`}
            onClick={onNavigate}
            className={`block py-1.5 text-sm leading-snug border-l-2 pl-3 transition-colors ${
              activeId === heading.id
                ? 'border-accent-500 text-accent-500 font-medium'
                : 'border-brand-100 text-brand-gray/70 hover:text-brand-black hover:border-brand-300'
            }`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const ids = headings.map((h) => h.id);
  const activeId = useActiveHeading(ids);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: card colapsável no início do artigo */}
      <details className="lg:hidden mb-8 rounded-2xl border border-brand-100 bg-brand-50/50 open:pb-4">
        <summary className="cursor-pointer select-none list-none flex items-center gap-2 px-5 py-4 text-sm font-semibold text-brand-black">
          <List className="w-4 h-4 text-accent-500" />
          Sumário do artigo
        </summary>
        <nav className="px-5" aria-label="Sumário do artigo">
          <TocLinks headings={headings} activeId={activeId} />
        </nav>
      </details>

      {/* Desktop: sidebar sticky */}
      <nav
        className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
        aria-label="Sumário do artigo"
      >
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gray/60 mb-3">
          <List className="w-3.5 h-3.5" />
          Sumário
        </p>
        <TocLinks headings={headings} activeId={activeId} />
      </nav>
    </>
  );
}
