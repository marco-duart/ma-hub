import { Link } from "react-router-dom";
import { styled } from "@/theme/stitches.config";
import { Badge } from "@/components/ui/Badge";
import type { PixelProduct } from "@/data/types";
import { formatBRL } from "@/utils/date";

const Root = styled(Link, {
  display: "flex",
  flexDirection: "column",
  padding: "$4",
  borderRadius: "$lg",
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$text",
  transition: "border-color $base, transform $base, box-shadow $base",
  "&:hover": { borderColor: "$pixel", boxShadow: "$glowPixel", transform: "translateY(-2px)" },
});

const Cover = styled("div", {
  aspectRatio: "1 / 1",
  borderRadius: "$md",
  backgroundColor: "$bgElev",
  border: "1px solid $border",
  display: "grid",
  placeItems: "center",
  fontSize: "$5xl",
  backgroundImage:
    "linear-gradient(45deg, rgba(34,197,94,0.08) 25%, transparent 25%, transparent 75%, rgba(34,197,94,0.08) 75%), linear-gradient(45deg, rgba(34,197,94,0.08) 25%, transparent 25%, transparent 75%, rgba(34,197,94,0.08) 75%)",
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0, 10px 10px",
  marginBottom: "$3",
});

const Row = styled("div", { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "$2" });
const Name = styled("h3", { fontSize: "$md", fontWeight: 600 });
const Price = styled("span", { color: "$pixel", fontFamily: "$mono", fontSize: "$md", fontWeight: 700 });
const Meta = styled("div", { display: "flex", gap: "$1", flexWrap: "wrap", marginTop: "$2" });

export function ProductCard({ product }: { product: PixelProduct }) {
  return (
    <Root to={`/pixel-vault/${product.id}`}>
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