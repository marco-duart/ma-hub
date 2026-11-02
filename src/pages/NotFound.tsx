import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SYSTEMS } from "@/site";

export function NotFound() {
  return (
    <main id="conteudo" className="not-found">
      <Seo route="/404" noindex />
      <div style={{ display: "grid", gap: 20, justifyItems: "center" }}>
        <h1 className="grad-text">404</h1>
        <p style={{ color: "var(--muted)", fontSize: 20 }}>Esta página não existe. Que tal começar por um dos sistemas?</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary" to="/">Ir para o início</Link>
          {SYSTEMS.map((s) => (<Link key={s.key} className="btn btn--ghost" to={s.route}>{s.name}</Link>))}
        </div>
      </div>
    </main>
  );
}
