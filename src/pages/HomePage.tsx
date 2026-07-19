import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { styled } from "@/theme/stitches.config";

const HomeWrapper = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "$5",
  textAlign: "center",
  backgroundColor: "$bg",
});

const MainTitle = styled("h1", {
  fontSize: "$xl",
  color: "$textMuted",
  marginBottom: "$8",
  fontWeight: 400,
  fontFamily: "$mono",
  letterSpacing: "0.05em",
  "@md": { fontSize: "$2xl" },
});

const PortalsGrid = styled("div", {
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$5",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@lg": { gridTemplateColumns: "repeat(4, 1fr)" },
});

const PortalCard = styled(Link, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "$6",
  minHeight: "300px",
  color: "$text",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textDecoration: "none",
  gap: "$6",

  "@md": {
    minHeight: "350px",
  },

  "&:hover": { transform: "translateY(-4px)" },

  variants: {
    accent: {
      consultoria: {
        background:
          "linear-gradient(145deg, #ffffff 0%, #f1f5f9 45%, #e2e8f0 100%)",
        border: "1px solid #cbd5e1",
        color: "#111827",
        borderRadius: "12px",
        "&:hover": { boxShadow: "0 14px 30px -10px rgba(15,23,42,0.28)" },
      },
      axis: {
        background:
          "radial-gradient(circle at 50% 35%, rgba(234,179,8,0.28) 0%, rgba(234,179,8,0.06) 26%, rgba(15,23,42,0.2) 48%, #0b1022 100%)",
        border: "1px solid #2A144B",
        color: "#e5e7eb",
        borderRadius: "10px",
        "&:hover": { boxShadow: "0 0 36px -10px rgba(131, 59, 246, 0.55)" },
      },
      pixel: {
        background:
          "linear-gradient(145deg, #22C15D 0%, #22C15D 45%, #22C15D 100%)",
        border: "3px solid #c9d42a",
        color: "#fef3c7",
        borderRadius: "0",
        fontFamily: "'Press Start 2P', cursive",
        "&:hover": {
          boxShadow:
            "inset -6px -6px 0px 0px rgba(24, 120, 15, 0.7), 0 0 24px -10px rgba(251, 237, 36, 0.8)",
          color: "#fef9c3",
        },
      },
      studio: {
        background:
          "radial-gradient(circle at 12% 0%, rgba(147, 51, 234, 0.16) 0%, rgba(147, 51, 234, 0) 44%), radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.16) 0%, rgba(251, 146, 60, 0) 45%), linear-gradient(145deg, #f8fbfd 0%, #eef5f8 48%, #ddeaf0 100%)",
        border: "1px solid #a9c2ce",
        color: "#164e63",
        borderRadius: "14px",
        "&:hover": {
          boxShadow: "0 14px 32px -12px rgba(20, 78, 99, 0.42)",
        },
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        "&:hover": {
          transform: "none",
        },
      },
    },
  },
});

const ComingSoonBadge = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$1 $3",
  borderRadius: "999px",
  fontSize: "$xs",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: "linear-gradient(135deg, #164e63 0%, #1f6b87 100%)",
  color: "#e6f5fa",
  border: "1px solid #5f97ad",
});

const PortalVisual = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$4",
});

const PortalIcon = styled("img", {
  width: "104px",
  height: "104px",
  objectFit: "contain",
  objectPosition: "center",
  filter: "drop-shadow(0 8px 12px rgba(23, 80, 212, 0.22))",

  variants: {
    accent: {
      consultoria: {
        filter: "drop-shadow(0 10px 16px rgba(15, 23, 42, 0.35))",
      },
      axis: {
        filter: "drop-shadow(0 10px 16px rgba(123, 37, 235, 0.35))",
      },
      pixel: {
        // Keep the wrap background visually pure black with no blue cast.
        filter: "none",
      },
      studio: {
        filter: "drop-shadow(0 10px 14px rgba(22, 78, 99, 0.35))",
      },
    },
  },

  "@md": {
    width: "122px",
    height: "122px",
  },
});

