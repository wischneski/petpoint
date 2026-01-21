# ✅ CHECKLIST DE DEPLOY - PETPOINT

Use este checklist para garantir que todos os passos foram executados antes de fazer o deploy na Hostinger.

---

## 📋 PRÉ-BUILD

### Configurações Obrigatórias

- [ ] **Meta Pixel ID configurado**
  - Arquivo: `index.html` linha 126
  - Descomente as linhas 126-127
  - Substitua `'YOUR_PIXEL_ID'` pelo ID real

- [ ] **Google Analytics ID configurado**
  - Arquivo: `index.html` linha 139
  - Descomente as linhas 147
  - Substitua `'G-XXXXXXXXXX'` pelo ID real

- [ ] **Links de WhatsApp atualizados**
  - `components/Hero.tsx` linha 55: `href="https://wa.me/5548999999999"`
  - `components/Footer.tsx` linha 20: `href="https://wa.me/5548999999999"`
  - Formato: +55 (DDD) + número sem espaços

- [ ] **Informações de contato no Footer**
  - Endereço real (linha 46 do Footer.tsx)
  - Telefone real (linha 50)
  - Instagram handle real (linha 72)

- [ ] **URLs canônicas atualizadas**
  - `index.html`: trocar todas as ocorrências de `www.petpoint.com.br` pelo domínio real
  - `public/sitemap.xml`: atualizar todas as URLs
  - `public/robots.txt`: atualizar linha do Sitemap

- [ ] **Coordenadas GPS reais**
  - `index.html` linha 84-85 (JSON-LD)
  - `index.html` linha 25 (meta geo.position)
  - Use Google Maps para obter as coordenadas exatas

- [ ] **Datas atualizadas no sitemap.xml**
  - Todas as tags `<lastmod>` com data atual (YYYY-MM-DD)

---

## 🖼️ IMAGENS OBRIGATÓRIAS

Criar e adicionar na pasta `public/` ANTES do build:

- [ ] **og-image.jpg**
  - Tamanho: 1200x630px
  - Formato: JPG (otimizado)
  - Conteúdo: Logo + tagline "Medicina de Ponta, Cuidado Real"
  - Cores: #203A8F (azul) e #CF2E78 (pink)

- [ ] **logo.jpg**
  - Tamanho: mínimo 500x500px
  - Formato: JPG ou PNG
  - Logo da PetPoint em alta resolução

- [ ] **apple-touch-icon.png**
  - Tamanho: 180x180px
  - Formato: PNG
  - Logo simplificada para iOS

**Ferramentas recomendadas:**
- Canva: https://www.canva.com/
- Squoosh (otimização): https://squoosh.app/
- TinyPNG (compressão): https://tinypng.com/

---

## 🔨 BUILD

- [ ] **Instalou terser**
  ```bash
  npm install -D terser
  ```

- [ ] **Executou o build sem erros**
  ```bash
  npm run build
  ```
  ✅ Deve gerar pasta `dist/` com sucesso

- [ ] **Verificou warnings**
  - Warning sobre vendor-three é normal (289 KB gzip)
  - Outros warnings devem ser investigados

