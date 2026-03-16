export type SoftwareSection = {
  title: string;
  content: string;
};

export type SoftwareItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
  galleryImages?: string[];
  sections: SoftwareSection[];
};

export const softwareCatalog: SoftwareItem[] = [
  {
    slug: "aitje-assistent-os",
    title: "AITJE Assistant OS",
    shortDescription:
      "Central management layer for API, access, devices and local collaboration within AITJE.",
    heroDescription:
      "AITJE Assistant OS is the central operating system behind the AITJE environment, bringing together hardware, AI functionality and connected devices into a manageable local base.",
    image: "/images/OS_Screenshot.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "Central direction",
        content:
          "With this software you manage the API, set access and determine which devices are allowed to connect to the hardware running AITJE. This creates a central place from which communication, access and collaboration between different devices is controlled.",
      },
      {
        title: "Local cooperation",
        content:
          "Within the local network, AITJE Assistant OS allows other devices to easily communicate with the hardware. Think laptops, tablets or other systems that use the same smart assistant, data or functionalities via LAN.",
      },
      {
        title: "Management of the environment",
        content:
          "The software provides management capabilities for settings, devices, knowledge resources and support, so that the entire environment is not only accessible, but also remains practically manageable.",
      },
      {
        title: "Why this is important",
        content:
          "In short, AITJE Assistant OS is the link between the hardware, the AI functionality and the devices around it: a stable and user-friendly base that ensures everything works together locally, controlled and smoothly.",
      },
    ],
  },
  {
    slug: "aitje-assistent-client",
    title: "AITJE Assistant Client",
    shortDescription:
      "Client layer for laptops, tablets and phones that connect locally to the AITJE environment.",
    heroDescription:
      "The AITJE Assistant Client makes AITJE directly accessible on multiple devices within the local network, while usage, access and communication remain local and controlled.",
    image: "/images/Client_Screenshot.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "Directly connected",
        content:
          "The AITJE Client connects laptops, tablets and phones within the local network directly to the AITJE environment. Users log in to the appropriate device and can immediately start working with the assistant.",
      },
      {
        title: "Practical use",
        content:
          "Through the local API, users can ask questions, share documents and work with the assistant from different devices, without depending on a remote cloud environment.",
      },
      {
        title: "Why this works",
        content:
          "The client makes AITJE accessible on multiple devices simultaneously, while everything remains local, clear and controlled. This combines ease of use with control over access and infrastructure.",
      },
    ],
  },
  {
    slug: "aitje-assistent-kennisbank",
    title: "AITJE Assistant Knowledge Base",
    shortDescription:
      "Knowledge base for documents, structure, consistency and controlled synchronization within AITJE.",
    heroDescription:
      "The Knowledge Base helps organizations process documents and knowledge intelligently, organize them logically and convert them into a searchable and usable knowledge base.",
    image: "/images/Kennisbank_Screenshot_1.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "From files to knowledge",
        content:
          "In this environment, files can be added, organized and enriched, turning loose information into a searchable and usable knowledge base. This makes it easier not only to store content, but also to structure it logically and repurpose it later.",
      },
      {
        title: "More than document management",
        content:
          "The software establishes links between documents and their components, provides insight into structure, priority and consistency, and allows for controlled export and synchronization of knowledge.",
      },
      {
        title: "Practical work environment",
        content:
          "This creates an environment where information can be better managed, retrieved faster and shared more easily. Teams get a better overview and can work with fewer separate documents.",
      },
      {
        title: "Why this is important",
        content:
          "In short, the Knowledge Bank is a smart link between source files and a usable digital knowledge environment: designed to give information more value, more context and more coherence.",
      },
    ],
  },
  {
    slug: "aitje-notulist",
    title: "AITJE Secretary",
    shortDescription:
      "Management environment for recordings, summaries and delivery flows of AITJE Notetaker.",
    heroDescription:
      "With AITJE Secretary, you control recording workflows, output settings and distribution to your own environment from one central management layer.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "What are you managing here?",
        content:
          "Recording settings, summary profiles, delivery channels and processing paths for different teams and usage scenarios.",
      },
      {
        title: "Why this is important",
        content:
          "You maintain control over how conversations are processed and shared, with clear control over data flows and output quality.",
      },
    ],
  },
  {
    slug: "wordpress-ai-search-overview",
    title: "WordPress AI Search Overview",
    shortDescription:
      "Smart search layer for WordPress content with AI-assisted relevance and summary.",
    heroDescription:
      "This solution enables content in WordPress to be more quickly findable and usable with AI search functionality and contextual answers.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "What does it do?",
        content:
          "WordPress AI Search Overview combines semantic search with summaries, allowing users to find relevant information faster than with traditional search fields.",
      },
      {
        title: "For whom.",
        content:
          "For organizations with many content pages, knowledge articles or documentation that must remain organized and quickly searchable.",
      },
    ],
  },
  {
    slug: "wordpress-ai-chat",
    title: "WordPress AI Chat",
    shortDescription:
      "An AI chat layer on WordPress that answers questions based on your own content and knowledge.",
    heroDescription:
      "WordPress AI Chat brings a contextual assistant into your website or environment, providing visitors and teams with relevant answers instantly.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "What does it do?",
        content:
          "The chat uses selected content as a knowledge base and provides answers in natural language, including summaries and references.",
      },
      {
        title: "Implementation",
        content:
          "We set up the chat for your use case and determine together what content sources and security settings are needed.",
      },
    ],
  },
  {
    slug: "wordpress-alt-tekst-generator",
    title: "WordPress Alt Text Generator",
    shortDescription:
      "Automatic alt text generation for images in WordPress to improve accessibility and SEO.",
    heroDescription:
      "WordPress Alt Text Generator helps teams generate consistent, usable alt texts and reduce manual work.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Why this is important",
        content:
          "Good alt text improves accessibility and assists search engines in understanding visual content.",
      },
      {
        title: "How it works",
        content:
          "Based on metadata and AI analysis, suggestions are generated that editors can accept or modify.",
      },
    ],
  },
  {
    slug: "promptpaleis",
    title: "PromptPaleis",
    shortDescription:
      "Dutch marketplace for pre-made prompts and guides to get more out of AI.",
    heroDescription:
      "PromptPaleis offers practical prompts, examples and guides for teams who want to get value from LLMs faster.",
    image:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "What do you find there?",
        content:
          "Pre-made prompts, frameworks and practical guides that can be used immediately in operational, commercial and administrative workflows.",
      },
      {
        title: "For whom",
        content:
          "For organizations that want to standardize prompt usage and get teams working faster with consistent output.",
      },
    ],
  },
  {
    slug: "raad-van-bestuur",
    title: "Board of Directors",
    shortDescription:
      "Software solution for board-level overview, decision-making and knowledge support.",
    heroDescription:
      "Board of Directors is aimed at organizations that want to bring together governance information, documents and context faster for better decision-making.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Target",
        content:
          "Support board and management with quick access to relevant files, summaries and context without fragmented information flows.",
      },
      {
        title: "Practical use",
        content:
          "Deployed for preparation of consultations, decision-making processes and structuring internal board knowledge.",
      },
    ],
  },
];
