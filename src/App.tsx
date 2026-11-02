import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Apps } from "./pages/Apps";
import { Contato } from "./pages/Contato";
import { Privacidade } from "./pages/Privacidade";
import { NotFound } from "./pages/NotFound";

// páginas de sistema são grandes: carregam só quando visitadas
const Dita = lazy(() => import("./pages/Dita").then((m) => ({ default: m.Dita })));
const MostraAi = lazy(() => import("./pages/MostraAi").then((m) => ({ default: m.MostraAi })));
const Rasttro = lazy(() => import("./pages/Rasttro").then((m) => ({ default: m.Rasttro })));
const Profyla = lazy(() => import("./pages/Profyla").then((m) => ({ default: m.Profyla })));

export function App() {
  return (
    <Routes>
      <Route element={<Suspense fallback={null}><Layout /></Suspense>}>
        <Route index element={<Home />} />
        <Route path="dita" element={<Dita />} />
        <Route path="mostra-ai" element={<MostraAi />} />
        <Route path="rasttro" element={<Rasttro />} />
        <Route path="profyla" element={<Profyla />} />
        <Route path="apps" element={<Apps />} />
        <Route path="contato" element={<Contato />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
