import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { SuccessCase } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
});

const Item = styled("article", {
  padding: "$5",
  borderRadius: "6px",
  border: "1px solid rgba(148,163,184,0.34)",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  backgroundColor: "rgba(255,255,255,0.92)",
  boxShadow: "0 20px 45px -36px rgba(15,23,42,0.48)",
});

const Meta = styled("div", { display: "flex", gap: "$2", flexWrap: "wrap" });
const Title = styled("h4", {
  fontSize: "$xl",
  fontWeight: 600,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
});

const Text = styled("p", {
  color: "#334155",
  fontSize: "$sm",
  lineHeight: 1.65,
});

const Impact = styled("p", {
  color: "#0f172a",
  fontSize: "$sm",
  fontWeight: 700,
  paddingTop: "$4",
  borderTop: "1px solid rgba(148,163,184,0.35)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});

export function SuccessCases({ cases }: { cases: SuccessCase[] }) {
  return (
    <Grid>
      {cases.map((c) => (
        <Item key={c.id}>
          <Meta>
            <Badge tone="consultoria">{c.role}</Badge>
            <Badge>{c.segment}</Badge>
          </Meta>
          <Title>{c.title}</Title>
          <Text>{c.narrative}</Text>
          <Impact>Impacto: {c.businessImpact}</Impact>
        </Item>
      ))}
    </Grid>
  );
}