# NewFeed Marketing — Portfólio

Site institucional da agência **NewFeed Marketing** em HTML, CSS e JavaScript puros (sem framework). Pronto para deploy no Vercel.

---

## 📁 Estrutura do projeto

```
site/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos da identidade visual NewFeed
├── js/
│   └── main.js         # Interações: menu, scroll, animações, contadores
├── assets/
│   ├── logo-horizontal.svg   # Logo principal (cabeçalho)
│   ├── logo-icon.svg         # Versão quadrada (laranja)
│   ├── logo-white.svg        # Versão para fundo escuro (rodapé)
│   └── favicon.svg           # Favicon do navegador
├── vercel.json         # Config de deploy no Vercel
├── package.json
├── robots.txt
└── sitemap.xml
```

---

## 🎨 Identidade visual aplicada

| Cor | Hex | Uso |
|-----|------|-----|
| Laranja NewFeed | `#ED6B23` | Acentos, CTAs, destaques |
| Navy NewFeed | `#0A2540` | Fundo escuro, títulos |
| Branco | `#FFFFFF` | Texto sobre fundo escuro |
| Cinza neutro | `#F8FAFC` → `#1E293B` | Backgrounds e textos secundários |

**Tipografia:** Poppins (títulos) + Inter (corpo) — Google Fonts.

---

## 🖼️ Substituindo os logos pelos arquivos oficiais

Os logos atuais são SVGs criados a partir do design da sua marca. Para usar seus arquivos PNG/SVG originais:

1. Salve seus arquivos de logo dentro de `site/assets/` com os mesmos nomes:
   - `logo-horizontal.png` ou `.svg` (versão completa, fundo claro)
   - `logo-icon.png` ou `.svg` (ícone quadrado laranja)
   - `logo-white.png` ou `.svg` (versão para fundos escuros)
   - `favicon.svg` ou `.png`
2. Se mudar a extensão (ex.: `.png` em vez de `.svg`), atualize as referências no `index.html` (são 4 ocorrências).

---

## 👥 Seção de clientes (27 marcas)

A seção já vem populada com **27 clientes** da carteira NewFeed:

- **3 clientes com logo SVG estilizado** (em `assets/clientes/`):
  - Mercearia Martini (`mercearia-martini.svg`)
  - Presidente Padel Clube (`presidente-padel.svg`)
  - Sunset – esporte, alegria e gastronomia (`sunset.svg`)
- **24 clientes em formato texto** (nome + handle do Instagram), prontos para serem substituídos pelos logos oficiais quando você os tiver.

### Substituindo um card de texto por um logo de imagem

No `index.html`, encontre o card e troque o conteúdo:

```html
<!-- Antes (texto) -->
<div class="client-logo" data-aos>
  <span class="client-logo__name">Cort Genética</span>
  <span class="client-logo__handle">@cortgeneticabr</span>
</div>

<!-- Depois (logo PNG/SVG) -->
<div class="client-logo client-logo--svg" data-aos>
  <img src="/assets/clientes/cort-genetica.png" alt="Cort Genética" loading="lazy" />
</div>
```

Salve o arquivo da imagem em `site/assets/clientes/` com o nome correspondente. O CSS já tem o tratamento de filtro/cor para logos com a classe `client-logo--svg`.

---

## ✏️ Personalizações rápidas

### Atualizar dados de contato
No `index.html`, busque por:
- `newfeedmarketing24@gmail.com` → e-mail
- `https://wa.me/` → adicionar número (ex.: `https://wa.me/5511999999999`)
- `@newfeedmarketing` → handle do Instagram

### Atualizar números/métricas
Procure por `data-counter` na seção "Quem somos" do `index.html`. Cada card tem o valor-alvo final.

### Trocar nomes/segmentos dos depoimentos
Na seção `<section class="testimonials">`, substitua os textos genéricos pelos depoimentos reais e atribuições.

---

## 🚀 Como publicar no Vercel (3 caminhos)

