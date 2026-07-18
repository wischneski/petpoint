/**
 * components/ReadingProgressBar.tsx — Article Reading Progress
 *
 * Barra fina fixa no topo indicando o progresso de leitura do artigo.
 * Client Component: depende de scroll/DOM, mas o restante da página
 * permanece estático (compatível com output: 'export').
 */

'use client';

import { useEffect, useRef, useState } from 'react';

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent"
      role="progressbar"
      aria-label="Progresso de leitura do artigo"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-accent-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
