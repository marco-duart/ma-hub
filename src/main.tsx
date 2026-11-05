import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { trackContactClicks } from "./analytics";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/ui.css";
import "./styles/pages.css";

// O HTML pré-renderizado já traz título e metadados da rota (para quem não executa JS). Ao subir o React, o componente <Seo>
// passa a cuidar deles; tirar os estáticos evita tags duplicadas no DOM.
document.querySelectorAll('title, meta[name="description"], meta[name="robots"], link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]').forEach((el) => el.remove());

trackContactClicks();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
