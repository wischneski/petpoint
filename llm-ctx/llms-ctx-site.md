# CONTEXTO TÉCNICO PARA DESENVOLVIMENTO WEB OTIMIZADO
# Documento de referência para LLMs - Boas práticas de performance, SEO e arquitetura
# Última atualização: Dezembro 2025

================================================================================
## 1. MÉTRICAS CORE WEB VITALS - TARGETS OBRIGATÓRIOS
================================================================================

### 1.1 First Contentful Paint (FCP)
- Mobile: < 1.8s (verde), 1.8-3s (laranja), > 3s (vermelho)
- Desktop: < 0.9s (verde), 0.9-1.6s (laranja), > 1.6s (vermelho)
- O que mede: Tempo até o primeiro texto/imagem ser renderizado

### 1.2 Largest Contentful Paint (LCP)
- Target: < 2.5s (verde), 2.5-4s (laranja), > 4s (vermelho)
- O que mede: Tempo até o maior elemento visível ser renderizado
- Subpartes do LCP (otimize cada uma):
  * TTFB (Time to First Byte): ~40% do tempo - otimize servidor/CDN
  * Resource Load Delay: < 10% - use preload com fetchpriority="high"
  * Resource Load Duration: ~40% - comprima imagens, use CDN
  * Element Render Delay: < 10% - reduza CSS bloqueante

### 1.3 Cumulative Layout Shift (CLS)
- Target: < 0.1 (verde), 0.1-0.25 (laranja), > 0.25 (vermelho)
- Sempre defina width/height em imagens e iframes
- Reserve espaço para conteúdo dinâmico (ads, embeds)

### 1.4 Interaction to Next Paint (INP)
- Target: < 200ms (verde), 200-500ms (laranja), > 500ms (vermelho)
- Evite long tasks (> 50ms) no main thread
- Use requestIdleCallback para tarefas não críticas

================================================================================
## 2. ESTRUTURA HTML OTIMIZADA - ORDEM DOS ELEMENTOS NO <HEAD>
================================================================================

A ordem dos elementos no <head> impacta diretamente o carregamento:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- 1. CHARSET E VIEWPORT - Sempre primeiro -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 2. PRECONNECTS - Estabelece conexão antecipada com domínios externos -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- 3. PRELOADS CRÍTICOS - Recursos necessários para LCP -->
  <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" fetchpriority="high">
  
  <!-- 4. FONTES COM DISPLAY=SWAP - Evita FOIT (Flash of Invisible Text) -->
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=...&display=swap" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=...&display=swap"></noscript>
  
  <!-- 5. CSS CRÍTICO INLINE - Apenas estilos above-the-fold -->
  <style>
    /* ~5-10KB máximo - Header, Hero, cores principais, tipografia base */
  </style>
  
  <!-- 6. META TAGS SEO -->
  <title>Título da Página | Marca</title>
  <meta name="description" content="Descrição de 150-160 caracteres">
  <link rel="canonical" href="https://dominio.com/pagina">
  
  <!-- 7. OPEN GRAPH E TWITTER CARDS -->
  <meta property="og:title" content="Título">
  <meta property="og:description" content="Descrição">
  <meta property="og:image" content="https://dominio.com/og-image.jpg">
  <meta property="og:url" content="https://dominio.com/pagina">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- 8. FAVICON -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- 9. ANALYTICS - OBRIGATÓRIO NO HEAD (requisito Meta/Google) -->
  <!-- Usar requestIdleCallback para adiar inicialização -->
  <script>
    window.requestIdleCallback ? 
      requestIdleCallback(function() { /* init analytics */ }, {timeout: 3000}) :
      setTimeout(function() { /* init analytics */ }, 2000);
  </script>
</head>
```

================================================================================
## 3. ESTRATÉGIAS DE CARREGAMENTO DE CSS
================================================================================

### 3.1 CSS Crítico Inline
- Extraia e inline CSS para elementos above-the-fold
- Limite: 5-10KB (gzipped ~2-4KB)
- Inclua: reset básico, cores da marca, tipografia, header, hero, layout principal

### 3.2 CSS Não-Crítico Assíncrono
```html
<!-- Técnica: preload + onload -->
<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles.css"></noscript>
```

### 3.3 Plugin Vite para CSS Assíncrono
```typescript
function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">
         <noscript><link rel="stylesheet" href="$1"></noscript>`
      );
    }
  };
}
```

================================================================================
## 4. OTIMIZAÇÃO DE IMAGENS
================================================================================

### 4.1 Formatos Recomendados (ordem de preferência)
1. AVIF - Melhor compressão, suporte crescente
2. WebP - Excelente compressão, amplo suporte
3. JPEG - Fallback para navegadores antigos

### 4.2 Imagem LCP - Tratamento Especial
```html
<!-- SEMPRE preload a imagem LCP no <head> -->
<link rel="preload" as="image" href="/images/hero.webp" type="image/webp" fetchpriority="high">

<!-- No componente, use loading="eager" (não lazy) -->
<img src="/images/hero.webp" alt="..." width="800" height="600" fetchpriority="high">
```

