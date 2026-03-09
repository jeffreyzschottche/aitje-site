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
    title: "AITJE Assistent OS",
    shortDescription:
      "Centrale beheerlaag voor API, toegang, apparaten en lokale samenwerking binnen AITJE.",
    heroDescription:
      "AITJE Assistent OS vormt het centrale besturingssysteem achter de AITJE-omgeving en brengt hardware, AI-functionaliteit en aangesloten apparaten samen in een beheersbare lokale basis.",
    image: "/images/OS_Screenshot.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "Centrale regie",
        content:
          "Met deze software beheer je de API, stel je toegang in en bepaal je welke apparaten verbinding mogen maken met de hardware waarop AITJE draait. Zo ontstaat er een centrale plek van waaruit communicatie, toegang en samenwerking tussen verschillende devices wordt geregeld.",
      },
      {
        title: "Lokale samenwerking",
        content:
          "Binnen het lokale netwerk laat AITJE Assistent OS andere apparaten eenvoudig met de hardware communiceren. Denk aan laptops, tablets of andere systemen die via LAN gebruikmaken van dezelfde slimme assistent, data of functionaliteiten.",
      },
      {
        title: "Beheer van de omgeving",
        content:
          "De software biedt beheermogelijkheden voor instellingen, apparaten, kennisbronnen en ondersteuning, zodat de hele omgeving niet alleen toegankelijk is, maar ook praktisch beheersbaar blijft.",
      },
      {
        title: "Waarom dit belangrijk is",
        content:
          "Kort gezegd is AITJE Assistent OS de schakel tussen de hardware, de AI-functionaliteit en de apparaten eromheen: een stabiele en gebruiksvriendelijke basis die zorgt dat alles lokaal, gecontroleerd en soepel samenwerkt.",
      },
    ],
  },
  {
    slug: "aitje-assistent-client",
    title: "AITJE Assistent Client",
    shortDescription:
      "Clientlaag voor laptops, tablets en telefoons die lokaal met de AITJE-omgeving verbinden.",
    heroDescription:
      "De AITJE Assistent Client maakt AITJE direct toegankelijk op meerdere apparaten binnen het lokale netwerk, terwijl gebruik, toegang en communicatie lokaal en gecontroleerd blijven.",
    image: "/images/Client_Screenshot.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "Direct verbonden",
        content:
          "De AITJE Client verbindt laptops, tablets en telefoons binnen het lokale netwerk direct met de AITJE-omgeving. Gebruikers loggen in op het juiste device en kunnen meteen met de assistent aan de slag.",
      },
      {
        title: "Praktisch gebruik",
        content:
          "Via de lokale API kunnen gebruikers vragen stellen, documenten delen en werken met de assistent vanaf verschillende apparaten, zonder afhankelijk te zijn van een externe cloudomgeving.",
      },
      {
        title: "Waarom dit werkt",
        content:
          "De client maakt AITJE toegankelijk op meerdere devices tegelijk, terwijl alles lokaal, overzichtelijk en gecontroleerd blijft. Zo combineer je gebruiksgemak met grip op toegang en infrastructuur.",
      },
    ],
  },
  {
    slug: "aitje-assistent-kennisbank",
    title: "AITJE Assistent Kennisbank",
    shortDescription:
      "Kennisbank voor documenten, structuur, samenhang en gecontroleerde synchronisatie binnen AITJE.",
    heroDescription:
      "De Kennisbank helpt organisaties om documenten en kennis slim te verwerken, logisch te ordenen en om te zetten in een goed doorzoekbare en bruikbare kennisbasis.",
    image: "/images/Kennisbank_Screenshot_1.jpeg",
    imageFit: "contain",
    sections: [
      {
        title: "Van bestanden naar kennis",
        content:
          "In deze omgeving kunnen bestanden worden toegevoegd, geordend en verrijkt, zodat losse informatie verandert in een goed doorzoekbare en bruikbare kennisbasis. Daarmee wordt het eenvoudiger om content niet alleen op te slaan, maar ook logisch te structureren en later opnieuw in te zetten.",
      },
      {
        title: "Meer dan documentbeheer",
        content:
          "De software brengt verbanden aan tussen documenten en onderdelen daarvan, biedt inzicht in structuur, prioriteit en samenhang, en maakt het mogelijk om kennis gecontroleerd te exporteren en te synchroniseren.",
      },
      {
        title: "Praktische werkomgeving",
        content:
          "Zo ontstaat een omgeving waarin informatie beter beheerd, sneller teruggevonden en eenvoudiger gedeeld kan worden. Teams krijgen meer overzicht en kunnen met minder losse documenten werken.",
      },
      {
        title: "Waarom dit belangrijk is",
        content:
          "Kort gezegd is de Kennisbank een slimme schakel tussen bronbestanden en een bruikbare digitale kennisomgeving: ontworpen om informatie meer waarde, meer context en meer samenhang te geven.",
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
