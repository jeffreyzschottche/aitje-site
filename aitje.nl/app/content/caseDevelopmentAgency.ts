import type { CaseStudy } from "./types";

export const developmentAgencyCase: CaseStudy = {
  slug: "chatgpt-of-codex-in-je-eigen-organisatie",
  label: "Praktijkcase",
  title: "Tien modellen. Eén team. Eigen regie.",
  context: "Development agency / Assistent, Coder & modelbeheer",
  summary: "Voor een development agency richtte AITJE een gezamenlijke AI-omgeving in met Assistent, Coder en tien modellen om uit te kiezen. Een gedeelde tokenpot van €350 per maand vervangt negen abonnementen van €200. Via Asana zijn modelgebruik en tokenkosten per taak terug te vinden.",
  icon: "code",
  image: "/img/redesign/case-chatgpt.webp",
  background: "/img/cases/bg-case-chatgpt.webp",
  photoAlt: "Een lichte kantoorruimte met werkplekken voor het developmentteam",
  offer: [
    { name: "AITJE Assistent", to: "/producten/aitje-assistent" },
    { name: "AITJE Coder", to: "/producten/aitje-coder" },
    { name: "Token management & optimalisatie", to: "/diensten/token-management-en-optimalisatie" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  developmentAgency: {
    hardwareImage: "/images/assistant/device-plus-with-logo.png",
    modelCount: 10,
    costs: { subscriptions: 9, subscriptionMonthlyEur: 200, sharedMonthlyEur: 350 },
    intro: [
      "De developers gebruikten AI de hele werkdag, maar losse abonnementen maakten het gebruik duur en versnipperd. Negen abonnementen van €200 betekenden €1.800 per maand. Niet iedere taak vraagt hetzelfde model, terwijl een storing of gebruikslimiet het werk bij één aanbieder kan onderbreken.",
      "AITJE installeerde Assistent en Coder op een BOSGAME M5 met een aanvullende server. Een gekoppeld LLM-managementsysteem brengt lokale modellen en externe model-API’s samen. Developers kiezen uit tien modellen en werken met één gezamenlijk API-budget. De projectkennis, de code en het modelgebruik komen zo in één werkwijze bijeen.",
    ],
    tasks: [
      { label: "Project bespreken", question: "Hoe past deze nieuwe feature in de architectuur van ons project?", route: "AITJE Assistent → projectcontext", context: "De chat gebruikt de documentatie en afspraken van het project om de vraag uit te werken en context voor de coding agent voor te bereiden.", result: "Een uitgewerkte opdracht voor Coder, met relevante achtergrond uit dezelfde projectomgeving." },
      { label: "Gericht codewerk", question: "Pas dit component aan volgens de conventies in onze codebase.", route: "AITJE Coder → lokaal codingmodel", context: "Een gespecialiseerd open-source model krijgt de skills, documentatie en werkwijze van het bureau mee. Het draait op de BOSGAME of de eigen server.", result: "Codewerk met de juiste projectcontext, zonder externe kosten per token en ook bruikbaar zonder internet." },
      { label: "Complexe taak", question: "Onderzoek deze lastige fout en werk een oplossing uit in de repository.", route: "AITJE Coder → geselecteerde model-API", context: "De developer kan voor een zwaardere taak een extern model kiezen, bijvoorbeeld via DeepSeek, Claude of Codex. OpenCode en OpenRouter verbinden de codingomgeving met de beschikbare modellen.", result: "De modelcalls gebruiken het gedeelde budget; het gekozen model en de tokenkosten blijven gekoppeld aan de Asana-taak." },
    ],
    workflow: [
      { title: "Bespreken", icon: "message", text: "De Assistent helpt de developer nadenken over de vraag en bereidt de context per project voor." },
      { title: "Context meegeven", icon: "library", text: "Skills, documentatie en codebase-afspraken geven Coder de werkwijze van het bureau mee." },
      { title: "Model inzetten", icon: "workflow", text: "Het modelbeheer verbindt OpenCode met lokale modellen en externe API’s via OpenRouter. De taak bepaalt welke route past." },
      { title: "Kosten terugzien", icon: "gauge", text: "De koppeling met Asana maakt zichtbaar welk model is gebruikt en hoeveel tokens de uitvoering heeft gekost." },
    ],
  },
};
