/** Dados que se repetem pelo site (rodapé, cabeçalho, cartões). O texto de cada sistema fica na página dele. */

export const SITE = {
  name: "M.A. Axis",
  legalName: "Maaxis",
  cnpj: "61.580.959/0001-38",
  email: "maaxis.tech@gmail.com",
  url: "https://www.ma-axis.com.br",
  whatsapp: {
    phone: "5562994069668",
    label: "(62) 99406-9668",
    full: "+55 (62) 99406-9668",
    url: "https://wa.me/5562994069668",
  },
  instagram: { handle: "@maaxis.tech", url: "https://www.instagram.com/maaxis.tech/" },
  forja: { handle: "@forjamithril.3d", url: "https://www.instagram.com/forjamithril.3d/" },
} as const;

export const mailto = (subject: string): string =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

export const whatsappUrl = (text?: string): string =>
  text ? `${SITE.whatsapp.url}?text=${encodeURIComponent(text)}` : SITE.whatsapp.url;

const play = (id: string): string => `https://play.google.com/store/apps/details?id=${id}`;

export interface AppInfo {
  id: string;
  name: string;
  system: SystemKey;
  audience: string;
  icon: string;
  play: string;
}

export const APPS: readonly AppInfo[] = [
  { id: "dita", name: "Dita", system: "dita", audience: "Lojistas e equipes", icon: "/img/icons/dita.webp", play: play("com.dita_mobile.app") },
  { id: "mostra-ai", name: "MostraAi", system: "mostra-ai", audience: "Lojistas: cardápio, mesas e agenda", icon: "/img/icons/mostra-ai.webp", play: play("com.mostraai.app") },
  { id: "mostra-ai-cliente", name: "MostraAi Cliente", system: "mostra-ai", audience: "Clientes: mapa de lojas e agendamentos", icon: "/img/icons/mostra-ai-cliente.webp", play: play("com.mostraai_client.app") },
  { id: "mostra-ai-parceiro", name: "MostraAi Parceiro", system: "mostra-ai", audience: "Garçons e cozinha", icon: "/img/icons/mostra-ai-parceiro.webp", play: play("com.mostraai_partner.app") },
  { id: "rasttro", name: "Rasttro", system: "rasttro", audience: "Integrantes do motoclube", icon: "/img/icons/rasttro.webp", play: play("com.rasttro.app") },
  { id: "profyla", name: "Profyla", system: "profyla", audience: "Candidatos a vagas", icon: "/img/icons/profyla.webp", play: play("com.profyla.app") },
];

export const appById = (id: string): AppInfo => {
  const app = APPS.find((a) => a.id === id);
  if (!app) throw new Error(`App desconhecido: ${id}`);
  return app;
};

export type SystemKey = "dita" | "mostra-ai" | "rasttro" | "profyla";

export interface SystemInfo {
  key: SystemKey;
  name: string;
  route: string;
  /** Verbo da frase "Mostre. Atenda. Contrate. Organize." */
  verb: string;
  slogan: string;
  oneLiner: string;
  theme: "dita" | "mostra" | "rasttro" | "profyla";
  icon: string;
  banner: string;
  web: { label: string; url: string };
  privacy: string;
  terms?: string;
}

export const SYSTEMS: readonly SystemInfo[] = [
  {
    key: "mostra-ai", name: "MostraAi", route: "/mostra-ai", verb: "Mostre", slogan: "Descubra. Conecte-se. Aproveite.",
    oneLiner: "Cardápio, catálogo e agenda de serviços no QR Code, com mesas, garçom e comanda digital.",
    theme: "mostra", icon: "/img/icons/mostra-ai.webp", banner: "/img/slogans/mostra-ai.webp",
    web: { label: "mostraai.app.br", url: "https://mostraai.app.br" }, privacy: "https://mostraai.app.br/privacy", terms: "https://mostraai.app.br/terms",
  },
  {
    key: "dita", name: "Dita", route: "/dita", verb: "Atenda", slogan: "Mais conversas. Mais negócios.",
    oneLiner: "Atende seus clientes no WhatsApp, monta o pedido, acompanha a cobrança e chama você quando precisa.",
    theme: "dita", icon: "/img/icons/dita.webp", banner: "/img/slogans/dita.webp",
    web: { label: "dita.app.br", url: "https://www.dita.app.br" }, privacy: "https://www.dita.app.br/privacidade", terms: "https://www.dita.app.br/termos",
  },
  {
    key: "profyla", name: "Profyla", route: "/profyla", verb: "Contrate", slogan: "Conectando talentos a oportunidades.",
    oneLiner: "Recrutamento com currículo, testes DISC e Eneagrama e todas as etapas do processo seletivo.",
    theme: "profyla", icon: "/img/icons/profyla.webp", banner: "/img/slogans/profyla.webp",
    web: { label: "profyla.app.br", url: "https://profyla.app.br" }, privacy: "https://profyla.app.br/privacidade", terms: "https://profyla.app.br/termos",
  },
  {
    key: "rasttro", name: "Rasttro", route: "/rasttro", verb: "Organize", slogan: "Juntos na estrada. Sempre.",
    oneLiner: "Gestão completa para motoclubes: membros, mensalidades, eventos, comboios e carteirinha digital.",
    theme: "rasttro", icon: "/img/icons/rasttro.webp", banner: "/img/slogans/rasttro.webp",
    web: { label: "rasttro.app.br", url: "https://www.rasttro.app.br" }, privacy: "https://www.rasttro.app.br/privacidade",
  },
];

export const systemByKey = (key: SystemKey): SystemInfo => {
  const s = SYSTEMS.find((x) => x.key === key);
  if (!s) throw new Error(`Sistema desconhecido: ${key}`);
  return s;
};

export const NAV = [
  { to: "/apps", label: "Apps" },
  { to: "/contato", label: "Contato" },
] as const;
