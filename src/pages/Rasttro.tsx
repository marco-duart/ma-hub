import { ArrowRight, Banknote, CalendarDays, Contact, IdCard, Megaphone, Moon, Route, ShieldCheck, Users } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Browser, Phone, PhoneStrip } from "@/components/Media";
import { Faq, InstagramIcon, SectionHead, StoreButton, Tabs } from "@/components/Parts";
import type { Shot } from "@/components/Lightbox";
import { SITE, mailto, systemByKey } from "@/site";

const SYS = systemByKey("rasttro");
const m = (n: string) => `/img/rasttro/m-${n}.webp`;
const w = (n: string) => `/img/rasttro/w-${n}.webp`;

const APP: Shot[] = [
  { src: m("inicio"), alt: "Rasttro: início com comunicado, próximo evento e mensalidade", title: "Início", caption: "O que importa hoje." },
  { src: m("claro"), alt: "Rasttro: início no tema claro", title: "Tema claro", caption: "Escuro por padrão, claro se preferir." },
  { src: m("agenda"), alt: "Rasttro: agenda com reuniões, eventos e comboios", title: "Agenda", caption: "Tudo o que vem por aí." },
  { src: m("reuniao"), alt: "Rasttro: reunião com pauta e confirmação de presença", title: "Reunião", caption: "Pauta e presença." },
  { src: m("evento"), alt: "Rasttro: evento com respostas Vou, Talvez e Não vou", title: "Evento", caption: "Vou, Talvez ou Não vou, com acompanhantes." },
  { src: m("comboio"), alt: "Rasttro: comboio com ponto de encontro, rota e paradas", title: "Comboio", caption: "Ponto de encontro, rota e paradas." },
  { src: m("clube"), alt: "Rasttro: diretório de membros do clube", title: "Clube", caption: "Todos os membros, pelo apelido." },
  { src: m("membro"), alt: "Rasttro: perfil de um membro com títulos e moto", title: "Membro", caption: "Títulos, motos e história." },
  { src: m("carteira"), alt: "Rasttro: carteira com a carteirinha e a mensalidade vencida", title: "Carteira", caption: "Carteirinha e mensalidades." },
  { src: m("carteirinha"), alt: "Rasttro: carteirinha digital com QR Code", title: "Carteirinha", caption: "Com QR Code e brilho de tela aumentado." },
  { src: m("mensalidades"), alt: "Rasttro: mensalidades pendentes, vencidas e pagas", title: "Mensalidades", caption: "Cada mês com a sua situação." },
  { src: m("como-pagar"), alt: "Rasttro: como pagar, com a chave PIX do clube", title: "Como pagar", caption: "Chave PIX do clube, com cópia rápida." },
  { src: m("mais"), alt: "Rasttro: menu Mais com perfil, motos, títulos e notificações", title: "Mais", caption: "Perfil, motos, títulos e história." },
  { src: m("perfil"), alt: "Rasttro: perfil com dados de contato e de emergência", title: "Perfil", caption: "Inclusive os dados de emergência." },
  { src: m("motos"), alt: "Rasttro: minhas motos", title: "Minhas motos", caption: "As motos usadas nos rolês." },
  { src: m("historia"), alt: "Rasttro: minha história no clube", title: "Minha história", caption: "Sua trajetória no clube." },
  { src: m("gestor-checkin"), alt: "Rasttro: QR de check-in exibido pela diretoria", title: "QR de check-in", caption: "A diretoria mostra, o integrante lê." },
  { src: m("gestor-comboio"), alt: "Rasttro: comboio no celular do capitão com ficha de emergência", title: "Comboio do capitão", caption: "Papéis, ficha de emergência e modo saída." },
];

