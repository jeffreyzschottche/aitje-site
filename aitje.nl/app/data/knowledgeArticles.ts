export type KnowledgeArticleSection = {
  title: string;
  content: string;
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  readTime: string;
  category: string;
  sections: KnowledgeArticleSection[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "wat-is-een-llm",
    title: "Wat is een LLM?",
    excerpt:
      "Een LLM is een type taalmodel dat tekst voorspelt, begrijpt en genereert op basis van grote hoeveelheden voorbeelden.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Basis",
    sections: [
      {
        title: "In het kort",
        content:
          "LLM staat voor Large Language Model. Het is een taalmodel dat getraind is op grote hoeveelheden tekst en daardoor taal kan voorspellen, samenvatten, herschrijven en beantwoorden.",
      },
      {
        title: "Wat is het verschil met een taalmodel?",
        content:
          "Taalmodel is de brede term. Een LLM is een groot taalmodel binnen die categorie. In de praktijk bedoelen mensen met LLM meestal moderne modellen die chats, samenvattingen, classificatie en assistent-taken ondersteunen.",
      },
      {
        title: "Wat moet je als organisatie weten?",
        content:
          "Een LLM is sterk in taal, maar niet automatisch betrouwbaar of veilig. Resultaten hangen af van modelkeuze, context, governance en waar het model draait (cloud of lokaal).",
      },
    ],
  },
  {
    slug: "wat-is-edge-ai",
    title: "Wat is edge AI?",
    excerpt:
      "Edge AI en lokale AI betekenen in de praktijk meestal hetzelfde: AI draait op een lokaal device of in je eigen omgeving in plaats van volledig in de cloud.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "In het kort",
        content:
          "Bij edge AI verwerk je data dicht bij de bron: op een apparaat, server of netwerk in je eigen omgeving. Daarom wordt edge AI vaak ook lokale AI genoemd.",
      },
      {
        title: "Waarom kiezen organisaties voor edge/lokale AI?",
        content:
          "Edge AI kan voordelen geven op het gebied van snelheid, privacy, continuiteit en kostenbeheersing. Zeker wanneer je werkt met gevoelige documenten of processen die moeten blijven draaien.",
      },
      {
        title: "Wat moet je in de praktijk regelen?",
        content:
          "Lokale AI vraagt om goede hardware, beheer en duidelijke keuzes over wat lokaal blijft en wat eventueel nog extern draait. Het is geen trucje, maar een infrastructuurkeuze met beheerlast en verantwoordelijkheid.",
      },
    ],
  },
  {
    slug: "wat-is-rag",
    title: "Wat is RAG?",
    excerpt:
      "RAG is een manier om een taalmodel eerst relevante informatie op te laten halen voordat het antwoord geeft.",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Techniek",
    sections: [
      {
        title: "Waar staat RAG voor?",
        content:
          "RAG staat voor Retrieval-Augmented Generation. Eerst wordt relevante informatie opgehaald uit documenten of een kennisbank, daarna gebruikt het model die informatie om een beter antwoord te geven.",
      },
      {
        title: "Waarom is dit nuttig?",
        content:
          "Een standaard LLM weet niet automatisch wat er in jouw documenten staat. Met RAG kan het model antwoorden op basis van je eigen beleid, handleidingen, procedures of interne kennis.",
      },
      {
        title: "Belangrijk in de praktijk",
        content:
          "RAG maakt AI niet magisch foutloos. Je hebt nog steeds goede brondata, logische documentstructuur en een degelijke zoeklaag nodig om betrouwbare antwoorden te krijgen.",
      },
    ],
  },
  {
    slug: "wat-is-context",
    title: "Wat is context in AI?",
    excerpt:
      "Context is alle informatie die je aan een model meegeeft zodat het beter begrijpt wat je bedoelt.",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min",
    category: "Basis",
    sections: [
      {
        title: "Wat valt onder context?",
        content:
          "Dat kunnen je vraag zijn, eerdere berichten, documenten, instructies, rollen, voorbeelden of bedrijfsinformatie. Alles wat het model helpt om gerichter te antwoorden is context.",
      },
      {
        title: "Waarom maakt context zoveel uit?",
        content:
          "Een model zonder context geeft algemene antwoorden. Met goede context wordt AI specifieker, bruikbaarder en beter afgestemd op jouw organisatie of taak.",
      },
      {
        title: "Praktisch verschil",
        content:
          "Vraag je alleen om een samenvatting, dan krijg je iets algemeens. Voeg je brontekst, doel en gewenste stijl toe, dan wordt het resultaat veel beter.",
      },
    ],
  },
  {
    slug: "wat-is-een-context-window",
    title: "Wat is een context window?",
    excerpt:
      "Het context window is de maximale hoeveelheid informatie die een model tegelijk kan meenemen in één interactie.",
    thumbnail:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Techniek",
    sections: [
      {
        title: "In gewone taal",
        content:
          "Je kunt het zien als het werkgeheugen van een model. Hoe groter het context window, hoe meer tekst, documenten of chatgeschiedenis het model in één keer kan meenemen.",
      },
      {
        title: "Waarom is dit relevant?",
        content:
          "Bij lange documenten, uitgebreide chats of kennisbanken loop je anders snel tegen grenzen aan. Dan moet je slimmer selecteren wat echt belangrijk is voor het antwoord.",
      },
      {
        title: "Niet alles hoeft erin",
        content:
          "Een groter context window is handig, maar niet altijd de oplossing. Goede selectie van relevante context is vaak belangrijker dan simpelweg meer tekst toevoegen.",
      },
    ],
  },
  {
    slug: "wat-is-een-ai-agent",
    title: "Wat is een AI agent?",
    excerpt:
      "Een AI agent is een systeem dat niet alleen antwoord geeft, maar ook stappen kan uitvoeren richting een doel.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Toepassing",
    sections: [
      {
        title: "Meer dan een chatbot",
        content:
          "Een agent kan informatie ophalen, keuzes maken, tools aanroepen en taken in een volgorde uitvoeren. Denk aan documenten zoeken, samenvatten, mail voorbereiden of workflows starten.",
      },
      {
        title: "Waarom willen bedrijven dit?",
        content:
          "Omdat agents helpen om terugkerende taken slimmer te organiseren. Ze kunnen medewerkers ondersteunen en processen versnellen, mits de kaders goed zijn ingericht.",
      },
      {
        title: "Waar zit het risico?",
        content:
          "Hoe meer autonomie je geeft, hoe belangrijker het wordt om rechten, logging, data-toegang en controlepunten goed te regelen. Een agent moet passen binnen je governance.",
      },
    ],
  },
  {
    slug: "wat-zijn-embeddings",
    title: "Wat zijn embeddings?",
    excerpt:
      "Embeddings zetten tekst om in vectoren zodat systemen betekenis en relevantie beter kunnen vergelijken.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    category: "Techniek",
    sections: [
      {
        title: "In het kort",
        content:
          "Embeddings zijn wiskundige representaties van tekst. Daardoor kan een systeem zien welke stukken inhoud inhoudelijk dicht bij elkaar liggen, ook als de woorden niet exact hetzelfde zijn.",
      },
      {
        title: "Waarom is dit belangrijk voor kennisbanken?",
        content:
          "Embeddings maken semantisch zoeken mogelijk. Dat betekent dat een vraag over beleid of procedures relevante stukken kan vinden, ook als de formulering anders is dan in het document.",
      },
      {
        title: "Wat moet je onthouden?",
        content:
          "Embeddings zijn een basislaag voor zoek- en RAG-systemen. Ze bepalen niet zelf het antwoord, maar helpen wel om de juiste informatie op tafel te krijgen.",
      },
    ],
  },
  {
    slug: "wat-is-prompt-engineering",
    title: "Wat is prompt engineering?",
    excerpt:
      "Prompt engineering is het slim formuleren van instructies zodat een model bruikbare output geeft.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Werkwijze",
    sections: [
      {
        title: "Waarom doet de formulering ertoe?",
        content:
          "Een model reageert sterk op hoe je een taak omschrijft. Duidelijke rolverdeling, doel, context, formaat en toon maken het verschil tussen een vaag antwoord en een bruikbaar resultaat.",
      },
      {
        title: "Wat hoort erbij?",
        content:
          "Goede prompts bevatten vaak context, randvoorwaarden, voorbeelden en een duidelijk gewenst outputformaat. Soms is minder tekst beter, soms juist meer richting.",
      },
      {
        title: "Wat is de zakelijke waarde?",
        content:
          "Prompt engineering helpt teams consistenter te werken, minder tijd te verliezen en AI-output beter aan te laten sluiten op interne standaarden en processen.",
      },
    ],
  },
  {
    slug: "wat-is-een-api",
    title: "Wat is een API?",
    excerpt:
      "Een API is een koppelvlak waarmee systemen veilig en gestructureerd gegevens of functies met elkaar uitwisselen.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Techniek",
    sections: [
      {
        title: "In het kort",
        content:
          "API staat voor Application Programming Interface. Het is een afgesproken manier waarop software met andere software praat zonder dat gebruikers alles handmatig hoeven over te zetten.",
      },
      {
        title: "Wat doet een API in de praktijk?",
        content:
          "Via een API kan een app bijvoorbeeld klantgegevens ophalen, documenten versturen, een AI-model aanroepen of informatie terugschrijven naar een ander systeem. Het is dus de verbindingslaag tussen verschillende tools en processen.",
      },
      {
        title: "Waarom is dit belangrijk voor organisaties?",
        content:
          "Met goede API's kun je systemen koppelen zonder alles opnieuw te bouwen. Dat maakt automatisering, integratie en schaalbaarheid een stuk praktischer, mits rechten, logging en foutafhandeling goed zijn geregeld.",
      },
    ],
  },
  {
    slug: "wat-is-een-webhook",
    title: "Wat is een webhook?",
    excerpt:
      "Een webhook is een automatisch seintje van het ene systeem naar het andere zodra er iets gebeurt.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321310764-8d4de8c6b0bd?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Techniek",
    sections: [
      {
        title: "In gewone taal",
        content:
          "Een webhook stuurt direct een bericht naar een ander systeem wanneer een gebeurtenis plaatsvindt, zoals een nieuwe aanvraag, betaling of upload. Je hoeft dus niet steeds zelf te controleren of er iets is veranderd.",
      },
      {
        title: "Wat is het verschil met een API?",
        content:
          "Bij een API vraag je meestal actief informatie op. Een webhook werkt andersom: een systeem meldt uit zichzelf dat er iets nieuws is gebeurd. Vaak gebruik je ze samen in dezelfde integratie.",
      },
      {
        title: "Waarom is dit handig?",
        content:
          "Webhooks maken processen sneller en efficienter omdat opvolging direct kan starten. Denk aan notificaties, automatische documentverwerking of het starten van een workflow zodra data binnenkomt.",
      },
    ],
  },
  {
    slug: "wat-is-een-backend",
    title: "Wat is een backend?",
    excerpt:
      "De backend is het deel van software waar logica, dataverwerking en koppelingen draaien buiten beeld van de gebruiker.",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Software",
    sections: [
      {
        title: "Wat bedoelen developers hiermee?",
        content:
          "De backend is de laag achter een app of website. Daar worden aanvragen verwerkt, rechten gecontroleerd, data opgehaald en businesslogica uitgevoerd.",
      },
      {
        title: "Wat hoort er vaak bij?",
        content:
          "Denk aan servers, API's, databases, authenticatie, logs en koppelingen met andere systemen. De gebruiker ziet die onderdelen meestal niet direct, maar ze bepalen wel hoe de software werkt.",
      },
      {
        title: "Waarom moet je dit begrip kennen?",
        content:
          "In gesprekken over softwareontwikkeling gaat backend vaak over betrouwbaarheid, veiligheid en integraties. Als je weet wat ermee bedoeld wordt, kun je projecten en offertes beter beoordelen.",
      },
    ],
  },
  {
    slug: "wat-is-een-frontend",
    title: "Wat is een frontend?",
    excerpt:
      "De frontend is het deel van software dat gebruikers zien en waarmee ze direct werken.",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min",
    category: "Software",
    sections: [
      {
        title: "In het kort",
        content:
          "De frontend is de interface van een website, dashboard of app. Daar ziet een gebruiker schermen, formulieren, knoppen, meldingen en navigatie.",
      },
      {
        title: "Hoe werkt frontend samen met backend?",
        content:
          "De frontend toont informatie en verzamelt invoer. De backend verwerkt die invoer, haalt gegevens op en stuurt resultaten terug. Samen vormen ze de gebruikerservaring en de technische werking erachter.",
      },
      {
        title: "Waarom is dit relevant?",
        content:
          "Een goede oplossing is niet alleen technisch slim, maar ook duidelijk en prettig in gebruik. Frontend gaat daarom over begrijpelijkheid, snelheid en hoe goed software aansluit op dagelijkse taken.",
      },
    ],
  },
  {
    slug: "wat-is-cloud",
    title: "Wat is cloud?",
    excerpt:
      "Met cloud bedoelen organisaties meestal software, opslag of rekenkracht die via externe servers beschikbaar wordt gemaakt.",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "Wat betekent het precies?",
        content:
          "Cloud betekent dat software of data niet alleen op je eigen apparaat of server draait, maar via een externe infrastructuur beschikbaar is. Die infrastructuur wordt meestal beheerd door een leverancier of hostingpartij.",
      },
      {
        title: "Waarom kiezen organisaties hiervoor?",
        content:
          "Cloud kan handig zijn voor schaalbaarheid, snelle uitrol en beheer op afstand. Tegelijk brengt het keuzes mee rond privacy, afhankelijkheid, locatie van data en terugkerende kosten.",
      },
      {
        title: "Cloud of lokaal?",
        content:
          "Dat is geen religieuze keuze. Sommige processen kunnen prima in de cloud, terwijl andere juist lokaal moeten blijven vanwege continuiteit, veiligheid of controle. Het gaat om de juiste balans per situatie.",
      },
    ],
  },
  {
    slug: "wat-is-een-workflow",
    title: "Wat is een workflow?",
    excerpt:
      "Een workflow is de vaste volgorde van stappen waarin werk, data of taken door een proces bewegen.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min",
    category: "Werkwijze",
    sections: [
      {
        title: "In het kort",
        content:
          "Een workflow beschrijft welke stappen elkaar opvolgen om een taak af te ronden. Denk aan invoer, controle, verwerking, goedkeuring en terugkoppeling.",
      },
      {
        title: "Waarom hoor je dit zo vaak bij software?",
        content:
          "Software ondersteunt of automatiseert vaak bestaande workflows. Hoe duidelijker een workflow is, hoe beter je kunt bepalen waar AI, koppelingen of automatisering echt waarde toevoegen.",
      },
      {
        title: "Wat levert een goede workflow op?",
        content:
          "Minder handmatig werk, minder fouten en meer voorspelbaarheid. Maar alleen als rollen, uitzonderingen en controlepunten ook goed zijn meegenomen in het ontwerp.",
      },
    ],
  },
];
