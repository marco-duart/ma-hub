import { styled } from "@/theme/stitches.config";
import type { User } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(3, 1fr)" },
});

const Block = styled("article", {
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
});

const Title = styled("h3", {
  fontSize: "$lg",
  fontWeight: 600,
  marginBottom: "$2",
});

const Text = styled("p", { color: "$textMuted", fontSize: "$sm", lineHeight: 1.55 });

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