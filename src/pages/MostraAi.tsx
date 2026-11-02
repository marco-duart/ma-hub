import { ArrowRight, CalendarCheck, ChefHat, MapPin, QrCode, ShieldCheck, Smartphone, Store, UtensilsCrossed } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Browser, Phone, PhoneStrip } from "@/components/Media";
import { Faq, InstagramIcon, SectionHead, StoreButton, Tabs } from "@/components/Parts";
import type { Shot } from "@/components/Lightbox";
import { SITE, mailto, systemByKey } from "@/site";

const SYS = systemByKey("mostra-ai");
const m = (n: string) => `/img/mostra-ai/m-${n}.webp`;
const w = (n: string) => `/img/mostra-ai/w-${n}.webp`;

const LOJISTA: Shot[] = [
  { src: m("boas-vindas"), alt: "MostraAi: tela de boas-vindas do app do lojista", title: "Criar minha loja", caption: "Cadastre os produtos, gere o QR Code e receba pedidos no WhatsApp." },
  { src: m("inicio"), alt: "MostraAi: início da loja com QR Code e link para compartilhar", title: "Início", caption: "O link e o QR Code da sua loja." },
  { src: m("qr"), alt: "MostraAi: QR Code da loja em tamanho grande", title: "QR Code", caption: "Para imprimir e colar no balcão." },
  { src: m("produtos"), alt: "MostraAi: lista de produtos do cardápio", title: "Seu cardápio", caption: "Pause e ative produtos com um toque." },
  { src: m("produto"), alt: "MostraAi: edição de um produto com foto", title: "Produto", caption: "Foto, nome, preço e descrição." },
  { src: m("categorias"), alt: "MostraAi: categorias do cardápio", title: "Categorias", caption: "Organize o cardápio do seu jeito." },
  { src: m("locais"), alt: "MostraAi: locais onde a loja vende", title: "Onde você vende", caption: "Loja fixa, feira de sábado, ponto de entrega." },
  { src: m("aparencia"), alt: "MostraAi: aparência da loja com logo, capa e tema", title: "Aparência", caption: "Logo, capa e cores da loja." },
  { src: m("equipe"), alt: "MostraAi: equipe de garçons e cozinha", title: "Sua equipe", caption: "Garçons e cozinha com acesso ao app Parceiro." },
  { src: m("mesas"), alt: "MostraAi: mesas com chamados de garçom em destaque", title: "Mesas", caption: "Chamando agora, no topo da lista." },
  { src: m("comandas"), alt: "MostraAi: comandas abertas das mesas", title: "Comandas", caption: "O consumo de cada mesa, em tempo real." },
  { src: m("comanda"), alt: "MostraAi: comanda de uma mesa com itens, serviço e total", title: "Comanda digital", caption: "Itens, taxa de serviço e total." },
  { src: m("servicos-inicio"), alt: "MostraAi: início de uma loja de serviços", title: "Loja de serviços", caption: "Para salões, estúdios e prestadores." },
  { src: m("servicos"), alt: "MostraAi: lista de serviços com preço", title: "Serviços", caption: "Cada serviço com duração e preço." },
  { src: m("agenda"), alt: "MostraAi: agenda com pedidos de horário pendentes", title: "Agenda", caption: "Confirme ou rejeite cada pedido." },
  { src: m("disponibilidade"), alt: "MostraAi: horários de agendamento por dia da semana", title: "Horários", caption: "Defina quando aceita agendamento." },
  { src: m("assinatura"), alt: "MostraAi: plano atual e o que o Premium inclui", title: "Assinatura", caption: "Free e Premium lado a lado." },
];

const CLIENTE: Shot[] = [
  { src: m("c-inicio"), alt: "MostraAi Cliente: lojas perto de você em um mapa", title: "Lojas perto de você", caption: "O mapa mostra os comércios da região." },
  { src: m("c-loja"), alt: "MostraAi Cliente: página de uma loja com locais e cardápio", title: "Página da loja", caption: "Locais, horários e cardápio completo." },
  { src: m("c-servicos"), alt: "MostraAi Cliente: página de uma loja de serviços", title: "Serviços", caption: "Escolha o que quer agendar." },
  { src: m("c-horarios"), alt: "MostraAi Cliente: escolher data e horário livre", title: "Data e horário", caption: "Só aparecem os horários livres." },
  { src: m("c-agendamentos"), alt: "MostraAi Cliente: meus agendamentos e a resposta da loja", title: "Meus agendamentos", caption: "Acompanhe a confirmação." },
  { src: m("c-favoritos"), alt: "MostraAi Cliente: lojas favoritas", title: "Favoritos", caption: "As lojas que você mais usa, à mão." },
];

