import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, HeartHandshake, LifeBuoy, Mail, MapPin, PiggyBank, Store, Bike } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Phone, Marquee } from "@/components/Media";
import { Faq, InstagramIcon, SectionHead, WhatsAppIcon } from "@/components/Parts";
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

const PAINS = [
  { q: "Estou perdendo pedidos no WhatsApp", a: "O Dita responde na hora, monta o pedido e chama você quando precisa.", theme: "dita" },
  { q: "Não consigo acompanhar meus clientes", a: "Ficha de cada cliente com pedidos, parcelas e conversas, num lugar só.", theme: "dita" },
  { q: "A cobrança vive no caderninho", a: "Parcelas com vencimento, lembrete antes de vencer e cobrança do que atrasou.", theme: "dita" },
  { q: "Meu cardápio e meus preços estão sempre desatualizados", a: "Cardápio ou catálogo no QR Code, que você atualiza pelo celular.", theme: "mostra" },
  { q: "Queria organizar mesas, agenda e atendimento", a: "Mesas com chamada de garçom, comanda digital e agenda de serviços.", theme: "mostra" },
  { q: "Tenho uma ideia, mas não sei qual tecnologia usar", a: "A gente conversa, e eu indico, adapto ou crio a solução do seu tamanho.", theme: "profyla" },
];

const CITIES = ["Goiânia", "Aparecida de Goiânia", "Senador Canedo", "Trindade"];

