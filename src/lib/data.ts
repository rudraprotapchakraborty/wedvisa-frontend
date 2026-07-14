import {
  Bot,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  FileText,
  FolderOpen,
  LineChart,
  MessageSquare,
  Sparkles,
  Target,
} from "lucide-react";
import type {
  BlogPost,
  CountryCard,
  FaqItem,
  FeatureItem,
  FooterColumn,
  HowItWorksStep,
  MegaMenuItem,
  NavLink,
  PricingPlan,
  Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Countries", href: "/#countries", hasDropdown: true },
  { label: "Resources", href: "/#resources", hasDropdown: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export const megaMenuItems: MegaMenuItem[] = [
  {
    title: "Visa Eligibility",
    description: "Instant AI screening for partner and marriage visas",
    href: "/#eligibility",
    icon: Target,
  },
  {
    title: "Relationship Timeline",
    description: "Build a clear narrative of your relationship journey",
    href: "/#timeline",
    icon: CalendarRange,
  },
  {
    title: "Document Generator",
    description: "Create polished forms and cover letters in minutes",
    href: "/#documents",
    icon: FileText,
  },
  {
    title: "Evidence Organizer",
    description: "Structure photos, chats, and records with confidence",
    href: "/#evidence",
    icon: FolderOpen,
  },
  {
    title: "Interview Preparation",
    description: "Practice embassy questions with tailored feedback",
    href: "/#interview",
    icon: MessageSquare,
  },
  {
    title: "AI Assistant",
    description: "24/7 guidance for every step of your application",
    href: "/#ai-assistant",
    icon: Bot,
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Share Your Story",
    description:
      "Answer a few guided questions about your relationship, destination, and goals. Our AI maps the right visa path for you.",
    icon: Sparkles,
  },
  {
    step: 2,
    title: "Build Your Case",
    description:
      "Generate documents, organize evidence, and follow a personalized checklist designed for your country and visa type.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Apply With Confidence",
    description:
      "Review readiness scores, prepare for interviews, and submit knowing every detail has been carefully checked.",
    icon: CheckCircle2,
  },
];

export const features: FeatureItem[] = [
  {
    id: "eligibility",
    title: "Eligibility Check",
    description:
      "Understand your chances before you invest time and money. WedVisa analyzes relationship criteria, financial thresholds, and country-specific rules to give you clear, actionable guidance.",
    benefits: [
      "Country-specific scoring models",
      "Risk flags explained in plain language",
      "Recommended next steps in minutes",
    ],
    cta: "Check eligibility",
    href: "#eligibility",
    icon: Target,
    reverse: false,
  },
  {
    id: "timeline",
    title: "Timeline Builder",
    description:
      "Craft a compelling relationship timeline that embassies understand. Chronologically organize milestones, trips, and shared life events with beautiful visual narratives.",
    benefits: [
      "Drag-and-drop milestone editor",
      "Export-ready PDF timelines",
      "Gap detection and suggestions",
    ],
    cta: "Build timeline",
    href: "#timeline",
    icon: CalendarRange,
    reverse: true,
  },
  {
    id: "documents",
    title: "Document Generator",
    description:
      "Produce cover letters, statements, and supporting forms tailored to your destination. Every template is refined for clarity, tone, and compliance.",
    benefits: [
      "Embassy-aware templates",
      "Auto-filled personal details",
      "One-click multi-format export",
    ],
    cta: "Generate documents",
    href: "#documents",
    icon: FileText,
    reverse: false,
  },
  {
    id: "checklist",
    title: "Embassy Checklist",
    description:
      "Never miss a required form or supporting document. Dynamic checklists adapt to your visa category, nationality, and processing location.",
    benefits: [
      "Live progress tracking",
      "Deadline reminders",
      "Document status badges",
    ],
    cta: "View checklist",
    href: "#checklist",
    icon: ClipboardList,
    reverse: true,
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description:
      "Your private wedding visa co-pilot. Ask questions anytime, get plain-language answers, and receive proactive tips based on your application status.",
    benefits: [
      "Context-aware guidance",
      "Multilingual support",
      "Private and secure by design",
    ],
    cta: "Meet the assistant",
    href: "#ai-assistant",
    icon: Bot,
    reverse: false,
  },
  {
    id: "progress",
    title: "Progress Tracker",
    description:
      "See exactly where you stand. Visual dashboards show completion rates, upcoming tasks, and confidence scores so you always know what to do next.",
    benefits: [
      "Readiness score dashboard",
      "Shared couple workspace",
      "Milestone celebrations",
    ],
    cta: "Track progress",
    href: "#progress",
    icon: LineChart,
    reverse: true,
  },
];

export const countries: CountryCard[] = [
  {
    name: "United States",
    code: "USA",
    flag: "🇺🇸",
    processingTime: "8–14 months",
    approvalGuidance: "95% guidance rate",
    href: "#countries",
  },
  {
    name: "Canada",
    code: "CAN",
    flag: "🇨🇦",
    processingTime: "6–12 months",
    approvalGuidance: "94% guidance rate",
    href: "#countries",
  },
  {
    name: "Australia",
    code: "AUS",
    flag: "🇦🇺",
    processingTime: "9–18 months",
    approvalGuidance: "93% guidance rate",
    href: "#countries",
  },
  {
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    processingTime: "3–6 months",
    approvalGuidance: "96% guidance rate",
    href: "#countries",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    processingTime: "2–5 months",
    approvalGuidance: "92% guidance rate",
    href: "#countries",
  },
  {
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    processingTime: "2–4 months",
    approvalGuidance: "91% guidance rate",
    href: "#countries",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amelia & Noah",
    country: "USA · Partner Visa",
    avatar: "AN",
    review:
      "WedVisa turned a stressful K-1 process into a clear plan. The timeline builder and evidence organizer alone saved us weeks of confusion.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya & James",
    country: "UK · Spouse Visa",
    avatar: "PJ",
    review:
      "The AI assistant answered questions at 2am when we were panicked about missing documents. We felt guided the entire way.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sofia & Lucas",
    country: "Canada · Family Class",
    avatar: "SL",
    review:
      "Beautiful product, serious substance. Our cover letter and checklist were embassy-ready without hiring an expensive consultant.",
    rating: 5,
  },
  {
    id: "4",
    name: "Hana & Oliver",
    country: "Australia · Partner Visa",
    avatar: "HO",
    review:
      "The progress tracker kept us calm. Every task had a purpose, and we always knew our readiness score before submitting.",
    rating: 5,
  },
  {
    id: "5",
    name: "Elena & Marco",
    country: "Germany · Family Reunion",
    avatar: "EM",
    review:
      "Premium experience end to end. Clear, modern, and genuinely helpful for bilingual couples navigating paperwork.",
    rating: 5,
  },
  {
    id: "6",
    name: "Aisha & Daniel",
    country: "France · Long-Stay Visa",
    avatar: "AD",
    review:
      "We recommended WedVisa to three couples already. The document generator feels like having a specialist on demand.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Essential tools to understand your path and get organized.",
    features: [
      "Eligibility assessment",
      "Basic checklist",
      "1 country profile",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Full workspace for couples building a complete application.",
    features: [
      "Everything in Starter",
      "Timeline & document generator",
      "Evidence organizer",
      "AI assistant (unlimited)",
      "Interview prep module",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$149",
    period: "/month",
    description: "White-glove guidance for complex or multi-country cases.",
    features: [
      "Everything in Pro",
      "Multi-country support",
      "Expert review credits",
      "Shared couple workspace+",
      "Custom export packs",
      "Dedicated success channel",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Is WedVisa a law firm or immigration attorney?",
    answer:
      "No. WedVisa is an AI-powered preparation platform that helps couples organize evidence, generate documents, and understand requirements. For legal advice specific to your case, consult a licensed immigration professional.",
  },
  {
    id: "2",
    question: "Which countries and visa types do you support?",
    answer:
      "We currently support partner, spouse, fiancé(e), and family-reunion pathways for the USA, Canada, Australia, UK, Germany, and France—with more destinations added regularly.",
  },
  {
    id: "3",
    question: "How does the AI eligibility guidance work?",
    answer:
      "Our models combine public embassy criteria, relationship indicators, and structured questionnaire data to highlight strengths, risks, and recommended evidence. Guidance is informational and continuously updated—not a guarantee of approval.",
  },
  {
    id: "4",
    question: "Is my personal data secure and private?",
    answer:
      "Yes. We use encryption in transit and at rest, strict access controls, and privacy-first defaults. You control what you upload, and you can export or delete your data at any time.",
  },
  {
    id: "5",
    question: "Can both partners collaborate on one application?",
    answer:
      "Absolutely. Pro and Premium plans include a shared couple workspace so both partners can update timelines, upload evidence, and track progress together.",
  },
  {
    id: "6",
    question: "Can I cancel or change plans anytime?",
    answer:
      "Yes. Upgrade, downgrade, or cancel from your billing settings at any time. Your data remains accessible through the end of your billing period.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Eligibility Check", href: "/#eligibility" },
      { label: "Timeline Builder", href: "/#timeline" },
      { label: "Document Generator", href: "/#documents" },
      { label: "AI Assistant", href: "/#ai-assistant" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/blog" },
      { label: "Country Library", href: "/#countries" },
      { label: "FAQ", href: "/#faq" },
      { label: "Help Center", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/#cta" },
      { label: "Press", href: "/blog" },
      { label: "Contact", href: "/#cta" },
      { label: "Partners", href: "/#cta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/#legal" },
      { label: "Terms of Service", href: "/#legal" },
      { label: "Cookie Policy", href: "/#legal" },
      { label: "Security", href: "/#legal" },
      { label: "Disclaimer", href: "/#legal" },
    ],
  },
];

export const blogCategories = [
  "All",
  "Guides",
  "Country Tips",
  "Product",
  "Stories",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "partner-visa-checklist-2026",
    title: "The Complete Partner Visa Checklist for 2026",
    excerpt:
      "A clear, embassy-aware checklist covering evidence, timelines, financial proof, and the documents couples forget most often.",
    content: [
      "Starting a partner or marriage visa application can feel overwhelming. Between country-specific forms, relationship evidence, and financial thresholds, it is easy to miss something important.",
      "This checklist is designed as a practical starting point. Always verify requirements with the official embassy or immigration authority for your destination country, and treat this as guidance rather than legal advice.",
      "1. Confirm your visa category. Partner, spouse, fiancé(e), and family-reunion routes have different evidence standards. Choose the path that matches your relationship status and travel plans.",
      "2. Build a relationship timeline. Chronological milestones, joint travel, and shared life events help officers understand your story quickly.",
      "3. Organize core identity documents. Passports, birth certificates, civil status records, and certified translations should be ready early.",
      "4. Prepare financial and accommodation evidence where required. Bank statements, employment letters, and housing proof often sit on the critical path.",
      "5. Review interview readiness. Many couples underestimate how useful mock questions and consistent narratives can be.",
      "WedVisa helps you turn this checklist into a living workspace—with progress tracking, document generation, and AI guidance tailored to your destination.",
    ],
    category: "Guides",
    author: "Maya Chen",
    authorRole: "Immigration Content Lead",
    publishedAt: "2026-06-28",
    readTime: "8 min read",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
  },
  {
    slug: "uk-spouse-visa-evidence-guide",
    title: "UK Spouse Visa: Evidence That Strengthens Your Case",
    excerpt:
      "How to present genuine relationship evidence for the UK route—without drowning the caseworker in clutter.",
    content: [
      "The UK spouse visa route places strong emphasis on genuine relationship and financial requirements. Quality of evidence often matters more than volume.",
      "Focus on a coherent narrative: when you met, how the relationship developed, and how you maintain contact when apart.",
      "Useful evidence categories include communication history, visits, joint finances, shared responsibilities, and statements from friends or family where appropriate.",
      "Avoid uploading hundreds of unstructured screenshots. Curate, label, and explain. A short cover note for each bundle can make a real difference.",
      "WedVisa’s evidence organizer is built for exactly this—grouping, dating, and summarizing materials so your application reads clearly.",
    ],
    category: "Country Tips",
    author: "James Okonkwo",
    authorRole: "Country Specialist",
    publishedAt: "2026-06-18",
    readTime: "6 min read",
    featured: true,
    gradient: "from-indigo-600 via-violet-600 to-purple-600",
  },
  {
    slug: "how-ai-helps-wedding-visa-prep",
    title: "How AI Actually Helps With Wedding Visa Prep",
    excerpt:
      "Beyond buzzwords: practical ways AI reduces stress for couples preparing partner and marriage visa applications.",
    content: [
      "AI is not a replacement for official rules or licensed legal advice. Used well, it is a powerful preparation assistant.",
      "Eligibility screening can surface missing criteria early—before you invest months in the wrong pathway.",
      "Document drafting tools help couples produce clearer cover letters and statements while keeping tone professional and personal.",
      "Interview practice modules let you rehearse answers, tighten consistency, and reduce day-of anxiety.",
      "The best AI products keep humans in control: you review every output, export what you need, and decide what to submit.",
      "That is the WedVisa philosophy—calm, private, couple-first tooling with intelligence that supports your judgment.",
    ],
    category: "Product",
    author: "Sofia Alvarez",
    authorRole: "Product",
    publishedAt: "2026-06-10",
    readTime: "5 min read",
    gradient: "from-fuchsia-600 via-purple-600 to-violet-600",
  },
  {
    slug: "canada-spousal-sponsorship-timeline",
    title: "Canada Spousal Sponsorship: A Realistic Timeline",
    excerpt:
      "What couples should expect month by month—and how to stay productive while you wait.",
    content: [
      "Canadian spousal sponsorship timelines vary by office, completeness of the file, and individual circumstances.",
      "Early months are often about assembling forms, proofs of relationship, and police certificates. Delays usually come from incomplete packages or slow third-party documents.",
      "While waiting, keep your contact details current, monitor requests for additional information, and maintain organized digital copies of everything you submitted.",
      "Use the waiting period productively: update your relationship timeline, prepare interview notes if applicable, and ensure your shared story remains consistent.",
      "WedVisa’s progress tracker is designed for long journeys—so you always know what is done, what is pending, and what can be improved.",
    ],
    category: "Country Tips",
    author: "Priya Nair",
    authorRole: "Research",
    publishedAt: "2026-05-30",
    readTime: "7 min read",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
  },
  {
    slug: "relationship-timeline-that-convinces",
    title: "How to Build a Relationship Timeline That Convinces",
    excerpt:
      "Structure your love story for officers who have minutes—not hours—to understand your case.",
    content: [
      "A strong timeline is not a diary. It is a structured narrative of milestones that demonstrate continuity, commitment, and shared life.",
      "Include first meeting, commitment moments, cohabitation or visits, major trips, introductions to family, and joint plans for the future.",
      "For each milestone, attach one or two pieces of supporting evidence rather than an entire photo album.",
      "Call out gaps honestly. Long periods apart are common in international relationships—explain communication patterns and visits clearly.",
      "Export a clean PDF summary for your application pack, and keep the full archive organized behind it.",
    ],
    category: "Guides",
    author: "Maya Chen",
    authorRole: "Immigration Content Lead",
    publishedAt: "2026-05-20",
    readTime: "6 min read",
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    slug: "from-chaos-to-clarity-couple-story",
    title: "From Chaos to Clarity: One Couple’s Application Reset",
    excerpt:
      "How Amelia and Noah replaced scattered folders with a shared workspace—and found calm before submission.",
    content: [
      "Amelia and Noah had twelve browser tabs, three cloud drives, and no shared checklist. Their K-1 prep felt endless.",
      "They rebuilt from first principles: one eligibility assessment, one timeline, one evidence library, and weekly progress reviews together.",
      "Within two weeks they knew exactly what was missing. Cover letters stopped sounding generic. Interview practice became a Sunday ritual instead of a panic session.",
      "Their advice to other couples: stop collecting documents without a system. Structure creates confidence.",
      "Stories like theirs shaped how we designed WedVisa—for two people, one journey, and less stress.",
    ],
    category: "Stories",
    author: "WedVisa Editorial",
    authorRole: "Team",
    publishedAt: "2026-05-08",
    readTime: "4 min read",
    gradient: "from-rose-500 via-fuchsia-600 to-violet-600",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
