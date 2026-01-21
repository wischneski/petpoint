# 📰 FOTOS DOS ARTIGOS DO BLOG

## 📋 3 Fotos Necessárias (Artigos Atuais)

Atualmente o site exibe 3 artigos de blog. Cada um precisa de uma foto hero:

### 1. Longevidade: O segredo está na prevenção precoce
- **Arquivo:** `longevidade-prevencao.webp`
- **O que mostrar:**
  - Pet saudável e feliz (cachorro idoso mas ativo)
  - Veterinário fazendo check-up preventivo
  - Imagem que transmita saúde e cuidado
- **Categoria:** Saúde Canina
- **Tamanho:** 1200x900px (4:3 ratio)
- **Peso máximo:** 150 KB

### 2. Entendendo a linguagem corporal dos felinos
- **Arquivo:** `linguagem-felinos.webp`
- **O que mostrar:**
  - Gato em pose expressiva
  - Close-up de rosto felino
  - Imagem que mostre comportamento/personalidade
- **Categoria:** Comportamento
- **Tamanho:** 1200x900px (4:3 ratio)
- **Peso máximo:** 150 KB

### 3. Alimentação natural vs. Ração Premium: O veredito
- **Arquivo:** `alimentacao-natural.webp`
- **O que mostrar:**
  - Tigela com ração premium
  - Alimentos naturais ao lado (carne, vegetais)
  - Comparação visual de qualidade
- **Categoria:** Nutrição
- **Tamanho:** 1200x900px (4:3 ratio)
- **Peso máximo:** 150 KB

---

## 📐 Especificações Técnicas

- **Resolução:** 1200x900px (para artigo principal) ou 800x600px (artigos laterais)
- **Aspect Ratio:** 4:3
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 80-85%
- **Peso máximo:** 150 KB
- **Orientação:** Horizontal (landscape)

---

## 🎨 Diretrizes de Fotografia

### Estilo
- **Jornalístico:** Natural, informativo
- **Editorial:** Profissional mas acessível
- **Foco:** No tema do artigo
- **Cores:** Naturais, vibrantes

### O que MOSTRAR
- ✅ Pets saudáveis e felizes
- ✅ Situações cotidianas
- ✅ Informação visual clara
- ✅ Emoção positiva

### O que EVITAR
- ❌ Pets doentes ou em situação ruim
- ❌ Imagens genéricas demais
- ❌ Fotos escuras ou mal iluminadas
- ❌ Marca d'água de banco de imagens

---

## 🔄 Como Atualizar no Site

Edite o arquivo: **`components/Blog.tsx`**

Encontre o array `articles` (linha ~6):

```typescript
const articles = [
  {
    category: "Saúde Canina",
    title: "Longevidade: O segredo está na prevenção precoce.",
    date: "12 Out, 2023",
    image: "/images/blog/longevidade-prevencao.webp", // ← TROCAR AQUI
    highlight: true
  },
  {
    category: "Comportamento",
    title: "Entendendo a linguagem corporal dos felinos.",
    date: "08 Set, 2023",
    image: "/images/blog/linguagem-felinos.webp", // ← TROCAR AQUI
    highlight: false
  },
  {
    category: "Nutrição",
    title: "Alimentação natural vs. Ração Premium: O veredito.",
    date: "24 Ago, 2023",
    image: "/images/blog/alimentacao-natural.webp", // ← TROCAR AQUI
    highlight: false
  }
];
```

---

## 📝 Quando Criar Blog Real

Atualmente os artigos são **placeholders**. Quando criar conteúdo real:

### Estrutura de Pasta por Artigo
```
public/images/blog/
├── 2025/
│   ├── 01-janeiro/
│   │   ├── titulo-artigo-1.webp
│   │   └── titulo-artigo-2.webp
│   └── 02-fevereiro/
│       └── titulo-artigo-3.webp
└── featured/  # Artigos em destaque
    └── hero-image.webp
```

### Nomenclatura
Use kebab-case (minúsculas, hífens):
- ✅ `prevencao-doencas-inverno.webp`
- ✅ `vacinas-essenciais-caes.webp`
- ❌ `Prevenção de Doenças.jpg`
- ❌ `vacinas_essenciais.JPG`

---

## 🎯 Onde Encontrar Fotos

