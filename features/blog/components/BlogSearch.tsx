/**
 * components/BlogSearch.tsx — Hybrid Semantic Search
 *
 * Busca inteligente do blog: converte a pergunta do usuário em um
 * embedding (Xenova/all-MiniLM-L6-v2, via @huggingface/transformers,
 * rodando no navegador — sem backend) e faz Dense Retrieval + BM25
 * híbrido contra os artigos publicados. Ver features/blog/lib/hybrid-search.ts.
 *
 * O modelo (~23MB) só é carregado quando o usuário de fato digita uma
 * busca (lazy) — não pesa no carregamento inicial da página /blog.
 *
 * Importante: essa busca melhora a experiência de busca DENTRO do site.
 * Ela não influencia como LLMs de terceiros (ChatGPT, Perplexity etc.)
 * rankeiam o site — isso depende do texto público indexado por eles.
 */

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { hybridSearch, type SearchIndexFile, type SearchResult } from '../lib/hybrid-search';

type ExtractorFn = (text: string, options: { pooling: 'mean'; normalize: boolean }) => Promise<{ data: Iterable<number> }>;

let extractorPromise: Promise<ExtractorFn> | null = null;

function loadExtractor(): Promise<ExtractorFn> {
  if (!extractorPromise) {
    extractorPromise = import('@huggingface/transformers').then(({ pipeline }) =>
      pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2') as unknown as Promise<ExtractorFn>
    );
  }
  return extractorPromise;
}

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);
  return debounced;
}

interface BlogSearchProps {
  children: React.ReactNode;
}

export function BlogSearch({ children }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading-model' | 'searching' | 'done' | 'error'>('idle');
  const [results, setResults] = useState<SearchResult[]>([]);
  const indexRef = useRef<SearchIndexFile | null>(null);
  const debouncedQuery = useDebouncedValue(query, 350);
  const requestIdRef = useRef(0);

  const isActive = debouncedQuery.trim().length >= 2;

  useEffect(() => {
    if (!isActive) {
      setStatus('idle');
      setResults([]);
      return;
    }

    const requestId = ++requestIdRef.current;

    async function runSearch() {
      try {
        setStatus((prev) => (prev === 'idle' ? 'loading-model' : 'searching'));

        if (!indexRef.current) {
          const res = await fetch('/search-index.json');
          indexRef.current = (await res.json()) as SearchIndexFile;
        }

        const extractor = await loadExtractor();
        if (requestId !== requestIdRef.current) return; // query mudou enquanto carregava

        setStatus('searching');
        const output = await extractor(debouncedQuery, { pooling: 'mean', normalize: true });
        const queryEmbedding = Array.from(output.data);

        if (requestId !== requestIdRef.current) return;

        const ranked = hybridSearch(debouncedQuery, queryEmbedding, indexRef.current.posts, 6);
        setResults(ranked);
        setStatus('done');
      } catch (err) {
        console.error('Busca do blog falhou:', err);
        if (requestId === requestIdRef.current) setStatus('error');
      }
    }

    runSearch();
  }, [debouncedQuery, isActive]);

  const helperText = useMemo(() => {
    switch (status) {
      case 'loading-model':
        return 'Carregando busca inteligente (primeira vez pode levar alguns segundos)...';
      case 'searching':
        return 'Buscando por significado...';
      case 'error':
        return 'Não foi possível carregar a busca agora. Tente novamente.';
      case 'done':
        return results.length > 0
          ? `${results.length} artigo(s) relacionados à sua busca`
          : 'Nenhum artigo relacionado encontrado ainda — estamos publicando mais conteúdo.';
      default:
        return 'Busca por significado, não só palavra-chave — pergunte com suas próprias palavras.';
    }
  }, [status, results.length]);

  return (
    <div>
      <div className="relative max-w-xl mx-auto mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: meu gato não quer comer, o que fazer?"
          className="w-full pl-11 pr-10 py-3.5 rounded-full border border-brand-100 bg-white text-sm text-brand-black placeholder:text-brand-gray/40 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-300"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Limpar busca"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray/40 hover:text-brand-black"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="flex items-center justify-center gap-1.5 text-xs text-brand-gray/50 mb-10 text-center">
        <Sparkles className="w-3.5 h-3.5 text-accent-400" />
        {helperText}
      </p>

      {isActive ? (
        results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : status === 'done' ? (
          <p className="text-brand-gray text-center py-20">
            Nenhum artigo relacionado a &ldquo;{debouncedQuery}&rdquo; ainda.
          </p>
        ) : null
      ) : (
        children
      )}
    </div>
  );
}
