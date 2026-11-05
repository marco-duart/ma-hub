import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, SectionHead, WhatsAppIcon } from "@/components/Parts";
import { SITE, SYSTEMS, mailto, whatsappUrl } from "@/site";

const HOW: Record<string, { title: string; text: string; cta: string; subject: string }> = {
  "mostra-ai": { title: "Você mesmo cria a loja", text: "Baixe o app do lojista, toque em “Criar minha loja” e responda uma pergunta por vez. Comece no plano Free.", cta: "Dúvidas sobre o MostraAi", subject: "Dúvidas sobre o MostraAi" },
  dita: { title: "Nossa equipe cria a conta", text: "Não há cadastro aberto. Fale com a gente, deixamos a conta da empresa pronta e mostramos como conectar o WhatsApp.", cta: "Quero contratar o Dita", subject: "Quero contratar o Dita" },
  profyla: { title: "Candidato se cadastra; empresa fala com a gente", text: "Candidatos criam a conta no app ou no site, sem custo. Empresas e recrutadores: a conta da equipe é criada por nós.", cta: "Quero contratar com o Profyla", subject: "Quero contratar com o Profyla" },
  rasttro: { title: "A diretoria cria o clube", text: "A diretoria cria o motoclube no painel e convida os integrantes por link. O clube começa com um período de teste.", cta: "Quero o Rasttro no meu clube", subject: "Quero organizar meu motoclube no Rasttro" },
};

export function Contato() {
  return (
    <main id="conteudo">
      <Seo route="/contato" />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Contato</span>
          <h1 style={{ marginTop: 22 }}>Vamos <span className="grad-text">conversar?</span></h1>
          <p className="hero__sub">Dúvidas, demonstração ou contratação: chame no WhatsApp de atendimento M.A. Axis, escreva por e-mail ou fale pelo Instagram.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={whatsappUrl("Olá! Quero falar com o atendimento da M.A. Axis.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp {SITE.whatsapp.label}</a>
            <a className="btn btn--ghost" href={mailto("Quero conhecer os sistemas da M.A. Axis")}><Mail size={18} /> {SITE.email}</a>
            <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band" style={{ marginBottom: "clamp(48px,7vw,88px)" }}>
            <div>
              <h2>Precisa de algo do seu jeito?</h2>
              <p>Ajusto os sistemas à sua rotina ou crio uma solução sob medida, com um preço que cabe no bolso do comércio. A implantação, o treinamento e o suporte são comigo, de perto.</p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary" href={whatsappUrl("Olá! Quero uma solução do jeito do meu negócio. Pode me passar um orçamento?")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Orçamento sem compromisso</a>
            </div>
          </Reveal>
          <SectionHead eyebrow="Como começar" title="Cada sistema começa de um jeito" />
          <div className="contact-grid">
            {SYSTEMS.map((s, i) => {
              const h = HOW[s.key]!;
              return (
                <Reveal key={s.key} className="card contact-card" data-theme={s.theme} delay={(i % 2) * 90}>
                  <h3><img src={s.icon} alt="" width={40} height={40} loading="lazy" /> {s.name}</h3>
                  <strong style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{h.title}</strong>
                  <p>{h.text}</p>
                  <div className="btn-row">
                    <a className="btn btn--primary btn--sm" href={mailto(h.subject)}>{h.cta}</a>
                    <Link className="btn btn--ghost btn--sm" to={s.route}>Ver o {s.name} <ArrowRight size={15} /></Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="frow__text">
              <span className="eyebrow">Impressão 3D</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)" }}>Funko Pop personalizado</h2>
              <p style={{ color: "var(--muted)", fontSize: 18 }}>Os pedidos de impressão 3D são feitos pelo Instagram {SITE.forja.handle}.</p>
              <div className="btn-row"><a className="btn btn--ghost" href={SITE.forja.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.forja.handle}</a></div>
            </div>
            <Reveal className="card">
              <h3 style={{ fontSize: 22, marginBottom: 14 }}>Dados da empresa</h3>
              <ul className="ticks">
                <li><strong>{SITE.legalName}</strong> (M.A. Axis)</li>
                <li>CNPJ <strong>{SITE.cnpj}</strong></li>
                <li>WhatsApp (atendimento M.A. Axis) <a href={whatsappUrl("Olá! Quero falar com o atendimento da M.A. Axis.")} target="_blank" rel="noopener noreferrer"><strong>{SITE.whatsapp.full}</strong></a></li>
                <li>E-mail <a href={`mailto:${SITE.email}`}><strong>{SITE.email}</strong></a></li>
                <li>Instagram <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><strong>{SITE.instagram.handle}</strong></a></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
