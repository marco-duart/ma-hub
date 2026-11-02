import { ArrowRight, CalendarClock, ClipboardList, FileSignature, Hand, MessageCircle, ShieldCheck, ShoppingBag, Users, Wallet } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Browser, Phone, PhoneStrip } from "@/components/Media";
import { Faq, InstagramIcon, SectionHead, StoreButton } from "@/components/Parts";
import type { Shot } from "@/components/Lightbox";
import { SITE, mailto, systemByKey } from "@/site";

const SYS = systemByKey("dita");
const m = (n: string) => `/img/dita/m-${n}.webp`;
const w = (n: string) => `/img/dita/w-${n}.webp`;

const PHONE_SHOTS: Shot[] = [
  { src: m("login"), alt: "Dita: tela de entrada do app", title: "Entrar", caption: "O mesmo login do painel no computador." },
  { src: m("inicio"), alt: "Dita: início com valores a receber e o que precisa de atenção", title: "Início", caption: "A receber, em atraso e a lista do que precisa de você hoje." },
  { src: m("escuro"), alt: "Dita: início no tema escuro", title: "Tema escuro", caption: "O app acompanha o tema do seu celular." },
  { src: m("conversas"), alt: "Dita: conversas esperando resposta", title: "Conversas", caption: "Esperando você, com o Dita ou todas." },
  { src: m("humano"), alt: "Dita: conversa transferida para o atendente, com o botão Devolver ao Dita", title: "Esperando você", caption: "Responda e devolva ao Dita quando terminar." },
  { src: m("bot"), alt: "Dita: conversa em que o Dita monta um pedido de marmita", title: "Com o Dita", caption: "O Dita pergunta cada escolha do produto." },
  { src: m("pedidos"), alt: "Dita: lista de pedidos por situação", title: "Pedidos", caption: "Aguardando, pagos, em atraso e cancelados." },
  { src: m("entrega"), alt: "Dita: confirmar a entrega e a taxa de um pedido", title: "Confirmar entrega", caption: "Você confirma endereço e taxa; o cliente recebe o valor final." },
  { src: m("parcelas"), alt: "Dita: parcelas de um pedido com vencimento e situação", title: "Parcelas", caption: "Cada parcela com vencimento, pagamento e comprovante." },
  { src: m("novo-pedido"), alt: "Dita: registrar um pedido para um cliente, passo a passo", title: "Novo pedido", caption: "Para vendas no balcão ou por telefone." },
  { src: m("produtos"), alt: "Dita: lista de produtos com preços e situação", title: "Produtos", caption: "O catálogo que o Dita usa para responder." },
  { src: m("precos"), alt: "Dita: atualizar os preços em sequência", title: "Atualizar preços", caption: "Todos os preços numa sequência só." },
  { src: m("revisar"), alt: "Dita: revisar um produto rascunho e publicar", title: "Revisar rascunhos", caption: "Ponha o preço, publique ou pule." },
  { src: m("importar"), alt: "Dita: importar lista de produtos colando o texto", title: "Importar lista", caption: "Cole a lista que você já tem." },
  { src: m("pergunta"), alt: "Dita: escolher o tipo de pergunta do produto", title: "Perguntas do produto", caption: "Escolha, medida, texto livre ou sim/não." },
  { src: m("clientes"), alt: "Dita: lista de clientes com situação em dia ou em atraso", title: "Clientes", caption: "Busque por nome ou telefone." },
  { src: m("cliente"), alt: "Dita: ficha de um cliente com abas", title: "Ficha do cliente", caption: "Resumo, pedidos, financeiro e conversas." },
  { src: m("empresa"), alt: "Dita: configurações da empresa", title: "Empresa", caption: "Entrega, pagamento, recursos, avisos e plano." },
  { src: m("vendas"), alt: "Dita: como a loja vende, com entrega e retirada", title: "Como você vende", caption: "O Dita pergunta só o que você configurou." },
  { src: m("recursos"), alt: "Dita: recursos automáticos que podem ser ligados ou desligados", title: "Recursos automáticos", caption: "Resposta automática, lembretes e cobrança." },
  { src: m("whatsapp"), alt: "Dita: código para conectar o WhatsApp da loja", title: "Conectar o WhatsApp", caption: "Funciona como o WhatsApp Web." },
  { src: m("contratos"), alt: "Dita: modelos de contrato", title: "Contratos", caption: "Textos prontos para pedidos sob encomenda." },
  { src: m("faq"), alt: "Dita: perguntas frequentes da loja", title: "Perguntas frequentes", caption: "O que o Dita responde sozinho." },
];

