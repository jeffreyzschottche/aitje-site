export type CaseItem = {
  slug: string;
  title: string;
  company: string;
  person: string;
  role: string;
  rating: string;
  quote: string;
  summary: string;
  solutions: string[];
  details: string[];
  image: string;
};

export const cases: CaseItem[] = [
  {
    slug: "rijschool-whatsapp-notulist",
    title: "Rijschool automatiseert lesverslagen via WhatsApp",
    company: "Rijschool Younes",
    person: "Younes A.",
    role: "Rijschoolhouder",
    rating: "★★★★★",
    quote:
      "Het team van AITJE heeft voor mijn rijschool een slimme oplossing gebouwd. Leerlingen krijgen na elke les automatisch een heldere samenvatting van hun voortgang en verbeterpunten.",
    summary:
      "De rijschoolhouder spreekt na een les korte voice memo's in via WhatsApp. AITJE Notulist verwerkt de audio en stuurt een duidelijke samenvatting terug.",
    solutions: ["Software op maat", "AITJE Notulist"],
    details: [
      "Spraakmemo via WhatsApp wordt automatisch verwerkt tot samenvatting",
      "Bij een duimpje-omhoog vraagt de bot direct naar ontvanger",
      "Samenvatting wordt daarna gedeeld via WhatsApp of direct naar 06-nummer",
      "Minder handmatig werk en sneller duidelijke feedback naar leerlingen",
    ],
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "boekenwinkel-rag-isbn",
    title: "Boekenwinkel met RAG-chat en ISBN-flow",
    company: "Boekenwinkel op maat",
    person: "Marieke van Dam",
    role: "Winkelcoordinator",
    rating: "★★★★★",
    quote:
      "Met de RAG-chat en ISBN scanner vinden we sneller de juiste metadata en kunnen medewerkers nicheboeken veel beter terugvinden.",
    summary:
      "Voor de boekenwinkel bouwden we een maatwerk RAG-chat gekoppeld aan documenten en een ISBN-scan flow voor snelle, consistente boekinvoer.",
    solutions: ["RAG-chat op maat", "ISBN scanner", "Kennisbank-koppeling"],
    details: [
      "Elk boek wordt gescand en direct verrijkt met titel, genre en relevante metadata",
      "Gecontroleerde output kan meteen naar het Excel-overzicht worden gezet",
      "AI adviseert op basis van huidige indeling het beste schap en positie",
      "Ook vage titels en nicheboeken blijven sneller vindbaar voor medewerkers",
    ],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "it-beheer-lokale-coding-agents",
    title: "IT-team draait coding agents lokaal bij internetstoringen",
    company: "MKB IT-omgeving",
    person: "Dennis Mulder",
    role: "IT-beheerder MKB",
    rating: "★★★★★",
    quote:
      "Voor ons was lokale AI de doorslag. AITJE is overzichtelijk, werkt goed binnen het eigen netwerk en geeft ons meer controle over data en gebruikskosten.",
    summary:
      "Door terugkerende internetproblemen kozen ze voor een lokale AITJE Assistent met maatwerk coding agents en interne kennis van hun codebase.",
    solutions: [
      "AITJE Assistent op maat",
      "Lokale coding agents",
      "Interne kennisintegratie",
    ],
    details: [
      "Agents zijn ingericht op hun eigen tech-stack en projectdocumentatie",
      "Teams kunnen blijven doorwerken zonder afhankelijkheid van internet",
      "Minder gevoelige data verlaat het netwerk, met meer controle voor IT",
      "Snellere output bij standaardtaken en betere consistentie in codewerk",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "thuiszorg-voice-rapportage",
    title: "Thuiszorg vult rapportage voice agent",
    company: "Zorgpraktijk / thuiszorg",
    person: "Nadia El Amrani",
    role: "Operationeel manager zorgpraktijk",
    rating: "★★★★★",
    quote:
      "De combinatie van gesprekken opnemen, samenvatten en informatie gestructureerd terugkrijgen werkt hier erg goed.",
    summary:
      "Na elk bezoek moeten zorgmedewerkers dezelfde rapportage invullen. Met een mobiele voice agent beantwoorden ze de vragen onderweg naar de volgende client.",
    solutions: ["Mobiele app op maat", "Voice agent", "Document-output flow"],
    details: [
      "Voice agent stelt exact de benodigde rapportagevragen in de juiste volgorde",
      "Medewerker bepaalt zelf wanneer de agent naar de volgende vraag gaat",
      "Volledig document wordt automatisch opgeleverd als bijlage voor het systeem",
      "Minder administratietijd en betere overdracht tussen zorgmomenten",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
  },
];
