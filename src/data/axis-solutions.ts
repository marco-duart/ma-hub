import type { AxisSolution } from "./types";

export const axisSolutions: AxisSolution[] = [
  {
    id: 1,
    name: "Mostraai",
    tagline: "Sua vitrine digital, do jeito certo.",
    description:
      "App onde criadores exibem e monetizam seus trabalhos com uma experiência mobile-first.",
    status: "BETA",
    technologies: ["React Native", "NestJS", "ReactJs", "PostgreSQL"],
    highlights: [
      "Onboarding em menos de 60 segundos",
      "Ferramentas de monetização integradas",
      "Analytics em tempo real para o criador",
    ],
    link: "https://mostraai.app.br",
  },
  {
    id: 2,
    name: "Vox Obscura",
    tagline: "Em desenvolvimento — em breve.",
    description: "Entretenimento de uma forma jamais vista antes...",
    status: "IN_DEVELOPMENT",
    technologies: ["React Native", "NestJS", "PostgreSQL"],
    highlights: ["..."],
    link: "#",
  },
];