const WEB_SHOTS: (Shot & { url: string })[] = [
  { src: w("inicio"), url: "www.dita.app.br", alt: "Painel do Dita: início com conversas que precisam de você e números do caixa", title: "Início", caption: "O que merece sua atenção hoje." },
  { src: w("humano"), url: "www.dita.app.br/conversas", alt: "Painel do Dita: conversa transferida para o atendente", title: "Conversas", caption: "Assuma quando o cliente pedir uma pessoa." },
  { src: w("bot"), url: "www.dita.app.br/conversas", alt: "Painel do Dita: conversa em que o Dita responde sozinho", title: "Conversa com o Dita", caption: "Acompanhe o que ele diz, em tempo real." },
  { src: w("pedidos"), url: "www.dita.app.br/pedidos", alt: "Painel do Dita: pedidos e cobrança com indicadores", title: "Pedidos e cobrança", caption: "A receber, em atraso e recebido." },
  { src: w("parcelas"), url: "www.dita.app.br/pedidos", alt: "Painel do Dita: pedido com parcelas", title: "Parcelas", caption: "Vencimentos e comprovantes." },
  { src: w("produtos"), url: "www.dita.app.br/produtos", alt: "Painel do Dita: catálogo de produtos", title: "Produtos", caption: "Preços, estoque e rascunhos." },
  { src: w("perguntas"), url: "www.dita.app.br/produtos", alt: "Painel do Dita: perguntas que o Dita faz antes de fechar o pedido", title: "Perguntas do produto", caption: "Com a prévia do WhatsApp." },
  { src: w("importar"), url: "www.dita.app.br/produtos", alt: "Painel do Dita: importar lista de produtos", title: "Importar produtos", caption: "Cole a lista ou envie uma planilha." },
  { src: w("cliente"), url: "www.dita.app.br/clientes", alt: "Painel do Dita: ficha de um cliente inadimplente", title: "Ficha do cliente", caption: "Pedidos, financeiro e conversas." },
  { src: w("faq"), url: "www.dita.app.br/perguntas", alt: "Painel do Dita: perguntas frequentes", title: "Perguntas frequentes", caption: "Respostas que o Dita usa." },
  { src: w("recursos"), url: "www.dita.app.br/empresa", alt: "Painel do Dita: recursos automáticos da empresa", title: "Recursos automáticos", caption: "Você liga e desliga." },
  { src: w("comecar"), url: "www.dita.app.br/comecar", alt: "Painel do Dita: Comece aqui, escolha do ramo", title: "Comece aqui", caption: "Lista pronta pelo seu ramo." },
];