const PARCEIRO: Shot[] = [
  { src: m("p-mesas"), alt: "MostraAi Parceiro: mesas atribuídas ao garçom", title: "Suas mesas", caption: "Só as que o lojista atribuiu a você." },
  { src: m("p-fila"), alt: "MostraAi Parceiro: fila de chamados dos clientes", title: "Fila de chamados", caption: "Chamar garçom ou pedir a conta." },
  { src: m("p-mesa"), alt: "MostraAi Parceiro: mesa aberta", title: "Mesa aberta", caption: "O garçom abre a mesa e o QR do cliente passa a funcionar." },
  { src: m("p-comanda"), alt: "MostraAi Parceiro: comanda da mesa", title: "Comanda", caption: "Os itens lançados no celular." },
  { src: m("p-item"), alt: "MostraAi Parceiro: adicionar um item à comanda", title: "Lançar item", caption: "Pedido direto no celular." },
  { src: m("p-fechar"), alt: "MostraAi Parceiro: fechar a conta da mesa", title: "Fechar a conta", caption: "Total com a taxa de serviço." },
];

const WEB: (Shot & { url: string })[] = [
  { src: w("painel"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: início da loja", title: "Painel da loja", caption: "Link, QR Code e atalhos." },
  { src: w("produtos"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: produtos do cardápio", title: "Produtos", caption: "Cardápio no computador." },
  { src: w("mesas"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: mesas e chamados", title: "Mesas e chamados", caption: "Bom para deixar aberto no caixa." },
  { src: w("agenda"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: agenda de serviços", title: "Agenda", caption: "Semana inteira à vista." },
  { src: w("servicos"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: serviços da loja", title: "Serviços", caption: "Duração e preço de cada um." },
  { src: w("loja"), url: "mostraai.app.br/producer", alt: "Painel web do MostraAi: dados da loja", title: "Dados da loja", caption: "Nome, WhatsApp e aparência." },
];

export function MostraAi() {
  return (
    <main id="conteudo" data-theme="mostra">
      <Seo route="/mostra-ai" />

      {/* ---------- herói ---------- */}
      <section className="hero hero--product">
        <div className="container hero__grid">
          <div>
            <div className="hero__badge"><img src={SYS.icon} alt="" width={44} height={44} /> MostraAi <span>Mostre</span></div>
            <h1>Seu comércio no <span className="grad-text">QR Code</span></h1>
            <p className="hero__sub">
              Cardápio, catálogo ou agenda de serviços no celular do cliente, com mesas, chamada de garçom e comanda digital. Cadastre seus produtos, gere um QR Code e comece a receber pedidos direto no WhatsApp.
            </p>
            <div className="btn-row">
              <StoreButton app="mostra-ai" label="o MostraAi" />
              <a className="btn btn--ghost" href={SYS.web.url} target="_blank" rel="noopener noreferrer">Abrir o MostraAi <ArrowRight size={18} /></a>
            </div>
            <div className="chips hero__meta">
              <span className="chip chip--accent">Comece de graça</span><span className="chip">Sem taxas</span><span className="chip">3 apps</span><span className="chip">Descubra. Conecte-se. Aproveite.</span>
            </div>
          </div>
          <div className="trio">
            <Phone src={m("c-inicio")} alt="MostraAi Cliente: lojas perto de você no mapa" priority />
            <Phone src={m("inicio")} alt="MostraAi: início da loja com QR Code" priority />
            <Phone src={m("w-cardapio")} alt="Cardápio da loja aberto no navegador do cliente" priority />
          </div>
        </div>
      </section>

      {/* ---------- três jeitos de vender ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Para o seu tipo de negócio" title="Um jeito de mostrar, do tamanho do seu comércio" />
          <div className="grid-3">
            <Reveal className="card feat">
              <span className="icon-bubble"><QrCode size={24} /></span>
              <h3>Cardápio e catálogo</h3>
              <p>Produtos com foto, preço e categoria. O cliente abre pelo QR Code no navegador, sem baixar nada, com as cores da sua loja, e faz o pedido pelo WhatsApp.</p>
            </Reveal>
            <Reveal className="card feat" delay={90}>
              <span className="icon-bubble"><UtensilsCrossed size={24} /></span>
              <h3>Mesas, garçom e comanda</h3>
              <p>Cada mesa tem o seu QR Code. O cliente chama o garçom ou pede a conta pelo celular, e a comanda digital soma tudo, com taxa de serviço.</p>
            </Reveal>
            <Reveal className="card feat" delay={180}>
              <span className="icon-bubble"><CalendarCheck size={24} /></span>
              <h3>Agenda de serviços</h3>
              <p>Salões, estúdios e prestadores definem serviços, duração e horários. O cliente agenda, e você confirma ou rejeita cada pedido.</p>
            </Reveal>
          </div>
          <div className="grid-2" style={{ marginTop: 22 }}>
            <Reveal className="card feat">
              <span className="icon-bubble"><MapPin size={24} /></span>
              <h3>Aparece no mapa</h3>
              <p>No app MostraAi Cliente, quem está por perto encontra a sua loja num mapa, vê o cardápio e salva nos favoritos.</p>
            </Reveal>
            <Reveal className="card feat" delay={90}>
              <span className="icon-bubble"><Store size={24} /></span>
              <h3>Vários lugares, uma loja</h3>
              <p>Cadastre a loja fixa, a feira de sábado e o ponto de entrega. Só um local fica ativo por vez, e o cliente sempre vê onde te achar agora.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- três apps ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Três apps, um sistema" title="Cada pessoa no seu app" center>
            O lojista cuida do negócio, o cliente descobre e agenda, o garçom atende as mesas. Todos conversam entre si.
          </SectionHead>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              label="Apps do MostraAi"
              tabs={[
                {
                  id: "lojista",
                  label: "Lojista",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">MostraAi</span>
                        <h3>Tudo da loja na palma da mão</h3>
                        <p>O app do dono: cria a loja uma pergunta por vez e organiza produtos, categorias, locais, equipe, mesas e agenda.</p>
                        <ul className="ticks">
                          <li><strong>Seu link e seu QR Code</strong> logo na tela inicial, prontos para compartilhar.</li>
                          <li><strong>Cardápio:</strong> produtos, categorias e foto, com pausa rápida.</li>
                          <li><strong>Aparência:</strong> logo, capa e tema (claro ou escuro) da loja.</li>
                          <li><strong>Equipe, mesas e comandas</strong> para quem atende no salão.</li>
                          <li><strong>Agenda:</strong> confirme ou rejeite pedidos de horário.</li>
                        </ul>
                        <div className="btn-row"><StoreButton app="mostra-ai" label="o MostraAi" /></div>
                      </div>
                      <div className="frow__media">
                        <Phone src={m("inicio")} alt="MostraAi: início da loja com QR Code" title="Início" caption="Link e QR Code da loja." />
                        <Phone src={m("produtos")} alt="MostraAi: cardápio" title="Cardápio" caption="Pause e ative com um toque." />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "cliente",
                  label: "Cliente",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">MostraAi Cliente</span>
                        <h3>Ache comércios perto de você</h3>
                        <p>Para o cliente final: mapa de lojas, cardápios, favoritos e agendamentos. Quem prefere não instalar nada ainda pode usar o QR Code da loja no navegador.</p>
                        <ul className="ticks">
                          <li><strong>Mapa de lojas</strong> da região, com o cardápio completo.</li>
                          <li><strong>Agende serviços:</strong> escolha serviço, dia e um dos horários livres.</li>
                          <li><strong>Meus agendamentos:</strong> veja a resposta da loja.</li>
                          <li><strong>Favoritos</strong> para voltar às lojas que mais usa.</li>
                        </ul>
                        <div className="btn-row"><StoreButton app="mostra-ai-cliente" label="o MostraAi Cliente" /></div>
                      </div>
                      <div className="frow__media">
                        <Phone src={m("c-inicio")} alt="MostraAi Cliente: lojas perto de você" title="Lojas perto" caption="O mapa da região." />
                        <Phone src={m("c-horarios")} alt="MostraAi Cliente: escolher horário" title="Agendar" caption="Horários livres." />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "parceiro",
                  label: "Garçom e cozinha",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">MostraAi Parceiro</span>
                        <h3>O salão na mão do garçom</h3>
                        <p>O garçom entra com a conta dele e vê só as mesas que o lojista atribuiu. Cliente sentou? Abre a mesa e o QR do cliente passa a funcionar.</p>
                        <ul className="ticks">
                          <li><strong>Fila de chamados:</strong> o cliente toca em “Chamar garçom” ou “Pedir a conta” e o aviso cai no celular.</li>
                          <li><strong>Comanda:</strong> lance os pedidos direto no celular.</li>
                          <li><strong>Fechar a conta</strong> mostrando o total, com a taxa de serviço.</li>
                        </ul>
                        <div className="btn-row"><StoreButton app="mostra-ai-parceiro" label="o MostraAi Parceiro" /></div>
                      </div>
                      <div className="frow__media">
                        <Phone src={m("p-fila")} alt="MostraAi Parceiro: fila de chamados" title="Fila de chamados" caption="Chamar garçom e pedir a conta." />
                        <Phone src={m("p-comanda")} alt="MostraAi Parceiro: comanda da mesa" title="Comanda" caption="Itens lançados no celular." />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- mesas ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow"><ChefHat size={15} /> Restaurantes e bares</span>
              <h3>Do “chama o garçom” à conta fechada</h3>
              <p>Cada mesa pertence a um local e tem os garçons que a atendem. Quando o cliente chama, a mesa sobe para o topo da lista.</p>
              <ul className="ticks">
                <li><strong>Chamando agora:</strong> as mesas com chamado aparecem em destaque no app e no painel.</li>
                <li><strong>Atendido:</strong> o garçom marca e o chamado sai da fila.</li>
                <li><strong>Comanda digital:</strong> quem lança é o garçom; você acompanha o consumo de cada mesa.</li>
                <li><strong>Taxa de serviço por garçom:</strong> definida por você, aplicada no total da conta.</li>
                <li>Recurso do plano <strong>Premium</strong>.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("mesas")} alt="MostraAi: mesas com chamados de garçom em destaque" title="Mesas" caption="Chamando agora, no topo." />
              <Phone src={m("comanda")} alt="MostraAi: comanda da mesa com taxa de serviço" title="Comanda" caption="Itens, serviço e total." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- cliente na prática ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="O que o cliente vê" title="Abre no navegador, sem baixar nada" center>
            O QR Code da loja leva ao cardápio, que se abre direto no celular, com as cores da sua loja e em tema escuro. Em restaurantes com mesa, o cliente lê o QR que fica na mesa.
          </SectionHead>
          <div className="frow__media" style={{ gap: 28 }}>
            <Phone src={m("w-cardapio")} alt="Cardápio da loja aberto no navegador" title="Cardápio" caption="Abre pelo QR Code." />
            <Phone src={m("w-mesa")} alt="Página da mesa com os botões de chamar o garçom e pedir a conta" title="Na mesa" caption="Chamar garçom e pedir a conta." />
            <Phone src={m("w-servicos")} alt="Lista de serviços da loja aberta no navegador" title="Serviços" caption="Para lojas de serviços." />
            <Phone src={m("w-agendar")} alt="Agendamento de serviço no navegador" title="Agendar" caption="Dia e horário livre." />
          </div>
        </div>
      </section>

      {/* ---------- planos ---------- */}
      <section className="section section--alt" id="planos">
        <div className="container">
          <SectionHead eyebrow="Planos" title="Comece de graça. Cresça com o Premium." center>
            O plano Free já tem cardápio, aparência e agenda de serviços. O Premium libera mesas, garçom e comanda, e aumenta os limites. O Premium é contratado no app do lojista.
          </SectionHead>
          <div className="plans">
            <Reveal className="plan">
              <h3>Free</h3>
              <div className="plan__num">
                <div><b>30</b><span>produtos</span></div>
                <div><b>15</b><span>categorias</span></div>
                <div><b>10</b><span>locais</span></div>
              </div>
              <ul className="ticks">
                <li>Catálogo, aparência e agenda de serviços</li>
                <li>QR Code e link da loja</li>
                <li>Cadastre mesas e equipe para conhecer o recurso</li>
              </ul>
            </Reveal>
            <Reveal className="plan plan--pro" delay={100}>
              <h3>Premium <span className="chip chip--accent">Mesas e garçom</span></h3>
              <div className="plan__num">
                <div><b>500</b><span>produtos</span></div>
                <div><b>100</b><span>categorias</span></div>
                <div><b>20</b><span>locais</span></div>
              </div>
              <ul className="ticks">
                <li><strong>Chama Garçom:</strong> o cliente chama pelo celular</li>
                <li><strong>Comanda Digital</strong> com taxa de serviço por garçom</li>
                <li>Tudo do plano Free</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- painel web ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow">Painel no computador</span>
              <h3>O mesmo login, uma tela maior</h3>
              <p>Em mostraai.app.br/producer você gerencia a loja no computador. É bom para deixar mesas e chamados abertos no caixa e para ver a agenda da semana inteira.</p>
              <ul className="ticks">
                <li>Produtos, categorias, locais e equipe.</li>
                <li>Mesas e chamados em tempo real.</li>
                <li>Agenda de serviços com a semana à vista.</li>
              </ul>
              <div className="btn-row"><a className="btn btn--ghost" href={`${SYS.web.url}/producer`} target="_blank" rel="noopener noreferrer">Abrir o painel <ArrowRight size={18} /></a></div>
            </div>
            <div className="frow__media frow__media--wide">
              <Browser src={w("mesas")} url="mostraai.app.br/producer" alt="Painel web do MostraAi: mesas e chamados" title="Mesas e chamados" caption="No computador, ao lado do caixa." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- galeria ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Galeria" title="Todas as telas, dos três apps" />
          <h3 style={{ fontSize: 24, marginBottom: 6 }}><Smartphone size={20} style={{ display: "inline", verticalAlign: "-3px", marginRight: 8 }} />Lojista</h3>
          <PhoneStrip shots={LOJISTA} label="Telas do app do lojista" />
          <h3 style={{ fontSize: 24, margin: "28px 0 6px" }}>Cliente</h3>
          <PhoneStrip shots={CLIENTE} label="Telas do app do cliente" />
          <h3 style={{ fontSize: 24, margin: "28px 0 6px" }}>Garçom e cozinha</h3>
          <PhoneStrip shots={PARCEIRO} label="Telas do app do parceiro" />
          <h3 style={{ fontSize: 24, margin: "28px 0 28px" }}>No computador</h3>
          <div className="grid-3">
            {WEB.map((s, i) => (<Reveal key={s.src} delay={(i % 3) * 70}><Browser {...s} group={WEB} index={i} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* ---------- perguntas ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Perguntas frequentes" title="O que mais perguntam sobre o MostraAi" center />
          <Faq items={[
            { q: "O cliente precisa baixar um app?", a: "Não. O QR Code da loja abre o cardápio direto no navegador do celular. O app MostraAi Cliente é opcional e traz o mapa de lojas, os favoritos e os agendamentos." },
            { q: "Quanto custa?", a: "Dá para começar de graça, com o plano Free: sem taxas e sem complicação. O plano Premium libera mesas, chamada de garçom e comanda digital, e aumenta os limites de produtos, categorias e locais." },
            { q: "Como o pedido chega até mim?", a: "O cliente monta o pedido no cardápio e envia direto para o WhatsApp da loja." },
            { q: "Posso ter vários endereços ou vender em feiras?", a: "Pode. Cadastre cada local (loja fixa, feira de sábado, ponto de entrega) e deixe ativo o que vale hoje." },
            { q: "Serve para salão, estúdio ou prestador de serviço?", a: "Serve. Cadastre os serviços com duração e preço, defina seus horários e receba pedidos de agendamento para confirmar ou rejeitar." },
            { q: "Preciso de CNPJ?", a: "A conta usa o CPF ou o CNPJ do titular. Cada documento tem uma conta." },
          ]} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Descubra. Conecte-se. Aproveite.</h2>
              <p>Crie a sua loja agora no app, ou fale com a gente para tirar dúvidas e conhecer o Premium.</p>
              <p style={{ marginTop: 12, fontSize: 15 }}>
                <ShieldCheck size={16} style={{ display: "inline", verticalAlign: "-3px", marginRight: 6 }} />
                <a href={SYS.privacy} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Política de privacidade</a> ·{" "}
                <a href={SYS.terms} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Termos de uso</a>
              </p>
            </div>
            <div className="cta-band__actions">
              <StoreButton app="mostra-ai" label="o MostraAi" />
              <a className="btn btn--ghost" href={mailto("Dúvidas sobre o MostraAi")}>Falar com a gente</a>
              <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
