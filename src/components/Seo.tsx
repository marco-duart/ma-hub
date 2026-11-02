import meta from "@/meta.json";
import { SITE } from "@/site";

type Route = keyof typeof meta;

/** Título, descrição, canônico e cartões de compartilhamento da rota (dados em src/meta.json; o pré-render grava o mesmo no HTML). */
export function Seo({ route, noindex = false }: { route: Route; noindex?: boolean }) {
  const m = meta[route];
  const url = `${SITE.url}${route === "/" ? "/" : route}`;
  const image = `${SITE.url}${m.image}`;
  return (
    <>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
