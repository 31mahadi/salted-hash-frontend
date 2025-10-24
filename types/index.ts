export interface Service {
  id: string;
  category: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  services: {
    name: string;
    description: string;
  }[];
  benefits: string[];
  image: string;
  icon: string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  story: string;
  expertise: string[];
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  team: TeamMember[];
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

