import { Container } from "../components/Container";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p>
          © {new Date().getFullYear()} {portfolioData.name}. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
