import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Mail, Store, Bike } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Phone, Marquee } from "@/components/Media";
import { InstagramIcon, SectionHead, WhatsAppIcon } from "@/components/Parts";
import { APPS, SITE, SYSTEMS, mailto, systemByKey, whatsappUrl } from "@/site";

const PRODUCT_COPY: Record<string, { ticks: string[]; shots: [string, string] }> = {
  "mostra-ai": {
    ticks: ["Cardápio e catálogo no QR Code, sem o cliente baixar nada", "Mesas, chamada de garçom e comanda digital", "Agenda de serviços e mapa de lojas"],
    shots: ["/img/mostra-ai/m-inicio.webp", "/img/mostra-ai/m-mesas.webp"],
  },
  dita: {
    ticks: ["Responde no WhatsApp com o seu catálogo e os seus preços", "Monta o pedido e acompanha parcelas e cobranças", "Chama você quando a conversa precisa de uma pessoa"],
    shots: ["/img/dita/m-bot.webp", "/img/dita/m-pedidos.webp"],
  },
  profyla: {
    ticks: ["Importa o currículo em PDF e monta o perfil", "Kanban, entrevistas e testes DISC e Eneagrama", "Site para recrutadores e app para candidatos"],
    shots: ["/img/profyla/m-vagas.webp", "/img/profyla/m-disc.webp"],
  },
  rasttro: {
    ticks: ["Membros, cargos, prospects e mensalidades", "Reuniões, eventos e comboios com check-in por QR", "Carteirinha digital no celular de cada integrante"],
    shots: ["/img/rasttro/m-carteirinha.webp", "/img/rasttro/m-comboio.webp"],
  },
};

const STRIP = [
  { to: "/mostra-ai", theme: "mostra", verb: "Mostre", src: "/img/mostra-ai/m-qr.webp", alt: "MostraAi: QR Code da loja e link para compartilhar", label: "QR Code da loja" },
  { to: "/dita", theme: "dita", verb: "Atenda", src: "/img/dita/m-conversas.webp", alt: "Dita: conversas esperando resposta", label: "Conversas no WhatsApp" },
  { to: "/profyla", theme: "profyla", verb: "Contrate", src: "/img/profyla/m-candidaturas.webp", alt: "Profyla: candidaturas e o que falta fazer", label: "Candidaturas" },
  { to: "/rasttro", theme: "rasttro", verb: "Organize", src: "/img/rasttro/m-inicio.webp", alt: "Rasttro: início com comunicado, evento e mensalidade", label: "Início do clube" },
  { to: "/mostra-ai", theme: "mostra", verb: "Mostre", src: "/img/mostra-ai/m-mesas.webp", alt: "MostraAi: mesas e chamados de garçom", label: "Mesas e chamados" },
  { to: "/dita", theme: "dita", verb: "Atenda", src: "/img/dita/m-parcelas.webp", alt: "Dita: parcelas de um pedido", label: "Parcelas e cobrança" },
  { to: "/profyla", theme: "profyla", verb: "Contrate", src: "/img/profyla/m-testes.webp", alt: "Profyla: testes DISC e Eneagrama", label: "Testes de perfil" },
  { to: "/rasttro", theme: "rasttro", verb: "Organize", src: "/img/rasttro/m-carteirinha.webp", alt: "Rasttro: carteirinha digital com QR Code", label: "Carteirinha digital" },
  { to: "/mostra-ai", theme: "mostra", verb: "Mostre", src: "/img/mostra-ai/m-agenda.webp", alt: "MostraAi: agenda de serviços", label: "Agenda de serviços" },
  { to: "/dita", theme: "dita", verb: "Atenda", src: "/img/dita/m-importar.webp", alt: "Dita: importar a lista de produtos", label: "Importar produtos" },
  { to: "/profyla", theme: "profyla", verb: "Contrate", src: "/img/profyla/m-revisao.webp", alt: "Profyla: revisão do currículo importado", label: "Importar currículo" },
  { to: "/rasttro", theme: "rasttro", verb: "Organize", src: "/img/rasttro/m-comboio.webp", alt: "Rasttro: comboio com ponto de encontro e paradas", label: "Comboio" },
];

