import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioData } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <SectionTitle
          eyebrow="Proyectos"
          title="Algunos trabajos y desarrollos destacados"
        />

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__stack">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="tag tag--small"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {(project.repoUrl || project.liveUrl) && (
                <div className="project-card__actions">
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Repositorio
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
