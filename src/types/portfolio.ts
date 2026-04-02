export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  stack?: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface InternshipItem {
  institution: string;
  period: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  cvUrl: string;
  summary: string;
  about: string[];
  technicalSkills: string[];
  softSkills: string[];
  socialLinks: SocialLink[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  internships: InternshipItem[];
  languages: LanguageItem[];
}
