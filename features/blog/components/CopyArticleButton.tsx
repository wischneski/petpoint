/**
 * components/CopyArticleButton.tsx — Copy Article Text
 *
 * Botão no topo do artigo para copiar rapidamente o conteúdo em texto
 * simples (sem markdown) para a área de transferência.
 */

'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyArticleButtonProps {
  text: string;
}

export function CopyArticleButton({ text }: CopyArticleButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors backdrop-blur-sm"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copiado!' : 'Copiar artigo'}
    </button>
  );
}
