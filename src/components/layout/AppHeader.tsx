import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { styled } from "@/theme/stitches.config";
import { NAV_ITEMS } from "@/constants/navigation";

const HeaderRoot = styled("header", {
  position: "sticky",
  top: 0,
  zIndex: 40,
  backdropFilter: "blur(14px)",
  backgroundColor: "rgba(11,13,18,0.7)",
  borderBottom: "1px solid $border",
});

const Bar = styled("div", {
  maxWidth: "1200px",
  mx: "auto",
  px: "$4",
  py: "$3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$4",
  "@md": { px: "$6", py: "$4" },
});

const Brand = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  fontFamily: "$display",
  fontWeight: 700,
  fontSize: "$lg",
  color: "$text",
  letterSpacing: "-0.02em",
});

const BrandDot = styled("span", {
  size: "10px",
  borderRadius: "$pill",
  background: "linear-gradient(135deg, $consultoria, $axis 55%, $pixel)",
  boxShadow: "0 0 12px rgba(168,85,247,0.6)",
});

const DesktopNav = styled("nav", {
  display: "none",
  gap: "$2",
  "@md": { display: "flex", alignItems: "center" },
});

const NavItem = styled(NavLink, {
  px: "$3",
  py: "$2",
  borderRadius: "$md",
  color: "$textMuted",
  fontSize: "$sm",
  fontWeight: 500,
  transition: "color $fast, background-color $fast",
  "&:hover": { color: "$text", backgroundColor: "$surface" },
  "&.active": { color: "$text", backgroundColor: "$surface" },
});

const MobileButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  size: "40px",
  borderRadius: "$md",
  border: "1px solid $border",
  backgroundColor: "$surface",
  color: "$text",
  cursor: "pointer",
  "@md": { display: "none" },
});

const MobilePanel = styled("div", {
  borderTop: "1px solid $border",
  backgroundColor: "rgba(11,13,18,0.95)",
  backdropFilter: "blur(14px)",
  overflow: "hidden",
  "@md": { display: "none" },
});

const MobileList = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: "$3 $4 $5",
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

const MobileItem = styled(NavLink, {
  display: "flex",
  alignItems: "center",
  px: "$3",
  py: "$3",
  borderRadius: "$md",
  color: "$textMuted",
  fontSize: "$md",
  fontWeight: 500,
  "&:hover, &.active": { color: "$text", backgroundColor: "$surface" },
});

export function AppHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <HeaderRoot>
      <Bar>
        <Brand to="/" onClick={() => setOpen(false)}>
          <BrandDot />
          M.A. Hub
        </Brand>

        <DesktopNav>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavItem>
          ))}
        </DesktopNav>

        <MobileButton
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </MobileButton>
      </Bar>

      {open && (
        <MobilePanel>
          <MobileList>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <MobileItem
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </MobileItem>
              </li>
            ))}
          </MobileList>
        </MobilePanel>
      )}
    </HeaderRoot>
  );
}