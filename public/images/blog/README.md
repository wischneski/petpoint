# Blog — Imagens de capa dos artigos

Cada artigo possui uma pasta com seu `slug` correspondente.
A imagem de capa de cada artigo deve ser nomeada `cover.webp`.

## Estrutura

```
public/images/blog/
├── longevidade-prevencao/
│   └── cover.webp          ← capa do artigo "Longevidade"
│
├── linguagem-felinos/
│   └── cover.webp          ← capa do artigo "Linguagem dos Felinos"
│
└── alimentacao-natural/
    └── cover.webp          ← capa do artigo "Alimentação Natural"
```

## Especificações das imagens de capa

| Atributo | Valor recomendado |
|---|---|
| Formato | `.webp` (preferencialmente) |
| Dimensões | `1200 × 900px` (proporção 4:3) |
| Peso máximo | `150 KB` |
| Qualidade webp | 80–85% |

## Imagens internas dos artigos

Imagens referenciadas dentro do corpo do artigo `.mdx` também devem
ser armazenadas dentro da pasta do respectivo artigo:

```
public/images/blog/longevidade-prevencao/
├── cover.webp
├── check-up-cachorro.webp
└── tabela-calendario-vacinal.webp
```

E referenciadas no MDX como:
```md
![Descrição da imagem](/images/blog/longevidade-prevencao/check-up-cachorro.webp)
```

## Notas

- O nome da pasta aqui deve ser **idêntico** ao `slug` definido no
  frontmatter do arquivo `content/blog/[slug]/index.mdx`.
- Todas as imagens devem ter texto alternativo (`alt`) descritivo para SEO e acessibilidade.
