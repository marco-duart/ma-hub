import { useMemo, useState } from "react";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/pixel-vault/ProductCard";
import { pixelProducts } from "@/data";
import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";

const Hero = styled("section", {
  position: "relative",
  padding: "$7 $5",
  borderRadius: "$xl",
  border: "1px solid $border",
  backgroundColor: "$bgElev",
  overflow: "hidden",
  "@md": { padding: "$9" },
});

const Glow = styled("div", {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at 20% 100%, rgba(34,197,94,0.22), transparent 55%)",
});

const Inner = styled("div", { position: "relative", zIndex: 1 });
const Title = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 700,
  marginTop: "$3",
  fontFamily: "$mono",
  "@md": { fontSize: "$4xl" },
});
const Sub = styled("p", {
  color: "$textMuted",
  fontSize: "$md",
  marginTop: "$4",
  maxWidth: "680px",
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
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$textMuted",
  fontFamily: "$mono",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  px: "$3",
  py: "$2",
  borderRadius: "$pill",
  transition: "all $fast",
  "&:hover": { borderColor: "$pixel", color: "$text" },
  variants: {
    active: { true: { borderColor: "$pixel", color: "$pixel", backgroundColor: "rgba(34,197,94,0.08)" } },
  },
});

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "repeat(2, 1fr)",
  "@sm": { gridTemplateColumns: "repeat(3, 1fr)" },
  "@lg": { gridTemplateColumns: "repeat(4, 1fr)" },
});

export function PixelVaultPage() {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(pixelProducts.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState<string>("Todos");
  const filtered = active === "Todos" ? pixelProducts : pixelProducts.filter((p) => p.category === active);

  return (
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
  );
}