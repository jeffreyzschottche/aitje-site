// Cases (redesign/content/cases.md, pages/cases.md, pages/case.md, besluit 51).
// Details marked dummy must be replaced by confirmed facts before launch.
import type { CaseStudy } from "./types";

const assistent = { name: "AITJE Assistent", to: "/producten/aitje-assistent" };
const coder = { name: "AITJE Coder", to: "/producten/aitje-coder" };
const custom = { name: "AITJE Custom", to: "/diensten/aitje-custom" };
const installatie = { name: "Installatie en inrichting", to: "/diensten/installatie-en-inrichting" };
const optimalisatie = { name: "Optimalisatie", to: "/diensten/optimalisatie" };
const veilig = { name: "Veilig AI-gebruik", to: "/diensten/veilig-ai-gebruik" };
const support = { name: "Ondersteuning en onderhoud", to: "/diensten/ondersteuning-en-onderhoud" };

const exampleDisclaimer =
  "Dit is een voorbeeldsituatie: een realistische toepassing die laat zien wat een AITJE Custom-traject kan opleveren. Het is geen beschrijving van een uitgevoerde opdracht.";

export const cases: CaseStudy[] = [
  {
    slug: "chatgpt-in-je-eigen-organisatie",
    label: "Praktijkcase",
    title: "ChatGPT in je eigen organisatie",
    context: "Een administratiekantoor met 14 medewerkers",
    summary:
      "Medewerkers wilden ChatGPT gebruiken, maar klantdossiers mochten niet naar buiten. AITJE installeerde een eigen AI-assistent op een server op kantoor, met een kennisbank van interne handleidingen.",
    icon: "message",
    image: "/img/assistent-devices.webp",
    offer: [assistent, installatie, support],
    recognize: [
      "Collega's plakken al stukken tekst in ChatGPT, maar niemand weet precies wat wel en niet mag.",
      "Je hebt handleidingen en werkinstructies die niemand kan vinden.",
      "Je wilt AI, maar geen extra abonnement per medewerker.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Het kantoor zag dat medewerkers steeds vaker ChatGPT gebruikten voor e-mails en samenvattingen, soms met klantgegevens erin. De directie wilde AI niet verbieden, maar wel zelf bepalen waar de gegevens blijven.",
        ],
      },
      {
        title: "De beginsituatie",
        paragraphs: [
          "Losse ChatGPT-accounts, een netwerkschijf met honderden werkinstructies en een map 'handig' die niemand meer bijhield. Nieuwe medewerkers stelden dezelfde vragen aan dezelfde twee collega's.",
        ],
      },
      {
        title: "Wat AITJE deed",
        bullets: [
          "Een compacte server geadviseerd die op kantoor kon staan, en laten leveren.",
          "AITJE Assistent geïnstalleerd met een lokaal taalmodel, accounts voor alle medewerkers en een rol voor beheer.",
          "De werkinstructies en het kwaliteitshandboek opgeschoond en in de kennisbank gezet.",
          "Het team uitgelegd wat het kan, waar je op let en wanneer je websearch bewust aanzet.",
        ],
      },
      {
        title: "Oplevering",
        paragraphs: [
          "Een eigen chatomgeving op kantoor, bereikbaar via de browser. Medewerkers schrijven, vatten samen en stellen vragen over interne procedures. De lokale basis werkt ook zonder internet.",
        ],
      },
      {
        title: "Resultaat",
        paragraphs: [
          "Na een maand gebruikte het hele team de assistent dagelijks. De losse ChatGPT-accounts zijn opgezegd en er komen merkbaar minder vragen bij de twee vraagbaken.",
        ],
      },
    ],
    quote: "Eindelijk AI waar ik niet bij hoef na te denken of ik iets mag plakken.",
    dummy: true,
  },
  {
    slug: "council-hub",
    label: "Praktijkcase",
    title: "Council Hub: één centraal punt voor je bedrijf",
    context: "Een softwarebedrijf met 18 medewerkers en ruim 400 zakelijke klanten",
    summary:
      "Tickets in het ene systeem, facturen in het andere, klantinfo in een derde. AITJE bouwde één hub waar alles samenkomt en agents tickets voorbereiden, terwijl een mens de belangrijke stappen goedkeurt.",
    icon: "layout",
    image: "/img/council-hub.webp",
    offer: [custom, installatie, support],
    recognize: [
      "Je springt de hele dag tussen je helpdesk, boekhouding en CRM.",
      "Een klant belt en je moet drie systemen openen om te weten hoe het ervoor staat.",
      "Eenvoudige tickets blijven liggen omdat iedereen met de moeilijke bezig is.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Het supportteam verloor tijd met zoeken en schakelen tussen systemen. De directie wilde in één oogopslag zien hoe het ging, per klant en in totaal.",
        ],
      },
      {
        title: "De beginsituatie",
        paragraphs: [
          "Een helpdesksysteem, een boekhoudpakket en een CRM, zonder koppeling. Rapportages werden maandelijks met de hand in een spreadsheet gemaakt.",
        ],
      },
      {
        title: "Wat AITJE deed",
        bullets: [
          "Fase 1: koppelingen met de drie systemen en één klantbeeld met open tickets, openstaande facturen en contactmomenten.",
          "Fase 2: agents die nieuwe tickets lezen, categoriseren, klantinfo en eerdere oplossingen verzamelen en een conceptantwoord klaarzetten.",
          "Fase 3: een [workflow](/kenniscentrum/wat-is-een-workflow) met human in the loop. Standaardantwoorden gaan na één klik uit; terugbetalingen en contractwijzigingen wachten altijd op een medewerker.",
          "Alles draait op een eigen server; klantgegevens gaan niet naar externe modellen.",
        ],
      },
      {
        title: "Oplevering",
        paragraphs: [
          "Een dashboard met ticketstatus, financiële stand per klant, signalen zoals 'klant heeft drie tickets en een openstaande factuur', en een wachtrij met door agents voorbereide tickets.",
        ],
      },
      {
        title: "Resultaat",
        paragraphs: [
          "Het team werkt vanuit één scherm. Eenvoudige tickets worden sneller afgehandeld en de maandrapportage maakt zichzelf.",
        ],
      },
    ],
    dummy: true,
  },
  {
    slug: "coder-game-in-24-uur",
    label: "Demo",
    title: "AITJE Coder in actie: een game in 24 uur",
    context: "Eigen project van AITJE",
    summary:
      "Wat kunnen lokale coding agents in 24 uur? AITJE bouwde met AITJE Coder een complete bosgame, van leeg project tot speelbare versie, zonder externe tokenkosten.",
    icon: "code",
    image: "/img/box-coder.webp",
    offer: [coder],
    recognize: [
      "Je team gebruikt Claude Code of Codex en de rekening loopt op.",
      "Je wilt agents langer laten doorwerken, maar niet betalen per poging.",
      "Je vraagt je af of lokale modellen al goed genoeg zijn voor echt werk.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Hoe ver kom je met lokale coding agents als je ze een dag de ruimte geeft, en waar heb je als mens nog sturing nodig?",
        ],
      },
      {
        title: "De opzet",
        bullets: [
          "Eén werkstation met AITJE Coder, de vijf standaardmodellen en OpenCode als harnas.",
          "Startpunt: een leeg project en een ontwerpdocument van één pagina.",
          "Het spel: Woudloper, een 2D-verkenningsgame in een bos met dag-en-nachtcyclus, verzamelobjecten en eenvoudige vijanden.",
          "De regel: alle code door agents; de mens stuurt, test en beslist.",
        ],
      },
      {
        title: "Wat de agents deden",
        bullets: [
          "De projectstructuur, game-loop, besturing en tilemap opzetten.",
          "Bugs zelf reproduceren via de terminal en herstellen.",
          "'s Nachts zonder begeleiding levelvarianten en geluidseffecten toevoegen.",
        ],
      },
      {
        title: "Waar de mens nodig was",
        bullets: [
          "Keuzes over gevoel en moeilijkheid: 'te snel', 'niet leuk'.",
          "Het terugdraaien van een doodlopende aanpak bij de vijanden.",
          "Een grote taak opsplitsen toen een agent vastliep.",
        ],
      },
      {
        title: "Resultaat en inzichten",
        paragraphs: ["Een speelbare build met drie levels, te spelen in de browser."],
        bullets: [
          "Kleinere, duidelijke taken werken beter dan één grote opdracht.",
          "Lokale modellen zijn goed in structuur en herhaling; smaak en richting blijven mensenwerk.",
          "Zonder kosten per poging kun je agents laten itereren tot het werkt.",
        ],
      },
    ],
    disclaimer: "Dit is een demonstratie. Resultaten gelden voor deze opzet en zijn geen belofte voor ieder project.",
    dummy: true,
  },
  {
    slug: "werkbon-naar-offerte",
    label: "Voorbeeldsituatie",
    title: "Van werkbon naar conceptofferte",
    context: "Een installatiebedrijf met 30 monteurs",
    summary:
      "Monteurs maken foto's en spreken een notitie in. Een uur later staat er een conceptofferte klaar in het offertesysteem, op basis van de eigen prijslijst.",
    icon: "wrench",
    offer: [custom, installatie],
    recognize: [
      "Je monteurs zien ter plekke wat er moet gebeuren, maar de offerte komt pas dagen later.",
      "Offertes maken is avondwerk voor de planner of de eigenaar.",
      "Klanten haken af omdat een concurrent sneller was.",
    ],
    alsoFor: "loodgieters, dakdekkers, schilders, zonnepaneleninstallateurs, schoonmaakbedrijven",
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Een installatiebedrijf verliest opdrachten omdat offertes te lang duren. De informatie is er al: foto's, maten en de notitie van de monteur. Het uitwerken kost kantoortijd die er niet is.",
        ],
      },
      {
        title: "Hoe AITJE dit kan aanpakken",
        bullets: [
          "De monteur maakt foto's en spreekt een korte notitie in via een eenvoudige app op de telefoon.",
          "Een workflow schrijft de notitie uit, herkent materialen en werkzaamheden en koppelt die aan de eigen prijslijst en standaardteksten.",
          "Er verschijnt een conceptofferte in het bestaande offertepakket, met de foto's als bijlage.",
          "Een medewerker controleert, past aan en verstuurt. Niets gaat automatisch naar de klant.",
        ],
      },
      {
        title: "Wat het oplevert",
        paragraphs: [
          "Offertes worden gemaakt terwijl de situatie nog vers is, in de eigen huisstijl en met de eigen prijzen. Het kantoor controleert in plaats van alles zelf uit te typen.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: false,
  },
  {
    slug: "orders-uit-email-automatisch",
    label: "Voorbeeldsituatie",
    title: "Orders uit e-mail automatisch in het systeem",
    context: "Een transportbedrijf met 40 vrachtwagens",
    summary:
      "Transportopdrachten komen binnen als e-mail, pdf of foto van een vrachtbrief. AI leest ze uit en zet ze klaar in het planningssysteem; de planner hoeft alleen te controleren.",
    icon: "truck",
    offer: [custom, optimalisatie],
    recognize: [
      "Je planners typen de hele ochtend orders over uit mails en pdf's.",
      "Iedere klant stuurt opdrachten in een ander formaat.",
      "Een typefout in een adres of tijdvenster kost je een hele rit.",
    ],
    alsoFor: "groothandels, drukkerijen, verhuurbedrijven, iedereen die orders of aanvragen per mail ontvangt",
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Een transportbedrijf ontvangt dagelijks honderden opdrachten in allerlei vormen. Planners besteden de ochtend aan overtypen in plaats van aan plannen.",
        ],
      },
      {
        title: "Hoe AITJE dit kan aanpakken",
        bullets: [
          "Een workflow leest de orderinbox, leest bijlagen en foto's uit en herkent laad- en losadres, tijdvensters, gewicht en referenties.",
          "De gegevens worden gecontroleerd tegen bekende klanten en adressen.",
          "De order staat als concept in het planningssysteem. Twijfelgevallen krijgen een markering.",
          "De planner controleert en bevestigt.",
        ],
      },
      {
        title: "Wat het oplevert",
        paragraphs: [
          "Planners krijgen hun ochtend terug en er gaan minder fouten mee in de planning. Nieuwe klanten met een eigen orderformaat kunnen zonder extra koppeling worden aangesloten.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: false,
  },
  {
    slug: "documenten-doorzoeken-en-lakken",
    label: "Voorbeeldsituatie",
    title: "Honderden documenten doorzoeken en lakken",
    context: "Een middelgrote gemeente",
    summary:
      "Bij een informatieverzoek moeten honderden mails en documenten worden doorzocht en persoonsgegevens gelakt. Een lokale AI doet het voorwerk; een medewerker beslist.",
    icon: "file-search",
    offer: [custom, veilig, installatie],
    recognize: [
      "Informatieverzoeken stapelen zich op en termijnen komen in gevaar.",
      "Medewerkers lakken dagenlang met de hand namen, adressen en telefoonnummers.",
      "Deze documenten mogen absoluut niet naar een externe AI-dienst.",
    ],
    alsoFor: "onderwijsinstellingen, woningcorporaties, advocatenkantoren, HR-afdelingen",
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Een gemeente krijgt steeds meer informatieverzoeken. Per verzoek moeten honderden documenten worden doorzocht, beoordeeld en gelakt. Dat werk is zwaar, foutgevoelig en vertrouwelijk.",
        ],
      },
      {
        title: "Hoe AITJE dit kan aanpakken",
        bullets: [
          "AITJE richt een server in binnen de eigen omgeving van de gemeente. Documenten verlaten het netwerk niet.",
          "Een zoekfunctie vindt relevante stukken op onderwerp, niet alleen op trefwoord.",
          "Het systeem markeert voorstellen voor te lakken passages: namen, contactgegevens en andere persoonsgegevens, met de reden erbij.",
          "Een medewerker beoordeelt ieder voorstel, past aan en keurt goed. De eindbeslissing ligt altijd bij een mens.",
        ],
      },
      {
        title: "Wat het oplevert",
        paragraphs: [
          "Het zware zoek- en markeerwerk wordt voorbereid. Medewerkers besteden hun tijd aan de beoordeling in plaats van aan het zoeken.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: false,
  },
  {
    slug: "spraak-naar-werkorder",
    label: "Voorbeeldsituatie",
    title: "Inspreken in plaats van typen in de werkplaats",
    context: "Een autobedrijf met eigen werkplaats en 8 monteurs",
    summary:
      "Monteurs spreken hun bevindingen in op de tablet die al in de werkplaats hangt. De werkorder wordt netjes ingevuld in het dealersysteem.",
    icon: "mic",
    offer: [custom, installatie],
    recognize: [
      "Je monteurs hebben vieze handen en geen zin om te typen.",
      "Werkorders zijn half ingevuld, dus de klant krijgt vage uitleg bij de factuur.",
      "Extra werk dat de monteur tegenkwam, wordt vergeten door te geven.",
    ],
    alsoFor: "fietsenmakers, onderhoudsmonteurs, facilitair beheer, agrarische loonbedrijven",
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "De monteurs doen goed werk, maar de administratie loopt achter. Bevindingen komen onvolledig in het systeem en adviezen voor extra werk gaan verloren.",
        ],
      },
      {
        title: "Hoe AITJE dit kan aanpakken",
        bullets: [
          "AITJE gebruikt de bestaande werkplaatstablet; nieuwe hardware is niet nodig als die geschikt is.",
          "De monteur zegt bijvoorbeeld: 'Remblokken voor op 3 millimeter, schijven zijn goed, advies binnen 2 maanden vervangen.'",
          "De spraak wordt lokaal omgezet naar tekst en daarna naar een gestructureerde werkorder: uitgevoerd werk, bevindingen en advies.",
          "De werkorder staat in het dealersysteem klaar voor controle door de werkplaatschef.",
        ],
      },
      {
        title: "Wat het oplevert",
        paragraphs: [
          "Complete werkorders zonder typen, duidelijke uitleg voor de klant en adviezen voor vervolgwerk die niet meer verloren gaan.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: false,
  },
  {
    slug: "productteksten-zonder-tokenkosten",
    label: "Voorbeeldsituatie",
    title: "Duizenden productteksten zonder rekening per tekst",
    context: "Een technische groothandel met 12.000 artikelen",
    summary:
      "12.000 artikelen met magere of ontbrekende omschrijvingen. Een lokale AI schrijft en vertaalt ze in de eigen tone of voice, zonder rekening per tekst.",
    icon: "package",
    offer: [custom, installatie],
    recognize: [
      "Je webshop staat vol artikelen met alleen een leveranciersnummer en een halve zin.",
      "Je wilt ook naar Duitsland of België, maar vertalen is onbetaalbaar.",
      "Je hebt een externe AI-dienst geprobeerd, maar bij duizenden producten loopt de rekening op.",
    ],
    alsoFor: "webshops, fabrikanten, uitgevers, vastgoedplatformen",
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Een groothandel wil betere productpagina's voor vindbaarheid en conversie, en de webshop in het Duits en Frans. Met de hand is dat maanden werk; via een externe API betaal je per tekst en per herziening.",
        ],
      },
      {
        title: "Hoe AITJE dit kan aanpakken",
        bullets: [
          "Een batchworkflow op eigen hardware zet productdata, specificaties en leveranciersinformatie om naar goede omschrijvingen.",
          "De teksten volgen de eigen tone of voice en vaste termen, vastgelegd in een stijlgids.",
          "Dezelfde workflow vertaalt naar Duits en Frans.",
          "Een medewerker controleert steekproeven per productgroep en keurt de batches goed voordat ze live gaan.",
        ],
      },
      {
        title: "Wat het oplevert",
        paragraphs: [
          "Duizenden teksten in weken in plaats van maanden. Omdat er geen kosten per tekst zijn, kun je een batch zo vaak opnieuw laten draaien als nodig is.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: false,
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
export const getCases = (slugs: string[] = []) =>
  slugs.map(getCase).filter((c): c is CaseStudy => Boolean(c));
