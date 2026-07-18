/**
 * app/blog/layout.tsx — Blog Layout
 *
 * Layout compartilhado para todas as páginas do blog:
 * - /blog (listagem)
 * - /blog/[slug] (artigo individual)
 *
 * Inclui Navbar e Footer do site principal — necessário tanto para
 * navegação/UX quanto para SEO/GEO: crawlers e RAG usam <nav>/<footer>
 * pra separar "ruído" (navegação, rodapé) do "sinal" (o <article> em si).
 * Todos os metadados base herdados do layout root (app/layout.tsx).
 */

import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