export function Home() {
  return (
    <main id="conteudo">
      <Seo route="/" />

      {/* ---------- herói ---------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">M.A. Axis · soluções digitais</span>
            <h1 className="hero-words" style={{ marginTop: 22 }}>
              <span className="w1">Mostre.</span> <span className="w2">Atenda.</span> <span className="w3">Contrate.</span> <span className="w4">Organize.</span>
            </h1>
            <p className="hero__sub">
              Quatro sistemas para quem empreende, contrata e vive a estrada: do cardápio no QR Code ao atendimento no WhatsApp, do recrutamento ao motoclube. Painel na web e app no celular.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#sistemas">Conhecer os sistemas <ArrowRight size={18} /></a>
              <Link className="btn btn--ghost" to="/apps">Baixar os apps</Link>
            </div>
            <div className="chips hero__meta">
              <span className="chip">Dita</span><span className="chip">MostraAi</span><span className="chip">Profyla</span><span className="chip">Rasttro</span>
              <span className="chip chip--accent">6 apps no Google Play</span>
            </div>
          </div>
          <div className="fan" aria-label="Telas dos quatro sistemas">
            <Phone src="/img/mostra-ai/m-inicio.webp" alt="MostraAi: início da loja com QR Code" priority />
            <Phone src="/img/dita/m-bot.webp" alt="Dita: o assistente respondendo um cliente no WhatsApp" priority />
            <Phone src="/img/profyla/m-vagas.webp" alt="Profyla: vagas abertas" priority />
            <Phone src="/img/rasttro/m-carteirinha.webp" alt="Rasttro: carteirinha digital com QR Code" priority />
          </div>
        </div>
      </section>

      {/* ---------- sistemas ---------- */}
      <section className="section" id="sistemas">
        <div className="container">
          <SectionHead eyebrow="Os sistemas" title={<>Um para cada jeito de <span className="grad-text">fazer acontecer</span></>}>
            Cada sistema resolve um problema do dia a dia e tem página própria, com tudo o que ele faz, as telas reais e como começar.
          </SectionHead>
          <div className="grid-2">
            {SYSTEMS.map((s, i) => {
              const c = PRODUCT_COPY[s.key]!;
              return (
                <Reveal key={s.key} delay={(i % 2) * 90}>
                  <Link to={s.route} className="pcard" data-theme={s.theme} aria-label={`Conhecer o ${s.name}`}>
                    <div className="pcard__top">
                      <img src={s.icon} alt="" width={56} height={56} loading="lazy" />
                      <div>
                        <div className="pcard__verb">{s.verb}</div>
                        <h3>{s.name}</h3>
                      </div>
                    </div>
                    <div className="pcard__body">
                      <p>{s.oneLiner}</p>
                      <ul className="ticks">{c.ticks.map((t) => (<li key={t}>{t}</li>))}</ul>
                    </div>
                    <span className="pcard__cta">Conhecer o {s.name} <ArrowRight size={18} /></span>
                    <div className="pcard__shots" aria-hidden="true">
                      {c.shots.map((src) => (
                        <figure className="phone" key={src}><div className="phone__body"><img src={src} alt="" width={640} height={1422} loading="lazy" /></div></figure>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- para quem é ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Para quem é" title="Qual sistema é o seu?" center>
            Comece pelo que você faz. Se precisar de mais de um, eles funcionam separados e juntos.
          </SectionHead>
          <div className="who">
            <Reveal className="who__item" data-theme="mostra">
              <span className="icon-bubble"><Store size={24} /></span>
              <h3>Tenho um comércio ou presto serviços</h3>
              <p>Mostre o cardápio ou o catálogo no QR Code, organize mesas e agenda e venda direto pelo WhatsApp. O Dita atende os clientes por você.</p>
              <div className="who__links">
                <Link to="/mostra-ai"><img src={systemByKey("mostra-ai").icon} alt="" width={26} height={26} /> MostraAi</Link>
                <Link to="/dita"><img src={systemByKey("dita").icon} alt="" width={26} height={26} /> Dita</Link>
              </div>
            </Reveal>
            <Reveal className="who__item" data-theme="profyla" delay={90}>
              <span className="icon-bubble"><BriefcaseBusiness size={24} /></span>
              <h3>Contrato ou procuro emprego</h3>
              <p>Empresas e recrutadores conduzem o processo seletivo em um só lugar. Candidatos montam o perfil em minutos e acompanham cada etapa pelo celular.</p>
              <div className="who__links">
                <Link to="/profyla"><img src={systemByKey("profyla").icon} alt="" width={26} height={26} /> Profyla</Link>
              </div>
            </Reveal>
            <Reveal className="who__item" data-theme="rasttro" delay={180}>
              <span className="icon-bubble"><Bike size={24} /></span>
              <h3>Tenho um motoclube</h3>
              <p>Membros, mensalidades, reuniões, eventos e comboios organizados, com a carteirinha digital no celular de cada integrante.</p>
              <div className="who__links">
                <Link to="/rasttro"><img src={systemByKey("rasttro").icon} alt="" width={26} height={26} /> Rasttro</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- veja por dentro ---------- */}
      <section className="section" aria-labelledby="por-dentro">
        <div className="container">
          <SectionHead eyebrow="Veja por dentro" title={<span id="por-dentro">Telas reais, de verdade</span>}>
            Estas são as telas dos apps, com dados de demonstração. Toque em uma para ver o sistema inteiro.
          </SectionHead>
        </div>
        <Marquee label="Telas dos apps">
          {STRIP.map((s, i) => (
            <Link key={i} to={s.to} data-theme={s.theme} className="phone mshot" aria-label={`${s.verb}: ${s.label}`}>
              <div className="phone__body"><img src={s.src} alt={s.alt} width={640} height={1422} loading="lazy" decoding="async" /></div>
              <small><b>{s.verb}</b>{s.label}</small>
            </Link>
          ))}
        </Marquee>
      </section>

      {/* ---------- números ---------- */}
      <section className="section section--tight">
        <div className="container">
          <div className="facts">
            <Reveal className="fact"><b>4</b><span>sistemas completos, cada um com painel na web e app</span></Reveal>
            <Reveal className="fact" delay={80}><b>6</b><span>apps Android no Google Play</span></Reveal>
            <Reveal className="fact" delay={160}><b>PT-BR</b><span>do cadastro ao suporte, tudo em português</span></Reveal>
            <Reveal className="fact" delay={240}><b>LGPD</b><span>política de privacidade pública em cada sistema</span></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- apps ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Apps" title="Todos no Google Play">Escolha o app do seu papel e instale. Seu login vale no app e no painel web do sistema.</SectionHead>
          <div className="app-list">
            {APPS.map((a) => (
              <a key={a.id} className="app-row" data-theme={systemByKey(a.system).theme} href={a.play} target="_blank" rel="noopener noreferrer">
                <img src={a.icon} alt="" width={62} height={62} loading="lazy" />
                <div>
                  <strong>{a.name}</strong>
                  <span>{a.audience}</span>
                </div>
                <ArrowUpRight size={20} style={{ marginLeft: "auto", color: "var(--accent)", flex: "none" }} />
              </a>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--ghost" to="/apps">Ver todos os apps <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ---------- impressão 3D ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="three-d">
            <div className="three-d__text">
              <span className="eyebrow" style={{ color: "#ffc417" }}>Impressão 3D</span>
              <h2>Criamos o seu Funko Pop</h2>
              <p>Além do software, a M.A. Axis faz objetos personalizados em impressão 3D. O primeiro produto é o Funko Pop sob encomenda: transforme quem você ama em um colecionável exclusivo.</p>
              <a className="btn btn--ghost" href={SITE.forja.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> Pedir pelo {SITE.forja.handle}</a>
            </div>
            <div className="three-d__img">
              <img src="/img/3d/funko-pop.webp" alt="Bonecos Funko Pop personalizados feitos em impressão 3D" width={1080} height={600} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- contato ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Vamos conversar sobre o seu negócio?</h2>
              <p>Conte o que você faz e a gente mostra qual sistema ajuda mais. Contratação, dúvidas e demonstração: é só chamar.</p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary" href={whatsappUrl("Olá! Quero falar com o atendimento da M.A. Axis.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp {SITE.whatsapp.label}</a>
              <a className="btn btn--ghost" href={mailto("Quero conhecer os sistemas da M.A. Axis")}><Mail size={18} /> {SITE.email}</a>
              <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
              <Link className="btn btn--ghost" to="/apps">Ver os apps no Google Play</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
