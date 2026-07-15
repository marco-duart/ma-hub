import { styled } from "@/theme/stitches.config";

export const Button = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  border: "1px solid transparent",
  borderRadius: "$md",
  fontFamily: "$body",
  fontWeight: 600,
  transition: "background-color $fast, border-color $fast, transform $fast, color $fast",
  userSelect: "none",
  whiteSpace: "nowrap",
  "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  variants: {
    size: {
      sm: { px: "$3", py: "$2", fontSize: "$sm" },
      md: { px: "$4", py: "$3", fontSize: "$md" },
      lg: { px: "$5", py: "$3", fontSize: "$md" },
    },
    variant: {
      primary: {
        backgroundColor: "$text",
        color: "$bg",
        "&:hover": { transform: "translateY(-1px)" },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$text",
        borderColor: "$border",
        "&:hover": { backgroundColor: "$surface", borderColor: "$borderStrong" },
      },
      consultoria: {
        backgroundColor: "$consultoria",
        color: "$bg",
        "&:hover": { boxShadow: "$glowConsultoria", transform: "translateY(-1px)" },
      },
      axis: {
        backgroundColor: "$axis",
        color: "$bg",
        "&:hover": { boxShadow: "$glowAxis", transform: "translateY(-1px)" },
      },
      pixel: {
        backgroundColor: "$pixel",
        color: "$bg",
        "&:hover": { boxShadow: "$glowPixel", transform: "translateY(-1px)" },
      },
    },
  },
  defaultVariants: { size: "md", variant: "primary" },
});