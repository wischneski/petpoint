/**
 * lib/plain-text.ts — Markdown → Plain Text
 *
 * Converte o MDX bruto do artigo em texto simples, para o botão de
 * "copiar artigo" (o texto colado em outro app deve vir limpo, sem
 * marcações de markdown).
 */

export function markdownToPlainText(markdown: string): string {
  return markdown
    // imagens: remove por completo
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // links: mantém só o texto
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // negrito / itálico
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // código inline
    .replace(/`([^`]+)`/g, '$1')
    // headers
    .replace(/^#{1,6}\s+/gm, '')
    // blockquote
    .replace(/^>\s?/gm, '')
    // linha divisória
    .replace(/^-{3,}\s*$/gm, '')
    // linha separadora de tabela (|---|---|)
    .replace(/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/gm, '')
    // linhas de tabela: pipes viram espaçamento
    // (sem \s* nas bordas — \s inclui \n, e um \s* guloso aqui "engole"
    // a quebra de linha da linha separadora já removida acima, colando
    // a linha de tabela seguinte na anterior sem espaço)
    .replace(/^\|(.+)\|$/gm, (_, row: string) =>
      row.split('|').map((cell) => cell.trim()).filter(Boolean).join('  •  ')
    )
    // marcadores de lista
    .replace(/^\s*[-*+]\s+/gm, '• ')
    // colapsa 3+ quebras de linha em 2
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
