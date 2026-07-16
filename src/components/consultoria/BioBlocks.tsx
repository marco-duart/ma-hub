import { styled } from "@/theme/stitches.config";
import type { User } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(3, 1fr)" },
});

const Block = styled("article", {
  padding: "$5",
  borderRadius: "4px",
  border: "1px solid rgba(148,163,184,0.38)",
  borderLeft: "4px solid #0f172a",
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "0 20px 45px -36px rgba(15,23,42,0.5)",
  minHeight: "210px",
});

const Title = styled("h3", {
  fontFamily: "'Source Serif 4', serif",
  fontSize: "$xl",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "$3",
});

const Text = styled("p", {
  color: "#334155",
  fontSize: "$sm",
  lineHeight: 1.65,
});

export function BioBlocks({ bio }: { bio: User["bio"] }) {
  return (
    <Grid>
      {bio.map((b, i) => (
        <Block key={i}>
          <Title>{b.title}</Title>
          <Text>{b.text}</Text>
        </Block>
      ))}
    </Grid>
  );
}