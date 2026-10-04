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

/** Disabled products are unpublished everywhere, including their detail page. */
export type ProductStatus = "available" | "planned" | "disabled";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  status: ProductStatus;
  /** One line for cards. */
  tagline: string;
  icon: string;
  image?: string;
  /** Context photograph shared by the hero and card; sources in photo-credits.md. */
  background?: string;
  /** Use a stronger wash when the photo is busy behind the copy. */
  backgroundStrong?: boolean;
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
  /** Full-width royalty-free photo behind the hero (Unsplash License). */
  background?: string;
  /** Use a stronger wash when the photo is busy behind the copy. */
  backgroundStrong?: boolean;
  headline: string;
  subline: string;
  cta: Cta;
  intro: string[];
  forWho: string[];
  steps: { title: string; text: string }[];
  deliverables: string[];
  parts?: ServicePart[];
  price: { label: string; note: string; onRequest?: boolean };
  notIncluded: string[];
  faq: Faq[];
  caseSlugs: string[];
  related: string[];
  seoDescription: string;
};

export type CaseLabel = "Praktijkcase" | "Demo" | "Voorbeeldsituatie";

export type ProductEnrichmentStory = {
  run: { products: number; hours: number; hourlyUsd: number; gpu: string; memory: string; precision: string };
  challenge: { title: string; paragraphs: string[]; specifications: string[] };
  workflow: { title: string; icon: string; text: string; output: string }[];
  connections: { title: string; icon: string; text: string }[];
  toolCalling: string[];
  outcomes: { title: string; icon: string; text: string }[];
  markets: { code: string; name: string }[];
  translation: string;
  modelChoice: string[];
  modelBenchmarks: { label: string; task: string; dense: number; moe: number }[];
  modelSource: { name: string; url: string };
  modelNotes: string;
  tokenCosts: {
    reportedMillions: [number, number];
    turns: { title: string; input: number; output: number; inputDetail: string; outputDetail: string }[];
    models: { name: string; inputUsd: number; outputUsd: number; source: string }[];
    checkedOn: string;
    deepl: { monthlyEur: number; includedMillions: number; extraMillionEur: number; source: string };
  };
  frontierComparison: {
    gemma: string;
    frontier: string;
    rows: { label: string; task: string; gemma: number; frontier: number }[];
    source: string;
    note: string;
  };
  sync: { title: string; text: string }[];
  hosting: string;
  conclusion: string;
};

export type CaseStudy = {
  slug: string;
  label: CaseLabel;
  title: string;
  context: string;
  summary: string;
  icon: string;
  image?: string;
  /** Context photograph shared by the hero and card; sources in photo-credits.md. */
  background?: string;
  photoAlt?: string;
  offer: { name: string; to: string }[];
  recognize: string[];
  alsoFor?: string;
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  quote?: string;
  disclaimer?: string;
  /** Dummy details that must be replaced before launch. */
  dummy: boolean;
  productEnrichment?: ProductEnrichmentStory;
  workshopVoice?: WorkshopVoiceStory;
  realEstate?: RealEstateStory;
  productModels?: ProductModelsStory;
  gameLevels?: GameLevelsStory;
  councilHub?: CouncilHubStory;
  developmentAgency?: DevelopmentAgencyStory;
};

export type DevelopmentAgencyStory = {
  hardwareImage: string;
  modelCount: number;
  costs: { subscriptions: number; subscriptionMonthlyEur: number; sharedMonthlyEur: number };
  intro: string[];
  tasks: { label: string; question: string; route: string; context: string; result: string }[];
  workflow: { title: string; icon: string; text: string }[];
};

export type CouncilHubStory = {
  sync: string;
  intro: string[];
  sources: { name: string; icon: string; text: string }[];
  questions: { label: string; question: string; answer: string; sources: string[] }[];
  comparison: { subject: string; before: string; after: string }[];
  workflow: { title: string; text: string }[];
};

export type GameLevelsStory = {
  intro: string[];
  design: { title: string; icon: string; text: string }[];
  workflow: { title: string; text: string }[];
  outcome: string;
};

export type ProductModelsStory = {
  intro: string[];
  models: { name: string; src: string; text: string }[];
  workflow: { title: string; icon: string; text: string; output: string }[];
  instructions: { file: string; purpose: string }[];
  costs: { initialPerProductEur: number; optimizedPerProductEur: [number, number]; totalSavingPercent: number; manualEightImagesEur: number };
};

export type RealEstateStory = {
  hardwareImage: string;
  intro: string[];
  sources: { name: string; icon: string; text: string }[];
  workflow: { title: string; text: string }[];
  access: { name: string; text: string; allowed: string[]; excluded: string[] }[];
};

export type WorkshopVoiceStory = {
  intro: string;
  hardwareImage: string;
  costs: {
    hardwareEur: number;
    whisperMinuteUsd: number;
    models: { name: string; inputUsd: number; outputUsd: number }[];
  };
  actions: { title: string; icon: string; question: string; description: string; connection: string; reply: string; confirmation: boolean }[];
};

export type KnowledgeCategory =
  | "AI-basis"
  | "Je eigen AI-omgeving"
  | "Agents en workflows"
  | "Koppelen en bouwen";
