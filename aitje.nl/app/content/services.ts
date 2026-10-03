// Services (redesign/offer/services, offer/pricing.md, pages/service.md, besluiten 28, 31-37, 51).
// Prices are dummy data until checked before publication (besluit 19).
import type { Service } from "./types";
import { contactLink } from "./site";

export const services: Service[] = [
  {
    slug: "ai-scan",
    name: "AI-scan",
    short:
      "AITJE onderzoekt je werk en je bestaande AI, en laat zien waar AI iets oplevert.",
    icon: "scan",
    image: "/img/redesign/owl-hero.webp",
    headline: "Breng je AI-mogelijkheden in kaart.",
    subline:
      "AITJE onderzoekt je werkprocessen en huidige AI-gebruik. Je ontvangt een praktisch rapport met kansen, prioriteiten en vervolgstappen.",
    cta: { label: "Vraag een AI-scan aan", to: contactLink("ai-scan") },
    intro: [
      "Weet je niet waar je moet beginnen met AI, of gebruik je al van alles zonder overzicht? De AI-scan is de standaard eerste stap. AITJE kijkt naar hoe je werkt, welke software, abonnementen en AI je al gebruikt, en waar tijd, geld of kwaliteit verloren gaat.",
      "Het is geen verkooppraatje voor één product. Het doel is een eerlijk totaalbeeld. De uitkomst kan ook zijn dat je voorlopig niets hoeft te veranderen.",
    ],
    forWho: [
      "Bedrijven die willen ontdekken wat AI voor hun werk kan betekenen",
      "Organisaties die al AI gebruiken, maar geen overzicht hebben",
      "Wie twijfelt of de huidige abonnementen en modellen goed passen",
      "Wie AI veiliger, goedkoper of onafhankelijker wil inzetten",
    ],
    steps: [
      {
        title: "Korte intake",
        text: "Waarom wil je de scan, welke mensen en processen zijn relevant, en vindt de scan op locatie of op afstand plaats?",
      },
      {
        title: "Onderzoeksdagdeel",
        text: "Ongeveer vier uur gesprekken en procesonderzoek: wie doet wat, met welke systemen, en waar ontstaat vertraging of dubbel werk?",
      },
      {
        title: "Gericht meekijken",
        text: "Met jouw toestemming kijkt AITJE beperkt mee in software, voorbeelden of workflows waar dat nodig is.",
      },
      {
        title: "Rapport",
        text: "Een beknopt, praktisch rapport met kansen, prioriteiten, risico's en logische vervolgstappen.",
      },
    ],
    deliverables: [
      "Overzicht van de onderzochte processen en je huidige AI-gebruik",
      "Concrete kansen om AI toe te passen of te verbeteren",
      "Een praktische prioritering van die kansen",
      "De verwachte impact op werk, kwaliteit, kosten of continuïteit",
      "Risico's, aandachtspunten en geadviseerde vervolgstappen",
      "Waar redelijk te berekenen: een globale kosten- of besparingsinschatting",
    ],
    price: {
      label: "Vanaf €595",
      note: "Intake, onderzoeksdagdeel van ongeveer vier uur, beoordeling en rapport. De scope en prijs stem je vooraf af.",
    },
    notIncluded: [
      "Uitgebreide technische modeltests of een volledig technisch ontwerp",
      "Het bouwen of installeren van een oplossing",
      "Een bindende businesscase of financiële garantie",
      "Juridisch, financieel of compliance-advies",
    ],
    faq: [
      {
        q: "Wat is een AI-scan?",
        a: "Een onderzoek naar je werk, je workflows en je bestaande AI. Na een korte intake en een onderzoeksdagdeel krijg je een beknopt rapport met kansen, prioriteiten en vervolgstappen. Vanaf €595 (excl. btw).",
        general: true,
      },
      {
        q: "Moet AITJE langskomen?",
        a: "Niet per se. De scan kan op locatie of op afstand, afhankelijk van wat nodig en praktisch is.",
      },
      {
        q: "Zit ik daarna vast aan een vervolgopdracht?",
        a: "Nee. Het rapport is van jou, ook als je daarna niets bij AITJE afneemt. De uitkomst kan zelfs zijn dat je voorlopig niets hoeft te veranderen.",
      },
      {
        q: "Wat als ik al precies weet wat ik wil?",
        a: "Dan is de scan niet nodig. Met een concrete vraag kun je direct terecht bij [Advies en analyse](/diensten/advies-en-analyse) of [AITJE Custom](/diensten/aitje-custom).",
      },
    ],
    caseSlugs: [
      "council-hub",
      "werkbon-naar-offerte",
      "orders-uit-email-automatisch",
    ],
    related: ["advies-en-analyse", "aitje-custom", "optimalisatie"],
    seoDescription:
      "De AI-scan van AITJE: ontdek waar AI jouw werk makkelijker, beter of goedkoper maakt. Praktisch rapport met kansen en vervolgstappen. Vanaf €595.",
  },
  {
    slug: "token-management-en-optimalisatie",
    name: "Token management & optimalisatie",
    short:
      "Modelkeuze, API-calls en workflows slimmer inrichten. Minder onnodige tokens, met kwaliteit en kosten per eindresultaat in beeld.",
    icon: "workflow",
    image: "/img/redesign/token-management-cutout.webp",
    headline: "De juiste AI per stap. Minder kosten per resultaat.",
    subline:
      "AITJE beheert en optimaliseert calls naar frontier-, lokale en edge-modellen. Met gerichte context, slimme modelrouting en code die het voorbereidende werk doet.",
    cta: {
      label: "Bespreek je tokengebruik",
      to: contactLink("token-management"),
    },
    intro: [
      "Een krachtige LLM hoeft niet elke stap in je workflow uit te voeren. Data ophalen, filteren, berekenen en vaste controles kunnen vaak met code. Het model krijgt alleen de informatie en opdracht die het op dat moment nodig heeft.",
      "AITJE onderzoekt je API-calls en bouwt of verbetert de flow eromheen. We combineren frontier-modellen via externe API's met lokale modellen, modellen op je eigen server of on-device edge-modellen. Per stap kiezen we wat past bij de taak, kwaliteit, snelheid en kosten.",
      "De prijs per miljoen tokens vertelt maar een deel van het verhaal. Een goedkoper model kan voor jouw taak beter werken, terwijl een duurder model soms minder pogingen nodig heeft. We vergelijken met jouw voorbeelden en meten de totale kosten per gecontroleerd, bruikbaar eindresultaat.",
    ],
    forWho: [
      "Teams met hoge of moeilijk voorspelbare kosten voor LLM-API's",
      "Bedrijven die agents of workflows met meerdere modellen gebruiken",
      "Organisaties die frontier-, lokale en edge-modellen willen combineren",
      "IT-bedrijven en bureaus die AI-workflows voor klanten bouwen",
      "Wie een nieuwe API-workflow direct efficiënt wil laten inrichten",
    ],
    steps: [
      {
        title: "Calls en kosten in kaart",
        text: "We bekijken input- en outputtokens, context, modelkeuze, herhaalde calls en mislukte pogingen. De nulmeting omvat kwaliteit, doorlooptijd en kosten per bruikbaar resultaat.",
      },
      {
        title: "Modellen vergelijken",
        text: "Met representatieve taken vergelijken we geschikte frontier-, lokale en edge-modellen. Een lagere tokenprijs is pas een verbetering als de resultaten en snelheid ook passen.",
      },
      {
        title: "Workflow slimmer bouwen",
        text: "Code haalt data op, filtert en controleert. Een centrale laag handelt modelcalls af, routeert per stap en gebruikt waar passend gerichte context, caching, begrensde retries en budgetten.",
      },
      {
        title: "Testen en beheren",
        text: "We vergelijken met de nulmeting en documenteren de inrichting. Logging, gebruikslimieten en een afgesproken vorm van beheer geven grip op kosten en wijzigingen.",
      },
    ],
    deliverables: [
      "Een nulmeting van tokengebruik, calls en kosten per eindresultaat",
      "Een modelvergelijking op jouw taken, met kwaliteit en snelheid",
      "De afgesproken API-workflow en routing tussen modellen",
      "Gerichte context en voorbereiding van data met code",
      "Logging, budgetten en limieten voor het afgesproken gebruik",
      "Een vergelijking vóór en na, inclusief retries en mislukte resultaten",
      "Documentatie en afspraken over toegang, gegevensstromen en beheer",
    ],
    price: {
      label: "Op aanvraag",
      onRequest: true,
      note: "We spreken analyse, bouw, toegang en eventueel doorlopend beheer vooraf af. Modelgebruik, hardware, hosting en externe API-kosten worden apart begroot.",
    },
    notIncluded: [
      "Externe API-kosten, hardware, hosting of softwarelicenties",
      "Een vaste besparing of dezelfde uitkomst voor iedere workflow",
      "Doorlopend beheer buiten de afgesproken opdracht",
    ],
    faq: [
      {
        q: "Wat is Token management & optimalisatie?",
        a: "AITJE beheert en optimaliseert modelcalls, tokengebruik en API-workflows. We kiezen per stap een passend model en laten code data ophalen, filteren en controleren, zodat een LLM minder onnodig werk doet. Lees meer over [Token management & optimalisatie](/diensten/token-management-en-optimalisatie).",
        general: true,
      },
      {
        q: "Werkt dit met frontier-, lokale en edge-modellen?",
        a: "Ja. We kunnen geschikte externe model-API's combineren met lokale endpoints, eigen servers en modellen op apparaten. Beschikbaarheid, capaciteit, gegevensstromen en de taak bepalen welke combinatie past.",
      },
      {
        q: "Kiezen jullie altijd het goedkoopste model?",
        a: "Nee. We testen op jouw taken en vergelijken kwaliteit, snelheid, tokengebruik en het aantal pogingen. Een model met een lagere tokenprijs kan meer calls nodig hebben; een duurder model kan voor een bepaalde stap juist voordeliger uitpakken.",
      },
      {
        q: "Kan een workflow van €4 naar €0,40 per resultaat?",
        a: "Dat is een rekenvoorbeeld, geen vaste belofte. Bij een fictief gelijk tarief van €4 per miljoen tokens kost één miljoen tokens €4 en honderdduizend tokens €0,40. De haalbare besparing hangt af van de workflow, output, kwaliteit en retries. Kosten voor code, hosting, beheer en ontwikkeling staan daar apart van.",
      },
      {
        q: "Wat doet code in plaats van de LLM?",
        a: "Bijvoorbeeld gegevens ophalen via een API, relevante velden selecteren, berekeningen uitvoeren en output tegen vaste regels controleren. Het model krijgt een afgebakende taak met gerichte context, in plaats van alle ruwe data en stappen in één grote prompt.",
      },
      {
        q: "Kunnen jullie ook nieuwe workflows bouwen en API-calls beheren?",
        a: "Ja. AITJE kan een centrale laag voor modelcalls en een nieuwe workflow bouwen, met routing, logging, budgetten en limieten. Ook toegang, veilige omgang met sleutels en een vorm van doorlopend beheer spreken we vooraf af.",
      },
      {
        q: "Wat is het verschil met Optimalisatie?",
        a: "Deze dienst richt zich specifiek op tokengebruik, modelrouting en API-workflows. [Optimalisatie](/diensten/optimalisatie) kijkt breder naar een bestaande AI-oplossing, bijvoorbeeld betrouwbaarheid, stabiliteit en menselijke controle.",
      },
      {
        q: "Hoe meten jullie of een besparing ten koste gaat van de kwaliteit?",
        a: "Door het eindresultaat te testen. We vergelijken de oorspronkelijke en de aangepaste workflow op dezelfde taken en beoordelen of de uitkomst nog aan de afgesproken eisen voldoet. Minder tokens of een goedkoper model is pas een verbetering als het resultaat goed genoeg blijft.",
        general: true,
      },
      {
        q: "Kunnen we zien wat iedere workflow of afdeling aan AI-gebruik kost?",
        a: "Ja. Tijdens een check van je AI-gebruik kunnen we de kosten per workflow of afdeling in kaart brengen. We kijken naar modelcalls, tokengebruik en het aantal pogingen per resultaat. Waar nodig richten we logging in om dat inzicht te krijgen.",
        general: true,
      },
      {
        q: "Wat gebeurt er als een model-API uitvalt of zijn limiet bereikt?",
        a: "Daar kunnen we een fallback voor bouwen: een andere route of een ander model dat de taak overneemt. Voor cruciale stappen kan een lokaal model of een model op het apparaat zelf een goede keuze zijn, zodat die stap minder afhankelijk is van een externe API. Welke terugval mogelijk is, hangt af van de taak en spreken we bij de inrichting af.",
        general: true,
      },
      {
        q: "Kunnen jullie voorkomen dat een vastgelopen workflow eindeloos API-calls blijft doen?",
        a: "Ja. We kunnen limieten voor pogingen en kosten, logging en duidelijke stopmomenten inbouwen. Op belangrijke momenten kan een medewerker eerst moeten beoordelen of de workflow verder mag: human in the loop. Zo combineren we technische grenzen met menselijke controle.",
        general: true,
      },
    ],
    caseSlugs: [],
    related: ["ai-scan", "advies-en-analyse", "optimalisatie", "aitje-custom"],
    seoDescription:
      "Token management & optimalisatie van AITJE: frontier-, lokale en edge-modellen combineren, API-workflows bouwen en onnodige tokens verminderen. Grip op kosten per resultaat.",
  },
  {
    slug: "advies-en-analyse",
    name: "Advies en analyse",
    short:
      "Een concrete AI-vraag laten beantwoorden, een plan laten toetsen of kosten laten doorrekenen.",
    icon: "compass",
    image: "/img/redesign/advice-cutout.webp",
    headline: "Een AI-vraag? Maak je volgende stap concreet.",
    subline:
      "Bespreek je idee, laat een bestaande oplossing beoordelen of onderzoek welke modellen en infrastructuur bij je werk passen.",
    cta: { label: "Bespreek je AI-vraag", to: contactLink("ai-vraag") },
    intro: [
      "Heb je al een concrete vraag, een plan of een bestaande AI-oplossing? Dan hoef je niet eerst een brede scan te doen. AITJE denkt mee in een losse sessie of onderzoekt een groter vraagstuk als afgebakende analyse.",
      "Welk model is goed genoeg voor deze taak? Is een eigen server verstandiger dan een externe API? Waarom levert je workflow te weinig op? Je krijgt een praktisch antwoord waarmee je verder kunt.",
    ],
    forWho: [
      "Organisaties met een concrete AI-vraag",
      "Teams die al AI gebruiken en betere keuzes willen maken",
      "Ondernemers die een technisch idee willen laten toetsen",
      "Wie een second opinion wil op een plan of offerte",
    ],
    steps: [
      {
        title: "Vraag bespreken",
        text: "Je legt je vraag, plan of oplossing voor.",
      },
      {
        title: "Vorm kiezen",
        text: "Een losse adviessessie per uur, of een afgebakende analyse met vooraf afgesproken scope en prijs.",
      },
      {
        title: "Onderzoek",
        text: "AITJE vergelijkt modellen, infrastructuur, kosten of architectuur.",
      },
      {
        title: "Advies",
        text: "Een onderbouwde aanbeveling met vervolgstappen, schriftelijk samengevat.",
      },
    ],
    deliverables: [
      "Beantwoording en beoordeling van je vraag",
      "Een korte schriftelijke samenvatting",
      "Bij een analyse: vergelijking, risico's en een onderbouwde aanbeveling",
      "Mogelijke vervolgstappen, ook als dat 'niets veranderen' is",
    ],
    parts: [
      {
        name: "Kostenanalyse",
        text: "Abonnementen, tokengebruik, modellen en infrastructuur in kaart, met alternatieven en waar het goedkoper of efficiënter kan.",
        price: "Vanaf €499",
      },
      {
        name: "Praktisch werken met AI",
        text: "Training voor je team: goede opdrachten geven, het juiste model kiezen, resultaten controleren en omgaan met gevoelige informatie.",
        price: "Vanaf €399",
      },
      {
        name: "AI-beleid",
        text: "Praktische afspraken over welke tools en gegevens wel en niet mogen, en wie waarvoor verantwoordelijk is.",
        price: "Vanaf €399",
      },
    ],
    price: {
      label: "€85 per uur",
      note: "Voor een losse adviessessie. Een analyse krijgt vooraf een eigen scope en prijs.",
    },
    notIncluded: [
      "Bouw of installatie van de geadviseerde oplossing",
      "Uitgebreide technische tests",
      "Een bindend juridisch oordeel of certificering",
    ],
    faq: [
      {
        q: "Wat doet AITJE bij Advies en analyse?",
        a: "AITJE beantwoordt gerichte vragen over AI-architectuur, modelkeuze, kosten en bestaande opstellingen. Uurtarief €85 (excl. btw), een kostenanalyse vanaf €499.",
        general: true,
      },
      {
        q: "Wat is het verschil met de AI-scan?",
        a: "De AI-scan kijkt breed naar je hele werk. Advies en analyse begint bij een concrete vraag. Is je vraag al duidelijk, dan is een scan niet nodig.",
      },
      {
        q: "Kan ik AITJE los inhuren voor een paar uur?",
        a: "Ja. Een losse adviessessie gaat per uur.",
      },
    ],
    caseSlugs: [
      "productteksten-zonder-tokenkosten",
      "chatgpt-in-je-eigen-organisatie",
    ],
    related: ["ai-scan", "optimalisatie", "veilig-ai-gebruik"],
    seoDescription:
      "Advies en analyse van AITJE: antwoord op je AI-vraag over modelkeuze, architectuur en kosten. Kostenanalyse, training en AI-beleid. €85 per uur.",
  },
  {
    slug: "installatie-en-inrichting",
    name: "Installatie en inrichting",
    short:
      "Hardware of server kiezen, alles installeren en je AI-omgeving gebruiksklaar opleveren.",
    icon: "server",
    image: "/img/redesign/infrastructure.webp",
    headline: "Je eigen AI-omgeving. Gebruiksklaar opgeleverd.",
    subline:
      "AITJE helpt hardware of een server kiezen, installeert de afgesproken onderdelen en richt de omgeving in voor jouw gebruik.",
    cta: {
      label: "Laat AITJE het regelen",
      to: contactLink("product-regelen"),
    },
    intro: [
      "Je wilt een eigen AI-omgeving, maar niet zelf uitzoeken welke hardware, modellen en instellingen je nodig hebt. AITJE regelt het: van advies over capaciteit tot een geteste omgeving met accounts, rollen en uitleg.",
      "Dat geldt voor AITJE-producten, maar ook voor AITJE Custom-oplossingen, geschikte open-source software en eigen servers. Op afstand waar het kan, op locatie waar het moet.",
    ],
    forWho: [
      "Bedrijven die een AI-omgeving willen zonder die zelf technisch op te zetten",
      "Wie AITJE Assistent of Coder gebruiksklaar wil ontvangen",
      "Organisaties die een lokale omgeving of eigen server willen",
      "Makers met geschikte hardware die hulp willen bij de inrichting",
    ],
    steps: [
      {
        title: "Capaciteit bepalen",
        text: "Welke toepassing, welke modellen, hoeveel gebruikers en welke snelheid?",
      },
      {
        title: "Hardware of server",
        text: "Je koopt zelf op advies, of AITJE levert. Hardware die je betaalt, is van jou.",
      },
      {
        title: "Installeren en inrichten",
        text: "Software, modellen, accounts, rollen en waar afgesproken koppelingen en kennisbank.",
      },
      {
        title: "Testen en uitleg",
        text: "AITJE test de werking, geeft uitleg en draagt basisdocumentatie over.",
      },
    ],
    deliverables: [
      "Een geïnstalleerde en geteste AI-omgeving",
      "De afgesproken configuratie en inrichting",
      "Korte uitleg voor gebruikers",
      "Basisdocumentatie",
    ],
    parts: [
      {
        name: "Standaardinstallatie",
        text: "Een AITJE-product op beproefde hardware installeren en inrichten.",
        price: "Vanaf €199",
      },
      {
        name: "Hardwareonderzoek",
        text: "Bij een afwijkende situatie: uitzoeken welke hardware past.",
        price: "€125",
      },
      {
        name: "Onderzoek digitale omgeving",
        text: "Bij maatwerk of een eigen server: je bestaande omgeving beoordelen.",
        price: "€125",
      },
      {
        name: "Uitgebreidere inrichting",
        text: "Kennisbank vullen, documenten opschonen, koppelingen en afwijkende techniek.",
        price: "€85 per uur",
      },
    ],
    price: {
      label: "Vanaf €199",
      note: "Voor een standaardinstallatie met vooraf afgesproken scope. Hardware en serverkosten staan apart in je offerte.",
    },
    notIncluded: [
      "De prijs van hardware of servercapaciteit",
      "Licenties of abonnementen van externe aanbieders",
      "Onbeperkt document- en kennisbankwerk",
      "Updates, modelbeheer en ondersteuning na oplevering",
    ],
    faq: [
      {
        q: "Wat valt onder Installatie en inrichting?",
        a: "Hardware of server kiezen, de omgeving voorbereiden, het product installeren en accounts, modellen en bronnen inrichten, zodat alles gebruiksklaar is. Standaardinstallatie vanaf €199 (excl. btw).",
        general: true,
      },
      {
        q: "Moet ik nieuwe hardware kopen?",
        a: "Niet altijd. Als je bestaande computer of server geschikt is, kan AITJE daarop installeren. Is extra rekenkracht nodig, dan adviseert AITJE wat past.",
      },
      {
        q: "Kan het op afstand?",
        a: "Vaak wel. Een server kan meestal volledig op afstand worden ingericht. Een bezoek ligt voor de hand als er fysieke hardware aangesloten moet worden.",
      },
      {
        q: "Kan ik mijn AI-omgeving veilig vanuit huis of onderweg gebruiken?",
        a: "Ja. AITJE kan toegang op afstand voor je inrichten, met passende beveiliging en toegangsrechten. Dit is een mogelijkheid die we apart inschakelen en afstemmen op je netwerk en de mensen die de omgeving moeten kunnen gebruiken.",
        general: true,
      },
      {
        q: "Kan dezelfde server zowel AITJE Assistent als AITJE Coder draaien?",
        a: "AITJE richt Assistent en Coder liever op aparte omgevingen in. Zo kunnen we de capaciteit en inrichting op elk product afstemmen en voorkomen we dat ze elkaar bij gelijktijdig gebruik in de weg zitten. We adviseren je welke opstelling bij jouw gebruik past.",
        general: true,
      },
      {
        q: "Hoe verhuis ik mijn AI-omgeving naar andere hardware?",
        a: "Een migratie doen we bij voorkeur samen, als aparte dienst. AITJE helpt je bij het overzetten van de omgeving en het exporteren en meenemen van de vectordatabase, tekstchunks en embeddings. Daarna controleren we of de kennisbank en de toepassing op de nieuwe hardware goed werken.",
        general: true,
      },
    ],
    caseSlugs: ["chatgpt-in-je-eigen-organisatie", "spraak-naar-werkorder"],
    related: ["ondersteuning-en-onderhoud", "aitje-custom", "ai-scan"],
    seoDescription:
      "AITJE installeert en richt je eigen AI-omgeving in, op eigen hardware of server. Gebruiksklaar opgeleverd, getest en uitgelegd. Vanaf €199.",
  },
  {
    slug: "optimalisatie",
    name: "Optimalisatie",
    short:
      "Bestaande AI beter, betrouwbaarder of goedkoper maken, ook als een ander hem bouwde.",
    icon: "gauge",
    image: "/img/redesign/raven-scene.webp",
    headline: "Meer halen uit de AI die je al gebruikt.",
    subline:
      "AITJE onderzoekt de werking, kosten en knelpunten en maakt een verbeterplan. Jij kiest welke verbeteringen AITJE uitvoert.",
    cta: {
      label: "Bespreek je huidige AI-oplossing",
      to: contactLink("ai-verbeteren"),
    },
    intro: [
      "Veel bedrijven gebruiken al iets met AI en halen er weinig uit. Wisselende antwoorden, onduidelijke kosten, een workflow die in de praktijk niet stabiel is. AITJE onderzoekt wat er gebeurt en maakt een concreet verbeterplan.",
      "Het maakt niet uit wie de oplossing heeft gebouwd: jijzelf, een andere leverancier of een open-source project. Lokaal, op een server of volledig bij een externe aanbieder.",
    ],
    forWho: [
      "Bedrijven waarvan de AI-resultaten onvoldoende betrouwbaar zijn",
      "Organisaties met hoge of onduidelijke AI-kosten",
      "Teams waarvan een workflow in de praktijk niet stabiel werkt",
      "Wie meer menselijke controle, logging of inzicht wil",
    ],
    steps: [
      {
        title: "Meten en analyseren",
        text: "Kwaliteit, snelheid, kosten, stabiliteit, veiligheid, modelkeuze en menselijke controle.",
      },
      {
        title: "Verbeterplan",
        text: "Bevindingen, knelpunten en voorgestelde verbeteringen, met prioriteit en een inschatting van uren en kosten.",
      },
      {
        title: "Jij kiest",
        text: "Het plan staat op zichzelf. Jij bepaalt wat AITJE daarna uitvoert.",
      },
      {
        title: "Opnieuw testen",
        text: "Uitgevoerde verbeteringen worden getest tegen de afgesproken doelen.",
      },
    ],
    deliverables: [
      "Een praktisch optimalisatieplan",
      "Meetpunten, bevindingen en knelpunten",
      "Voorgestelde verbeteringen met prioriteit en verwachte impact",
      "Een inschatting van benodigde uren en kosten",
    ],
    parts: [
      {
        name: "Guardrailcheck",
        text: "Controle van begrenzingen, menselijke controle, foutafhandeling, noodstop en logging. Inbouwen gaat per uur.",
        price: "€449",
      },
    ],
    price: {
      label: "€85 per uur",
      note: "Voor onderzoek en het verbeterplan. Uitvoering per uur of als projectofferte.",
    },
    notIncluded: [
      "Uitvoering van verbeteringen (apart, na jouw keuze)",
      "Externe licenties, API-kosten, hardware en servercapaciteit",
      "Een garantie op een exact technisch of financieel resultaat",
    ],
    faq: [
      {
        q: "Kan AITJE mijn bestaande AI verbeteren?",
        a: "Ja, via Optimalisatie. AITJE meet hoe je huidige oplossing werkt, maakt een verbeterplan en jij kiest wat er wordt uitgevoerd.",
        general: true,
      },
      {
        q: "Ook als een andere partij de oplossing heeft gebouwd?",
        a: "Ja, zolang AITJE voldoende informatie en toegang krijgt om het werk verantwoord te doen.",
      },
      {
        q: "Is een Guardrailcheck een certificering?",
        a: "Nee. Het is een praktische technische beoordeling, geen juridisch oordeel of garantie dat een systeem nooit fouten maakt.",
      },
    ],
    caseSlugs: ["orders-uit-email-automatisch", "council-hub"],
    related: [
      "advies-en-analyse",
      "ondersteuning-en-onderhoud",
      "aitje-custom",
    ],
    seoDescription:
      "AITJE optimaliseert je bestaande AI: betrouwbaarder, goedkoper en beter onder controle. Verbeterplan, guardrailcheck en uitvoering. €85 per uur.",
  },
  {
    slug: "veilig-ai-gebruik",
    name: "Veilig AI-gebruik",
    short:
      "Weten waar je AI-data heen gaat, en praktische maatregelen om AI veilig te gebruiken.",
    icon: "shield",
    image: "/img/redesign/safe-ai-cutout.webp",
    headline: "Meer controle over je AI en je gegevens.",
    subline:
      "Krijg inzicht in datastromen, instellingen en risico's. AITJE helpt met praktische maatregelen en passende alternatieven.",
    cta: { label: "Bespreek je AI-gebruik", to: contactLink("veilig-ai") },
    intro: [
      "Berichten, documenten en klantgegevens kunnen bij AI-gebruik naar externe aanbieders gaan. Weet jij in welke landen jouw AI-data wordt verwerkt en opgeslagen? AITJE brengt het in kaart en helpt je praktische keuzes maken.",
      "De nadruk ligt op datalocatie, gegevensstromen, instellingen en technische maatregelen. AITJE signaleert aandachtspunten rond privacy en AVG, maar geeft geen bindend juridisch oordeel.",
    ],
    forWho: [
      "Bedrijven die externe AI-diensten gebruiken voor berichten en documenten",
      "Organisaties die met persoonsgegevens of vertrouwelijke informatie werken",
      "Wie wil weten welke instellingen aan of uit staan",
      "IT-partners die hun klanten willen helpen AI verantwoord te gebruiken",
    ],
    steps: [
      {
        title: "Inventariseren",
        text: "Welke AI-diensten, aanbieders en modellen worden gebruikt, en welke gegevens gaan waarheen?",
      },
      {
        title: "Locaties in kaart",
        text: "Servers, aanbieders en landen voor verwerking en opslag, voor zover vast te stellen.",
      },
      {
        title: "Aandachtspunten",
        text: "Wat aanbieders bewaren, wie toegang heeft, welke instellingen beschikbaar zijn en wat onduidelijk blijft.",
      },
      {
        title: "Advies",
        text: "Verbeteradvies op hoofdlijnen. Aanpassingen zijn een apart traject, jij kiest wat er gebeurt.",
      },
    ],
    deliverables: [
      "Overzicht van gebruikte diensten, gegevensstromen, servers en landen",
      "Onderscheid tussen vastgestelde en onbekende informatie",
      "Aandachtspunten en verbeteradvies op hoofdlijnen",
    ],
    parts: [
      {
        name: "AI-datalocatiecheck",
        text: "In welke landen wordt jouw AI-data verwerkt en opgeslagen? Aanbieders, bekende servers, landen en instellingen in kaart.",
        price: "€1.499",
      },
      {
        name: "Praktische maatregelen",
        text: "Minder gegevens delen, persoonsgegevens verwijderen voor een extern model, lokale AI inzetten, toegangsrechten en menselijke controle.",
        price: "Per uur",
      },
      {
        name: "AI-wegwijs",
        text: "Uitleg, richtlijnen en hulpmiddelen om slim en veilig met AI te werken, als onderdeel van je samenwerking of los.",
        price: "Op aanvraag",
      },
    ],
    price: {
      label: "€1.499",
      note: "Voor de AI-datalocatiecheck. Vervolgonderzoek en aanpassingen gaan per uur.",
    },
    notIncluded: [
      "Een bindend juridisch oordeel, certificering of compliancegarantie",
      "Migratie of uitgewerkt alternatief ontwerp",
      "Uitgebreid vervolgonderzoek",
    ],
    faq: [
      {
        q: "Hoe helpt AITJE bij veilig AI-gebruik?",
        a: "Met de AI-datalocatiecheck zie je waar je AI-data wordt verwerkt en opgeslagen. Daarnaast zijn er praktische richtlijnen en training. AITJE signaleert aandachtspunten, maar geeft geen juridisch oordeel.",
        general: true,
      },
      {
        q: "Is een Nederlandse server automatisch veilig?",
        a: "Nee. Een locatie zegt iets, maar niet alles. AITJE kijkt ook naar wie toegang heeft, wat er bewaard wordt en welke instellingen aan staan.",
      },
      {
        q: "Vervangt dit een jurist of privacy officer?",
        a: "Nee. AITJE levert de technische kant: waar gegevens heen gaan en welke maatregelen mogelijk zijn. Voor een juridisch oordeel heb je een specialist nodig.",
      },
    ],
    caseSlugs: [
      "documenten-doorzoeken-en-lakken",
      "chatgpt-in-je-eigen-organisatie",
    ],
    related: ["advies-en-analyse", "installatie-en-inrichting", "ai-scan"],
    seoDescription:
      "Veilig AI-gebruik met AITJE: ontdek waar je AI-data wordt verwerkt en opgeslagen, en neem praktische maatregelen. AI-datalocatiecheck €1.499.",
  },
  {
    slug: "aitje-custom",
    name: "AITJE Custom — AI op maat",
    short: "Van AI-idee naar werkende oplossing, in afgesproken urenblokken.",
    icon: "sparkles",
    image: "/img/covers/v2/aitje-custom.webp",
    headline: "Van AI-idee naar werkende oplossing.",
    subline:
      "AITJE onderzoekt en bouwt in afgesproken urenblokken. Na iedere fase zie je de voortgang en bepaal je de volgende stap.",
    cta: { label: "Bespreek je AI-idee", to: contactLink("ai-op-maat") },
    intro: [
      "Een agent die tickets voorbereidt. Een koppeling met je offertesysteem. AI op de tablet die al in je werkplaats hangt. Als een vast product niet past, bouwt AITJE wat je nodig hebt: modellen, software, hardware en eigen ontwikkeling samengebracht tot een werkende oplossing.",
      "Geen groot project met een onzekere einddatum. AITJE werkt in urenblokken die jij goedkeurt, eerst naar een werkende MVP: een eerste versie die laat zien dat het idee werkt. Daarna kies jij of en hoe je verdergaat.",
    ],
    forWho: [
      "Bedrijven en organisaties met een specifieke AI-vraag",
      "Makers en professionals met een idee voor een eigen toepassing",
      "IT-bedrijven en bureaus die AI-ontwikkeling voor klanten willen laten doen",
    ],
    steps: [
      {
        title: "Vraag en eerste stap",
        text: "Wat moet er onderzocht of gebouwd worden, en welke voortgang wil je zien?",
      },
      {
        title: "Uren afspreken",
        text: "Jij geeft aan hoeveel uur beschikbaar is. AITJE zegt eerlijk of daarin een zinvolle stap past.",
      },
      {
        title: "Bouwen",
        text: "AITJE werkt binnen het afgesproken urenblok aan de gekozen stap.",
      },
      {
        title: "Voortgang laten zien",
        text: "Wat werkt, wat is onderzocht en wat staat nog open.",
      },
      {
        title: "Jij kiest",
        text: "Bijsturen, stoppen of akkoord op een volgend blok. AITJE begint pas na jouw akkoord.",
      },
    ],
    deliverables: [
      "Een werkende MVP die de kernwerking aantoont",
      "Na iedere fase een demonstratie van de voortgang",
      "Daarna naar keuze: afwerking, koppelingen, installatie en documentatie",
      "De klantspecifieke oplossing wordt jouw eigendom volgens de afgesproken oplevering",
    ],
    price: {
      label: "€85 per uur",
      note: "In vooraf afgesproken urenblokken. Hardware, servercapaciteit en externe licenties apart.",
    },
    notIncluded: [
      "Zelf elektronica ontwerpen of veel fysieke hardware aanpassen",
      "Ondersteuning en onderhoud na oplevering (apart af te spreken)",
      "Een garantie dat ieder idee haalbaar is; onderzoeksuren blijven betaald",
    ],
    faq: [
      {
        q: "Hoe werkt AITJE Custom?",
        a: "In vooraf afgesproken urenblokken tegen €85 per uur (excl. btw). Na ieder blok zie je de voortgang en beslis jij over doorgaan, bijsturen of stoppen. Het doel is eerst een werkende MVP.",
        general: true,
      },
      {
        q: "Is er een minimumaantal uren?",
        a: "Er is geen vast minimum. Een blok moet wel genoeg ruimte bieden voor zinvol onderzoek of zichtbare voortgang. AITJE zegt vooraf eerlijk wat haalbaar is.",
      },
      {
        q: "Van wie is de oplossing?",
        a: "De klantspecifieke oplossing wordt jouw eigendom volgens de afgesproken oplevering. AITJE mag generieke onderdelen en opgedane kennis hergebruiken.",
      },
      {
        q: "Kan AITJE ook een model bijtrainen?",
        a: "Ja, fine-tuning kan binnen een Custom-traject als de taak en de beschikbare data daarvoor geschikt zijn.",
      },
    ],
    caseSlugs: [
      "council-hub",
      "werkbon-naar-offerte",
      "orders-uit-email-automatisch",
      "spraak-naar-werkorder",
    ],
    related: [
      "ai-scan",
      "installatie-en-inrichting",
      "ondersteuning-en-onderhoud",
    ],
    seoDescription:
      "AITJE Custom — AI op maat: van AI-idee naar werkende oplossing, in urenblokken die jij goedkeurt. Agents, workflows, koppelingen en AI op eigen hardware.",
  },
  {
    slug: "ondersteuning-en-onderhoud",
    name: "Ondersteuning en onderhoud",
    short:
      "Hulp, updates, modelbeheer en een periodieke AI-APK, met AITJE Core, Plus of Max.",
    icon: "lifebuoy",
    image: "/img/redesign/support.webp",
    headline: "Hulp bij vandaag. Meedenken over morgen.",
    subline:
      "Met AITJE Core, Plus of Max spreek je af welke ondersteuning, onderhoud en verdere begeleiding bij jouw omgeving passen.",
    cta: { label: "Bespreek je SLA", to: contactLink("sla") },
    intro: [
      "Modellen veranderen snel. Wat vandaag de beste keuze is, kan over een paar maanden trager of duurder zijn dan een alternatief. Met een SLA (Service Level Agreement) houdt AITJE je omgeving actueel en ben je niet alleen als er iets misgaat.",
      "Je product blijft ook zonder SLA werken. Een SLA is er voor wie wil dat iemand meekijkt, bijhoudt en bereikbaar is.",
    ],
    forWho: [
      "Klanten met een AITJE-product of AI-omgeving",
      "Wie updates en nieuwe modellen niet zelf wil bijhouden",
      "Organisaties die periodiek willen laten controleren of hun opstelling nog de beste is",
    ],
    steps: [
      {
        title: "Niveau kiezen",
        text: "Core, Plus of Max, afhankelijk van hoeveel hulp en meedenken je wilt.",
      },
      {
        title: "Service-uren",
        text: "Voor hulp, onderhoud, modelupdates en kleine verbeteringen.",
      },
      {
        title: "Maandelijks bericht",
        text: "Een persoonlijke ontwikkelingsmail over wat er voor jouw omgeving verandert.",
      },
      {
        title: "AI-APK",
        text: "Bij Plus en Max per kwartaal: is je opstelling nog de beste en goedkoopste voor dit werk?",
      },
    ],
    deliverables: [
      "Service-uren per maand voor hulp en onderhoud",
      "Modelbeheer: nieuwe relevante modellen beoordelen en installeren in overleg",
      "Maandelijkse persoonlijke ontwikkelingsmail",
      "Bij Plus en Max: telefonisch contact en een AI-APK per kwartaal",
    ],
    price: {
      label: "Vanaf €49,99 per maand",
      note: "Opzeggen tijdens een maand betekent beëindiging aan het einde van de volgende kalendermaand.",
    },
    notIncluded: [
      "Extra werk buiten de service-uren (na akkoord, tegen normaal uurtarief)",
      "Grote uitbreidingen en productontwikkeling (apart geoffreerd)",
      "Vastgestelde reactietijden (nog niet afgesproken)",
    ],
    faq: [
      {
        q: "Wat houdt Ondersteuning en onderhoud in?",
        a: "Een maandelijks abonnement met service-uren voor hulp, updates, modelbeheer en kleine verbeteringen: AITJE Core, Plus of Max, vanaf €49,99 per maand (excl. btw).",
        general: true,
      },
      {
        q: "Werkt mijn product nog zonder SLA?",
        a: "Ja. Je gekochte productversie blijft werken. Updates, nieuwe modellen en hulp regel je dan los wanneer je ze nodig hebt.",
      },
      {
        q: "Wat gebeurt er met ongebruikte uren?",
        a: "Ongebruikte uren gaan één maand mee, met maximaal één maandtegoed. De oudste uren gaan eerst.",
      },
    ],
    caseSlugs: ["chatgpt-in-je-eigen-organisatie", "council-hub"],
    related: ["installatie-en-inrichting", "optimalisatie", "aitje-custom"],
    seoDescription:
      "Ondersteuning en onderhoud van AITJE: service-uren, modelbeheer en een periodieke AI-APK. AITJE Core, Plus of Max, vanaf €49,99 per maand.",
  },
];

