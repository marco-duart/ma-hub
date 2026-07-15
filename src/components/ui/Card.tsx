import { styled } from "@/theme/stitches.config";

export const Card = styled("div", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$lg",
  padding: "$5",
  transition: "border-color $base, transform $base, box-shadow $base",
  variants: {
    interactive: {
      true: {
        cursor: "pointer",
        "&:hover": {
          borderColor: "$borderStrong",
          transform: "translateY(-2px)",
          boxShadow: "$md",
        },
      },
    },
    accent: {
      consultoria: { "&:hover": { borderColor: "$consultoria", boxShadow: "$glowConsultoria" } },
      axis: { "&:hover": { borderColor: "$axis", boxShadow: "$glowAxis" } },
      pixel: { "&:hover": { borderColor: "$pixel", boxShadow: "$glowPixel" } },
    },
  },
});