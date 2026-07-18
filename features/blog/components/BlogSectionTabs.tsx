/**
 * components/BlogSectionTabs.tsx — Navegação entre seções do blog
 *
 * Alterna entre a listagem geral e os hubs de categoria
 * (Cães, Gatos, Especialidades). Usado no topo de cada página de seção.
 */

import Link from 'next/link';

const sections = [
  { key: 'todos', label: 'Todos os artigos', href: '/blog' },
  { key: 'caes', label: 'Cães', href: '/blog/caes' },
  { key: 'gatos', label: 'Gatos', href: '/blog/gatos' },
  { key: 'especialidades', label: 'Especialidades', href: '/blog/especialidades' },
] as const;

interface BlogSectionTabsProps {
  active: (typeof sections)[number]['key'];
}

export function BlogSectionTabs({ active }: BlogSectionTabsProps) {
  return (
    <nav className="bg-white border-b border-brand-100">
      <div className="container mx-auto px-6 flex gap-2 overflow-x-auto py-4">
        {sections.map((section) => (
          <Link
            key={section.key}
            href={section.href}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              section.key === active
                ? 'bg-accent-500 text-white'
                : 'bg-brand-50 text-brand-gray hover:bg-brand-100'
            }`}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
