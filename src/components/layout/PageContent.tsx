import type { ReactNode } from "react";
import { styled } from "@/theme/stitches.config";

const Container = styled("div", {
  maxWidth: "1200px",
  mx: "auto",
  px: "$4",
  py: "$7",
  "@md": { px: "$6", py: "$9" },
});

export function PageContent({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}