export type HardwareSection = {
  title: string;
  content: string;
};

export type HardwareItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  sections: HardwareSection[];
};

export const hardwareCatalog: HardwareItem[] = [
  {
    slug: "aitje-assistent",
    title: "AITJE Assistant",
    shortDescription:
      "Local AI assistant on proprietary hardware with knowledge base, offline accessibility and API access.",
    heroDescription:
      "AITJE Assistant is a mini computer with our own Operating System, a local LLM and knowledge base functionality for organizations that want control over data, costs and continuity.",
    image: "/images/aitje-cubes.png",
    sections: [
      {
        title: "What do you use this product for?",
        content:
          "For internal knowledge queries, document support, local chat flows and API links within your own environment, even when Internet connections are unstable.",
      },
      {
        title: "Why local?",
        content:
          "You process sensitive information within your own infrastructure and are less dependent on external AI platforms and their price changes or outages.",
      },
      {
        title: "Implementation",
        content:
          "We help with installation, permissions, knowledge base sync and technical setup so teams can start immediately with a stable foundation.",
      },
    ],
  },
  {
    slug: "aitje-custom",
    title: "AITJE Custom",
    shortDescription:
      "Personalized AI solution for situations where standard hardware does not exactly fit.",
    heroDescription:
      "For organizations that need just more specs or a specific offline workflow at the hardware level.",
    image: "/images/custom-suited.png",
    sections: [
      {
        title: "What makes this customization?",
        content:
          "We tailor hardware choice, model deployment, storage, network architecture and management flows to your practice rather than a generic template.",
      },
      {
        title: "Integration with existing systems",
        content:
          "Custom pathways are appropriate for organizations that need to interface with existing applications, APIs, document flows and security guidelines.",
      },
      {
        title: "Transfer and maintenance",
        content:
          "Where desired, we transfer the solution to your own management team, web builder or application administrator, with clear documentation and agreements.",
      },
    ],
  },
];
