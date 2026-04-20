import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync, existsSync } from 'fs';
import { basename } from 'path';

const files = [
  'public/images/fachada.webp',
  'public/images/services/petshop.webp',
  'public/images/services/clinica.webp',
  'public/images/services/estetica.webp',
  'public/images/clinica/interior.webp',
  'public/images/clinica/cirurgia.webp',
  'public/images/clinica/consulta.webp',
  'public/images/petshop/nutricao.webp',
  'public/images/petshop/caes.webp',
  'public/images/petshop/acessorios.webp',
  'public/images/petshop/saude.webp',
  'public/images/petshop/higiene.webp',
  'public/images/petshop/gatos.webp',
  'public/images/petshop/pequenos.webp',
  'public/images/team/vini.webp',
  'public/images/team/nat.webp',
  'public/images/team/val.webp',
  'public/images/team/duda.webp',
  'public/images/team/gustavo.webp',
  'public/images/team/ana-carolina.webp',
  'public/images/meta/logo.webp',
  'public/images/meta/og-image.webp',
];

for (const f of files) {
  if (!existsSync(f)) {
    console.log(`  SKIP ${basename(f)}: file not found`);
    continue;
  }
  const before = statSync(f).size;
  const inputBuf = readFileSync(f);
  const outBuf = await sharp(inputBuf).webp({ quality: 80 }).toBuffer();
  if (outBuf.length < before) {
    writeFileSync(f, outBuf);
    console.log(`✓ ${basename(f)}: ${(before/1024).toFixed(0)}KB → ${(outBuf.length/1024).toFixed(0)}KB (-${Math.round((1 - outBuf.length/before)*100)}%)`);
  } else {
    console.log(`  ${basename(f)}: já otimizado (${(before/1024).toFixed(0)}KB)`);
  }
}
console.log('Done');

// ── Responsive variants (400w + 800w) ────────────────────────────────────────
const responsiveFiles = [
  'public/images/fachada.webp',
  'public/images/services/clinica.webp',
  'public/images/services/estetica.webp',
  'public/images/services/petshop.webp',
  'public/images/clinica/interior.webp',
];

console.log('\nGenerating responsive variants...');
for (const src of responsiveFiles) {
  if (!existsSync(src)) {
    console.log(`  SKIP ${basename(src)}: file not found`);
    continue;
  }
  const inputBuf = readFileSync(src);
  for (const width of [400, 800]) {
    const out = src.replace('.webp', `-${width}.webp`);
    const outBuf = await sharp(inputBuf).resize(width).webp({ quality: 82 }).toBuffer();
    writeFileSync(out, outBuf);
    console.log(`✓ ${basename(out)}: ${(outBuf.length / 1024).toFixed(0)}KB`);
  }
}
console.log('Responsive variants done');
