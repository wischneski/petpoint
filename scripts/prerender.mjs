/**
 * SSG Prerender — gera HTML estático no dist/index.html
 * Executa após `vite build` para injetar conteúdo renderizado pelo servidor
 */

import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import react from '@vitejs/plugin-react-swc';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distSsr = path.resolve(root, 'dist-ssr');

// Limpa dist-ssr antes para evitar EPERM no Windows
try { rmSync(distSsr, { recursive: true, force: true }); } catch {
  // Fallback: usa cmd no Windows para forçar remoção de dirs bloqueados
  try { execSync(`cmd /c rmdir /s /q "${distSsr}"`, { stdio: 'ignore' }); } catch { /* ignorar */ }
}

console.log('🔧 Construindo bundle SSR...');

await build({
  root,
  configFile: false,
  plugins: [react()],
  resolve: {
    alias: { '@': root },
  },
  build: {
    ssr: 'entry-server.tsx',
    outDir: path.resolve(root, 'dist-ssr'),
    copyPublicDir: false,
    emptyOutDir: false,
    rollupOptions: {
      output: { format: 'esm' },
    },
    minify: false,
  },
});

console.log('📦 Renderizando HTML estático...');

const { render } = await import(
  pathToFileURL(path.resolve(root, 'dist-ssr/entry-server.js')).href
);

const html = readFileSync(path.resolve(root, 'dist/index.html'), 'utf-8');
const rendered = render('/');
const out = html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
writeFileSync(path.resolve(root, 'dist/index.html'), out);

try { rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true }); } catch { /* ignore Windows ENOTEMPTY — dir will be overwritten on next build */ }

console.log('✅ SSG concluído — dist/index.html atualizado com HTML estático.');