const FAQ = [
  { q: "Preciso entender de tecnologia para contratar?", a: "Não. Você me conta o que quer melhorar no negócio, e eu cuido da parte técnica: escolha da solução, configuração, cadastro e treinamento." },
  { q: "Quanto custa?", a: "Depende do que o seu negócio precisa. As soluções prontas têm planos mensais acessíveis, e o MostraAi tem plano gratuito para começar. Personalizações recebem um orçamento antes, sem compromisso." },
  { q: "O que está incluído no acompanhamento?", a: "Na contratação combinamos o que entra: configuração inicial, cadastro dos produtos, treinamento e suporte pelo WhatsApp. Ajustes maiores e desenvolvimento sob medida são orçados à parte, sem surpresa." },
  { q: "Vocês atendem a minha cidade?", a: "Atendo presencialmente em Goiânia, Aparecida de Goiânia, Senador Canedo e Trindade. Os sistemas funcionam pela internet, no celular e no computador." },
  { q: "Meu comércio é pequeno. Vale a pena?", a: "Vale. As soluções foram feitas para o pequeno negócio: começam simples, com o que você mais precisa, e crescem junto com você." },
  { q: "Preciso trocar meu número de WhatsApp?", a: "Não. O Dita conecta como o WhatsApp Web e o seu celular continua funcionando normalmente." },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function Home() {
  return (
    <main id="conteudo">
      <Seo route="/" />

      {/* ---------- herói ---------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Goiânia, Aparecida, Senador Canedo e Trindade</span>
            <h1 className="hero-title" style={{ marginTop: 22 }}>
              Tecnologia e acompanhamento para <span className="grad-text">organizar o seu negócio</span>
            </h1>
            <p className="hero-words hero-words--tagline" aria-hidden="true">
              <span className="w1">Mostre.</span> <span className="w2">Atenda.</span> <span className="w3">Contrate.</span> <span className="w4">Organize.</span>
            </p>
            <p className="hero__sub">
              A Maaxis ajuda pequenos comércios a organizar pedidos, clientes, vendas e atendimento com sistemas e automações do tamanho do negócio. Da escolha da ferramenta à implantação e ao suporte, você tem apoio de perto, sem precisar entender de tecnologia.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={whatsappUrl("Olá! Quero organizar o meu negócio com a Maaxis. Podemos conversar?")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Conversar pelo WhatsApp</a>
              <a className="btn btn--ghost" href="#como-ajudamos">Como funciona <ArrowRight size={18} /></a>
            </div>
            <div className="chips hero__meta">
              <span className="chip chip--accent">Sem precisar entender de tecnologia</span>
              <a className="chip chip--accent" href="#sob-medida">Preço que cabe no bolso</a>
              <span className="chip">Implantação e suporte de perto</span>
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

      {/* ---------- o problema, nas palavras do comerciante ---------- */}
      <section className="section section--alt" id="problemas">
        <div className="container">
          <SectionHead eyebrow="Isso soa familiar?" title="Você não precisa saber qual sistema contratar. Só o que quer melhorar." center>
            Você entende do seu negócio. A Maaxis traduz o problema do dia a dia em uma solução que funciona na sua rotina.
          </SectionHead>
          <div className="pains">
            {PAINS.map((p, i) => (
              <Reveal key={p.q} className="pain" delay={(i % 3) * 70} data-theme={p.theme}>
                <p className="pain__q">“{p.q}”</p>
                <p className="pain__a">{p.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- sistemas ---------- */}
      <section className="section" id="sistemas">
        <div className="container">
          <SectionHead eyebrow="Soluções prontas" title={<>Ferramentas próprias, <span className="grad-text">prontas para começar</span></>}>
            Os sistemas da Maaxis são a base: eu escolho com você o que faz sentido, adapto e implanto. Cada um tem página própria, com o que faz, as telas reais e como começar.
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

      {/* ---------- como ajudamos: diagnóstico, escolha, implantação, acompanhamento ---------- */}
      <section className="section" id="como-ajudamos">
        <div className="container">
          <SectionHead eyebrow="Como a Maaxis ajuda" title={<>Não é só um sistema. <span className="grad-text">É alguém do seu lado.</span></>}>
            Sistema barato que ninguém consegue usar não resolve nada. Por isso a implantação e o acompanhamento fazem parte do que você contrata.
          </SectionHead>
          <div className="steps">
            <Reveal className="step"><h3>Entendo o seu negócio</h3><p>Vou até o seu comércio ou conversamos pelo WhatsApp. Você conta a rotina, e eu vejo onde o tempo e o dinheiro escapam.</p></Reveal>
            <Reveal className="step" delay={80}><h3>Indico a solução certa</h3><p>Sem termos técnicos: mostro o que resolve o seu problema, com um orçamento do tamanho do negócio.</p></Reveal>
            <Reveal className="step" delay={160}><h3>Implanto e ensino</h3><p>Configuro, cadastro os seus produtos, conecto o WhatsApp e treino você e a sua equipe.</p></Reveal>
            <Reveal className="step" delay={240}><h3>Acompanho de perto</h3><p>Depois de começar, sigo do seu lado para dúvidas e ajustes, com suporte direto comigo.</p></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- sob medida, preço de comércio ---------- */}
      <section className="section" id="sob-medida" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Sob medida" title={<>Do jeito do seu negócio, com um preço que <span className="grad-text">cabe no seu bolso</span></>}>
            Comércio pequeno não precisa de sistema caro nem complicado. Eu parto das soluções prontas e ajusto à sua rotina, ou crio algo só seu, sempre com um orçamento do tamanho do seu negócio.
          </SectionHead>
          <div className="grid-3">
            <Reveal className="card feat">
              <span className="icon-bubble"><PiggyBank size={24} /></span>
              <h3>Personalizado sem pesar no bolso</h3>
              <p>Ajustes nos sistemas, integrações com o que você já usa ou uma solução nova. O orçamento é combinado com você e sem compromisso.</p>
            </Reveal>
            <Reveal className="card feat" delay={90}>
              <span className="icon-bubble"><HeartHandshake size={24} /></span>
              <h3>Acompanhamento de perto</h3>
              <p>Eu mesmo configuro, cadastro seus produtos e ensino você e a sua equipe. Sem central de atendimento: você fala direto comigo pelo WhatsApp.</p>
            </Reveal>
            <Reveal className="card feat" delay={180}>
              <span className="icon-bubble"><LifeBuoy size={24} /></span>
              <h3>Suporte que continua</h3>
              <p>Depois que você começa, eu sigo do seu lado para dúvidas, ajustes e novas ideias. O sistema cresce junto com o seu negócio.</p>
            </Reveal>
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <a className="btn btn--primary" href={whatsappUrl("Olá! Quero uma solução do jeito do meu negócio. Pode me passar um orçamento?")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Pedir um orçamento sem compromisso</a>
            <Link className="btn btn--ghost" to="/contato">Ver como contratar <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ---------- região atendida ---------- */}
      <section className="section section--alt" id="regiao">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="frow__text">
              <span className="eyebrow">Atendimento perto de você</span>
              <h2 style={{ fontSize: "clamp(30px,4vw,48px)" }}>Goiânia e região, com visita ao seu comércio</h2>
              <p style={{ color: "var(--muted)", fontSize: 18 }}>
                Grandes empresas de software atendem de longe. A Maaxis vai até você: observa como o seu negócio funciona, implanta a solução no lugar certo e continua por perto, pelo WhatsApp.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={whatsappUrl("Olá! Quero agendar uma visita da Maaxis no meu comércio.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agendar uma visita</a>
              </div>
            </div>
            <ul className="cities" aria-label="Cidades atendidas">
              {CITIES.map((c, i) => (
                <Reveal as="li" key={c} className="city" delay={i * 70}><MapPin size={22} /> {c}</Reveal>
              ))}
            </ul>
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

      {/* ---------- perguntas frequentes ---------- */}
      <section className="section section--alt" id="perguntas">
        <div className="container">
          <SectionHead eyebrow="Perguntas frequentes" title="O que o comerciante costuma perguntar" center />
          <Faq items={FAQ.map((f) => ({ q: f.q, a: f.a }))} />
          <script type="application/ld+json">{JSON.stringify(FAQ_LD)}</script>
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
