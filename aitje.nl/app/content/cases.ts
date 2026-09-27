// Cases (redesign/content/cases.md, pages/cases.md, pages/case.md, besluit 51).
// Details marked dummy must be replaced by confirmed facts before launch.
import type { CaseStudy } from "./types";

const assistent = { name: "AITJE Assistent", to: "/producten/aitje-assistent" };
const coder = { name: "AITJE Coder", to: "/producten/aitje-coder" };
const custom = { name: "AITJE Custom", to: "/diensten/aitje-custom" };
const installatie = {
  name: "Installatie en inrichting",
  to: "/diensten/installatie-en-inrichting",
};
const optimalisatie = { name: "Optimalisatie", to: "/diensten/optimalisatie" };
const veilig = { name: "Veilig AI-gebruik", to: "/diensten/veilig-ai-gebruik" };
const support = {
  name: "Ondersteuning en onderhoud",
  to: "/diensten/ondersteuning-en-onderhoud",
};

const exampleDisclaimer =
  "Dit is een voorbeeldsituatie: een realistische toepassing die laat zien wat een AITJE Custom-traject kan opleveren. Het is geen beschrijving van een uitgevoerde opdracht.";

export const cases: CaseStudy[] = [
  {
    slug: "chatgpt-in-je-eigen-organisatie",
    label: "Voorbeeldsituatie",
    title: "Een eigen AI-assistent voor je organisatie",
    context: "Kenniswerk en interne documenten",
    summary:
      "Schrijven, samenvatten en vragen stellen over interne handleidingen. Zo kan een eigen AI-omgeving het dagelijkse werk van een kantoor ondersteunen.",
    icon: "message",
    image: "/img/redesign/case-chatgpt.webp",
    background: "/img/cases/bg-case-chatgpt.webp",
    offer: [assistent, installatie, support],
    recognize: [
      "Bedrijfsinformatie belandt in losse chatdiensten.",
      "Handleidingen zijn er wel, maar lastig te vinden.",
      "Je wilt één AI-omgeving voor je team.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Hoe geef je medewerkers bruikbare AI, terwijl je grip houdt op documenten, toegang en de gekozen modellen? Deze voorbeeldsituatie begint bij een kantoor dat een eigen omgeving wil.",
        ],
      },
      {
        title: "Een mogelijke aanpak",
        bullets: [
          "De gebruikte documenten, werkzaamheden en benodigde capaciteit onderzoeken.",
          "AITJE Assistent installeren op geschikte hardware of een eigen server.",
          "Relevante bronnen structureren en een kennisbank inrichten als aanvullende opdracht.",
          "Accounts en rollen instellen en het team uitleg geven over lokaal en online gebruik.",
        ],
      },
      {
        title: "Wat een oplevering kan zijn",
        paragraphs: [
          "Een chatomgeving voor schrijven, samenvatten en vragen over geselecteerde bronnen. De lokale basis blijft bruikbaar zonder externe AI-dienst, zolang de eigen omgeving beschikbaar is. Antwoorden moeten waar nodig door een medewerker worden gecontroleerd.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: true,
  },
  {
    slug: "council-hub",
    label: "Voorbeeldsituatie",
    title: "Eén overzicht voor klantvragen en bedrijfsinformatie",
    context: "Supportteams en zakelijke dienstverlening",
    summary:
      "Klantinformatie, tickets en facturen bij elkaar brengen. Agents kunnen informatie voorbereiden, terwijl medewerkers de belangrijke beslissingen nemen.",
    icon: "layout",
    image: "/img/redesign/case-council.webp",
    background: "/img/cases/bg-case-council.webp",
    offer: [custom, installatie, support],
    recognize: [
      "Je schakelt steeds tussen helpdesk, boekhouding en CRM.",
      "Voor een klantvraag moet je meerdere systemen openen.",
      "Terugkerende vragen vragen telkens hetzelfde uitzoekwerk.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Kan één omgeving de informatie samenbrengen die een supportteam dagelijks nodig heeft? Een passende oplossing hangt af van de beschikbare koppelingen, toegangsrechten en kwaliteit van de gegevens.",
        ],
      },
      {
        title: "Een mogelijke aanpak",
        bullets: [
          "Onderzoeken welke systemen gekoppeld kunnen worden en welke gegevens nodig zijn.",
          "Een eerste prototype bouwen met één klantbeeld en relevante informatie.",
          "Een agent laten helpen bij categoriseren en conceptantwoorden voorbereiden.",
          "Menselijke goedkeuring opnemen vóór belangrijke acties, zoals het versturen van antwoorden of wijzigen van contracten.",
        ],
      },
      {
        title: "Mogelijke oplevering",
        paragraphs: [
          "Een centrale werkplek met relevante klantinformatie en voorbereid werk. AITJE kan dit in afgesproken urenblokken onderzoeken en bouwen; na iedere fase bepaal je de volgende stap.",
        ],
      },
    ],
    disclaimer: exampleDisclaimer,
    dummy: true,
  },
  {
    slug: "coder-game-in-24-uur",
    label: "Voorbeeldsituatie",
    title: "Van programmeeropdracht naar een werkend prototype",
    context: "Lokale coding agents in je ontwikkelproces",
    summary:
      "Een agent die je project leest, code wijzigt en controles uitvoert. Ontdek hoe je lokale coding agents kunt inzetten en waar jouw beoordeling nodig blijft.",
    icon: "code",
    image: "/img/redesign/case-coder.webp",
    background: "/img/cases/bg-case-coder.webp",
    offer: [coder],
    recognize: [
      "Je wilt code in je eigen omgeving houden.",
      "Externe tokenkosten beperken het experimenteren.",
      "Je wilt weten hoe lokale agents bij je werk passen.",
    ],
    sections: [
      {
        title: "De vraag",
        paragraphs: [
          "Hoe zet je een lokale coding agent zinvol aan het werk? Begin met een afgebakende opdracht en een project waarvan je het resultaat kunt beoordelen.",
        ],
      },
      {
        title: "Een mogelijke werkwijze",
        bullets: [
          "Een passend lokaal model kiezen binnen AITJE Coder.",
          "De opdracht afbakenen en relevante projectcontext meegeven.",
          "De agent code laten lezen, wijzigingen laten maken en commando's laten uitvoeren.",
          "Controles en wijzigingen beoordelen, bijsturen en opnieuw testen.",
        ],
      },
      {
        title: "Waar jij nodig blijft",
        paragraphs: [
          "Functionele keuzes, kwaliteit en de uiteindelijke goedkeuring blijven mensenwerk. Het resultaat hangt af van de taak, het model, de beschikbare context en de hardware. Lokale uitvoering gebruikt geen externe tokens; hardware en stroom kosten wel geld.",
        ],
      },
    ],
    disclaimer:
      "Dit is een voorbeeld van een werkwijze. De eerder opgenomen gamedemo en doorlooptijd zijn nog niet bevestigd en worden daarom niet als resultaat getoond.",
    dummy: true,
  },
  {
    slug: "werkbon-naar-offerte",
    label: "Voorbeeldsituatie",
    title: "Van werkbon naar conceptofferte",
    context: "Een installatiebedrijf met 30 monteurs",
    summary:
      "Van foto's en een ingesproken notitie naar een conceptofferte op basis van de eigen prijslijst. Een medewerker controleert voordat de offerte naar de klant gaat.",
    image: "/img/redesign/case-offerte.webp",
    background: "/img/cases/bg-case-offerte.webp",
    icon: "wrench",
    offer: [custom, installatie],
    recognize: [
      "Je monteurs zien ter plekke wat er moet gebeuren, maar de offerte komt pas dagen later.",
      "Offertes maken is avondwerk voor de planner of de eigenaar.",
      "Klanten haken af omdat een concurrent sneller was.",
    ],
    alsoFor:
      "loodgieters, dakdekkers, schilders, zonnepaneleninstallateurs, schoonmaakbedrijven",
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
    image: "/img/redesign/case-orders.webp",
    background: "/img/cases/bg-case-orders.webp",
    icon: "truck",
    offer: [custom, optimalisatie],
    recognize: [
      "Je planners typen de hele ochtend orders over uit mails en pdf's.",
      "Iedere klant stuurt opdrachten in een ander formaat.",
      "Een typefout in een adres of tijdvenster kost je een hele rit.",
    ],
    alsoFor:
      "groothandels, drukkerijen, verhuurbedrijven, iedereen die orders of aanvragen per mail ontvangt",
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
    image: "/img/redesign/case-lakken.webp",
    background: "/img/cases/bg-case-lakken.webp",
    icon: "file-search",
    offer: [custom, veilig, installatie],
    recognize: [
      "Informatieverzoeken stapelen zich op en termijnen komen in gevaar.",
      "Medewerkers lakken dagenlang met de hand namen, adressen en telefoonnummers.",
      "Deze documenten mogen absoluut niet naar een externe AI-dienst.",
    ],
    alsoFor:
      "onderwijsinstellingen, woningcorporaties, advocatenkantoren, HR-afdelingen",
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
    image: "/img/redesign/case-werkorder.webp",
    background: "/img/cases/bg-case-werkorder.webp",
    icon: "mic",
    offer: [custom, installatie],
    recognize: [
      "Je monteurs hebben vieze handen en geen zin om te typen.",
      "Werkorders zijn half ingevuld, dus de klant krijgt vage uitleg bij de factuur.",
      "Extra werk dat de monteur tegenkwam, wordt vergeten door te geven.",
    ],
    alsoFor:
      "fietsenmakers, onderhoudsmonteurs, facilitair beheer, agrarische loonbedrijven",
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
    image: "/img/redesign/case-productteksten.webp",
    background: "/img/cases/bg-case-productteksten.webp",
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
