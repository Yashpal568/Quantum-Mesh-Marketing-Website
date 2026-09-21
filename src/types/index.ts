export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  code: string;
  category: 'Healthcare' | 'Education' | 'Enterprise' | 'Hospitality' | 'Restaurant' | 'Security';
  description: string;
  longDescription: string;
  iconName: string;
  badge: string;
  theme: {
    bg: string;
    border: string;
    accent: string;
    tagBg: string;
    textAccent: string;
    gradient: string;
  };
  features: string[];
  metrics: { label: string; value: string }[];
  benefits: string[];
  workflow: { step: string; title: string; desc: string }[];
  techStack: string[];
  mockupType: string;
  image?: string;
  modules?: {
    title: string;
    desc: string;
    highlights: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  timeline: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
  highlights: string[];
  previewType?: string;
  image?: string;
  metrics?: { label: string; value: string };
  technologies: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  capabilities: string[];
  technologies: string[];
  image?: string;
  badge?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
  solutions: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  logoText: string;
  subtitle?: string;
  highlight?: boolean;
}

export type ModalType = 'demo' | 'inquiry' | 'quote' | null;

export interface ModalContextType {
  modalType: ModalType;
  selectedProduct?: string;
  openModal: (type: ModalType, productName?: string) => void;
  closeModal: () => void;
}
