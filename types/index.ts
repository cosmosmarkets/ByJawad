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

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
