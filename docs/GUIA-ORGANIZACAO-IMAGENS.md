# 📸 GUIA DE ORGANIZAÇÃO DE IMAGENS - PETPOINT

## 🎯 Visão Geral

Este guia explica a estrutura completa de imagens do projeto, como substituir as mockadas pelas reais, e boas práticas para manter organizado.

---

## 📁 Estrutura de Pastas

```
public/
├── favicon.svg                 ← Favicon vetorial (navegadores modernos)
├── favicon-16x16.png           ← Favicon 16x16 (navegadores)
├── favicon-32x32.png           ← Favicon 32x32 (navegadores)
├── favicon-48x48.png           ← Favicon 48x48 (base para .ico)
├── apple-touch-icon.png        ← Ícone iOS/iPad (180x180)
├── android-chrome-192x192.png  ← Ícone Android (192x192)
├── android-chrome-512x512.png  ← Ícone Android splash (512x512)
├── manifest.json               ← PWA config
│
└── images/
    ├── team/                   ← 📸 Fotos da equipe (5 membros)
    │   ├── README.md           ← Instruções detalhadas
    │   ├── ana-silva.webp      ← [FUTURO] Foto real
    │   ├── roberto-mendes.webp ← [FUTURO] Foto real
    │   ├── carolina-wu.webp    ← [FUTURO] Foto real
    │   ├── ricardo-viana.webp  ← [FUTURO] Foto real
    │   └── sofia-martinez.webp ← [FUTURO] Foto real
    │
    ├── structure/              ← 🏥 Fotos da clínica/estrutura
    │   ├── README.md           ← Instruções detalhadas
    │   ├── fachada.webp        ← [FUTURO] Foto real
    │   ├── recepcao.webp       ← [FUTURO] Foto real
    │   ├── consultorio.webp    ← [FUTURO] Foto real
    │   ├── centro-cirurgico.webp
    │   ├── banho-tosa.webp
    │   └── petshop.webp
    │
    ├── services/               ← 💼 Fotos dos serviços
    │   ├── README.md           ← Instruções detalhadas
    │   ├── clinica-medica.webp ← [FUTURO] Foto real
    │   ├── estetica.webp       ← [FUTURO] Foto real
    │   └── petshop.webp        ← [FUTURO] Foto real
    │
    ├── blog/                   ← 📰 Fotos dos artigos
    │   ├── README.md           ← Instruções detalhadas
    │   ├── longevidade-prevencao.webp
    │   ├── linguagem-felinos.webp
    │   └── alimentacao-natural.webp
    │
    └── meta/                   ← 🎯 SEO e redes sociais
        ├── README.md           ← Instruções detalhadas
        ├── og-image.jpg        ← Open Graph 1200x630 ✅
        └── logo.jpg            ← Logo SEO 800x800 ✅
```

---

## 🎨 Decisões de Design

### Por que Favicons na Raiz?
- ✅ Convenção web padrão
- ✅ Crawlers esperam `/favicon.ico`
- ✅ Simplifica referências no HTML
- ✅ Melhor compatibilidade com ferramentas SEO

### Por que Organizar Outras Imagens?
- ✅ Facilita manutenção
- ✅ Separa por contexto de uso
- ✅ Preparado para crescimento futuro
- ✅ Mais fácil encontrar e substituir

---

## 📊 Status Atual das Imagens

### ✅ Pronto para Uso
- **Favicons:** 7 tamanhos gerados automaticamente
- **Manifest.json:** PWA configurado
- **og-image.jpg:** Gerado a partir do logo (básico)
- **logo.jpg:** Gerado a partir do logo (básico)

### ⏳ Aguardando Fotos Reais
- **Equipe:** 5 fotos profissionais (Unsplash atualmente)
- **Estrutura:** 6-10 fotos da clínica (Unsplash atualmente)
- **Serviços:** 3 fotos contextualizadas (Unsplash atualmente)
- **Blog:** 3 fotos de artigos (Unsplash atualmente)

---

## 🔄 COMO SUBSTITUIR IMAGENS MOCKADAS

### 📸 PRIORIDADE 1: Equipe (Alto Impacto)

**Onde estão agora:** Componente usa URLs do Unsplash
**Onde devem ir:** `public/images/team/`

**Passo a passo:**

1. **Tirar/Selecionar Fotos**
   - 5 fotos profissionais dos veterinários
   - Leia: `public/images/team/README.md`
   - Especificações: 800x1000px, WebP, < 150KB

2. **Processar Fotos**
   ```bash
   # Redimensionar para 800x1000px
   # Converter para WebP
   # Otimizar para < 150KB
   ```

3. **Nomear e Colocar**
   ```
   public/images/team/ana-silva.webp
   public/images/team/roberto-mendes.webp
   public/images/team/carolina-wu.webp
   public/images/team/ricardo-viana.webp
   public/images/team/sofia-martinez.webp
   ```

