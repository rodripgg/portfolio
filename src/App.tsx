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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <Container>
          <div className="site-header__inner">
            <a href="#home" className="site-logo" onClick={handleNavClick}>
              *logo*
            </a>

            <nav
              className="site-nav site-nav--desktop"
              aria-label="Navegación principal"
            >
              <a href="#about">Sobre mí</a>
              <a href="#experience">Experiencia</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Proyectos</a>
              <a href="#education">Formación</a>
              <a href="#contact">Contacto</a>
            </nav>

            <div className="site-header__controls">
              <ThemeToggle theme={theme} onChange={setTheme} />

              <button
                type="button"
                className={`mobile-menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div
              id="mobile-navigation"
              className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
            >
              <div className="mobile-menu__panel">
                <nav
                  className="site-nav site-nav--mobile"
                  aria-label="Navegación móvil"
                >
                  <a href="#about" onClick={handleNavClick}>
                    Sobre mí
                  </a>
                  <a href="#experience" onClick={handleNavClick}>
                    Experiencia
                  </a>
                  <a href="#skills" onClick={handleNavClick}>
                    Skills
                  </a>
                  <a href="#projects" onClick={handleNavClick}>
                    Proyectos
                  </a>
                  <a href="#education" onClick={handleNavClick}>
                    Formación
                  </a>
                  <a href="#contact" onClick={handleNavClick}>
                    Contacto
                  </a>
                </nav>
              </div>
            </div>
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
