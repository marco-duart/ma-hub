import { Seo } from "@/components/Seo";
import { SITE, SYSTEMS } from "@/site";

export function Privacidade() {
  return (
    <main id="conteudo">
      <Seo route="/privacidade" />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Privacidade</span>
          <h1 style={{ marginTop: 22, fontSize: "clamp(36px,5.5vw,64px)" }}>Privacidade deste site</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="prose">
            <p>Este site apresenta os sistemas da M.A. Axis ({SITE.legalName}, CNPJ {SITE.cnpj}). Ele <strong style={{ color: "var(--text)" }}>não usa cookies de rastreamento, não tem ferramentas de análise ou publicidade e não coleta dados pessoais</strong>. Não há formulários: o contato é feito por e-mail ou Instagram, fora do site.</p>
            <p>Os links para o Google Play, para o Instagram e para os painéis de cada sistema levam a serviços de terceiros, que têm as suas próprias políticas.</p>
            <h2>Políticas de cada sistema</h2>
            <p>Quando você usa o Dita, o MostraAi, o Rasttro ou o Profyla, os dados são tratados conforme a política de cada sistema:</p>
            <ul className="ticks">
              {SYSTEMS.map((s) => (
                <li key={s.key}><a href={s.privacy} target="_blank" rel="noopener noreferrer">{s.name}</a>{s.terms && <> · <a href={s.terms} target="_blank" rel="noopener noreferrer">Termos de uso</a></>}</li>
              ))}
            </ul>
            <h2>Contato</h2>
            <p>Dúvidas sobre privacidade: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
