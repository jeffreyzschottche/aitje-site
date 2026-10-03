// Products (redesign/offer/products, pages/product.md, besluiten 09, 28, 45, 46, 51).
// Prices are dummy data until checked before publication (besluit 19).
import type { Product } from "./types";

export const localNote =
  "Dit geldt voor de lokale functies. Gebruik je externe modellen of online tools, dan kunnen gegevensdeling, kosten en afhankelijkheden verschillen.";

export const installPrice = 199;

// Set status to "disabled" to unpublish a product everywhere.
const productDefinitions: Product[] = [
  {
    slug: "aitje-assistent",
    name: "AITJE Assistent",
    shortName: "Assistent",
    status: "available",
    tagline:
      "Je eigen AI-chatassistent, met je eigen kennis en data in je eigen omgeving.",
    icon: "message",
    image: "/img/covers/v2/aitje-assistent.webp",
    headline: "Je eigen AI-chatassistent. Onder jouw controle.",
    subline:
      "Op je eigen hardware of server, met jouw kennis en data in je eigen omgeving. Chat lokaal zonder externe tokenkosten, ook zonder internet.",
    intro: [
      "AITJE Assistent is een eigen ChatGPT-achtige omgeving voor je hele team. Schrijven, samenvatten, uitleg vragen en antwoorden laten baseren op je eigen documenten: alles in één omgeving die op je eigen apparaat of server draait.",
      "Chat, lokale modellen, een [kennisbank](/kenniscentrum/wat-is-rag) en beheer van accounts en rollen zitten erin. Heb je actuele informatie nodig, dan zet je websearch bewust aan vanuit dezelfde omgeving.",
    ],
    forWho: [
      "Organisaties die een eigen AI-chatomgeving willen in plaats van losse abonnementen",
      "Kantoren met gevoelige of bedrijfsspecifieke kennis, zoals administratie, advocatuur of makelaardij",
      "Teams die interne handleidingen en documenten eindelijk vindbaar willen maken",
      "Scholen en organisaties die gebruikers en toegang willen beheren",
      "Makers en professionals die een eigen assistent willen",
    ],
    problems: [
      {
        problem:
          "Collega's plakken bedrijfsinformatie in externe chatdiensten.",
        solution:
          "Lokale vragen blijven in je eigen omgeving en gaan niet standaard naar een externe AI-dienst.",
      },
      {
        problem: "Je betaalt per medewerker een AI-abonnement.",
        solution:
          "Eén aankoop per omgeving, zonder licentie per gebruiker en zonder tokenrekening per lokale vraag.",
      },
      {
        problem: "Niemand vindt de juiste handleiding of werkinstructie.",
        solution:
          "De kennisbank beantwoordt vragen op basis van je eigen documenten.",
      },
      {
        problem: "Chat, kennis en beheer zitten in losse tools.",
        solution:
          "Chat, kennisbank, accounts en rollen zitten in één omgeving.",
      },
    ],
    features: [
      {
        icon: "message",
        title: "Lokale chat",
        text: "Schrijven, samenvatten en uitleg vragen met een model dat op je eigen omgeving draait.",
      },
      {
        icon: "library",
        title: "Kennisbank",
        text: "Voeg je eigen bronnen toe en laat antwoorden daarop baseren.",
      },
      {
        icon: "users",
        title: "Accounts en rollen",
        text: "Bepaal wie wat mag, vanuit dezelfde omgeving.",
      },
      {
        icon: "cpu",
        title: "Modelkeuze",
        text: "Kies het model per taak, met een redeneermodus voor lastige vragen.",
      },
      {
        icon: "globe",
        title: "Websearch als je wilt",
        text: "Zet online zoeken bewust aan wanneer je actuele informatie nodig hebt.",
      },
      {
        icon: "wifi-off",
        title: "Werkt zonder internet",
        text: "De lokale basis blijft bruikbaar zolang je apparaat of server en netwerk beschikbaar zijn.",
      },
    ],
    included: [
      "Chatomgeving met lokale modellen",
      "Kennisbank voor je eigen bronnen, met back-up",
      "Accounts, rollen en beheer",
      "Focusmodi, modelkeuze en redeneermodus",
      "Blijvend gebruik van de opgeleverde versie, per omgeving of device",
    ],
    notIncluded: [
      "Hardware of serverkosten",
      "Installatie en inrichting door AITJE",
      "Documenten opschonen en de kennisbank voor je inrichten",
      "Updates, nieuwe modellen en ondersteuning na oplevering",
      "Externe API- of gebruikskosten",
    ],
    price: 499,
    selfInstall: [
      "Je installeert AITJE Assistent zelf op geschikte eigen hardware.",
      "Je krijgt de complete omgeving met chat, beheer en kennisbank.",
      "Installatie door AITJE en hardware zijn niet inbegrepen.",
      "Hulp en ondersteuning kun je apart afspreken.",
    ],
    technical: [
      {
        title: "Zonder internet",
        text: "Chat met het geïnstalleerde model, vragen over de lokale kennisbank, lokale documenten en afbeeldingen, en beheer. Vereist dat je apparaat of server en het lokale netwerk beschikbaar zijn.",
      },
      {
        title: "Met internet",
        text: "Websearch, updates en nieuwe modellen, ondersteuning op afstand als dat is afgesproken, en externe modellen als je daar bewust voor kiest.",
      },
      {
        title: "Capaciteit",
        text: "Snelheid, modelgrootte, aantal gelijktijdige gebruikers en kennisbankruimte hangen af van de hardware of server. AITJE adviseert een lichte of krachtige omgeving op basis van je gebruik.",
      },
      {
        title: "Systeemeisen",
        text: "Minimale en aanbevolen specificaties worden vóór publicatie bevestigd. Twijfel je of je hardware geschikt is? Vraag het AITJE.",
      },
    ],
    gallery: [
      {
        src: "/img/assistent-kennisbank-inzicht.webp",
        alt: "Overzicht van de kennisbank met aantallen documenten en categorieën",
        caption:
          "Kennisbank-inzicht: wat staat erin en wat is recent toegevoegd.",
      },
      {
        src: "/img/assistent-kennisbank.webp",
        alt: "Bibliotheek van de kennisbank met documenten per categorie",
        caption: "De bibliotheek: je eigen documenten, per categorie geordend.",
      },
      {
        src: "/img/assistent-devices.webp",
        alt: "Drie compacte AITJE-apparaten",
        caption: "Op een compact apparaat op kantoor of op een eigen server.",
      },
    ],
    faq: [
      {
        q: "Wat is AITJE Assistent?",
        a: "Je eigen AI-chatassistent, vergelijkbaar met ChatGPT, maar op je eigen apparaat of server. Je schrijft, vat samen en stelt vragen, ook over je eigen documenten via de kennisbank.",
        general: true,
      },
      {
        q: "Werkt AITJE Assistent zonder internet?",
        a: "De lokale basis wel: chat, kennisbank en beheer werken zolang je apparaat of server en het lokale netwerk beschikbaar zijn. Websearch en updates hebben internet nodig.",
        general: true,
      },
      {
        q: "Wat kost AITJE Assistent?",
        a: "De voorlopige productprijs is €499 (excl. btw) per omgeving, zonder kosten per gebruiker. Hardware en installatie komen er apart bij, afhankelijk van je situatie.",
        general: true,
      },
      {
        q: "Hoeveel mensen kunnen het tegelijk gebruiken?",
        a: "Er is geen licentie per gebruiker. Het praktische aantal hangt af van de hardware of server en van hoeveel mensen tegelijk werken. AITJE adviseert de capaciteit op basis van je gebruik.",
      },
      {
        q: "Richt AITJE de kennisbank voor me in?",
        a: "Dat kan. De kennisbanksoftware hoort bij het product en je kunt zelf bronnen toevoegen. Documenten opschonen, structureren en focusmodi inrichten doet AITJE als aparte opdracht of binnen een SLA.",
      },
      {
        q: "Is AITJE Assistent+ een aparte versie?",
        a: "Nee. Het is één product. Hoe krachtig je omgeving is, hangt af van de hardware of server die je kiest.",
      },
      {
        q: "Welke bestandsformaten kan ik aan de kennisbank toevoegen?",
        a: "De kennisbank ondersteunt gangbare bestandsformaten, zoals PDF, CSV, Excel, TXT en Word (.docx). Heb je een ander formaat? Dan kijken we samen hoe die informatie het beste kan worden ingelezen.",
        general: true,
      },
      {
        q: "Kan AITJE Assistent ook gescande documenten en afbeeldingen lezen?",
        a: "Ja. AITJE Assistent kan ook informatie uit gescande documenten en afbeeldingen verwerken. Hoe goed dat gaat, hangt onder meer af van de leesbaarheid en de kwaliteit van het bestand.",
        general: true,
      },
      {
        q: "Laat AITJE Assistent zien uit welk document een antwoord komt?",
        a: "Ja. Bij antwoorden op basis van de kennisbank toont de Assistent bronverwijzingen. Zo kun je terugvinden welke documenten zijn gebruikt en het antwoord naast de oorspronkelijke informatie leggen.",
        general: true,
      },
      {
        q: "Wat gebeurt er als documenten in de kennisbank elkaar tegenspreken?",
        a: "Het model geeft aan wanneer de gevonden informatie elkaar tegenspreekt. In de kennismanager kun je categorieën of specifieke documenten bovendien een prioriteit of weging geven. Zo geef je aan welke bronnen zwaarder moeten meewegen, bijvoorbeeld een actuele werkinstructie tegenover een ouder document.",
        general: true,
      },
      {
        q: "Hoe worden gewijzigde of verwijderde documenten in de kennisbank verwerkt?",
        a: "Wijzigingen worden bij de databasesynchronisatie verwerkt. De informatie wordt opgeknipt in doorzoekbare tekststukken, ook wel chunks, en omgezet naar vectoren voor de zoekindex. Tijdens een chat haalt de Assistent daaruit de relevante informatie op via RAG. De synchronisatie zorgt dat wijzigingen en verwijderingen worden meegenomen; vóór die verwerking kan de eerdere versie nog in de index staan.",
        general: true,
      },
      {
        q: "Kunnen afdelingen elk hun eigen afgeschermde kennisbank krijgen?",
        a: "Ja. Je kunt bepaalde kennis aan specifieke gebruikersrollen toewijzen. Daarmee bepaal je welke medewerkers toegang hebben tot welke informatie, bijvoorbeeld per afdeling of functie.",
        general: true,
      },
    ],
    caseSlugs: [
      "chatgpt-in-je-eigen-organisatie",
      "documenten-doorzoeken-en-lakken",
    ],
    seoDescription:
      "AITJE Assistent: je eigen AI-chatassistent met kennisbank, op je eigen hardware of server. Chat lokaal zonder externe tokenkosten. Vanaf €499 per omgeving.",
  },
  {
    slug: "aitje-coder",
    name: "AITJE Coder",
    shortName: "Coder",
    status: "available",
    tagline:
      "Je eigen coding agents op eigen hardware. Zonder externe tokenkosten.",
    icon: "code",
    image: "/img/covers/v2/aitje-coder.webp",
    headline: "Je eigen coding agents. Zonder externe tokenkosten.",
    subline:
      "Op je eigen hardware of server, met je code in je eigen omgeving. Werk lokaal door als externe AI-diensten uitvallen, via je terminal, de AITJE-interface of een ondersteund coding-harnas.",
    intro: [
      "AITJE Coder is een eigen alternatief voor diensten zoals Codex en Claude Code: een complete lokale codeeromgeving die projecten leest en wijzigt, commando's uitvoert en programmeertaken iteratief afrondt.",
      "AITJE heeft het uitzoekwerk al gedaan. Vijf zorgvuldig gekozen lokale codeermodellen, Ollama, een grafische interface, API-toegang en CLI-configuratie zitten gebruiksklaar in één product. Je gebruikt het via de terminal, de AITJE-interface of een ondersteund harnas zoals OpenCode.",
    ],
    forWho: [
      "Ontwikkelbureaus die dagelijks met coding agents werken",
      "Bedrijven met een eigen ontwikkelteam",
      "Zelfstandige ontwikkelaars en technische makers",
      "Professionals die eigen of spare hardware willen gebruiken",
      "Teams die meer grip willen op modellen, infrastructuur en kosten",
    ],
    problems: [
      {
        problem: "De rekening voor externe coding agents loopt op.",
        solution:
          "Lokale taken kosten geen externe tokens per opdracht. Agents mogen itereren tot het werkt.",
      },
      {
        problem:
          "Werk ligt stil als een externe dienst uitvalt of je limiet bereikt is.",
        solution:
          "De lokale kern blijft werken, ook zonder internet, zolang je eigen omgeving beschikbaar is.",
      },
      {
        problem: "Modellen, interfaces en harnassen uitzoeken kost dagen.",
        solution:
          "Vijf geselecteerde modellen, in gewone taal uitgelegd, klaar voor gebruik.",
      },
      {
        problem: "Je code moet in je eigen omgeving blijven.",
        solution:
          "Coder draait op je eigen hardware of server; jij bepaalt wat toegankelijk is.",
      },
    ],
    features: [
      {
        icon: "terminal",
        title: "Terminal en CLI",
        text: "Werk vanuit je eigen terminal met lokaal draaiende modellen.",
      },
      {
        icon: "layout",
        title: "AITJE-interface",
        text: "Een grafische interface voor wie liever niet in de terminal werkt.",
      },
      {
        icon: "plug",
        title: "Ondersteunde harnassen",
        text: "Koppel Coder aan OpenCode en andere ondersteunde coding-harnassen.",
      },
      {
        icon: "cpu",
        title: "Vijf vaste modellen",
        text: "Licht, snel of krachtig: je kiest per taak, zonder modelnamen te hoeven kennen.",
      },
      {
        icon: "repeat",
        title: "Iteratief werken",
        text: "Agents lezen en wijzigen projecten, voeren commando's uit en werken taken af.",
      },
      {
        icon: "wifi-off",
        title: "Werkt zonder internet",
        text: "De lokale kern blijft bruikbaar zonder verbinding met een externe modelaanbieder.",
      },
    ],
    included: [
      "Vijf geselecteerde lokale codeermodellen",
      "Ollama voor het lokaal draaien en beheren van modellen",
      "Grafische AITJE-interface, API-toegang en CLI",
      "Koppeling met OpenCode en andere ondersteunde harnassen",
      "Blijvend gebruik van de opgeleverde versie, per omgeving of device",
    ],
    notIncluded: [
      "Hardware of serverkosten",
      "Installatie en inrichting door AITJE",
      "Organisatie- of projectspecifieke workflows en koppelingen",
      "Updates, nieuwe modellen en ondersteuning na oplevering",
      "Externe API- of gebruikskosten",
    ],
    price: 699,
    selfInstall: [
      "Je installeert AITJE Coder zelf op geschikte eigen hardware.",
      "Je krijgt de complete omgeving met modellen, interface, API en CLI.",
      "Installatie door AITJE en hardware zijn niet inbegrepen.",
      "Hulp en ondersteuning kun je apart afspreken.",
    ],
    technical: [
      {
        title: "Zonder internet",
        text: "Werken met de geïnstalleerde modellen, programmeren via GUI, API, CLI en lokaal beschikbare harnassen, en lokale projecten lezen, wijzigen en uitvoeren.",
      },
      {
        title: "Met internet",
        text: "Online documentatie opzoeken, nieuwe modellen downloaden, packages en Git-diensten gebruiken, en ondersteuning op afstand als dat is afgesproken.",
      },
      {
        title: "Capaciteit",
        text: "Snelheid, modelvariant, contextcapaciteit en het aantal gelijktijdige gebruikers hangen af van de hardware. Voor een groter team kan een server of meer dan één omgeving nodig zijn.",
      },
      {
        title: "Compatibiliteit",
        text: "OpenCode wordt ondersteund. Welke andere harnassen officieel worden ondersteund, wordt vóór publicatie bevestigd. Coder belooft geen werking met iedere tool.",
      },
    ],
    faq: [
      {
        q: "Wat is AITJE Coder?",
        a: "Een eigen omgeving voor coding agents: een lokaal alternatief voor diensten als Claude Code en Codex. Agents lezen en wijzigen je code, voeren commando's uit en werken taken iteratief af.",
        general: true,
      },
      {
        q: "Werkt Coder met mijn eigen tools?",
        a: "Je gebruikt Coder via de terminal, de AITJE-interface of een ondersteund coding-harnas zoals OpenCode.",
        general: true,
      },
      {
        q: "Wat kost AITJE Coder?",
        a: "De voorlopige productprijs is €699 (excl. btw) per omgeving, zonder externe tokenkosten voor lokaal gebruik. Hardware en installatie komen er apart bij.",
        general: true,
      },
      {
        q: "Zijn lokale modellen goed genoeg voor echt werk?",
        a: "Voor veel taken wel, zeker als je ze klein en duidelijk maakt. Bekijk het [voorbeeld van een lokale codeerworkflow](/cases/coder-game-in-24-uur), of vraag een demo aan om de mogelijkheden voor je eigen werk te bespreken.",
      },
      {
        q: "Kan ik zelf een ander model toevoegen?",
        a: "Ja. Je kunt zelf een geschikt model toevoegen, of AITJE los of via een SLA vragen de modelselectie te onderhouden.",
      },
      {
        q: "Met welke programmeertalen en frameworks kan AITJE Coder werken?",
        a: "Je kunt met alle programmeertalen en frameworks werken; Coder is niet beperkt tot één vaste stack. Via skills kun je aanvullende documentatie, instructies en projectafspraken meegeven. De kwaliteit hangt af van het gekozen model en de beschikbare context, dus bij een specifieke stack testen we op jouw taken.",
        general: true,
      },
      {
        q: "Kan AITJE Coder aan een bestaande codebase werken?",
        a: "Ja. Coder kan bestaande projecten lezen, uitleggen en aanpassen. Je hoeft dus geen nieuw project te beginnen. Met projectdocumentatie en duidelijke instructies geef je de agent context over de structuur en de afspraken in je codebase.",
        general: true,
      },
      {
        q: "Hoe bepaal ik welke bestanden en commando’s een coding agent mag gebruiken?",
        a: "Dat stel je in via het coding-harnas: de tool waarmee je de agent laat werken. De mogelijkheden voor toegang en toestemming hangen van dat harnas af. Geplande coding-taken werken via pull requests op GitHub, met toegang via een personal access token (PAT). Daarbij bepalen we welke repository en toegangsrechten de agent krijgt.",
        general: true,
      },
      {
        q: "Kan ik wijzigingen van AITJE Coder eerst beoordelen voordat ze worden toegepast?",
        a: "Ja. Bij geplande coding-taken worden wijzigingen als pull request op GitHub aangeboden. Je kunt de voorgestelde wijzigingen bekijken en beoordelen voordat je ze samenvoegt. Bij interactief gebruik bepaalt het gekozen coding-harnas welke goedkeuringsmomenten beschikbaar zijn.",
        general: true,
      },
      {
        q: "Kan AITJE Coder ook tests schrijven en fouten opsporen?",
        a: "Ja. Coder kan tests schrijven, bestaande tests uitvoeren en fouten onderzoeken. De agent kan daarvoor je code, foutmeldingen en testresultaten gebruiken om een wijziging voor te stellen. Je kunt de tests en wijzigingen vervolgens zelf beoordelen.",
        general: true,
      },
    ],
    caseSlugs: ["coder-game-in-24-uur"],
    seoDescription:
      "AITJE Coder: je eigen coding agents op eigen hardware of server. Lokaal alternatief voor Claude Code en Codex, zonder externe tokenkosten. Vanaf €699.",
  },
  planned({
    slug: "aitje-manager",
    status: "disabled",
    name: "AITJE Manager",
    shortName: "Manager",
    icon: "bot",
    tagline:
      "Een persoonlijke agent die taken uitvoert, binnen grenzen die jij bepaalt.",
    intro:
      "AITJE Manager wordt een AI-agent die taken uitvoert namens jou. Jij bepaalt wat de agent mag doen, niet een leverancier. Terugkerend werk dat blijft liggen, gebeurt vanzelf.",
    forWho: [
      "Ondernemers en managers met terugkerende taken",
      "Bedrijven die processen willen automatiseren zonder externe platformen",
      "Professionals die routinewerk willen delegeren",
    ],
    problems: [
      {
        problem: "Taken blijven liggen door tijdgebrek",
        solution: "De agent voert taken uit binnen ingestelde grenzen",
      },
      {
        problem: "Geen controle over wat een agent mag",
        solution: "Jij bepaalt de grenzen",
      },
    ],
  }),
  planned({
    slug: "aitje-notulist",
    status: "disabled",
    name: "AITJE Notulist",
    shortName: "Notulist",
    icon: "mic",
    tagline:
      "Opnemen, samenvatten, doorzetten. Niemand hoeft meer te notuleren.",
    intro:
      "AITJE Notulist wordt een omgeving die gesprekken en vergaderingen opneemt, samenvat en het verslag doorzet naar je eigen systemen. Lokaal verwerkt.",
    forWho: [
      "Bedrijven met veel overleggen",
      "Teams die verslagen willen zonder handmatig notuleren",
      "Organisaties met vertrouwelijke gesprekken",
    ],
    problems: [
      {
        problem: "Niemand wil notuleren",
        solution: "Automatische samenvatting na afloop",
      },
      {
        problem: "Audio uploaden naar een externe dienst",
        solution: "Verwerking in je eigen omgeving",
      },
    ],
  }),
  planned({
    slug: "aitje-prepper",
    status: "disabled",
    name: "AITJE Prepper",
    shortName: "Prepper",
    icon: "compass",
    tagline:
      "Offline kennis, kaarten en cursussen op een zelfstandig apparaat.",
    intro:
      "AITJE Prepper wordt een kennissysteem dat volledig offline werkt: kaarten, handleidingen, cursussen en referentiemateriaal, ook zonder netwerk.",
    forWho: [
      "Mensen die voorbereid willen zijn op situaties zonder internet",
      "Buitensporters, reizigers en expedities",
      "Iedereen die kennis altijd beschikbaar wil hebben",
    ],
    problems: [
      {
        problem: "Kennis is afhankelijk van internet",
        solution: "Werkt volledig offline",
      },
      { problem: "Versnipperde bronnen", solution: "Alles in één systeem" },
    ],
  }),
  planned({
    slug: "aitje-3d",
    status: "disabled",
    name: "AITJE 3D",
    shortName: "3D",
    icon: "box",
    tagline:
      "Een eigen AI-omgeving voor 3D-werk, zonder abonnement per zitplaats.",
    intro:
      "AITJE 3D wordt een AI-omgeving voor 3D-modellering en -generatie op je eigen hardware. Je werk blijft van jou.",
    forWho: [
      "3D-artiesten en ontwerpers",
      "Studio's met meerdere werkplekken",
      "Makers die hun werk niet willen uploaden",
    ],
    problems: [
      {
        problem: "Abonnement per zitplaats",
        solution: "Eigen omgeving op eigen hardware",
      },
      {
        problem: "Onduidelijk eigendom van gegenereerd werk",
        solution: "Het werk blijft van de maker",
      },
    ],
  }),
  planned({
    slug: "aitje-beeld",
    status: "disabled",
    name: "AITJE Beeld",
    shortName: "Beeld",
    icon: "image",
    tagline: "Generatieve beeldbewerking in je eigen omgeving.",
    intro:
      "AITJE Beeld wordt een omgeving voor beeldgeneratie en -bewerking op je eigen hardware. Je materiaal blijft lokaal en wordt niet gebruikt om andermans model te trainen.",
    forWho: [
      "Fotografen en beeldbewerkers",
      "Grafisch ontwerpers en illustratoren",
      "Marketingteams",
    ],
    problems: [
      {
        problem: "Materiaal gebruikt voor training door derden",
        solution: "Blijft in je eigen omgeving",
      },
      { problem: "Credits per generatie", solution: "Eigen capaciteit" },
    ],
  }),
  planned({
    slug: "aitje-video",
    status: "disabled",
    name: "AITJE Video",
    shortName: "Video",
    icon: "video",
    tagline: "Videobewerking en generatie met eigen rekenkracht.",
    intro:
      "AITJE Video wordt een omgeving voor videobewerking en -generatie op je eigen machine, zonder wachtrij of creditsysteem.",
    forWho: [
      "Videografen en editors",
      "Contentcreators en productiebedrijven",
      "Studio's met eigen rendercapaciteit",
    ],
    problems: [
      {
        problem: "Wachtrijen bij rendering",
        solution: "Eigen hardware, eigen prioriteit",
      },
      { problem: "Credits per render", solution: "Eigen capaciteit" },
    ],
  }),
  planned({
    slug: "aitje-muziek",
    status: "disabled",
    name: "AITJE Muziek",
    shortName: "Muziek",
    icon: "music",
    tagline: "Muziek, zang en loops maken in een eigen AI-omgeving.",
    intro:
      "AITJE Muziek wordt een omgeving voor muziekgeneratie op je eigen hardware: complete nummers, stems, loops en vocals.",
    forWho: [
      "Muzikanten en producers",
      "Studio's en componisten",
      "Contentcreators die muziek nodig hebben",
    ],
    problems: [
      {
        problem: "Samples uploaden naar externe diensten",
        solution: "Verwerking in je eigen omgeving",
      },
      { problem: "Credits per track", solution: "Eigen capaciteit" },
    ],
  }),
];

