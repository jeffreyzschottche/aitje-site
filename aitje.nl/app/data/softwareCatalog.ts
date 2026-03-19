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
  highlights?: string[];
  gallery?: { src: string; alt: string; title?: string; description?: string }[];
  sections: SoftwareSection[];
};

export const softwareCatalog: SoftwareItem[] = [
  {
    slug: "aitje-assistent-os",
    title: "AITJE Assistent OS",
    shortDescription:
      "Het lokale besturingssysteem van de AITJE Cube waarin chat, kaarten, kennis, apparaten, gebruikers en systeembeheer samenkomen.",
    heroDescription:
      "AITJE Assistent OS is de interface en systeemlaag op de cube zelf. Hier beheer je lokaal je assistent, kennis, contacten, kaarten, apparaten, gebruikers en netwerk, zodat je ook zonder internet kunt blijven werken met je eigen context en instellingen.",
    image: "/images/os-screenshots/chatassistent.jpeg",
    highlights: [
      "Chat direct op het device met lokale kennis, zonder internetverbinding",
      "Bekijk offline kaarten, open je kennisbank en beheer contacten met locatiepin",
      "Regel gebruikers, netwerk, gekoppelde apparaten en hardware-instellingen centraal",
      "Schakel response modes zoals Developer, Finance, Law en Child per situatie in",
    ],
    gallery: [
      {
        src: "/images/os-screenshots/chatassistent.jpeg",
        alt: "Chatassistent binnen AITJE Assistent OS op het device zelf",
        title: "Chat assistent op het apparaat zelf",
        description:
          "Dit is het hart van AITJE Assistent OS. Op het device zelf kun je direct chatten met de assistent zonder afhankelijk te zijn van internet. De assistent werkt met lokaal beschikbare kennis, laat je snel door je kennisbank bladeren en kan tegelijk functioneren als praktische systeemingang voor kaarten, contacten, instellingen en gekoppelde apparaten. Ook response modes zijn hier belangrijk: in Developer-modus stuurt de assistent op code en technische precisie, in Finance-modus gebruikt hij financiele feiten en bronnen uit de kennisbank, in Law-modus reageert hij voorzichtiger en juridisch gestructureerd, in Child-modus legt hij simpel en vriendelijk uit.",
      },
      {
        src: "/images/os-screenshots/contacten.jpeg",
        alt: "Contactenoverzicht in AITJE Assistent OS",
        title: "Contacten met vaste locaties",
        description:
          "Binnen het contactenoverzicht voeg je partners, leveranciers, familieleden, klanten of andere belangrijke personen en plekken toe aan je lokale adresboek. Aan elk contact kun je een locatie koppelen op de kaart, zodat je altijd weet waar relevante adressen en fysieke locaties zich bevinden. Alles blijft offline opgeslagen op de cube, waardoor je adresboek ook zonder internet direct beschikbaar blijft.",
      },
      {
        src: "/images/os-screenshots/gebruikersbeheer.jpeg",
        alt: "Gebruikersbeheer in AITJE Assistent OS",
        title: "Gebruikersbeheer voor clienttoegang",
        description:
          "In gebruikersbeheer bepaal je wie via de client gebruik mag maken van de API en assistentsoftware die op de AITJE Cube draait. Je maakt accounts aan, beheert toegangsrechten en houdt de omgeving afgeschermd voor alleen de mensen die echt toegang nodig hebben. Daarmee vormt deze pagina de schakel tussen de lokale cube en de mensen of teams die via clientsoftware willen verbinden.",
      },
      {
        src: "/images/os-screenshots/instellingen.jpeg",
        alt: "Instellingen in AITJE Assistent OS",
        title: "Instellingen voor hardware en gedrag",
        description:
          "Via instellingen pas je algemene systeemgegevens aan en beheer je onderdelen van de hardwareconfiguratie. Dit is de plek waar je de cube afstemt op jouw werkwijze, technische voorkeuren en gebruikscontext. Denk aan apparaatgedrag, algemene configuratie en instellingen die bepalen hoe de omgeving zich in het dagelijks gebruik hoort te gedragen.",
      },
      {
        src: "/images/os-screenshots/kennisbankinzicht.jpeg",
        alt: "Kennisbankinzicht in AITJE Assistent OS",
        title: "Inzicht in gesynchroniseerde kennis",
        description:
          "Het kennisbankinzicht laat zien welke informatie al vanaf de kennisbankomgeving naar de cube is gesynchroniseerd. Je kijkt hier niet naar ruwe documenten, maar naar de lokaal beschikbare kennislaag die uit de vector embedding omgeving is opgebouwd. Zo zie je welke context al klaarstaat voor de assistent en welke kennis dus direct offline benut kan worden.",
      },
      {
        src: "/images/os-screenshots/map.jpeg",
        alt: "Lokale kaart van Europa binnen AITJE Assistent OS",
        title: "Lokale kaart die altijd beschikbaar blijft",
        description:
          "De kaart in AITJE Assistent OS blijft ook offline bruikbaar. Je beschikt over een lokale kaart van Europa, kunt eigen locaties toevoegen en laat gps-pins of vaste adressen zichtbaar op de kaart staan. Dat maakt het systeem praktisch voor onderweg, voor beheer van locaties en voor situaties waarin internet niet vanzelfsprekend is.",
      },
      {
        src: "/images/os-screenshots/netwerksettings.png",
        alt: "Netwerkinstellingen in AITJE Assistent OS",
        title: "Netwerk aanpassen en apparaten koppelen",
        description:
          "Op deze pagina pas je netwerkinstellingen aan, voeg je wijzigingen toe en beheer je de technische verbinding van de cube. Hier kun je ook een connected device toevoegen, zodat extra apparaten gecontroleerd aan de AITJE-omgeving worden gekoppeld. Dit is het deel van het systeem waar praktische IT-inrichting en dagelijks beheer elkaar raken.",
      },
    ],
    sections: [
      {
        title: "De lokale cockpit van de AITJE Cube",
        content:
          "AITJE Assistent OS is niet alleen een technische onderlaag, maar de dagelijkse systeemomgeving van de cube zelf. In deze interface komen lokale AI, kennis, kaarten, contacten, gebruikers en apparaatinstellingen samen in een beheersbare cockpit. Daardoor heb je geen losse tools nodig om met je assistent te werken of je infrastructuur te beheren: het geheel zit in een omgeving die direct op de hardware draait.",
      },
      {
        title: "Werken zonder internet, met je eigen context",
        content:
          "Een van de sterkste eigenschappen van het OS is dat belangrijke functies lokaal beschikbaar blijven. Je kunt op het device zelf chatten, opgeslagen kennis raadplegen, de kaart bekijken, contacten beheren en locaties pinnen zonder dat daar continu internet voor nodig is. Dat maakt het systeem geschikt voor organisaties en gebruikers die controle, continuiteit en lokale beschikbaarheid belangrijk vinden.",
      },
      {
        title: "Van assistentmodus tot netwerkbeheer",
        content:
          "Binnen het OS richt je zowel inhoudelijk gedrag als technische randvoorwaarden in. Je kiest bijvoorbeeld hoe de assistent moet reageren via specifieke modes, beheert gebruikers die via de client mogen verbinden, wijzigt netwerksettings, koppelt apparaten en houdt zicht op welke kennis lokaal beschikbaar is. Daarmee stuurt het OS niet alleen de techniek aan, maar ook de manier waarop de assistent zich in de praktijk gedraagt.",
      },
      {
        title: "Praktisch beheer voor echte inzet",
        content:
          "Veel AI-oplossingen blijven hangen in losse chats of een abstract dashboard. AITJE Assistent OS brengt juist bruikbare beheerfuncties samen: je ziet wie toegang heeft, waar locaties zich bevinden, welke kennis is gesynchroniseerd en hoe apparaten verbonden zijn. Daardoor wordt de cube geen experiment, maar een concreet inzetbaar systeem voor dagelijks gebruik en beheer.",
      },
      {
        title: "Hoe je deze software bereikt",
        content:
          "AITJE Assistent OS bereik je rechtstreeks op de AITJE Cube zelf. Deze laag is bedoeld voor beheer, lokale bediening en systeeminrichting op het apparaat. Afhankelijk van de opzet krijgt een beheerder, eigenaar of technisch verantwoordelijke toegang om de assistent, kennis, gebruikers, kaartgegevens, apparaten en netwerkverbindingen te beheren.",
      },
      {
        title: "Hoe OS samenwerkt met client en kennisbank",
        content:
          "Vanuit het OS bepaal je wie via de client mag inloggen, welke kennis al lokaal op de cube staat en hoe de rest van het systeem zich technisch gedraagt. De kennisbank levert ge-embedde context aan die je op de cube kunt synchroniseren zodra internet beschikbaar is, terwijl de client vervolgens via het lokale netwerk op deze omgeving aansluit. OS is dus het operationele centrum waarin lokale AI, gebruikers en infrastructuur samenkomen.",
      },
    ],
  },
  {
    slug: "aitje-assistent-client",
    title: "AITJE Assistent Client",
    shortDescription:
      "De mobiele en desktopclient waarmee je via je lokale netwerk verbindt met de AITJE Cube en de assistent gebruikt.",
    heroDescription:
      "De AITJE Assistent Client is de app voor mobiel en desktop waarmee je op het lokale netwerk verbindt met de AITJE Cube. Zo gebruik je de assistentsoftware en API van de cube in een toegankelijke interface, zonder direct in het onderliggende OS te hoeven werken.",
    image: "/images/aitje-client-screens.png",
    highlights: [
      "Werkt als mobiele app of desktop app voor dagelijkse toegang tot AITJE Assistent",
      "Verbindt via het lokale netwerk direct met de AITJE Cube",
      "Inloggen gebeurt met een connected device account dat op de cube is aangemaakt",
      "Geeft gebruikers chattoegang tot de assistentsoftware die op de cube draait",
    ],
    gallery: [
      {
        src: "/images/aitje-client-screens.png",
        alt: "AITJE Assistent Client op mobiel en desktop",
        title: "Eenzelfde assistent op mobiel en desktop",
        description:
          "De client is bedoeld als gebruiksvriendelijke toegangspoort tot de AITJE Cube. Of iemand nu op een telefoon, tablet of desktop werkt, de client maakt dezelfde lokale assistent bereikbaar via een heldere interface. Daardoor kan de techniek op de cube blijven draaien, terwijl eindgebruikers vooral een vertrouwde app-ervaring zien.",
      },
      {
        src: "/images/client/connect-hardware.png",
        alt: "Scherm om hardware te koppelen in AITJE Assistent Client",
        title: "Verbind de client met jouw cube",
        description:
          "Op dit scherm koppel je de app aan een specifieke AITJE Cube. Je voert het nummer in dat op de sticker of onderkant van de cube staat. Daarmee weet de client met welke lokale hardware hij verbinding moet maken. Deze stap maakt het systeem persoonlijk en zorgt dat gebruikers met de juiste cube verbinden in plaats van met een willekeurige omgeving.",
      },
      {
        src: "/images/client/login.png",
        alt: "Inlogscherm van AITJE Assistent Client",
        title: "Inloggen met een connected device account",
        description:
          "Na het koppelen logt de gebruiker in met de gegevens van het connected device account dat op de cube zelf is aangemaakt. Daarmee blijft toegangsbeheer centraal geregeld vanuit het OS en krijgt niet iedereen zomaar toegang tot de lokale assistent. Deze inlogstap vormt dus de beveiligde brug tussen app en cube.",
      },
      {
        src: "/images/client/home-chat.png",
        alt: "Chat home screen van AITJE Assistent Client",
        title: "Gebruik de assistent vanaf de client",
        description:
          "Na verbinding en login kom je uit in de chatomgeving van de client. Hier gebruik je de AITJE Assistent die lokaal op de cube runt. Voor de gebruiker voelt dit als een normale app-ervaring, terwijl de antwoorden en context vanuit de eigen lokale infrastructuur worden geleverd. Zo wordt de cube toegankelijk voor dagelijks gebruik zonder dat eindgebruikers het OS zelf hoeven te beheren.",
      },
    ],
    sections: [
      {
        title: "De app-laag boven op de cube",
        content:
          "De AITJE Assistent Client is de praktische werklaag voor mensen die wel met de assistent willen werken, maar niet in het systeembeheer van de cube hoeven te zitten. De app draait als mobiele of desktopclient en gebruikt het lokale netwerk om de software op de AITJE Cube bereikbaar te maken. Daardoor krijgt de gebruiker een eenvoudige ingang tot een lokaal draaiende assistentomgeving.",
      },
      {
        title: "Lokale verbinding, geen publieke omweg",
        content:
          "De client is gebouwd rond het idee dat de cube op het eigen netwerk draait. Je verbindt dus niet eerst via een externe publieke dienst, maar rechtstreeks met de hardware die lokaal in jouw omgeving staat. Dat past bij organisaties en gebruikers die controle willen houden over hun data, infrastructuur en dagelijkse toegang tot de assistent.",
      },
      {
        title: "Koppelen en inloggen in een logische volgorde",
        content:
          "De eerste ervaring is bewust simpel gehouden. Eerst koppel je de juiste cube via het apparaatnummer op de hardware. Daarna log je in met het connected device account dat lokaal op de cube is aangemaakt. Zo blijft duidelijk welke gebruiker toegang heeft tot welke hardware en houd je beheer en gebruik logisch gescheiden.",
      },
      {
        title: "Een client voor dagelijks gebruik",
        content:
          "Na het inloggen gebruiken medewerkers of gebruikers de client als dagelijkse ingang tot de assistent. Vragen stellen, context ophalen en antwoorden ontvangen gebeurt in een interface die vertrouwd aanvoelt, terwijl de intelligentie en kennis op de cube blijven draaien. Daarmee wordt de client geen los chatvenster, maar een bruikbare toegang tot jouw eigen lokale AI-omgeving.",
      },
      {
        title: "Hoe je deze software bereikt",
        content:
          "De client bereik je als app op mobiel of desktop. Gebruikers openen de applicatie, koppelen hun cube en loggen vervolgens in met een account dat in het OS is beheerd. Daarmee is de client de laag die eindgebruikers direct aanraken, terwijl beheer, gebruikersaanmaak en systeeminstellingen op de cube blijven.",
      },
      {
        title: "Hoe de client samenwerkt met OS en kennisbank",
        content:
          "De client haalt zijn toegang en autorisatie uit het OS en profiteert van de kennis die op de cube is gesynchroniseerd vanuit de kennisbank. Daardoor is de app niet afhankelijk van losse cloudaccounts of versnipperde documenten. Wat op de cube beschikbaar is, kan via de client gecontroleerd aan gebruikers worden aangeboden in een veel toegankelijkere vorm.",
      },
    ],
  },
  {
    slug: "aitje-assistent-kennisbank",
    title: "AITJE Assistent Kennisbank",
    shortDescription:
      "De externe omgeving waarin documenten worden ge-embed, versiebeheer krijgen en als lokale kennis naar de cube kunnen worden gesynchroniseerd.",
    heroDescription:
      "AITJE Assistent Kennisbank is de online beheeromgeving voor je kennislaag. Hier upload en beheer je documenten, laat je ze verwerken tot embeddings, zet je versiebeheer op via een private repository en synchroniseer je de gevectoriseerde kennis daarna naar de AITJE Cube voor lokaal gebruik.",
    image: "/images/embedding/home.png",
    highlights: [
      "Online omgeving om documenten te beheren, uploaden en opnieuw te verwerken",
      "Bestanden worden niet als ruwe data opgeslagen, maar direct ge-embed voor AI-context",
      "Ondersteunt sync naar een beveiligde private Git-repository voor versiebeheer",
      "De cube haalt alleen gevectoriseerde kennis op; internet is alleen nodig voor updates en sync",
    ],
    gallery: [
      {
        src: "/images/embedding/home.png",
        alt: "Home van de AITJE Assistent Kennisbank",
        title: "De online thuisbasis van je kennislaag",
        description:
          "Dit is de centrale omgeving waarin je de kennisbank beheert. Hier start het proces van uploaden, structureren en verwerken. Het doel van deze omgeving is niet om documenten in een klassieke database te bewaren, maar om bronmateriaal gecontroleerd om te zetten naar een vorm die LLM's als context kunnen ophalen.",
      },
      {
        src: "/images/embedding/account-settings.png",
        alt: "Accountinstellingen in de AITJE Assistent Kennisbank",
        title: "Beheer hoe de omgeving voor jouw organisatie werkt",
        description:
          "In accountinstellingen regel je de organisatorische en technische randvoorwaarden van de kennisbankomgeving. Hier stemmen we het gebruik af op jouw organisatie, bijvoorbeeld wanneer jij zelf periodiek data wilt bijwerken of wanneer wij dat beheer deels of volledig uit handen nemen.",
      },
      {
        src: "/images/embedding/kennisbank-inzicht.png",
        alt: "Inzicht in verwerkte kennis binnen de AITJE Assistent Kennisbank",
        title: "Zie wat al als kennis beschikbaar is",
        description:
          "Het kennisbankinzicht laat zien welke informatie al is verwerkt tot bruikbare context. Daarmee krijg je zicht op de kennislaag die uiteindelijk relevant wordt voor de assistent. Het helpt om te controleren wat al gesynchroniseerd, ingebed of inhoudelijk beschikbaar is voordat je nieuwe updates doorvoert.",
      },
      {
        src: "/images/embedding/knowledgebase-bibliotheek.png",
        alt: "Bibliotheekoverzicht van de AITJE Assistent Kennisbank",
        title: "Upload en beheer je bronmateriaal",
        description:
          "In de bibliotheek beheer je de documenten en bronnen die als input dienen voor de embeddinglaag. Bestanden worden in deze workflow niet simpelweg opgeslagen als eindpunt, maar verwerkt tot vectorrepresentaties. De webpagina fungeert dus als verwerkingsomgeving: documenten verlaten de sessie niet als ruwe databasebestanden, maar worden omgezet naar een contextvorm die later lokaal inzetbaar wordt.",
      },
      {
        src: "/images/embedding/prioriteitsmanager.png",
        alt: "Prioriteitsmanager in de AITJE Assistent Kennisbank",
        title: "Stuur op welke kennis het belangrijkst is",
        description:
          "Met de prioriteitsmanager kun je de nadruk leggen op belangrijke bronnen, domeinen of informatiestromen. Dat is waardevol wanneer bepaalde kennis sneller moet worden bijgewerkt of inhoudelijk zwaarder moet meewegen in de contextlaag. Zo maak je de kennisbank niet alleen groter, maar ook slimmer ingericht.",
      },
      {
        src: "/images/embedding/relatiemanager.png",
        alt: "Relatiemanager in de AITJE Assistent Kennisbank",
        title: "Breng verbanden aan tussen bronnen en context",
        description:
          "De relatiemanager helpt om kennis niet als losse documenten te behandelen, maar als samenhangende informatie. Door relaties tussen bronnen of onderwerpen beter te organiseren, ontstaat een rijkere contextlaag waar de assistent later preciezer uit kan ophalen. Dat verhoogt de kwaliteit van antwoorden en maakt de kennisbank inhoudelijk consistenter.",
      },
      {
        src: "/images/embedding/versiebeheer.png",
        alt: "Versiebeheer in de AITJE Assistent Kennisbank",
        title: "Private Git-sync voor controleerbaar versiebeheer",
        description:
          "De kennisbankomgeving biedt een sync naar Git. We koppelen daarvoor een beveiligde private repository waarin de ge-embedde output in versiebeheer wordt geplaatst. Jij uploadt of wijzigt content, het systeem verwerkt de embeddings automatisch en synchroniseert de verwerkte bestanden naar Git. Daardoor staat de echte brondata niet in een traditionele database, terwijl wijzigingen wel controleerbaar en terug te volgen blijven.",
      },
    ],
    sections: [
      {
        title: "Een externe omgeving voor kennisbeheer en verwerking",
        content:
          "AITJE Assistent Kennisbank is een aparte online omgeving waarin je data beheert, uploadt en laat verwerken tot bruikbare AI-context. Dat kan als self-service omgeving wanneer je zelf regelmatig documenten wilt bijwerken, maar we kunnen dit beheer ook voor je verzorgen. De focus ligt niet op simpel documentopslag, maar op gecontroleerde verwerking van bronmateriaal naar een kennislaag die klaar is voor retrieval en contextgebruik.",
      },
      {
        title: "Documenten worden ge-embed, niet als ruwe data bewaard",
        content:
          "Wanneer je documenten uploadt, blijven ze niet als gewone dataset of klassieke database-opslag rondslingeren. Ze worden verwerkt tot embeddings: een representatie waarmee taalmodellen relevante context kunnen ophalen. Dat betekent dat de kennisbank is ingericht als verwerkingslaag voor context, niet als traditionele documentendump. Zo blijft de echte waarde zitten in de gevectoriseerde kennisstructuur die later lokaal opvraagbaar wordt.",
      },
      {
        title: "Versiebeheer via private Git-sync",
        content:
          "De online omgeving kan een beveiligde private repository aan de kennislaag koppelen. Zodra documenten zijn verwerkt, synchroniseert het systeem de ge-embedde output naar Git. Daardoor worden wijzigingen aan de kennislaag versieerbaar en controleerbaar, zonder dat de ruwe documenten zelf als operationele database hoeven te dienen. Dit geeft grip op updates, historie en betrouwbaarheid.",
      },
      {
        title: "Internet is alleen nodig voor kennisupdates",
        content:
          "De cube heeft internet alleen echt nodig wanneer je nieuwe kennis wilt verwerken of synchroniseren. Op dat moment haal je de gevectoriseerde kennis op vanuit de online omgeving en sla je die lokaal op de cube op. Daarna kan AITJE Assistent die context offline blijven gebruiken. Dat maakt de kennisbank een online beheerlaag met een nadrukkelijk lokaal eindpunt.",
      },
      {
        title: "Hoe je deze software bereikt",
        content:
          "De kennisbank bereik je via een externe online omgeving voor beheerders, contentverantwoordelijken of ons beheerteam. Daar upload, controleer en synchroniseer je de kennislaag. Eindgebruikers merken de waarde meestal niet in deze omgeving zelf, maar via de cube en client die antwoorden baseren op de lokaal opgehaalde context.",
      },
      {
        title: "Waarom deze laag strategisch is",
        content:
          "Wie de kennislaag goed beheert, bouwt aan de inhoudelijke betrouwbaarheid van de hele AITJE-omgeving. De kwaliteit van antwoorden, retrieval en workflows hangt direct samen met hoe goed bronmateriaal wordt verwerkt, geversioneerd en gesynchroniseerd. De kennisbank is daarom niet alleen ondersteunend, maar een strategische laag onder de lokale assistent.",
      },
    ],
  },
  {
    slug: "wordpress-ai-search-overview",
    title: "WordPress AI Search Overview",
    shortDescription:
      "Gratis WordPress-plugin die pagina's en zoekresultaten aanvult met een AI search overview in tekst of structured data.",
    heroDescription:
      "De WordPress AI Search Overview plugin vult een webpagina of zoekpagina aan met een AI-samenvatting van de inhoud. Je kiest zelf de provider, API key, base URL, chatmodel, temperature, batch size en outputvorm, waarna de plugin een shortcode of automatische injectie gebruikt om de overview direct in WordPress te tonen. De plugin zelf is gratis; je gebruikt je eigen API key en houdt dus zelf grip op verbruik en kosten.",
    image: "/images/aitje-search-overview-settings-example.png",
    highlights: [
      "Kies tekstoutput of structured data per use-case",
      "Shortcode beschikbaar, of automatisch injecteren op pagina's en `?s=` zoekpagina's",
      "Instelbare provider, API key, API base, chat model, temperature, batch size en connectietest",
      "Eigen promptveld om stijl, toon en inhoud van de overview strak te sturen",
      "Embedding- en knowledgebanklaag met CPT-selectie, modelkeuze, chunking, top-k en synoniemen",
    ],
    gallery: [
      {
        src: "/images/aitje-search-overview-settings-example.png",
        alt: "Instellingen van de WordPress AI Search Overview plugin",
        title: "Provider, model en output instellen",
        description:
          "In dit scherm kies je de LLM-vendor, API key, API base, chatmodel, temperature, batch size en verbindingsinstellingen. Je bepaalt hier ook of de output als tekst of structured data terugkomt, of shortcode-weergave aanstaat en of de plugin automatisch aan pagina's of aan de `?s=` zoekpagina wordt toegevoegd.",
      },
      {
        src: "/images/aitje-search-overview-embedding-example.png",
        alt: "Embedding instellingen van de WordPress AI Search Overview plugin",
        title: "Contenttypen en retrievallaag beheren",
        description:
          "De embedding-omgeving werkt vergelijkbaar met de RAG-chat: je selecteert relevante CPT's, kiest een embeddingmodel en stelt chunk size, batch size, top-k en synoniemen per contenttype in. Daardoor kan de overview beter aansluiten op de context van een pagina of zoekopdracht.",
      },
      {
        src: "/images/aitje-search-overview-example-on-page.png",
        alt: "Voorbeeld van de AI Search Overview shortcode op een testpagina over transfers in de Eredivisie",
        title: "Output direct op de pagina tonen",
        description:
          "Op de testpagina met 100 voetbaltransfers in de Eredivisie van 2025 zie je hoe de shortcode of automatische injectie de gegenereerde overview als zichtbaar blok op de pagina plaatst. Ook de styling van deze output is aanpasbaar, zodat de samenvatting past bij je thema en informatiehiërarchie.",
      },
      {
        src: "/images/aitje-search-overview-prompt-example.png",
        alt: "Promptveld van de WordPress AI Search Overview plugin",
        title: "Prompt per site of use-case aanscherpen",
        description:
          "Via het promptscherm schrijf je instructies voor toon, informatiedichtheid en formaat. Daarmee stuur je niet alleen de inhoud van de samenvatting, maar ook of de plugin eerder informatief, SEO-gericht, gestructureerd of juist compact moet antwoorden.",
      },
    ],
    sections: [
      {
        title: "Een AI-overviewlaag bovenop je bestaande WordPress-content",
        content:
          "WordPress AI Search Overview maakt van een gewone pagina of zoekresultaatpagina een contextrijkere ingang. De plugin leest de beschikbare inhoud, bouwt daar een samenvatting of structured output van en toont die via shortcode of automatische plaatsing direct in WordPress. Daardoor krijgt een bezoeker sneller overzicht en kan een pagina meer semantische uitleg bevatten dan alleen titel, intro en losse contentblokken.",
      },
      {
        title: "Je stuurt provider, prompt en output volledig zelf aan",
        content:
          "De instellingen zijn niet dichtgetimmerd. Je kiest zelf de API-provider, credentials, actieve modellen, temperature en batch size, test de verbinding en bepaalt via het promptveld hoe de overview moet schrijven. Ook de outputvorm ligt bij jou: tekst of structured data, met shortcode aan of uit, en met automatische injectie op alle pagina's of specifiek op de `?s=` zoekresultaten.",
      },
      {
        title: "De embeddinglaag maakt de overview inhoudelijk scherper",
        content:
          "Naast de promptlaag is er een embedding- en knowledgebankomgeving waarmee je de plugin kunt optimaliseren. Daar selecteer je welke CPT's meedoen, welk embeddingmodel wordt gebruikt, hoe groot chunks mogen zijn, hoeveel batches er per run worden verwerkt en hoeveel resultaten via top-k worden teruggehaald. Met synoniemen per CPT kun je bovendien sturen welke termen bepaalde contenttypen moeten triggeren.",
      },
      {
        title: "Geschikt voor landingspagina's, contenthubs en zoekpagina's",
        content:
          "Deze plugin is vooral sterk wanneer je bezoekers snel inhoudelijke oriëntatie wilt geven, of wanneer zoekpagina's anders te kaal blijven. Je kunt de response tonen op gewone contentpagina's, op zoekpagina's of op beide. Daarmee werkt de plugin zowel voor informatiepagina's als voor querygedreven overzichten waarin een korte AI-samenvatting de bruikbaarheid direct verhoogt.",
      },
      {
        title: "Beheer, opslaan en opnieuw opbouwen zitten direct in WordPress",
        content:
          "In de admin zie je een volledig settingsscherm waar je prompt en providerinstellingen kunt bewaren, de output kunt testen en het uitvoercommando kunt starten zodat alles opnieuw klaarstaat. Je hoeft dus niet buiten WordPress te werken om de plugin operationeel te houden. De overzichtslaag, de prompt en de embeddinginstellingen komen samen in een beheersbare workflow voor redacties en beheerders.",
      },
      {
        title: "Gratis plugin, eigen API key en contact via de site",
        content:
          "Alle WordPress-plugins op deze pagina zijn gratis. Voor deze plugin betaal je dus niet voor de software zelf, maar gebruik je je eigen API key voor de gekozen provider. Zo houd je grip op tokens, modelkeuze en kosten. Via de knop op deze pagina ga je naar `/contact` met vooringevulde parameters om de gratis plugin aan te vragen of de use-case met ons te bespreken.",
      },
    ],
  },
  {
    slug: "wordpress-ai-chat",
    title: "WordPress AI Chat",
    shortDescription:
      "Gratis WordPress-plugin voor een configureerbare RAG-chat met shortcode, knowledge bank en eigen providerinstellingen.",
    heroDescription:
      "De WordPress AI Chat plugin geeft je een RAG-chat voor WordPress die je inhoudelijk kunt sturen vanuit je eigen content, embeddings en promptinstellingen. In het beheerscherm kies je provider, API key, temperature, batch size, base prompt en primary focus. In de embeddingomgeving selecteer je CPT's, een embeddingmodel, chunk size, top-k en triggerwoorden, waarna je via `Build Knowledge Bank` nieuwe content direct opnieuw kunt embedden. De plugin zelf is gratis; je gebruikt je eigen API key en beheert dus ook zelf de kosten.",
    image: "/images/wp-rag-chat-example.png",
    highlights: [
      "RAG-chat met shortcode zodat je hem overal op de site kunt inladen",
      "Instelbare provider, API key, temperature, batch size, base prompt en primary focus",
      "Embedding- en knowledge bankscherm met CPT-selectie, model, chunks, top-k en synoniemen",
      "`Build Knowledge Bank` om na het opslaan direct opnieuw embeddings op te bouwen",
      "Antwoordt met maximaal 6 opgehaalde chunks uit een collectie met opgeslagen embeddings en metadata",
    ],
    gallery: [
      {
        src: "/images/wp-rag-chat-example.png",
        alt: "Voorbeeld van de WordPress AI Chat op de website",
        title: "De chat zoals bezoekers hem zien",
        description:
          "Dit scherm laat zien hoe de shortcode de chat op de site laadt. De bezoeker krijgt een directe vraag-en-antwoordlaag bovenop je eigen content, terwijl de antwoorden worden opgebouwd uit de knowledge bank die je in WordPress beheert.",
      },
      {
        src: "/images/wp-chat-settings-example.png",
        alt: "Instellingen van de WordPress AI Chat plugin",
        title: "Provider, prompt en focus sturen",
        description:
          "In de settings kies je de LLM-provider, API key, temperature, batch size en base prompt. Ook stel je een primary focus in zodat de chat consequenter reageert vanuit de rol of taak die je voor de plugin voor ogen hebt.",
      },
      {
        src: "/images/wp-chat-embedding-example.png",
        alt: "Embedding en knowledge bank instellingen van de WordPress AI Chat plugin",
        title: "Knowledge bank opbouwen en optimaliseren",
        description:
          "Hier selecteer je CPT's uit de WordPress-site, kies je het embeddingmodel en stel je chunk size, batch size, top-k en synoniemenwoorden per contenttype in. De shortcode staat in dit scherm ook direct weergegeven, samen met de knop `Build Knowledge Bank` om nieuwe content na het opslaan opnieuw te embedden.",
      },
    ],
    sections: [
      {
        title: "Een RAG-chat die antwoordt vanuit je eigen WordPress-content",
        content:
          "WordPress AI Chat is bedoeld voor sites die bezoekers of redacties niet alleen een leeg chatvenster willen geven, maar een gecontroleerde antwoordlaag op basis van eigen content. De plugin haalt relevante kennis op uit een collection met embeddings en zet die om in beantwoorde vragen die inhoudelijk teruggrijpen op je posts, pagina's en geselecteerde metadata.",
      },
      {
        title: "Je bepaalt zelf hoe de chat moet reageren",
        content:
          "In het settingsscherm stuur je de hele responslaag aan. Je kiest de provider, vult credentials in, zet een base prompt klaar en gebruikt `Primary Focus` om het gedrag van de chat te richten. Daardoor kun je de plugin bijvoorbeeld informatiever, commerciëler, praktischer of juist ondersteunender laten reageren zonder de hele implementatie te hoeven aanpassen.",
      },
      {
        title: "De knowledge bank maakt van gewone content bruikbare chatcontext",
        content:
          "De embeddingomgeving is de inhoudelijke motor van de plugin. Daar kies je welke CPT's moeten meetellen, welk embeddingmodel je wilt gebruiken en hoe groot chunks mogen worden. Je stelt ook batch size, top-k en synoniemenwoorden in, zodat specifieke termen bepaalde contenttypen in de chat kunnen triggeren. Na nieuwe instellingen of contentupdates gebruik je `Build Knowledge Bank` om alles opnieuw klaar te zetten.",
      },
      {
        title: "Antwoorden komen uit concrete opgeslagen chunks",
        content:
          "De plugin laat ook expliciet zien hoe retrieval plaatsvindt. In het voorbeeld wordt geantwoord met maximaal 6 opgehaalde chunks uit een collection met 15 opgeslagen embeddings. Beschikbare velden zijn onder meer `post_id`, `slug`, `permalink`, `post_type`, `title`, `content`, `excerpt` en geselecteerde meta. Daardoor is de chat niet alleen slim, maar ook herleidbaar naar de inhoud waaruit het antwoord is opgebouwd.",
      },
      {
        title: "Shortcode, beheer en her-embedding zitten in dezelfde workflow",
        content:
          "Je laadt de chat overal op de site in via de shortcode die in het embedding- en knowledge bankscherm wordt getoond. Vanuit dezelfde plugin beheer je providerinstellingen, prompt, retrievalparameters en het opnieuw opbouwen van de knowledge bank. Dat maakt het werkbaar voor teams die de chat regelmatig willen aanscherpen zonder extern traject of losse scripts.",
      },
      {
        title: "Gratis plugin, eigen API key en aanvraag via `/contact`",
        content:
          "Ook deze plugin is gratis. Je betaalt dus niet voor de software zelf, maar gebruikt je eigen LLM-provider en API key voor de calls. Daardoor houd je controle over modelkeuze, tokenverbruik en limieten. De knop op deze pagina opent `/contact` met ingevulde parameters zodat je de plugin snel kunt aanvragen.",
      },
    ],
  },
  {
    slug: "wordpress-alt-tekst-generator",
    title: "WordPress Alt Tekst Generator",
    shortDescription:
      "Gratis WordPress-plugin die alt-teksten in bulk genereert met focus op toegankelijkheid, detailniveau en tokenefficiëntie.",
    heroDescription:
      "De WordPress Alt Tekst Generator plugin helpt om afbeeldingen in je WordPress media library schaalbaar van nieuwe alt-teksten te voorzien. Je kiest zelf de API-provider, API key, chatmodel, temperature en batch size, terwijl het visionmodel automatisch wordt gekozen. Via `Primary Focus` stuur je of de output vooral toegankelijk, visueel gedetailleerd of juist kort moet zijn. De plugin bundelt meerdere afbeeldingen in een enkele call om tokens te besparen en is zelf gratis; je gebruikt alleen je eigen API key.",
    image: "/images/alt-generator-header-and-settings.png",
    highlights: [
      "Kies provider, API key, chatmodel, temperature, batch size en test de verbinding direct",
      "`Primary Focus` stuurt de output op accessibility, detail, snelheid en hoeveelheid context",
      "Werk op alle afbeeldingen, alleen zonder bestaande alt-tekst, of handpick een selectie",
      "Promptveld volledig aanpasbaar voor je eigen redactiestijl of WCAG-aanpak",
      "Slimme multi-image verwerking verlaagt tokenkosten door image reading efficiënt te bundelen",
    ],
    gallery: [
      {
        src: "/images/alt-generator-header-and-settings.png",
        alt: "Header en providerinstellingen van de WordPress Alt Tekst Generator",
        title: "Providerinstellingen en connectietest",
        description:
          "Bovenin de plugin kies je de API-provider, vul je de API key in, selecteer je het chatmodel en stel je temperature en batch size in. Het visionmodel wordt automatisch gekozen en met de connectietest controleer je direct of de configuratie werkt.",
      },
      {
        src: "/images/alt-generator-execute-and-focus.png",
        alt: "Primary Focus instellingen van de WordPress Alt Tekst Generator",
        title: "De uitkomst sturen met Primary Focus",
        description:
          "In `Primary Focus` kies je of de alt-tekst vooral op toegankelijkheid moet sturen, een meer gedetailleerde visuele beschrijving moet geven of juist snel en compact moet blijven. Daarnaast bepaal je of de plugin alle afbeeldingen verwerkt, alleen afbeeldingen zonder alt-tekst oppakt of een handpicked selectie gebruikt.",
      },
      {
        src: "/images/alt-generator-prompt-and-save.png",
        alt: "Promptveld van de WordPress Alt Tekst Generator",
        title: "Prompt uitbreiden voor jouw redactiestijl",
        description:
          "De standaardprompt is accessibility-first en in het Nederlands geschreven, maar je kunt hem uitbreiden zoals je wilt. Daarmee maak je de output bijvoorbeeld consistenter voor productfoto's, nieuwsbeelden, sfeerfotografie of beeldbanken met terugkerende patronen.",
      },
      {
        src: "/images/alt-text-media-library-image-without-alt.png",
        alt: "Afbeelding in de media library zonder alt tekst",
        title: "Afbeeldingen zonder alt-tekst direct opsporen",
        description:
          "Dit voorbeeld laat een item in de mediabibliotheek zien dat nog geen alt-tekst heeft. Juist voor dit soort achterstallige bibliotheken is de plugin praktisch: je hoeft niet handmatig elk bestand te openen om ontbrekende beschrijvingen aan te vullen.",
      },
      {
        src: "/images/alt-generator-new-alt-text-example.png",
        alt: "Nieuwe gegenereerde alt tekst in de media library",
        title: "Nieuwe alt-tekst na generatie direct zichtbaar",
        description:
          "Na het uitvoeren van de plugin verschijnt de nieuwe alt-tekst meteen in de media library. Zo zie je direct wat de prompt en gekozen focus opleveren en kun je de stijl verder verfijnen als de beschrijvingen te kort, te breed of te commercieel zijn.",
      },
    ],
    sections: [
      {
        title: "Sneller van lege media library naar bruikbare alt-teksten",
        content:
          "De plugin pakt een praktisch probleem aan dat op veel WordPress-sites blijft liggen: een mediabibliotheek vol afbeeldingen zonder goede alt-tekst. In plaats van alles handmatig na te lopen, laat je de plugin beschrijvingen genereren in natuurlijk Nederlands, afgestemd op de focus die jij kiest. Daarmee stijgt niet alleen de snelheid, maar vooral de consistentie van je beeldbeschrijvingen.",
      },
      {
        title: "Primary Focus bepaalt of de output kort, toegankelijk of gedetailleerd is",
        content:
          "Je stuurt de plugin niet alleen met een prompt, maar ook met een duidelijk gekozen hoofddoel. `Primary Focus` helpt om de beschrijvingen beter te laten aansluiten op accessibility-uitleg, een gedetailleerde visuele beschrijving, een snelle variant of een gemiddelde variant waarin ook een deel van de omgeving wordt genoemd. Zo past dezelfde plugin zich aan aan verschillende contentstrategieën.",
      },
      {
        title: "Je houdt controle over selectie, prompt en provider",
        content:
          "In het beheerscherm kies je welke provider actief is, vul je credentials in en test je de verbinding. Daarna bepaal je of de plugin op alle afbeeldingen draait, alleen op afbeeldingen zonder bestaande alt-tekst of op een handpicked set. Het promptveld blijft volledig aanpasbaar, zodat je de standaardinstructie kunt uitbreiden voor jouw beeldsoorten en redactiestijl.",
      },
      {
        title: "Slimme imagebundeling houdt tokengebruik lager",
        content:
          "Bij vision-aanroepen lopen tokens snel op, zeker als je voor elke afbeelding opnieuw de image reading stack moet starten. Daarom verwerkt AITJE meerdere afbeeldingen tegelijk in een directe call wanneer dat logisch is. Die aanpak is bewust gekozen om tokengebruik te verlagen zonder onnodig op kwaliteit in te leveren. De plugin helpt dus niet alleen bij alt-tekst, maar denkt ook mee over kostenbeheersing.",
      },
      {
        title: "Sterk voor accessibility, redactiesnelheid en opschoning",
        content:
          "Goede alt-teksten ondersteunen toegankelijkheid en maken een site beheerbaar voor redacties die veel beeld publiceren. Deze plugin is daarom vooral interessant voor teams die hun media library willen opschonen, WCAG-serieuzer willen nemen of in korte tijd veel ontbrekende beschrijvingen willen aanvullen zonder elke afbeelding afzonderlijk te beoordelen.",
      },
      {
        title: "Gratis plugin, eigen API key en aanvraag via `/contact`",
        content:
          "De plugin zelf is gratis. Je gebruikt je eigen API key voor de gekozen provider en houdt daardoor controle over modelkeuze, verbruik en budget. Via de knop op deze pagina ga je naar `/contact` met parameters zodat je de gratis plugin kunt aanvragen of je mediabibliotheekcase direct kunt toelichten.",
      },
    ],
  },
  {
    slug: "promptpaleis",
    title: "PromptPaleis",
    shortDescription:
      "Nederlandse online marktplaats voor digitale AI-producten die direct inzetbaar zijn in werkprocessen.",
    heroDescription:
      "PromptPaleis is opgezet als centrale marketplace voor Nederlandse gebruikers, makers en bedrijven die snel bruikbare AI-producten willen vinden, begrijpen en toepassen.",
    image: "/images/promptpaleis-home-screen.png",
    highlights: [
      "Marketplace voor prompts, bundels, workflows, tutorials en templates",
      "Specifiek ingericht voor de Nederlandse markt en Nederlandse makers",
      "Duidelijke productpagina's met uitleg, softwarecompatibiliteit en levering",
      "Geschikt voor ChatGPT, Claude, Gemini, Midjourney, n8n, Make en meer",
    ],
    gallery: [
      {
        src: "/images/promptpaleis-home-screen.png",
        alt: "PromptPaleis home screen met marketplace-overzicht",
      },
      {
        src: "/images/promptpaleis-marketplace.png",
        alt: "PromptPaleis marketplace-overzicht met AI-producten en categorieen",
      },
      {
        src: "/images/promptpaleis-verkoper.png",
        alt: "PromptPaleis verkopersomgeving voor makers en digitale AI-producten",
      },
    ],
    sections: [
      {
        title: "Wat PromptPaleis is",
        content:
          "PromptPaleis is een Nederlandse online marktplaats voor digitale AI-producten. Het platform draait niet om losse promptlijstjes of algemeen AI-nieuws, maar om concrete producten die je direct kunt gebruiken in je werk. Denk aan prompts, promptbundels, workflows, tutorials, templates, handleidingen en andere kennisproducten die zijn gemaakt om sneller resultaat te halen uit moderne AI-tools.",
      },
      {
        title: "Waarom dit platform bestaat",
        content:
          "De kern van PromptPaleis is simpel: wie tools zoals ChatGPT, Claude, Gemini, Midjourney, n8n of Make echt goed wil inzetten, moet snel toegang hebben tot gestructureerde en toepasbare inhoud. In plaats van zelf eindeloos te testen of overal losse tips vandaan te halen, vinden gebruikers hier producten die duidelijk uitleggen wat je krijgt, voor wie het bedoeld is en hoe je ermee start.",
      },
      {
        title: "Nederlands als uitgangspunt",
        content:
          "Wat PromptPaleis onderscheidt, is de expliciete focus op de Nederlandse markt. Het platform is niet opgezet als generieke internationale bibliotheek met half-vertaalde content, maar als gespecialiseerde marketplace voor Nederlandse gebruikers, makers en bedrijven. Dat zie je terug in de categorieen, de tone of voice, de listings en de nadruk op praktische use-cases die aansluiten op de dagelijkse praktijk van Nederlandse teams.",
      },
      {
        title: "Voor kopers en teams",
        content:
          "Voor bezoekers werkt PromptPaleis als ontdekkings- en aankoopomgeving. Kopers kunnen bladeren door de marketplace en filteren op type product, categorie en softwareplatform. Zo wordt het makkelijker om een passende listing te vinden voor marketing, automatisering, copywriting, research, code, design, UI/UX of AI-agents. Elke productpagina is bedoeld om de stap van interesse naar directe toepasbaarheid zo klein mogelijk te maken.",
      },
      {
        title: "Wat een listing bevat",
        content:
          "Een listing bestaat niet alleen uit een titel en prijs, maar geeft ook een korte en uitgebreide beschrijving, instructies voor gebruik, checkpoints van wat het product bevat, compatibele platformen en informatie over levering. Daardoor koop je niet alleen een idee, maar een digitaal product waarvan vooraf duidelijk is hoe het werkt en wat je ongeveer mag verwachten.",
      },
      {
        title: "Meer dan alleen prompts",
        content:
          "De inhoud op PromptPaleis bestaat niet alleen uit kale tekstprompts. Listings kunnen ook workflows, tutorials, voorbeeldoutputs, templates, documentatie, JSON-exports en automationbestanden bevatten. Daarmee positioneert het platform zich nadrukkelijk als marktplaats voor AI-kennisproducten: direct inzetbare digitale producten die taken versnellen, verbeteren of standaardiseren binnen bestaande werkprocessen.",
      },
    ],
  },
  {
    slug: "raad-van-bestuur",
    title: "Raad van Bestuur",
    shortDescription:
      "Maatwerk council-systeem waarin agents, managers en mensen samenwerken binnen duidelijke bevoegdheden en guardrails.",
    heroDescription:
      "Raad van Bestuur is geen standaardproduct, maar een council die we op maat voor je ontwerpen: van n8n-workflow tot complete webapplicatie met een interface die past bij jouw organisatie, team en manier van werken.",
    image: "/images/council-header.png",
    highlights: [
      "Maatwerk councils voor bestuur, teams, operations en klantenservice",
      "Kan in n8n, als webapplicatie of als combinatie van beide",
      "Human-in-the-loop, rollen, bevoegdheden en guardrails per agent",
      "Van visuele dashboards tot councils die volledig via chatberichten werken",
    ],
    gallery: [
      {
        src: "/images/council-header.png",
        alt: "Raad van Bestuur council-header met visuele interface",
      },
      {
        src: "/images/council1.png",
        alt: "Voorbeeld van een council voor een software agency",
      },
      {
        src: "/images/council2.png",
        alt: "Voorbeeld van een council voor een sapfabriek met live procesdata",
      },
      {
        src: "/images/council3.png",
        alt: "Voorbeeld van een email manager council met human in the loop",
      },
    ],
    sections: [
      {
        title: "Geen product, maar een council op maat",
        content:
          "De Raad van Bestuur maken we voor je op maat. Soms bouwen we zo'n council in n8n, soms programmeren we hem als webapplicatie met een frontend en UI die past bij jouw organisatie, merk of zelfs de sfeer van een game die jij graag speelt. Het uitgangspunt is steeds hetzelfde: we ontwerpen een systeem waarin AI-werknemers, managers en mensen helder samenwerken aan echte taken binnen jouw organisatie.",
      },
      {
        title: "We ontwerpen eerst het gedrag, dan pas de software",
        content:
          "Voor we bouwen, denken we uit welke handelingen de council, het team of het bestuur moet verrichten. Welke managers en werknemers zijn nodig? Welke acties mogen zij wel uitvoeren, en welke absoluut niet? Op basis daarvan richten we rollen, processen, rechten, feedbacklussen en escalaties in. Daardoor krijg je geen losse AI-demo, maar een werkend systeem dat zich gedraagt binnen afgesproken grenzen.",
      },
      {
        title: "Agents, managers en human in the loop",
        content:
          "Elke werknemer in de council meldt aan een manager. Die manager organiseert data, bewaakt voortgang en komt voor feedback terug bij jou als human. We kunnen een human-in-the-loop instellen waarbij jij alleen hoeft te controleren, goed te keuren, aan te scherpen of te stoppen. Je houdt dus grip op de uitkomst, terwijl een groot deel van het voorbereidende werk al door de council wordt uitgevoerd.",
      },
      {
        title: "Guardrails en bevoegdheden",
        content:
          "We zetten guardrails op zodat een agent alleen doet waar hij voor bevoegd is. Een agent mag bijvoorbeeld wel informatie verzamelen, classificeren, samenvatten, conceptantwoorden voorbereiden of workflows starten, maar niet zelfstandig kritieke acties uitvoeren zonder toestemming. Daarmee blijft automatisering bruikbaar en veilig, ook wanneer meerdere agents en databronnen tegelijk samenwerken.",
      },
      {
        title: "Visueel of juist volledig onzichtbaar",
        content:
          "Een council hoeft niet per se een visuele cockpit te zijn. We kunnen een rijk dashboard bouwen met statussen, wachtrijen, live data en managers in beeld, maar we kunnen ook councils inrichten die puur via berichten werken. In dat model reageer jij op een chatbericht, waarna een agent of werknemer in actie komt. Zo sluit de vorm van de council aan op jouw voorkeuren en operationele realiteit.",
      },
      {
        title: "Wat we concreet kunnen bouwen",
        content:
          "Denk aan een council voor een software agency, een operationele council voor een fabriek, een email manager voor meerdere mailboxen en kennisbanken, of een intern bestuurssysteem dat dossiers, acties en feedback bundelt. In elk scenario draait het om hetzelfde principe: de juiste digitale werknemers krijgen duidelijke verantwoordelijkheden, werken samen onder leiding van managers en leggen het beslissende moment terug bij de mens.",
      },
    ],
  },
];
