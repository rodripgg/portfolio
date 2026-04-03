import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Container>
          <div className="site-header__inner">
            <a href="#home" className="site-logo">
              *logo*
            </a>

            <nav className="site-nav" aria-label="Navegación principal">
              <a href="#about">Sobre mí</a>
              <a href="#experience">Experiencia</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Proyectos</a>
              <a href="#education">Formación</a>
              <a href="#contact">Contacto</a>
            </nav>
          </div>
        </Container>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
