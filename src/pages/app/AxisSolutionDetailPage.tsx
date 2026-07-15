import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PageContent } from "@/components/layout/PageContent";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { axisSolutions } from "@/data";
import { styled } from "@/theme/stitches.config";

const Back = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  color: "$textMuted",
  fontSize: "$sm",
  marginBottom: "$5",
  "&:hover": { color: "$text" },
});

const Hero = styled("section", {
  padding: "$7 $5",
  borderRadius: "$xl",
  border: "1px solid $border",
  backgroundColor: "$bgElev",
  "@md": { padding: "$9" },
});

const Title = styled("h1", { fontSize: "$3xl", fontWeight: 700, marginTop: "$3" });
const Tag = styled("p", { color: "$axis", fontFamily: "$mono", marginTop: "$2" });
const Desc = styled("p", { color: "$textMuted", fontSize: "$md", marginTop: "$4", lineHeight: 1.6 });

const Grid = styled("div", {
  marginTop: "$8",
  display: "grid",
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "2fr 1fr" },
});

const Card = styled("div", {
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
});

const H = styled("h3", { fontSize: "$lg", fontWeight: 600, marginBottom: "$3" });
const UL = styled("ul", { paddingLeft: "$4", color: "$textMuted", lineHeight: 1.7, margin: 0 });
const Row = styled("div", { display: "flex", flexWrap: "wrap", gap: "$2" });

export function AxisSolutionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const solution = axisSolutions.find((s) => String(s.id) === id);

  if (!solution) {
    return (
      <PageContent>
        <p>Solução não encontrada.</p>
        <Link to="/axis">Voltar</Link>
      </PageContent>
    );
  }

  return (
    <PageContent>
      <Back to="/axis"><ArrowLeft size={16} /> Voltar para Axis</Back>
      <Hero>
        <Badge tone="axis">{solution.status}</Badge>
        <Title>{solution.name}</Title>
        <Tag>{solution.tagline}</Tag>
        <Desc>{solution.description}</Desc>
        {solution.link && (
          <div style={{ marginTop: 24 }}>
            <a href={solution.link} target="_blank" rel="noreferrer">
              <Button variant="axis">
                Visitar solução <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        )}
      </Hero>

      <Grid>
        <Card>
          <H>Destaques</H>
          <UL>
            {solution.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </UL>
        </Card>
        <Card>
          <H>Stack</H>
          <Row>
            {solution.technologies.map((t) => (
              <Badge key={t} tone="axis">{t}</Badge>
            ))}
          </Row>
        </Card>
      </Grid>
    </PageContent>
  );
}