function planned(p: {
  slug: string;
  name: string;
  shortName: string;
  status?: "planned" | "disabled";
  icon: string;
  tagline: string;
  intro: string;
  forWho: string[];
  problems: { problem: string; solution: string }[];
}): Product {
  return {
    ...p,
    status: p.status ?? "planned",
    image: `/img/covers/v2/${p.slug}.webp`,
    headline: p.tagline,
    subline:
      "In ontwikkeling. Laat je interesse weten, dan hoor je het als eerste zodra er meer bekend is.",
    intro: [p.intro],
    seoDescription: `${p.name} is in ontwikkeling. ${p.tagline} Laat je interesse weten bij AITJE.`,
  };
}

// Default hero photos (Unsplash License, redesign/visuals/photo-credits.md).
// Assistent and Coder use generated nature workspaces (output/imagegen).
const generatedBackgrounds: Record<string, string> = {
  "aitje-assistent": "/img/redesign/assistant-knowledge-workspace.webp",
  "aitje-coder": "/img/redesign/coder-forest-atelier.webp",
};
const busyPhotos = ["aitje-video"];
for (const product of productDefinitions) {
  product.background = generatedBackgrounds[product.slug]
    ?? `/img/products/bg-${product.slug}.webp`;
  product.backgroundStrong = busyPhotos.includes(product.slug);
}

// Only published products leave this module. Lists, lookups, and the sitemap
// all share this filter, so disabled details also resolve as not found.
export const products = productDefinitions.filter((p) => p.status !== "disabled");
export const availableProducts = products.filter(
  (p) => p.status === "available",
);
export const plannedProducts = products.filter((p) => p.status === "planned");
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