4. **Atualizar Componente**
   Edite: `components/Team.tsx`

   **ANTES:**
   ```typescript
   image: "https://images.unsplash.com/photo-..."
   ```

   **DEPOIS:**
   ```typescript
   image: "/images/team/ana-silva.webp"
   ```

5. **Build e Test**
   ```bash
   npm run build
   npm run preview
   ```

---

### 🏥 PRIORIDADE 2: Serviços (Alto Impacto)

**Onde estão agora:** `components/Services.tsx` usa URLs do Unsplash
**Onde devem ir:** `public/images/services/`

**Passo a passo:**

1. **Tirar/Selecionar Fotos**
   - 3 fotos: clínica-medica, estetica, petshop
   - Leia: `public/images/services/README.md`
   - Especificações: 1200x800px, WebP, < 200KB

2. **Processar e Nomear**
   ```
   public/images/services/clinica-medica.webp
   public/images/services/estetica.webp
   public/images/services/petshop.webp
   ```

3. **Atualizar Componente**
   Edite: `components/Services.tsx` (linha ~6)

   ```typescript
   const services = [
     {
       id: 1,
       image: "/images/services/clinica-medica.webp" // ← TROCAR
     },
     // ... fazer o mesmo para os outros 2
   ];
   ```

---

### 🏥 PRIORIDADE 3: Estrutura (Médio Impacto)

**Onde usar:** Nova seção "Nossa Estrutura" ou no About

**Passo a passo:**

1. **Tirar Fotos**
   - Mínimo: fachada, recepção, consultório
   - Leia: `public/images/structure/README.md`
   - Especificações: 1920x1080px, WebP, < 300KB

2. **Colocar em:**
   ```
   public/images/structure/fachada.webp
   public/images/structure/recepcao.webp
   public/images/structure/consultorio.webp
   ```

3. **Criar Componente (Opcional)**
   Crie: `components/Structure.tsx`

   ```typescript
   const Structure: React.FC = () => {
     const images = [
       { src: '/images/structure/fachada.webp', title: 'Nossa Fachada' },
       { src: '/images/structure/recepcao.webp', title: 'Recepção' },
       // ...
     ];

     return (
       <section className="py-32">
         <h2>Nossa Estrutura</h2>
         <div className="grid grid-cols-3 gap-8">
           {images.map(img => (
             <img src={img.src} alt={img.title} loading="lazy" />
           ))}
         </div>
       </section>
     );
   };
   export default Structure;
   ```

4. **Adicionar no App.tsx**
   ```typescript
   const Structure = lazy(() => import('./components/Structure'));

   // No JSX:
   <Suspense fallback={<LoadingSection />}>
     <Structure />
   </Suspense>
   ```

---

### 📰 PRIORIDADE 4: Blog (Baixo Impacto)

**Onde estão agora:** `components/Blog.tsx` usa URLs do Unsplash
**Onde devem ir:** `public/images/blog/`

**Nota:** Blog é placeholder atualmente. Pode deixar Unsplash até criar conteúdo real.

**Quando criar blog real:**
1. Escrever artigos de verdade
2. Selecionar fotos específicas para cada artigo
3. Colocar em `public/images/blog/`
4. Atualizar `components/Blog.tsx`

---

## 🛠️ FERRAMENTAS RECOMENDADAS

### Redimensionamento e Conversão
- **Squoosh:** https://squoosh.app/ (online, grátis, excelente)
- **TinyPNG:** https://tinypng.com/ (compressão inteligente)
- **CloudConvert:** https://cloudconvert.com/jpg-to-webp (batch conversion)

