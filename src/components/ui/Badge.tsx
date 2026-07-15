import { styled } from "@/theme/stitches.config";

export const Badge = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$1",
  px: "$2",
  py: "2px",
  borderRadius: "$pill",
  fontSize: "$xs",
  fontWeight: 600,
  fontFamily: "$mono",
  border: "1px solid $border",
  color: "$textMuted",
  backgroundColor: "$bgElev",
  variants: {
    tone: {
      consultoria: {
        color: "$consultoria",
        borderColor: "rgba(56,189,248,0.35)",
        backgroundColor: "rgba(56,189,248,0.08)",
      },
      axis: {
        color: "$axis",
        borderColor: "rgba(168,85,247,0.35)",
        backgroundColor: "rgba(168,85,247,0.08)",
      },
      pixel: {
        color: "$pixel",
        borderColor: "rgba(34,197,94,0.35)",
        backgroundColor: "rgba(34,197,94,0.08)",
      },
      warning: { color: "$warning", borderColor: "rgba(245,158,11,0.35)" },
      success: { color: "$success" },
      neutral: {},
    },
  },
  defaultVariants: { tone: "neutral" },
});