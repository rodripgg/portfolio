import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Education() {
  return (
    <section id="education" className="section">
      <Container>
        <SectionTitle
          eyebrow="Formación"
          title="Educación, prácticas e idiomas"
        />

        <div className="info-grid">
          <div className="content-card">
            <h3>Educación</h3>
            <div className="stack-list">
              {portfolioData.education.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="stack-list__item"
                >
                  <strong>{item.degree}</strong>
                  <span>{item.institution}</span>
                  <small>{item.period}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card">
            <h3>Prácticas</h3>
            <div className="stack-list">
              {portfolioData.internships.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="stack-list__item"
                >
                  <strong>{item.institution}</strong>
                  <small>{item.period}</small>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card">
            <h3>Idiomas</h3>
            <div className="stack-list">
              {portfolioData.languages.map((item) => (
                <div key={item.name} className="stack-list__item">
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
