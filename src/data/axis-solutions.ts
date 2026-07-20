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
  {
    id: 3,
    name: "Aptivon",
    tagline: "Gestão de RH nunca foi tão fácil.",
    description:
      "Plataforma que simplifica a gestão de recursos humanos, desde recrutamento até avaliação de desempenho.",
    status: "IN_DEVELOPMENT",
    technologies: ["Ruby on Rails", "ReactJs", "PostgreSQL"],
    highlights: [
      "Testes customizados",
      "Gestão de desempenho simplificada",
      "Relatórios detalhados para a equipe de RH",
    ],
    link: "#",
  },
  {
    id: 4,
    name: "Convera",
    tagline: "Todo controle a partir do Whatsapp do seu negócio.",
    description:
      "ERP orientado a conversas Whatsapp, onde é gerado todo o controle do seu negócio.",
    status: "IN_DEVELOPMENT",
    technologies: ["Ruby on Rails", "NextJs", "PostgreSQL"],
    highlights: [
      "Controle financeiro integrado",
      "Gestão de estoque simplificada",
      "Relatórios detalhados para o gestor",
    ],
    link: "#",
  },
];
