import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  href: string;
  icon: LucideIcon;
  reverse: boolean;
}

export interface CountryCard {
  name: string;
  code: string;
  flag: string;
  processingTime: string;
  approvalGuidance: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  gradient: string;
}