### 4.3 Imagens Below-the-fold
```html
<img src="/image.webp" alt="..." loading="lazy" decoding="async" width="400" height="300">
```

### 4.4 Responsive Images
```html
<picture>
  <source srcset="/image-400.avif 400w, /image-800.avif 800w" type="image/avif">
  <source srcset="/image-400.webp 400w, /image-800.webp 800w" type="image/webp">
  <img src="/image-800.jpg" alt="..." sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
</picture>
```

### 4.5 Dimensões Obrigatórias
- SEMPRE defina width e height para evitar CLS
- Use aspect-ratio no CSS como fallback

================================================================================
## 5. OTIMIZAÇÃO DE JAVASCRIPT
================================================================================

### 5.1 Code Splitting com Vite/Webpack
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom'],
        'vendor-router': ['react-router-dom'],
        'vendor-motion': ['framer-motion'], // Separar libs pesadas
        'vendor-icons': ['lucide-react']
      }
    }
  }
}
```

### 5.2 Lazy Loading de Componentes (React)
```typescript
// Lazy load de páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lazy load de componentes pesados
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

// Uso com Suspense
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</Suspense>
```

### 5.3 Evitar Bibliotecas Pesadas no Bundle Inicial
- framer-motion (~116KB) - Use CSS animations para componentes da home
- moment.js (~300KB) - Use date-fns ou dayjs
- lodash (~70KB) - Importe funções específicas: `import debounce from 'lodash/debounce'`

### 5.4 CSS Animations vs JavaScript Animations
```css
/* PREFERIR: CSS puro para animações simples */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Intersection Observer para trigger */
.animate-on-scroll {
  opacity: 0;
}
.animate-on-scroll.visible {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

```typescript
// Hook para animação on scroll
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);
```

================================================================================
## 6. FONTES WEB
================================================================================

### 6.1 Google Fonts Otimizado
```html
<!-- Preconnect ANTES de carregar as fontes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- SEMPRE adicionar &display=swap -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 6.2 Font Display Options
- `swap`: Texto visível imediatamente, fonte troca quando carrega (RECOMENDADO)
- `optional`: Usa fonte do sistema se não carregar em ~100ms
- `fallback`: Texto invisível por ~100ms, depois fallback
- `block`: Texto invisível até fonte carregar (EVITAR)

### 6.3 Subset de Fontes (reduz tamanho)
```html
<!-- Apenas caracteres latinos -->
<link href="...&subset=latin&display=swap" rel="stylesheet">
```

### 6.4 Self-hosting (melhor performance)
- Baixe as fontes e hospede localmente
- Use font-display: swap no @font-face
- Preload apenas os pesos usados above-the-fold

================================================================================
## 7. ARQUITETURA DE PROJETO REACT/VITE
================================================================================

### 7.1 Estrutura de Pastas Recomendada
```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes de UI base (Button, Input, Modal)
│   └── layout/          # Header, Footer, Layout
├── pages/               # Páginas/rotas (lazy loaded)
├── hooks/               # Custom hooks
├── services/            # API calls, serviços externos
├── utils/               # Funções utilitárias
├── styles/              # CSS global, variáveis
├── assets/              # Imagens, ícones (processados pelo bundler)
├── types/               # TypeScript types/interfaces
└── constants/           # Constantes, configurações
public/
├── images/              # Imagens estáticas (não processadas)
├── robots.txt           # Instruções para crawlers
├── sitemap.xml          # Mapa do site para SEO
├── .htaccess            # Configurações Apache (se aplicável)
└── favicon.svg          # Favicon
```

### 7.2 Configuração Vite Otimizada
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    asyncCssPlugin(),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react'],
        }
      }
    }
  },
  server: {
    open: true,
  }
});
```

================================================================================
## 8. SEO TÉCNICO
================================================================================

### 8.1 robots.txt
```
User-agent: *
Allow: /

Sitemap: https://seudominio.com/sitemap.xml
```

### 8.2 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seudominio.com/</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seudominio.com/servicos</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 8.3 Meta Tags Essenciais
```html
<title>Título Principal | Nome da Marca</title>
<meta name="description" content="Descrição de 150-160 caracteres com palavras-chave naturais">
<meta name="keywords" content="palavra1, palavra2, palavra3">
<link rel="canonical" href="https://seudominio.com/pagina-atual">

<!-- Indexação -->
<meta name="robots" content="index, follow">

<!-- Geolocalização (negócios locais) -->
<meta name="geo.region" content="BR-SP">
<meta name="geo.placename" content="São Paulo">
```

### 8.4 Dados Estruturados (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nome do Negócio",
  "image": "https://seudominio.com/logo.jpg",
  "telephone": "+55-11-99999-9999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01234-567",
    "addressCountry": "BR"
  },
  "url": "https://seudominio.com",
  "priceRange": "$$"
}
</script>
```

================================================================================
## 9. CACHE E COMPRESSÃO (SERVIDOR)
================================================================================

### 9.1 .htaccess para Apache
```apache
# Habilitar compressão Gzip/Brotli
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript application/json image/svg+xml
</IfModule>