const PortalIconWrap = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$3",
  borderRadius: "14px",
  border: "1px solid transparent",

  variants: {
    accent: {
      consultoria: {
        background:
          "linear-gradient(145deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
        borderColor: "#64748b",
      },
      axis: {
        background:
          "linear-gradient(145deg, #f8fafc 0%, #dbeafe 58%, #bfdbfe 100%)",
        borderColor: "#2A144B",
      },
      pixel: {
        background:
          "#000000",
        borderColor: "#fbbf24",
      },
      studio: {
        background:
          "conic-gradient(from 205deg at 50% 50%, rgba(147, 51, 234, 0.12), rgba(59, 130, 246, 0.12), rgba(236, 72, 153, 0.12), rgba(251, 146, 60, 0.12), rgba(250, 204, 21, 0.12), rgba(147, 51, 234, 0.12))",
        borderColor: "#8bb1c1",
      },
    },
  },
});

const PortalHeader = styled("div", {
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  variants: {
    accent: {
      consultoria: { color: "#0f172a" },
      axis: { color: "#f8fafc" },
      pixel: { color: "#fef08a", fontSize: "$xs" },
      studio: { color: "#1f5e75" },
    },
  },
});

const PortalTitle = styled("h2", {
  fontSize: "$3xl",
  fontWeight: 700,
  textAlign: "left",
  marginTop: "$4",
  variants: {
    accent: {
      consultoria: { fontFamily: "'Merriweather', serif", color: "#111827" },
      axis: { fontFamily: "$mono", color: "#ffffff" },
      pixel: {
        fontFamily: "'Press Start 2P', cursive",
        color: "#fef9c3",
        textShadow: "2px 2px 0px #000",
        fontSize: "$2xl",
      },
      studio: {
        fontFamily: "$mono",
        color: "#2f7d9d",
      },
    },
  },
});

type VerticalAccent = "consultoria" | "axis" | "pixel" | "studio";

type VerticalCard = {
  accent: VerticalAccent;
  label: string;
  title: string;
  icon: string;
  iconAlt: string;
  path?: string;
  disabled?: boolean;
};

const verticals: VerticalCard[] = [
  {
    accent: "consultoria",
    label: "01 · Consultoria",
    title: "Consultoria M.A.",
    icon: "/ma-consultoria.png",
    iconAlt: "Logo MA Consultoria",
    path: "/consultoria",
  },
  {
    accent: "axis",
    label: "02 · Produto",
    title: "M.A. Axis",
    icon: "/ma-axis.png",
    iconAlt: "Logo MA Axis",
    path: "/axis",
  },
  {
    accent: "pixel",
    label: "03 · Loja",
    title: "Pixel Vault",
    icon: "/pixel-vault.png",
    iconAlt: "Logo Pixel Vault",
    path: "/pixel",
  },
  {
    accent: "studio",
    label: "04 · Branding",
    title: "M.A. Studio",
    icon: "/ma-studio.png",
    iconAlt: "Logo MA Studio",
    disabled: true,
  },
];

export function HomePage() {
  return (
    <HomeWrapper>
      <MainTitle>Escolha um universo para explorar.</MainTitle>
      <PortalsGrid>
        {verticals.map((v) => {
          return (
            <PortalCard
              key={v.accent}
              to={v.path ?? "#"}
              accent={v.accent}
              disabled={v.disabled}
              aria-disabled={v.disabled ? "true" : "false"}
              onClick={(event) => {
                if (v.disabled) {
                  event.preventDefault();
                }
              }}
            >
              <PortalVisual>
                <PortalIconWrap accent={v.accent}>
                  <PortalIcon
                    accent={v.accent}
                    src={v.icon}
                    alt={v.iconAlt}
                    loading="lazy"
                  />
                </PortalIconWrap>
                <ArrowUpRight
                  size={24}
                  style={{
                    alignSelf: "flex-start",
                    color:
                      v.accent === "consultoria"
                        ? "#334155"
                        : v.accent === "axis"
                          ? "#e2e8f0"
                          : v.accent === "pixel"
                            ? "#fef08a"
                            : "#2f7d9d",
                  }}
                />
              </PortalVisual>
              <div>
                <PortalHeader accent={v.accent}>{v.label}</PortalHeader>
                <PortalTitle accent={v.accent}>{v.title}</PortalTitle>
                {v.disabled ? <ComingSoonBadge>Em breve</ComingSoonBadge> : null}
              </div>
            </PortalCard>
          );
        })}
      </PortalsGrid>
    </HomeWrapper>
  );
}