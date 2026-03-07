type KnowledgeLinkDefinition = {
  slug: string;
  terms: string[];
};

export type KnowledgeLinkRule = {
  to: string;
  pattern: RegExp;
  priority: number;
};

const knowledgeLinkDefinitions: KnowledgeLinkDefinition[] = [
  {
    slug: "wat-is-een-llm",
    terms: [
      "LLM",
      "LLM's",
      "taalmodel",
      "taalmodellen",
      "language model",
      "language models",
      "model",
      "modellen",
    ],
  },
  {
    slug: "wat-is-edge-ai",
    terms: ["lokale edge AI", "edge AI", "lokale AI"],
  },
  {
    slug: "wat-is-rag",
    terms: ["RAG-chat", "RAG-systemen", "RAG-systeem", "RAG"],
  },
  {
    slug: "wat-is-context",
    terms: ["bedrijfscontext", "organisatiecontext", "contextuele", "context"],
  },
  {
    slug: "wat-is-een-context-window",
    terms: ["context window"],
  },
  {
    slug: "wat-is-een-ai-agent",
    terms: ["AI agent", "AI agents", "agent", "agents"],
  },
  {
    slug: "wat-zijn-embeddings",
    terms: ["vector embeddings", "embedding", "embeddings"],
  },
  {
    slug: "wat-is-prompt-engineering",
    terms: ["prompt engineering", "prompting", "prompt", "prompts"],
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildBoundaryPattern(term: string) {
  return `(?<![\\p{L}\\p{N}_-])${escapeRegExp(term)}(?![\\p{L}\\p{N}_-])`;
}

export function getKnowledgeLinkRules(currentPath: string) {
  return knowledgeLinkDefinitions
    .filter(({ slug }) => `/kenniscentrum/${slug}` !== currentPath)
    .flatMap(({ slug, terms }) =>
      [...new Set(terms)]
        .sort((left, right) => right.length - left.length)
        .map((term): KnowledgeLinkRule => ({
          to: `/kenniscentrum/${slug}`,
          pattern: new RegExp(buildBoundaryPattern(term), "giu"),
          priority: term.length,
        }))
    )
    .sort((left, right) => right.priority - left.priority);
}
