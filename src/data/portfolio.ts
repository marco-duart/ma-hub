import type { PortfolioItem, PortfolioPhoto } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Mostraai",
    show: true,
    description: "App para criadores exibirem e monetizarem seu trabalho.",
    technologies: "React Native, NestJS, PostgreSQL, AWS",
    link: "https://mostraai.com",
  },
  {
    id: 2,
    name: "Vox Obscura",
    show: true,
    description: "Plataforma de narrativas em áudio com curadoria autoral.",
    technologies: "Next.js, Node.js, Supabase",
    link: "#",
  },
];

export const portfolioPhotos: PortfolioPhoto[] = [
  { id: 1, photoUrl: "" },
  { id: 2, photoUrl: "" },
];