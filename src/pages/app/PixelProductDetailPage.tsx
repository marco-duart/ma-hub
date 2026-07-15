import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { PageContent } from "@/components/layout/PageContent";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { pixelProducts, user } from "@/data";
import { styled } from "@/theme/stitches.config";
import { formatBRL } from "@/utils/date";

const Back = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  color: "$textMuted",
  fontSize: "$sm",
  marginBottom: "$5",
  "&:hover": { color: "$text" },
});

const Grid = styled("div", {
  display: "grid",
  gap: "$6",
  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "1fr 1fr", alignItems: "start" },
});

const Cover = styled("div", {
  aspectRatio: "1 / 1",
  borderRadius: "$xl",
  border: "1px solid $border",
  backgroundColor: "$bgElev",
  display: "grid",
  placeItems: "center",
  fontSize: "160px",
  backgroundImage:
    "linear-gradient(45deg, rgba(34,197,94,0.08) 25%, transparent 25%, transparent 75%, rgba(34,197,94,0.08) 75%), linear-gradient(45deg, rgba(34,197,94,0.08) 25%, transparent 25%, transparent 75%, rgba(34,197,94,0.08) 75%)",
  backgroundSize: "30px 30px",
  backgroundPosition: "0 0, 15px 15px",
});

const Title = styled("h1", { fontSize: "$3xl", fontWeight: 700, marginTop: "$3" });
const Price = styled("p", {
  color: "$pixel",
  fontFamily: "$mono",
  fontSize: "$2xl",
  fontWeight: 700,
  marginTop: "$3",
});
const Desc = styled("p", { color: "$textMuted", fontSize: "$md", marginTop: "$4", lineHeight: 1.6 });

const SpecList = styled("dl", {
  marginTop: "$5",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "$4",
  rowGap: "$2",
  fontSize: "$sm",
});
const Dt = styled("dt", { color: "$textDim", fontFamily: "$mono", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "$xs" });
const Dd = styled("dd", { margin: 0, color: "$text" });

export function PixelProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = pixelProducts.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <PageContent>
        <p>Produto não encontrado.</p>
        <Link to="/pixel-vault">Voltar</Link>
      </PageContent>
    );
  }

  const handleInterest = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse no item "${product.name}" (${formatBRL(product.price)}) do Pixel Vault.`);
    const phone = user.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    toast.success("Abrindo WhatsApp...");
  };

  return (
    <PageContent>
      <Back to="/pixel-vault"><ArrowLeft size={16} /> Voltar para o catálogo</Back>
      <Grid>
        <Cover>{product.imageEmoji}</Cover>
        <div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Badge tone="pixel">{product.category}</Badge>
            <Badge>{product.fandom}</Badge>
            <Badge tone={product.stock > 0 ? "success" : "warning"}>
              {product.stock > 0 ? `${product.stock} em estoque` : "Sob encomenda"}
            </Badge>
          </div>
          <Title>{product.name}</Title>
          <Price>{formatBRL(product.price)}</Price>
          <Desc>{product.description}</Desc>

          <SpecList>
            <Dt>Material</Dt><Dd>{product.material}</Dd>
            <Dt>Dimensões</Dt><Dd>{product.dimensions}</Dd>
            <Dt>Estoque</Dt><Dd>{product.stock} unidade(s)</Dd>
          </SpecList>

          <div style={{ marginTop: 32 }}>
            <Button variant="pixel" size="lg" onClick={handleInterest}>
              Tenho interesse — chamar no WhatsApp
            </Button>
          </div>
        </div>
      </Grid>
    </PageContent>
  );
}