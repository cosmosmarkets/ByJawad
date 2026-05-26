export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  publishedAt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  coverImage?: string;
}

import type { BudgetRange, ProjectType, Timeline } from "./database";

export interface ContactFormData {
  name: string;
  email: string;
  project_type: ProjectType;
  budget_range: BudgetRange;
  timeline: Timeline;
  message: string;
}
