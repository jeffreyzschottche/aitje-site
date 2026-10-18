// Contact form topics, shared by the contact page and /api/contact (redesign/pages/contact.md, besluit 51).
import { products } from "../app/content/products";

export const contactTopics = [
  { key: "ai-vraag", label: "Advies over AI" },
  { key: "product-regelen", label: "Product met installatie", needsProduct: true },
  { key: "demo", label: "Productdemo", needsProduct: true },
  { key: "demo-fysiek", label: "Fysieke demo op locatie", needsProduct: true },
  { key: "demo-endpoint", label: "Demo-endpoint aanvragen", needsProduct: true },
  { key: "zelfinstallatie", label: "Product voor zelfinstallatie", needsProduct: true },
  { key: "ai-scan", label: "AI-scan aanvragen" },
  { key: "token-management", label: "Token- en API-kosten verlagen" },
  { key: "ai-verbeteren", label: "Bestaande AI verbeteren" },
  { key: "ai-op-maat", label: "Automatisering of AI op maat" },
  { key: "veilig-ai", label: "Veilig AI-gebruik" },
  { key: "sla", label: "Ondersteuning en onderhoud" },
  { key: "samenwerken", label: "Samenwerken met AITJE" },
  { key: "interesse", label: "Interesse in een toekomstig product", needsProduct: true },
  { key: "anders", label: "Iets anders" },
] as const;

export type ContactTopicKey = (typeof contactTopics)[number]["key"];

// Visitors choose a broad purpose first; existing CTA keys remain the submitted topic.
export const contactTopicGroups: {
  key: string;
  label: string;
  topics: readonly ContactTopicKey[];
  detailLabel?: string;
}[] = [
  { key: "ai-vraag", label: "Advies over AI", topics: ["ai-vraag"] },
  { key: "producten", label: "Een product of demo", topics: ["product-regelen", "demo", "demo-fysiek", "demo-endpoint", "zelfinstallatie", "interesse"], detailLabel: "Wat wil je met het product?" },
  { key: "ai-scan", label: "Een AI-scan", topics: ["ai-scan"] },
  { key: "ai-op-maat", label: "Automatisering of AI op maat", topics: ["ai-op-maat"] },
  { key: "optimalisatie", label: "AI verbeteren of kosten verlagen", topics: ["ai-verbeteren", "token-management"], detailLabel: "Waar wil je mee aan de slag?" },
  { key: "veilig-ai", label: "Veilig AI-gebruik", topics: ["veilig-ai"] },
  { key: "sla", label: "Ondersteuning en onderhoud", topics: ["sla"] },
  { key: "samenwerken", label: "Samenwerken met AITJE", topics: ["samenwerken"] },
  { key: "anders", label: "Iets anders", topics: ["anders"] },
];

export const contactProducts = products.map(({ slug, name, status }) => ({ slug, name, status }));

export const findTopic = (key: string) => contactTopics.find((t) => t.key === key);
export const findContactProduct = (slug: string) => contactProducts.find((p) => p.slug === slug);
export const findTopicGroup = (key: string) => contactTopicGroups.find((group) => group.topics.includes(key as ContactTopicKey));
