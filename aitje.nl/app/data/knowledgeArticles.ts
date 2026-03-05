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
];
