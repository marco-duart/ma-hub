import { useMemo, useState } from "react";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/pixel-vault/ProductCard";
import { pixelProducts } from "@/data";
import { styled, keyframes } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";

const blink = keyframes({
  "50%": { opacity: 0 },
});

const scanlines = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "100%": { backgroundPosition: "0 100%" },
});

const popIn = keyframes({
  from: { opacity: 0, transform: "translateY(12px) scale(0.98)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

const PixelWrapper = styled("main", {
  backgroundColor: "#f8fafc",
  color: "#101623",
  fontFamily: "'Comic Neue', cursive",
  backgroundImage:
    "radial-gradient(circle at 12% 15%, rgba(251,191,36,0.32), transparent 40%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.18), transparent 45%), radial-gradient(circle at 70% 85%, rgba(249,115,22,0.22), transparent 48%), repeating-linear-gradient(45deg, rgba(15,23,42,0.04), rgba(15,23,42,0.04) 2px, transparent 2px, transparent 12px)",
  backgroundAttachment: "scroll",
  position: "relative",

  "&::after": {
    content: '""',
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "linear-gradient(rgba(16, 22, 35, 0) 50%, rgba(16, 22, 35, 0.06) 50%)",
    backgroundSize: "100% 3px",
    zIndex: 1,
    pointerEvents: "none",
    mixBlendMode: "multiply",
    animation: `${scanlines} 0.3s infinite linear`,
  },
});

const Hero = styled("section", {
  position: "relative",
  padding: "$7 $5",
  borderRadius: "0px",
  border: "4px solid #101623",
  backgroundColor: "#facc15",
  overflow: "hidden",
  boxShadow:
    "8px 8px 0 #101623, inset -5px -5px 0 rgba(16,22,35,0.22), inset 5px 5px 0 rgba(255,255,255,0.45)",
  "@md": { padding: "$9" },
  animation: `${popIn} 420ms ease-out`,
});

const Glow = styled("div", {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 90% 15%, rgba(255,255,255,0.5), transparent 45%)",
});

const Inner = styled("div", { position: "relative", zIndex: 1 });
const Title = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 400,
  marginTop: "$3",
  fontFamily: "'Bangers', cursive",
  letterSpacing: "0.05em",
  color: "#101623",
  textTransform: "uppercase",
  textShadow: "2px 2px 0 #fff",
  "@md": { fontSize: "$4xl" },
  "&::after": {
    content: "' !'",
    animation: `${blink} 1s step-end infinite`,
    marginLeft: "$2",
  },
});
const Sub = styled("p", {
  color: "#1f2937",
  fontSize: "$md",
  marginTop: "$4",
  maxWidth: "680px",
  fontWeight: 700,
  "@md": { fontSize: "$lg" },
});

const Filters = styled("div", {
  display: "flex",
  gap: "$2",
  flexWrap: "wrap",
  marginBottom: "$5",
});

const FilterBtn = styled("button", {
  cursor: "pointer",
  border: "3px solid #101623",
  backgroundColor: "#ffffff",
  color: "#101623",
  fontFamily: "'Bangers', cursive",
  fontSize: "$xs",
  letterSpacing: "0.08em",
  px: "$4",
  py: "$2",
  borderRadius: "0px",
  transition: "transform $fast, box-shadow $fast, background-color $fast",
  boxShadow: "4px 4px 0 #101623",
  "&:hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: "6px 6px 0 #101623",
  },
  "&:active": {
    transform: "translate(1px, 1px)",
    boxShadow: "2px 2px 0 #101623",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "#22c55e",
        color: "#07110c",
      },
    },
  },
});

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr 1fr",
  "@sm": { gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" },
  "@lg": { gridTemplateColumns: "repeat(4, 1fr)" },
});

export function PixelVaultPage() {
  const categories = useMemo(
    () => [
      "Todos",
      ...Array.from(new Set(pixelProducts.map((p) => p.category))),
    ],
    [],
  );
  const [active, setActive] = useState<string>("Todos");
  const filtered =
    active === "Todos"
      ? pixelProducts
      : pixelProducts.filter((p) => p.category === active);

  return (
    <PixelWrapper>
      <PageContent>
        <Hero>
          <Glow />
          <Inner>
            <Badge tone="pixel">Pixel Vault</Badge>
            <Title>Peças 3D com alma geek.</Title>
            <Sub>
              Catálogo de miniaturas, decoração e utilitários impressos em 3D.
              Feito por quem entende de fandom. Sem checkout — por enquanto :)
            </Sub>
          </Inner>
        </Hero>

        <div style={{ marginTop: 48 }}>
          <SectionHeader eyebrow="Catálogo" title="Explore o vault" />
          <Filters>
            {categories.map((c) => (
              <FilterBtn key={c} active={active === c} onClick={() => setActive(c)}>
                {c}
              </FilterBtn>
            ))}
          </Filters>
          <Grid>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Grid>
        </div>
      </PageContent>
    </PixelWrapper>
  );
}