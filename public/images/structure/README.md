# 🏥 FOTOS DA ESTRUTURA

## 📋 Fotos Necessárias

**Recomendamos tirar fotos de:**

### Essenciais (Prioridade Alta)
1. **Fachada Externa**
   - `fachada.webp`
   - Vista frontal da clínica
   - 1920x1080px (landscape)
   - Luz do dia, preferencialmente manhã

2. **Recepção**
   - `recepcao.webp`
   - Vista geral da área de espera
   - 1920x1080px (landscape)
   - Organizada e limpa

3. **Sala de Consultas**
   - `consultorio.webp`
   - Sala de exame/consulta
   - 1920x1080px (landscape)
   - Equipamentos visíveis

4. **Centro Cirúrgico**
   - `centro-cirurgico.webp`
   - Sala cirúrgica (se permitido fotografar)
   - 1920x1080px (landscape)
   - Mostra tecnologia e higiene

5. **Área de Banho e Tosa**
   - `banho-tosa.webp`
   - Espaço de estética
   - 1920x1080px (landscape)
   - Equipamentos de grooming

### Complementares (Prioridade Média)
6. **Internação**
   - `internacao.webp`
   - Área de recuperação/internação
   - 1920x1080px

7. **PetShop**
   - `petshop.webp`
   - Área de produtos
   - 1920x1080px

8. **Laboratório**
   - `laboratorio.webp`
   - Se houver lab interno
   - 1920x1080px

### Detalhes (Prioridade Baixa)
9. **Equipamentos**
   - `equipamento-ultrassom.webp`
   - `equipamento-raio-x.webp`
   - 1920x1080px
   - Destaque tecnologia

---

## 🎨 Diretrizes de Fotografia

### Estilo
- **Luz:** Natural + artificial (bem iluminado)
- **Ângulo:** Eye level ou ligeiramente acima
- **Composição:** Regra dos terços
- **Estilo:** Limpo, profissional, moderno
- **Cores:** Naturais (evite filtros)

### Preparação do Ambiente
ANTES de fotografar:
- ✅ Limpar e organizar o espaço
- ✅ Remover objetos pessoais/bagunça
- ✅ Ajustar iluminação (todas as luzes acesas)
- ✅ Fechar gavetas/armários
- ✅ Organizar produtos/equipamentos
- ✅ Remover sinalizações temporárias

### O que MOSTRAR
- ✅ Espaço amplo e organizado
- ✅ Equipamentos modernos
- ✅ Higiene e limpeza
- ✅ Profissionalismo
- ✅ Tecnologia de ponta
- ✅ Conforto para os pets

### O que EVITAR
- ❌ Pessoas identificáveis (privacidade)
- ❌ Animais em situação vulnerável
- ❌ Sangue ou procedimentos gráficos
- ❌ Bagunça ou desorganização
- ❌ Equipamentos antigos/quebrados
- ❌ Áreas sujas ou mal iluminadas
- ❌ Papéis com informações sensíveis

---

## 📐 Especificações Técnicas

### Tamanho e Formato
- **Resolução:** 1920x1080px (Full HD)
- **Aspect Ratio:** 16:9 (landscape)
- **Formato:** WebP (preferencial) ou JPEG
- **Qualidade:** 85-90%
- **Peso máximo:** 200-300 KB por foto

### Configurações de Câmera
- **ISO:** 400-800 (interior), 100-400 (exterior)
- **Abertura:** f/5.6 - f/8 (maior profundidade de campo)
- **Foco:** Manual ou multi-point AF
- **White Balance:** Auto ou Tungsten (interior)
- **Estabilização:** Use tripé ou apoio firme

---

## 📱 Como Fotografar com Smartphone

### Preparação
1. Limpe a lente da câmera
2. Desative HDR automático (controle manual)
3. Use modo profissional/manual se disponível
4. Ative grade de composição (regra dos terços)

### Durante a Foto
1. Segure o celular com as duas mãos
2. Apoie em algo estável (parede, tripé)
3. Tire várias fotos do mesmo ângulo
4. Varie ângulos (horizontal, ligeiramente de cima)
5. Verifique foco e iluminação na tela

### Horário Ideal
- **Manhã:** 8h - 11h (luz suave)
- **Tarde:** 14h - 16h (evite pôr do sol)
- **Interior:** Qualquer horário com luzes acesas

---

## 🛠️ Pós-Processamento

