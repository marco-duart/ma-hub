import { ArrowRight, BarChart3, Brain, FileUp, Kanban, ShieldCheck, UserRoundSearch, Users } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import { Browser, Phone, PhoneStrip } from "@/components/Media";
import { Faq, InstagramIcon, SectionHead, StoreButton, Tabs } from "@/components/Parts";
import type { Shot } from "@/components/Lightbox";
import { SITE, mailto, systemByKey } from "@/site";

const SYS = systemByKey("profyla");
const m = (n: string) => `/img/profyla/m-${n}.webp`;
const w = (n: string) => `/img/profyla/w-${n}.webp`;

const APP: Shot[] = [
  { src: m("boas-vindas"), alt: "Profyla: tela de boas-vindas do app", title: "Boas-vindas", caption: "Seu próximo emprego começa aqui." },
  { src: m("onboarding"), alt: "Profyla: escolha entre importar o currículo em PDF ou responder perguntas", title: "Montar o perfil", caption: "Importe o PDF ou responda perguntas." },
  { src: m("importar"), alt: "Profyla: importar do currículo em PDF", title: "Importar currículo", caption: "Lido no servidor do Profyla, sem terceiros." },
  { src: m("revisao"), alt: "Profyla: revisar uma experiência encontrada no currículo", title: "Revise item por item", caption: "Nada é salvo antes de você confirmar." },
  { src: m("resumo"), alt: "Profyla: resumo do que vai entrar no currículo", title: "Resumo", caption: "O que será importado." },
  { src: m("pronto"), alt: "Profyla: perfil pronto com a aderência às vagas", title: "Perfil pronto", caption: "Quanto mais completo, melhor a aderência." },
  { src: m("vagas"), alt: "Profyla: vagas abertas, uma de cada vez", title: "Vagas", caption: "Quero esta vaga ou agora não." },
  { src: m("detalhe"), alt: "Profyla: detalhes de uma vaga", title: "Detalhe da vaga", caption: "Jornada, requisitos e faixa salarial." },
  { src: m("candidaturas"), alt: "Profyla: candidaturas e o que falta fazer", title: "Candidaturas", caption: "O que falta no topo." },
  { src: m("aprovada"), alt: "Profyla: candidatura aprovada com o retorno do recrutador", title: "Andamento", caption: "Etapas e retorno do recrutador." },
  { src: m("entrevista"), alt: "Profyla: convite de entrevista com opções de confirmar ou remarcar", title: "Entrevista", caption: "Confirme, remarque ou adicione ao calendário." },
  { src: m("prova"), alt: "Profyla: prova de uma etapa, uma pergunta por tela", title: "Prova", caption: "Uma pergunta por tela." },
  { src: m("testes"), alt: "Profyla: testes DISC e Eneagrama", title: "Testes de perfil", caption: "DISC e Eneagrama." },
  { src: m("disc"), alt: "Profyla: resultado do teste DISC", title: "Resultado do DISC", caption: "Tendências de comportamento." },
  { src: m("eneagrama"), alt: "Profyla: pergunta do teste Eneagrama", title: "Eneagrama", caption: "54 afirmações." },
  { src: m("notificacoes"), alt: "Profyla: notificações sobre candidaturas", title: "Notificações", caption: "O sino avisa quando algo muda." },
  { src: m("perfil"), alt: "Profyla: perfil com experiências, formação e habilidades", title: "Perfil", caption: "O que as empresas veem do seu currículo." },
  { src: m("privacidade"), alt: "Profyla: privacidade e e-mails, com exportar e excluir a conta", title: "Privacidade", caption: "Direitos da LGPD no app." },
];

const WEB: (Shot & { url: string })[] = [
  { src: w("painel"), url: "profyla.app.br/staff", alt: "Profyla: painel da equipe com funil de candidatos e entrevistas", title: "Painel da equipe", caption: "Funil, entrevistas e alertas." },
  { src: w("candidatos"), url: "profyla.app.br/staff", alt: "Profyla: candidatos com tags e habilidades", title: "Candidatos", caption: "Busque e filtre por tag." },
  { src: w("candidato"), url: "profyla.app.br/staff", alt: "Profyla: perfil de um candidato com tags e notas internas", title: "Perfil do candidato", caption: "Tags e notas só da equipe." },
  { src: w("comparar"), url: "profyla.app.br/staff", alt: "Profyla: comparação lado a lado de três candidatos", title: "Comparar", caption: "Lado a lado, sem eliminar por teste." },
  { src: w("processos"), url: "profyla.app.br/staff", alt: "Profyla: processos seletivos cadastrados", title: "Processos", caption: "Status, formulário e prova." },
  { src: w("entrevistas"), url: "profyla.app.br/staff", alt: "Profyla: entrevistas agendadas", title: "Entrevistas", caption: "Lista e agenda." },
  { src: w("metricas"), url: "profyla.app.br/staff", alt: "Profyla: métricas de conversão e contratação", title: "Métricas", caption: "Funil de conversão e taxa de contratação." },
  { src: w("c-inicio"), url: "profyla.app.br/candidate", alt: "Profyla: painel do candidato no site", title: "Painel do candidato", caption: "Currículo, ações pendentes e candidaturas." },
  { src: w("c-vagas"), url: "profyla.app.br/candidate", alt: "Profyla: oportunidades abertas no site", title: "Oportunidades", caption: "Busque e candidate-se." },
  { src: w("c-testes"), url: "profyla.app.br/candidate", alt: "Profyla: avaliações comportamentais no site", title: "Avaliações", caption: "DISC e Eneagrama." },
];