const WEB: (Shot & { url: string })[] = [
  { src: w("visao-geral"), url: "www.rasttro.app.br", alt: "Painel do Rasttro: visão geral do clube", title: "Visão geral", caption: "Membros, caixa e próximos eventos." },
  { src: w("claro"), url: "www.rasttro.app.br", alt: "Painel do Rasttro no tema claro", title: "Tema claro", caption: "O botão da lua, no topo, alterna." },
  { src: w("membros"), url: "www.rasttro.app.br/membros", alt: "Painel do Rasttro: quadro de membros", title: "Quadro de membros", caption: "Cargo, regional e situação." },
  { src: w("prospects"), url: "www.rasttro.app.br/prospects", alt: "Painel do Rasttro: funil de prospects por estágio", title: "Prospects", caption: "O funil de ingresso." },
  { src: w("cargos"), url: "www.rasttro.app.br/cargos", alt: "Painel do Rasttro: cargos e permissões", title: "Cargos e permissões", caption: "Cada cargo, o que pode fazer." },
  { src: w("agenda"), url: "www.rasttro.app.br/agenda", alt: "Painel do Rasttro: agenda do clube", title: "Agenda", caption: "Reuniões, eventos e comboios." },
  { src: w("reunioes"), url: "www.rasttro.app.br/reunioes", alt: "Painel do Rasttro: reuniões", title: "Reuniões", caption: "Pauta, presença e ata." },
  { src: w("comboio"), url: "www.rasttro.app.br/comboios", alt: "Painel do Rasttro: detalhe de um comboio", title: "Comboio", caption: "Paradas, papéis e saída." },
  { src: w("checkin"), url: "www.rasttro.app.br", alt: "Painel do Rasttro: modo check-in com QR Code", title: "Modo check-in", caption: "A presença entra sozinha." },
  { src: w("financeiro"), url: "www.rasttro.app.br/financeiro", alt: "Painel do Rasttro: visão geral do financeiro", title: "Financeiro", caption: "Entradas e saídas do clube." },
  { src: w("mensalidades"), url: "www.rasttro.app.br/financeiro", alt: "Painel do Rasttro: mensalidades do clube", title: "Mensalidades", caption: "Cobranças e regras." },
  { src: w("caixa"), url: "www.rasttro.app.br/financeiro", alt: "Painel do Rasttro: caixa por categoria", title: "Caixa", caption: "Tudo por categoria." },
  { src: w("comunicados"), url: "www.rasttro.app.br/comunicados", alt: "Painel do Rasttro: comunicados", title: "Comunicados", caption: "A fonte oficial do clube." },
];

