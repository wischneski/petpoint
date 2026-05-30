# 🏥 FOTOS DOS SERVIÇOS

## 📋 3 Fotos Necessárias

Cada serviço precisa de uma foto hero representativa:

### 1. Clínica Médica & Cirúrgica
- **Arquivo:** `clinica-medica.webp`
- **O que mostrar:**
  - Veterinário examinando animal
  - Sala de consulta equipada
  - Equipamentos médicos (estetoscópio, ultrassom, etc)
  - Ambiente profissional e acolhedor
- **Tamanho:** 1200x800px (3:2 ratio)
- **Peso máximo:** 200 KB

### 2. Centro de Estética
- **Arquivo:** `estetica.webp`
- **O que mostrar:**
  - Pet sendo banhado/tosado
  - Profissional trabalhando com carinho
  - Produtos premium visíveis
  - Ambiente limpo e moderno
- **Tamanho:** 1200x800px (3:2 ratio)
- **Peso máximo:** 200 KB

### 3. PetShop Premium
- **Arquivo:** `petshop.webp`
- **O que mostrar:**
  - Prateleiras organizadas com produtos
  - Rações premium, acessórios
  - Variedade de itens
  - Ambiente clean e profissional
- **Tamanho:** 1200x800px (3:2 ratio)
- **Peso máximo:** 200 KB

---

## 🎨 Diretrizes Específicas

### Clínica Médica
- ✅ Veterinário usando jaleco
- ✅ Animal calmo e confortável
- ✅ Equipamentos médicos visíveis
- ✅ Iluminação profissional
- ❌ Procedimentos invasivos/sangrentos
- ❌ Animal assustado ou estressado

### Estética
- ✅ Pet relaxado no banho/tosa
- ✅ Produtos de qualidade à vista
- ✅ Profissional carinhoso e atencioso
- ✅ Ambiente limpo e organizado
- ❌ Animal molhado demais (aparência ruim)
- ❌ Bagunça ou desorganização

### PetShop
- ✅ Produtos de marcas conhecidas
- ✅ Organização por categorias
- ✅ Variedade de itens
- ✅ Iluminação comercial
- ❌ Produtos vencidos/empoeirados
- ❌ Prateleiras vazias ou bagunçadas

---

## 📐 Especificações Técnicas

- **Resolução:** 1200x800px
- **Aspect Ratio:** 3:2 (landscape)
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85%
- **Peso máximo:** 200 KB por foto
- **Orientação:** Horizontal (landscape)

---

## 🔄 Como Atualizar no Site

Edite o arquivo: **`components/Services.tsx`**

Encontre o array `services` (linha ~6):

```typescript
const services = [
  {
    id: 1,
    icon: Activity,
    title: "Clínica Médica & Cirúrgica",
    description: "Da prevenção a tratamentos complexos...",
    image: "/images/services/clinica-medica.webp" // ← TROCAR AQUI
  },
  {
    id: 2,
    icon: Scissors,
    title: "Centro de Estética",
    description: "Mais que um banho, uma renovação...",
    image: "/images/services/estetica.webp" // ← TROCAR AQUI
  },
  {
    id: 3,
    icon: ShoppingBag,
    title: "PetShop Premium",
    description: "Nutrição de alta performance...",
    image: "/images/services/petshop.webp" // ← TROCAR AQUI
  }
];
```

---

## 🎯 Dicas de Fotografia

### Composição
- Use a regra dos terços
- Deixe espaço negativo (não entupir a foto)
- Foco no elemento principal
- Background desfocado (bokeh) se possível

### Iluminação
- Natural + artificial combinados
- Evite sombras duras
- Use flash difuso se necessário
- Horário: 9h-11h ou 14h-16h

### Modelos (Pets)
- Escolha animais calmos e fotogênicos
- Obtenha autorização dos tutores
- Premie com petiscos durante sessão
- Tire MUITAS fotos (escolha depois)

---

## 🛠️ Processamento

### 1. Selecionar
- Escolha as 3-5 melhores de cada categoria
- Critérios: foco, iluminação, composição, emoção

### 2. Editar
Ajustes básicos (Lightroom/Snapseed):
- **Exposure:** +0.3 (se necessário)
- **Contrast:** +15
- **Highlights:** -10
- **Shadows:** +15
- **Vibrance:** +10
- **Saturation:** +5
- **Sharpness:** +15

### 3. Recortar
- Proporção 3:2 (1200x800px)
- Mantenha o foco no elemento principal
- Use regra dos terços na composição

### 4. Converter e Otimizar
```bash
# Redimensionar para 1200x800
# Converter para WebP
cwebp -q 85 foto-original.jpg -o nome-servico.webp

# Ou use: https://squoosh.app/
```

### 5. Verificar Tamanho
- Meta: < 200 KB
- Se maior, reduza qualidade para 80%

---

## 📂 Estrutura Final

```
public/images/services/
├── clinica-medica.webp    (1200x800px, < 200KB)
├── estetica.webp          (1200x800px, < 200KB)
└── petshop.webp           (1200x800px, < 200KB)
```

---

## 🎨 Alternativas se Não Tiver Fotos

### Opção 1: Banco de Imagens Grátis
- **Unsplash:** https://unsplash.com/s/photos/veterinary
- **Pexels:** https://www.pexels.com/search/pet%20clinic/
- **Pixabay:** https://pixabay.com/images/search/veterinarian/

Busque por:
- "veterinary clinic"
- "pet grooming"
- "pet shop"
- "dog examination"

### Opção 2: Banco de Imagens Pago (Melhor Qualidade)
- **Shutterstock:** https://www.shutterstock.com/
- **iStock:** https://www.istockphoto.com/
- **Adobe Stock:** https://stock.adobe.com/

Custo: R$ 30-100 por foto

### Opção 3: Contratar Fotógrafo
- Sessão de 2-3 horas
- Fotos de toda estrutura + serviços
- Custo: R$ 500-1500
- **MELHOR OPÇÃO para profissionalismo**

---

## ✅ CHECKLIST

- [ ] 3 fotos tiradas ou selecionadas
- [ ] Autorização dos tutores (se pets aparecem)
- [ ] Fotos editadas (brilho, contraste)
- [ ] Fotos recortadas (proporção 3:2)
- [ ] Fotos redimensionadas (1200x800px)
- [ ] Fotos convertidas para WebP
- [ ] Fotos otimizadas (< 200 KB cada)
- [ ] Fotos nomeadas corretamente
- [ ] Fotos colocadas em `public/images/services/`
- [ ] `components/Services.tsx` atualizado
- [ ] Build refeito (`npm run build`)
- [ ] Testado localmente
- [ ] Deploy feito

---

**Status atual:** ⏳ Aguardando fotos reais
**Atualmente usando:** Unsplash (imagens genéricas de qualidade)

**IMPORTANTE:** As fotos dos serviços aparecem em DESTAQUE no site. Invista em fotos de qualidade!
