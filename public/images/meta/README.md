# 🎯 IMAGENS META (SEO e Redes Sociais)

## 📋 2 Arquivos Principais

### 1. og-image.jpg
**Uso:** Open Graph - Compartilhamento em redes sociais

**Onde aparece:**
- WhatsApp (preview de link)
- Facebook (compartilhamento)
- Twitter/X (cards)
- LinkedIn (posts)
- Telegram (preview)
- iMessage (preview)

**Especificações:**
- **Tamanho:** 1200x630px (exato)
- **Aspect Ratio:** 1.91:1
- **Formato:** JPEG (boa compatibilidade) ou PNG
- **Qualidade:** 85%
- **Peso máximo:** 300 KB (ideal: < 200 KB)
- **Resolução mínima:** 1200x630px
- **Resolução recomendada:** 1200x630px ou 1920x1008px

**O que incluir:**
- Logo da PetPoint
- Tagline: "Medicina de Ponta, Cuidado Real"
- Background: Foto da fachada ou mascote
- Cores da marca: #203A8F (azul) + #CF2E78 (pink)
- Texto legível mesmo em preview pequeno

---

### 2. logo.jpg
**Uso:** Logo institucional para SEO e Google Business

**Onde aparece:**
- Google Business Profile
- Google Search (Knowledge Panel)
- Schema.org structured data
- Diretórios online
- Agregadores de negócios locais

**Especificações:**
- **Tamanho:** 800x800px (quadrado)
- **Aspect Ratio:** 1:1
- **Formato:** JPEG ou PNG
- **Qualidade:** 90%
- **Peso máximo:** 100 KB
- **Background:** Branco ou transparente (PNG)

**Diretrizes:**
- Logo centralizado
- Espaço ao redor (padding)
- Alta resolução
- Sem texto adicional (apenas logo)
- Fundo limpo

---

## 🎨 Como Criar og-image.jpg

### Opção 1: Canva (Fácil)

1. Acesse: https://www.canva.com/
2. Criar design > Dimensões personalizadas: 1200x630px
3. Template sugerido:
   ```
   Background: Gradiente (navy #0f172a → blue #203A8F)
   Logo PetPoint: Canto superior esquerdo ou centro
   Tagline: "Medicina de Ponta, Cuidado Real" - fonte grande
   Elementos: Patinha estilizada, ícone de cruz médica
   Cores: Azul #203A8F + Pink #CF2E78 + Branco
   ```
4. Baixar como JPG (qualidade alta)
5. Otimizar em: https://tinypng.com/

### Opção 2: Figma (Profissional)

1. Frame 1200x630px
2. Background: Foto da clínica + overlay escuro (60% opacidade)
3. Logo: 300px largura
4. Texto: Inter Bold 72px - "PetPoint"
5. Subtítulo: Inter Regular 36px - "Medicina de Ponta..."
6. Export: JPG 85%

### Opção 3: Photoshop

1. Novo documento: 1200x630px, 72dpi
2. Camada 1: Background (foto ou gradiente)
3. Camada 2: Logo (PNG transparente)
4. Camada 3: Texto com efeitos
5. Salvar para Web: JPEG, qualidade 85

---

## 📐 Template Sugerido para OG Image

```
┌─────────────────────────────────────┐
│                                     │
│  [Logo]                             │
│  PetPoint                           │
│                                     │
│  MEDICINA DE PONTA                  │
│  CUIDADO REAL                       │
│                                     │
│  Hospital Veterinário & Estética    │
│  Morro da Fumaça/SC                 │
│                                     │
│  [Ícone de Patinha]                 │
└─────────────────────────────────────┘
     1200px x 630px
```

