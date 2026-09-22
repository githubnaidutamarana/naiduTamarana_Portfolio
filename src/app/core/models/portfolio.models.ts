import { IconName } from '../../shared/components/icon/icons';

export interface Profile {
  name: string;
  initials: string;
  role: string;
  headline: string;
  location: string;
  experience: string;
  company: string;
  email: string;
  phone?: string;
  /** Path under `public/`. The hero falls back to initials if the file is missing. */
  photo: string;
  about: string[];
  /** Optional links — rendered only when set. */
  linkedin?: string;
  github?: string;
  resumeUrl?: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: string[];
}

export interface Expertise {
  title: string;
  icon: IconName;
  description: string;
  points: string[];
}

export interface HighlightGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  groups: HighlightGroup[];
  modules: string[];
}

export interface HealthcareArea {
  title: string;
  icon: IconName;
  description: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  location: string;
}

export interface Certification {
  title: string;
  year: string;
}

export interface ProjectScreen {
  src: string;
  caption: string;
}

/** A standalone, interactive prototype that ships under `public/prototypes/`. */
export interface ProjectDemo {
  url: string;
  stack: string[];
  hint: string;
  flows: string[];
  screens: ProjectScreen[];
}

export interface FocusArea {
  title: string;
  icon: IconName;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string[];
  /** What I worked on — shown on cards and the case study. */
  highlights: string[];
  tags: string[];
  /** Large card on the home page. */
  featured?: boolean;
  focusAreas?: FocusArea[];
  demo?: ProjectDemo;
}