# Cache de longo prazo para assets com hash
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Assets com hash no nome (cache 1 ano)
  <FilesMatch "\.(js|css|woff2|woff|ttf|avif|webp|png|jpg|jpeg|gif|svg|ico)$">
    ExpiresDefault "access plus 1 year"
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # HTML (cache curto)
  <FilesMatch "\.html$">
    ExpiresDefault "access plus 1 hour"
    Header set Cache-Control "public, max-age=3600, must-revalidate"
  </FilesMatch>
</IfModule>

# Fallback SPA
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 9.2 Headers de Segurança
```apache
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

================================================================================
## 10. ANALYTICS E TRACKING
================================================================================

### 10.1 Meta Pixel (Facebook/Instagram)
```html
<!-- OBRIGATÓRIO: Manter no <head> -->
<script>
  window.requestIdleCallback ? 
    requestIdleCallback(initMetaPixel, {timeout: 3000}) :
    setTimeout(initMetaPixel, 2000);

  function initMetaPixel() {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'SEU_PIXEL_ID');
    fbq('track', 'PageView');
  }
</script>
```

### 10.2 Google Analytics 4
```html
<script>
  window.requestIdleCallback ? 
    requestIdleCallback(initGA, {timeout: 3000}) :
    setTimeout(initGA, 2000);

  function initGA() {
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    s.async = true;
    document.head.appendChild(s);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  }
</script>
```

### 10.3 Eventos de Conversão
```typescript
// WhatsApp click tracking
const handleWhatsAppClick = () => {
  // Meta Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Contact', { method: 'whatsapp' });
  }
  
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact', { method: 'whatsapp' });
  }
  
  window.open(whatsappUrl, '_blank');
};
```

================================================================================
## 11. ACESSIBILIDADE (A11Y)
================================================================================

### 11.1 Semântica HTML
- Use tags semânticas: <header>, <nav>, <main>, <section>, <article>, <footer>
- Hierarquia de headings: h1 > h2 > h3 (um único h1 por página)
- Botões para ações, links para navegação

### 11.2 ARIA quando necessário
```html
<button aria-label="Abrir menu" aria-expanded="false">
  <MenuIcon />
</button>

<nav aria-label="Menu principal">
  ...
</nav>

<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Título do Modal</h2>
</div>
```

### 11.3 Contraste e Cores
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande (18px+)
- Não dependa apenas de cor para transmitir informação

### 11.4 Foco e Navegação por Teclado
```css
/* Nunca remova outline sem substituir */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Alternativa visualmente agradável */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.5);
}
```

================================================================================
## 12. CHECKLIST PRÉ-DEPLOY
================================================================================

### Performance
- [ ] Lighthouse Performance Score > 90 (mobile)
- [ ] FCP < 1.8s (mobile)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Imagem LCP com preload e fetchpriority="high"
- [ ] CSS crítico inline (5-10KB max)
- [ ] CSS não-crítico carregado assíncrono
- [ ] JavaScript dividido em chunks (vendor, pages)
- [ ] Lazy loading para imagens below-the-fold
- [ ] Fontes com display=swap

### SEO
- [ ] Meta title único (50-60 caracteres)
- [ ] Meta description única (150-160 caracteres)
- [ ] Canonical URL definida
- [ ] Open Graph tags configuradas
- [ ] robots.txt válido
- [ ] sitemap.xml gerado
- [ ] Dados estruturados JSON-LD

### Técnico
- [ ] HTTPS ativo
- [ ] Gzip/Brotli habilitado
- [ ] Cache headers configurados
- [ ] 404 page configurada
- [ ] Redirects funcionando
- [ ] Analytics instalado e testado

### Acessibilidade
- [ ] Todas imagens com alt text
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funcional
- [ ] Labels em formulários
- [ ] Hierarquia de headings correta

================================================================================
## 13. FERRAMENTAS DE DIAGNÓSTICO
================================================================================

- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools > Lighthouse
- Chrome DevTools > Performance (gravação de timeline)
- Chrome DevTools > Network (waterfall de recursos)
- web.dev/measure
- Rich Results Test (dados estruturados): https://search.google.com/test/rich-results

================================================================================
## 14. REFERÊNCIAS OFICIAIS
================================================================================

- Core Web Vitals: https://web.dev/vitals/
- Optimize LCP: https://web.dev/optimize-lcp/
- Optimize CLS: https://web.dev/optimize-cls/
- Optimize INP: https://web.dev/optimize-inp/
- Chrome Lighthouse: https://developer.chrome.com/docs/lighthouse/
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/docs

================================================================================
# FIM DO DOCUMENTO
================================================================================