export function Rasttro() {
  return (
    <main id="conteudo" data-theme="rasttro">
      <Seo route="/rasttro" />

      {/* ---------- herói ---------- */}
      <section className="hero hero--product">
        <div className="container hero__grid">
          <div>
            <div className="hero__badge"><img src={SYS.icon} alt="" width={44} height={44} /> Rasttro <span>Organize</span></div>
            <h1>Seu motoclube organizado, <span className="grad-text">do painel à estrada</span></h1>
            <p className="hero__sub">
              Membros, mensalidades, reuniões, eventos, comboios e carteirinha digital, tudo num lugar só, separado do falatório do grupo de WhatsApp. Painel para a diretoria, app para cada integrante.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SYS.web.url} target="_blank" rel="noopener noreferrer">Abrir o painel <ArrowRight size={18} /></a>
              <StoreButton app="rasttro" />
            </div>
            <div className="chips hero__meta">
              <span className="chip chip--accent">Juntos na estrada. Sempre.</span><span className="chip">Membros ilimitados</span><span className="chip">Escuro ou claro</span>
            </div>
          </div>
          <div className="duo">
            <Browser src={w("visao-geral")} url="www.rasttro.app.br" alt="Painel do Rasttro: visão geral do clube" priority />
            <Phone src={m("carteirinha")} alt="App do Rasttro: carteirinha digital com QR Code" priority />
          </div>
        </div>
      </section>

      {/* ---------- módulos ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="O que o Rasttro organiza" title="Tudo do clube num lugar só" />
          <div className="grid-3">
            {[
              { i: <Users size={24} />, t: "Pessoas", d: "Quadro de membros, convites por link, funil de prospects, cargos com permissões, títulos e regionais." },
              { i: <Banknote size={24} />, t: "Dinheiro", d: "Regras de mensalidade, lembretes automáticos, caixa por categoria e a chave PIX do clube à mão do integrante." },
              { i: <CalendarDays size={24} />, t: "Agenda", d: "Reuniões com pauta, presença e ata, e eventos com resposta Vou, Talvez ou Não vou e acompanhantes." },
              { i: <Route size={24} />, t: "Estrada", d: "Comboios com ponto de encontro, rota, paradas, papéis, “Cheguei no ponto” e ficha de emergência." },
              { i: <Megaphone size={24} />, t: "Comunicados", d: "A fonte oficial e pesquisável do clube, com confirmação de leitura (“Li e confirmo”)." },
              { i: <IdCard size={24} />, t: "Carteirinha", d: "Carteirinha digital com QR Code no celular de cada integrante, também usada no check-in." },
            ].map((f, i) => (
              <Reveal key={f.t} className="card feat" delay={(i % 3) * 80}>
                <span className="icon-bubble">{f.i}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- dois lados ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Dois lados, uma conta" title="A diretoria no painel, o integrante no app" center>
            O painel é para a diretoria, no computador. O app é para todos, no celular. A conta é a mesma.
          </SectionHead>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              label="Painel e app do Rasttro"
              tabs={[
                {
                  id: "diretoria",
                  label: "Para a diretoria",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">Painel web</span>
                        <h3>O clube inteiro à sua frente</h3>
                        <p>Quem cria o clube vira o Presidente e já começa com cargos, estágios de ingresso e categorias do financeiro prontos.</p>
                        <ul className="ticks">
                          <li><strong>Quadro de membros</strong> e ficha de cada um, com títulos e motos.</li>
                          <li><strong>Convites:</strong> a pessoa cria a conta pelo link e já entra no clube, na regional certa.</li>
                          <li><strong>Prospects:</strong> cada coluna é um estágio de ingresso; os cartões são as pessoas.</li>
                          <li><strong>Cargos e permissões:</strong> cada cargo diz o que a pessoa pode fazer.</li>
                          <li><strong>Auditoria:</strong> quem fez o quê nas ações sensíveis.</li>
                        </ul>
                      </div>
                      <div className="frow__media frow__media--wide">
                        <Browser src={w("membros")} url="www.rasttro.app.br/membros" alt="Painel do Rasttro: quadro de membros" title="Quadro de membros" caption="Cargo, regional e situação de cada integrante." />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "integrante",
                  label: "Para o integrante",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">App Android</span>
                        <h3>O clube no bolso, sem se perder no grupo</h3>
                        <p>O integrante entra pelo convite da diretoria e acompanha o que o clube combinou.</p>
                        <ul className="ticks">
                          <li><strong>Início:</strong> comunicados, próximos eventos, reunião obrigatória e mensalidade.</li>
                          <li><strong>Agenda:</strong> confirme presença e veja o mapa do evento.</li>
                          <li><strong>Carteira:</strong> carteirinha digital e mensalidades, com a chave PIX do clube.</li>
                          <li><strong>Perfil:</strong> motos, títulos, história e dados de emergência.</li>
                          <li><strong>Notificações:</strong> escolha o que chega no celular e no e-mail.</li>
                        </ul>
                        <div className="btn-row"><StoreButton app="rasttro" /></div>
                      </div>
                      <div className="frow__media">
                        <Phone src={m("inicio")} alt="Rasttro: início do app" title="Início" caption="O que importa hoje." />
                        <Phone src={m("agenda")} alt="Rasttro: agenda do app" title="Agenda" caption="Reuniões, eventos e comboios." />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- estrada ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow"><Route size={15} /> Estrada</span>
              <h3>Comboio sem ninguém para trás</h3>
              <p>Um comboio pode ser ligado a um evento ou ser só um rolê. No dia, o capitão acompanha tudo pelo app.</p>
              <ul className="ticks">
                <li><strong>Ponto de encontro e rota</strong> abertos no mapa, com as paradas na ordem.</li>
                <li><strong>Cheguei no ponto:</strong> cada integrante avisa e o capitão vê quem já chegou.</li>
                <li><strong>Ligar pro capitão</strong> com um toque.</li>
                <li><strong>Papéis do comboio</strong> definidos pela diretoria, cada um com o seu contato.</li>
                <li><strong>Ficha de emergência</strong> (tipo sanguíneo e contato) para quem tem permissão.</li>
                <li><strong>Modo saída:</strong> confirmados, no ponto e pendentes, de relance.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("comboio")} alt="Rasttro: comboio com ponto de encontro e paradas" title="Comboio" caption="Ponto, rota e paradas." />
              <Phone src={m("gestor-comboio")} alt="Rasttro: comboio no celular do capitão" title="Visão do capitão" caption="Ficha de emergência e modo saída." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- carteirinha e check-in ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="frow frow--rev">
            <div className="frow__text">
              <span className="eyebrow"><Contact size={15} /> Carteirinha e presença</span>
              <h3>Carteirinha digital. Presença sem lista de papel.</h3>
              <p>Cada integrante tem a carteirinha do clube no app, com nome, número de membro e QR Code. Na reunião, no evento ou no comboio, a diretoria mostra um QR e a presença entra sozinha.</p>
              <ul className="ticks">
                <li><strong>QR de check-in:</strong> a diretoria abre o modo check-in e cada membro lê com o app.</li>
                <li><strong>Carteirinha:</strong> o app aumenta o brilho da tela para o QR ser lido.</li>
                <li><strong>Presença registrada</strong> na reunião, no evento e no comboio, sem lista na mão.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("carteirinha")} alt="Rasttro: carteirinha digital com QR Code" title="Carteirinha" caption="Nome, número de membro e QR." />
              <Phone src={m("gestor-checkin")} alt="Rasttro: QR de check-in" title="Check-in" caption="O integrante lê, a presença entra." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- dinheiro ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow"><Banknote size={15} /> Dinheiro</span>
              <h3>A tesouraria sem cobrar um por um</h3>
              <p>A tesouraria cria a regra de mensalidade, e o Rasttro avisa o membro no celular e por e-mail.</p>
              <ul className="ticks">
                <li><strong>Lembretes automáticos:</strong> cobrança gerada, vai vencer, venceu e pago.</li>
                <li><strong>Mensalidades</strong> de cada membro, com a situação do mês.</li>
                <li><strong>Caixa e categorias:</strong> todas as entradas e saídas do clube, organizadas.</li>
                <li><strong>Como pagar:</strong> o app mostra a chave PIX do clube para copiar.</li>
              </ul>
              <div className="note"><Banknote size={20} /><p>O Rasttro não processa pagamento: o integrante paga fora do app, pelo PIX do clube, e a diretoria registra.</p></div>
            </div>
            <div className="frow__media">
              <Phone src={m("mensalidades")} alt="Rasttro: mensalidades do integrante" title="Mensalidades" caption="Pendente, vencida ou paga." />
              <Phone src={m("como-pagar")} alt="Rasttro: como pagar com a chave PIX do clube" title="Como pagar" caption="Chave PIX do clube." />
            </div>
          </Reveal>
          <div style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <Browser src={w("financeiro")} url="www.rasttro.app.br/financeiro" alt="Painel do Rasttro: visão geral do financeiro" title="Financeiro" caption="Entradas, saídas e mensalidades do clube." />
          </div>
        </div>
      </section>

      {/* ---------- reuniões e eventos ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="frow frow--rev">
            <div className="frow__text">
              <span className="eyebrow"><CalendarDays size={15} /> Reuniões e eventos</span>
              <h3>Convoca, confirma e registra</h3>
              <p>Reuniões, encontros, passeios, ações sociais e viagens, com a resposta de cada integrante.</p>
              <ul className="ticks">
                <li><strong>Reuniões:</strong> pauta, presença, decisões e ata. Todos os membros ativos são convocados.</li>
                <li><strong>Eventos:</strong> Vou, Talvez ou Não vou, com acompanhantes e mapa.</li>
                <li><strong>Reunião obrigatória</strong> destacada no início do app.</li>
                <li><strong>Comunicados</strong> com confirmação de leitura.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("reuniao")} alt="Rasttro: reunião com pauta" title="Reunião" caption="Pauta e presença." />
              <Phone src={m("evento")} alt="Rasttro: evento com resposta e acompanhantes" title="Evento" caption="Vou, Talvez, Não vou." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- privacidade ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="frow__text">
              <span className="eyebrow"><ShieldCheck size={15} /> Privacidade</span>
              <h2 style={{ fontSize: "clamp(30px,4vw,48px)" }}>Dado do clube fica no clube</h2>
              <p style={{ color: "var(--muted)", fontSize: 18 }}>O Rasttro foi pensado para a diretoria cuidar das informações de quem anda junto.</p>
            </div>
            <Reveal className="card">
              <ul className="ticks">
                <li>Telefone, e-mail, nascimento, tipo sanguíneo, contato de emergência e placa só aparecem para o <strong>próprio membro</strong> e para quem tem a permissão <strong>“Ver dados pessoais”</strong>.</li>
                <li><strong>Cada cargo</strong> tem permissões configuráveis, com escopo de si mesmo, da regional ou do clube inteiro.</li>
                <li>O app <strong>não pede localização</strong> do aparelho, não lê seus contatos e não tem anúncios nem rastreadores.</li>
                <li>A câmera é usada só para ler o QR de check-in e tirar a foto do perfil.</li>
              </ul>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <a className="btn btn--ghost btn--sm" href={SYS.privacy} target="_blank" rel="noopener noreferrer"><ShieldCheck size={16} /> Política de privacidade</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- começar ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Como começar" title="Do primeiro login ao clube todo no app" center />
          <div className="steps">
            <Reveal className="step"><h3>Crie o motoclube</h3><p>No painel, a diretoria cria o clube. Quem cria vira o Presidente, e o clube já nasce com cargos, estágios e categorias.</p></Reveal>
            <Reveal className="step" delay={80}><h3>Convide a galera</h3><p>Em Convites, gere um link. A pessoa abre, cria a conta e já entra no clube, na regional certa.</p></Reveal>
            <Reveal className="step" delay={160}><h3>Configure o clube</h3><p>Defina cargos, mensalidades, a chave PIX e a identidade do clube. Crie as primeiras reuniões e eventos.</p></Reveal>
            <Reveal className="step" delay={240}><h3>Todo mundo no app</h3><p>Cada integrante baixa o app, confirma presença, vê a carteirinha e acompanha a mensalidade.</p></Reveal>
          </div>
          <div className="note" style={{ marginTop: 32, maxWidth: 780, marginInline: "auto" }}>
            <Moon size={20} />
            <p>O Rasttro abre no tema <strong>escuro</strong>, com opção de tema <strong>claro</strong>, no painel e no app. A conta nova começa com um <strong>período de teste de 60 dias</strong>.</p>
          </div>
        </div>
      </section>

      {/* ---------- galeria ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Galeria" title="Cada tela do app e do painel" />
          <h3 style={{ fontSize: 24, marginBottom: 6 }}>No celular</h3>
          <PhoneStrip shots={APP} label="Telas do app do Rasttro" />
          <h3 style={{ fontSize: 24, margin: "32px 0 28px" }}>No computador</h3>
          <div className="grid-3">
            {WEB.map((s, i) => (<Reveal key={s.src} delay={(i % 3) * 70}><Browser {...s} group={WEB} index={i} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* ---------- perguntas ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Perguntas frequentes" title="O que mais perguntam sobre o Rasttro" center />
          <Faq items={[
            { q: "Como entro no app?", a: "Pelo convite que a diretoria mandou: o link abre uma página com o nome do clube e a regional, e você cria a conta. Se já tem conta, entre com o e-mail e a senha." },
            { q: "Quem cria o clube?", a: "A diretoria, pelo painel no computador. Quem cria vira o Presidente e depois convida os demais membros." },
            { q: "O app cobra a mensalidade?", a: "Não. O app mostra o que está pendente e a chave PIX do clube. O pagamento é feito fora do app e a diretoria registra na tesouraria." },
            { q: "Os meus dados ficam à vista de todo mundo?", a: "Não. Dados privados só aparecem para você e para quem tem, no clube, a permissão “Ver dados pessoais”. A ficha de emergência segue a mesma regra." },
            { q: "Tem limite de membros?", a: "Não. O plano tem todos os módulos e não limita a quantidade de membros." },
            { q: "Funciona em iPhone?", a: "O app está no Google Play (Android). No iPhone, o painel funciona pelo navegador." },
          ]} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Juntos na estrada. Sempre.</h2>
              <p>Quer organizar o seu motoclube no Rasttro? Chame a gente para conhecer o painel e começar o período de teste.</p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary" href={mailto("Quero organizar meu motoclube no Rasttro")}>Quero o Rasttro no meu clube</a>
              <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
              <StoreButton app="rasttro" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
