import CardList from "./components/CardList";
import Header from "./components/Header";
import "./styles/App.css";
import CardProps from "./types/CardProps";

const experiences: CardProps[] = [
  {
    duration: "2022 — 2023",
    position: "Desenvolvedor Backend - Anjun Express",
    description:
      "Desenvolvi e mantive APIs RESTful escaláveis em arquitetura de microsserviços usando NestJS e Express, integrando bancos de dados com Prisma. As APIs manipulavam máquinas de automação e forneciam dados para aplicações frontend.",
    tagList: [
      "NodeJS",
      "TypeScript",
      "NestJS",
      "Express",
      "MySQL",
      "Redis",
      "Linux",
      "Docker",
    ],
    companySite: "https://anjunexpress.com.br",
  },
  {
    duration: "2024 — 2025",
    position: "Desenvolvedor de Software - HCX Tech",
    description:
      "Criava e atualizava sessões das páginas de consultas financeiras da empresa, desde a interface gráfica e seus componentes até a configuração de formulários, requisições http e manipulação dos dados de resposta. Implementei e mantive aplicações em servidores EC2 na plataforma da AWS, utilizando Docker e containers para maximizar a confiabilidade entre os ambientes de desenvolvimento e produção.",
    tagList: [
      "PHP",
      "Apache",
      "HTML & CSS",
      "Bootstrap",
      "NodeJS",
      "Express",
      "Linux",
      "Docker",
      "AWS EC2",
    ],
    companySite: "https://hcxtech.com.br",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <section id="about-me">
            <p>
              Transformo ideias em realidade, utilizando ferramentas modernas e
              robustas. Como desenvolvedor de software, meu foco está no
              ecossistema JavaScript, trabalhando com tecnologias como{" "}
              <span className="highlight">TypeScript, NestJS e React</span>,
              além de ter experiência com Express, Next.js e React Native.
              Embora meu foco principal seja o desenvolvimento em JavaScript,
              também possuo conhecimento em PHP e estou expandindo minhas
              habilidades no Laravel.
              <br></br>
              <br></br>
              Ao longo da minha trajetória profissional, trabalhei na{" "}
              <span className="highlight">Anjun Express</span>, uma empresa de
              logística e importação, onde desenvolvi soluções para
              automatização de processos de checagem e estoque de pacotes
              utilizando TypeScript e NestJS. Também atuei como{" "}
              <span className="highlight">freelancer</span>, desenvolvendo
              landing pages e sistemas de estoque/controle financeiro para
              empresas menores, combinando Next.js e NestJS. Além disso, em meu
              último emprego, trabalhei na{" "}
              <span className="highlight">HCX Tech</span>, uma empresa de
              consulta financeira, onde utilizei PHP para criar novas
              funcionalidades, integrando o sistema legado a soluções do
              ecossistema JavaScript, além de atualizar páginas, componentes e
              integrações com APIs externas.
              <br></br>
              <br></br>
              Fora do código, gosto de passar um tempo com{" "}
              <span className="highlight">amigos e família</span>, e também
              jogar games como Undertale, Zelda, Pokémon e alguns party games.
            </p>
          </section>
          <section id="experience">
            <CardList experiences={experiences} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