### Opção 1: Banco de Imagens Grátis
- **Unsplash:** https://unsplash.com/s/photos/dogs-cats
- **Pexels:** https://www.pexels.com/search/pets/
- **Pixabay:** https://pixabay.com/images/search/animals/

**Licença:** Gratuita para uso comercial (sem atribuição necessária)

### Opção 2: Fotos Próprias
Tire fotos durante:
- Consultas (com autorização)
- Procedimentos simples
- Eventos da clínica
- Pets dos funcionários

### Opção 3: Banco Pago
- **Shutterstock:** Maior variedade
- **iStock:** Boa qualidade
- **Adobe Stock:** Integração com Photoshop

Custo: R$ 30-50 por foto

---

## 🛠️ Processamento Recomendado

### 1. Dimensionar
Para artigo principal (destaque):
- 1200x900px

Para artigos laterais:
- 800x600px

### 2. Ajustar
- **Brightness:** +5 a +10
- **Contrast:** +10 a +15
- **Saturation:** +5 a +10
- **Sharpness:** +10 a +15

### 3. Adicionar Overlay de Categoria (Opcional)
No canto superior esquerdo, adicione badge com:
- Categoria do artigo
- Background semi-transparente
- Texto branco

Ferramentas:
- Canva (fácil)
- Photoshop (profissional)

### 4. Converter e Otimizar
```bash
cwebp -q 85 foto-blog.jpg -o nome-artigo.webp
```

Ou use: https://squoosh.app/

Meta: < 150 KB

---

## 🎨 Template de Badge de Categoria (Canva)

Se quiser adicionar badge de categoria:

1. Abra Canva: https://www.canva.com/
2. Tamanho: 1200x900px
3. Upload sua foto
4. Adicione retângulo no canto superior esquerdo:
   - Tamanho: 200x80px
   - Cor: Branco com 90% opacidade
   - Bordas arredondadas: 10px
5. Adicione texto:
   - "SAÚDE CANINA" (ou categoria)
   - Fonte: Inter Bold, 14px
   - Cor: #0f172a (navy)
   - Centralizado no retângulo

---

## 📂 Estrutura Atual

```
public/images/blog/
├── longevidade-prevencao.webp      (Artigo 1 - Destaque)
├── linguagem-felinos.webp          (Artigo 2)
└── alimentacao-natural.webp        (Artigo 3)
```

---

## 🚀 Expansão Futura

Quando criar um blog real, considere:

### Sistema de CMS
- **Wordpress:** Plugin WP REST API
- **Strapi:** Headless CMS
- **Contentful:** Cloud CMS
- **Ghost:** Blog-focused CMS

### Estrutura Dinâmica
Em vez de hardcoded, busque de API:
```typescript
const [articles, setArticles] = useState([]);

useEffect(() => {
  fetch('/api/blog/posts')
    .then(res => res.json())
    .then(data => setArticles(data));
}, []);
```

### SEO Individual
Cada artigo deveria ter:
- URL própria: `/blog/longevidade-prevencao`
- Meta tags únicas
- Structured Data (Article)
- Sitemap atualizado dinamicamente

---

## ✅ CHECKLIST (Imagens Atuais)

- [ ] 3 fotos selecionadas ou baixadas
- [ ] Fotos editadas (brilho, contraste)
- [ ] Fotos redimensionadas (1200x900px + 800x600px)
- [ ] Fotos convertidas para WebP
- [ ] Fotos otimizadas (< 150 KB)
- [ ] Fotos nomeadas corretamente
- [ ] Fotos colocadas em `public/images/blog/`
- [ ] `components/Blog.tsx` atualizado
- [ ] Build refeito
- [ ] Testado

---

## ✅ CHECKLIST (Blog Futuro)

Para quando criar conteúdo real:

- [ ] Decidir plataforma de blog
- [ ] Criar estrutura de pastas por data
- [ ] Escrever artigos de qualidade (500-1500 palavras)
- [ ] Criar/selecionar imagens para cada artigo
- [ ] Adicionar meta tags individuais
- [ ] Implementar sistema dinâmico
- [ ] Criar páginas individuais de artigo
- [ ] Adicionar compartilhamento social
- [ ] Configurar sitemap dinâmico
- [ ] Submeter ao Google Search Console

---

**Status atual:** ⏳ Aguardando fotos reais
**Prioridade:** Média (blog é complementar)

**NOTA:** Fotos de blog têm menos impacto que fotos de equipe/estrutura. Pode usar stock photos temporariamente.
