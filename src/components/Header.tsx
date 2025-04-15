import { useEffect, useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        threshold: 0.8, // 60% do elemento visível para contar como "ativo"
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="pageHeader">
      <section className="titleSection">
        <h1>Caio Ferreira</h1>
        <h2>Desenvolvedor de Software</h2>
        <p>
          Transformo ideias em realidade, utilizando ferramentas modernas e
          robustas.
        </p>
        <nav>
          <ul className="pagesSections">
            <a
              href="#about-me"
              className={
                activeSection === "about-me"
                  ? "highlightedSection"
                  : "defaultItem"
              }
            >
              <li>Sobre</li>
            </a>
            <a
              href="#experience"
              className={
                activeSection === "experience"
                  ? "highlightedSection"
                  : "defaultItem"
              }
            >
              <li>Experiências</li>
            </a>
          </ul>
        </nav>
      </section>
      <section className="socialSection">
        <a
          href="https://github.com/caio-ferreira-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/github_icon_94a3b8_64px.png"
            alt="linkedin icon"
            width={24}
            height={24}
            className="hoverIcon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/caio-ferreira-2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin_icon_94a3b8_64px.png"
            alt="linkedin icon"
            width={24}
            height={24}
            className="hoverIcon"
          />
        </a>
      </section>
    </header>
  );
}
