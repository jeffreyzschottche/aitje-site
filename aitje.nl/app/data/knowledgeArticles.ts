import { knowledgeArticleImages } from "./knowledgeArticleImages";

export type KnowledgeArticleSection = {
  title: string;
  content: string;
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  heroImage: string;
  imageAlt: string;
  readTime: string;
  category: string;
  sections: KnowledgeArticleSection[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "wat-is-een-llm",
    title: "Wat is een LLM?",
    excerpt:
      "Een LLM is een groot taalmodel dat tekst kan begrijpen, voorspellen en genereren. Het voelt vaak slim aan, maar de kwaliteit van het resultaat hangt sterk af van context, modelkeuze en hoe je het inzet.",
    ...knowledgeArticleImages["wat-is-een-llm"],
    readTime: "5 min",
    category: "Basis",
    sections: [
      {
        title: "In het kort",
        content:
          "LLM staat voor Large Language Model. Het is een taalmodel dat is getraind op grote hoeveelheden tekst en daardoor patronen in taal herkent. Zo kan het vragen beantwoorden, teksten herschrijven, samenvatten, classificeren en nieuwe tekst genereren op basis van een opdracht.",
      },
      {
        title: "Wat kan een LLM goed?",
        content:
          "LLM's zijn sterk in taken waar taal centraal staat. Denk aan het opstellen van conceptmails, het structureren van notities, het vertalen van interne informatie naar begrijpelijke taal of het samenvatten van documenten. De kracht zit vooral in snelheid, taalgevoel en flexibiliteit.",
      },
      {
        title: "Waar gaat het vaak mis?",
        content:
          "Een LLM redeneert niet zoals een mens en weet niet vanzelf wat waar of actueel is. Het model kan overtuigend klinkende fouten maken, informatie verzinnen of te algemene antwoorden geven. Daarom moet je goed kijken naar brongebruik, controles en waar de output voor wordt gebruikt.",
      },
      {
        title: "Wat betekent dit voor organisaties?",
        content:
          "Voor organisaties is een LLM pas echt bruikbaar als het past binnen een proces. Dan gaat het niet alleen om het model zelf, maar ook om context, rechten, logging, beveiliging en de vraag of het model lokaal of in de cloud draait. De zakelijke waarde zit in een betrouwbare toepassing, niet in de demo alleen.",
      },
      {
        title: "Hoe gebruik je een LLM slim?",
        content:
          "Begin met een duidelijke taak: bijvoorbeeld samenvatten, classificeren of interne vragen beantwoorden. Voeg daarna de juiste context en randvoorwaarden toe, en bepaal hoe medewerkers de uitkomst controleren. Zo behandel je een LLM niet als magische doos, maar als een hulpmiddel binnen een werkproces.",
      },
    ],
  },
  {
    slug: "wat-is-edge-ai",
    title: "Wat is edge AI?",
    excerpt:
      "Edge AI betekent dat AI draait dicht bij de bron van de data, bijvoorbeeld op een device, server of lokaal netwerk. Daardoor kun je sneller werken en houd je vaak meer controle over privacy, continuiteit en kosten.",
    ...knowledgeArticleImages["wat-is-edge-ai"],
    readTime: "5 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "In het kort",
        content:
          "Bij edge AI verwerk je data in of vlak bij je eigen omgeving in plaats van alles naar een externe cloud te sturen. Dat kan op een apparaat zelf zijn, op een lokale server of op infrastructuur binnen het eigen netwerk. Daarom wordt edge AI vaak ook lokale AI genoemd.",
      },
      {
        title: "Waarom kiezen organisaties hiervoor?",
        content:
          "De belangrijkste redenen zijn snelheid, privacy, grip op data en minder afhankelijkheid van externe platformen. Als een proces altijd beschikbaar moet blijven of als gevoelige informatie niet zomaar extern mag worden verwerkt, wordt edge AI vaak direct interessanter.",
      },
      {
        title: "Wanneer is edge AI logisch?",
        content:
          "Edge AI is vooral logisch bij kennisvragen op interne documenten, lokale assistenten, productieomgevingen, zorgsituaties of omgevingen met instabiele internetverbindingen. Ook wanneer voorspelbare kosten en eigen infrastructuur belangrijk zijn, is lokaal draaien vaak aantrekkelijker dan volledig cloudgebaseerd werken.",
      },
      {
        title: "Wat moet je in de praktijk regelen?",
        content:
          "Lokale AI vraagt om meer dan alleen hardware. Je moet ook denken aan updates, monitoring, toegangsbeheer, back-ups, logging en de vraag welke onderdelen wel of niet extern mogen communiceren. Het is dus een infrastructuurkeuze met operationele gevolgen.",
      },
      {
        title: "Veelgemaakte misvatting",
        content:
          "Edge AI betekent niet automatisch dat alles beter is. Lokale inzet kan veel voordelen geven, maar vraagt ook beheer, technische keuzes en duidelijke grenzen. De juiste vraag is niet of cloud slecht is, maar welk deel van een proces lokaal hoort en welk deel eventueel extern mag draaien.",
      },
    ],
  },
  {
    slug: "wat-is-rag",
    title: "Wat is RAG?",
    excerpt:
      "RAG is een manier om een taalmodel eerst relevante informatie uit documenten of een kennisbank op te laten halen voordat het antwoord geeft. Daardoor worden antwoorden vaak specifieker, beter onderbouwd en bruikbaarder voor je eigen organisatie.",
    ...knowledgeArticleImages["wat-is-rag"],
    readTime: "6 min",
    category: "Techniek",
    sections: [
      {
        title: "Waar staat RAG voor?",
        content:
          "RAG staat voor Retrieval-Augmented Generation. Eerst zoekt het systeem relevante informatie op uit een kennisbank, documentcollectie of andere bron. Pas daarna gebruikt het model die gevonden context om een antwoord op te bouwen.",
      },
      {
        title: "Wat gebeurt er technisch?",
        content:
          "In een RAG-systeem wordt een vraag eerst vertaald naar een zoekactie. Daarna worden relevante stukken tekst geselecteerd en meegestuurd naar het model. Het model antwoordt dus niet alleen op basis van zijn training, maar ook op basis van bronnen die op dat moment zijn opgehaald.",
      },
      {
        title: "Waarom is dit waardevol?",
        content:
          "Een standaard LLM weet niet automatisch wat er in jouw handleidingen, beleid of projectdocumenten staat. Met RAG kan het systeem antwoorden geven op basis van je eigen informatie. Dat maakt AI veel bruikbaarder voor interne kennisvragen, documentondersteuning en klantgerichte processen.",
      },
      {
        title: "Wat bepaalt de kwaliteit?",
        content:
          "De kwaliteit hangt af van brondata, documentstructuur, zoeklogica en de vraag of de juiste passages worden geselecteerd. Slecht gestructureerde documenten of verouderde informatie leiden ook in een RAG-opzet tot matige antwoorden. RAG is dus geen wondermiddel, maar een keten die goed ingericht moet zijn.",
      },
      {
        title: "Wanneer is RAG niet genoeg?",
        content:
          "RAG helpt bij kennis ophalen, maar lost niet alles op. Voor complexe workflows, beslislogica, rechtenbeheer of acties in andere systemen heb je vaak extra lagen nodig, zoals validatie, menselijke controle of agentlogica. RAG is vaak een sterke basis, niet het volledige product.",
      },
    ],
  },
  {
    slug: "wat-is-context",
    title: "Wat is context in AI?",
    excerpt:
      "Context is alle extra informatie die je aan een model meegeeft zodat het beter begrijpt wat je bedoelt. Goede context maakt het verschil tussen een algemeen antwoord en iets dat echt past bij jouw taak, organisatie of document.",
    ...knowledgeArticleImages["wat-is-context"],
    readTime: "5 min",
    category: "Basis",
    sections: [
      {
        title: "Wat valt onder context?",
        content:
          "Context kan bestaan uit de vraag zelf, eerdere berichten, documenten, instructies, voorbeelden, rollen, bedrijfsinformatie of gewenste output. Alles wat het model helpt om gerichter te antwoorden, hoort in de praktijk bij context.",
      },
      {
        title: "Waarom is context zo belangrijk?",
        content:
          "Een model zonder context geeft meestal een algemeen antwoord. Zodra je doel, broninformatie en randvoorwaarden toevoegt, wordt dezelfde AI veel specifieker. De kwaliteit van een antwoord hangt daarom vaak minder af van het model alleen en meer van de context die je meestuurt.",
      },
      {
        title: "Welke soorten context zijn er?",
        content:
          "Je kunt denken aan taakcontext, zoals wat de gebruiker precies wil; documentcontext, zoals relevante bronnen; en organisatiecontext, zoals tone of voice, beleid of procesafspraken. Hoe beter die lagen op elkaar aansluiten, hoe bruikbaarder de output wordt.",
      },
      {
        title: "Wat gaat vaak mis?",
        content:
          "Veel toepassingen geven te weinig, te veel of verkeerde context mee. Te weinig context levert oppervlakkige antwoorden op. Te veel context maakt het antwoord traag of rommelig. Verkeerde context zorgt ervoor dat een model de verkeerde richting op gaat, ook als de vraag zelf logisch is.",
      },
      {
        title: "Praktische vuistregel",
        content:
          "Geef alleen mee wat nodig is om de taak goed uit te voeren. Denk vanuit het besluit of antwoord dat je wilt krijgen, niet vanuit de neiging om alle informatie tegelijk te dumpen. Goede context is gericht, relevant en actueel.",
      },
    ],
  },
  {
    slug: "wat-is-een-context-window",
    title: "Wat is een context window?",
    excerpt:
      "Het context window is de maximale hoeveelheid informatie die een model in een enkele interactie kan meenemen. Dat bepaalt hoeveel tekst, chatgeschiedenis of documentfragmenten tegelijk bruikbaar zijn.",
    ...knowledgeArticleImages["wat-is-een-context-window"],
    readTime: "5 min",
    category: "Techniek",
    sections: [
      {
        title: "In gewone taal",
        content:
          "Je kunt een context window zien als het werkgeheugen van een model. Hoe groter dat werkgeheugen, hoe meer tekst, eerdere berichten en documenten het model tegelijk kan meenemen om een antwoord te vormen.",
      },
      {
        title: "Waarom is dit belangrijk?",
        content:
          "Bij lange documenten, uitgebreide chats en grotere kennisbanken loop je anders snel tegen grenzen aan. Dan past niet alle relevante informatie in een keer mee. Het systeem moet dus kiezen wat wordt meegestuurd en wat buiten beeld blijft.",
      },
      {
        title: "Wat gebeurt er als je eroverheen gaat?",
        content:
          "Als je meer informatie probeert mee te geven dan binnen het context window past, moet het systeem onderdelen inkorten, samenvatten of weglaten. Daardoor kan belangrijke nuance verdwijnen. In sommige gevallen lijkt het model dan onzorgvuldig, terwijl het in feite te weinig bruikbare context heeft gekregen.",
      },
      {
        title: "Groter is niet altijd beter",
        content:
          "Een groter context window is handig, maar geen garantie op kwaliteit. Als je slechte of irrelevante informatie toevoegt, wordt het antwoord niet vanzelf beter. Relevante selectie, goede samenvatting en heldere instructies blijven belangrijker dan alleen meer tokens beschikbaar hebben.",
      },
      {
        title: "Praktische gevolgen",
        content:
          "In echte toepassingen bepaalt het context window hoe je documenten opdeelt, hoe lang een chatgeschiedenis bruikbaar blijft en hoe je RAG of samenvattingen inricht. Het is dus geen abstract modeldetail, maar een ontwerpkeuze met directe impact op gebruik en betrouwbaarheid.",
      },
    ],
  },
  {
    slug: "wat-is-een-ai-agent",
    title: "Wat is een AI agent?",
    excerpt:
      "Een AI agent is een systeem dat niet alleen antwoord geeft, maar ook stappen kan zetten richting een doel. Denk aan informatie ophalen, keuzes maken, tools gebruiken en een taak deels automatisch uitvoeren.",
    ...knowledgeArticleImages["wat-is-een-ai-agent"],
    readTime: "6 min",
    category: "Toepassing",
    sections: [
      {
        title: "Meer dan een chatbot",
        content:
          "Een chatbot reageert meestal op een vraag met tekst. Een agent gaat een stap verder en kan acties uitvoeren. Denk aan documenten zoeken, samenvattingen maken, gegevens ophalen uit een systeem, conceptantwoorden opstellen of een workflow starten.",
      },
      {
        title: "Hoe werkt een agent meestal?",
        content:
          "Vaak werkt een agent met een combinatie van instructies, context, tools en beslislogica. Het systeem krijgt een doel, bepaalt welke stap logisch is, gebruikt waar nodig externe functies of data en levert daarna een resultaat of vervolgstap op.",
      },
      {
        title: "Waar zit de zakelijke waarde?",
        content:
          "Agents zijn vooral interessant bij terugkerende taken met vaste stappen. Ze kunnen medewerkers ontlasten, wachttijd verkorten en processen consistenter maken. De meeste waarde ontstaat wanneer een agent niet los staat, maar is ingebed in een duidelijk proces met rechten en grenzen.",
      },
      {
        title: "Waar zit het risico?",
        content:
          "Hoe meer autonomie een agent krijgt, hoe groter het belang van logging, toegangsbeheer, validatie en controlepunten. Een agent die zomaar acties in systemen mag uitvoeren zonder duidelijke kaders kan fouten schalen in plaats van oplossen.",
      },
      {
        title: "Wanneer klein beginnen verstandig is",
        content:
          "In veel gevallen is het slimmer om te starten met een beperkte agenttaak, zoals conceptvoorstellen of informatievoorbereiding. Dan kun je leren waar het systeem goed werkt en waar menselijke controle nodig blijft. Een goede agent groeit meestal uit een scherp afgebakend probleem, niet uit een vaag idee van volledige autonomie.",
      },
    ],
  },
  {
    slug: "wat-zijn-embeddings",
    title: "Wat zijn embeddings?",
    excerpt:
      "Embeddings zetten tekst om in vectoren zodat systemen inhoudelijk vergelijkbare stukken informatie kunnen herkennen. Ze vormen een belangrijke basislaag voor semantisch zoeken en veel RAG-toepassingen.",
    ...knowledgeArticleImages["wat-zijn-embeddings"],
    readTime: "6 min",
    category: "Techniek",
    sections: [
      {
        title: "In het kort",
        content:
          "Embeddings zijn wiskundige representaties van tekst. In plaats van woorden alleen letterlijk te vergelijken, kan een systeem via embeddings zien welke stukken inhoud inhoudelijk op elkaar lijken. Daardoor worden betekenis en relevantie beter vindbaar.",
      },
      {
        title: "Waarom zijn embeddings nodig?",
        content:
          "Zonder embeddings werkt zoeken vaak vooral op exacte woorden. Dat is beperkt, omdat mensen dezelfde vraag op veel manieren kunnen formuleren. Embeddings helpen een systeem om ook inhoudelijke gelijkenis te herkennen, zelfs als de gebruikte woorden verschillen.",
      },
      {
        title: "Hoe worden ze gebruikt in RAG en zoeksystemen?",
        content:
          "Documenten worden opgesplitst in kleinere stukken, waarna die stukken worden omgezet in vectoren. Bij een nieuwe vraag maakt het systeem ook een vector van de vraag en zoekt het naar tekstfragmenten die daar inhoudelijk dichtbij liggen. Zo kan het relevante context ophalen voordat het model antwoord geeft.",
      },
      {
        title: "Wat bepaalt de kwaliteit?",
        content:
          "De kwaliteit hangt af van de gebruikte embeddingmodellen, hoe documenten zijn opgeknipt, hoe actueel de brondata is en hoe de zoeklaag is ingericht. Goede embeddings compenseren geen slechte bronstructuur. Ze werken het best als de hele kennisketen klopt.",
      },
      {
        title: "Wat moet je onthouden?",
        content:
          "Embeddings geven geen antwoord op zichzelf. Ze helpen vooral om de juiste informatie te vinden. Zie ze als een technische basislaag onder kennisbanken, zoekfuncties en RAG-systemen, niet als een eindoplossing op zichzelf.",
      },
    ],
  },
  {
    slug: "wat-is-prompt-engineering",
    title: "Wat is prompt engineering?",
    excerpt:
      "Prompt engineering is het bewust formuleren van instructies zodat een model bruikbare output geeft. Het draait niet om trucjes, maar om helderheid over doel, context, toon, randvoorwaarden en gewenst formaat.",
    ...knowledgeArticleImages["wat-is-prompt-engineering"],
    readTime: "5 min",
    category: "Werkwijze",
    sections: [
      {
        title: "Waarom doet de formulering ertoe?",
        content:
          "Een model reageert sterk op hoe je een taak omschrijft. Een vage vraag levert meestal een vaag antwoord op. Zodra je rol, doel, toon, context en gewenste output specificeert, wordt het resultaat vaak direct bruikbaarder.",
      },
      {
        title: "Wat hoort bij een goede prompt?",
        content:
          "Goede prompts bevatten meestal een duidelijke taak, relevante context, eventuele beperkingen, voorbeelden en een gewenst outputformaat. Niet elke prompt hoeft lang te zijn, maar de prompt moet wel precies genoeg zijn om richting te geven.",
      },
      {
        title: "Wat is het niet?",
        content:
          "Prompt engineering is geen verzameling magische zinnen die altijd werken. Het gaat om een iteratief proces van testen, aanscherpen en begrijpen hoe een model reageert. In zakelijke toepassingen hoort daar vaak ook standaardisatie bij, zodat teams consequenter werken.",
      },
      {
        title: "Wat is de zakelijke waarde?",
        content:
          "Betere prompts zorgen voor minder herstelwerk, meer consistente output en duidelijker gebruik van AI binnen teams. Dat is vooral relevant wanneer meerdere medewerkers met hetzelfde systeem werken of wanneer output moet aansluiten op interne standaarden.",
      },
      {
        title: "Wanneer schaal je dit op?",
        content:
          "Zodra een AI-taak vaker terugkomt, loont het om prompts vast te leggen, te testen en te verbeteren. Dan verandert prompt engineering van losse experimenten in een herhaalbare werkwijze die tijd bespaart en kwaliteit verhoogt.",
      },
    ],
  },
  {
    slug: "wat-is-een-api",
    title: "Wat is een API?",
    excerpt:
      "Een API is een afgesproken manier waarop systemen gegevens of functies met elkaar uitwisselen. Het is de verbindingslaag waarmee software kan praten met andere software zonder handmatig kopieren en plakken.",
    ...knowledgeArticleImages["wat-is-een-api"],
    readTime: "5 min",
    category: "Techniek",
    sections: [
      {
        title: "In het kort",
        content:
          "API staat voor Application Programming Interface. Het is een koppelvlak waarmee software op een vaste, gestructureerde manier met andere software communiceert. Daardoor kunnen systemen veilig informatie ophalen, versturen of acties uitvoeren.",
      },
      {
        title: "Wat doet een API in de praktijk?",
        content:
          "Via een API kan een website klantgegevens ophalen, een AI-model aanroepen, documenten versturen of informatie terugschrijven naar een CRM, ERP of ander systeem. De gebruiker ziet dat vaak niet direct, maar onder de motorkap is het een cruciale verbindingslaag.",
      },
      {
        title: "API versus handmatig werken",
        content:
          "Zonder API's moeten mensen vaak gegevens overtypen, exporteren of losse stappen handmatig uitvoeren. Met een API kunnen systemen dat werk automatisch en consistenter doen. Dat scheelt tijd en verkleint de kans op fouten, mits de koppeling goed is ingericht.",
      },
      {
        title: "Waar moet je op letten?",
        content:
          "Belangrijke punten zijn rechten, authenticatie, foutafhandeling, logging, snelheidslimieten en documentatie. Een API kan technisch werken en toch operationeel onhandig zijn als beheer, beveiliging of monitoring ontbreken.",
      },
      {
        title: "Waarom is dit relevant voor organisaties?",
        content:
          "Vrijwel elke moderne digitale omgeving steunt op API's. Als je begrijpt wat een API doet, kun je beter beoordelen hoe systemen gekoppeld worden, waar afhankelijkheden zitten en hoe flexibel een oplossing later nog uit te breiden is.",
      },
    ],
  },
  {
    slug: "wat-is-een-webhook",
    title: "Wat is een webhook?",
    excerpt:
      "Een webhook is een automatisch bericht van het ene systeem naar het andere zodra er iets gebeurt. Daarmee kun je processen direct laten starten zonder steeds actief te hoeven controleren of er nieuwe informatie is.",
    ...knowledgeArticleImages["wat-is-een-webhook"],
    readTime: "5 min",
    category: "Techniek",
    sections: [
      {
        title: "In gewone taal",
        content:
          "Een webhook is een seintje dat automatisch wordt verstuurd zodra een gebeurtenis plaatsvindt, zoals een nieuwe aanvraag, betaling, upload of formulierinzending. In plaats van steeds te vragen of er iets is veranderd, ontvang je direct een melding wanneer dat zo is.",
      },
      {
        title: "Wat is het verschil met een API?",
        content:
          "Bij een API vraag je meestal actief informatie op. Een webhook werkt omgekeerd: een systeem meldt uit zichzelf dat er iets is gebeurd. In veel integraties gebruik je beide samen: een webhook voor de trigger en een API voor het vervolgwerk.",
      },
      {
        title: "Wat stuur je meestal mee?",
        content:
          "Een webhook bevat vaak informatie over het type gebeurtenis, een tijdstip, een record-id of een verwijzing naar extra data. Soms zit alle benodigde informatie in het webhookbericht, en soms moet een ander systeem via een API extra gegevens ophalen.",
      },
      {
        title: "Waar zitten de valkuilen?",
        content:
          "Een webhook moet betrouwbaar aankomen en veilig worden verwerkt. Je moet daarom letten op verificatie, retries, logging en wat er gebeurt als het ontvangende systeem tijdelijk niet beschikbaar is. Zonder die zaken wordt een ogenschijnlijk simpele koppeling toch fragiel.",
      },
      {
        title: "Waarom is het handig?",
        content:
          "Webhooks maken processen sneller en efficienter. Ze zijn nuttig voor notificaties, workflowstarts, documentverwerking en andere situaties waar directe opvolging belangrijk is. In goed ontworpen systemen zorgen webhooks voor minder vertraging en minder onnodig verkeer.",
      },
    ],
  },
  {
    slug: "wat-is-een-backend",
    title: "Wat is een backend?",
    excerpt:
      "De backend is het deel van software waar verwerking, logica, koppelingen en datastromen draaien buiten beeld van de gebruiker. Het is de technische laag die ervoor zorgt dat een app of website echt iets kan doen.",
    ...knowledgeArticleImages["wat-is-een-backend"],
    readTime: "5 min",
    category: "Software",
    sections: [
      {
        title: "Wat bedoelen developers hiermee?",
        content:
          "De backend is de laag achter een website, dashboard of app. Daar worden aanvragen verwerkt, gegevens opgehaald, businesslogica uitgevoerd en rechten gecontroleerd. De gebruiker ziet die laag meestal niet direct, maar hij bepaalt wel hoe het systeem zich gedraagt.",
      },
      {
        title: "Wat draait er vaak in de backend?",
        content:
          "Denk aan API's, databases, authenticatie, logging, koppelingen met andere systemen, documentverwerking en serverlogica. In AI-toepassingen kan de backend ook zorgen voor promptlogica, contextselectie, RAG-opvragingen en het afhandelen van modelaanroepen.",
      },
      {
        title: "Waarom is de backend belangrijk?",
        content:
          "Een mooie interface alleen is niet genoeg. Als de backend traag, onveilig of slecht opgezet is, loopt de hele toepassing vast. De backend bepaalt voor een groot deel betrouwbaarheid, schaalbaarheid en wat er technisch mogelijk is binnen een proces.",
      },
      {
        title: "Welke vragen zijn relevant?",
        content:
          "Bij offertes of softwarekeuzes is het slim om te vragen waar data wordt opgeslagen, hoe koppelingen werken, hoe fouten worden afgehandeld en hoe logging of rechten zijn geregeld. Dat zijn typische backendvragen die veel zeggen over de volwassenheid van een oplossing.",
      },
      {
        title: "Hoe verhoudt backend zich tot frontend?",
        content:
          "De frontend is wat gebruikers zien. De backend is wat daarachter werkt. Samen vormen ze de totale ervaring. Een sterke oplossing heeft dus niet alleen een nette interface, maar ook een backend die logisch, veilig en onderhoudbaar is.",
      },
    ],
  },
  {
    slug: "wat-is-een-frontend",
    title: "Wat is een frontend?",
    excerpt:
      "De frontend is het deel van software dat gebruikers direct zien en bedienen. Het gaat om schermen, formulieren, feedback en interactie, en dus om hoe prettig en duidelijk een systeem in de praktijk werkt.",
    ...knowledgeArticleImages["wat-is-een-frontend"],
    readTime: "4 min",
    category: "Software",
    sections: [
      {
        title: "In het kort",
        content:
          "De frontend is de interface van een website, portaal, dashboard of app. Dat is het deel waarmee gebruikers direct werken: knoppen, formulieren, tabellen, navigatie, meldingen en andere visuele onderdelen.",
      },
      {
        title: "Waarom is frontend belangrijk?",
        content:
          "Zelfs als de techniek erachter sterk is, kan een oplossing alsnog frustrerend zijn als de interface onduidelijk of traag voelt. Frontend gaat daarom niet alleen over uiterlijk, maar ook over gebruiksgemak, begrijpelijkheid en vertrouwen.",
      },
      {
        title: "Wat ziet een gebruiker hiervan terug?",
        content:
          "Gebruikers merken frontend in laadtijd, leesbaarheid, foutmeldingen, volgorde van stappen en hoe logisch een handeling aanvoelt. Goede frontend maakt complexe processen hanteerbaar. Slechte frontend maakt simpele taken onnodig lastig.",
      },
      {
        title: "Hoe werkt frontend samen met backend?",
        content:
          "De frontend verzamelt invoer en toont resultaten. De backend verwerkt die invoer en levert data of acties terug. Een goede samenwerking tussen die twee zorgt ervoor dat een systeem niet alleen mooi oogt, maar ook inhoudelijk klopt en stabiel blijft werken.",
      },
      {
        title: "Hoe beoordeel je kwaliteit?",
        content:
          "Kijk naar duidelijkheid, snelheid, foutafhandeling, toegankelijkheid en of de interface aansluit op het echte werkproces. Goede frontend voelt niet indrukwekkend om de vorm, maar logisch om het gebruik.",
      },
    ],
  },
  {
    slug: "wat-is-cloud",
    title: "Wat is cloud?",
    excerpt:
      "Met cloud bedoelen organisaties meestal software, opslag of rekenkracht die via externe infrastructuur beschikbaar wordt gemaakt. Dat geeft flexibiliteit, maar brengt ook keuzes mee rond data, afhankelijkheid en beheer.",
    ...knowledgeArticleImages["wat-is-cloud"],
    readTime: "5 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "Wat betekent het precies?",
        content:
          "Cloud betekent dat software of data niet alleen op je eigen apparaat of server draait, maar via externe infrastructuur wordt aangeboden. Die infrastructuur wordt meestal beheerd door een leverancier of hostingpartij en is via internet bereikbaar.",
      },
      {
        title: "Waarom kiezen organisaties hiervoor?",
        content:
          "Cloud kan aantrekkelijk zijn door snelle uitrol, schaalbaarheid en beheer op afstand. Je hoeft niet alles zelf te hosten en kunt vaak sneller starten. Voor veel toepassingen is dat praktisch, zeker als flexibiliteit belangrijker is dan volledige lokale controle.",
      },
      {
        title: "Welke afwegingen horen erbij?",
        content:
          "Cloud brengt ook vragen mee over privacy, datalocatie, terugkerende kosten, vendor lock-in en beschikbaarheid. Zodra processen echt afhankelijk worden van externe platformen, worden die keuzes strategischer dan ze op het eerste gezicht lijken.",
      },
      {
        title: "Cloud of lokaal?",
        content:
          "Dat is meestal geen zwart-witkeuze. Sommige functies kunnen prima in de cloud draaien, terwijl andere lokaal moeten blijven vanwege continuiteit, veiligheid of kostenbeheersing. In de praktijk ontstaat vaak een hybride vorm waarin per proces wordt gekozen wat logisch is.",
      },
      {
        title: "Wat moet je onthouden?",
        content:
          "Cloud is niet per definitie goed of slecht. Het is een manier om infrastructuur te organiseren. De juiste keuze hangt af van je data, je processen, je risicoprofiel en hoeveel regie je zelf wilt houden over de technische basislaag.",
      },
    ],
  },
  {
    slug: "wat-is-een-workflow",
    title: "Wat is een workflow?",
    excerpt:
      "Een workflow is de vaste volgorde van stappen waarin werk, informatie en acties door een proces bewegen. Zodra je workflows helder hebt, kun je pas echt beoordelen waar software, automatisering of AI waarde toevoegt.",
    ...knowledgeArticleImages["wat-is-een-workflow"],
    readTime: "5 min",
    category: "Werkwijze",
    sections: [
      {
        title: "In het kort",
        content:
          "Een workflow beschrijft hoe een taak stap voor stap verloopt. Denk aan invoer, controle, verwerking, goedkeuring, terugkoppeling en eventuele opvolging. Het is dus niet alleen wat er gebeurt, maar ook in welke volgorde en door wie.",
      },
      {
        title: "Waarom hoor je dit zo vaak bij software?",
        content:
          "Software ondersteunt of automatiseert vaak bestaande workflows. Als je niet weet hoe een proces in elkaar zit, is het lastig om te bepalen waar een systeem moet helpen. Daarom is workflowdenken belangrijk bij maatwerksoftware, integraties en AI-toepassingen.",
      },
      {
        title: "Wat maakt een workflow goed?",
        content:
          "Een goede workflow is duidelijk, herhaalbaar en houdt rekening met uitzonderingen. Rollen, invoer, beslismomenten en controlepunten zijn dan zichtbaar. Daardoor wordt een proces minder afhankelijk van losse kennis in hoofden van medewerkers.",
      },
      {
        title: "Waar komt AI in beeld?",
        content:
          "AI is vooral nuttig op onderdelen van een workflow waar taal, classificatie, samenvatting of voorbereiding een rol spelen. Het heeft weinig zin om lukraak AI toe te voegen zonder te begrijpen waar de echte bottlenecks en kwaliteitsrisico's zitten.",
      },
      {
        title: "Veelgemaakte fout",
        content:
          "Organisaties kijken soms eerst naar tooling en pas daarna naar het proces. Dan automatiseer je al snel rommel. Beter is om eerst de workflow scherp te krijgen en daarna te bepalen welke stappen software, koppelingen of AI het best kunnen ondersteunen.",
      },
    ],
  },
];
