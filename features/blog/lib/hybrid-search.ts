/**
 * lib/hybrid-search.ts — Hybrid Semantic + Lexical Search
 *
 * Combina duas estratégias de ranking sobre o mesmo corpus (os artigos
 * do blog) e funde os resultados via Reciprocal Rank Fusion (RRF):
 *
 * 1. Vetorial (dense retrieval): similaridade de cosseno entre o embedding
 *    da busca e o embedding pré-computado de cada artigo (mesmo modelo
 *    usado em scripts/generate-search-index.mjs) — captura intenção
 *    semântica mesmo sem match exato de palavras.
 * 2. Lexical (BM25): garante que termos técnicos específicos (nomes de
 *    doença, ingredientes, siglas) não se percam na abstração semântica.
 *
 * RRF é preferido a uma média ponderada porque as duas escalas de score
 * (cosseno ∈ [-1,1], BM25 ∈ [0,∞)) não são diretamente comparáveis —
 * RRF funde por posição no ranking, não por magnitude do score.
 */

import type { BlogPostMeta } from '../types';

export interface SearchIndexPost extends BlogPostMeta {
  plainText: string;
  embedding: number[];
}

export interface SearchIndexFile {
  model: string;
  generatedAt: string;
  posts: SearchIndexPost[];
}

export interface SearchResult extends SearchIndexPost {
  score: number;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '') // remove acentos p/ casar termos com/sem acento
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

/** BM25 clássico (Okapi), calculado sob demanda sobre o corpus in-memory */
function bm25Scores(query: string, documents: string[]): number[] {
  const k1 = 1.5;
  const b = 0.75;
  const queryTerms = Array.from(new Set(tokenize(query)));
  const docTokens = documents.map(tokenize);
  const docLengths = docTokens.map((tokens) => tokens.length);
  const avgDocLength = docLengths.reduce((sum, len) => sum + len, 0) / (docLengths.length || 1);
  const totalDocs = documents.length;

  const documentFrequency = new Map<string, number>();
  for (const term of queryTerms) {
    documentFrequency.set(term, docTokens.filter((tokens) => tokens.includes(term)).length);
  }

  return docTokens.map((tokens, docIndex) => {
    let score = 0;
    for (const term of queryTerms) {
      const termFrequency = tokens.filter((t) => t === term).length;
      if (termFrequency === 0) continue;
      const df = documentFrequency.get(term) ?? 0;
      const idf = Math.log(1 + (totalDocs - df + 0.5) / (df + 0.5));
      const denom = termFrequency + k1 * (1 - b + (b * docLengths[docIndex]) / avgDocLength);
      score += idf * ((termFrequency * (k1 + 1)) / denom);
    }
    return score;
  });
}

function ranksFromScores(scores: number[]): number[] {
  const order = scores.map((_, i) => i).sort((a, b) => scores[b] - scores[a]);
  const ranks = new Array(scores.length);
  order.forEach((docIndex, position) => {
    ranks[docIndex] = position + 1;
  });
  return ranks;
}

/** Reciprocal Rank Fusion — funde múltiplos rankings por posição, não por magnitude de score */
function reciprocalRankFusion(scoreLists: number[][], k = 60): number[] {
  const size = scoreLists[0]?.length ?? 0;
  const combined = new Array(size).fill(0);
  for (const scores of scoreLists) {
    const ranks = ranksFromScores(scores);
    ranks.forEach((rank, i) => {
      combined[i] += 1 / (k + rank);
    });
  }
  return combined;
}

export function hybridSearch(
  query: string,
  queryEmbedding: number[],
  posts: SearchIndexPost[],
  topN = 5
): SearchResult[] {
  if (posts.length === 0 || query.trim().length === 0) return [];

  const cosineScores = posts.map((post) => cosineSimilarity(queryEmbedding, post.embedding));
  const lexicalScores = bm25Scores(
    query,
    posts.map((post) => `${post.title} ${post.excerpt} ${post.plainText}`)
  );
  const fused = reciprocalRankFusion([cosineScores, lexicalScores]);

  return posts
    .map((post, i) => ({ ...post, score: fused[i] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}
