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
        color: "#1e293b",
        borderColor: "rgba(148,163,184,0.5)",
        borderRadius: "4px",
        backgroundColor: "rgba(248,250,252,0.95)",
        fontFamily: "'IBM Plex Sans', sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      },
      axis: {
        color: "$axis",
        borderColor: "rgba(168,85,247,0.35)",
        backgroundColor: "rgba(168,85,247,0.08)",
      },
      pixel: {
        color: "#101623",
        borderColor: "#101623",
        borderRadius: "0px",
        borderWidth: "2px",
        backgroundColor: "#22c55e",
        fontFamily: "'Bangers', cursive",
        letterSpacing: "0.08em",
      },
      warning: { color: "$warning", borderColor: "rgba(245,158,11,0.35)" },
      success: { color: "$success" },
      neutral: {},
    },
  },
  defaultVariants: { tone: "neutral" },
});