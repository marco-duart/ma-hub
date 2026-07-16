import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ConsultoriaPage } from "@/pages/app/ConsultoriaPage";
import { AxisPage } from "@/pages/app/AxisPage";
import { AxisSolutionDetailPage } from "@/pages/app/AxisSolutionDetailPage";
import { PixelVaultPage } from "@/pages/app/PixelVaultPage";
import { PixelProductDetailPage } from "@/pages/app/PixelProductDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppShell } from "@/components/layout/AppShell";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="/consultoria" element={<ConsultoriaPage />} />
        <Route path="/axis" element={<AxisPage />} />
        <Route path="/axis/:id" element={<AxisSolutionDetailPage />} />
        <Route path="/pixel" element={<PixelVaultPage />} />
        <Route path="/pixel/:id" element={<PixelProductDetailPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}