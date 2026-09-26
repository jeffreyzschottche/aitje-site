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
          "In ontwikkeling voor teams die met lokale of gecontroleerde coding agents willen werken aan code, scripts, tooling en technische wijzigingen.",
        audience:
          "Voor organisaties en ontwikkelteams die AI willen inzetten bij softwareontwikkeling zonder volledig afhankelijk te zijn van externe coding platforms.",
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
      {
        slug: "aitje-manager",
        title: "AITJE Manager",
        status: "planned",
        summary:
          "Een persoonlijke AI-agent die binnen afgesproken grenzen taken uitvoert en terugkerend werk helpt afhandelen.",
        audience:
          "Voor organisaties die terugkerende taken willen automatiseren en zelf willen bepalen wat een AI-agent wel en niet mag doen.",
        highlights: [
          "Taken uitvoeren binnen ingestelde grenzen",
          "Aansluiten op bestaande workflows en systemen",
          "In eigen beheer waar de toepassing dat toelaat",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Manager brengt modellen, tools en workflows samen in een persoonlijke agent die werk kan voorbereiden of uitvoeren. De precieze inrichting hangt af van de taken, systemen, risico's en omgeving van de organisatie.",
        useCases: [
          "Terugkerende administratieve taken afhandelen",
          "Informatie verzamelen en acties voorbereiden",
          "Werkflows bewaken en vervolgstappen starten",
        ],
      },
      {
        slug: "aitje-notulist",
        title: "AITJE Notulist",
        status: "planned",
        summary:
          "Een oplossing voor het opnemen, uitschrijven, samenvatten en doorzetten van gesprekken en vergaderingen.",
        audience:
          "Voor teams die minder tijd aan notulen willen besteden en verslagen direct in hun eigen werkomgeving willen verwerken.",
        highlights: [
          "Opnemen en transcriberen",
          "Samenvatten volgens een vaste structuur",
          "Resultaten doorzetten naar eigen systemen",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Notulist maakt van een gesprek een bruikbaar verslag en kan afgesproken vervolgstappen doorzetten naar de plek waar het team werkt. Daarbij kiezen we een opstelling die past bij privacy, kwaliteit en beheer.",
        useCases: [
          "Vergaderingen automatisch uitwerken",
          "Actiepunten en besluiten structureren",
          "Verslagen opslaan of doorzetten naar bestaande systemen",
        ],
      },
      {
        slug: "aitje-prepper",
        title: "AITJE Prepper",
        status: "planned",
        summary:
          "Een zelfstandig device met offline kennis, kaarten en cursussen voor situaties waarin een netwerk niet beschikbaar is.",
        audience:
          "Voor mensen en organisaties die belangrijke informatie ook zonder internet toegankelijk willen houden.",
        highlights: [
          "Offline kennis en naslaginformatie",
          "Kaarten en cursussen op een eigen device",
          "Eenmalige aanschaf zonder verplicht abonnement",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Prepper laat zien hoe AITJE hardware, software, modellen en content samenbrengt tot een zelfstandig product dat bruikbaar blijft wanneer internet wegvalt.",
        useCases: [
          "Belangrijke kennis offline raadplegen",
          "Kaarten en instructies zonder netwerk gebruiken",
          "Leren en voorbereiden met een zelfstandig device",
        ],
      },
      {
        slug: "aitje-3d",
        title: "AITJE 3D",
        status: "planned",
        summary:
          "Een product voor 3D-werk met lokaal geoptimaliseerde modellen en tooling op passende hardware.",
        audience:
          "Voor makers en teams die 3D met AI willen gebruiken zonder volledig afhankelijk te zijn van abonnementen per gebruiker.",
        highlights: [
          "Geoptimaliseerde modellen voor 3D-werk",
          "Software en hardware als één werkende omgeving",
          "Meer grip op bestanden, kosten en capaciteit",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE 3D wordt een samengestelde werkomgeving waarin modellen, interface, beheer en hardware op elkaar zijn afgestemd voor praktisch 3D-werk.",
        useCases: [
          "3D-assets genereren en bewerken",
          "Lokale modellen inzetten in creatieve workflows",
          "Een vaste 3D-omgeving voor een team inrichten",
        ],
      },
      {
        slug: "aitje-beeld",
        title: "AITJE Beeld",
        status: "planned",
        summary:
          "Een eigen omgeving voor beeldgeneratie en beeldbewerking met modellen, interface en hardware die op elkaar zijn afgestemd.",
        audience:
          "Voor makers en organisaties die beeldmateriaal met AI willen maken met meer grip op data, modellen en gebruikskosten.",
        highlights: [
          "Genereren en bewerken in één omgeving",
          "Modellen afgestemd op het gewenste beeldwerk",
          "Lokale verwerking waar dat passend is",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Beeld combineert generatieve beeldmodellen, een bruikbare interface en passende rekenkracht tot een product voor dagelijks creatief werk.",
        useCases: [
          "Nieuwe beelden en varianten genereren",
          "Bestaand materiaal aanpassen of verrijken",
          "Een beheersbare beeldworkflow voor een team opzetten",
        ],
      },
      {
        slug: "aitje-video",
        title: "AITJE Video",
        status: "planned",
        summary:
          "Een geïntegreerde omgeving voor videobewerking en generatieve AI op eigen of passend beheerde rekenkracht.",
        audience:
          "Voor makers en organisaties die AI in hun videowerk willen toepassen met meer controle over wachttijd, credits en materiaal.",
        highlights: [
          "Videobewerking en generatie gecombineerd",
          "Renderen op passende eigen rekenkracht",
          "Werkflows afgestemd op het team",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Video brengt modellen, bewerking, rendering en beheer samen in een geoptimaliseerde omgeving voor AI-ondersteund videowerk.",
        useCases: [
          "Videomateriaal genereren en bewerken",
          "Terugkerende videostappen automatiseren",
          "Een vaste creatieve omgeving zonder creditsysteem opzetten",
        ],
      },
      {
        slug: "aitje-muziek",
        title: "AITJE Muziek",
        status: "planned",
        summary:
          "Een product voor het maken en bewerken van muziek, zang en loops met een eigen geoptimaliseerde AI-omgeving.",
        audience:
          "Voor muzikanten, makers en organisaties die generatieve audio willen gebruiken met meer grip op bronmateriaal en werkwijze.",
        highlights: [
          "Muziek, zang en loops in één omgeving",
          "Modellen en interface afgestemd op audiowerk",
          "Meer controle over uploads en creatieve bestanden",
        ],
        cta: "Bekijk product",
        intro:
          "AITJE Muziek combineert audiomodellen, software en passende hardware tot een praktische omgeving voor generatieve muziekproductie.",
        useCases: [
          "Complete nummers en muzikale ideeën genereren",
          "Zang, stems en loops maken of bewerken",
          "Een eigen AI-audiowerkplek voor creatieve productie inrichten",
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
          "In development for teams that want to work with local or controlled coding agents on code, scripts, tooling and technical changes.",
        audience:
          "For organizations and development teams that want to use AI in software development without full dependence on external coding platforms.",
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
      {
        slug: "aitje-manager",
        title: "AITJE Manager",
        status: "planned",
        summary:
          "A personal AI agent that carries out tasks within agreed boundaries and helps handle recurring work.",
        audience:
          "For organizations that want to automate recurring tasks while deciding what an AI agent may and may not do.",
        highlights: [
          "Executes tasks within defined boundaries",
          "Connects to existing workflows and systems",
          "Self-managed where the use case allows it",
        ],
        cta: "View product",
        intro:
          "AITJE Manager brings models, tools and workflows together in a personal agent that can prepare or execute work. Its setup depends on the tasks, systems, risks and environment of the organization.",
        useCases: [
          "Handling recurring administrative tasks",
          "Collecting information and preparing actions",
          "Monitoring workflows and starting follow-up steps",
        ],
      },
      {
        slug: "aitje-notulist",
        title: "AITJE Notulist",
        status: "planned",
        summary:
          "A solution for recording, transcribing, summarizing and forwarding conversations and meetings.",
        audience:
          "For teams that want to spend less time on minutes and process reports directly in their own work environment.",
        highlights: [
          "Recording and transcription",
          "Summaries in a consistent structure",
          "Results forwarded to your own systems",
        ],
        cta: "View product",
        intro:
          "AITJE Notulist turns a conversation into a useful report and can send agreed follow-up steps to the tools where the team works, using a setup that fits privacy, quality and management needs.",
        useCases: [
          "Automatically processing meetings",
          "Structuring actions and decisions",
          "Saving or forwarding reports to existing systems",
        ],
      },
      {
        slug: "aitje-prepper",
        title: "AITJE Prepper",
        status: "planned",
        summary:
          "A standalone device with offline knowledge, maps and courses for situations where a network is unavailable.",
        audience:
          "For people and organizations that want important information to remain accessible without internet.",
        highlights: [
          "Offline knowledge and reference material",
          "Maps and courses on a dedicated device",
          "One-time purchase without a required subscription",
        ],
        cta: "View product",
        intro:
          "AITJE Prepper demonstrates how AITJE combines hardware, software, models and content into a standalone product that remains useful when internet access fails.",
        useCases: [
          "Accessing important knowledge offline",
          "Using maps and instructions without a network",
          "Learning and preparing with a standalone device",
        ],
      },
      {
        slug: "aitje-3d",
        title: "AITJE 3D",
        status: "planned",
        summary:
          "A product for 3D work with locally optimized models and tools on suitable hardware.",
        audience:
          "For creators and teams that want to use AI for 3D without full dependence on per-seat subscriptions.",
        highlights: [
          "Optimized models for 3D work",
          "Software and hardware as one working environment",
          "More control over files, costs and capacity",
        ],
        cta: "View product",
        intro:
          "AITJE 3D will be a composed workspace in which models, interface, management and hardware are aligned for practical 3D work.",
        useCases: [
          "Generating and editing 3D assets",
          "Using local models in creative workflows",
          "Setting up a consistent 3D environment for a team",
        ],
      },
      {
        slug: "aitje-beeld",
        title: "AITJE Image",
        status: "planned",
        summary:
          "A dedicated environment for image generation and editing with aligned models, interface and hardware.",
        audience:
          "For creators and organizations that want to produce images with AI while retaining more control over data, models and usage costs.",
        highlights: [
          "Generation and editing in one environment",
          "Models tailored to the desired image work",
          "Local processing where appropriate",
        ],
        cta: "View product",
        intro:
          "AITJE Image combines generative image models, a usable interface and suitable compute into a product for everyday creative work.",
        useCases: [
          "Generating new images and variations",
          "Editing or enriching existing material",
          "Creating a manageable image workflow for a team",
        ],
      },
      {
        slug: "aitje-video",
        title: "AITJE Video",
        status: "planned",
        summary:
          "An integrated environment for video editing and generative AI using dedicated or suitably managed compute.",
        audience:
          "For creators and organizations that want AI in their video work with more control over queues, credits and material.",
        highlights: [
          "Video editing and generation combined",
          "Rendering on suitable dedicated compute",
          "Workflows tailored to the team",
        ],
        cta: "View product",
        intro:
          "AITJE Video brings models, editing, rendering and management together in an optimized environment for AI-assisted video work.",
        useCases: [
          "Generating and editing video material",
          "Automating recurring video steps",
          "Creating a consistent creative environment without a credit system",
        ],
      },
      {
        slug: "aitje-muziek",
        title: "AITJE Music",
        status: "planned",
        summary:
          "A product for creating and editing music, vocals and loops in a dedicated optimized AI environment.",
        audience:
          "For musicians, creators and organizations that want generative audio with more control over source material and workflow.",
        highlights: [
          "Music, vocals and loops in one environment",
          "Models and interface tailored to audio work",
          "More control over uploads and creative files",
        ],
        cta: "View product",
        intro:
          "AITJE Music combines audio models, software and suitable hardware into a practical environment for generative music production.",
        useCases: [
          "Generating full songs and musical ideas",
          "Creating or editing vocals, stems and loops",
          "Setting up a dedicated AI audio workspace for creative production",
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
