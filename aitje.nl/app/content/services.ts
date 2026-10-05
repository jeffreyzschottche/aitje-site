// Services (redesign/offer/services, offer/pricing.md, pages/service.md, besluiten 28, 31-37, 51).
// Prices are dummy data until checked before publication (besluit 19).
import type { Service } from "./types";
import { contactLink } from "./site";

export const services: Service[] = [
  {
    slug: "ai-scan",
    name: "AI-scan",
    short:
      "Ontdek waar AI jouw werk kan verbeteren, met een praktisch rapport en duidelijke prioriteiten.",
    icon: "scan",
    highlights: [
      { icon: "workflow", text: "Je werk als vertrekpunt" },
      { icon: "users", text: "Circa 4 uur onderzoek" },
      { icon: "compass", text: "Een rapport met richting" },
    ],
    image: "/img/redesign/owl-hero.webp",
    headline: "Waar kan AI jouw werk verbeteren?",
    subline:
      "Van terugkerende taken tot je huidige AI-gebruik: AITJE onderzoekt hoe je werkt en waar verbetering mogelijk is. Je ontvangt een praktisch rapport met kansen, prioriteiten en vervolgstappen.",
    cta: { label: "Vraag een AI-scan aan", to: contactLink("ai-scan") },
    intro: [
      "De AI-scan is een onderzoek naar hoe jouw organisatie werkt en waar AI iets kan toevoegen. AITJE kijkt naar taken, systemen, informatie en huidig AI-gebruik om te bepalen waar tijd, geld of kwaliteit verloren gaat.",
      "Je ontvangt een praktisch rapport met concrete kansen en prioriteiten. Zo kun je kiezen wat je wilt verbeteren en wat daarvoor nodig is. De uitkomst kan ook zijn dat je voorlopig niets hoeft te veranderen.",
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
        a: "Een onderzoek naar je werkprocessen, de systemen die je gebruikt en je huidige AI-gebruik. Na een korte intake en een onderzoeksdagdeel van ongeveer vier uur ontvang je een praktisch rapport met kansen, prioriteiten en vervolgstappen. Vanaf €595 (excl. btw), met scope en prijs vooraf afgesproken.",
        general: true,
      },
      {
        q: "Moet AITJE langskomen?",
        a: "Niet per se. De scan kan op locatie of op afstand, afhankelijk van wat nodig en praktisch is.",
      },
      {
        q: "Is de scan ook nuttig als mijn bedrijf nog geen AI gebruikt?",
        a: "Ja. Je bestaande werk is het vertrekpunt. AITJE onderzoekt waar informatie zoeken, terugkerende handelingen of andere taken mogelijk beter kunnen. Je hoeft nog geen model, toepassing of AI-plan te hebben gekozen.",
      },
      {
        q: "Wat moet ik voorbereiden?",
        a: "In de intake stem je af welke processen en medewerkers relevant zijn. Concrete voorbeelden van het werk, de gebruikte software en eventuele AI-abonnementen helpen om de situatie te begrijpen. Je bepaalt samen met AITJE welke informatie daarvoor nodig is en mag worden gedeeld.",
      },
      {
        q: "Kijkt de AI-scan ook naar abonnementen en tokenkosten?",
        a: "Ja. De scan brengt huidig AI-gebruik, abonnementen en mogelijke optimalisaties op hoofdlijnen in kaart. Een diepere modelvergelijking, het aanpassen van workflows en beheer worden apart afgesproken via [Token management & optimalisatie](/diensten/token-management-en-optimalisatie).",
      },
      {
        q: "Krijgt AITJE toegang tot al mijn systemen en gegevens?",
        a: "Volledige systeemtoegang is geen standaardonderdeel. De scan bestaat vooral uit gesprekken en procesonderzoek. Met jouw toestemming kijkt AITJE gericht mee in software, documenten of workflows wanneer dat nodig is.",
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
      "documenten-doorzoeken-en-lakken",
      "productteksten-zonder-tokenkosten",
      "chatgpt-of-codex-in-je-eigen-organisatie",
    ],
    related: ["advies-en-analyse", "aitje-custom", "optimalisatie"],
    seoDescription:
      "De AI-scan van AITJE: ontdek waar AI jouw werk makkelijker, beter of goedkoper maakt. Praktisch rapport met kansen en vervolgstappen. Vanaf €595.",
  },
  {
    slug: "token-management-en-optimalisatie",
    name: "Token management & optimalisatie",
    short:
      "Breng AI-gebruik en kosten in kaart. Stem abonnementen, modellen en workflows af op het werk van je organisatie.",
    icon: "workflow",
    highlights: [
      { icon: "workflow", text: "AI-gebruik in kaart" },
      { icon: "gauge", text: "Modellen en budget afwegen" },
      { icon: "code", text: "Slimmer met tokens" },
    ],
    image: "/img/redesign/token-management-cutout.webp",
    headline: "De juiste AI per stap. Minder kosten per resultaat.",
    subline:
      "Content, kennis, beeld of code: AITJE onderzoekt waar je organisatie AI voor gebruikt en wat dat kost. Daarna worden abonnementen, modellen en workflows afgestemd op de taak.",
    cta: {
      label: "Bespreek je tokengebruik",
      to: contactLink("token-management"),
    },
    intro: [
      "Waar gaan je AI-budget en tokens naartoe? AITJE brengt in kaart welke teams AI gebruiken, voor welke taken en via welke abonnementen, API’s en eigen modellen. Van teksten schrijven en kennis doorzoeken tot beelden genereren, code bouwen en andere toepassingen.",
      "Vervolgens onderzoekt AITJE welke inrichting beter past: meerdere kleinere abonnementen, een gedeeld modelbudget, groepen gespecialiseerde agents of een combinatie van externe, lokale en edge-modellen. De keuze volgt het werk, de kwaliteit en de totale kosten per bruikbaar resultaat.",
      "Ook de workflow zelf telt. Taken opdelen, gerichte informatie meegeven en vaste handelingen met code uitvoeren kan onnodig tokengebruik verminderen. Deze dienst is los af te nemen; de [AI-scan](/diensten/ai-scan) brengt je gebruik en optimalisatiekansen op hoofdlijnen in kaart.",
    ],
    forWho: [
      "Teams met losse AI-abonnementen en weinig overzicht",
      "Organisaties met hoge of wisselende API-kosten",
      "Wie AI gebruikt voor content, kennis, beeld of code",
      "Bedrijven met agents en geautomatiseerde workflows",
      "Wie externe, lokale en edge-modellen wil combineren",
      "IT-bedrijven die AI-gebruik voor klanten beheren",
    ],
    steps: [
      {
        title: "Gebruik in kaart",
        text: "Welke teams gebruiken AI, voor welke taken en tegen welke kosten? AITJE inventariseert abonnementen, modellen, tokens en ander verbruik, zoals beeldcredits. Waar beschikbaar wordt ook kwaliteit, doorlooptijd en herhaald werk gemeten.",
      },
      {
        title: "De inrichting kiezen",
        text: "Met jouw taken vergelijkt AITJE abonnementen, API’s en passende externe, lokale en edge-modellen. Ook gedeelde budgetten en groepen gespecialiseerde agents kunnen onderdeel zijn van de aanpak.",
      },
      {
        title: "Gericht aanpassen",
        text: "Binnen de afgesproken scope worden taken verdeeld, prompts verkleind en gegevens gericht opgehaald. Code doet het vaste werk; het gekozen model krijgt de juiste context. Waar nuttig komen er limieten, hergebruik van resultaten en centrale modelrouting bij.",
      },
      {
        title: "Het resultaat toetsen",
        text: "AITJE vergelijkt de kosten, kwaliteit en snelheid vóór en na de aanpassingen, inclusief extra pogingen. Documentatie, logging en afgesproken beheer helpen om het gebruik te blijven volgen.",
      },
    ],
    deliverables: [
      "Overzicht van AI-gebruik per team en taak, voor zover meetbaar",
      "Inzicht in abonnementen, tokens, API-kosten en ander modelverbruik",
      "Een onderbouwd voorstel voor modellen, budgetten en workflows",
      "De afgesproken aanpassingen aan modelcalls, context en taakverdeling",
      "Een vergelijking van kosten en kwaliteit vóór en na uitvoering",
      "Logging en gebruikslimieten waar afgesproken",
      "Documentatie en afspraken over gegevens, toegang en eventueel beheer",
    ],
    price: {
      label: "Op aanvraag",
      onRequest: true,
      note: "Inventarisatie, vergelijking, uitvoering en eventueel beheer worden vooraf afgebakend. Je kunt ook alleen een analyse laten doen. Abonnementen, modelgebruik, hardware en hosting worden apart begroot.",
    },
    notIncluded: [
      "Externe API-kosten, hardware, hosting of softwarelicenties",
      "Een vaste besparing of dezelfde uitkomst voor iedere workflow",
      "Doorlopend beheer buiten de afgesproken opdracht",
    ],
    faq: [
      {
        q: "Wat is Token management & optimalisatie?",
        a: "AITJE brengt in kaart waarvoor je organisatie AI gebruikt en wat dat kost. Vervolgens worden abonnementen, modelkeuze, agents en workflows onderzocht en waar afgesproken aangepast. Het doel is minder onnodig verbruik met behoud van de benodigde kwaliteit. Lees meer over [Token management & optimalisatie](/diensten/token-management-en-optimalisatie).",
        general: true,
      },
      {
        q: "Is dit onderdeel van de AI-scan of een losse dienst?",
        a: "Beide. De [AI-scan](/diensten/ai-scan) bekijkt je huidige AI-gebruik, abonnementen en optimalisatiekansen op hoofdlijnen. Een uitgebreide modelvergelijking, het aanpassen van workflows en doorlopend beheer vallen onder een afzonderlijk afgesproken opdracht. Je kunt deze dienst ook direct afnemen, zonder eerst een scan te doen.",
      },
      {
        q: "Gaat het alleen om taalmodellen en API’s?",
        a: "Nee. AITJE kijkt ook naar AI-gebruik via abonnementen en naar toepassingen voor content, kennis, beeld, code en andere taken. Niet iedere dienst rekent in tokens: bij beeld, audio of video kunnen bijvoorbeeld credits, aantallen beelden of minuten relevant zijn. Die verbruiksgegevens worden meegenomen in de kosten per bruikbaar resultaat.",
      },
      {
        q: "Kan een andere combinatie van abonnementen voordeliger zijn?",
        a: "Dat kan. Meerdere kleinere abonnementen, een gedeeld modelbudget of API-gebruik kunnen beter passen dan de huidige inrichting. AITJE vergelijkt het werkelijke gebruik, de inbegrepen capaciteit, limieten, kwaliteit en voorwaarden. Welke combinatie past, hangt af van je team en taken.",
      },
      {
        q: "Wat bedoelt AITJE met agentclusters?",
        a: "Groepen agents die ieder een afgebakend deel van het werk uitvoeren, bijvoorbeeld informatie ophalen, tekst schrijven en het resultaat controleren. Elke stap kan een passend model en gerichte context krijgen. AITJE beoordeelt of die verdeling voor jouw workflow iets oplevert; extra agents kunnen ook extra calls en beheer betekenen.",
      },
      {
        q: "Werkt dit met frontier-, lokale en edge-modellen?",
        a: "Ja. AITJE kan geavanceerde modellen via externe API’s combineren met modellen op eigen servers of lokale apparaten. Edge-modellen draaien op of dicht bij het apparaat waarop de taak plaatsvindt. De taak, capaciteit en gegevensstromen bepalen wat past. Bij eigen modellen blijven hardware, stroom, hosting en beheer onderdeel van de kosten.",
      },
      {
        q: "Kiest AITJE altijd het goedkoopste model?",
        a: "Nee. AITJE test op jouw taken en vergelijkt kwaliteit, snelheid, verbruik en het aantal pogingen. Een model met een lagere tokenprijs kan meer calls nodig hebben; een duurder model kan voor een bepaalde stap juist voordeliger uitpakken.",
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
        q: "Kan AITJE ook nieuwe workflows bouwen en API-calls beheren?",
        a: "Ja. AITJE kan een centrale laag voor modelcalls en een nieuwe workflow bouwen, met routing, logging, budgetten en limieten. Ook toegang, omgang met sleutels en een vorm van doorlopend beheer worden vooraf afgesproken.",
      },
      {
        q: "Wat is het verschil met Optimalisatie?",
        a: "Deze dienst richt zich op AI-gebruik en kosten binnen je organisatie: abonnementen, modellen, agents en workflows. [Optimalisatie](/diensten/optimalisatie) beoordeelt een bestaande AI-oplossing breder, bijvoorbeeld op betrouwbaarheid, stabiliteit en menselijke controle.",
      },
      {
        q: "Hoe meet AITJE of een besparing ten koste gaat van de kwaliteit?",
        a: "Door het eindresultaat te testen. AITJE vergelijkt de oorspronkelijke en de aangepaste workflow op dezelfde taken en beoordeelt of de uitkomst nog aan de afgesproken eisen voldoet. Minder tokens of een goedkoper model is pas een verbetering als het resultaat goed genoeg blijft.",
        general: true,
      },
      {
        q: "Kunnen we zien wat iedere workflow of afdeling aan AI-gebruik kost?",
        a: "Ja, voor zover het gebruik meetbaar en toe te wijzen is. AITJE bekijkt abonnementen, modelcalls, tokengebruik en ander verbruik per taak of team. Waar nodig kan logging worden ingericht om dat inzicht te krijgen.",
        general: true,
      },
      {
        q: "Wat gebeurt er als een model-API uitvalt of zijn limiet bereikt?",
        a: "AITJE kan een fallback bouwen: een andere route of een ander model dat de taak overneemt. Voor cruciale stappen kan een lokaal of edge-model een goede keuze zijn. Welke terugval mogelijk is, hangt af van de taak en wordt bij de inrichting afgesproken.",
        general: true,
      },
      {
        q: "Kan AITJE voorkomen dat een vastgelopen workflow eindeloos API-calls blijft doen?",
        a: "AITJE kan limieten voor pogingen en kosten, logging en duidelijke stopmomenten inbouwen. Op belangrijke momenten kan een medewerker eerst moeten beoordelen of de workflow verder mag: human in the loop. Zo worden technische grenzen gecombineerd met menselijke controle.",
        general: true,
      },
    ],
    caseSlugs: ["chatgpt-of-codex-in-je-eigen-organisatie", "productteksten-zonder-tokenkosten", "3d-productmodellen-met-ai"],
    related: ["ai-scan", "advies-en-analyse", "optimalisatie", "aitje-custom"],
    seoDescription:
      "AITJE brengt AI-gebruik en kosten in kaart voor content, kennis, beeld en code. Optimaliseer abonnementen, modellen en workflows. Los af te nemen of als verdieping op de AI-scan.",
  },
  {
    slug: "advies-en-analyse",
    name: "Advies en analyse",
    short:
      "Een concrete AI-vraag laten beantwoorden, een plan laten toetsen of kosten laten doorrekenen.",
    icon: "compass",
    highlights: [
      { icon: "message", text: "Je vraag uitgedacht" },
      { icon: "shield", text: "Tests en risico’s in beeld" },
      { icon: "compass", text: "Een uitvoerbaar plan" },
    ],
    image: "/img/redesign/advice-cutout.webp",
    headline: "Een AI-vraag? Maak je volgende stap concreet.",
    subline:
      "Van idee naar een uitvoerbaar plan. AITJE denkt de techniek, de kosten en de controles uit, zodat je weet wat er nodig is om te bouwen.",
    cta: { label: "Bespreek je AI-vraag", to: contactLink("ai-vraag") },
    intro: [
      "Je hebt een vraag over AI, een idee voor een toepassing of een oplossing die beter moet werken. AITJE onderzoekt wat je wilt bereiken en denkt concreet uit hoe dat in jouw organisatie kan werken. Een brede AI-scan is daarvoor niet nodig.",
      "Van de gegevens en koppelingen tot de modelkeuze en de kosten. Ook de lastige situaties komen aan bod: wat als informatie ontbreekt, een model een fout maakt of een API uitvalt? Je krijgt duidelijke keuzes, een aanpak en inzicht in de benodigde uren.",
    ],
    forWho: [
      "Een concrete AI-vraag of een nieuw idee",
      "Een bestaande oplossing die beter moet werken",
      "Een plan dat je wilt laten uitdenken",
      "Een second opinion op een plan of offerte",
    ],
    steps: [
      {
        title: "Je vraag scherp",
        text: "Wat moet de oplossing doen, voor wie en wanneer is het resultaat goed genoeg? AITJE bekijkt je proces en de systemen die erbij horen.",
      },
      {
        title: "Onderzoek afspreken",
        text: "Een korte sessie of een diepere analyse: je spreekt vooraf de scope, de oplevering, het tarief en de verwachte uren af.",
      },
      {
        title: "De details uitdenken",
        text: "AITJE onderzoekt modellen, data, koppelingen en kosten. Valkuilen, testcases en guardrails worden uitgewerkt voor jouw toepassing.",
      },
      {
        title: "Een uitvoerbaar plan",
        text: "Je ontvangt de keuzes, de aanpak en een raming van de benodigde bouwuren. Na jouw akkoord op het plan en de uren kan AITJE de oplossing bouwen.",
      },
    ],
    deliverables: [
      "Een helder antwoord op je AI-vraag",
      "Een onderbouwde keuze voor modellen en infrastructuur",
      "Een plan voor de data, koppelingen en workflow",
      "Valkuilen, testcases en benodigde controles",
      "Een raming van kosten, uren en vervolgstappen",
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
      label: "Vast uurtarief",
      note: "Je spreekt vooraf het uurtarief, de scope en de verwachte uren af. Een grotere analyse krijgt een eigen voorstel. Eventuele bouw wordt apart begroot en start na jouw akkoord.",
    },
    notIncluded: [
      "Bouw of installatie van de geadviseerde oplossing",
      "Een prototype of uitgebreide modeltests, tenzij afgesproken",
      "Een bindend juridisch oordeel of certificering",
    ],
    faq: [
      {
        q: "Wat doet AITJE bij Advies en analyse?",
        a: "AITJE werkt je AI-vraag uit tot een concreet advies of uitvoerbaar plan. Daarbij komen de techniek, modelkeuze, kosten, valkuilen, testcases en controles aan bod. De diepgang en oplevering spreek je vooraf af.",
        general: true,
      },
      {
        q: "Wat is het verschil met de AI-scan?",
        a: "De AI-scan kijkt breed naar je hele werk. Advies en analyse begint bij een concrete vraag. Is je vraag al duidelijk, dan is een scan niet nodig.",
      },
      {
        q: "Kan ik AITJE los inhuren voor een paar uur?",
        a: "Ja. Voor een gerichte vraag kan AITJE een paar uur meedenken. Het vaste uurtarief en de verwachte uren spreek je vooraf af. Een groter vraagstuk krijgt een afgebakend voorstel.",
      },
      {
        q: "Wordt het idee ook getest?",
        a: "AITJE bepaalt welke testcases nodig zijn en hoe je beoordeelt of de oplossing goed werkt. Denk aan ontbrekende gegevens, tegenstrijdige bronnen of een uitgevallen koppeling. Als een prototype of modeltest nodig is voor de analyse, worden het werk en de uren vooraf meegenomen in het voorstel.",
      },
      {
        q: "Wat zijn guardrails?",
        a: "Guardrails zijn grenzen en controles voor de oplossing. Bijvoorbeeld welke gegevens AI mag gebruiken, welke acties een medewerker eerst moet goedkeuren, hoeveel een taak mag kosten en wanneer het systeem moet stoppen of terugvallen op een andere route. AITJE werkt uit welke controles bij jouw toepassing passen.",
      },
      {
        q: "Kan AITJE het plan daarna ook bouwen?",
        a: "Ja. AITJE kan het plan bouwen en inrichten nadat je akkoord hebt gegeven op het plan en de benodigde uren. Advies verplicht je niet tot vervolgwerk; je kunt het plan ook zelf of met een andere partij uitvoeren.",
      },
    ],
    caseSlugs: [
      "productteksten-zonder-tokenkosten",
      "chatgpt-of-codex-in-je-eigen-organisatie",
    ],
    related: ["ai-scan", "optimalisatie", "veilig-ai-gebruik"],
    seoDescription:
      "Van AI-vraag naar uitvoerbaar plan. AITJE onderzoekt architectuur, modellen, kosten, testcases en guardrails. Vast uurtarief en uren vooraf afgesproken.",
  },
  {
    slug: "installatie-en-inrichting",
    name: "Installatie en inrichting",
    short:
      "Een passende computer, server of GPU-VPS kiezen en je AI-oplossing volledig ingericht opleveren.",
    icon: "server",
    highlights: [
      { icon: "server", text: "Hardware of server" },
      { icon: "cpu", text: "Software en modellen" },
      { icon: "check", text: "Klaar voor gebruik" },
    ],
    image: "/img/redesign/infrastructure.webp",
    headline: "Je eigen AI-omgeving. Gebruiksklaar opgeleverd.",
    subline:
      "Op nieuwe of bestaande hardware, een eigen server of een GPU-VPS. AITJE stemt de omgeving af op jouw doel en installeert de software, modellen en gegevensopslag die je oplossing nodig heeft.",
    cta: {
      label: "Laat AITJE het regelen",
      to: contactLink("product-regelen"),
    },
    intro: [
      "De juiste omgeving begint bij wat je wilt doen. Een assistent voor je team, een coding agent of een workflow met een eigen kennisbank vraagt telkens om andere capaciteit en instellingen. AITJE kiest samen met jou een passende computer of server en levert de afgesproken AI-oplossing geïnstalleerd en ingericht op.",
      "Je kunt geschikte hardware die je al hebt gebruiken, zelf een server of hostingpartij kiezen, of AITJE de omgeving laten zoeken en regelen. Vooraf worden de techniek, toegang, documenten en verantwoordelijkheden afgestemd. Zo komen ontbrekende bestanden of beperkingen van bestaande hardware tijdig in beeld.",
    ],
    forWho: [
      "Assistent of Coder gebruiksklaar ontvangen",
      "Een server, droplet of GPU-VPS laten inrichten",
      "Bestaande hardware voor AI gebruiken",
      "De hosting zelf kiezen, de installatie uitbesteden",
    ],
    steps: [
      {
        title: "Doel & omgeving",
        text: "Welke toepassing, modellen en gegevens? AITJE beoordeelt de capaciteit voor jouw gebruik en bekijkt wat er al beschikbaar is.",
      },
      {
        title: "Vooraf voorbereiden",
        text: "Hardware, hosting, toegang en aan te leveren documenten worden vooraf afgestemd. Je weet wat jij regelt en wat AITJE verzorgt.",
      },
      {
        title: "Installeren & inrichten",
        text: "AITJE installeert de afgesproken software en modellen en richt de gegevensopslag, accounts, rollen en benodigde koppelingen in.",
      },
      {
        title: "Testen & overdragen",
        text: "De werking wordt in jouw omgeving getest. Je krijgt een volledig ingerichte oplossing binnen de afgesproken scope, met uitleg en basisdocumentatie.",
      },
    ],
    deliverables: [
      "Een geïnstalleerde en geteste computer of serveromgeving",
      "De afgesproken AITJE-software en modellen",
      "Gegevensopslag, toegang en koppelingen volgens het plan",
      "Uitleg voor gebruikers en basisdocumentatie",
    ],
    parts: [
      {
        name: "Standaardinstallatie",
        text: "Assistent of Coder volgens de vaste installatierichtlijnen op een geschikte, vooraf afgestemde omgeving installeren en inrichten.",
        price: "Vanaf €199",
      },
      {
        name: "Hardwareonderzoek",
        text: "Bestaande hardware beoordelen of uitzoeken welke computer en capaciteit passen bij de modellen en het gebruik.",
        price: "€125",
      },
      {
        name: "Onderzoek digitale omgeving",
        text: "Je eigen server, hosting en netwerk beoordelen, inclusief benodigde toegang en mogelijke beperkingen voor de installatie.",
        price: "€125",
      },
      {
        name: "Uitgebreidere inrichting",
        text: "Aanvullend documentwerk, kennisbankinrichting, koppelingen of aanpassingen aan de standaardarchitectuur. Vooraf afgebakend.",
        price: "Vast uurtarief",
      },
    ],
    price: {
      label: "Vanaf €199",
      note: "Voor een standaardinstallatie met vooraf afgesproken scope. Productkosten, hardware of serverhuur en aanvullende inrichting staan apart in het voorstel. Je kunt ook geschikte eigen hardware of zelf gekozen hosting gebruiken.",
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
        a: "AITJE helpt een passende computer, server, droplet of GPU-VPS kiezen en installeert de afgesproken AI-software, modellen en gegevensopslag. Accounts, rollen, bronnen en koppelingen worden ingericht volgens de vooraf afgesproken scope. Na een test ontvang je uitleg en basisdocumentatie. Standaardinstallatie vanaf €199 (excl. btw), met hardware en serverkosten apart.",
        general: true,
      },
      {
        q: "Moet ik nieuwe hardware kopen?",
        a: "Nee. AITJE beoordeelt eerst of je bestaande hardware geschikt is voor de gekozen modellen, het geheugen en het verwachte gebruik. Je kunt ook zelf hardware aanschaffen op advies. Als een nieuwe omgeving nodig is, kan AITJE helpen deze te zoeken en te regelen.",
      },
      {
        q: "Kan ik zelf een server of hostingpartij kiezen?",
        a: "Ja. Je kunt zelf een server kiezen of de hosting verzorgen, waarna AITJE de afgesproken installatie doet. Vooraf wordt gecontroleerd of de capaciteit, het besturingssysteem, de toegang en het netwerk aansluiten op de oplossing. Ook wordt afgesproken wie de hosting en het verdere beheer verzorgt.",
      },
      {
        q: "Welke hardware en serveromgevingen gebruikt AITJE?",
        a: "AITJE werkt onder meer met BOSGAME M5 en M6 en Mac mini, en voor zwaardere toepassingen met bijvoorbeeld NVIDIA DGX Spark of Dell PowerEdge. Ook een droplet, VPS of GPU-VPS, bijvoorbeeld bij Nebius, kan passend zijn. Dit zijn mogelijkheden, geen vaste hardware-eis: de toepassing, modellen en benodigde capaciteit bepalen de keuze.",
      },
      {
        q: "Wat moet ik vóór de installatie aanleveren?",
        a: "Dat wordt vooraf afgestemd. Denk aan informatie over eerder aangeschafte hardware, servertoegang, netwerkinstellingen en de documenten die de oplossing moet gebruiken, zoals trainingsmateriaal of interne handleidingen. AITJE geeft aan wat nodig is en wanneer, zodat ontbrekende onderdelen zo veel mogelijk vóór de implementatie worden opgelost.",
      },
      {
        q: "Kan AITJE afwijken van de standaardinstallatie?",
        a: "Ja. Voor Assistent en Coder heeft AITJE vaste werkwijzen en installatierichtlijnen. De keuzes daarin zijn bewust gemaakt voor de samenhang tussen software, modellen, opslag en beheer. Als jouw situatie een andere inrichting vraagt, beoordeelt AITJE de gevolgen en spreekt de afwijkingen en het extra werk vooraf met je af.",
      },
      {
        q: "Kan het op afstand?",
        a: "Vaak wel. Een server kan meestal volledig op afstand worden ingericht. Een bezoek ligt voor de hand als er fysieke hardware aangesloten moet worden.",
      },
      {
        q: "Kan ik mijn AI-omgeving veilig vanuit huis of onderweg gebruiken?",
        a: "Ja. AITJE kan toegang op afstand voor je inrichten, met passende beveiliging en toegangsrechten. Deze mogelijkheid wordt apart ingeschakeld en afgestemd op je netwerk en de mensen die de omgeving moeten kunnen gebruiken.",
        general: true,
      },
      {
        q: "Kan dezelfde server zowel AITJE Assistent als AITJE Coder draaien?",
        a: "AITJE richt Assistent en Coder bij voorkeur op aparte omgevingen in. Zo kan de capaciteit en inrichting op elk product worden afgestemd en zitten ze elkaar bij gelijktijdig gebruik minder snel in de weg. Een andere architectuur is mogelijk als die bij je situatie past; de gevolgen worden vooraf beoordeeld.",
        general: true,
      },
      {
        q: "Hoe verhuis ik mijn AI-omgeving naar andere hardware?",
        a: "Een migratie wordt bij voorkeur samen met AITJE uitgevoerd, als aparte dienst. AITJE helpt je bij het overzetten van de omgeving en het exporteren en meenemen van de vectordatabase, tekstchunks en embeddings. Daarna wordt gecontroleerd of de kennisbank en de toepassing op de nieuwe hardware goed werken.",
        general: true,
      },
    ],
    caseSlugs: ["chatgpt-of-codex-in-je-eigen-organisatie", "spraak-naar-werkorder"],
    related: ["ondersteuning-en-onderhoud", "aitje-custom", "ai-scan"],
    seoDescription:
      "AITJE kiest en richt hardware, een server of GPU-VPS in voor je AI-oplossing. Ook op bestaande hardware of eigen hosting. Software, modellen en opslag gebruiksklaar.",
  },
  {
    slug: "optimalisatie",
    name: "Optimalisatie",
    short:
      "Je bestaande workflow, chatbot of agent verbeteren: betere context, kennis, modellen en minder onnodig verbruik.",
    icon: "gauge",
    highlights: [
      { icon: "workflow", text: "Je huidige AI verbeteren" },
      { icon: "library", text: "Kennis en instructies" },
      { icon: "gauge", text: "Kwaliteit en kosten toetsen" },
    ],
    image: "/img/redesign/raven-scene.webp",
    headline: "Meer halen uit de AI die je al gebruikt.",
    subline:
      "Je gebruikt al AI. AITJE verbetert de samenhang tussen instructies, code, kennis en modellen, zodat de oplossing beter aansluit op je werk en minder onnodig verbruikt.",
    cta: {
      label: "Bespreek je huidige AI-oplossing",
      to: contactLink("ai-verbeteren"),
    },
    intro: [
      "Een workflow, chatbot, interne kenniszoeker, voice agent of coding agent: als je al AI gebruikt, valt er vaak meer uit te halen. AITJE onderzoekt waar tijd, context en rekenwerk verloren gaan en waar de resultaten beter kunnen.",
      "Dat kan zitten in de instructies en skills van een agent, de opbouw van je kennisbank, de tool calls of het model zelf. AITJE maakt een verbeterplan en kan de gekozen aanpassingen uitvoeren. Ook als jijzelf of een andere partij de oplossing heeft gebouwd, lokaal of via externe diensten.",
    ],
    forWho: [
      "Een workflow met veel calls of herhaalwerk",
      "Een chatbot die de juiste kennis mist",
      "Een voice of coding agent die beter moet werken",
      "Hoge kosten of wisselende resultaten",
    ],
    steps: [
      {
        title: "Meten en analyseren",
        text: "AITJE volgt je huidige taken: welke context krijgt het model, wat vindt de kennisbank en waar ontstaan fouten, extra calls of vertraging?",
      },
      {
        title: "Verbeterplan",
        text: "Gerichte aanpassingen aan instructies, code, kennis, retrieval of modellen. Met prioriteiten, verwachte impact en benodigde uren en kosten.",
      },
      {
        title: "Kiezen & aanpassen",
        text: "Jij kiest welke verbeteringen worden uitgevoerd. Na akkoord op de scope en uren past AITJE de afgesproken onderdelen aan.",
      },
      {
        title: "Opnieuw testen",
        text: "Dezelfde voorbeeldtaken worden opnieuw uitgevoerd. Kwaliteit, snelheid, calls en kosten worden vergeleken met de beginsituatie.",
      },
    ],
    deliverables: [
      "Een beeld van je huidige werking en verbruik",
      "Een verbeterplan voor context, kennis, code en modellen",
      "Prioriteiten met verwachte impact, uren en kosten",
      "Na uitvoering: een vergelijking op de afgesproken testtaken",
    ],
    parts: [
      {
        name: "Guardrailcheck",
        text: "Controle van begrenzingen, menselijke controle, foutafhandeling, noodstop en logging. Inbouwen gaat per uur.",
        price: "€449",
      },
    ],
    price: {
      label: "Vast uurtarief",
      note: "Voor onderzoek en het verbeterplan. Aanpassingen aan de workflow, kennisbank of modellen worden apart begroot, per uur of als project. Jij geeft vooraf akkoord op wat wordt uitgevoerd.",
    },
    notIncluded: [
      "Uitvoering van verbeteringen (apart, na jouw keuze)",
      "Externe licenties, API-kosten, hardware en servercapaciteit",
      "Een garantie op een exact technisch of financieel resultaat",
    ],
    faq: [
      {
        q: "Kan AITJE mijn bestaande AI verbeteren?",
        a: "Ja. AITJE onderzoekt hoe je huidige workflow, chatbot, kenniszoeker, voice agent of coding agent werkt. Het verbeterplan kan gaan over instructies, skills, code, tool calling, de kennisbank, RAG of modelkeuze. Jij kiest welke aanpassingen AITJE uitvoert.",
        general: true,
      },
      {
        q: "Ook als een andere partij de oplossing heeft gebouwd?",
        a: "Ja, zolang AITJE voldoende informatie en toegang krijgt om het werk verantwoord te doen.",
      },
      {
        q: "Hoe helpen skills, rules en documentatie een agent?",
        a: "Ze maken de werkwijze expliciet: welke stappen een agent moet volgen, welke code en tools al bestaan en hoe de codebase is opgebouwd. AITJE kan instructies, Markdown-bestanden, skills en de mappenstructuur beter organiseren. Herbruikbare code en gerichte tool calls voorkomen dat het model voor iedere taak alles opnieuw moet uitzoeken of genereren.",
      },
      {
        q: "Kan AITJE mijn kennisbank en vectordatabase opnieuw inrichten?",
        a: "Ja. AITJE kan documenten en categorieën herstructureren en de indeling in tekststukken, datums, prioriteiten en toegangsrechten verbeteren. Ook het embeddingmodel, de index en de zoekmethode kunnen worden aangepast. Bij een ander embeddingmodel worden de betrokken documenten opnieuw verwerkt en geïndexeerd. Daarna wordt getest of RAG voor jouw vragen relevantere kennis ophaalt.",
      },
      {
        q: "Wat als de kennisbank en de vragen verschillende talen gebruiken?",
        a: "AITJE bekijkt of het embeddingmodel de gebruikte talen goed ondersteunt en of de zoekvraag beter kan worden geformuleerd of vertaald. Een meertalig embeddingmodel of een andere zoekaanpak kan helpen. De keuze wordt getest met jouw vragen en documenten, zodat de betekenis en de juiste bron behouden blijven.",
      },
      {
        q: "Gebruikt AITJE ook fine-tuning en abliteration?",
        a: "Als dat bij de taak en het model past. Fine-tuning gebruikt voorbeelden om het taakgedrag verder te trainen. Abliteration verandert weigeringsgedrag van een model met beschikbare gewichten; dat kan relevant zijn wanneer legitieme opdrachten onnodig worden afgewezen. Het voegt geen actuele bedrijfskennis toe. AITJE vergelijkt een aangepaste versie met de oorspronkelijke versie op de afgesproken taken en controles.",
      },
      {
        q: "Hoe weet ik of een optimalisatie echt iets oplevert?",
        a: "Dezelfde soorten taken worden vóór en na de aanpassing beoordeeld. AITJE kijkt naar de bruikbaarheid van het resultaat, snelheid, aantal calls, verbruik en correctiewerk. Minder tokens of een goedkoper model is alleen nuttig als de oplossing aan de afgesproken kwaliteit blijft voldoen.",
      },
      {
        q: "Is een Guardrailcheck een certificering?",
        a: "Nee. Het is een praktische technische beoordeling, geen juridisch oordeel of garantie dat een systeem nooit fouten maakt.",
      },
    ],
    caseSlugs: ["3d-productmodellen-met-ai", "council-hub"],
    related: [
      "advies-en-analyse",
      "ondersteuning-en-onderhoud",
      "aitje-custom",
    ],
    seoDescription:
      "Verbeter je AI-workflow, chatbot of agent met AITJE. Skills, rules, herbruikbare code, tool calling, kennisbanken, RAG en modellen gericht optimaliseren.",
  },
  {
    slug: "veilig-ai-gebruik",
    name: "Veilig AI-gebruik",
    short:
      "Grip op wat AI mag zien, delen en doen. Met dataminimalisatie, rolrechten, controles en gebruikslimieten.",
    icon: "shield",
    highlights: [
      { icon: "shield", text: "Gegevens beschermen" },
      { icon: "users", text: "Toegang en controle" },
      { icon: "gauge", text: "Kosten bewaken" },
    ],
    image: "/img/redesign/safe-ai-cutout.webp",
    headline: "Meer controle over je AI en je gegevens.",
    subline:
      "Persoonsgegevens beschermen vóór een modelcall. Toegang en acties begrenzen. Belangrijke stappen laten controleren. AITJE helpt de technische maatregelen passend inrichten.",
    cta: { label: "Bespreek je AI-gebruik", to: contactLink("veilig-ai") },
    intro: [
      "Veilig AI-gebruik begint vóórdat je iets naar een model stuurt. Welke informatie is echt nodig? Mag deze medewerker die gegevens gebruiken? Kunnen namen, contactgegevens en andere herkenbare details worden verwijderd? AITJE helpt die keuzes in je workflow verwerken.",
      "Daarna volgen de controles op antwoorden, acties en kosten. Met passende guardrails, bevestiging door een medewerker, logging en limieten bepaal je wat de oplossing mag doen. AITJE bekijkt ook waar gegevens worden verwerkt en bewaard, en wanneer verwerking in je eigen omgeving beter past.",
    ],
    forWho: [
      "Teams die klantgegevens met AI verwerken",
      "Kennisbanken met verschillende toegangsrechten",
      "Agents die acties in je systemen uitvoeren",
      "Organisaties die grip op gebruik en kosten willen",
    ],
    steps: [
      {
        title: "Inventariseren",
        text: "Welke gegevens gaan naar welk model? Wie heeft toegang, welke acties zijn mogelijk en hoe wordt het gebruik begrensd?",
      },
      {
        title: "Instellingen & locaties",
        text: "AITJE onderzoekt verwerking, opslag, traininginstellingen, bewaartermijnen en aanwezige controles. Onbekende informatie blijft herkenbaar.",
      },
      {
        title: "Maatregelen kiezen",
        text: "Een voorstel voor dataminimalisatie, rolrechten, guardrails, bevestiging en limieten. Jij kiest welke aanpassingen nodig zijn.",
      },
      {
        title: "Inrichten & toetsen",
        text: "Uitvoering wordt apart afgesproken. AITJE test de gekozen maatregelen, ook bij onbevoegde toegang, ongewenste instructies en overschreden limieten.",
      },
    ],
    deliverables: [
      "Overzicht van gegevensstromen, aanbieders en datalocaties",
      "Inzicht in toegang, bewaarbeleid en aanwezige controles",
      "Aandachtspunten met praktische verbeterkeuzes",
      "Na afgesproken uitvoering: ingerichte en geteste maatregelen",
    ],
    parts: [
      {
        name: "AI-datalocatiecheck",
        text: "In welke landen wordt jouw AI-data verwerkt en opgeslagen? Aanbieders, bekende servers, landen en instellingen in kaart.",
        price: "€1.499",
      },
      {
        name: "Praktische maatregelen",
        text: "Anonimisatie, rolrechten in RAG, guardrails, bevestiging door medewerkers, budgetlimieten en logging. De gekozen aanpassingen worden vooraf afgesproken.",
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
      note: "Voor de AI-datalocatiecheck: overzicht en verbeteradvies op hoofdlijnen. Een maatregelenplan, technische aanpassingen en vervolgonderzoek worden apart op scope en uren afgesproken.",
    },
    notIncluded: [
      "Een bindend juridisch oordeel, certificering of compliancegarantie",
      "Migratie of uitgewerkt alternatief ontwerp",
      "Uitgebreid vervolgonderzoek",
    ],
    faq: [
      {
        q: "Hoe helpt AITJE bij veilig AI-gebruik?",
        a: "AITJE brengt gegevensstromen, toegang, datalocaties en instellingen in kaart en kan praktische maatregelen inrichten. Denk aan persoonsgegevens verwijderen vóór een externe modelcall, rolrechten voor de kennisbank, menselijke bevestiging, guardrails, gebruikslimieten en logging. Onderzoek en uitvoering worden vooraf afgebakend.",
        general: true,
      },
      {
        q: "Kan AITJE persoonsgegevens verwijderen voordat ze naar een extern model gaan?",
        a: "Ja. AITJE kan een lokale voorbereidingsstap inbouwen die namen, contactgegevens en andere herkenbare details verwijdert of vervangt, en alleen noodzakelijke informatie doorstuurt. Of de uitkomst echt anoniem is, hangt ook af van de overige context. Een naam vervangen door een label is niet vanzelf volledige anonimisatie.",
        general: true,
      },
      {
        q: "Helpt het om steeds een nieuwe, lege chat te gebruiken?",
        a: "Een nieuwe context per taak of klant beperkt welke eerdere berichten aan de volgende vraag worden meegegeven. AITJE kan sessies, geheugen en context scheiden. Dat verandert niet automatisch wat de provider zelf bewaart of voor training gebruikt: die instellingen en afspraken worden afzonderlijk gecontroleerd.",
      },
      {
        q: "Kan gebruik voor training of databewaring worden uitgezet?",
        a: "AITJE controleert welke instellingen en afspraken bij de gekozen dienst beschikbaar zijn. Gebruik voor training uitschakelen is iets anders dan niets bewaren. Zero-data retention kan voor bepaalde API's en functies beschikbaar zijn, met voorwaarden en uitzonderingen. AITJE onderzoekt wat werkelijk voor jouw gebruikte route geldt.",
      },
      {
        q: "Hoe voorkom je dat een medewerker via AI afgeschermde documenten vindt?",
        a: "De applicatie controleert de identiteit en rol vóórdat RAG gegevens ophaalt. De zoekopdracht wordt beperkt tot toegestane documenten, tekststukken en categorieën. Dezelfde rechten gelden voor tool calls en andere koppelingen. Afgeschermde inhoud hoort dus niet eerst aan het model te worden gegeven met alleen de instructie om die niet te delen.",
        general: true,
      },
      {
        q: "Kan AITJE beschermen tegen prompt injection en jailbreaks?",
        a: "AITJE kan meerdere controles combineren: invoer en opgehaalde documenten controleren, instructies van bronmateriaal scheiden, toolrechten beperken en acties valideren. Een filterlaag of LLM-firewall kan daarbij helpen, maar houdt niet iedere aanval tegen. Daarom worden ook toegang en toegestane acties buiten het model afgedwongen en getest.",
      },
      {
        q: "Kunnen AI-kosten en het aantal calls worden begrensd?",
        a: "Ja. AITJE kan budgetten, limieten per taak en gebruiker, rate limiting en een maximumaantal pogingen inrichten. Voor een nieuwe call kan de toepassing controleren of er nog budget beschikbaar is. Providerwaarschuwingen zijn niet altijd een harde stop; daarom wordt gekeken welke limieten werkelijk blokkeren. Lopende calls en vertraagde verbruiksrapportage worden meegenomen in de inrichting.",
        general: true,
      },
      {
        q: "Wanneer moet een medewerker een actie bevestigen?",
        a: "Dat spreek je vooraf af. Bijvoorbeeld voordat een bericht wordt verstuurd, een betaling wordt voorbereid of belangrijke gegevens worden gewijzigd. De medewerker ziet het voorstel en de gevolgen en moet expliciet akkoord geven voordat de actie wordt uitgevoerd. De bevestiging en uitvoering kunnen worden gelogd.",
      },
      {
        q: "Hoe worden antwoorden en acties gecontroleerd?",
        a: "AITJE kan antwoorden koppelen aan toegestane bronnen via RAG en uitvoer met code controleren op formaat, verplichte velden en toegestane acties. Een tweede model, LLM-as-a-Judge, kan aanvullend meekijken. RAG en een tweede model kunnen fouten helpen vinden, maar sluiten ze niet uit. Voor belangrijke uitkomsten blijft menselijke beoordeling een passende controle.",
      },
      {
        q: "Wat wordt er intern gelogd?",
        a: "Bijvoorbeeld wie een taak startte, welke bronnen en modelversie zijn gebruikt, welke actie is voorgesteld, wie akkoord gaf en wat er is uitgevoerd. AITJE stemt detailniveau, toegang en bewaartermijn af. Persoonsgegevens, volledige prompts en API-sleutels hoeven niet standaard in een logbestand terecht te komen.",
      },
      {
        q: "Is lokaal draaien altijd voldoende om gegevens te beschermen?",
        a: "Lokaal verwerken kan voorkomen dat de inhoud naar een externe modelprovider gaat. De omgeving zelf heeft nog steeds passende netwerkbeveiliging, toegangsrechten en beheer nodig. AITJE controleert ook koppelingen, logging en terugvalroutes, zodat vertrouwelijke gegevens niet via een andere route alsnog worden verstuurd.",
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
      "chatgpt-of-codex-in-je-eigen-organisatie",
    ],
    related: ["advies-en-analyse", "installatie-en-inrichting", "ai-scan"],
    seoDescription:
      "AITJE helpt AI-gebruik begrenzen met anonimisatie, rolrechten voor RAG, guardrails, menselijke controle en budgetlimieten. Inzicht in datalocaties en bewaarbeleid.",
  },
  {
    slug: "aitje-custom",
    name: "AITJE Custom — AI op maat",
    short: "Een persoonlijk AI-project, van analyse en ontwerp tot bouwen, testen en gebruiksklare oplevering.",
    icon: "sparkles",
    highlights: [
      { icon: "compass", text: "Van analyse tot livegang" },
      { icon: "code", text: "Bouwen en bijsturen" },
      { icon: "sparkles", text: "Compleet maatwerkproject" },
    ],
    image: "/img/covers/v2/aitje-custom.webp",
    headline: "Jouw AI-project. Van idee tot eindproduct.",
    subline:
      "Van analyse en ontwerp tot bouwen, testen en live zetten. AITJE ontwikkelt je oplossing op uurbasis en verwerkt feedback tot het afgesproken eindproduct klaar is.",
    cta: { label: "Bespreek je AI-project", to: contactLink("ai-op-maat") },
    intro: [
      "AITJE Custom is je persoonlijke AI-project voor een vraag die verder gaat dan de vaste producten en oplossingen. Dat kan een nieuwe toepassing zijn, of een bestaande aanpak die anders wordt ingericht voor jouw werk, gegevens en systemen.",
      "Je spreekt af wat de oplossing moet doen en wat er nodig is om die in gebruik te nemen. AITJE verzorgt het hele traject: uitdenken, de techniek kiezen, programmeren, koppelen, testen en verbeteren. Ook live zetten en de afgesproken feedbackrondes horen bij het project.",
    ],
    forWho: [
      "Een vraag die verder gaat dan een vast product",
      "Een eigen workflow, agent of toepassing",
      "Een bestaande oplossing op een nieuwe manier inzetten",
      "IT-bedrijven die maatwerk voor klanten willen laten bouwen",
    ],
    steps: [
      {
        title: "Analyse & ontwerp",
        text: "Je werk, het doel en de gewenste werking uitdenken, inclusief gegevens, koppelingen, risico’s en een plan om het resultaat te testen.",
      },
      {
        title: "De omgeving kiezen",
        text: "Passende modellen, hardware en een server kiezen: lokaal, via een API of gecombineerd, met capaciteit, privacy, kosten en beheer in beeld.",
      },
      {
        title: "Bouwen & koppelen",
        text: "Software programmeren, de interface maken en je systemen verbinden, met de instructies, kennis en controles die de toepassing nodig heeft.",
      },
      {
        title: "Testen & optimaliseren",
        text: "De werking toetsen met echte taken en foutscenario’s, en de workflow, modelkeuze, snelheid en kosten verbeteren waar dat nodig is.",
      },
      {
        title: "Live & feedback",
        text: "De oplossing inrichten voor dagelijks gebruik en gecontroleerd live zetten, waarna AITJE de afgesproken feedback verwerkt en aanpassingen opnieuw test.",
      },
      {
        title: "Opleveren & overdragen",
        text: "Samen de afgesproken werking controleren en het eindproduct overdragen, met de toegang, documentatie en uitleg om ermee aan de slag te gaan.",
      },
    ],
    deliverables: [
      "Een werkende maatwerkoplossing volgens de afgesproken scope",
      "Passende modellen, software en koppelingen",
      "Een ingerichte hardware- of serveromgeving waar nodig",
      "Een getest resultaat, met de afgesproken feedback verwerkt",
      "Livegang, toegang, documentatie en uitleg zoals afgesproken",
      "Overdracht van de klantspecifieke code en configuratie",
    ],
    price: {
      label: "Vast uurtarief",
      note: "Het hele traject werkt op uurbasis: analyse, ontwerp, ontwikkeling, tests, optimalisatie, livegang en feedback. Vooraf spreek je de scope, verwachte uren en budget per fase af. Extra werk begint na jouw akkoord. Hardware, hosting, licenties en externe modelkosten worden apart begroot.",
    },
    notIncluded: [
      "Hardware, hosting, licenties en externe API-kosten",
      "Werk en extra feedbackrondes buiten de afgesproken scope",
      "Ondersteuning en onderhoud na oplevering, apart af te spreken",
      "Eigen elektronica ontwerpen of veel fysieke hardware aanpassen",
    ],
    faq: [
      {
        q: "Hoe werkt AITJE Custom?",
        a: "AITJE Custom is een compleet maatwerktraject voor een vraag die verder gaat dan de vaste producten en oplossingen. AITJE analyseert, ontwerpt, kiest de techniek, bouwt, test, optimaliseert en zet de oplossing live. Ook de afgesproken feedbackrondes en overdracht horen erbij. Je betaalt de afgesproken werkzaamheden tegen uurtarief; uren en budget worden vooraf per fase afgestemd.",
        general: true,
      },
      {
        q: "Moet het iets zijn dat AITJE nog nooit heeft gebouwd?",
        a: "Nee. Custom kan een nieuwe toepassing zijn, maar ook een bestaande aanpak met een andere inrichting, koppeling of interface. Het gaat erom dat de oplossing specifiek voor jouw werk wordt ontwikkeld. Herbruikbare onderdelen kunnen het traject korter maken.",
      },
      {
        q: "Wanneer is een vast product voldoende?",
        a: "Als Assistent, Coder of een bestaande oplossing je vraag al afdekt, bespreekt AITJE die route met je. Voor alleen installatie of een gerichte verbetering zijn [Installatie en inrichting](/diensten/installatie-en-inrichting) en [Optimalisatie](/diensten/optimalisatie) mogelijk. Custom past wanneer verschillende onderdelen samen een specifiek project vormen.",
      },
      {
        q: "Hoe houd ik grip op de uren en het budget?",
        a: "Voor een fase spreek je de werkzaamheden, verwachte uren en het beschikbare budget af. AITJE laat de voortgang zien en bespreekt wat nog nodig is. Nieuwe wensen of extra uren worden eerst met je afgestemd. Je kunt per fase bijsturen, doorgaan of stoppen.",
      },
      {
        q: "Is een prototype ook het eindproduct?",
        a: "Een prototype kan helpen om een onzekere aanpak vroeg te toetsen. Het is dan een tussenstap naar de afgesproken oplossing. De afwerking, tests, ingebruikname en feedbackverwerking worden meegenomen in de verdere fases van het project.",
      },
      {
        q: "Hoe werken de feedbackrondes?",
        a: "Je spreekt vooraf af wanneer gebruikers de oplossing proberen en hoe hun feedback wordt verwerkt. Die werkzaamheden vallen onder het uurtarief en het afgesproken budget. Aanpassingen worden opnieuw getest. Nieuwe functies of aanvullende rondes buiten de scope worden eerst begroot en besproken.",
      },
      {
        q: "Kan AITJE mijn bestaande hardware en systemen gebruiken?",
        a: "Ja, als ze geschikt zijn voor de toepassing. AITJE beoordeelt de capaciteit, toegang en mogelijkheden voor koppelingen. Je kunt eigen hardware, een bestaande server of je hostingpartij gebruiken. Waar nodig helpt AITJE een nieuwe omgeving kiezen en inrichten; de kosten worden apart afgesproken.",
      },
      {
        q: "Moet de oplossing lokaal draaien?",
        a: "De taak bepaalt de omgeving. Het project kan lokaal draaien, op een eigen of gehuurde server, via externe model-API’s of als combinatie. AITJE weegt werking, privacy, kosten, snelheid en beheer mee bij die keuze.",
      },
      {
        q: "Van wie is de oplossing?",
        a: "De afgesproken klantspecifieke maatwerkoplossing wordt jouw eigendom, inclusief de over te dragen code, configuratie en documentatie. AITJE mag generieke onderdelen en opgedane kennis hergebruiken. Vaste AITJE-producten en externe software houden hun eigen gebruiksvoorwaarden.",
      },
      {
        q: "Kan AITJE ook een model bijtrainen?",
        a: "Ja, fine-tuning kan binnen een Custom-traject als de taak en de beschikbare data daarvoor geschikt zijn.",
      },
      {
        q: "Wat als een aanpak niet haalbaar blijkt?",
        a: "Daarom kan een project starten met onderzoek of een prototype. AITJE bespreekt de bevindingen en mogelijke alternatieven voordat je verder investeert. Bestede onderzoeks- en ontwikkeluren blijven betaald, ook als je besluit te stoppen.",
      },
      {
        q: "Blijft AITJE betrokken na de oplevering?",
        a: "Dat kan met [Ondersteuning en onderhoud](/diensten/ondersteuning-en-onderhoud) of losse vervolgopdrachten. Beheer, nieuwe modellen en verdere ontwikkeling worden apart afgesproken. Je bent niet verplicht om een SLA af te nemen.",
      },
    ],
    caseSlugs: [
      "council-hub",
      "3d-productmodellen-met-ai",
      "spraak-naar-werkorder",
    ],
    related: [
      "advies-en-analyse",
      "installatie-en-inrichting",
      "ondersteuning-en-onderhoud",
    ],
    seoDescription:
      "AITJE Custom is je complete AI-project op uurbasis: analyse, ontwerp, hardware of server kiezen, ontwikkelen, testen, optimaliseren, live zetten en feedback verwerken.",
  },
  {
    slug: "ondersteuning-en-onderhoud",
    name: "Ondersteuning en onderhoud",
    short:
      "Hulp en doorlopend meedenken over je modellen, prompts, skills en volgende verbeteringen. Met Core, Plus of Max.",
    icon: "lifebuoy",
    highlights: [
      { icon: "lifebuoy", text: "Een vast aanspreekpunt" },
      { icon: "cpu", text: "Modellen, prompts en skills" },
      { icon: "message", text: "Persoonlijk advies" },
    ],
    image: "/img/redesign/support.webp",
    headline: "Hulp bij vandaag. Meedenken over morgen.",
    subline:
      "Van modelbeheer en nieuwe skills tot advies en een demo van een passende workflow. Met een SLA blijft AITJE betrokken bij jouw AI-omgeving.",
    cta: { label: "Bespreek je SLA", to: contactLink("sla") },
    intro: [
      "Met een SLA, een Service Level Agreement, spreek je af hoe AITJE je AI-omgeving ondersteunt en verder helpt. Je hebt iemand die je opstelling kent: voor problemen, onderhoud, passende modellen, betere prompts en skills die aansluiten op je werk.",
      "AITJE kijkt ook vooruit. Welke nieuwe ontwikkeling is relevant voor jouw stack? Welke analyse helpt je kiezen? Is er al een workflow voor vergelijkbaar werk die bij jou past? Hoe uitgebreider de SLA, hoe proactiever AITJE ideeën, tips en demo's met je deelt.",
    ],
    forWho: [
      "Een AITJE-product of ingerichte AI-omgeving",
      "Hulp bij onderhoud, modellen, prompts en skills",
      "Nieuwe mogelijkheden voor je eigen werkwijze",
      "Een vaste AI-partner die blijft meedenken",
    ],
    steps: [
      {
        title: "Niveau kiezen",
        text: "Core, Plus of Max: afgestemd op je omgeving, de gewenste hulp en hoeveel proactief advies je wilt ontvangen.",
      },
      {
        title: "Hulp & verbeteringen",
        text: "Inbegrepen uren inzetten voor hulp, onderhoud, modelbeheer, prompts, skills en kleine aanpassingen. Groter werk wordt vooraf besproken.",
      },
      {
        title: "Persoonlijke updates",
        text: "Relevante modelontwikkelingen, analyses en toepassingsideeën voor jouw stack. De frequentie en mate van meedenken volgen je SLA-niveau.",
      },
      {
        title: "AI-APK & vervolg",
        text: "Bij Plus en Max per kwartaal een beoordeling met advies. Een passende verbetering of demo? Jij kiest of AITJE die implementeert.",
      },
    ],
    deliverables: [
      "Inbegrepen service-uren voor hulp en kleine verbeteringen",
      "Beheer van modellen, prompts en skills binnen de afgesproken uren",
      "Persoonlijke updates over je omgeving en relevante mogelijkheden",
      "Op verzoek inzage in passende analyses van AITJE",
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
        a: "Een SLA met inbegrepen service-uren en doorlopend meedenken over je AI-omgeving. AITJE helpt met onderhoud, modellen, prompts, skills en kleine verbeteringen, en deelt relevante ontwikkelingen en ideeën. Core, Plus en Max verschillen in uren, contact en proactiviteit. Vanaf €49,99 per maand (excl. btw).",
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
      {
        q: "Hoe werkt het inbegrepen serviceuur?",
        a: "Bij Core zit één serviceuur per maand in de SLA, bij Plus twee en bij Max drie. Daarvoor krijg je geen aparte urenfactuur. De uren kunnen worden gebruikt voor hulp, onderhoud, modelbeheer, prompts, skills en kleine aanpassingen. Werk buiten het tegoed wordt vooraf met je afgesproken.",
      },
      {
        q: "Kan AITJE ook prompts en skills voor mijn team maken?",
        a: "Ja. AITJE kan binnen de beschikbare service-uren prompts, instructies en skills maken of aanpassen voor de AI en agents die je gebruikt. Denk aan een vaste aanpak voor terugkerende taken, betere projectcontext of een controle op de uitvoer. Als het werk groter wordt, volgt eerst een voorstel voor de extra uren.",
      },
      {
        q: "Krijg ik automatisch ieder nieuw model geïnstalleerd?",
        a: "Nee. AITJE beoordeelt welke ontwikkelingen relevant zijn voor jouw taken, hardware en stack. Een passend kandidaatmodel wordt in overleg getest en eventueel geïnstalleerd binnen de beschikbare service-uren. Je ontvangt advies over de verwachte waarde en de gevolgen voor je inrichting.",
      },
      {
        q: "Kan ik de analyses van AITJE inzien?",
        a: "Ja, als je dat wilt kan AITJE relevante analyses en vergelijkingen delen. Bijvoorbeeld onderzoek naar modellen of manieren om een workflow in te richten. De selectie wordt afgestemd op jouw omgeving; een onderzoeksresultaat wordt niet automatisch als resultaat voor jouw toepassing voorgesteld.",
      },
      {
        q: "Hoe vaak krijg ik een persoonlijke update?",
        a: "Bij Core en Plus één keer per maand. Bij Max twee keer per maand: een update met relevante ontwikkelingen en een bericht met een passend toepassingsidee. Hoe uitgebreider de SLA, hoe proactiever AITJE meedenkt. Bij Max hoort ook een kwartaaloverleg over verdere ontwikkeling.",
      },
      {
        q: "Wat krijg ik bij een AI-APK?",
        a: "Bij Plus en Max beoordeelt AITJE ieder kwartaal de afgesproken omgeving en geeft advies over werking, kosten, modelkeuze, instellingen en kansen voor verbetering. De APK en het advies vallen buiten de service-uren. Het uitvoeren van verbeteringen gebruikt de beschikbare uren of wordt apart afgesproken.",
      },
      {
        q: "Hoe helpt AITJE met nieuwe workflows?",
        a: "AITJE kan een bestaande aanpak voor vergelijkbaar werk voorstellen, met een businesscase en een demo waar die beschikbaar is. Zo zie je wat de toepassing doet voordat je besluit. Herbruikbare onderdelen worden aangepast aan jouw gegevens, systemen en werkwijze.",
      },
      {
        q: "Waarom kan een workflow via de SLA goedkoper zijn dan een nieuw Custom-traject?",
        a: "AITJE kent je omgeving al en kan bij een passende bestaande workflow onderdelen hergebruiken. Daardoor is vaak minder ontwerp- en bouwwerk nodig dan bij een oplossing vanaf nul. Kleine aanpassingen kunnen binnen je service-uren vallen. Voor meer werk krijg je vooraf een scope en prijs; een volledig nieuw product blijft een apart Custom-traject.",
      },
      {
        q: "Wanneer kan ik AITJE bereiken?",
        a: "Op werkdagen van 09.00 tot 18.00 uur, uitgezonderd feestdagen. Core heeft e-mailcontact, Plus en Max ook telefonisch contact. Max krijgt prioriteit bij verzoeken. De SLA legt de afspraken voor jouw omgeving vast; er wordt geen vaste oplostijd beloofd.",
      },
    ],
    caseSlugs: ["chatgpt-of-codex-in-je-eigen-organisatie", "council-hub"],
    related: ["installatie-en-inrichting", "optimalisatie", "aitje-custom"],
    seoDescription:
      "AITJE blijft meedenken via Core, Plus of Max. Inbegrepen service-uren, modellen, prompts, skills, AI-APK-advies en passende analyses en workflowdemo's.",
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
      "Modellen, prompts en skills binnen service-uren",
      "Relevante analyses op verzoek",
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
      "Modellen, prompts en skills binnen service-uren",
      "Relevante analyses op verzoek",
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
      "Modellen, prompts en skills binnen service-uren",
      "Relevante analyses op verzoek",
      "AI-APK en advies per kwartaal",
      "2× per maand een persoonlijke mail, inclusief toepassingsidee",
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
  highlights: [
    { icon: "users", text: "Jouw klantrelatie" },
    { icon: "sparkles", text: "AITJE als AI-specialist" },
    { icon: "wrench", text: "Bouw en technisch vervolg" },
  ],
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