function Chat({ title, status, lines }: { title: string; status: string; lines: { who: "in" | "out"; text: string }[] }) {
  return (
    <div className="chat" role="img" aria-label={`Exemplo de conversa: ${title}`}>
      <div className="chat__head">
        <img src={SYS.icon} alt="" width={38} height={38} />
        <div><strong>{title}</strong><small>{status}</small></div>
      </div>
      <div className="chat__body" aria-hidden="true">
        {lines.map((l, i) => (
          <div key={i} className={`bubble bubble--${l.who}`} style={{ ["--d" as string]: `${0.4 + i * 0.7}s` }}>
            {l.who === "out" && <b>Dita</b>}
            {l.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Dita() {
  return (
    <main id="conteudo" data-theme="dita">
      <Seo route="/dita" />

      {/* ---------- herói ---------- */}
      <section className="hero hero--product">
        <div className="container hero__grid">
          <div>
            <div className="hero__badge"><img src={SYS.icon} alt="" width={44} height={44} /> Dita <span>Atenda</span></div>
            <h1>Seu atendimento no WhatsApp, <span className="grad-text">no piloto automático</span></h1>
            <p className="hero__sub">
              O Dita é o ERP conversacional que responde seus clientes com o seu catálogo, monta o pedido, acompanha a cobrança e chama você quando a conversa precisa de uma pessoa. Mais conversas. Mais negócios.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SYS.web.url} target="_blank" rel="noopener noreferrer">Abrir o painel <ArrowRight size={18} /></a>
              <StoreButton app="dita" />
            </div>
            <div className="chips hero__meta">
              <span className="chip">Painel no computador</span><span className="chip">App Android</span><span className="chip">Responde 24 horas</span>
            </div>
          </div>
          <div className="duo">
            <Browser src={w("inicio")} url="www.dita.app.br" alt="Painel do Dita: início com conversas que precisam de você e números do caixa" priority />
            <Phone src={m("conversas")} alt="App do Dita: conversas esperando resposta" priority />
          </div>
        </div>
      </section>

      {/* ---------- conversa ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Como o Dita atende" title={<>Responde sozinho. <span className="grad-text">E chama você</span> quando precisa.</>}>
            O Dita só fala o que você cadastrou: catálogo, perguntas de cada produto e perguntas frequentes. Ele não inventa preço nem regra.
          </SectionHead>
          <div className="grid-2" style={{ alignItems: "start", justifyItems: "center" }}>
            <Reveal>
              <Chat
                title="Cliente pedindo marmita" status="o Dita está montando o pedido"
                lines={[
                  { who: "in", text: "Quero uma marmita M" },
                  { who: "out", text: "Boa escolha! Marmita M é R$ 21,90. Qual mistura você prefere? Hoje tem frango grelhado, carne de panela, bife acebolado, linguiça, peixe frito e omelete." },
                  { who: "in", text: "Frango grelhado" },
                  { who: "out", text: "Anotado: frango grelhado. Quer escolher os 2 acompanhamentos? Tem farofa, salada, ovo frito, batata frita e vinagrete." },
                ]}
              />
            </Reveal>
            <Reveal delay={120}>
              <Chat
                title="Cliente com encomenda" status="esperando você"
                lines={[
                  { who: "in", text: "Boa tarde! Vocês fazem marmita para evento? Preciso de 40 para sábado" },
                  { who: "out", text: "Oi, Mariana! Encomendas para eventos a Rosa combina direto com você. Já chamei ela aqui, só um instante 😊" },
                  { who: "in", text: "Ok, aguardo" },
                ]}
              />
            </Reveal>
          </div>
          <p className="center" style={{ color: "var(--dim)", fontSize: 14, marginTop: 28 }}>Conversas de exemplo, com dados de demonstração.</p>
        </div>
      </section>

      {/* ---------- o que faz ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="O que o Dita faz" title="Do primeiro “oi” até o pagamento" />
          <div className="grid-3">
            {[
              { i: <MessageCircle size={24} />, t: "Atende no WhatsApp", d: "Responde dúvidas com o seu catálogo e as suas perguntas frequentes, a qualquer hora, pelo mesmo número da loja." },
              { i: <ShoppingBag size={24} />, t: "Monta o pedido", d: "Faz as perguntas de cada produto, mostra o resumo e fecha com entrega ou retirada e a forma de pagamento." },
              { i: <Wallet size={24} />, t: "Acompanha a cobrança", d: "Registra parcelas, lembra o cliente antes do vencimento e cobra o que atrasou, com juros se você quiser." },
              { i: <Hand size={24} />, t: "Chama você", d: "Quando o cliente pede uma pessoa ou o assunto é seu, a conversa aparece como “Esperando você”." },
              { i: <ClipboardList size={24} />, t: "Catálogo sem sofrimento", d: "Cole a lista que você já tem, revise os rascunhos e ponha os preços em sequência." },
              { i: <Users size={24} />, t: "Clientes e financeiro", d: "Ficha de cada cliente com pedidos, parcelas, conversas e contratos, e um caixa claro: a receber, em atraso e recebido." },
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

      {/* ---------- fluxos ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Na prática" title="Painel no computador, app no celular. A mesma conta." />

          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow">Conversas</span>
              <h3>Assuma quando quiser, devolva quando terminar</h3>
              <p>Cada conversa mostra em que pé está. Quando o cliente espera por você, é só tocar em Assumir.</p>
              <ul className="ticks">
                <li><strong>Esperando você, Com o Dita ou Todas:</strong> as abas separam o que é seu.</li>
                <li><strong>Assumir e Devolver ao Dita:</strong> ele para de responder enquanto você atende e volta quando você terminar.</li>
                <li><strong>Respostas rápidas</strong> com as frases que você mais usa.</li>
                <li>Conversa parada com você por 1 hora volta sozinha para o Dita.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("humano")} alt="Dita: conversa esperando o atendente, com o botão Devolver ao Dita" title="Esperando você" caption="Responda e devolva ao Dita." />
              <Phone src={m("bot")} alt="Dita: conversa em que o Dita monta um pedido" title="Com o Dita" caption="Ele pergunta, anota e confirma." />
            </div>
          </Reveal>

          <Reveal className="frow frow--rev">
            <div className="frow__text">
              <span className="eyebrow">Pedidos e cobrança</span>
              <h3>Cada pedido, cada parcela, sem caderninho</h3>
              <p>O pedido nasce na conversa e já entra na lista, com entrega, pagamento e parcelas.</p>
              <ul className="ticks">
                <li><strong>Confirmar entrega:</strong> você vê o endereço escrito pelo cliente, confirma e informa a taxa; ele recebe o valor final pelo WhatsApp.</li>
                <li><strong>Parcelas e fiado:</strong> cada parcela tem vencimento e situação, e aceita comprovante.</li>
                <li><strong>Lembrete de vencimento e cobrança de atraso</strong> automáticos, que você liga ou desliga.</li>
                <li><strong>Caixa:</strong> a receber, em atraso, recebido e a taxa de adimplência.</li>
              </ul>
            </div>
            <div className="frow__media frow__media--wide">
              <Browser src={w("parcelas")} url="www.dita.app.br/pedidos" alt="Painel do Dita: pedido com parcelas em atraso, pendentes e pagas" title="Parcelas" caption="Situação de cada parcela do pedido." />
            </div>
          </Reveal>

          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow">Catálogo</span>
              <h3>O catálogo pronto em minutos</h3>
              <p>O Dita é tão bom quanto o catálogo dele. Por isso, cadastrar é o que há de mais rápido no sistema.</p>
              <ul className="ticks">
                <li><strong>Importar lista:</strong> cole um produto por linha, com o preço no fim, ou envie uma planilha.</li>
                <li><strong>Revisar rascunhos:</strong> um cartão por produto; ponha o preço e publique, ou deslize para deixar para depois.</li>
                <li><strong>Atualizar preços</strong> numa sequência só.</li>
                <li><strong>Perguntas do produto:</strong> escolha, medida, texto livre ou sim/não, na ordem que o Dita deve perguntar.</li>
                <li><strong>Acabou hoje:</strong> o Dita para de oferecer até você liberar.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("importar")} alt="Dita: importar a lista de produtos" title="Importar lista" caption="Cole e confira antes de salvar." />
              <Phone src={m("revisar")} alt="Dita: revisar um produto rascunho" title="Revisar rascunhos" caption="Preço, publicar ou pular." />
            </div>
          </Reveal>

          <Reveal className="frow frow--rev">
            <div className="frow__text">
              <span className="eyebrow">Clientes</span>
              <h3>A ficha de cada cliente</h3>
              <p>Tudo o que você precisa saber antes de responder, em uma tela.</p>
              <ul className="ticks">
                <li>Abas de <strong>Resumo, Conversas, Pedidos, Contratos e Financeiro</strong>.</li>
                <li>Situação clara: <strong>em dia ou inadimplente</strong>, conforme as parcelas.</li>
                <li>Lembretes e cobranças pelo WhatsApp. Se o cliente pedir para parar, os avisos dele são desligados.</li>
                <li>Modelos de contrato para encomendas e pedidos sob medida.</li>
              </ul>
            </div>
            <div className="frow__media frow__media--wide">
              <Browser src={w("cliente")} url="www.dita.app.br/clientes" alt="Painel do Dita: ficha de um cliente inadimplente com abas" title="Ficha do cliente" caption="Resumo, pedidos, financeiro e conversas." />
            </div>
          </Reveal>

          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow">Controle</span>
              <h3>Quem manda é você</h3>
              <p>O Dita faz só o que você ligar, do jeito que você configurar.</p>
              <ul className="ticks">
                <li><strong>Resposta automática:</strong> desligada, todo cliente vai direto para você.</li>
                <li><strong>Como você vende:</strong> entrega, retirada, pedido mínimo e pagamentos (PIX, dinheiro com troco e cartão).</li>
                <li><strong>Números que o Dita não responde:</strong> família, amigos e fornecedores ficam de fora.</li>
                <li><strong>#dita pausa</strong> e <strong>#dita volta</strong>, direto no WhatsApp, para uma pessoa específica.</li>
                <li>Guarde as mensagens pelo tempo que quiser; pedidos e parcelas continuam.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("recursos")} alt="Dita: recursos automáticos" title="Recursos automáticos" caption="Ligue só o que quiser." />
              <Phone src={m("vendas")} alt="Dita: como a loja vende" title="Como você vende" caption="Entrega, retirada e pagamento." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- começar ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Como começar" title="Pronto para atender em quatro passos" center>
            Da primeira entrada ao primeiro cliente, o Dita guia a configuração. No app, fica em Mais → Comece aqui.
          </SectionHead>
          <div className="steps">
            <Reveal className="step"><h3>Escolha o ramo</h3><p>Digite o seu tipo de comércio e o Dita sugere a lista pronta mais parecida. Os produtos entram como rascunho, sem preço, para você revisar.</p></Reveal>
            <Reveal className="step" delay={80}><h3>Conecte o WhatsApp</h3><p>Funciona como o WhatsApp Web: escaneie o QR Code no computador, ou gere um código no celular. O seu celular continua normal.</p></Reveal>
            <Reveal className="step" delay={160}><h3>Teste como cliente</h3><p>No simulador você conversa como um cliente. Nada vai para o WhatsApp e não gasta o limite do plano.</p></Reveal>
            <Reveal className="step" delay={240}><h3>Libere para os clientes</h3><p>Com o catálogo e as respostas no ponto, é só deixar o Dita atender. Você acompanha tudo e assume quando quiser.</p></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- galeria ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Telas do app" title="Dá para ver tudo antes de começar">Toque em qualquer tela para ampliar e navegar pela galeria.</SectionHead>
          <PhoneStrip shots={PHONE_SHOTS} label="Telas do app do Dita" />
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 28, marginBottom: 28 }}>No computador</h3>
            <div className="grid-3">
              {WEB_SHOTS.map((s, i) => (
                <Reveal key={s.src} delay={(i % 3) * 70}><Browser {...s} group={WEB_SHOTS} index={i} /></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- confiança ---------- */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="frow__text">
              <span className="eyebrow">Confiança</span>
              <h2 style={{ fontSize: "clamp(30px,4vw,48px)" }}>Seus dados e os dos seus clientes, com cuidado</h2>
              <p style={{ color: "var(--muted)", fontSize: 18 }}>A empresa é a responsável pelos dados dos clientes dela, e o Dita foi feito para facilitar isso.</p>
            </div>
            <Reveal className="card">
              <ul className="ticks">
                <li>As mensagens dos clientes são interpretadas na infraestrutura do próprio Dita, <strong>sem enviar a provedores externos de IA</strong>.</li>
                <li>O Dita <strong>não responde grupos, status nem canais</strong>, nem os números que você listar.</li>
                <li><strong>Exporte e exclua</strong> os seus dados pelo app e pelo painel.</li>
                <li>O app guarda a sessão no armazenamento seguro do aparelho e pode pedir <strong>digital ou rosto</strong> para abrir.</li>
                <li>Sem anúncios e sem ferramentas de rastreamento no app.</li>
              </ul>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <a className="btn btn--ghost btn--sm" href={SYS.privacy} target="_blank" rel="noopener noreferrer"><ShieldCheck size={16} /> Política de privacidade</a>
                {SYS.terms && <a className="btn btn--ghost btn--sm" href={SYS.terms} target="_blank" rel="noopener noreferrer"><FileSignature size={16} /> Termos de uso</a>}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- perguntas ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Perguntas frequentes" title="O que mais perguntam sobre o Dita" center />
          <Faq items={[
            { q: "Preciso trocar de número ou de celular?", a: "Não. O Dita conecta como o WhatsApp Web: o celular da loja continua funcionando normalmente e o Dita passa a responder pelo mesmo número." },
            { q: "E se o cliente quiser falar com uma pessoa?", a: "A conversa passa para você e aparece como “Esperando você”, no app e no painel. Você responde, e quando terminar toca em Devolver ao Dita." },
            { q: "O Dita inventa preços ou promessas?", a: "Não. Tudo o que ele diz vem do catálogo, das perguntas de cada produto e das perguntas frequentes que a sua loja cadastrou. O que não está cadastrado, ele passa para você." },
            { q: "Funciona só no celular?", a: "Funciona nos dois: painel completo no computador e app no Android, com o mesmo login. O que você muda em um aparece no outro. Em qualquer outro aparelho, use o painel pelo navegador." },
            { q: "Como contrato?", a: <><p>A conta da empresa é criada pela nossa equipe: não há cadastro aberto. Fale com a gente e deixamos tudo pronto para você começar.</p><p>O plano define o limite mensal de mensagens de clientes, e você acompanha o uso no app.</p></> },
            { q: "Posso testar antes de liberar para os clientes?", a: "Pode. O simulador “Testar como cliente” conversa como um cliente de verdade, sem enviar nada ao WhatsApp e sem gastar o limite do plano." },
          ]} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Mais conversas. Mais negócios.</h2>
              <p>Quer ver o Dita atendendo a sua loja? Chame a gente e mostramos com o seu ramo.</p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary" href={mailto("Quero contratar o Dita")}><CalendarClock size={18} /> Quero contratar o Dita</a>
              <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
              <StoreButton app="dita" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