**Cores:**
- Background: Navy (#0f172a) com gradiente
- Texto primário: Branco (#ffffff)
- Destaque: Pink (#CF2E78)
- Acento: Azul (#203A8F)

**Tipografia:**
- Título: Inter Bold 60-72px
- Subtítulo: Inter SemiBold 36-48px
- Corpo: Inter Regular 24-30px

---

## 🎯 Como Criar logo.jpg

### Requisitos
- Logo em alta resolução (vetorial se possível)
- Fundo branco ou transparente
- Centralizado com margem ao redor
- Sem sombras ou efeitos excessivos

### Processar
1. Abra logo em alta resolução
2. Redimensione canvas para 800x800px
3. Centralize logo (deixe ~50px de margem)
4. Se tiver texto, mantenha legível
5. Salvar como JPG 90% ou PNG

---

## 🔄 Arquivos Atuais

Ambos os arquivos já foram gerados automaticamente pelo script `generate-favicons.js` a partir de `Imagens/images.jpeg`.

**Localização:**
```
public/images/meta/
├── og-image.jpg    (57 KB, 1200x630px) ✅
└── logo.jpg        (42 KB, 800x800px) ✅
```

**Status:** ✅ Gerados automaticamente

**Nota:** Se quiser criar versões personalizadas com design profissional, substitua estes arquivos seguindo as especificações acima.

---

## 🧪 Como Testar

### OG Image (Open Graph)

**1. Facebook Debugger:**
```
https://developers.facebook.com/tools/debug/
```
- Cole a URL do site
- Clique em "Scrape Again"
- Verifique se a imagem aparece corretamente

**2. LinkedIn Post Inspector:**
```
https://www.linkedin.com/post-inspector/
```

**3. Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator
```

**4. WhatsApp:**
- Compartilhe o link em um chat
- Verifique se o preview aparece com a imagem

### Logo

**Google Search Console:**
- Após deploy, procure pelo nome da clínica no Google
- Verifique se o logo aparece no Knowledge Panel

---

## 📝 Referências no Código

### index.html

```html
<!-- Open Graph -->
<meta property="og:image" content="https://www.petpoint.com.br/images/meta/og-image.jpg" />

<!-- Twitter -->
<meta name="twitter:image" content="https://www.petpoint.com.br/images/meta/og-image.jpg" />

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "image": "https://www.petpoint.com.br/images/meta/logo.jpg"
}
</script>
```

---

## ⚠️ Importante

### Tamanhos Mínimos (Facebook/Twitter)
- **Mínimo:** 200x200px
- **Recomendado:** 1200x630px
- **Máximo:** 8 MB

### Cache
Após atualizar as imagens:
1. Limpar cache do Facebook Debugger
2. Pode levar 24h para atualizar em todos os lugares
3. WhatsApp pode cachear por vários dias

### URLs Absolutas
Sempre use URLs completas (https://...) nas meta tags, não caminhos relativos.

---

## 🎨 Inspiração de Design

**Elementos visuais que funcionam bem:**
- ✅ Logo grande e centralizado
- ✅ Gradientes suaves
- ✅ Foto da fachada com overlay
- ✅ Ícones simples (patinha, cruz médica)
- ✅ Texto grande e legível
- ✅ Contraste alto

**O que evitar:**
- ❌ Muito texto (fica ilegível)
- ❌ Imagens complexas demais
- ❌ Cores muito claras (dificulta leitura)
- ❌ Logos pequenos
- ❌ Fundos ocupados

---

## ✅ CHECKLIST

Para considerar completo:

- [x] og-image.jpg gerado (1200x630px)
- [x] logo.jpg gerado (800x800px)
- [x] Arquivos otimizados (< 300 KB)
- [x] Arquivos na pasta correta
- [x] Referências atualizadas no index.html
- [ ] Design personalizado criado (opcional)
- [ ] Testado no Facebook Debugger
- [ ] Testado compartilhando no WhatsApp
- [ ] Verificado no Google Search Console

---

## 🚀 Upgrade Futuro (Opcional)

Quando tiver logo profissional e fotos reais:

1. Contratar designer para criar OG image branded
2. Usar foto real da fachada como background
3. Adicionar elementos da marca (cores, tipografia)
4. Criar versões para diferentes ocasiões:
   - `og-image-default.jpg` (padrão)
   - `og-image-blog.jpg` (para artigos)
   - `og-image-promo.jpg` (para promoções)

---

**Status atual:** ✅ Arquivos básicos gerados
**Upgrade recomendado:** Criar design personalizado com Canva/Figma

**Prioridade:** Média (funcional mas pode melhorar)
