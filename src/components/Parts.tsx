import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { appById } from "@/site";

export function PlayIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 2.6v22.8c0 .9 1 1.4 1.7.9L25 15c.7-.5.7-1.5 0-2L5.7 1.7C5 1.2 4 1.7 4 2.6Z" fill="#fff" opacity=".08" />
      <path d="M5.2 2 16.4 14 5.2 26c-.7-.3-1.2-.9-1.2-1.7V3.7c0-.8.5-1.4 1.2-1.7Z" fill="#32bbff" />
      <path d="M20.2 10.2 16.4 14l3.8 3.8 4.8-2.7c1-.6 1-1.6 0-2.2l-4.8-2.7Z" fill="#ffd500" />
      <path d="m16.4 14-11.2 12c.4.2.9.2 1.4-.1l13.6-7.9-3.8-4Z" fill="#f43249" />
      <path d="M5.2 2c.4-.2.9-.2 1.4.1l13.6 7.9L16.4 14 5.2 2Z" fill="#00f076" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Botão do Google Play: o link vem de site.ts, pelo id do app. */
export function StoreButton({ app, label }: { app: string; label?: string }) {
  const a = appById(app);
  return (
    <a className="store" href={a.play} target="_blank" rel="noopener noreferrer" aria-label={`Baixar ${label ?? a.name} no Google Play`}>
      <PlayIcon />
      <span>
        <small>Disponível no</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

export function SectionHead({ eyebrow, title, children, center = false }: { eyebrow?: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export interface TabDef {
  id: string;
  label: string;
  content: ReactNode;
}

/** Abas acessíveis (setas, Home e End). Só o painel aberto é renderizado, então as imagens das outras abas não carregam à toa. */
export function Tabs({ tabs, label, initial }: { tabs: readonly TabDef[]; label: string; initial?: string }) {
  const [active, setActive] = useState(initial ?? tabs[0]!.id);
  const base = useId();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const onKey = (e: KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.id === active);
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    else return;
    e.preventDefault();
    const t = tabs[n]!;
    setActive(t.id);
    refs.current[t.id]?.focus();
  };
  const current = tabs.find((t) => t.id === active) ?? tabs[0]!;
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {tabs.map((t) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[t.id] = el; }}
            id={`${base}-t-${t.id}`}
            role="tab"
            type="button"
            className="tabs__tab"
            aria-selected={t.id === active}
            aria-controls={`${base}-p-${t.id}`}
            tabIndex={t.id === active ? 0 : -1}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={current.id} id={`${base}-p-${current.id}`} role="tabpanel" aria-labelledby={`${base}-t-${current.id}`} className="tabs__panel">
        {current.content}
      </div>
    </div>
  );
}

export function Faq({ items }: { items: readonly { q: string; a: ReactNode }[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <div className="faq__a">{typeof it.a === "string" ? <p>{it.a}</p> : it.a}</div>
        </details>
      ))}
    </div>
  );
}
