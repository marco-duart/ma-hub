import { styled } from "@/theme/stitches.config";
import type { Profile } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
});

const Item = styled("article", {
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
});

const Header = styled("div", {
  display: "flex",
  alignItems: "baseline",
  gap: "$2",
  marginBottom: "$3",
});

const Code = styled("span", {
  fontFamily: "$mono",
  fontSize: "$sm",
  color: "$consultoria",
});

const Name = styled("h4", { fontSize: "$md", fontWeight: 600 });
const Text = styled("p", { color: "$textMuted", fontSize: "$sm", lineHeight: 1.55 });
const Kind = styled("span", {
  fontFamily: "$mono",
  fontSize: "$xs",
  color: "$textDim",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  display: "block",
  marginBottom: "$2",
});

export function ProfileGrid({ profile }: { profile: Profile }) {
  const items = [
    { kind: "Eneagrama", ...profile.eneagram },
    { kind: "DISC", ...profile.disc },
    { kind: "16 Personalities", ...profile.personality16 },
    { kind: "Temperamentos", ...profile.temperaments },
  ];

  return (
    <Grid>
      {items.map((p) => (
        <Item key={p.kind}>
          <Kind>{p.kind}</Kind>
          <Header>
            <Name>{p.name}</Name>
            <Code>{p.code}</Code>
          </Header>
          <Text>{p.description}</Text>
        </Item>
      ))}
    </Grid>
  );
}