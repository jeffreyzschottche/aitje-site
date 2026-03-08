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
      "AITJE Assistent is een mini computer met ons eigen Operating System, een lokale LLM en kennisbankfunctionaliteit voor organisaties die controle willen over data, kosten en continuiteit.",
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
    slug: "aitje-custom",
    title: "AITJE Custom",
    shortDescription:
      "Persoonlijke AI-oplossing voor situaties waar standaardhardware niet precies past.",
    heroDescription:
      "Voor organisaties die net meer specs of een specifieke offline workflow nodig hebben op hardware-niveau.",
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
