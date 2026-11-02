// Depois do `vite build`: grava um HTML por rota em dist/<rota>/index.html, com título, descrição, canônico e cartões de
// compartilhamento próprios (quem não executa JS, como o WhatsApp, o Instagram e parte dos robôs, lê só isso).
// Também cria dist/404.html (a Vercel serve este arquivo para endereços inexistentes; o React mostra a página 404).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const meta = JSON.parse(readFileSync(join(root, "src", "meta.json"), "utf8"));
const SITE = "https://www.ma-axis.com.br";
const ROUTES = ["/dita", "/mostra-ai", "/rasttro", "/profyla", "/apps", "/contato", "/privacidade"];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const base = readFileSync(join(dist, "index.html"), "utf8");

function render(route, { noindex = false } = {}) {
  const m = meta[route];
  const url = `${SITE}${route === "/" ? "/" : route}`;
  const image = `${SITE}${m.image}`;
  const swap = (html, re, to) => {
    if (!re.test(html)) throw new Error(`Padrão não encontrado no index.html: ${re}`);
    return html.replace(re, to);
  };
  let html = base;
  html = swap(html, /<title>.*?<\/title>/s, `<title>${esc(m.title)}</title>`);
  html = swap(html, /<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${esc(m.description)}" />`);
  html = swap(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
  html = swap(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
  html = swap(html, /<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${esc(m.title)}" />`);
  html = swap(html, /<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${esc(m.description)}" />`);
  html = swap(html, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${image}" />`);
  html = swap(html, /<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${esc(m.title)}" />`);
  html = swap(html, /<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${esc(m.description)}" />`);
  html = swap(html, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${image}" />`);
  if (noindex) html = html.replace("</head>", '    <meta name="robots" content="noindex" />\n  </head>');
  return html;
}

for (const route of ROUTES) {
  const dir = join(dist, route.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), render(route));
}
writeFileSync(join(dist, "404.html"), render("/404", { noindex: true }));
console.log(`pré-renderizado: ${ROUTES.length} rotas + 404.html`);
