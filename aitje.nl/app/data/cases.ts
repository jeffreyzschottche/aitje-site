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
    slug: "thuiszorg-voice-rapportage",
    title: "Thuiszorg vult rapportage via voice agent",
    company: "Zorgpraktijk / thuiszorg",
    person: "Nadia El Amrani",
    role: "Operationeel manager zorgpraktijk",
    rating: "★★★★★",
    quote:
      "De combinatie van gesprekken opnemen, samenvatten en informatie gestructureerd terugkrijgen werkt hier erg goed.",
    summary:
      "Na elk bezoek starten zorgmedewerkers de rapportage via WhatsApp met een clientnummer en START RAPPORTAGE. Daarna belt de voice agent automatisch op en wordt het gesprek verwerkt in het interne systeem.",
    solutions: ["Mobiele app op maat", "Voice agent", "Document-output flow"],
    details: [
      "Medewerker start via WhatsApp door een clientnummer en START RAPPORTAGE te sturen naar het vaste nummer",
      "De voice agent belt daarna automatisch via WhatsApp en stelt exact de benodigde rapportagevragen in de juiste volgorde",
      "De medewerker bepaalt zelf wanneer de agent naar de volgende vraag gaat",
      "Gespreksdata en bestanden worden aangeleverd bij de door ons geimplementeerde API in het interne systeem",
      "Een agent schrijft de gegevens weg in het lokale systeem en slaat alles direct op",
      "De werknemer ontvangt via WhatsApp een link naar het document om te controleren en waar nodig aan te passen",
      "Minder administratietijd en betere overdracht tussen zorgmomenten",
    ],
    image: "/images/thuiszorg.png",
  },
  {
    slug: "boekenwinkel-rag-isbn",
    title: "Boekenwinkel met RAG-chat en ISBN-flow",
    company: "Boekenwinkel op maat",
    person: "Marieke van Dam",
    role: "Winkelcoordinator",
    rating: "★★★★★",
    quote:
      "Met de RAG-chat en de boekeninvoer-app vinden we sneller de juiste metadata en kunnen medewerkers nicheboeken veel beter terugvinden.",
    summary:
      "We maakten een app voor ISBN-verwerking. De app haalt boekgegevens op via een boeken-API, roept een webhook aan en stuurt via het lokale netwerk de data met prompt naar de lokale LLM-API (Ollama). De response wordt teruggeschreven in het systeem en de boekensecretaresse krijgt in de app een melding dat het document verwerkt is.",
    solutions: [
      "RAG-chat op maat",
      "Boekeninvoer-app op maat",
      "Lokale LLM via Ollama",
      "Excel-koppeling",
    ],
    details: [
      "De app haalt op basis van ISBN automatisch boekgegevens op via een boeken-API",
      "Na het aanroepen van een webhook worden boekgegevens en prompt via het lokale netwerk doorgestuurd naar de lokale LLM-API",
      "De lokale LLM (Ollama) geeft de output terug in een vaste format met schap, genre en plaatsing",
      "De webhook verwerkt de response en schrijft alle gegevens direct terug in het systeem",
      "De boekensecretaresse krijgt een melding van de app zodra het document volledig verwerkt is",
      "De output wordt ook opgeslagen in een Excel-sheet zodat voorraad en indeling centraal beheerd blijven",
      "De RAG-chatinterface gebruikt dezelfde kennisbasis om direct te zoeken waar een boek ligt of welke vergelijkbare genres beschikbaar zijn en in welk schap",
    ],
    image: "/images/boeken.png",
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
    image: "/images/storing.png",
  },
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
      "Na elke les start een voice agent via WhatsApp een gesprek en vraagt direct de belangrijkste punten uit. Een op maat gemaakte versie, vergelijkbaar met AITJE Notulist, verwerkt dit gesprek en maakt een duidelijke samenvatting klaar voor de student.",
    solutions: ["Software op maat", "AITJE Notulist"],
    details: [
      "Spraakmemo via WhatsApp wordt automatisch verwerkt tot samenvatting met de al uitgevraagde ontvanger in de titel",
      "Na een duimpje-omhoog wordt de samenvatting direct naar die ontvanger verstuurd",
      "Verzending gaat automatisch via WhatsApp of direct naar een 06-nummer",
      "Minder handmatig werk en sneller duidelijke feedback naar leerlingen",
    ],
    image: "/images/rijles.png",
  },
];
