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
            <p>Este site apresenta os sistemas da M.A. Axis ({SITE.legalName}, CNPJ {SITE.cnpj}). Não há formulários nem cadastro: o contato é feito por WhatsApp, e-mail ou Instagram, fora do site.</p>
            <h2>Medição de audiência</h2>
            <p>Usamos o <strong style={{ color: "var(--text)" }}>Google Analytics</strong>, carregado pelo Google Tag Manager, para saber quantas pessoas visitam o site, quais páginas são vistas e quais botões de contato são usados. Para isso, o Google grava cookies de análise no seu navegador (como <code>_ga</code>) e recebe dados técnicos da visita: páginas acessadas, tipo de aparelho e navegador, cidade aproximada e origem do acesso. Os dados são vistos de forma agregada; não identificamos quem é você.</p>
            <p>O site <strong style={{ color: "var(--text)" }}>não tem anúncios</strong> e não usa os dados para publicidade nem para personalizar anúncios. Você pode apagar ou bloquear os cookies nas configurações do navegador, ou instalar o <a href="https://tools.google.com/dlpage/gaoptout?hl=pt-BR" target="_blank" rel="noopener noreferrer">complemento de desativação do Google Analytics</a>. O tratamento pelo Google segue a <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noopener noreferrer">política de privacidade do Google</a>.</p>
            <p>Os links para o Google Play, para o WhatsApp, para o Instagram e para os painéis de cada sistema levam a serviços de terceiros, que têm as suas próprias políticas.</p>
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