### Otimização em Lote (Linha de Comando)
```bash
# Instalar cwebp (Google)
npm install -g cwebp

# Converter todas as JPG para WebP
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

### Edição de Fotos
- **Canva:** https://www.canva.com/ (fácil, templates prontos)
- **Photopea:** https://www.photopea.com/ (Photoshop online grátis)
- **GIMP:** https://www.gimp.org/ (gratuito, desktop)
- **Photoshop/Lightroom:** (profissional, pago)

---

## 📐 ESPECIFICAÇÕES RÁPIDAS

| Tipo | Tamanho | Formato | Peso Máx | Prioridade |
|------|---------|---------|----------|------------|
| **Equipe** | 800x1000px | WebP | 150 KB | 🔴 Alta |
| **Serviços** | 1200x800px | WebP | 200 KB | 🔴 Alta |
| **Estrutura** | 1920x1080px | WebP | 300 KB | 🟡 Média |
| **Blog** | 1200x900px | WebP | 150 KB | 🟢 Baixa |
| **OG Image** | 1200x630px | JPEG | 300 KB | 🟡 Média |
| **Logo** | 800x800px | JPEG/PNG | 100 KB | 🟡 Média |

---

## 🎯 FLUXO DE TRABALHO IDEAL

### 1. Sessão de Fotos Profissional
**Recomendação:** Contratar fotógrafo corporativo

**Checklist para sessão:**
- [ ] 5 fotos da equipe (jaleco, fundo neutro)
- [ ] 10-15 fotos da estrutura (todos ambientes)
- [ ] 5-10 fotos dos serviços em ação
- [ ] Fotos de detalhes (equipamentos, produtos)
- [ ] Fotos externas (fachada, entrada)

**Custo estimado:** R$ 800-2000 (sessão completa de 3-4h)

### 2. Seleção e Organização
- Escolher as melhores fotos
- Separar por categoria
- Renomear seguindo convenção

### 3. Processamento
- Redimensionar para tamanhos corretos
- Ajustar brilho/contraste
- Converter para WebP
- Otimizar tamanho

### 4. Deploy
- Colocar em pastas corretas (`public/images/...`)
- Atualizar componentes React
- Refazer build: `npm run build`
- Testar localmente: `npm run preview`
- Deploy para Hostinger
- Testar em produção

---

## ⚠️ IMPORTANTE: Não Esquecer!

### Após Substituir Qualquer Imagem:

1. **Refazer build**
   ```bash
   npm run build
   ```

2. **Verificar `dist/images/`**
   ```bash
   ls -la dist/images/team/
   ls -la dist/images/services/
   # etc...
   ```

3. **Testar localmente**
   ```bash
   npm run preview
   # Abrir http://localhost:4173
   ```

4. **Fazer deploy**
   - Upload do conteúdo de `dist/` para Hostinger

5. **Limpar cache**
   - Navegador: Ctrl + Shift + R
   - Facebook Debugger (para OG image)
   - Aguardar propagação (5-30 min)

---

## 📋 CHECKLIST GERAL

### Imagens Essenciais (Fazer Primeiro)
- [ ] 5 fotos da equipe → `public/images/team/`
- [ ] 3 fotos dos serviços → `public/images/services/`
- [ ] Atualizar `components/Team.tsx`
- [ ] Atualizar `components/Services.tsx`
- [ ] Refazer build
- [ ] Deploy

### Imagens Complementares (Fazer Depois)
- [ ] 6-10 fotos da estrutura → `public/images/structure/`
- [ ] Criar componente `Structure.tsx`
- [ ] Adicionar ao `App.tsx`
- [ ] Refazer build
- [ ] Deploy

### Imagens de Baixa Prioridade (Quando Tiver Tempo)
- [ ] 3 fotos do blog → `public/images/blog/`
- [ ] Atualizar `components/Blog.tsx`
- [ ] Criar OG image personalizado com Canva
- [ ] Substituir `public/images/meta/og-image.jpg`
- [ ] Refazer build
- [ ] Testar compartilhamento no WhatsApp

---

## 🚀 PRÓXIMOS PASSOS

1. **Leia os READMEs** de cada pasta em `public/images/`
   - `team/README.md` - Diretrizes para fotos da equipe
   - `structure/README.md` - Diretrizes para fotos da clínica
   - `services/README.md` - Diretrizes para fotos dos serviços
   - `blog/README.md` - Diretrizes para fotos de artigos
   - `meta/README.md` - Diretrizes para SEO/OG images

2. **Priorize:** Equipe e Serviços primeiro (alto impacto visual)

3. **Programe sessão de fotos** ou selecione do banco de imagens

4. **Siga o fluxo:** Fotos → Processamento → Deploy → Teste

---

## 🆘 PROBLEMAS COMUNS

### Imagem não aparece no site
- Verificar se está em `public/images/...` (não em `dist/`)
- Verificar se fez build: `npm run build`
- Verificar caminho no componente: `/images/...` (barra inicial)
- Limpar cache: Ctrl + Shift + R

### Imagem muito pesada (site lento)
- Reduzir qualidade do WebP: `cwebp -q 75 ...`
- Usar TinyPNG: https://tinypng.com/
- Verificar se dimensões estão corretas

### Imagem distorcida
- Verificar aspect ratio correto
- Não usar `object-fit: fill` (use `cover` ou `contain`)
- Verificar dimensões originais da foto

---

## 📞 SUPORTE

**Para dúvidas sobre:**
- **Especificações técnicas:** Leia o README.md de cada pasta
- **Como tirar fotos:** Veja diretrizes nos READMEs
- **Como processar:** Use ferramentas recomendadas acima
- **Problemas com build:** Consulte `DEPLOY-INSTRUCTIONS.md`

---

**Última atualização:** 13 de Janeiro de 2025
**Status:** ✅ Estrutura completa e documentada
**Próximo passo:** Substituir imagens mockadas por fotos reais
