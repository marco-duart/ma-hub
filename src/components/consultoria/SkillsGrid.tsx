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
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@sm": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@md": { gridTemplateColumns: "repeat(3, 1fr)" },
});

const Group = styled("div", {
  padding: "$4",
  borderRadius: "4px",
  border: "1px solid rgba(148,163,184,0.35)",
  backgroundColor: "rgba(255,255,255,0.9)",
  boxShadow: "0 16px 40px -34px rgba(15,23,42,0.45)",
});

const GroupTitle = styled("h4", {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "#1e293b",
  marginBottom: "$4",
  borderBottom: "1px solid rgba(148,163,184,0.35)",
  paddingBottom: "$2",
});

const Chip = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$3",
  px: "$3",
  py: "$2",
  borderRadius: "3px",
  fontSize: "$sm",
  border: "1px solid rgba(148,163,184,0.35)",
  color: "#0f172a",
  backgroundColor: "rgba(248,250,252,0.95)",
  marginBottom: "$2",
  transition: "transform $fast, border-color $fast, background-color $fast",
  "&:hover": {
    borderColor: "#0ea5e9",
    backgroundColor: "#ffffff",
    transform: "translateX(3px)",
  },
});

const Level = styled("span", {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "$xs",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
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