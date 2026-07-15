import type { AxisSolution } from "./types";

export const axisSolutions: AxisSolution[] = [
  {
    id: 1,
    name: "Mostraai",
    tagline: "Sua vitrine digital, do jeito certo.",
    description:
      "App onde criadores exibem e monetizam seus trabalhos com uma experiência mobile-first, checkout embutido e ferramentas de audiência.",
    status: "LIVE",
    technologies: ["React Native", "NestJS", "PostgreSQL", "AWS", "Stripe"],
    highlights: [
      "Onboarding em menos de 60 segundos",
      "Ferramentas de monetização integradas",
      "Analytics em tempo real para o criador",
    ],
    link: "https://mostraai.com",
  },
  {
    id: 2,
    name: "Vox Obscura",
    tagline: "Narrativas em áudio, curadoria autoral.",
    description:
      "Plataforma de conteúdo em áudio com foco em narrativa longa, produção original e experiência imersiva de escuta.",
    status: "BETA",
    technologies: ["Next.js", "Node.js", "Supabase", "FFmpeg"],
    highlights: [
      "Player customizado com marcadores narrativos",
      "Catálogo curado — não algorítmico",
      "Modo offline para episódios completos",
    ],
    link: "#",
  },
  {
    id: 3,
    name: "Projeto Ômega",
    tagline: "Em desenvolvimento — em breve.",
    description:
      "Próxima solução do portfólio M.A. Axis. Detalhes serão revelados em breve.",
    status: "IN_DEVELOPMENT",
    technologies: ["TypeScript", "Edge Compute", "AI"],
    highlights: ["Stealth mode", "Foco em produtividade assistida por IA"],
  },
];