export const slaPlans = [
  {
    name: "AITJE Core",
    price: "€49,99",
    hours: 1,
    maxHours: 2,
    features: [
      "E-mailcontact",
      "Maandelijkse ontwikkelingsmail",
      "Modelbeheer binnen service-uren",
    ],
    highlight: false,
  },
  {
    name: "AITJE Plus",
    price: "€129,99",
    hours: 2,
    maxHours: 4,
    features: [
      "E-mail en telefonisch contact",
      "Maandelijkse ontwikkelingsmail",
      "AI-APK en advies per kwartaal",
    ],
    highlight: true,
  },
  {
    name: "AITJE Max",
    price: "€249",
    hours: 3,
    maxHours: 6,
    features: [
      "E-mail en telefonisch contact",
      "Prioriteit bij verzoeken",
      "AI-APK en advies per kwartaal",
      "Maandelijks een toepassingsidee voor jouw bedrijf",
      "Kwartaaloverleg over verdere ontwikkeling",
    ],
    highlight: false,
  },
];

export const partnerService = {
  slug: "voor-it-bedrijven",
  name: "Voor IT-bedrijven en bureaus",
  short:
    "AITJE als AI-specialist voor jouw klanten. Jij houdt de klantrelatie.",
  icon: "handshake",
};

// Generated nature-and-technology environments, one scene per service.
// Prompts and source files: output/imagegen/service-backgrounds-manifest.json.
for (const service of services) {
  service.background = `/img/services/nature-tech/${service.slug}.webp`;
}

// Add the specialist service alongside existing related offers.
for (const service of services) {
  if (["ai-scan", "advies-en-analyse", "optimalisatie", "aitje-custom"].includes(service.slug)) {
    service.related.push("token-management-en-optimalisatie");
  }
}

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
export const featuredServices = ["ai-scan", "aitje-custom"];
