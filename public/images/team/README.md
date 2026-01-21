# 👥 FOTOS DA EQUIPE

## 📋 Especificações

**5 membros da equipe precisam de fotos profissionais:**

### 1. Dra. Ana Silva
- **Arquivo:** `ana-silva.jpg` ou `ana-silva.webp`
- **Tamanho recomendado:** 800x1000px (portrait)
- **Aspect ratio:** 4:5
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 150 KB

### 2. Dr. Roberto Mendes
- **Arquivo:** `roberto-mendes.jpg` ou `roberto-mendes.webp`
- **Tamanho recomendado:** 800x1000px (portrait)
- **Aspect ratio:** 4:5
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 150 KB

### 3. Dra. Carolina Wu
- **Arquivo:** `carolina-wu.jpg` ou `carolina-wu.webp`
- **Tamanho recomendado:** 800x1000px (portrait)
- **Aspect ratio:** 4:5
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 150 KB

### 4. Dr. Ricardo Viana
- **Arquivo:** `ricardo-viana.jpg` ou `ricardo-viana.webp`
- **Tamanho recomendado:** 800x1000px (portrait)
- **Aspect ratio:** 4:5
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 150 KB

### 5. Dra. Sofia Martinez
- **Arquivo:** `sofia-martinez.jpg` ou `sofia-martinez.webp`
- **Tamanho recomendado:** 800x1000px (portrait)
- **Aspect ratio:** 4:5
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 150 KB

---

## 🎨 Diretrizes de Fotografia

### Estilo
- **Background:** Neutro (branco, cinza claro, ou clínica)
- **Iluminação:** Profissional, suave, sem sombras duras
- **Pose:** Natural, profissional, sorrindo
- **Vestimenta:** Jaleco branco ou uniforme da clínica
- **Enquadramento:** Da cintura para cima ou busto

### Qualidade
- Alta resolução (mínimo 800px de largura)
- Bem iluminada
- Foco nítido
- Cores naturais
- Sem granulação/ruído

### O que EVITAR
- ❌ Selfies
- ❌ Fotos com filtros excessivos
- ❌ Background bagunçado/distraído
- ❌ Iluminação ruim (sombras, contra-luz)
- ❌ Fotos pixeladas ou baixa resolução
- ❌ Cortes ruins (cabeça cortada, etc)

---

## 🛠️ Como Preparar as Fotos

### Opção 1: Fotógrafo Profissional (Recomendado)
- Contrate um fotógrafo corporativo
- Sessão de 1-2 horas para toda equipe
- Fundo infinito branco ou cinza
- Iluminação de estúdio
- Custo: R$ 300-800 (sessão completa)

### Opção 2: Câmera Própria
Se não puder contratar fotógrafo:

1. **Equipamento:**
   - Câmera DSLR ou smartphone topo de linha (iPhone 12+, Samsung S21+)
   - Tripé (essencial para consistência)

2. **Iluminação:**
   - Luz natural difusa (perto de janela, sem sol direto)
   - OU softbox/ring light

3. **Background:**
   - Parede branca limpa
   - Lençol branco pendurado
   - Roll up branco

4. **Configurações:**
   - ISO baixo (100-400)
   - Abertura f/2.8 - f/5.6
   - Foco no rosto
   - Modo retrato (se smartphone)

---

## 📦 Após Tirar as Fotos

### 1. Redimensionar
Use uma dessas ferramentas:
- **Squoosh:** https://squoosh.app/ (online, grátis)
- **TinyPNG:** https://tinypng.com/ (compressão)
- **Photoshop/GIMP:** Redimensionar para 800x1000px

### 2. Converter para WebP (Opcional mas Recomendado)
```bash
# Se tiver instalado cwebp
cwebp -q 85 foto-original.jpg -o nome-membro.webp
```

Ou use: https://cloudconvert.com/jpg-to-webp

### 3. Otimizar
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- Meta: < 150 KB por foto

### 4. Nomear Corretamente
Siga o padrão:
- `ana-silva.webp` (sem espaços, minúsculas, hífens)
- `roberto-mendes.webp`
- etc.

### 5. Colocar nesta Pasta
```
public/images/team/
├── ana-silva.webp
├── roberto-mendes.webp
├── carolina-wu.webp
├── ricardo-viana.webp
└── sofia-martinez.webp
```

---

## 🔄 Atualizar os Componentes

Depois de adicionar as fotos, edite o arquivo:
**`components/Team.tsx`**

Substitua as URLs do Unsplash pelos caminhos locais:

```typescript
const team = [
  {
    name: "Dra. Ana Silva",
    role: "Diretora Clínica & Cirurgia",
    image: "/images/team/ana-silva.webp", // ← TROCAR AQUI
    specialty: "Neurocirurgia"
  },
  // ... fazer o mesmo para todos os membros
];
```

---

## 🚀 Refazer Build

Depois de trocar todas as fotos:

```bash
npm run build
```

As imagens serão automaticamente copiadas para `dist/images/team/`

---

## ✅ CHECKLIST

Antes de considerar completo:

- [ ] 5 fotos tiradas com boa qualidade
- [ ] Fotos redimensionadas para 800x1000px
- [ ] Fotos otimizadas (< 150 KB cada)
- [ ] Fotos convertidas para WebP (opcional)
- [ ] Fotos nomeadas corretamente (lowercase, hífens)
- [ ] Fotos colocadas em `public/images/team/`
- [ ] `components/Team.tsx` atualizado com novos caminhos
- [ ] Build refeito (`npm run build`)
- [ ] Testado localmente (`npm run preview`)
- [ ] Deploy feito
- [ ] Testado em produção

---

**Status atual:** ⏳ Aguardando fotos reais
**Temporariamente usando:** Unsplash (imagens placeholder)
