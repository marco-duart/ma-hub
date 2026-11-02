import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface Shot {
  src: string;
  alt: string;
  /** Título curto (negrito) */
  title?: string;
  caption?: string;
}

interface Ctx {
  open: (items: readonly Shot[], index?: number) => void;
}

const LightboxContext = createContext<Ctx>({ open: () => undefined });
// eslint-disable-next-line react-refresh/only-export-components
export const useLightbox = (): Ctx => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ items: readonly Shot[]; index: number } | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = useCallback((items: readonly Shot[], index = 0) => {
    opener.current = document.activeElement as HTMLElement | null;
    setState({ items, index });
  }, []);
  const close = useCallback(() => {
    setState(null);
    opener.current?.focus?.();
  }, []);
  const go = useCallback((d: number) => {
    setState((s) => (s ? { ...s, index: (s.index + d + s.items.length) % s.items.length } : s));
  }, []);

  const value = useMemo(() => ({ open }), [open]);
  return (
    <LightboxContext.Provider value={value}>
      {children}
      {state && <Viewer items={state.items} index={state.index} onClose={close} onGo={go} />}
    </LightboxContext.Provider>
  );
}

function Viewer({ items, index, onClose, onGo }: { items: readonly Shot[]; index: number; onClose: () => void; onGo: (d: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const shot = items[index]!;

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onGo(-1);
      else if (e.key === "ArrowRight") onGo(1);
      else if (e.key === "Tab") {
        // mantém o foco dentro da janela
        const focusables = document.querySelectorAll<HTMLElement>(".lightbox button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onGo]);

  // pré-carrega a anterior e a próxima
  useEffect(() => {
    for (const d of [-1, 1]) {
      const n = items[(index + d + items.length) % items.length];
      if (n) new Image().src = n.src;
    }
  }, [index, items]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Ampliar imagem" onClick={onClose}>
      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox__count" aria-hidden="true">{index + 1} / {items.length}</span>
        <button ref={closeRef} type="button" className="icon-btn lightbox__close" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        {items.length > 1 && (
          <>
            <button type="button" className="icon-btn lightbox__prev" onClick={() => onGo(-1)} aria-label="Imagem anterior"><ChevronLeft size={22} /></button>
            <button type="button" className="icon-btn lightbox__next" onClick={() => onGo(1)} aria-label="Próxima imagem"><ChevronRight size={22} /></button>
          </>
        )}
        <img src={shot.src} alt={shot.alt} />
      </div>
      <p className="lightbox__cap" onClick={(e) => e.stopPropagation()}>
        {shot.title && <strong>{shot.title}</strong>}
        {shot.caption}
      </p>
    </div>
  );
}