- [ ] **Verificou conteúdo do dist/**
  ```bash
  ls -la dist/
  ```
  Deve conter:
  - index.html
  - .htaccess
  - robots.txt
  - sitemap.xml
  - favicon.svg
  - og-image.jpg (se criado)
  - logo.jpg (se criado)
  - apple-touch-icon.png (se criado)
  - pasta `assets/` com js e css

---

## 🚀 DEPLOY NA HOSTINGER

### Acesso ao Painel

- [ ] Login na Hostinger realizado
- [ ] Domínio correto selecionado
- [ ] Gerenciador de Arquivos acessado

### Upload dos Arquivos

- [ ] **Backup do site anterior** (se existir)
  - Baixar todos os arquivos de `public_html`
  - Salvar em local seguro

- [ ] **Limpeza do diretório**
  - Deletar TODOS os arquivos de `public_html`
  - Manter apenas `.well-known` (se existir - usado para SSL)

- [ ] **Upload completo**
  - Fazer upload de TODOS os arquivos da pasta `dist/`
  - **Não fazer upload da pasta `dist/`, apenas seu conteúdo**
  - Verificar se `.htaccess` foi enviado (pode estar oculto)

- [ ] **Verificar estrutura no servidor**
  ```
  public_html/
  ├── index.html ✅
  ├── .htaccess ✅
  ├── robots.txt ✅
  ├── sitemap.xml ✅
  ├── favicon.svg ✅
  └── assets/ ✅
  ```

### Permissões

- [ ] **Verificar permissões de arquivos**
  - Diretórios: 755
  - Arquivos: 644
  - .htaccess: 644

---

## 🔒 CONFIGURAÇÕES DE SEGURANÇA

### SSL/HTTPS

- [ ] **Certificado SSL instalado**
  - Hostinger > SSL > Ativar Let's Encrypt
  - Aguardar propagação (5-10 minutos)

- [ ] **Forçar HTTPS habilitado**
  - Descomentar linhas 75-76 do `.htaccess`
  - Testar redirecionamento HTTP → HTTPS

- [ ] **Testar HTTPS funcionando**
  - Acessar `https://seudominio.com`
  - Verificar cadeado verde no navegador
  - Testar todos os links e recursos

---

## ✅ TESTES PÓS-DEPLOY

### Testes Funcionais

- [ ] **Homepage carrega corretamente**
  - Layout intacto
  - Sem erros no console (F12)
  - Hero 3D renderizando

- [ ] **Navegação funcionando**
  - Clique em todos os links do menu
  - Scroll suave para seções
  - Menu mobile funcionando

- [ ] **Links externos funcionam**
  - WhatsApp abre corretamente
  - Instagram abre (se configurado)
  - Links de telefone funcionam em mobile

- [ ] **Imagens carregando**
  - Todas as imagens visíveis
  - Sem broken images (ícone quebrado)
  - Loading lazy funcionando

### Testes de Performance

- [ ] **PageSpeed Insights**
  ```
  https://pagespeed.web.dev/
  ```
  - Mobile: > 85
  - Desktop: > 90
  - LCP: < 2.5s
  - CLS: < 0.1

- [ ] **GTmetrix** (opcional)
  ```
  https://gtmetrix.com/
  ```
  - Grade A ou B
  - Fully Loaded Time: < 3s

### Testes de SEO

- [ ] **robots.txt acessível**
  - Acessar: `https://seudominio.com/robots.txt`
  - Deve mostrar o conteúdo correto

- [ ] **sitemap.xml acessível**
  - Acessar: `https://seudominio.com/sitemap.xml`
  - Deve mostrar XML formatado

- [ ] **Structured Data válido**
  ```
  https://search.google.com/test/rich-results
  ```
  - Inserir URL do site
  - Deve detectar "VeterinaryCare" schema
  - Sem erros

- [ ] **Meta Tags corretas**
  - Usar extensão: "Meta SEO Inspector" (Chrome)
  - Verificar title, description, OG tags

### Testes Mobile

- [ ] **Chrome DevTools - Device Mode**
  - iPhone 12 Pro
  - Samsung Galaxy S21
  - iPad
  - Verificar responsividade

- [ ] **Dispositivos reais** (se possível)
  - iOS Safari
  - Android Chrome
  - Testar touch, scroll, gestos

### Testes de Compatibilidade

- [ ] **Navegadores Desktop**
  - Chrome (última versão)
  - Firefox (última versão)
  - Safari (última versão)
  - Edge (última versão)

- [ ] **Navegadores Mobile**
  - Chrome Mobile
  - Safari iOS
  - Samsung Internet

---

## 🔍 CONFIGURAÇÕES PÓS-DEPLOY

### Google Search Console

- [ ] **Adicionar propriedade**
  ```
  https://search.google.com/search-console
  ```
  - Adicionar domínio
  - Verificar propriedade (via DNS ou HTML)

- [ ] **Submeter sitemap**
  - Sitemaps > Adicionar sitemap
  - URL: `https://seudominio.com/sitemap.xml`

- [ ] **Solicitar indexação**
  - Inspeção de URL
  - Inserir homepage
  - Clicar em "Solicitar indexação"

### Google Analytics

- [ ] **Verificar tracking funcionando**
  - Google Analytics > Relatórios > Tempo real
  - Acessar o site
  - Verificar se sua visita aparece

### Meta Business Suite

- [ ] **Domínio verificado**
  ```
  https://business.facebook.com/
  ```
  - Configurações > Domínios
  - Adicionar e verificar domínio

- [ ] **Pixel testado**
  - Usar extensão "Meta Pixel Helper" (Chrome)
  - Acessar o site
  - Verificar se o pixel está disparando

---

## 📊 MONITORAMENTO

### Primeiras 24h

- [ ] Verificar erros no console do servidor (se disponível)
- [ ] Monitorar Google Analytics
- [ ] Verificar uptime (site está no ar?)
- [ ] Coletar feedback de usuários reais

### Primeira semana

- [ ] Verificar posição no Google Search Console
- [ ] Analisar performance via Analytics
- [ ] Ajustar palavras-chave se necessário
- [ ] Corrigir bugs reportados

---

## 🆘 TROUBLESHOOTING

### Site não carrega (404)

- Verificar se arquivos estão em `public_html` (não em subpasta)
- Verificar se `.htaccess` existe
- Limpar cache do navegador (Ctrl + Shift + R)

### CSS/JS não carrega

- Verificar console do navegador (F12)
- Verificar se caminhos em `index.html` estão corretos
- Verificar permissões de arquivos (644)

### HTTPS não funciona

- Aguardar propagação do SSL (até 24h)
- Verificar se certificado está ativo no painel Hostinger
- Desabilitar forçar HTTPS temporariamente no `.htaccess`

### Performance baixa

- Verificar se compressão Gzip está ativa
- Testar em conexão rápida (não apenas mobile)
- Verificar se imagens foram otimizadas
- Usar CDN se necessário (Cloudflare grátis)

---

## ✅ DEPLOY COMPLETO!

Quando todos os itens estiverem marcados, seu site estará:
- ✅ Otimizado para performance
- ✅ Otimizado para SEO
- ✅ Seguro e protegido
- ✅ Pronto para conversões

**Parabéns! 🎉**

---

**Última atualização:** 13 de Janeiro de 2025
