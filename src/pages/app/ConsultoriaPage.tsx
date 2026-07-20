import { PageContent } from "@/components/layout/PageContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styled } from "@/theme/stitches.config";
import { consultoriaProfessionals } from "@/data/index";

const Wrapper = styled("main", {
  background:
    "radial-gradient(circle at 10% 10%, rgba(15,23,42,0.04), transparent 35%), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
  color: "#0f172a",
  minHeight: "100vh",
  fontFamily: "'IBM Plex Sans', sans-serif",
  paddingBottom: "$10",
});

const Intro = styled("section", {
  marginTop: "$10",
  padding: "$6",
  border: "1px solid rgba(100,116,139,0.24)",
  borderRadius: "8px",
  background:
    "linear-gradient(125deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 42%, rgba(241,245,249,0.92) 100%)",
  boxShadow: "0 28px 62px -44px rgba(15,23,42,0.5)",
  display: "grid",
  gap: "$4",
  "@md": {
    padding: "$8",
  },
});

const IntroTitle = styled("h1", {
  margin: 0,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
  fontWeight: 600,
  fontSize: "$3xl",
  letterSpacing: "-0.02em",
  "@md": { fontSize: "$4xl" },
});

const IntroText = styled("p", {
  color: "#334155",
  fontSize: "$md",
  lineHeight: 1.7,
  maxWidth: "900px",
});

const Section = styled("section", {
  marginTop: "$10",
  paddingTop: "$6",
  borderTop: "1px solid rgba(100,116,139,0.25)",
});

const CardsGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$6",
  "@md": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
});

const Card = styled("article", {
  display: "grid",
  gap: "$4",
  border: "1px solid rgba(148,163,184,0.34)",
  borderRadius: "8px",
  padding: "$5",
  backgroundColor: "rgba(255,255,255,0.94)",
  boxShadow: "0 24px 52px -40px rgba(15,23,42,0.48)",
});

const Portrait = styled("img", {
  width: "100%",
  height: "280px",
  borderRadius: "6px",
  objectFit: "cover",
  backgroundColor: "#e2e8f0",
  border: "1px solid rgba(148,163,184,0.35)",
});

const RoleBadge = styled("span", {
  width: "fit-content",
  px: "$3",
  py: "$1",
  border: "1px solid rgba(14,165,233,0.34)",
  borderRadius: "999px",
  color: "#0f172a",
  backgroundColor: "rgba(224,242,254,0.9)",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 600,
});

const Name = styled("h3", {
  margin: 0,
  color: "#0f172a",
  fontFamily: "'Source Serif 4', serif",
  fontSize: "$2xl",
  fontWeight: 600,
  letterSpacing: "-0.01em",
});

const Tagline = styled("p", {
  color: "#1e293b",
  fontSize: "$sm",
  fontWeight: 600,
  lineHeight: 1.6,
});

const Copy = styled("p", {
  color: "#334155",
  fontSize: "$sm",
  lineHeight: 1.7,
});

const SubTitle = styled("h4", {
  margin: 0,
  marginTop: "$1",
  color: "#0f172a",
  fontSize: "$sm",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
});

const BulletList = styled("ul", {
  margin: 0,
  paddingLeft: "$5",
  color: "#334155",
  display: "grid",
  gap: "$2",
  fontSize: "$sm",
  lineHeight: 1.6,
});

const Links = styled("div", {
  marginTop: "$1",
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",
});

const LinkChip = styled("a", {
  border: "1px solid rgba(148,163,184,0.38)",
  borderRadius: "999px",
  px: "$3",
  py: "$1",
  fontSize: "$xs",
  color: "#0f172a",
  backgroundColor: "#ffffff",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 600,
  transition: "transform $fast, border-color $fast",
  "&:hover": {
    borderColor: "#0ea5e9",
    transform: "translateY(-2px)",
  },
});

export function ConsultoriaPage() {
  return (
    <Wrapper>
      <PageContent>
        <Intro>
          <IntroTitle>MA Consultoria | Time de resolvedores de problemas</IntroTitle>
          <IntroText>
            A MA Consultoria agora representa um coletivo de profissionais com
            especialidades complementares para tirar projetos do papel, destravar
            operacoes e acelerar resultado. O nucleo atual inclui atuacao em
            desenvolvimento Frontend, Backend, Database, Redes, Hardware e Automacao.
          </IntroText>
          {/* <IntroText> */}
          {/* </IntroText> */}
        </Intro>

        <Section>
          <SectionHeader
            variant="consultoria"
            eyebrow="Profissionais"
            title="Quem resolve com a MA Consultoria"
            subtitle=""
          />

          <CardsGrid>
            {consultoriaProfessionals.map((professional) => (
              <Card key={professional.id}>
                <Portrait
                  src={professional.photoUrl}
                  alt={`Foto de ${professional.name}`}
                />
                <RoleBadge>{professional.roleTitle}</RoleBadge>
                <Name>{professional.name}</Name>
                <Tagline>{professional.problemSolverTagline}</Tagline>
                <Copy>{professional.specialtiesSummary}</Copy>
                <Copy>{professional.curriculumValueNote}</Copy>

                <SubTitle>Areas de maior atuacao</SubTitle>
                <BulletList>
                  {professional.mainActingAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </BulletList>

                <SubTitle>Pontos fortes</SubTitle>
                <BulletList>
                  {professional.strongPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </BulletList>

                <Links>
                  {professional.contactLinks?.linkedin && (
                    <LinkChip
                      href={professional.contactLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </LinkChip>
                  )}
                  {professional.contactLinks?.github && (
                    <LinkChip
                      href={professional.contactLinks.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </LinkChip>
                  )}
                  {professional.contactLinks?.whatsapp && (
                    <LinkChip
                      href={professional.contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </LinkChip>
                  )}
                </Links>
              </Card>
            ))}
          </CardsGrid>
        </Section>
      </PageContent>
    </Wrapper>
  );
}