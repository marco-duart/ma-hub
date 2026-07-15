import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "@/theme/stitches.config";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

const Shell = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const Main = styled("main", {
  flex: 1,
  width: "100%",
});

export function AppShell() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <Shell>
      <AppHeader />
      <Main>
        <Outlet />
      </Main>
      <AppFooter />
    </Shell>
  );
}