### Caminho 1 — Mais rápido (Drag & drop, sem Git)

1. Acesse <https://vercel.com> e faça login (Google funciona).
2. Clique em **Add New… → Project**.
3. Selecione **"Browse all templates"** ou role até o final e clique em **"Or import a different repository"**. Em alternativa, use o botão **"Deploy"** com upload direto: na página inicial do dashboard, arraste a pasta `site/` para a área de drop.
4. Aguarde o build (≈ 30 segundos). Pronto — Vercel cria uma URL `https://newfeed-marketing.vercel.app`.

> 💡 Esse método já entrega o site no ar em segundos.

### Caminho 2 — Recomendado (via GitHub)

1. Crie uma conta no GitHub (se ainda não tem) em <https://github.com>.
2. Crie um novo repositório chamado `newfeed-marketing` (privado ou público).
3. No terminal, dentro da pasta `site/`:
   ```bash
   git init
   git add .
   git commit -m "feat: portfólio NewFeed Marketing"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/newfeed-marketing.git
   git push -u origin main
   ```
4. Acesse <https://vercel.com/new> e **importe o repositório** recém-criado.
5. Em **Framework Preset**, selecione **Other** (ou deixe automático — Vercel reconhecerá como site estático).
6. Clique em **Deploy**. Pronto: URL pública gerada e cada novo `git push` publica automaticamente.

### Caminho 3 — Linha de comando (Vercel CLI)

```bash
npm install -g vercel
cd site
vercel login
vercel        # primeiro deploy (preview)
vercel --prod # deploy para produção
```

---

## 🌐 Configurar domínio próprio (ex.: newfeedmarketing.com.br)

1. Compre o domínio em Registro.br, GoDaddy, Hostinger, etc.
2. No painel do Vercel, abra seu projeto → **Settings → Domains**.
3. Clique em **Add Domain** e cole o domínio.
4. O Vercel mostrará registros DNS que devem ser cadastrados no painel do seu provedor:
   - **A** → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
5. Depois de propagado (de minutos a algumas horas), o Vercel emite o certificado HTTPS automaticamente.

---

## 🧪 Rodar localmente

Você não precisa de nenhuma instalação para abrir o site — é só dar duplo-clique em `index.html`. Mas para um servidor local com URLs limpas:

```bash
# com Python (já vem instalado em Mac/Linux)
cd site
python3 -m http.server 3000
# acesse http://localhost:3000

# OU com Node.js
npx serve site -l 3000
```

---

## ✅ Checklist antes de publicar

- [ ] Substituir `logo-horizontal.svg`, `logo-icon.svg`, `logo-white.svg`, `favicon.svg` pelos arquivos oficiais
- [ ] Atualizar telefone/WhatsApp em `index.html` (procure por `https://wa.me/`)
- [ ] Atualizar handle do Instagram (procure por `instagram.com/`)
- [ ] Trocar logos placeholders dos clientes na seção "Clientes"
- [ ] Personalizar depoimentos com nomes e segmentos reais
- [ ] Revisar números/métricas se quiser ajustar para os reais
- [ ] Atualizar `sitemap.xml` e `robots.txt` com seu domínio final
- [ ] Configurar formulário com integração real (ex.: Formspree, Web3Forms ou Vercel Functions) — hoje ele abre o cliente de e-mail via `mailto:`

---

## 📝 Notas técnicas

- **Sem dependências de build.** É HTML/CSS/JS puro — Vercel detecta como site estático automaticamente.
- **Performance:** imagens em SVG, fontes via Google Fonts com preconnect, CSS leve, JS sem libs externas.
- **Responsivo:** layout otimizado para desktop, tablet e mobile (breakpoints em 1024px / 768px / 480px).
- **Acessível:** uso de tags semânticas, `aria-label`, contraste adequado, suporte a `prefers-reduced-motion`.
- **SEO:** meta tags, Open Graph, sitemap.xml e robots.txt incluídos.

---

Qualquer dúvida, é só perguntar! 🚀
