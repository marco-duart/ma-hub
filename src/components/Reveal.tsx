import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

/** Entrada suave ao rolar. Sem JS ou com "reduzir movimento" o conteúdo aparece direto (ver base.css). */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ "--d": `${delay}ms` } as CSSProperties} {...rest}>
      {children}
    </Tag>
  );
}
