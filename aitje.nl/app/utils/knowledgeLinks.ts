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
      "groot taalmodel",
      "grote taalmodellen",
      "large language model",
      "large language models",
      "language model",
      "language models",
      "model",
      "modellen",
    ],
  },
  {
    slug: "wat-is-edge-ai",
    terms: [
      "lokale edge AI",
      "edge AI",
      "lokale AI",
      "offline AI",
      "lokale AI-oplossing",
      "lokale AI-oplossingen",
    ],
  },
  {
    slug: "wat-is-rag",
    terms: [
      "RAG-chat",
      "RAG chat",
      "RAG-systemen",
      "RAG-systeem",
      "Retrieval-Augmented Generation",
      "retrieval augmented generation",
      "retrieval",
      "kennisbank",
      "kennisbanken",
      "RAG",
    ],
  },
  {
    slug: "wat-is-context",
    terms: [
      "bedrijfscontext",
      "organisatiecontext",
      "relevante context",
      "contextuele",
      "contextueel",
      "context",
    ],
  },
  {
    slug: "wat-is-een-context-window",
    terms: ["context window", "werkgeheugen", "chatgeschiedenis", "contextlimiet"],
  },
  {
    slug: "wat-is-een-ai-agent",
    terms: [
      "AI agent",
      "AI agents",
      "AI-agent",
      "AI-agents",
      "agent-gedreven",
      "agentgedrag",
      "chatbot",
      "chatbots",
      "agent",
      "agents",
    ],
  },
  {
    slug: "wat-zijn-embeddings",
    terms: [
      "vector embeddings",
      "vector search",
      "vector-search",
      "vector-embedding",
      "vectoren",
      "semantisch zoeken",
      "embedding workflow",
      "embeddingflow",
      "embeddingflows",
      "embedden",
      "embedding",
      "embeddings",
      "chunks",
      "gevectoriseerde",
    ],
  },
  {
    slug: "wat-is-prompt-engineering",
    terms: [
      "prompt engineering",
      "constrained prompting",
      "promptbibliotheek",
      "prompt templates",
      "prompt template",
      "promptlessen",
      "guardrailing",
      "guardrails",
      "prompting",
      "prompt",
      "prompts",
    ],
  },
  {
    slug: "wat-is-een-api",
    terms: [
      "lokale API-services",
      "API-architectuur",
      "API-bereikbaarheid",
      "API-koppelingen",
      "API-prijzen",
      "API-routes",
      "API-toegang",
      "boeken-API",
      "LLM-API",
      "lokale API",
      "API-basis",
      "API-lab",
      "API key",
      "API keys",
      "API",
      "API's",
    ],
  },
  {
    slug: "wat-is-een-webhook",
    terms: ["webhooks", "webhook"],
  },
  {
    slug: "wat-is-een-backend",
    terms: ["backend-talen", "backend"],
  },
  {
    slug: "wat-is-een-frontend",
    terms: ["lokale interfaces", "interfaces", "frontend"],
  },
  {
    slug: "wat-is-cloud",
    terms: [
      "cloudoplossingen",
      "cloudoplossing",
      "cloudinfrastructuur",
      "cloudomgeving",
      "cloudhosting",
      "cloudverzoeken",
      "cloudcapaciteit",
      "cloud calls",
      "de cloud",
      "cloud",
    ],
  },
  {
    slug: "wat-is-een-workflow",
    terms: [
      "workflow-automatisering",
      "AI-workflow",
      "AI-workflows",
      "AITJE-workflow",
      "opnameworkflows",
      "chatflows",
      "redactieworkflow",
      "workflow",
      "workflows",
    ],
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
