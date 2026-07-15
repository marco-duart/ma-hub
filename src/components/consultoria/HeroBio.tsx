import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { User, Resume } from "@/data/types";

const Wrap = styled("section", {
  position: "relative",
  padding: "$7 $5",
  borderRadius: "$xl",
  border: "1px solid $border",
  backgroundColor: "$bgElev",
  overflow: "hidden",
  "@md": { padding: "$9" },
});

const Glow = styled("div", {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.20), transparent 55%)",
  zIndex: 0,
});

const Content = styled("div", { position: "relative", zIndex: 1 });

const Name = styled("h1", {
  fontSize: "$3xl",
  fontWeight: 700,
  "@md": { fontSize: "$4xl" },
});

const Role = styled("p", {
  color: "$consultoria",
  fontFamily: "$mono",
  fontSize: "$sm",
  marginTop: "$2",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
});

const Summary = styled("p", {
  color: "$textMuted",
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