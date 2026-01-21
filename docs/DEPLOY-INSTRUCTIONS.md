# 📦 INSTRUÇÕES DE DEPLOY - PETPOINT

## 🚀 Como fazer o build e deploy na Hostinger

### 1. Preparação antes do build

**Atualize as informações reais no projeto:**

#### a) Meta Pixel e Google Analytics (index.html)
- Linha 126: Substitua `'YOUR_PIXEL_ID'` pelo seu ID real do Meta Pixel
- Linha 139: Substitua `'G-XXXXXXXXXX'` pelo seu ID real do Google Analytics

#### b) Links de WhatsApp
- **Hero.tsx** (linha 55): `href="https://wa.me/5548999999999"`
- **Footer.tsx** (linha 20): `href="https://wa.me/5548999999999"`

#### c) Informações de contato (Footer.tsx)
- Endereço real (linha 46)
- Telefone real (linha 50)
- Instagram handle real (linha 72)

#### d) URLs canônicas (index.html e sitemap.xml)
- Substitua `https://www.petpoint.com.br/` pela URL real do domínio
- Atualize o sitemap.xml com a data atual

#### e) Coordenadas GPS (index.html - JSON-LD)
- Linha 84-85: Atualize latitude e longitude reais da clínica

---

### 2. Criar Build de Produção

Execute o comando:

```bash
npm run build
```

Isso irá gerar a pasta `dist/` com todos os arquivos otimizados:
- HTML minificado
- CSS code-split e async
- JavaScript em chunks separados (vendor-react, vendor-three, vendor-icons)
- Assets com hash para cache busting
- Imagens, fontes e outros assets organizados

---

### 3. Imagens Necessárias

**IMPORTANTE:** Você precisa criar e adicionar estas imagens na pasta `public/` ANTES do build:

#### Imagens obrigatórias:
- `og-image.jpg` (1200x630px) - Para compartilhamentos em redes sociais
- `logo.jpg` (mínimo 500x500px) - Logo da empresa para SEO
- `apple-touch-icon.png` (180x180px) - Ícone para iOS

**Dica:** Use Canva ou Figma para criar essas imagens com a identidade visual da marca (cores: #203A8F e #CF2E78).

---

### 4. Upload na Hostinger

#### Método 1: Via Gerenciador de Arquivos (Recomendado para primeira vez)

1. Faça login no painel da Hostinger
2. Vá em **Websites** > Selecione seu domínio
3. Clique em **Gerenciador de Arquivos**
4. Navegue até a pasta `public_html` (ou `www`, dependendo da configuração)
5. **DELETE todos os arquivos existentes** (se houver)
6. **Faça upload de TODOS os arquivos da pasta `dist/`** (não a pasta, apenas o conteúdo)
   - Arraste e solte ou use "Upload de Arquivos"
   - Certifique-se de que `.htaccess` foi enviado (pode estar oculto)

#### Estrutura final no servidor:
```
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── og-image.jpg
├── logo.jpg
├── apple-touch-icon.png
└── assets/
    ├── js/
    ├── css/
    ├── images/
    └── fonts/
```

#### Método 2: Via FTP (Mais rápido para atualizações)

1. Use FileZilla ou outro cliente FTP
2. Credenciais: veja no painel Hostinger > FTP Accounts
3. Conecte-se ao servidor
4. Navegue até `public_html`
5. Faça upload dos arquivos da pasta `dist/`

---

### 5. Verificações Pós-Deploy

Após o upload, teste:

- [ ] Site carregando corretamente: `https://seudominio.com`
- [ ] Navegação entre seções funcionando (scroll suave)
- [ ] Links de WhatsApp abrindo corretamente
- [ ] Imagens carregando
- [ ] robots.txt acessível: `https://seudominio.com/robots.txt`
- [ ] sitemap.xml acessível: `https://seudominio.com/sitemap.xml`
- [ ] Teste em dispositivos móveis
- [ ] Teste de performance no PageSpeed Insights: https://pagespeed.web.dev/

---

### 6. Configurações Opcionais na Hostinger

#### SSL/HTTPS (Obrigatório)
1. No painel Hostinger, vá em **SSL**
2. Ative o certificado gratuito Let's Encrypt
3. Aguarde alguns minutos para propagação
4. No `.htaccess`, descomente as linhas 75-76 para forçar HTTPS

#### Domínio Personalizado
Se estiver usando um domínio próprio, configure os DNS conforme instruções da Hostinger.

---

### 7. Otimizações Avançadas (Opcional)

#### Adicionar imagens WebP/AVIF
- Converta as imagens do Unsplash para WebP usando: https://squoosh.app/
- Substitua as URLs no código pelas versões locais otimizadas

#### Google Search Console
1. Adicione seu site: https://search.google.com/search-console
2. Submeta o sitemap: `https://seudominio.com/sitemap.xml`
3. Aguarde indexação (pode levar alguns dias)

#### Meta Business Suite
1. Adicione seu domínio: https://business.facebook.com/
2. Verifique a propriedade
3. Configure eventos de conversão do Pixel

---

## 📊 Métricas de Performance Esperadas

Com todas as otimizações implementadas, você deve obter:

- **Performance Score:** > 90 (mobile)
- **FCP:** < 1.8s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **INP:** < 200ms

---

## 🆘 Troubleshooting

### Site mostra "404 Not Found"
- Verifique se o `.htaccess` foi enviado
- Certifique-se que está na pasta `public_html` correta

### Imagens não carregam
- Verifique permissões das pastas (755 para diretórios, 644 para arquivos)
- Confirme que os arquivos foram enviados corretamente

### CSS/JS não carrega
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique console do navegador (F12) para erros

### Rotas SPA não funcionam (refresh dá 404)
- Verifique se o `.htaccess` está ativo e correto
- Confirme que o `mod_rewrite` está habilitado no servidor

---

## 📞 Suporte

Para problemas com a hospedagem Hostinger:
- Suporte 24/7: https://www.hostinger.com.br/contato

Para ajustes no código:
- Consulte a documentação em `llm-ctx/llms-ctx-site.md`

---

**Última atualização:** 13 de Janeiro de 2025
