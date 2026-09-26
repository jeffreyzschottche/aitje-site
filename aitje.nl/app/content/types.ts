// Content model for the AITJE site. Source of truth: /redesign (md files).
// Text strings may contain inline links as [label](/path); RichText renders them.

export type Faq = {
  q: string;
  a: string;
  /** Also shown on the general FAQ page (marked ★ in redesign/content/faq.md). */
  general?: boolean;
};

export type Cta = {
  label: string;
  to: string;
};

export type ProductStatus = "available" | "planned";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  status: ProductStatus;
  /** One line for cards. */
  tagline: string;
  icon: string;
  image?: string;
  headline: string;
  subline: string;
  intro: string[];
  forWho: string[];
  problems: { problem: string; solution: string }[];
  features?: { title: string; text: string; icon: string }[];
  included?: string[];
  notIncluded?: string[];
  price?: number;
  selfInstall?: string[];
  technical?: { title: string; text: string }[];
  gallery?: { src: string; alt: string; caption: string }[];
  faq?: Faq[];
  caseSlugs?: string[];
  seoDescription: string;
};

export type ServicePart = {
  name: string;
  text: string;
  price: string;
};

export type Service = {
  slug: string;
  name: string;
  /** One line for cards. */
  short: string;
  icon: string;
  image?: string;
  headline: string;
  subline: string;
  cta: Cta;
  intro: string[];
  forWho: string[];
  steps: { title: string; text: string }[];
  deliverables: string[];
  parts?: ServicePart[];
  price: { label: string; note: string };
  notIncluded: string[];
  faq: Faq[];
  caseSlugs: string[];
  related: string[];
  seoDescription: string;
};

export type CaseLabel = "Praktijkcase" | "Demo" | "Voorbeeldsituatie";

export type CaseStudy = {
  slug: string;
  label: CaseLabel;
  title: string;
  context: string;
  summary: string;
  icon: string;
  image?: string;
  offer: { name: string; to: string }[];
  recognize: string[];
  alsoFor?: string;
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  quote?: string;
  disclaimer?: string;
  /** Dummy details that must be replaced before launch. */
  dummy: boolean;
};

export type KnowledgeCategory =
  | "AI-basis"
  | "Je eigen AI-omgeving"
  | "Agents en workflows"
  | "Koppelen en bouwen";
