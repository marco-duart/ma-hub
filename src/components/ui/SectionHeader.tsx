import { styled } from "@/theme/stitches.config";

const Wrap = styled("header", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginBottom: "$6",
  variants: {
    variant: {
      default: {},
      pixel: {},
      consultoria: {
        gap: "$1",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Eyebrow = styled("span", {
  fontFamily: "$mono",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "$textDim",
  variants: {
    variant: {
      default: {},
      pixel: {},
      consultoria: {
        color: "#64748b",
        letterSpacing: "0.16em",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Title = styled("h2", {
  fontSize: "$2xl",
  fontWeight: 700,
  color: "$text",
  "@md": { fontSize: "$3xl" },
  variants: {
    variant: {
      default: {},
      pixel: {
        color: "$pixel",
        fontFamily: "'Bangers', cursive",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      },
      consultoria: {
        color: "#0f172a",
        fontFamily: "'Source Serif 4', serif",
        letterSpacing: "-0.01em",
        fontWeight: 600,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Subtitle = styled("p", {
  color: "$textMuted",
  fontSize: "$md",
  maxWidth: "680px",
  variants: {
    variant: {
      default: {},
      pixel: {},
      consultoria: {
        color: "#475569",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "consultoria" | "pixel";
}) {
  return (
    <Wrap variant={variant}>
      {eyebrow && <Eyebrow variant={variant}>{eyebrow}</Eyebrow>}
      <Title variant={variant}>{title}</Title>
      {subtitle && <Subtitle variant={variant}>{subtitle}</Subtitle>}
    </Wrap>
  );
}