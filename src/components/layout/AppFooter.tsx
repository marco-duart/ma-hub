import { Link } from "react-router-dom";
import { styled } from "@/theme/stitches.config";
import { user } from "@/data";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const FooterRoot = styled("footer", {
  borderTop: "1px solid $border",
  py: "$8",
  px: "$4",
  mt: "$10",
  color: "$textMuted",
  "@md": { px: "$6" },
});

const Inner = styled("div", {
  maxWidth: "1200px",
  mx: "auto",
  display: "grid",
  gap: "$5",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "1fr auto" },
  alignItems: "center",
});

const Brand = styled("div", {
  fontFamily: "$display",
  color: "$text",
  fontWeight: 700,
  marginBottom: "$1",
});

const Small = styled("p", { fontSize: "$sm" });

const Socials = styled("div", {
  display: "flex",
  gap: "$2",
  flexWrap: "wrap",
});

const Icon = styled("a", {
  size: "40px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$md",
  border: "1px solid $border",
  color: "$text",
  transition: "border-color $fast, transform $fast",
  "&:hover": { borderColor: "$borderStrong", transform: "translateY(-2px)" },
});

const Row = styled("div", {
  maxWidth: "1200px",
  mx: "auto",
  mt: "$5",
  pt: "$4",
  borderTop: "1px dashed $border",
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",
  justifyContent: "space-between",
  fontSize: "$xs",
  color: "$textDim",
});

export function AppFooter() {
  return (
    <FooterRoot>
      <Inner>
        <div>
          <Brand>M.A. Hub</Brand>
          <Small>Consultoria · M.A. Axis · Pixel Vault</Small>
        </div>
        <Socials>
          <Icon href={`mailto:${user.businessEmail}`} aria-label="Email"><Mail size={18} /></Icon>
          <Icon href={user.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></Icon>
          <Icon href={user.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></Icon>
          <Icon href={user.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></Icon>
        </Socials>
      </Inner>
      <Row>
        <span>© {new Date().getFullYear()} M.A. Consultoria em Tecnologia Ltda - CNPJ: 61.580.959/0001-38. Todos os direitos reservados.</span>
        <Link to="/">Voltar ao topo</Link>
      </Row>
    </FooterRoot>
  );
}