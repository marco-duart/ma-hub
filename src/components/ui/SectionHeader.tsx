import { styled } from "@/theme/stitches.config";

const Wrap = styled("header", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginBottom: "$6",
});

const Eyebrow = styled("span", {
  fontFamily: "$mono",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "$textDim",
});

const Title = styled("h2", {
  fontSize: "$2xl",
  fontWeight: 700,
  color: "$text",
  "@md": { fontSize: "$3xl" },
});

const Subtitle = styled("p", {
  color: "$textMuted",
  fontSize: "$md",
  maxWidth: "680px",
});

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Wrap>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrap>
  );
}