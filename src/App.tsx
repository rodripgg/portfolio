import { useEffect, useState } from "react";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Container } from "./components/Container";
import { Reveal } from "./components/Reveal";
import { ThemeToggle } from "./components/ThemeToggle";

type ThemeMode = "matrix" | "sunset";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "matrix";

  const saved = window.localStorage.getItem("portfolio-theme");
  return saved === "sunset" ? "sunset" : "matrix";
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

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

            <ThemeToggle theme={theme} onChange={setTheme} />
          </div>
        </Container>
      </header>

      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={80}>
          <About />
        </Reveal>

        <Reveal delay={120}>
          <Experience />
        </Reveal>

        <Reveal delay={160}>
          <Skills />
        </Reveal>

        <Reveal delay={200}>
          <Projects />
        </Reveal>

        <Reveal delay={240}>
          <Education />
        </Reveal>

        <Reveal delay={280}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
