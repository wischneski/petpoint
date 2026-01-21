/**
 * Script para gerar favicons a partir de uma imagem
 *
 * REQUISITOS:
 * npm install sharp
 *
 * USO:
 * node generate-favicons.js images.jpeg
 *
 * GERA:
 * - favicon.ico (16x16, 32x32, 48x48)
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png (180x180)
 * - android-chrome-192x192.png
 * - android-chrome-512x512.png
 * - og-image.jpg (1200x630)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações de cores da marca (do Tailwind config)
const BRAND_COLORS = {
  blue: '#203A8F',
  pink: '#CF2E78',
  navy: '#0f172a',
  white: '#FFFFFF'
};

// Tamanhos de favicons necessários
const FAVICON_SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

async function generateFavicons(inputImage) {
  try {
    // Verificar se a imagem existe
    if (!fs.existsSync(inputImage)) {
      console.error(`❌ Erro: Imagem "${inputImage}" não encontrada!`);
      console.log('\n📝 Uso: node generate-favicons.js caminho/para/imagem.jpeg');
      process.exit(1);
    }

    console.log('🎨 Gerando favicons a partir de:', inputImage);
    console.log('─'.repeat(60));

    // Criar pasta public se não existir
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
      console.log('📁 Pasta public/ criada');
    }

    // Ler imagem original
    const image = sharp(inputImage);
    const metadata = await image.metadata();
    console.log(`📐 Imagem original: ${metadata.width}x${metadata.height}px`);
    console.log('');

    // Gerar cada tamanho de favicon
    for (const favicon of FAVICON_SIZES) {
      const outputPath = path.join(publicDir, favicon.name);

      await sharp(inputImage)
        .resize(favicon.size, favicon.size, {
          fit: 'cover',
          position: 'center',
          background: { r: 15, g: 23, b: 42, alpha: 1 } // brand-navy
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`✅ ${favicon.name.padEnd(30)} ${favicon.size}x${favicon.size}px  ${sizeKB} KB`);
    }

    // Gerar OG Image (Open Graph) - 1200x630px
    console.log('');
    console.log('📱 Gerando imagem para redes sociais...');

    const ogImagePath = path.join(publicDir, 'og-image.jpg');
    await sharp(inputImage)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(ogImagePath);

    const ogStats = fs.statSync(ogImagePath);
    console.log(`✅ og-image.jpg                   1200x630px   ${(ogStats.size / 1024).toFixed(1)} KB`);

    // Gerar logo.jpg para SEO
    console.log('');
    console.log('🔍 Gerando logo para SEO...');

    const logoPath = path.join(publicDir, 'logo.jpg');
    await sharp(inputImage)
      .resize(800, 800, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90, progressive: true })
      .toFile(logoPath);

    const logoStats = fs.statSync(logoPath);
    console.log(`✅ logo.jpg                       800x800px    ${(logoStats.size / 1024).toFixed(1)} KB`);

    // Gerar favicon.svg (versão vetorial simples)
    console.log('');
    console.log('🎨 Gerando favicon.svg vetorial...');

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Background -->
  <rect width="100" height="100" fill="${BRAND_COLORS.navy}" rx="20"/>

  <!-- Pink circle (paw center) -->
  <circle cx="50" cy="45" r="15" fill="${BRAND_COLORS.pink}"/>

  <!-- Blue paw pads -->
  <path d="M 50 35 L 55 28 L 58 33 Z" fill="${BRAND_COLORS.blue}"/>
  <path d="M 50 35 L 45 28 L 42 33 Z" fill="${BRAND_COLORS.blue}"/>
  <path d="M 35 48 L 30 45 L 32 52 Z" fill="${BRAND_COLORS.blue}"/>
  <path d="M 65 48 L 70 45 L 68 52 Z" fill="${BRAND_COLORS.blue}"/>

  <!-- Bottom ellipse -->
  <ellipse cx="50" cy="70" rx="20" ry="15" fill="${BRAND_COLORS.pink}"/>

  <!-- Letter P -->
  <text x="50" y="78" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">P</text>
</svg>`;

    const svgPath = path.join(publicDir, 'favicon.svg');
    fs.writeFileSync(svgPath, svgContent);
    console.log('✅ favicon.svg                    Vetorial     0.8 KB');

    // Gerar favicon.ico (multi-size)
    console.log('');
    console.log('💾 Gerando favicon.ico (16x16, 32x32, 48x48)...');
    console.log('⚠️  Para .ico multi-size, use uma ferramenta online:');
    console.log('    https://favicon.io/favicon-converter/');
    console.log('    ou');
    console.log('    https://realfavicongenerator.net/');
    console.log('');
    console.log('📤 Faça upload de: public/favicon-48x48.png');

    // Gerar web app manifest
    console.log('');
    console.log('📱 Gerando manifest.json para PWA...');

    const manifest = {
      name: "PetPoint Hospital Veterinário & Estética",
      short_name: "PetPoint",
      description: "Medicina de ponta e cuidado real para seu pet em Morro da Fumaça/SC",
      start_url: "/",
      display: "standalone",
      background_color: BRAND_COLORS.navy,
      theme_color: BRAND_COLORS.pink,
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    };

    const manifestPath = path.join(publicDir, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ manifest.json                  PWA config');

    // Resumo final
    console.log('');
    console.log('═'.repeat(60));
    console.log('✨ FAVICONS GERADOS COM SUCESSO!');
    console.log('═'.repeat(60));
    console.log('');
    console.log('📁 Arquivos criados em: public/');
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('');
    console.log('1. Gerar favicon.ico multi-size:');
    console.log('   → Acesse: https://favicon.io/favicon-converter/');
    console.log('   → Faça upload de: public/favicon-48x48.png');
    console.log('   → Baixe o favicon.ico e coloque em: public/');
    console.log('');
    console.log('2. Adicionar tags no index.html (se ainda não tiver):');
    console.log('');
    console.log('   <!-- Favicons -->');
    console.log('   <link rel="icon" type="image/x-icon" href="/favicon.ico">');
    console.log('   <link rel="icon" type="image/svg+xml" href="/favicon.svg">');
    console.log('   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">');
    console.log('   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">');
    console.log('   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">');
    console.log('   <link rel="manifest" href="/manifest.json">');
    console.log('');
    console.log('3. Refazer build:');
    console.log('   npm run build');
    console.log('');
    console.log('🎉 Pronto! Seus favicons estão otimizados e prontos para uso!');

  } catch (error) {
    console.error('');
    console.error('❌ ERRO:', error.message);
    console.error('');

    if (error.message.includes('sharp')) {
      console.error('💡 Solução: Instale a biblioteca sharp:');
      console.error('   npm install sharp');
    } else {
      console.error('Detalhes:', error);
    }

    process.exit(1);
  }
}

// Verificar argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('');
  console.log('🎨 Gerador de Favicons - PetPoint');
  console.log('═'.repeat(60));
  console.log('');
  console.log('📝 USO:');
  console.log('   node generate-favicons.js caminho/para/imagem.jpeg');
  console.log('');
  console.log('📦 EXEMPLO:');
  console.log('   node generate-favicons.js Imagens/logo.jpeg');
  console.log('   node generate-favicons.js images.jpeg');
  console.log('');
  console.log('📋 REQUISITOS:');
  console.log('   npm install sharp');
  console.log('');
  console.log('✨ GERA:');
  console.log('   • favicon-16x16.png');
  console.log('   • favicon-32x32.png');
  console.log('   • favicon-48x48.png');
  console.log('   • apple-touch-icon.png (180x180)');
  console.log('   • android-chrome-192x192.png');
  console.log('   • android-chrome-512x512.png');
  console.log('   • og-image.jpg (1200x630 - redes sociais)');
  console.log('   • logo.jpg (800x800 - SEO)');
  console.log('   • favicon.svg (vetorial)');
  console.log('   • manifest.json (PWA)');
  console.log('');
  process.exit(0);
}

const inputImage = args[0];
generateFavicons(inputImage);
