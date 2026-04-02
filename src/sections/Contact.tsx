import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <SectionTitle
          eyebrow="Contacto"
          title="Información de contacto"
          subtitle="Puedes escribirme por correo o revisar mis perfiles."
        />

        <div className="content-card">
          <p>
            Correo:{" "}
            <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
          </p>

          <div className="social-links">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
