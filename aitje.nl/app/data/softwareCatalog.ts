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
  sections: SoftwareSection[];
};

export const softwareCatalog: SoftwareItem[] = [
  {
    slug: "aitje-assistent-os",
    title: "AITJE Assistent OS",
    shortDescription:
      "Het besturingssysteem van AITJE Assistent voor lokale AI, beheer en stabiele inzet.",
    heroDescription:
      "AITJE Assistent OS vormt de basislaag voor lokale AI-verwerking, accountbeheer, netwerkinstellingen en koppelingen binnen je organisatieomgeving.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Rol in de stack",
        content:
          "Het OS verzorgt de technische basis waarop lokale LLM's, kennisbankprocessen en API-koppelingen betrouwbaar kunnen draaien.",
      },
      {
        title: "Praktisch beheer",
        content:
          "Gericht op organisaties die controle willen over updates, gebruikersrechten, netwerktoegang en operationele stabiliteit.",
      },
    ],
  },
  {
    slug: "aitje-assistent-client",
    title: "AITJE Assistent Client",
    shortDescription:
      "Client-interface voor medewerkers en teams om lokaal met AITJE Assistent te werken.",
    heroDescription:
      "De AITJE Assistent Client biedt een praktische werklaag voor chat, kennisvragen en output binnen desktop- en netwerkcontexten.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Gebruikerservaring",
        content:
          "De client is gemaakt voor dagelijks gebruik door teams die snel antwoorden, samenvattingen en contextuele output nodig hebben.",
      },
      {
        title: "Integratie",
        content:
          "In te richten op je workflow met passende rechten, koppelingen en outputformaten per rol of afdeling.",
      },
    ],
  },
  {
    slug: "aitje-assistent-kennisbank",
    title: "AITJE Assistent Kennisbank",
    shortDescription:
      "Kennislaag voor documenten, context en zoekbaarheid binnen AITJE Assistent.",
    heroDescription:
      "De kennisbankmodule maakt het mogelijk om interne documenten en context veilig te structureren, embeden en ontsluiten voor relevante AI-antwoorden.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Kernfunctie",
        content:
          "Documenten worden geordend en verwerkt in een zoekbare kennislaag, zodat antwoorden beter aansluiten op je eigen organisatiecontext.",
      },
      {
        title: "Beheer en versiecontrole",
        content:
          "In combinatie met versiebeheer en syncflows kun je kennisupdates gecontroleerd uitrollen en bij fouten terugzetten.",
      },
    ],
  },
  {
    slug: "aitje-notulist",
    title: "AITJE Notulist",
    shortDescription:
      "Beheeromgeving voor opnames, samenvattingen en afleverflows van AITJE Notulist.",
    heroDescription:
      "Met AITJE Notulist stuur je opnameworkflows, outputinstellingen en distributie naar je eigen omgeving vanuit één centrale beheerlaag.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Wat beheer je hier?",
        content:
          "Opname-instellingen, samenvattingsprofielen, afleverkanalen en verwerkingstrajecten voor verschillende teams en gebruiksscenario's.",
      },
      {
        title: "Waarom dit belangrijk is",
        content:
          "Je houdt grip op hoe gesprekken worden verwerkt en gedeeld, met duidelijke controle op datastromen en outputkwaliteit.",
      },
    ],
  },
  {
    slug: "wordpress-ai-search-overview",
    title: "WordPress AI Search Overview",
    shortDescription:
      "Slimme zoeklaag voor WordPress-content met AI-ondersteunde relevantie en samenvatting.",
    heroDescription:
      "Deze oplossing maakt het mogelijk om content in WordPress sneller vindbaar en bruikbaarder te maken met AI-zoekfunctionaliteit en contextuele antwoorden.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Wat doet het?",
        content:
          "WordPress AI Search Overview combineert semantisch zoeken met samenvattingen, zodat gebruikers sneller relevante informatie vinden dan met traditionele zoekvelden.",
      },
      {
        title: "Voor wie?",
        content:
          "Voor organisaties met veel contentpagina's, kennisartikelen of documentatie die overzichtelijk en snel doorzoekbaar moet blijven.",
      },
    ],
  },
  {
    slug: "wordpress-ai-chat",
    title: "WordPress AI Chat",
    shortDescription:
      "Een AI-chatlaag op WordPress die vragen beantwoordt op basis van je eigen content en kennis.",
    heroDescription:
      "WordPress AI Chat brengt een contextuele assistent in je website of omgeving, zodat bezoekers en teams direct relevante antwoorden krijgen.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Wat doet het?",
        content:
          "De chat gebruikt geselecteerde content als kennisbasis en geeft antwoorden in natuurlijke taal, inclusief samenvattingen en verwijzingen.",
      },
      {
        title: "Implementatie",
        content:
          "We richten de chat in op je use case en bepalen samen welke contentbronnen en beveiligingsinstellingen nodig zijn.",
      },
    ],
  },
  {
    slug: "wordpress-alt-tekst-generator",
    title: "WordPress Alt Tekst Generator",
    shortDescription:
      "Automatische alt-tekstgeneratie voor afbeeldingen in WordPress om toegankelijkheid en SEO te verbeteren.",
    heroDescription:
      "WordPress Alt Tekst Generator helpt teams om consistente, bruikbare alt-teksten te genereren en handmatig werk te verminderen.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Waarom dit belangrijk is",
        content:
          "Goede alt-teksten verbeteren toegankelijkheid en ondersteunen zoekmachines bij het begrijpen van visuele content.",
      },
      {
        title: "Hoe werkt het",
        content:
          "Op basis van metadata en AI-analyse worden suggesties gegenereerd die redacties kunnen accepteren of aanpassen.",
      },
    ],
  },
  {
    slug: "promptpaleis",
    title: "PromptPaleis",
    shortDescription:
      "Nederlandse marktplaats voor pre-made prompts en guides om meer uit AI te halen.",
    heroDescription:
      "PromptPaleis biedt praktische prompts, voorbeelden en handleidingen voor teams die sneller waarde uit LLM's willen halen.",
    image:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Wat vind je er?",
        content:
          "Pre-made prompts, frameworks en praktische guides die direct inzetbaar zijn in operationele, commerciële en administratieve workflows.",
      },
      {
        title: "Voor wie",
        content:
          "Voor organisaties die promptgebruik willen standaardiseren en teams sneller met consistente output willen laten werken.",
      },
    ],
  },
  {
    slug: "raad-van-bestuur",
    title: "Raad van Bestuur",
    shortDescription:
      "Software-oplossing voor overzicht, besluitvorming en kennisondersteuning op bestuursniveau.",
    heroDescription:
      "Raad van Bestuur is gericht op organisaties die bestuursinformatie, documenten en context sneller willen samenbrengen voor betere besluitvorming.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        title: "Doel",
        content:
          "Bestuur en directie ondersteunen met snelle toegang tot relevante dossiers, samenvattingen en context zonder versnipperde informatiestromen.",
      },
      {
        title: "Praktisch gebruik",
        content:
          "Inzetbaar voor voorbereiding van overleggen, besluitvormingstrajecten en het structureren van interne bestuurskennis.",
      },
    ],
  },
];
