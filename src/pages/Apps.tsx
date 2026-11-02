import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Phone } from "@/components/Media";
import { SectionHead, StoreButton } from "@/components/Parts";
import { APPS, systemByKey } from "@/site";

const SHOTS: Record<string, [string, string, string]> = {
  dita: ["/img/dita/m-conversas.webp", "/img/dita/m-pedidos.webp", "/img/dita/m-cliente.webp"],
  "mostra-ai": ["/img/mostra-ai/m-inicio.webp", "/img/mostra-ai/m-produtos.webp", "/img/mostra-ai/m-mesas.webp"],
  "mostra-ai-cliente": ["/img/mostra-ai/m-c-inicio.webp", "/img/mostra-ai/m-c-loja.webp", "/img/mostra-ai/m-c-horarios.webp"],
  "mostra-ai-parceiro": ["/img/mostra-ai/m-p-mesas.webp", "/img/mostra-ai/m-p-fila.webp", "/img/mostra-ai/m-p-comanda.webp"],
  rasttro: ["/img/rasttro/m-inicio.webp", "/img/rasttro/m-carteirinha.webp", "/img/rasttro/m-comboio.webp"],
  profyla: ["/img/profyla/m-vagas.webp", "/img/profyla/m-candidaturas.webp", "/img/profyla/m-disc.webp"],
};

const DESC: Record<string, string> = {
  dita: "Atenda e acompanhe os pedidos do WhatsApp da loja: conversas, pedidos, parcelas, produtos e clientes.",
  "mostra-ai": "O app do lojista: cardápio, QR Code, locais, equipe, mesas, comandas e agenda de serviços.",
  "mostra-ai-cliente": "Ache lojas perto de você, veja cardápios, agende serviços e salve favoritos.",
  "mostra-ai-parceiro": "Para garçons e cozinha: mesas, fila de chamados, comanda e fechamento de conta.",
  rasttro: "O seu motoclube no celular: agenda, comboio, carteirinha digital, mensalidades e comunicados.",
  profyla: "Monte o perfil importando o currículo, encontre vagas, acompanhe candidaturas e faça os testes de perfil.",
};

export function Apps() {
  return (
    <main id="conteudo">
      <Seo route="/apps" />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Apps no Google Play</span>
          <h1 style={{ marginTop: 22 }}>Seis apps. <span className="grad-text">Escolha o seu.</span></h1>
          <p className="hero__sub">Todos são para Android e usam o mesmo login do painel web do sistema. Instale o app do seu papel.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: 28 }}>
          {APPS.map((a, i) => {
            const sys = systemByKey(a.system);
            return (
              <Reveal key={a.id} className="card" data-theme={sys.theme}>
                <div className="frow" style={{ alignItems: "center" }}>
                  <div className="frow__text">
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <img src={a.icon} alt="" width={72} height={72} style={{ borderRadius: 18 }} loading={i < 2 ? "eager" : "lazy"} />
                      <div>
                        <span className="eyebrow">{a.audience}</span>
                        <h2 style={{ fontSize: 32, marginTop: 6 }}>{a.name}</h2>
                      </div>
                    </div>
                    <p>{DESC[a.id]}</p>
                    <div className="btn-row">
                      <StoreButton app={a.id} />
                      <Link className="btn btn--ghost btn--sm" to={sys.route} style={{ alignSelf: "center" }}>Conhecer o {sys.name} <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                  <div className="frow__media" style={{ gap: 14 }}>
                    {SHOTS[a.id]!.map((src) => (
                      <Phone key={src} src={src} alt={`Tela do app ${a.name}`} width={150} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
          <SectionHead eyebrow="Sem app" title="Também funciona no navegador">
            Cada sistema tem painel na web com o mesmo login: dita.app.br, mostraai.app.br, rasttro.app.br e profyla.app.br.
          </SectionHead>
        </div>
      </section>
    </main>
  );
}
