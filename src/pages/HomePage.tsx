import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { styled } from "@/theme/stitches.config";

const HomeWrapper = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "$5",
  textAlign: "center",
  backgroundColor: "$bg",
});

const MainTitle = styled("h1", {
  fontSize: "$xl",
  color: "$textMuted",
  marginBottom: "$8",
  fontWeight: 400,
  fontFamily: "$mono",
  letterSpacing: "0.05em",
  "@md": { fontSize: "$2xl" },
});

const PortalsGrid = styled("div", {
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$5",
  "@md": { gridTemplateColumns: "repeat(3, 1fr)" },
});

const PortalCard = styled(Link, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "$6",
  minHeight: "350px",
  color: "$text",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textDecoration: "none",

  "&:hover": { transform: "translateY(-4px)" },

  variants: {
    accent: {
      consultoria: {
        backgroundColor: "#F8F9FA",
        border: "1px solid #DEE2E6",
        color: "#212529",
        borderRadius: "8px",
        "&:hover": { boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" },
      },
      axis: {
        backgroundColor: "#0D0029",
        border: "1px solid $axis",
        color: "#E0E0E0",
        borderRadius: "0",
        "&:hover": { boxShadow: "$glowAxis" },
      },
      pixel: {
        backgroundColor: "#27272A",
        border: "4px solid $pixel",
        color: "#A1A1AA",
        borderRadius: "0",
        fontFamily: "'Press Start 2P', cursive",
        "&:hover": {
          boxShadow: "inset -6px -6px 0px 0px #3f3f46",
          color: "$pixel",
        },
      },
    },
  },
});

const PortalHeader = styled("div", {
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  variants: {
    accent: {
      consultoria: { color: "$consultoria" },
      axis: { color: "$axis" },
      pixel: { color: "$pixel", fontSize: "$xs" },
    },
  },
});

const PortalTitle = styled("h2", {
  fontSize: "$3xl",
  fontWeight: 700,
  textAlign: "left",
  marginTop: "$4",
  variants: {
    accent: {
      consultoria: { fontFamily: "'Merriweather', serif", color: "#212529" },
      axis: { fontFamily: "$mono", color: "white" },
      pixel: {
        fontFamily: "'Press Start 2P', cursive",
        color: "white",
        textShadow: "2px 2px 0px #000",
        fontSize: "$2xl",
      },
    },
  },
});

type VerticalAccent = "consultoria" | "axis" | "pixel";

const verticals = [
  {
    accent: "consultoria" as VerticalAccent,
    label: "01 · Consultoria",
    title: "Consultoria M.A.",
  },
  {
    accent: "axis" as VerticalAccent,
    label: "02 · Produto",
    title: "Soluções M.A. Axis",
  },
  {
    accent: "pixel" as VerticalAccent,
    label: "03 · Loja",
    title: "Pixel Vault",
  },
];

export function HomePage() {
  return (
    <HomeWrapper>
      <MainTitle>Escolha um universo para explorar.</MainTitle>
      <PortalsGrid>
        {verticals.map((v) => {
          return (
            <PortalCard key={v.accent} to={`/${v.accent}`} accent={v.accent}>
              <div>
                <PortalHeader accent={v.accent}>{v.label}</PortalHeader>
                <PortalTitle accent={v.accent}>{v.title}</PortalTitle>
              </div>
              <ArrowUpRight
                size={24}
                style={{ alignSelf: "flex-end", color: "var(--colors-textMuted)" }}
              />
            </PortalCard>
          );
        })}
      </PortalsGrid>
    </HomeWrapper>
  );
}