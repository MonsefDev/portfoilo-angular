export type ExperienceLevel = 'junior' | 'lead' | 'senior' | 'expert';
export type SkillLevel = 'expert' | 'advanced' | 'solid';
export type CertStatus = 'obtained' | 'in-progress';

export interface CareerStep {
  year: string;
  title: string;
  company: string;
  levelKey: ExperienceLevel;
  logo: string;
}

export interface ExperienceProject {
  name: string;
  client: string;
  type: string;          // From-scratch · Migration · TMA …
  description: string;
  missions: string[];
  results: string[];
  stack: string[];
}

export interface Experience {
  id: string;
  company: string;
  esn?: string;
  logo: string;
  role: string;
  start: string;
  end: string | null;
  domain: string;
  level: ExperienceLevel;
  location?: string;
  projects: ExperienceProject[];
}

export interface SkillGroup {
  id: SkillLevel;
  skills: string[];
}

export interface TechSkill {
  n: string;
  s?: boolean; // surligné (cœur de métier)
}

export interface TechDomain {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  skills: TechSkill[];
}

export interface Project {
  id: string;
  name: string;
  company: string;
  year: string;
  description: string;
  context: string;
  responsibilities: string[];
  results: string[];
  metrics: string[];
  stack: string[];
  type: string;
  featured: boolean;
  liveUrl?: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: CertStatus;
}

export interface PortfolioContent {
  careerSteps: CareerStep[];
  experiences: Experience[];
  skillGroups: SkillGroup[];
  techDomains: TechDomain[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
}
