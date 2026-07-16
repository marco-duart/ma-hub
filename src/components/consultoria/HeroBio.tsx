import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { User, Resume } from "@/data/types";

const Wrap = styled("section", {
  position: "relative",
  padding: "$7 $5",
  borderRadius: "8px",
  border: "1px solid rgba(148,163,184,0.45)",
  background:
    "linear-gradient(115deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.94) 45%, rgba(241,245,249,0.96) 100%)",
  boxShadow: "0 24px 55px -38px rgba(15,23,42,0.45)",
  overflow: "hidden",
  "@md": { padding: "$9" },
});

const Glow = styled("div", {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 85% 20%, rgba(15,23,42,0.09), transparent 60%)",
  zIndex: 0,
});

const Content = styled("div", { position: "relative", zIndex: 1 });

const Name = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 600,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
  letterSpacing: "-0.015em",
  "@md": { fontSize: "$4xl" },
});

const Role = styled("p", {
  color: "#0f172a",
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontWeight: 500,
  fontSize: "$sm",
  marginTop: "$2",
  textTransform: "uppercase",
  letterSpacing: "0.13em",
});

const Summary = styled("p", {
  color: "#334155",
  fontSize: "$md",
  lineHeight: 1.6,
  marginTop: "$5",
  maxWidth: "720px",
  "@md": { fontSize: "$lg" },
});

export function HeroBio({ user, resume }: { user: User; resume: Resume }) {
  return (
    <Wrap>
      <Glow />
      <Content>
        <Badge tone="consultoria">{resume.title}</Badge>
        <Name style={{ marginTop: 12 }}>{user.name}</Name>
        <Role>{user.bioTitle}</Role>
        <Summary>{resume.summary}</Summary>
      </Content>
    </Wrap>
  );
}