const STAGES = ["Triagem", "Entrevista individual/em grupo", "Teste técnico", "Checagem de referências", "Entrevista com o gestor"];

export function Profyla() {
  return (
    <main id="conteudo" data-theme="profyla">
      <Seo route="/profyla" />

      {/* ---------- herói ---------- */}
      <section className="hero hero--product">
        <div className="container hero__grid">
          <div>
            <div className="hero__badge"><img src={SYS.icon} alt="" width={44} height={44} /> Profyla <span>Contrate</span></div>
            <h1>Conectando talentos a <span className="grad-text">oportunidades</span></h1>
            <p className="hero__sub">
              Recrutamento e seleção com perfis completos: currículo, testes DISC e Eneagrama e todas as etapas do processo em um só lugar. Site para recrutadores e candidatos, app para o candidato.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SYS.web.url} target="_blank" rel="noopener noreferrer">Abrir o Profyla <ArrowRight size={18} /></a>
              <StoreButton app="profyla" />
            </div>
            <div className="chips hero__meta">
              <span className="chip">Para recrutadores</span><span className="chip">Para candidatos</span><span className="chip chip--accent">DISC e Eneagrama</span>
            </div>
          </div>
          <div className="duo">
            <Browser src={w("painel")} url="profyla.app.br/staff" alt="Profyla: painel da equipe com funil de candidatos e entrevistas" priority />
            <Phone src={m("vagas")} alt="App do Profyla: vagas abertas" priority />
          </div>
        </div>
      </section>

      {/* ---------- dois lados ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Dois lados" title="Quem contrata e quem procura emprego, no mesmo sistema" center>
            A empresa conduz o processo no site. O candidato monta o perfil e acompanha tudo, no site ou no app.
          </SectionHead>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              label="Candidato ou recrutador"
              tabs={[
                {
                  id: "recrutador",
                  label: "Sou recrutador",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">Site para a equipe</span>
                        <h3>O processo seletivo inteiro, sem planilha</h3>
                        <p>Vagas, processos, candidatos e entrevistas conectados, com o funil sempre à vista.</p>
                        <ul className="ticks">
                          <li><strong>Painel da equipe:</strong> vagas, processos, entrevistas dos próximos 7 dias e alertas de qualidade.</li>
                          <li><strong>Kanban do processo:</strong> arraste candidatos entre as etapas, com prévia de onde o card cairia e confirmação antes de mover.</li>
                          <li><strong>Candidatos:</strong> currículo, habilidades, perfis comportamentais, tags internas e notas.</li>
                          <li><strong>Comparar candidatos</strong> lado a lado.</li>
                          <li><strong>Métricas:</strong> funil de conversão, tempo até contratar e taxa de contratação.</li>
                        </ul>
                      </div>
                      <div className="frow__media frow__media--wide">
                        <Browser src={w("comparar")} url="profyla.app.br/staff" alt="Profyla: comparação lado a lado de três candidatos" title="Comparar candidatos" caption="Currículo, habilidades, perfis e etapa lado a lado." />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "candidato",
                  label: "Sou candidato",
                  content: (
                    <div className="frow">
                      <div className="frow__text">
                        <span className="eyebrow">App e site</span>
                        <h3>Do perfil à contratação, uma coisa por tela</h3>
                        <p>Monte o perfil em minutos, encontre vagas e acompanhe cada candidatura.</p>
                        <ul className="ticks">
                          <li><strong>Perfil em minutos:</strong> importe o currículo em PDF ou responda a poucas perguntas.</li>
                          <li><strong>Vagas:</strong> veja uma de cada vez e escolha “Quero esta vaga” ou “Agora não”.</li>
                          <li><strong>Candidaturas:</strong> o que falta fazer no topo e o andamento de cada uma.</li>
                          <li><strong>Entrevistas:</strong> confirme, remarque ou adicione ao calendário.</li>
                          <li><strong>Provas e formulários</strong> de algumas etapas, com uma pergunta por tela.</li>
                        </ul>
                        <div className="btn-row"><StoreButton app="profyla" /></div>
                      </div>
                      <div className="frow__media">
                        <Phone src={m("vagas")} alt="Profyla: vagas abertas" title="Vagas" caption="Quero esta vaga ou agora não." />
                        <Phone src={m("candidaturas")} alt="Profyla: candidaturas" title="Candidaturas" caption="O que falta fazer." />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- módulos ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="O que o Profyla faz" title="Menos burocracia, mais gente certa na vaga" />
          <div className="grid-3">
            {[
              { i: <FileUp size={24} />, t: "Currículo importado", d: "O candidato envia o PDF, o Profyla lê experiências, formação e habilidades e ele confirma item por item." },
              { i: <Kanban size={24} />, t: "Kanban do processo", d: "Cada vaga tem seu processo com etapas, do primeiro contato à contratação, e o quadro mostra quem está onde." },
              { i: <Brain size={24} />, t: "DISC e Eneagrama", d: "Instrumentos de autoconhecimento que ajudam a equipe a conhecer melhor o candidato." },
              { i: <UserRoundSearch size={24} />, t: "Entrevistas e avaliação", d: "Agende entrevistas, avalie com critérios por processo e acompanhe o retorno ao candidato." },
              { i: <BarChart3 size={24} />, t: "Métricas", d: "Veja o funil de conversão, o tempo em cada etapa e a taxa de contratação por vaga." },
              { i: <Users size={24} />, t: "Empresas e vagas", d: "Cadastre empresas e vagas, com página pública de vagas abertas para divulgar o link." },
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

      {/* ---------- importar currículo ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="frow">
            <div className="frow__text">
              <span className="eyebrow"><FileUp size={15} /> Perfil em minutos</span>
              <h3>Envie o PDF e revise item por item</h3>
              <p>Em vez de digitar tudo de novo, o candidato importa o currículo e o app mostra cada experiência, formação e link encontrados.</p>
              <ul className="ticks">
                <li><strong>Arraste para adicionar</strong> ou para pular, ou edite o que precisar.</li>
                <li><strong>Nada é salvo antes de você confirmar</strong>, e o resumo final mostra o que vai entrar.</li>
                <li>O arquivo é <strong>lido no servidor do Profyla, sem enviar a terceiros</strong>. Aceita PDF com texto, até 5 MB.</li>
                <li>Prefere digitar? Responda a perguntas curtas, uma por tela.</li>
              </ul>
            </div>
            <div className="frow__media">
              <Phone src={m("importar")} alt="Profyla: importar do currículo" title="Importar" caption="Envie o PDF." />
              <Phone src={m("revisao")} alt="Profyla: revisar uma experiência" title="Revisar" caption="Item por item." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- pipeline ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Processo seletivo" title="Cada vaga com as suas etapas" center>
            Ao criar um processo, o Profyla já monta as etapas. Você acrescenta formulário de triagem e prova técnica, e acompanha cada candidato no kanban.
          </SectionHead>
          <ul className="pipeline" style={{ justifyContent: "center" }} aria-label="Etapas do processo seletivo">
            {STAGES.map((s) => (<li key={s}>{s}</li>))}
            <li className="is-good">Aprovado</li>
            <li className="is-good">Contratado</li>
            <li className="is-bad">Reprovado</li>
          </ul>
          <p className="center" style={{ color: "var(--muted)", marginTop: 20 }}>Também existem as saídas “Sem interesse” e “Desistiu”. Ao mover um candidato de etapa, o site pede confirmação.</p>
          <div style={{ marginTop: 48 }}>
            <Browser src={w("processos")} url="profyla.app.br/staff" alt="Profyla: processos seletivos cadastrados com ações" title="Processos seletivos" caption="Status, formulário de triagem e prova técnica por processo." />
          </div>
        </div>
      </section>

      {/* ---------- DISC e Eneagrama ---------- */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="frow frow--rev">
            <div className="frow__text">
              <span className="eyebrow"><Brain size={15} /> Testes de perfil</span>
              <h3>Conhecer melhor, sem rotular</h3>
              <p>O Profyla tem dois instrumentos de autoconhecimento, inspirados em DISC e Eneagrama. O candidato faz quando quiser e vê o resultado na hora.</p>
              <ul className="ticks">
                <li><strong>DISC comportamental:</strong> 50 afirmações sobre como a pessoa costuma agir e decidir no dia a dia.</li>
                <li><strong>Eneagrama:</strong> 54 afirmações, cerca de 12 minutos.</li>
                <li>O resultado descreve <strong>tendências de comportamento</strong>.</li>
              </ul>
              <div className="note"><ShieldCheck size={20} /><p><strong>Não são testes psicológicos validados, nem diagnóstico.</strong> Não medem competência, não eliminam ninguém e não são critério único: as decisões do processo são tomadas por pessoas.</p></div>
            </div>
            <div className="frow__media">
              <Phone src={m("testes")} alt="Profyla: testes DISC e Eneagrama" title="Testes" caption="Faça quando quiser." />
              <Phone src={m("disc")} alt="Profyla: resultado do DISC" title="Resultado do DISC" caption="Aparece ao enviar as respostas." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- candidatos no site ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Candidatos" title="Perfis completos, fáceis de comparar" />
          <div className="grid-2">
            <Reveal><Browser src={w("candidatos")} url="profyla.app.br/staff" alt="Profyla: lista de candidatos com tags e habilidades" title="Candidatos" caption="Busque por nome ou e-mail e filtre por tag." /></Reveal>
            <Reveal delay={100}><Browser src={w("metricas")} url="profyla.app.br/staff" alt="Profyla: métricas de conversão e contratação" title="Métricas" caption="Funil de conversão, candidaturas e contratações." /></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- privacidade ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="frow__text">
              <span className="eyebrow"><ShieldCheck size={15} /> Privacidade e LGPD</span>
              <h2 style={{ fontSize: "clamp(30px,4vw,48px)" }}>O candidato no controle dos próprios dados</h2>
              <p style={{ color: "var(--muted)", fontSize: 18 }}>Currículo é dado pessoal, e o Profyla trata como tal.</p>
            </div>
            <Reveal className="card">
              <ul className="ticks">
                <li><strong>Exporte uma cópia dos seus dados</strong> e <strong>exclua a conta</strong> no app e no site.</li>
                <li>Você escolhe <strong>quais e-mails recebe</strong>: vagas novas, aniversário e resumo semanal.</li>
                <li>O aceite dos termos e da política tem <strong>data e versão</strong>, e quando um documento muda o app pede novo aceite.</li>
                <li>O app <strong>não tem anúncios</strong>, não usa ferramentas de análise de terceiros e não envia notificações push.</li>
                <li>A localização só é usada se você tocar em “Usar minha localização”, e o Profyla recebe apenas o nome da cidade.</li>
              </ul>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <a className="btn btn--ghost btn--sm" href={SYS.privacy} target="_blank" rel="noopener noreferrer"><ShieldCheck size={16} /> Política de privacidade</a>
                {SYS.terms && <a className="btn btn--ghost btn--sm" href={SYS.terms} target="_blank" rel="noopener noreferrer">Termos de uso</a>}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- galeria ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Galeria" title="O app do candidato e o site da equipe" />
          <h3 style={{ fontSize: 24, marginBottom: 6 }}>No celular</h3>
          <PhoneStrip shots={APP} label="Telas do app do Profyla" />
          <h3 style={{ fontSize: 24, margin: "32px 0 28px" }}>No computador</h3>
          <div className="grid-3">
            {WEB.map((s, i) => (<Reveal key={s.src} delay={(i % 3) * 70}><Browser {...s} group={WEB} index={i} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* ---------- perguntas ---------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Perguntas frequentes" title="O que mais perguntam sobre o Profyla" center />
          <Faq items={[
            { q: "O candidato precisa pagar?", a: "O candidato cria a conta, monta o perfil e se candidata às vagas sem custo." },
            { q: "Como uma empresa começa a usar?", a: "As contas da equipe de recrutamento são criadas pela nossa equipe, com a empresa e as vagas cadastradas. Fale com a gente e combinamos o início." },
            { q: "O app é só para candidatos?", a: "Sim. O app Android é do candidato. A equipe de recrutamento usa o site, que funciona no navegador do computador." },
            { q: "Os testes DISC e Eneagrama decidem quem passa?", a: "Não. Eles descrevem tendências de comportamento, não são testes psicológicos validados, não são diagnóstico e não eliminam ninguém. As decisões do processo são tomadas por pessoas." },
            { q: "O que acontece com o currículo que eu importo?", a: "O arquivo é lido no servidor do Profyla, sem enviar a terceiros, e nada é salvo antes de você revisar e confirmar. Você pode excluir a conta e os dados quando quiser." },
            { q: "Existe uma página pública de vagas?", a: "Sim. As vagas abertas aparecem em profyla.app.br/vagas, sem precisar entrar. Para se candidatar, é preciso entrar ou criar uma conta gratuita." },
          ]} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2>Conectando talentos a oportunidades.</h2>
              <p>Procurando vaga? Baixe o app. Quer contratar com o Profyla? Chame a gente.</p>
            </div>
            <div className="cta-band__actions">
              <StoreButton app="profyla" />
              <a className="btn btn--primary" href={mailto("Quero contratar com o Profyla")}>Quero contratar com o Profyla</a>
              <a className="btn btn--ghost" href={SITE.instagram.url} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {SITE.instagram.handle}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
