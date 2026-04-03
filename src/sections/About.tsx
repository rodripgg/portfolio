import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionTitle
          eyebrow="Sobre mí"
          title="Perfil profesional"
        />

        <div className="content-card">
          {portfolioData.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
