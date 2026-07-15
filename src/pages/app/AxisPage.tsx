import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/axis/SolutionCard";
import { axisSolutions } from "@/data";
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
  background: "radial-gradient(circle at 80% 20%, rgba(168,85,247,0.25), transparent 55%)",
});

const Inner = styled("div", { position: "relative", zIndex: 1 });

const Title = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 700,
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
  marginTop: "$9",
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@lg": { gridTemplateColumns: "repeat(3, 1fr)" },
});

export function AxisPage() {
  return (
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
  );
}