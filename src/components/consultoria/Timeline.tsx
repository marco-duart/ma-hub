import { styled } from "@/theme/stitches.config";
import type { Experience, Education } from "@/data/types";
import { formatPeriod } from "@/utils/date";

const List = styled("ol", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "8px",
    top: 0,
    bottom: 0,
    width: "1px",
    background: "linear-gradient(to bottom, $consultoria, transparent)",
    opacity: 0.4,
  },
});

const Item = styled("li", {
  position: "relative",
  paddingLeft: "$6",
  paddingBottom: "$6",
  "&:last-child": { paddingBottom: 0 },
});

const Dot = styled("span", {
  position: "absolute",
  left: "2px",
  top: "6px",
  size: "12px",
  borderRadius: "$pill",
  background: "$consultoria",
  boxShadow: "0 0 0 4px rgba(56,189,248,0.15)",
});

const Period = styled("div", {
  fontFamily: "$mono",
  fontSize: "$xs",
  color: "$textDim",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
});

const Title = styled("h4", { fontSize: "$md", fontWeight: 600, marginTop: "$1" });
const Sub = styled("p", { color: "$consultoria", fontSize: "$sm", marginTop: "2px" });
const Text = styled("p", { color: "$textMuted", fontSize: "$sm", marginTop: "$2", lineHeight: 1.55 });

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
          <Dot />
          <Period>{e.period}</Period>
          <Title>{e.title}</Title>
          <Sub>{e.sub}</Sub>
          <Text>{e.description}</Text>
        </Item>
      ))}
    </List>
  );
}