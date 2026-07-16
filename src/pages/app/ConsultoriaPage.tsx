import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styled } from "@/theme/stitches.config";
import { HeroBio } from "@/components/consultoria/HeroBio";
import { BioBlocks } from "@/components/consultoria/BioBlocks";
import { Timeline } from "@/components/consultoria/Timeline";
import { SkillsGrid } from "@/components/consultoria/SkillsGrid";
import { SuccessCases } from "@/components/consultoria/SuccessCases";
import { ProfileGrid } from "@/components/consultoria/ProfileGrid";
import {
  user,
  resume,
  experiences,
  education,
  skills,
  successCases,
  profile,
} from "@/data/index";

const Wrapper = styled("main", {
  background:
    "radial-gradient(circle at 10% 10%, rgba(15,23,42,0.04), transparent 35%), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
  color: "#0f172a",
  minHeight: "100vh",
  fontFamily: "'IBM Plex Sans', sans-serif",
  paddingBottom: "$10",
});

const Section = styled("section", {
  marginTop: "$10",
  paddingTop: "$6",
  borderTop: "1px solid rgba(100,116,139,0.25)",
});

export function ConsultoriaPage() {
  return (
    <Wrapper>
      <PageContent>
        <HeroBio user={user} resume={resume} />

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Sobre mim"
            title="Uma leitura rápida"
          />
          <BioBlocks bio={user.bio} />
        </Section>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Trajetória"
            title="Experiência profissional"
          />
          <Timeline items={experiences} />
        </Section>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Formação"
            title="Educação & Cursos"
          />
          <Timeline items={education} />
        </Section>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Stack"
            title="Habilidades técnicas & humanas"
          />
          <SkillsGrid skills={skills} />
        </Section>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Cases"
            title="Resultados que entreguei"
          />
          <SuccessCases cases={successCases} />
        </Section>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Perfil comportamental"
            title="Como eu funciono"
            subtitle="Combinação de testes psicológicos que ajudam a entender meu perfil de trabalho."
          />
          <ProfileGrid profile={profile} />
        </Section>
      </PageContent>
    </Wrapper>
  );
}