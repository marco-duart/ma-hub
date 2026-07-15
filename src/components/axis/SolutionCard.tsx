import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { AxisSolution } from "@/data/types";

const STATUS_LABEL: Record<AxisSolution["status"], string> = {
  LIVE: "Live",
  BETA: "Beta",
  IN_DEVELOPMENT: "Em desenvolvimento",
};

const Root = styled(Link, {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$5",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$text",
  transition: "border-color $base, transform $base, box-shadow $base",
  minHeight: "220px",
  "&:hover": { borderColor: "$axis", boxShadow: "$glowAxis", transform: "translateY(-2px)" },
});

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$2",
});

const Name = styled("h3", { fontSize: "$xl", fontWeight: 700 });
const Tag = styled("p", { color: "$axis", fontSize: "$sm", fontFamily: "$mono" });
const Desc = styled("p", { color: "$textMuted", fontSize: "$sm", lineHeight: 1.55 });

const Tech = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$1",
  marginTop: "auto",
  paddingTop: "$3",
  borderTop: "1px dashed $border",
});

export function SolutionCard({ solution }: { solution: AxisSolution }) {
  return (
    <Root to={`/axis/${solution.id}`}>
      <Header>
        <Badge tone={solution.status === "IN_DEVELOPMENT" ? "warning" : "axis"}>
          {STATUS_LABEL[solution.status]}
        </Badge>
        <ArrowUpRight size={18} />
      </Header>
      <Name>{solution.name}</Name>
      <Tag>{solution.tagline}</Tag>
      <Desc>{solution.description}</Desc>
      <Tech>
        {solution.technologies.slice(0, 4).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </Tech>
    </Root>
  );
}