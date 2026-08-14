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
          "Een lokaal AI-station op eigen hardware voor chat, documenten, kennisbankgebruik en interne vragen, zonder alles standaard naar externe platformen te sturen.",
        audience:
          "Voor organisaties die AI willen gebruiken met meer regie over data, privacy, stroomverbruik, API-kosten en beschikbaarheid.",
        highlights: [
          "Lokale assistent op eigen device",
          "Werkt samen met OS, Client en Kennisbank",
          "Lokale AI zonder per-token meter voor normaal lokaal gebruik",
        ],
        cta: "Bekijk product",
        intro:
          "Gebruik AITJE Assistent voor interne vragen, documentwerk, kennisbankgebruik en conversational AI binnen je eigen omgeving. AITJE OS, Client en lokale Kennisbank vormen samen de basis.",
        useCases: [
          "Interne kennis sneller terugvinden",
          "Documenten en beleid begrijpelijk doorzoekbaar maken",
          "Lokaler werken met minder afhankelijkheid van API-kosten en externe platforms",
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
              assistantPlus: "Krachtigere uitvoering voor grotere modellen en intensiever gebruik",
            },
          ],
        },
      },
      {
        slug: "aitje-custom",
        title: "AITJE Custom",
        status: "available",
        summary:
          "Een gezamenlijke route voor lokale, edge- en on-premise AI-oplossingen: eerst de juiste hardware voor het probleem, daarna de agent, workflow of koppeling die daarop draait.",
        audience:
          "Voor organisaties met een concrete AI-vraag waarbij standaardsoftware, klassieke webbouw of generieke AI-tools niet genoeg zijn.",
        highlights: [
          "Ontwikkeling tegen uurtarief",
          "Hardwarekosten apart en transparant",
          "Gericht op edge en on-premise AI waar bestaande producten niet genoeg zijn",
        ],
        cta: "Bespreek maatwerk",
        intro:
          "Met AITJE Custom Solutions ontwerpen en bouwen we AI-first oplossingen rond edge AI, local AI, on-premise AI en passende hardware. Soms wordt dat een workflow, soms een agent, soms een device met software eromheen. Het is geen standaardproduct, maar een traject waarin we samen bepalen wat jouw probleem nodig heeft.",
        useCases: [
          "Een specifieke edge AI-workflow bouwen",
          "Een on-premise toepassing koppelen aan bestaande processen",
          "Passende hardware selecteren en inrichten voor een maatwerkoplossing",
        ],
      },
      {
        slug: "aitje-coder",
        title: "AITJE Coder",
        status: "in-development",
        summary:
          "Eén apparaat in je eigen netwerk waarmee je team AI inzet bij softwareontwikkeling. Developers werken door in hun eigen editor, grotere klussen gaan naar een agent die zelfstandig aan de slag gaat.",
        audience:
          "Voor organisaties en ontwikkelteams die AI willen inzetten bij softwareontwikkeling zonder hun broncode en hun kosten uit handen te geven aan een externe dienst.",
        highlights: [
          "Je code en je vragen blijven op je eigen netwerk",
          "Geen abonnement per developer en geen afrekening per vraag",
          "Niets verandert in je code zonder dat een mens het heeft goedgekeurd",
        ],
        cta: "Bekijk AITJE Coder",
        intro:
          "AITJE Coder draait de AI-modellen op een apparaat in je eigen omgeving. Je developers richten hun bestaande tools daarop, en werk dat je liever uitbesteedt zet je als taak weg bij een agent die het resultaat ter beoordeling aanlevert.",
        useCases: [
          "Terugkerend onderhoud en dependency-upgrades uitbesteden",
          "Tests en documentatie laten bijwerken zonder dat het blijft liggen",
          "Werken met AI zonder dat broncode het pand verlaat",
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
          "A local AI station on dedicated hardware for chat, documents, knowledge base use and internal questions, without sending everything to external platforms by default.",
        audience:
          "For organizations that want to use AI with more control over data, privacy, power usage, API costs and availability.",
        highlights: [
          "Local assistant on a dedicated device",
          "Works together with OS, Client and Knowledge Base",
          "Local AI without a per-token meter for normal local use",
        ],
        cta: "View product",
        intro:
          "Use AITJE Assistent for internal questions, document work, knowledge base use and conversational AI inside your own environment. AITJE OS, Client and local Knowledge Base form the foundation.",
        useCases: [
          "Finding internal knowledge faster",
          "Making documents and policies easier to search",
          "Working more locally with less dependence on API costs and external platforms",
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
              assistantPlus: "More powerful edition for larger models and more intensive use",
            },
          ],
        },
      },
      {
        slug: "aitje-custom",
        title: "AITJE Custom",
        status: "available",
        summary:
          "A collaborative route for local, edge and on-premise AI solutions: first the right hardware for the problem, then the agent, workflow or integration that runs on it.",
        audience:
          "For organizations with a concrete AI question where standard software, traditional web development or generic AI tools are not enough.",
        highlights: [
          "Development at an hourly rate",
          "Hardware costs shown separately and transparently",
          "Focused on edge and on-premise AI where existing products are not enough",
        ],
        cta: "Discuss custom work",
        intro:
          "With AITJE Custom Solutions we design and build AI-first solutions around edge AI, local AI, on-premise AI and suitable hardware. Sometimes that becomes a workflow, sometimes an agent, sometimes a device with software around it. It is not a standard product, but a track in which we determine together what your problem needs.",
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
          "One box on your own network that lets your team use AI in software development. Developers keep working in their own editor, bigger jobs go to an agent that handles them on its own.",
        audience:
          "For organizations and development teams that want to use AI in software development without handing their source code and their costs to an external service.",
        highlights: [
          "Your code and your questions stay on your own network",
          "No per-developer subscription and no charge per question",
          "Nothing changes in your code until a person has approved it",
        ],
        cta: "View AITJE Coder",
        intro:
          "AITJE Coder runs the AI models on a box in your own environment. Your developers point their existing tools at it, and work you would rather hand over becomes a task for an agent that delivers the result for review.",
        useCases: [
          "Handing over recurring maintenance and dependency upgrades",
          "Keeping tests and documentation up to date instead of postponed",
          "Working with AI without source code leaving the building",
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