### 1. Seleção
- Escolha as 3-5 melhores de cada ambiente
- Foco nítido, bem iluminada, composição limpa

### 2. Edição Básica
Use apps como:
- **Snapseed** (mobile, grátis)
- **Lightroom Mobile** (grátis com limitações)
- **Photoshop/Lightroom** (desktop)

Ajustes recomendados:
- **Exposure:** +0.3 a +0.7 (clarear se necessário)
- **Contraste:** +10 a +20
- **Highlights:** -10 a -20 (recuperar áreas claras)
- **Shadows:** +10 a +20 (abrir áreas escuras)
- **Vibrance:** +10 a +15 (cores naturais)
- **Sharpness:** +10 a +20
- **Straighten:** Alinhar horizontes e verticais

### 3. Redimensionar
```bash
# Para 1920x1080px mantendo proporção
```

Ferramentas:
- **Squoosh:** https://squoosh.app/
- **Photoshop:** Image > Image Size
- **GIMP:** Image > Scale Image

### 4. Converter para WebP
```bash
cwebp -q 85 foto-original.jpg -o nome-ambiente.webp
```

Ou: https://cloudconvert.com/jpg-to-webp

### 5. Otimizar
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- Meta: 200-300 KB por foto

---

## 📂 Estrutura de Arquivos

```
public/images/structure/
├── fachada.webp               (Essencial)
├── recepcao.webp              (Essencial)
├── consultorio.webp           (Essencial)
├── centro-cirurgico.webp      (Essencial)
├── banho-tosa.webp            (Essencial)
├── internacao.webp            (Complementar)
├── petshop.webp               (Complementar)
├── laboratorio.webp           (Complementar)
├── equipamento-ultrassom.webp (Detalhe)
└── equipamento-raio-x.webp    (Detalhe)
```

---

## 🔄 Como Usar no Site

### Opção 1: Criar Nova Seção "Nossa Estrutura"

Adicione em `App.tsx`:

```typescript
const Structure = lazy(() => import('./components/Structure'));

// No JSX:
<Suspense fallback={<LoadingSection />}>
  <Structure />
</Suspense>
```

Crie `components/Structure.tsx`:
```typescript
const Structure: React.FC = () => {
  const images = [
    { src: '/images/structure/fachada.webp', title: 'Fachada' },
    { src: '/images/structure/recepcao.webp', title: 'Recepção' },
    // ... outras fotos
  ];

  return (
    <section className="py-32 bg-white">
      <h2>Nossa Estrutura</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map(img => (
          <img src={img.src} alt={img.title} loading="lazy" />
        ))}
      </div>
    </section>
  );
};
```

### Opção 2: Adicionar ao About

Edite `components/About.tsx` e adicione uma galeria de fotos da estrutura.

---

## 🎯 Uso Específico das Fotos

| Foto | Onde Usar | Prioridade |
|------|-----------|------------|
| fachada.webp | About, Hero, Footer | Alta |
| recepcao.webp | About, Services | Alta |
| consultorio.webp | Services (Clínica Médica) | Alta |
| centro-cirurgico.webp | Services (Cirurgia) | Alta |
| banho-tosa.webp | Services (Estética) | Alta |
| petshop.webp | Services (PetShop) | Média |
| internacao.webp | About, Services | Média |
| laboratorio.webp | About | Baixa |
| equipamentos | About (cards de diferencias) | Baixa |

---

## ✅ CHECKLIST

- [ ] Ambiente limpo e organizado
- [ ] Todas as luzes acesas
- [ ] Câmera/smartphone limpo
- [ ] Fotos tiradas em boa iluminação
- [ ] Várias opções de cada ambiente
- [ ] Fotos selecionadas (melhores de cada)
- [ ] Fotos editadas (brilho, contraste)
- [ ] Fotos redimensionadas (1920x1080px)
- [ ] Fotos convertidas para WebP
- [ ] Fotos otimizadas (< 300 KB)
- [ ] Fotos nomeadas corretamente
- [ ] Fotos colocadas em `public/images/structure/`
- [ ] Componentes atualizados (About.tsx, Services.tsx)
- [ ] Build refeito (`npm run build`)
- [ ] Testado localmente
- [ ] Deploy feito

---

**Status atual:** ⏳ Aguardando fotos reais
**Nota:** As fotos da estrutura são ESSENCIAIS para transmitir confiança e profissionalismo.
