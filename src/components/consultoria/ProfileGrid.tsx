import { styled } from "@/theme/stitches.config";
import type { Profile } from "@/data/types";

const Grid = styled("div", {
  display: "grid",
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
});

const Item = styled("article", {
  padding: "$5",
  borderRadius: "4px",
  border: "1px solid rgba(148,163,184,0.35)",
  backgroundColor: "rgba(255,255,255,0.92)",
  display: "grid",
  gap: "$3",
  boxShadow: "0 16px 40px -34px rgba(15,23,42,0.42)",
});

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$2",
  marginBottom: "$1",
  borderBottom: "1px solid rgba(148,163,184,0.35)",
  paddingBottom: "$2",
});

const Code = styled("span", {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "$sm",
  color: "#334155",
  border: "1px solid rgba(148,163,184,0.4)",
  borderRadius: "999px",
  padding: "2px 10px",
  backgroundColor: "rgba(248,250,252,0.95)",
});

const Name = styled("h4", {
  fontSize: "$lg",
  fontWeight: 600,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
});

const Text = styled("p", {
  color: "#334155",
  fontSize: "$sm",
  lineHeight: 1.65,
});

const Kind = styled("span", {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "$xs",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  display: "block",
  marginBottom: "$1",
  fontWeight: 600,
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