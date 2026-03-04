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
    title: "AITJE Assistent",
    shortDescription:
      "Lokale AI-assistent op eigen hardware met kennisbank, offline bereikbaarheid en API-toegang.",
    heroDescription:
      "AITJE Assistent is een mini computer met ons eigen OS, een lokale LLM en kennisbankfunctionaliteit voor organisaties die controle willen over data, kosten en continuiteit.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Waarvoor gebruik je dit product?",
        content:
          "Voor interne kennisvragen, documentondersteuning, lokale chatflows en API-koppelingen binnen je eigen omgeving, ook wanneer internetverbindingen instabiel zijn.",
      },
      {
        title: "Waarom lokaal?",
        content:
          "Je verwerkt gevoelige informatie binnen je eigen infrastructuur en bent minder afhankelijk van externe AI-platformen en hun prijswijzigingen of storingen.",
      },
      {
        title: "Implementatie",
        content:
          "We helpen met installatie, rechten, kennisbanksync en technische inrichting zodat teams direct kunnen starten met een stabiele basis.",
      },
    ],
  },
  {
    slug: "aitje-notulist",
    title: "AITJE Notulist",
    shortDescription:
      "Hardware-oplossing voor het lokaal opnemen, verwerken en afleveren van gesprekken en samenvattingen.",
    heroDescription:
      "AITJE Notulist is bedoeld voor organisaties die gesprekken structureel willen vastleggen en verwerken met controle over data en afleverkanalen.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Voor wie is Notulist bedoeld?",
        content:
          "Voor teams die interviews, intakegesprekken, vergaderingen of klantcontact gestructureerd willen omzetten naar output zoals samenvattingen en transcripties.",
      },
      {
        title: "Beheer en ondersteuning",
        content:
          "AITJE Notulist kan worden gecombineerd met SLA, monitoring en periodieke optimalisatie voor stabiele verwerking en betrouwbare output.",
      },
      {
        title: "Opschalen",
        content:
          "Je kunt stapsgewijs opschalen met extra integraties, afleverflows en maatwerk zonder je hele infrastructuur te vervangen.",
      },
    ],
  },
  {
    slug: "aitje-custom",
    title: "AITJE Custom",
    shortDescription:
      "Maatwerk hardware-oplossing voor specifieke use-cases, performanceprofielen en integratiebehoeften.",
    heroDescription:
      "AITJE Custom is voor organisaties die een lokale edge AI-oplossing nodig hebben die exact aansluit op hun technische context en operationele doelen.",
    image: "/images/aitje-product.png",
    sections: [
      {
        title: "Wat maakt dit maatwerk?",
        content:
          "We stemmen hardwarekeuze, modelinzet, opslag, netwerkarchitectuur en beheerflows af op jullie praktijk in plaats van op een generiek template.",
      },
      {
        title: "Integratie met bestaande systemen",
        content:
          "Custom trajecten zijn geschikt voor organisaties die moeten koppelen met bestaande applicaties, API's, documentenstromen en beveiligingsrichtlijnen.",
      },
      {
        title: "Overdracht en onderhoud",
        content:
          "Waar gewenst dragen we de oplossing over aan je eigen beheerteam, webbouwer of applicatiebeheerder, met duidelijke documentatie en afspraken.",
      },
    ],
  },
];
