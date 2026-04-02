import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <SectionTitle eyebrow="Habilidades" title="Tecnologías y fortalezas" />

        <div className="skills-layout">
          <div className="content-card">
            <h3>Habilidades técnicas</h3>
            <div className="skills-grid">
              {portfolioData.technicalSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="content-card">
            <h3>Habilidades blandas</h3>
            <div className="skills-grid">
              {portfolioData.softSkills.map((skill) => (
                <span key={skill} className="tag tag--soft">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
