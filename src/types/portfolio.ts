export interface SocialLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  summary: string;
  about: string[];
  skills: string[];
  socialLinks: SocialLink[];
  projects: Project[];
  email: string;
  cvUrl: string;
}
