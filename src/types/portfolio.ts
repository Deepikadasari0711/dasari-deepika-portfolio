import type { IconType } from "react-icons";

export type LinkItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  problem: string;
  role: string;
  impact: string;
  tech: string[];
  links: LinkItem[];
  images: string[];
};

export type Strength = {
  title: string;
  description: string;
  icon: IconType;
};
