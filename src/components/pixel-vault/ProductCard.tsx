import { Link } from "react-router-dom";
import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { PixelProduct } from "@/data/types";
import { formatBRL } from "@/utils/date";

const Root = styled(Link, {
  display: "flex",
  flexDirection: "column",
  padding: "$4",
  borderRadius: "0px",
  border: "3px solid #101623",
  background:
    "radial-gradient(circle at 20% 22%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.95) 8%, rgba(248,250,252,0.95) 8.2%, rgba(248,250,252,0.95) 100%)",
  color: "#101623",
  transition: "transform $base, box-shadow $base, background-color $base",
  boxShadow: "6px 6px 0 #101623",
  gap: "$2",
  "&:hover": {
    transform: "translate(-3px, -3px) rotate(-0.4deg)",
    boxShadow: "10px 10px 0 #101623",
    backgroundColor: "#ffffff",
  },
});

const Cover = styled("div", {
  aspectRatio: "1 / 1",
  borderRadius: "0px",
  backgroundColor: "#22c55e",
  border: "3px solid #101623",
  display: "grid",
  placeItems: "center",
  fontSize: "$5xl",
  backgroundImage:
    "radial-gradient(circle, rgba(16,22,35,0.24) 10%, transparent 11%), radial-gradient(circle, rgba(16,22,35,0.24) 10%, transparent 11%)",
  backgroundSize: "14px 14px",
  backgroundPosition: "0 0, 7px 7px",
  marginBottom: "$3",
  textShadow: "2px 2px 0 #fff",
});

const Row = styled("div", { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "$2" });
const Name = styled("h3", {
  fontSize: "$lg",
  fontWeight: 700,
  fontFamily: "'Bangers', cursive",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});

const Price = styled("span", {
  color: "#101623",
  fontFamily: "'Bangers', cursive",
  fontSize: "$xl",
  letterSpacing: "0.04em",
  textShadow: "1px 1px 0 #facc15",
});

const Meta = styled("div", { display: "flex", gap: "$1", flexWrap: "wrap", marginTop: "$2" });

export function ProductCard({ product }: { product: PixelProduct }) {
  return (
    <Root to={`/pixel/${product.id}`}>
      <Cover>{product.imageEmoji}</Cover>
      <Row>
        <Name>{product.name}</Name>
        <Price>{formatBRL(product.price)}</Price>
      </Row>
      <Meta>
        <Badge tone="pixel">{product.category}</Badge>
        <Badge>{product.fandom}</Badge>
      </Meta>
    </Root>
  );
}