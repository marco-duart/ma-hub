import { Link } from "react-router-dom";
import { styled } from "@/theme/stitches.config";
import { PageContent } from "@/components/layout/PageContent";
import { Button } from "@/components/ui/Button";

const Wrap = styled("div", {
  textAlign: "center",
  py: "$10",
});

const Code = styled("h1", {
  fontSize: "$5xl",
  fontFamily: "$mono",
  background: "linear-gradient(120deg, $consultoria, $axis 55%, $pixel)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export function NotFoundPage() {
  return (
    <PageContent>
      <Wrap>
        <Code>404</Code>
        <p style={{ color: "var(--colors-textMuted, #9aa3b2)", marginBottom: 24 }}>
          Essa rota não existe (ainda).
        </p>
        <Link to="/">
          <Button variant="primary">Voltar para o hub</Button>
        </Link>
      </Wrap>
    </PageContent>
  );
}