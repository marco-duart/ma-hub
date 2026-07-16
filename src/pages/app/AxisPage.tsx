import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/axis/SolutionCard";
import { axisSolutions } from "@/data";
import { styled, keyframes } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";

const gridAnimation = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

const AxisWrapper = styled("div", {
  background: "#01000e",
  color: "$text",
});

const Hero = styled("section", {
  position: "relative",
  padding: "$7 $5",
  borderRadius: "$xl",
  overflow: "hidden",
  background: `
    linear-gradient(rgba(2, 0, 23, 0.8), rgba(2, 0, 23, 0.8)),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
  `,
  animation: `${gridAnimation} 20s ease infinite`,
  border: "1px solid $axis",

  "@md": { padding: "$9" },
});

const Glow = styled("div", {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.25), transparent 55%)",
});

const Inner = styled("div", { position: "relative", zIndex: 1 });

const Title = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 700,
  fontFamily: "$mono",
  color: "white",
  marginTop: "$3",
  "@md": { fontSize: "$4xl" },
});

const Sub = styled("p", {
  color: "$textMuted",
  fontSize: "$md",
  marginTop: "$4",
  maxWidth: "680px",
  "@md": { fontSize: "$lg" },
});

const Grid = styled("div", {
  marginTop: "$8",
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@lg": { gridTemplateColumns: "repeat(3, 1fr)" },
});

export function AxisPage() {
  return (
    <AxisWrapper>
      <PageContent>
        <Hero>
          <Glow />
          <Inner>
            <Badge tone="axis">M.A. Axis</Badge>
            <Title>Tecnologia com propósito.</Title>
            <Sub>
              Somos uma casa de produtos digitais. Aqui você conhece as soluções
              que estamos construindo — do MVP à operação em escala.
            </Sub>
          </Inner>
        </Hero>

        <div style={{ marginTop: 48 }}>
          <SectionHeader eyebrow="Portfólio" title="Soluções" />
          <Grid>
            {axisSolutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </Grid>
        </div>
      </PageContent>
    </AxisWrapper>
  );
}