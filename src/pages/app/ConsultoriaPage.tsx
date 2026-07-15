import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
} from "@/data";
import { styled } from "@/theme/stitches.config";

const Section = styled("section", { marginTop: "$10" });

export function ConsultoriaPage() {
  return (
    <PageContent>
      <HeroBio user={user} resume={resume} />

      <Section>
        <SectionHeader eyebrow="Sobre mim" title="Uma leitura rápida" />
        <BioBlocks bio={user.bio} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Trajetória" title="Experiência profissional" />
        <Timeline items={experiences} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Formação" title="Educação & Cursos" />
        <Timeline items={education} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Stack" title="Habilidades técnicas & humanas" />
        <SkillsGrid skills={skills} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Cases" title="Resultados que entreguei" />
        <SuccessCases cases={successCases} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Perfil comportamental"
          title="Como eu funciono"
          subtitle="Combinação de testes psicológicos que ajudam a entender meu perfil de trabalho."
        />
        <ProfileGrid profile={profile} />
      </Section>
    </PageContent>
  );
}