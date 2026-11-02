# M.A. Axis (site)

Site de entrada da M.A. Axis (https://www.ma-axis.com.br): apresenta o Dita, o MostraAi, o Rasttro e o Profyla, com os apps do Google Play, capturas reais de tela, planos e contato.

## Comandos
- `npm run dev`: desenvolvimento (http://localhost:5173)
- `npm run build`: `tsc`, build do Vite e **pré-renderização das rotas** (`scripts/prerender.mjs`)
- `npm run preview`: serve o `dist/`
- `npm run lint`
- `npm run images`: refaz `public/img` a partir de `../manuais/prints`, `../divulgacao` e dos ícones dos apps (precisa de Python com Pillow/WebP; só quando as capturas mudarem)

## Como o conteúdo está organizado
- Cada sistema tem **a sua página, com o texto escrito à mão**: `src/pages/Dita.tsx`, `MostraAi.tsx`, `Rasttro.tsx`, `Profyla.tsx`. Não há template de dados: mudou o sistema, edite a página dele.
- Dados que se repetem (CNPJ, e-mail, Instagram, links do Google Play e dos sistemas): `src/site.ts`.
- Título, descrição e imagem de compartilhamento de cada rota: `src/meta.json` (usado pelo componente `Seo` e pelo pré-render).
- Estilos em `src/styles/*.css` (CSS puro com variáveis; cada sistema define a sua cor em `[data-theme="..."]`).
- Imagens em `public/img/<sistema>/`: `m-*.webp` (celular) e `w-*.webp` (computador).

## Vercel
`vercel.json` usa `cleanUrls`. O build gera `dist/<rota>/index.html` para cada página (com título e metadados próprios, para o Google e para a pré-visualização no WhatsApp/Instagram) e `dist/404.html` para endereços inexistentes. Não há rewrite genérico: uma rota nova precisa entrar em `src/meta.json` e em `scripts/prerender.mjs` (lista `ROUTES`).
