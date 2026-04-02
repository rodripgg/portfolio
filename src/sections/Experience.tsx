import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <SectionTitle eyebrow="Experiencia" title="Experiencia profesional" />

        <div className="timeline">
          {portfolioData.experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="timeline-card"
            >
              <div className="timeline-card__header">
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-card__company">{item.company}</p>
                </div>
                <span className="timeline-card__period">{item.period}</span>
              </div>

              <p>{item.description}</p>

              {item.stack?.length ? (
                <div className="project-card__stack">
                  {item.stack.map((stackItem) => (
                    <span
                      key={`${item.company}-${stackItem}`}
                      className="tag tag--small"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
