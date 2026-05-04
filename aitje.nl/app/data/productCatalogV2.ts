export type ProductStatus = "available" | "in-development" | "planned";

export type ProductCard = {
  slug: string;
  title: string;
  status: ProductStatus;
  summary: string;
  audience: string;
  highlights: string[];
  cta: string;
};

export type ProductPageContent = ProductCard & {
  intro: string;
  useCases: string[];
  modules?: {
    slug: string;
    title: string;
    summary: string;
  }[];
  variantComparison?: {
    title: string;
    items: {
      label: string;
      assistant: string;
      assistantPlus: string;
    }[];
  };
};

export type ProductModuleContent = {
  title: string;
  intro: string;
  points: string[];
};

type LocaleContent = {
  products: ProductPageContent[];
  assistantModules: Record<string, ProductModuleContent>;
};

export const productStatusLabel: Record<"nl" | "en", Record<ProductStatus, string>> = {
  nl: {
    available: "Beschikbaar",
    "in-development": "In ontwikkeling",
    planned: "Gepland",
  },
  en: {
    available: "Available",
    "in-development": "In development",
    planned: "Planned",
  },
};

export const productCatalogV2: Record<"nl" | "en", LocaleContent> = {
  nl: {
    products: [
      {
        slug: "aitje-assistent",
        title: "AITJE Assistent",
        status: "available",
        summary:
          "Lokale Edge AI op een eigen device voor organisaties die met kennis, documenten en dagelijkse vragen willen werken zonder alles naar externe platformen te sturen.",
        audience:
          "Voor organisaties die meer regie willen over AI-gebruik, privacy en lange termijnkosten.",
        highlights: [
          "Lokale assistent op eigen device",
          "Werkt samen met OS, Client en Kennisbank",
          "Geschikt voor dagelijks gebruik binnen teams",
        ],
        cta: "Vraag een prijslijst aan",
        intro:
          "AITJE Assistent is het kernproduct van AITJE. Je zet het in als lokale assistent voor kennis, vragen, documentwerk en praktische AI-taken binnen je organisatie.",
        useCases: [
          "Interne kennis sneller terugvinden",
          "Documenten en beleid begrijpelijk doorzoekbaar maken",
          "Lokaler werken met minder afhankelijkheid van API-kosten",
        ],
        modules: [
          {
            slug: "aitje-os",
            title: "AITJE OS",
            summary: "De basislaag waarop AITJE Assistent draait.",
          },
          {
            slug: "aitje-client",
            title: "AITJE Client",
            summary: "De toegankelijke omgeving voor gebruikers op desktop en mobiel.",
          },
          {
            slug: "kennisbank",
            title: "AITJE Kennisbank",
            summary: "De koppeling tussen eigen bronnen, sync en slimme context voor de assistent.",
          },
        ],
        variantComparison: {
          title: "AITJE Assistent of AITJE Assistent+",
          items: [
            {
              label: "Doel",
              assistant: "Sterke basis voor organisaties die lokaal willen starten",
              assistantPlus: "Voor organisaties die sneller willen werken of zwaardere modellen nodig hebben",
            },
            {
              label: "Specificaties",
              assistant: "Geschikt voor veel dagelijkse Edge AI-toepassingen",
              assistantPlus: "Betere specificaties en meer ruimte voor zwaardere inzet",
            },
            {
              label: "Uitvoering",
              assistant: "Standaard uitvoering",
              assistantPlus: "Andere kleur en snellere variant",
            },
          ],
        },
      },
      {
        slug: "aitje-custom",
        title: "AITJE Custom",
        status: "available",
        summary:
          "Voor organisaties waar de vaste oplossingen niet goed passen en die een strategische Edge AI-partner zoeken.",
        audience:
          "Voor organisaties met specifieke hardwarewensen, agentic workflows of een complexere omgeving.",
        highlights: [
          "Strategisch meedenken over inzet van Edge AI",
          "Alternatieve hardware mogelijk",
          "Gericht op een passende oplossing in plaats van een standaardverhaal",
        ],
        cta: "Vraag een offerte aan",
        intro:
          "AITJE Custom is de route voor organisaties die verder moeten kijken dan een standaardproduct. We denken mee over inzet, hardware, workflows en vervolgstappen.",
        useCases: [
          "Een zwaardere of afwijkende hardwareopzet nodig",
          "Lokale agents koppelen aan bestaande processen",
          "Praktische vertaalslag maken van idee naar werkbare oplossing",
        ],
      },
      {
        slug: "aitje-coder",
        title: "AITJE Coder",
        status: "in-development",
        summary:
          "In ontwikkeling als coder-product voor organisaties die lokaal en gecontroleerd willen bouwen, aanpassen en doorontwikkelen met AI-ondersteuning.",
        audience:
          "Voor organisaties en teams die softwareontwikkeling, technische wijzigingen of interne tools sneller willen uitvoeren zonder volledige afhankelijkheid van externe AI-platformen.",
        highlights: [
          "Gericht op coderen, aanpassen en technisch uitwerken",
          "Lokale of gecontroleerde inzet binnen eigen omgeving",
          "Bedoeld voor ontwikkelwerk, scripts, tooling en iteratie",
        ],
        cta: "Meld je interesse",
        intro:
          "AITJE Coder is in ontwikkeling voor teams die AI willen inzetten bij softwareontwikkeling, technische taken en interne tooling, maar wel met duidelijke regie over omgeving, data en werkwijze.",
        useCases: [
          "Code aanpassen en nieuwe features sneller uitwerken",
          "Interne scripts, tools en technische workflows opzetten",
          "Lokaler ontwikkelen met meer grip op context en toegang",
        ],
      },
    ],
    assistantModules: {
      "aitje-os": {
        title: "AITJE OS",
        intro:
          "AITJE OS is de basis van AITJE Assistent. Hierin komen stabiliteit, toegang en dagelijks gebruik samen.",
        points: [
          "Ontwikkeld als onderdeel van AITJE Assistent",
          "Brengt beheer, gebruik en lokale AI op één plek samen",
          "Helpt organisaties werken zonder onnodige technische omwegen",
        ],
      },
      "aitje-client": {
        title: "AITJE Client",
        intro:
          "AITJE Client is de toegankelijke laag voor medewerkers die gewoon willen werken met de assistent zonder technisch beheer te hoeven begrijpen.",
        points: [
          "Toegang voor desktop en mobiel",
          "Gericht op praktisch dagelijks gebruik",
          "Onderdeel van dezelfde productlijn als AITJE Assistent",
        ],
      },
      kennisbank: {
        title: "AITJE Kennisbank",
        intro:
          "De kennisbank verbindt eigen bronnen, sync en context zodat AITJE Assistent met relevante organisatiekennis kan werken.",
        points: [
          "Eigen documenten en bronnen toevoegen",
          "Embedding- en synclaag als onderdeel van het product",
          "Maakt antwoorden bruikbaarder en concreter",
        ],
      },
    },
  },
  en: {
    products: [
      {
        slug: "aitje-assistent",
        title: "AITJE Assistent",
        status: "available",
        summary:
          "Local Edge AI on its own device for organizations that want to work with knowledge, documents and daily questions without sending everything to external platforms.",
        audience:
          "For organizations that want more control over AI usage, privacy and long-term costs.",
        highlights: [
          "Local assistant on a dedicated device",
          "Works together with OS, Client and Knowledge Base",
          "Suitable for daily team use",
        ],
        cta: "Request a price list",
        intro:
          "AITJE Assistent is AITJE's core product. It helps organizations use local AI for knowledge, questions, document work and practical daily tasks.",
        useCases: [
          "Finding internal knowledge faster",
          "Making documents and policies easier to search",
          "Working more locally with less dependence on API costs",
        ],
        modules: [
          {
            slug: "aitje-os",
            title: "AITJE OS",
            summary: "The base layer that powers AITJE Assistent.",
          },
          {
            slug: "aitje-client",
            title: "AITJE Client",
            summary: "The accessible environment for users on desktop and mobile.",
          },
          {
            slug: "kennisbank",
            title: "AITJE Knowledge Base",
            summary: "The link between your own sources, sync and useful context for the assistant.",
          },
        ],
        variantComparison: {
          title: "AITJE Assistent or AITJE Assistent+",
          items: [
            {
              label: "Goal",
              assistant: "Strong starting point for organizations that want to start locally",
              assistantPlus: "For organizations that need more speed or heavier models",
            },
            {
              label: "Specifications",
              assistant: "Fits many day-to-day Edge AI tasks",
              assistantPlus: "Better specifications and more room for heavier usage",
            },
            {
              label: "Version",
              assistant: "Standard version",
              assistantPlus: "Different color and faster variant",
            },
          ],
        },
      },
      {
        slug: "aitje-custom",
        title: "AITJE Custom",
        status: "available",
        summary:
          "For organizations where the fixed solutions are not the right fit and a strategic Edge AI partner makes more sense.",
        audience:
          "For organizations with specific hardware needs, agentic workflows or a more complex environment.",
        highlights: [
          "Strategic guidance on where Edge AI fits",
          "Alternative hardware is possible",
          "Focused on the right solution instead of a generic pitch",
        ],
        cta: "Request a quote",
        intro:
          "AITJE Custom is the route for organizations that need more than a standard product. We help think through usage, hardware, workflows and practical next steps.",
        useCases: [
          "A heavier or different hardware setup",
          "Local agents connected to existing processes",
          "Turning an Edge AI idea into a workable setup",
        ],
      },
      {
        slug: "aitje-coder",
        title: "AITJE Coder",
        status: "in-development",
        summary:
          "In development as a coder-focused product for organizations that want to build, adapt and iterate with AI support in a local or controlled setup.",
        audience:
          "For organizations and teams that want to move faster in software development, technical changes or internal tooling without full dependence on external AI platforms.",
        highlights: [
          "Focused on coding, adapting and technical implementation",
          "Local or controlled use inside your own environment",
          "Built for development work, scripts, tooling and iteration",
        ],
        cta: "Register your interest",
        intro:
          "AITJE Coder is in development for teams that want to use AI in software development, technical tasks and internal tooling while keeping clear control over environment, data and workflow.",
        useCases: [
          "Adjusting code and shipping new features faster",
          "Building internal scripts, tools and technical workflows",
          "Developing more locally with better control over context and access",
        ],
      },
    ],
    assistantModules: {
      "aitje-os": {
        title: "AITJE OS",
        intro:
          "AITJE OS is the foundation of AITJE Assistent. It brings stability, access and day-to-day usage together.",
        points: [
          "Built as part of AITJE Assistent",
          "Brings management, usage and local AI together in one place",
          "Helps organizations work without unnecessary technical detours",
        ],
      },
      "aitje-client": {
        title: "AITJE Client",
        intro:
          "AITJE Client is the accessible layer for employees who want to work with the assistant without dealing with technical management.",
        points: [
          "Access for desktop and mobile",
          "Focused on practical day-to-day use",
          "Part of the same product line as AITJE Assistent",
        ],
      },
      kennisbank: {
        title: "AITJE Knowledge Base",
        intro:
          "The knowledge base connects your own sources, sync and context so AITJE Assistent can work with relevant organizational knowledge.",
        points: [
          "Add your own documents and sources",
          "Embedding and sync layer as part of the product",
          "Makes answers more useful and concrete",
        ],
      },
    },
  },
};
