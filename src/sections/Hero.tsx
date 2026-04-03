import { Container } from "../components/Container";
import { portfolioData } from "../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">Portafolio profesional</p>

          <h1>
            {portfolioData.name}
            <span>{portfolioData.role}</span>
          </h1>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Ver proyectos
            </a>
            <a
              className="button button--secondary"
              href={portfolioData.cvUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver CV
            </a>
          </div>

          <div className="hero__meta">
            <span>{portfolioData.location}</span>
            <span>
              <a href={`mailto:${portfolioData.email}`}>
                {portfolioData.email}
              </a>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
