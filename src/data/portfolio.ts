import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Rodrigo Parra Godoy",
  role: "Ingeniero civil en informática",
  location: "Los Ángeles, Chile",
  email: "rodrigoparra08@gmail.com",
  linkedin: "https://linkedin.com/in/rodrigo-parra",
  github: "https://github.com/rodripgg",
  instagram: "https://www.instagram.com/rodripg08/",
  cvUrl: "/cv.pdf",

  about: [
    "Soy egresado de Ingeniería Civil en Informática y tengo interés en seguir ampliando mis conocimientos y capacidades técnicas.",
    "He trabajado en desarrollo web full stack, especialmente en aplicaciones orientadas a gestión, visualización de información y construcción de interfaces mantenibles.",
    "También tengo experiencia complementaria en servidores, desarrollo de videojuegos con Unity y Godot, y proyectos técnicos con foco práctico.",
  ],

  technicalSkills: [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "C#",
    "C",
    "SQL",
    "React",
    "Angular",
    "Laravel",
    "Git",
    "MySQL / SQL",
    "MongoDB",
    "Linux",
    "Windows Server",
    "Unity",
    "Godot",
    "Blender",
    "Inkscape",
    "Microsoft Office",
    "Armado y reparación de computadores",
  ],

  softSkills: [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Capacidad de adaptación",
    "Orientación al detalle",
    "Autodidacta",
  ],

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/rodripgg",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rodrigo-parra",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/rodripg08/",
    },
  ],

  experience: [
    {
      role: "Desarrollador Full Stack",
      company: "Dirección Comunal de Salud de Los Ángeles",
      period: "Junio 2025 – Actualidad",
      description:
        "Desarrollo full stack de una plataforma web para la gestión y visualización de información georreferenciada, utilizando Angular y Laravel. Implementación de funcionalidades relacionadas con mapas, edición y manejo de elementos geográficos, levantamiento de requerimientos, diseño, documentación e implementación.",
      stack: ["Angular", "Laravel", "TypeScript", "PHP", "PM", "MySQL"],
    },
  ],

  projects: [
    {
      title: "Plataforma de Gestión de Carga Terrestre",
      description:
        "Proyecto de título orientado a facilitar la logística de empresas y personas naturales mediante una plataforma web desarrollada en React.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Plataforma de Permisos de Construcción",
      description:
        "Proyecto universitario en el que participé en el desarrollo de una plataforma web con el stack MERN.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Emprendimiento de impresión 3D",
      description:
        "Fundé y gestioné un emprendimiento orientado a piezas personalizadas y prototipos, encargándome del modelado 3D, operación y mantención de impresoras, atención a clientes, presupuestos y ventas.",
      stack: ["Modelado 3D", "Impresión 3D", "Gestión", "Blender"],
    },
    {
      title: "Portafolio profesional",
      description:
        "Sitio web personal para presentar experiencia, habilidades y proyectos, desplegado en Cloudflare.",
      stack: ["React", "Vite", "TypeScript", "Cloudflare"],
      repoUrl: "https://github.com/rodripgg/portfolio",
    },
  ],

  education: [
    {
      institution: "Universidad del Bío-Bío, Chile",
      degree: "Ingeniería Civil en Informática",
      period: "Marzo 2019 - Diciembre 2024",
    },
    {
      institution: "Liceo Bicentenario, Los Ángeles, Chile",
      degree: "Educación Secundaria",
      period: "Marzo 2015 - Diciembre 2018",
    },
  ],

  internships: [
    {
      institution: "Universidad del Bío-Bío",
      period: "Julio 2022 - Diciembre 2022",
      description:
        "Creé un curso de Unity básico para estudiantes de informática como parte de una plataforma educativa destinada a alumnos practicantes.",
    },
    {
      institution: "Neuron Tech",
      period: "Agosto 2024 - Octubre 2024",
      description:
        "Desarrollé frontend en React para la empresa Neuron Tech de Concepción, con enfoque en la experiencia de usuario.",
    },
  ],

  languages: [
    {
      name: "Español",
      level: "Nativo",
    },
    {
      name: "Inglés",
      level: "Intermedio",
    },
  ],
};
