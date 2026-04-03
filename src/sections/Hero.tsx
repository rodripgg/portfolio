import { Container } from '../components/Container';
import { portfolioData } from '../data/portfolio';

export function Hero() {
  const featuredSkills = portfolioData.technicalSkills.slice(0, 4);

  return (
    <section id="home" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__glow hero__glow--one" />
        <span className="hero__glow hero__glow--two" />
        <span className="hero__grid-lines" />
      </div>

      <Container>
        <div className="hero__grid">
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
              <span className="hero-pill">{portfolioData.location}</span>
              <span className="hero-pill">
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </span>
            </div>
          </div>

          <aside className="hero__panel">
            <div className="hero-panel__section">
              <span className="hero-panel__label">Enfoque actual</span>
              <strong>{portfolioData.role}</strong>
              <p>Desarrollo de aplicaciones web, interfaces modernas y software mantenible.</p>
            </div>

            <div className="hero-panel__section">
              <span className="hero-panel__label">Tecnologías base</span>
              <div className="hero-panel__tags">
                {featuredSkills.map((skill) => (
                  <span key={skill} className="tag tag--small">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-panel__section">
              <span className="hero-panel__label">Perfiles</span>
              <div className="hero-socials">
                {portfolioData.socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}