// Knowledge centre (pages/knowledge.md, content/knowledge-backlog.md, besluit 51).
// Articles themselves live in data/knowledgeArticles.ts; this file adds the new categories.
import { knowledgeArticles, type KnowledgeArticle } from "@/data/knowledgeArticles";
import type { KnowledgeCategory } from "./types";

export const knowledgeCategories: { name: KnowledgeCategory; question: string; icon: string }[] = [
  { name: "AI-basis", question: "Hoe werkt AI eigenlijk?", icon: "sparkles" },
  { name: "Je eigen AI-omgeving", question: "Waar draait AI en wat heb je nodig?", icon: "server" },
  { name: "Agents en workflows", question: "Hoe laat je AI werk uitvoeren?", icon: "bot" },
  { name: "Koppelen en bouwen", question: "Hoe sluit AI aan op je systemen?", icon: "plug" },
];

const categoryBySlug: Record<string, KnowledgeCategory> = {
  "wat-is-een-llm": "AI-basis",
  "wat-is-context": "AI-basis",
  "wat-is-een-context-window": "AI-basis",
  "wat-is-prompt-engineering": "AI-basis",
  "wat-is-local-ai": "Je eigen AI-omgeving",
  "wat-is-edge-ai": "Je eigen AI-omgeving",
  "wat-is-on-premise-ai": "Je eigen AI-omgeving",
  "wat-is-cloud": "Je eigen AI-omgeving",
  "white-label-hardware-aitje-software": "Je eigen AI-omgeving",
  "wat-is-een-ai-agent": "Agents en workflows",
  "wat-is-een-workflow": "Agents en workflows",
  "wat-is-rag": "Agents en workflows",
  "wat-is-een-api": "Koppelen en bouwen",
  "wat-is-een-webhook": "Koppelen en bouwen",
  "wat-zijn-embeddings": "Koppelen en bouwen",
  "wat-is-een-backend": "Koppelen en bouwen",
  "wat-is-een-frontend": "Koppelen en bouwen",
};

// Placeholder review date for the migrated articles; update per article when reviewed.
const LAST_UPDATED = "2026-09-26";

export type Article = KnowledgeArticle & {
  topic: KnowledgeCategory;
  lastUpdated: string;
};

export const articles: Article[] = knowledgeArticles.map((article) => ({
  ...article,
  topic: categoryBySlug[article.slug] ?? "AI-basis",
  lastUpdated: LAST_UPDATED,
}));

export const featuredArticleSlugs = ["wat-is-local-ai", "wat-is-een-llm", "wat-is-een-ai-agent"];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
