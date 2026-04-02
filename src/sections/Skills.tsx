import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías con las que trabajo"
        />

        <div className="skills-grid">
          {portfolioData.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
