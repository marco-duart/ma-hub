import { styled } from "@/theme/stitches.config";
import type { Experience, Education } from "@/data/types";
import { formatPeriod } from "@/utils/date";

const List = styled("ol", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: "$4",
});

const Item = styled("li", {
  display: "grid",
  gap: "$3",
  backgroundColor: "rgba(255,255,255,0.88)",
  border: "1px solid rgba(148,163,184,0.38)",
  borderRadius: "4px",
  padding: "$5",
  boxShadow: "0 18px 42px -36px rgba(15,23,42,0.5)",
  "@md": {
    gridTemplateColumns: "180px 1fr",
    alignItems: "start",
  },
});

const Period = styled("div", {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "$xs",
  color: "#1e293b",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontWeight: 600,
  border: "1px solid rgba(100,116,139,0.34)",
  borderRadius: "999px",
  width: "fit-content",
  padding: "4px 10px",
  backgroundColor: "rgba(241,245,249,0.9)",
});

const Body = styled("div", {
  borderLeft: "2px solid rgba(15,23,42,0.18)",
  paddingLeft: "$4",
});

const Title = styled("h4", {
  fontSize: "$lg",
  fontWeight: 600,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
});

const Sub = styled("p", {
  color: "#0ea5e9",
  fontSize: "$sm",
  marginTop: "$1",
  fontWeight: 600,
});

const Text = styled("p", {
  color: "#334155",
  fontSize: "$sm",
  marginTop: "$2",
  lineHeight: 1.6,
});

type Entry = { id: number; title: string; sub: string; period: string; description: string };

function experienceToEntry(e: Experience): Entry {
  return {
    id: e.id,
    title: e.role,
    sub: e.companyName,
    period: formatPeriod(e.startDate, e.endDate),
    description: e.description,
  };
}

function educationToEntry(e: Education): Entry {
  return {
    id: e.id,
    title: e.degree,
    sub: e.institutionName,
    period: formatPeriod(e.startDate, e.endDate),
    description: e.description,
  };
}

export function Timeline({
  items,
}: {
  items: (Experience | Education)[];
}) {
  const entries = items.map((it) =>
    "companyName" in it ? experienceToEntry(it) : educationToEntry(it),
  );
  return (
    <List>
      {entries.map((e) => (
        <Item key={e.id}>
          <Period>{e.period}</Period>
          <Body>
            <Title>{e.title}</Title>
            <Sub>{e.sub}</Sub>
            <Text>{e.description}</Text>
          </Body>
        </Item>
      ))}
    </List>
  );
}