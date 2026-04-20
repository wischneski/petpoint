/**
 * Script de download automático de fontes do Google Fonts
 * Salva os .woff2 em public/fonts/ para self-hosting
 * Node 18+ (fetch nativo)
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.resolve(__dirname, '../public/fonts');

// User-Agent moderno para receber woff2 do Google Fonts
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

mkdirSync(FONTS_DIR, { recursive: true });

async function fetchCss(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Falha ao buscar CSS: ${res.status} ${url}`);
  return res.text();
}

async function downloadWoff2(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Falha ao baixar fonte: ${res.status} ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buffer);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(`  ✓ ${path.basename(dest)} (${kb} KB)`);
}

function extractFontFaces(css) {
  const blocks = [];
  const regex = /@font-face\s*\{([^}]+)\}/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

function parseBlock(block) {
  const family  = (block.match(/font-family:\s*['"]?([^;'"]+)['"]?/) || [])[1]?.trim();
  const style   = (block.match(/font-style:\s*(\w+)/)  || [])[1]?.trim() ?? 'normal';
  const weight  = (block.match(/font-weight:\s*([\d\s]+)/) || [])[1]?.trim();
  const url     = (block.match(/src:[^;]*url\(([^)]+)\)/) || [])[1]?.replace(/['"]/g, '').trim();
  const unicode = (block.match(/unicode-range:\s*([^;]+)/) || [])[1]?.trim();
  return { family, style, weight, url, unicode };
}

// ─── Fontes a baixar ─────────────────────────────────────────────────────────
// Apenas pesos usados no projeto + subset latin (reduz round-trips)
const GOOGLE_URLS = [
  // Inter: 400, 500, 600, 700 (sans — corpo de texto)
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=optional&subset=latin',
  // Playfair Display: 400 normal, 400 italic, 700 italic (serif — títulos)
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=optional&subset=latin',
];

// Quais unicode-range aceitar (somente latin e latin-ext reduzem tamanho)
const ALLOWED_UNICODES = ['latin', 'latin-ext', null];

const allFontFaces = []; // para gerar o @font-face inline depois

for (const googleUrl of GOOGLE_URLS) {
  console.log(`\nBuscando CSS: ${googleUrl}`);
  const css = await fetchCss(googleUrl);
  const blocks = extractFontFaces(css);

  for (const block of blocks) {
    const { family, style, weight, url, unicode } = parseBlock(block);
    if (!url || !family || !weight) continue;

    // Filtrar subsets (só latin e latin-ext)
    const isLatin = !unicode ||
      unicode.includes('U+0000') || // latin
      unicode.includes('U+0100');   // latin-ext
    if (!isLatin) continue;

    // Nome de arquivo: family-weight-style-subset.woff2
    const safeName = family.toLowerCase().replace(/\s+/g, '-');
    const subsetKey = unicode?.includes('U+0100') ? 'latin-ext' : 'latin';
    const styleKey  = style === 'italic' ? 'italic' : 'normal';
    const filename  = `${safeName}-${weight}-${styleKey}-${subsetKey}.woff2`;
    const dest      = path.join(FONTS_DIR, filename);

    await downloadWoff2(url, dest);
    allFontFaces.push({ family, style, weight, filename, unicode });
  }
}

// ─── Gerar CSS do @font-face para copiar no index.html ───────────────────────
console.log('\n\n── @font-face gerado (copiar para index.html) ──────────────────────\n');
for (const { family, style, weight, filename, unicode } of allFontFaces) {
  const unicodeLine = unicode ? `\n      unicode-range: ${unicode};` : '';
  console.log(`    @font-face {
      font-family: '${family}';
      font-style: ${style};
      font-weight: ${weight};
      font-display: optional;
      src: url('/fonts/${filename}') format('woff2');${unicodeLine}
    }`);
}

console.log('\n✅ Download concluído. Arquivos em public/fonts/');
