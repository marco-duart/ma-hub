import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { SuccessCase } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
});

const Item = styled("article", {
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

const Meta = styled("div", { display: "flex", gap: "$2", flexWrap: "wrap" });
const Title = styled("h4", { fontSize: "$lg", fontWeight: 600 });
const Text = styled("p", { color: "$textMuted", fontSize: "$sm", lineHeight: 1.55 });
const Impact = styled("p", {
  color: "$consultoria",
  fontSize: "$sm",
  fontWeight: 600,
  paddingTop: "$3",
  borderTop: "1px dashed $border",
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