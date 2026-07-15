import { Link } from "react-router-dom";
import { Briefcase, Cpu, Boxes, ArrowUpRight } from "lucide-react";
import { styled, keyframes } from "@/theme/stitches.config";
import { PageContent } from "@/components/layout/PageContent";
import { Badge } from "@/components/ui/Badge";
import { user } from "@/data";

const float = keyframes({
  "0%,100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-6px)" },
});

const Hero = styled("section", {
  position: "relative",
  overflow: "hidden",
  borderRadius: "$xl",
  border: "1px solid $border",
  backgroundColor: "$bgElev",
  padding: "$7 $5",
  "@md": { padding: "$10 $9" },
  isolation: "isolate",
});

const HeroGlow = styled("div", {
  position: "absolute",
  inset: 0,
  zIndex: -1,
  background: `
    radial-gradient(circle at 15% 20%, rgba(56,189,248,0.22), transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(168,85,247,0.22), transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(34,197,94,0.15), transparent 55%)
  `,
});

const HeroBadges = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",
  marginBottom: "$4",
});

const HeroTitle = styled("h1", {
  fontSize: "$3xl",
  lineHeight: 1.05,
  fontWeight: 700,
  color: "$text",
  "@sm": { fontSize: "$4xl" },
  "@md": { fontSize: "$5xl" },
});

const HeroAccent = styled("span", {
  background: "linear-gradient(120deg, $consultoria, $axis 55%, $pixel)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const HeroSub = styled("p", {
  color: "$textMuted",
  fontSize: "$md",
  marginTop: "$4",
  maxWidth: "620px",
  "@md": { fontSize: "$lg" },
});

const Grid = styled("div", {
  marginTop: "$8",
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(3, 1fr)", gap: "$5" },
});

const VerticalCard = styled(Link, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$text",
  overflow: "hidden",
  transition: "border-color $base, transform $base, box-shadow $base",
  minHeight: "220px",
  "&:hover": { transform: "translateY(-4px)" },
  "&:hover .icon-wrap": { animation: `${float} 2s ease-in-out infinite` },
  variants: {
    accent: {
      consultoria: {
        "&:hover": { borderColor: "$consultoria", boxShadow: "$glowConsultoria" },
      },
      axis: { "&:hover": { borderColor: "$axis", boxShadow: "$glowAxis" } },
      pixel: { "&:hover": { borderColor: "$pixel", boxShadow: "$glowPixel" } },
    },
  },
});

const IconWrap = styled("div", {
  size: "48px",
  borderRadius: "$md",
  display: "grid",
  placeItems: "center",
  backgroundColor: "$bgElev",
  border: "1px solid $border",
  variants: {
    accent: {
      consultoria: { color: "$consultoria" },
      axis: { color: "$axis" },
      pixel: { color: "$pixel" },
    },
  },
});

const VerticalTitle = styled("h3", {
  fontSize: "$xl",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$2",
});

const VerticalText = styled("p", {
  color: "$textMuted",
  fontSize: "$sm",
  lineHeight: 1.55,
});

const VerticalFoot = styled("div", {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "$2",
  fontSize: "$xs",
  color: "$textDim",
  fontFamily: "$mono",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
});

const verticals = [
  {
    to: "/consultoria",
    accent: "consultoria" as const,
    tone: "consultoria" as const,
    icon: Briefcase,
    label: "01 · Consultoria",
    title: "Consultoria M.A.",
    text: "Trajetória, currículo, cases e perfil comportamental. Descubra como posso ajudar seu produto ou time.",
    footnote: "Cases · CV · Perfil",
  },
  {
    to: "/axis",
    accent: "axis" as const,
    tone: "axis" as const,
    icon: Cpu,
    label: "02 · Produto",
    title: "Soluções M.A. Axis",
    text: "Showcase da nossa empresa de tecnologia. Conheça o Mostraai, Vox Obscura e o que vem por aí.",
    footnote: "Produtos · Projetos",
  },
  {
    to: "/pixel-vault",
    accent: "pixel" as const,
    tone: "pixel" as const,
    icon: Boxes,
    label: "03 · Loja",
    title: "Pixel Vault",
    text: "Catálogo de peças 3D com pegada geek — miniaturas, decoração, utilitários e mais.",
    footnote: "Impressão 3D · Geek",
  },
];

export function HomePage() {
  return (
    <PageContent>
      <Hero>
        <HeroGlow />
        <HeroBadges>
          <Badge tone="consultoria">consultoria</Badge>
          <Badge tone="axis">axis</Badge>
          <Badge tone="pixel">pixel vault</Badge>
        </HeroBadges>
        <HeroTitle>
          Uma porta.<br />
          <HeroAccent>Três universos.</HeroAccent>
        </HeroTitle>
        <HeroSub>
          Olá, sou {user.name}. Este é o meu hub — a entrada única para minha
          consultoria, os produtos da <strong>M.A. Axis</strong> e o catálogo
          geek do <strong>Pixel Vault</strong>.
        </HeroSub>
      </Hero>

      <Grid>
        {verticals.map((v) => {
          const Icon = v.icon;
          return (
            <VerticalCard key={v.to} to={v.to} accent={v.accent}>
              <div>
                <IconWrap className="icon-wrap" accent={v.accent}>
                  <Icon size={24} />
                </IconWrap>
              </div>
              <VerticalTitle>
                {v.title}
                <ArrowUpRight size={20} />
              </VerticalTitle>
              <VerticalText>{v.text}</VerticalText>
              <VerticalFoot>
                <Badge tone={v.tone}>{v.label}</Badge>
                <span>{v.footnote}</span>
              </VerticalFoot>
            </VerticalCard>
          );
        })}
      </Grid>
    </PageContent>
  );
}