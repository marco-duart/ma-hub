import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { APPS, NAV, SITE, SYSTEMS, whatsappUrl } from "@/site";
import { InstagramIcon, WhatsAppIcon } from "./Parts";
import { ScrollManager } from "./ScrollManager";
import { LightboxProvider } from "./Lightbox";

function Header() {
  // abertos "em uma rota": trocar de página fecha sozinho, sem efeito
  const { pathname } = useLocation();
  const [megaAt, setMegaAt] = useState<string | null>(null);
  const [drawerAt, setDrawerAt] = useState<string | null>(null);
  const mega = megaAt === pathname;
  const drawer = drawerAt === pathname;
  const setMega = (v: boolean | ((x: boolean) => boolean)) => setMegaAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const setDrawer = (v: boolean | ((x: boolean) => boolean)) => setDrawerAt((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mega) return;
    const onDown = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setMegaAt(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMegaAt(null); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [mega]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawer]);

  return (
    <header className="header">
      <div className="container header__in">
        <Link to="/" className="brand" aria-label="M.A. Axis, página inicial">
          <img src="/logo.png" alt="" width={38} height={38} />
          <span>M.A. Axis</span>
        </Link>

        <nav className="nav" aria-label="Principal">
          <div className="mega" ref={wrap} onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button type="button" className="nav__btn" aria-expanded={mega} aria-controls="menu-sistemas" onClick={() => setMega((v) => !v)}>
              Sistemas <ChevronDown size={16} />
            </button>
            <div className="mega__panel" id="menu-sistemas" data-open={mega}>
              {SYSTEMS.map((s) => (
                <Link key={s.key} to={s.route} className="mega__item" data-theme={s.theme} tabIndex={mega ? 0 : -1}>
                  <img src={s.icon} alt="" width={48} height={48} />
                  <div>
                    <em>{s.verb}</em>
                    <strong>{s.name}</strong>
                    <span>{s.oneLiner}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className="nav__link">{n.label}</NavLink>
          ))}
          <a className="btn btn--primary btn--sm nav__cta" href={whatsappUrl("Olá! Quero conhecer as soluções da M.A. Axis para o meu negócio.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> Fale com a gente</a>
        </nav>

        <button type="button" className="menu-btn" aria-label={drawer ? "Fechar menu" : "Abrir menu"} aria-expanded={drawer} aria-controls="menu-mobile" onClick={() => setDrawer((v) => !v)}>
          {drawer ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {drawer && (
        <div className="drawer" id="menu-mobile">
          {SYSTEMS.map((s) => (
            <Link key={s.key} to={s.route} className="drawer__item" data-theme={s.theme}>
              <img src={s.icon} alt="" width={46} height={46} />
              <div>
                <strong>{s.name}</strong>
                <span>{s.verb}: {s.slogan}</span>
              </div>
            </Link>
          ))}
          <Link to="/apps" className="drawer__link">Apps no Google Play</Link>
          <Link to="/contato" className="drawer__link">Contato e como contratar</Link>
          <a className="btn btn--primary" href={whatsappUrl("Olá! Quero conhecer as soluções da M.A. Axis para o meu negócio.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Fale com a gente</a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="brand"><img src="/logo.png" alt="" width={38} height={38} /><span>M.A. Axis</span></Link>
            <p>Tecnologia próxima do seu negócio: sistemas, implantação e suporte para pequenos comércios em Goiânia, Aparecida de Goiânia, Senador Canedo e Trindade.</p>
          </div>
          <div>
            <h4>Sistemas</h4>
            <ul>
              {SYSTEMS.map((s) => (<li key={s.key}><Link to={s.route}>{s.name}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4>Apps no Google Play</h4>
            <ul>
              {APPS.map((a) => (<li key={a.id}><a href={a.play} target="_blank" rel="noopener noreferrer">{a.name} <ArrowUpRight size={13} style={{ display: "inline", verticalAlign: "-1px" }} /></a></li>))}
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href={whatsappUrl("Olá! Quero falar com o atendimento da M.A. Axis.")} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><WhatsAppIcon size={17} /> {SITE.whatsapp.label} <span style={{ color: "var(--dim)" }}>(atendimento M.A. Axis)</span></a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><InstagramIcon size={17} /> {SITE.instagram.handle}</a></li>
              <li><a href={SITE.forja.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><InstagramIcon size={17} /> {SITE.forja.handle} <span style={{ color: "var(--dim)" }}>(impressão 3D)</span></a></li>
              <li><Link to="/contato">Como contratar</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName} · CNPJ {SITE.cnpj}</span>
          <span>
            Privacidade:{" "}
            {SYSTEMS.map((s, i) => (
              <span key={s.key}>
                <a href={s.privacy} target="_blank" rel="noopener noreferrer">{s.name}</a>
                {i < SYSTEMS.length - 1 ? " · " : " · "}
              </span>
            ))}
            <Link to="/privacidade">este site</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <LightboxProvider>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <ScrollManager />
      <Header />
      <Outlet />
      <Footer />
    </LightboxProvider>
  );
}
