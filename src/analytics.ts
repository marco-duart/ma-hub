// Eventos de contato para o Google Analytics 4 (e o GTM, que lê o mesmo dataLayer). As visitas de página o GA4 já conta
// sozinho, inclusive na troca de rota (medição otimizada: "alterações de página com base no histórico do navegador").
// Fora do domínio de produção o gtag não existe e nada é enviado.

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

function kindOf(url: URL): string | null {
  if (url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com")) return "contato_whatsapp";
  if (url.protocol === "mailto:") return "contato_email";
  if (url.hostname.endsWith("instagram.com")) return "abrir_instagram";
  if (url.hostname === "play.google.com") return "abrir_google_play";
  return null;
}

export function trackContactClicks(): void {
  document.addEventListener(
    "click",
    (ev) => {
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag || !(ev.target instanceof Element)) return;
      const a = ev.target.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      let url: URL;
      try { url = new URL(a.href); } catch { return; }
      const name = kindOf(url);
      if (!name) return;
      gtag("event", name, {
        // em que parte da página o clique aconteceu (seção com id), para saber qual chamada converte
        secao: a.closest("section[id]")?.id ?? (a.closest("header") ? "menu" : a.closest("footer") ? "rodape" : "pagina"),
        texto_link: (a.textContent ?? "").trim().slice(0, 80),
        destino: url.protocol === "mailto:" ? "email" : url.hostname,
      });
    },
    { capture: true },
  );
}
