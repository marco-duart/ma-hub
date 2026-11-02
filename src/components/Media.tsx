import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLightbox, type Shot } from "./Lightbox";

interface PhoneProps extends Shot {
  /** largura em px (padrão: a do CSS) */
  width?: number;
  priority?: boolean;
  /** abre a galeria inteira (e não só esta imagem) na ampliação */
  group?: readonly Shot[];
  index?: number;
  className?: string;
}

/** Captura de celular (640x1422) numa moldura. Clicar amplia. */
export function Phone({ src, alt, title, caption, width, priority, group, index = 0, className = "" }: PhoneProps) {
  const { open } = useLightbox();
  const items = group ?? [{ src, alt, title, caption }];
  return (
    <figure className={`phone ${className}`.trim()} style={width ? { ["--w" as string]: `${width}px` } : undefined}>
      <div className="phone__body">
        <button type="button" className="shot-btn" onClick={() => open(items, group ? index : 0)} aria-label={`Ampliar: ${alt}`}>
          <img src={src} alt={alt} width={640} height={1422} loading={priority ? "eager" : "lazy"} decoding="async" {...(priority ? { fetchPriority: "high" as const } : {})} />
        </button>
      </div>
      {(title || caption) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface BrowserProps extends Shot {
  url?: string;
  priority?: boolean;
  group?: readonly Shot[];
  index?: number;
  className?: string;
}

/** Captura do site/painel (1600x1000) numa janela de navegador. */
export function Browser({ src, alt, title, caption, url = "", priority, group, index = 0, className = "" }: BrowserProps) {
  const { open } = useLightbox();
  const items = group ?? [{ src, alt, title, caption }];
  return (
    <figure className={`browser ${className}`.trim()}>
      <div className="browser__bar">
        <span className="browser__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="browser__url" aria-hidden="true">{url}</span>
      </div>
      <button type="button" className="shot-btn" onClick={() => open(items, group ? index : 0)} aria-label={`Ampliar: ${alt}`}>
        <img src={src} alt={alt} width={1600} height={1000} loading={priority ? "eager" : "lazy"} decoding="async" {...(priority ? { fetchPriority: "high" as const } : {})} />
      </button>
      {(title || caption) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Carrossel de celulares com rolagem por toque, setas e teclado. Clicar amplia e navega pela galeria. */
export function PhoneStrip({ shots, label }: { shots: readonly Shot[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * Math.max(280, track.current.clientWidth * 0.7), behavior: "smooth" });
  return (
    <div className="strip" role="region" aria-label={label}>
      <div className="strip__nav">
        <button type="button" className="icon-btn" onClick={() => scroll(-1)} aria-label="Anteriores"><ChevronLeft size={20} /></button>
        <button type="button" className="icon-btn" onClick={() => scroll(1)} aria-label="Próximas"><ChevronRight size={20} /></button>
      </div>
      <div className="strip__track" ref={track} tabIndex={0}>
        {shots.map((s, i) => (
          <Phone key={s.src} {...s} group={shots} index={i} />
        ))}
      </div>
    </div>
  );
}

/** Faixa que corre sozinha (pausa ao passar o mouse). A segunda cópia só existe para fechar o laço: fica inerte e escondida de leitores de tela. */
export function Marquee({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee__track">
        {children}
        <div aria-hidden="true" inert style={{ display: "contents" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
