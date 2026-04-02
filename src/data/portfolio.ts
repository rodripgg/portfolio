import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Rodrigo Parra",
  role: "Desarrollador Web Full Stack",
  location: "Chile",
  summary:
    "Ingeniero en informática enfocado en desarrollo web, construcción de interfaces modernas y backend con APIs mantenibles.",
  about: [
    "Soy desarrollador full stack con foco en aplicaciones web mantenibles, tipadas y orientadas a resolver problemas reales.",
    "He trabajado principalmente con Angular, Laravel, TypeScript, PHP, MariaDB, Docker y Linux.",
    "Me interesa construir software claro, útil y técnicamente sólido, cuidando tanto la experiencia de usuario como la estructura interna del proyecto.",
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Angular",
    "React",
    "Laravel",
    "PHP",
    "MariaDB / MySQL",
    "REST APIs",
    "Docker",
    "Git / GitHub",
    "Linux",
    "NGINX",
    "Leaflet",
    "HTML",
    "CSS",
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/rodripgg",
    },
    // Agrega aquí LinkedIn u otras redes cuando las tengas
  ],
  projects: [
    {
      title: "Sistema de Gestión de Salud",
      description:
        "Aplicación web para gestión de información territorial y sanitaria, con mapas interactivos, formularios complejos y backend REST.",
      stack: [
        "Angular",
        "Laravel",
        "TypeScript",
        "PHP",
        "MariaDB",
        "Leaflet",
        "Docker",
      ],
    },
    {
      title: "Portafolio profesional",
      description:
        "Sitio web personal orientado a presentar experiencia, habilidades y proyectos, desplegado sobre Cloudflare.",
      stack: ["React", "Vite", "TypeScript", "Cloudflare"],
      repoUrl: "https://github.com/rodripgg/portfolio",
    },
  ],
  email: "tu-correo@ejemplo.com",
  cvUrl: "/cv.pdf",
};
