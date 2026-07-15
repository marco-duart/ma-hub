import { styled } from "@/theme/stitches.config";
import type { Skill } from "@/data/types";
import { SkillCategoryEnum, SkillLevelEnum } from "@/data/types";

const CATEGORY_LABEL: Record<SkillCategoryEnum, string> = {
  BACKEND: "Backend",
  FRONTEND: "Frontend",
  MOBILE: "Mobile",
  DEVOPS: "DevOps",
  DATABASE: "Database",
  AI: "IA",
  MANAGEMENT: "Gestão",
  SOFT_SKILL: "Soft skills",
  DESIGN: "Design",
};

const LEVEL_LABEL: Record<SkillLevelEnum, string> = {
  JUNIOR: "Jr",
  PLENO: "Pl",
  SENIOR: "Sr",
  EXPERT: "Expert",
};

const Grid = styled("div", {
  display: "grid",
  gap: "$4",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@md": { gridTemplateColumns: "repeat(3, 1fr)" },
});

const Group = styled("div", {
  padding: "$4",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
});

const GroupTitle = styled("h4", {
  fontFamily: "$mono",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "$consultoria",
  marginBottom: "$3",
});

const Chip = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  px: "$2",
  py: "$1",
  borderRadius: "$pill",
  fontSize: "$sm",
  border: "1px solid $border",
  color: "$text",
  backgroundColor: "$bgElev",
  marginRight: "$2",
  marginBottom: "$2",
  transition: "border-color $fast",
  "&:hover": { borderColor: "$consultoria" },
});

const Level = styled("span", {
  fontFamily: "$mono",
  fontSize: "10px",
  color: "$textDim",
});

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  return (
    <Grid>
      {Object.entries(grouped).map(([cat, items]) => (
        <Group key={cat}>
          <GroupTitle>{CATEGORY_LABEL[cat as SkillCategoryEnum]}</GroupTitle>
          <div>
            {items.map((s) => (
              <Chip key={s.id} href={s.link} target="_blank" rel="noreferrer">
                {s.name}
                <Level>{LEVEL_LABEL[s.level]}</Level>
              </Chip>
            ))}
          </div>
        </Group>
      ))}
    </Grid>
  );
}