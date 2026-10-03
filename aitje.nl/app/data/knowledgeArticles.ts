import { knowledgeArticleImages } from "./knowledgeArticleImages";
import type { KnowledgeCategory } from "../content/types";
import { knowledgeApplications, type KnowledgeApplication } from "./knowledgeApplications";
import { knowledgePhotography } from "./knowledgePhotography";

export type KnowledgeArticleVisual = {
  icon: string;
  left: string;
  core: string;
  right: string;
  label: string;
};

export type KnowledgeArticleSource = { title: string; url: string };

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
  topic?: KnowledgeCategory;
  lastUpdated?: string;
  sources?: KnowledgeArticleSource[];
  visual?: KnowledgeArticleVisual;
  application?: KnowledgeApplication;
  photoSource?: string;
  sections: KnowledgeArticleSection[];
  links?: {
    label: string;
    slug: string;
  }[];
};

// Additional knowledge articles, kept with the existing collection.
// all consume the same published records through knowledgeArticles.ts.
type Seed = {
  slug: string;
  title: string;
  excerpt: string;
  topic: KnowledgeCategory;
  image: keyof typeof knowledgeArticleImages;
  visual: KnowledgeArticleVisual;
  sections: [title: string, content: string][];
  related: string[];
  sources: KnowledgeArticleSource[];
};

const source = (title: string, url: string): KnowledgeArticleSource => ({ title, url });
const visual = (icon: string, left: string, core: string, right: string, label: string): KnowledgeArticleVisual => ({ icon, left, core, right, label });
const sources = {
  frontier: source("NCSC — Wat wordt bedoeld met frontier AI?", "https://www.ncsc.gov.uk/section/advice-guidance/all-topics/frontier-ai"),
  open: source("Open Source Initiative — Open Source AI Definition 1.0", "https://opensource.org/ai/open-source-ai-definition"),
  tokenizer: source("Hugging Face — Tokenizers en het opdelen van tekst", "https://huggingface.co/docs/transformers/en/tokenizer_summary"),
  routing: source("RouteLLM — Onderzoek naar modelrouting en de afweging tussen kwaliteit en kosten", "https://arxiv.org/abs/2406.18665"),
  quantization: source("Hugging Face — Quantization overview", "https://huggingface.co/docs/transformers/en/quantization/overview"),
  tuning: source("Hugging Face — Fine-tuning", "https://huggingface.co/docs/transformers/en/training"),
  tools: source("Hugging Face — Tool use en function calling", "https://huggingface.co/docs/transformers/en/chat_extras"),
  mcp: source("Model Context Protocol — Architectuur en onderdelen", "https://modelcontextprotocol.io/docs/learn/architecture"),
  hallucinations: source("Anthropic — Hallucinaties verminderen", "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"),
  sovereignty: source("Rijksoverheid — Visie digitale autonomie en soevereiniteit", "https://www.rijksoverheid.nl/documenten/2025/12/18/bijlage-2-visie-digitale-autonomie-en-soevereiniteit-van-de-overheid"),
  refusal: source("Arditi e.a. — Refusal in Language Models Is Mediated by a Single Direction", "https://arxiv.org/abs/2406.11717"),
  weights: source("Google Machine Learning Crash Course — Gewichten in een model", "https://developers.google.com/machine-learning/crash-course/linear-regression"),
  cache: source("Hugging Face — KV-cache en cachestrategieën", "https://huggingface.co/docs/transformers/en/kv_cache"),
  vector: source("Google Machine Learning Crash Course — Embedding space", "https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space"),
  factory: source("NVIDIA — AI factories", "https://www.nvidia.com/en-us/solutions/ai-factories/"),
  infrastructure: source("NVIDIA — Building AI Factories for the Enterprise", "https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/building-ai-factories-for-the-enterprise.html"),
  inference: source("Hugging Face — Tekstgeneratie met LLM's", "https://huggingface.co/docs/transformers/en/llm_tutorial"),
  vision: source("Hugging Face — Multimodale modellen met tekst en afbeeldingen", "https://huggingface.co/docs/transformers/v4.52.3/en/chat_templating_multimodal"),
  coding: source("Mistral — Coding met een model en ontwikkeltools", "https://docs.mistral.ai/vibe/code/overview"),
  financing: source("SEC — Financiering en investeerders bij private bedrijven", "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/private-companies-sec"),
  credits: source("AWS — Promotionele cloudcredits voor startups", "https://aws.amazon.com/startups/credits?lang=en-US"),
  belowCost: source("FTC — Predatory or Below-Cost Pricing (Amerikaanse context)", "https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/single-firm-conduct/predatory-or-below-cost-pricing"),
  competition: source("Europese Commissie — Artikel 102 en misbruik van een dominante positie", "https://competition-policy.ec.europa.eu/antitrust-and-cartels/legislation/application-article-102-tfeu_en"),
  switching: source("CMA — Onderzoek naar concurrentie en overstappen bij clouddiensten", "https://www.gov.uk/cma-cases/cloud-services-market-investigation"),
};

const seeds: Seed[] = [
  {
    "slug": "wat-is-generatieve-ai",
    "title": "Wat is generatieve AI?",
    "excerpt": "Generatieve AI maakt nieuwe inhoud op basis van een opdracht: tekst, afbeeldingen, muziek, video, 3D of code. Wat gebeurt er tijdens generatie, en hoe maak je van een interessant resultaat iets bruikbaars voor je werk?",
    "topic": "AI-basis",
    "image": "wat-is-een-llm",
    "visual": {
      "icon": "sparkles",
      "left": "Opdracht en context",
      "core": "Generatief model",
      "right": "Nieuwe inhoud",
      "label": "Van een opdracht naar een nieuwe uitwerking"
    },
    "sections": [
      [
        "In het kort",
        "Generatieve AI is de verzamelnaam voor modellen die nieuwe inhoud kunnen maken. Je geeft bijvoorbeeld een vraag, beschrijving, afbeelding of geluidsfragment mee en het model genereert een uitwerking. Dat kan een concepttekst zijn, maar ook een illustratie, gesproken uitleg of stukje software. Generatief verwijst naar het maken van uitvoer; het betekent niet dat die uitvoer automatisch juist, origineel of geschikt voor publicatie is."
      ],
      [
        "Hoe kan een model iets nieuws maken?",
        "Tijdens training leert een model patronen uit voorbeelden. Die kennis wordt vastgelegd in modelparameters. Tijdens gebruik, ook inference genoemd, wordt een opdracht verwerkt met die geleerde patronen. Een taalmodel bouwt doorgaans een reeks tokens op; een beeldmodel kan via opeenvolgende stappen een afbeelding vormen. Je vraagt dus meestal geen opgeslagen antwoord op. Het model berekent een nieuwe uitwerking binnen de mogelijkheden van zijn training en meegegeven context."
      ],
      [
        "Genereren is iets anders dan herkennen",
        "Een systeem dat een document als factuur herkent, voert een classificatietaak uit. Een systeem dat een begeleidende e-mail bij die factuur schrijft, genereert tekst. Die taken kunnen in dezelfde workflow voorkomen. Ook kan een model zowel beeld interpreteren als tekst schrijven. Het helpt om precies te benoemen wat je nodig hebt: herkennen, opzoeken, berekenen of iets nieuws maken. Niet elke stap vraagt om een generatief model."
      ],
      [
        "Een praktisch voorbeeld",
        "Een team wil interne werkinstructies toegankelijker maken. Software haalt eerst de actuele instructie op. Een taalmodel maakt daarna een korte uitleg voor een nieuwe medewerker. Een ander model kan eventueel een ondersteunend beeld of gesproken versie maken. De oorspronkelijke instructie blijft het uitgangspunt. Een medewerker controleert de uitleg voordat deze wordt verspreid. Zo ondersteunt generatie bestaande kennis zonder de inhoudelijke verantwoordelijkheid over te nemen."
      ],
      [
        "Wat bepaalt een bruikbaar resultaat?",
        "De opdracht, beschikbare informatie, modelkeuze en gewenste uitvoervorm werken samen. Een overtuigend voorbeeld zegt weinig over alle andere opdrachten. Test daarom ook ontbrekende informatie, afwijkende formuleringen en ingewikkelde gevallen. Bij tekst telt inhoudelijke juistheid; bij beeld bijvoorbeeld compositie; bij code ook werking. Een bruikbaar resultaat voldoet aan afgesproken eisen en past in het proces waarin iemand het beoordeelt of gebruikt."
      ],
      [
        "Waar begin je als organisatie?",
        "Kies één terugkerende taak en beschrijf welke invoer beschikbaar is, wat het resultaat moet zijn en wie het controleert. Vergelijk de tijd en kosten van de volledige taak, inclusief nabewerking. Bepaal daarna of lokale verwerking, een externe API of een combinatie past. Generatieve AI wordt vooral nuttig wanneer de nieuwe inhoud op het juiste moment en in de juiste vorm aansluit op je dagelijkse werk."
      ]
    ],
    "related": [
      "wat-is-tekstgeneratie",
      "wat-is-image-generation",
      "hoe-werkt-generatie-met-diffusion-modellen"
    ],
    "sources": [
      {
        "title": "IBM — Generative AI",
        "url": "https://www.ibm.com/think/topics/generative-ai"
      },
      {
        "title": "Hugging Face — Tekstgeneratie met LLM’s",
        "url": "https://huggingface.co/docs/transformers/en/llm_tutorial"
      },
      {
        "title": "Hugging Face — Onderdelen van een diffusion-pipeline",
        "url": "https://huggingface.co/docs/diffusers/en/quicktour"
      }
    ]
  },
  {
    "slug": "wat-is-tekstgeneratie",
    "title": "Wat is tekstgeneratie met AI?",
    "excerpt": "Tekstgeneratie is het maken van tekst met een taalmodel. Van conceptmail en samenvatting tot een gestructureerd antwoord: de opdracht en beschikbare informatie bepalen wat eruit komt.",
    "topic": "AI-basis",
    "image": "wat-is-een-llm",
    "visual": {
      "icon": "message",
      "left": "Opdracht en informatie",
      "core": "Volgende tokens",
      "right": "Tekstvoorstel",
      "label": "Van context naar een bruikbare tekst"
    },
    "sections": [
      [
        "In het kort",
        "Bij tekstgeneratie maakt een taalmodel tekst op basis van invoer. Dat kan een nieuwe tekst zijn of een bewerking van bestaande informatie: korter, duidelijker, in een andere taal of in een afgesproken structuur. De uitkomst is een voorstel dat het model samenstelt. Het is geen automatische bevestiging dat namen, cijfers, gebeurtenissen en conclusies kloppen. Welke controle nodig is, hangt af van het gebruik."
      ],
      [
        "Hoe bouwt een taalmodel tekst op?",
        "De invoer wordt omgezet in tokens: kleine onderdelen van tekst. Het model berekent welke vervolgtokens passen bij de opdracht en voorgaande context. Zo ontstaat stap voor stap een antwoord. Instellingen kunnen de selectie en maximale lengte beïnvloeden. Dat helpt bij het sturen van de uitvoer, maar een andere instelling maakt het model niet vanzelf beter geïnformeerd. Ontbrekende feiten moeten uit betrouwbare gegevens komen, niet uit een creatiever antwoord."
      ],
      [
        "Welke informatie geef je mee?",
        "Een goede opdracht beschrijft doel, doelgroep, toon en gewenste vorm. Voor bedrijfsinformatie zijn ook de juiste bronnen nodig. Denk aan een productlijst, procedure of relevante passage uit een document. Met een zoekstap kan die informatie gericht worden opgehaald. Een volledig archief meesturen is vaak onnodig. Selecteer wat de taak nodig heeft en maak duidelijk welke informatie het model niet mag aanvullen wanneer die ontbreekt."
      ],
      [
        "Een praktisch voorbeeld",
        "Een medewerker wil een conceptantwoord op een klantvraag. Software haalt de betreffende bestelling en leveringsinformatie op. Het model krijgt alleen die gegevens en schrijft een korte e-mail in de gewenste toon. Een medewerker controleert het voorstel en verstuurt het. Vaste gegevens, zoals ordernummer en bedrag, kunnen rechtstreeks uit het systeem komen. Zo hoeft het taalmodel geen feiten te bedenken die al in de administratie staan."
      ],
      [
        "Van losse tekst naar een vaste workflow",
        "Tekstgeneratie kan onderdeel zijn van een grotere toepassing. Je kunt bijvoorbeeld aparte stappen gebruiken voor samenvatten, classificeren en een antwoord opstellen. Een gestructureerde uitvoer maakt verdere verwerking eenvoudiger, maar software moet die structuur nog controleren. Ontbrekende velden, ongeldige waarden en extra tekst kunnen voorkomen. Houd daarom het verschil zichtbaar tussen een gegenereerd concept en een definitief goedgekeurde handeling."
      ],
      [
        "Hoe beoordeel je kwaliteit en kosten?",
        "Test met echte soorten vragen en controleer feiten, volledigheid, toon en correctiewerk. Neem ook de lengte van invoer en uitvoer mee: veel context of meerdere pogingen kunnen extra rekenwerk en API-kosten veroorzaken. Een kleiner model met gerichte informatie kan voor een afgebakende taak voldoende zijn. Het doel is een bruikbare tekst tegen passende kosten, niet het langste antwoord of de grootste hoeveelheid tokens."
      ]
    ],
    "related": [
      "wat-is-een-llm",
      "wat-is-rag",
      "wat-is-inference"
    ],
    "sources": [
      {
        "title": "Hugging Face — Tekstgeneratie met LLM’s",
        "url": "https://huggingface.co/docs/transformers/en/llm_tutorial"
      },
      {
        "title": "IBM — Generative AI",
        "url": "https://www.ibm.com/think/topics/generative-ai"
      }
    ]
  },
  {
    "slug": "wat-is-image-generation",
    "title": "Wat is image generation?",
    "excerpt": "Image generation, of beeldgeneratie, laat AI nieuwe afbeeldingen maken of bestaande beelden aanpassen. Een beschrijving of referentie geeft richting; het model bouwt de visuele uitwerking.",
    "topic": "AI-basis",
    "image": "wat-is-een-frontend",
    "visual": {
      "icon": "image",
      "left": "Beschrijving of referentie",
      "core": "Beeldmodel",
      "right": "Nieuwe afbeelding",
      "label": "Een visueel idee laten uitwerken"
    },
    "sections": [
      [
        "In het kort",
        "Image generation betekent dat een AI-model een afbeelding maakt. De invoer kan een tekstbeschrijving zijn, een referentiebeeld of een combinatie. Je kunt een nieuw beeld laten opbouwen, varianten onderzoeken of een onderdeel van een bestaande afbeelding aanpassen. Het resultaat is een visuele interpretatie van de opdracht. Het model levert daarmee geen bewijs dat een afgebeelde persoon, gebeurtenis, locatie of product werkelijk zo bestaat."
      ],
      [
        "Welke soorten beeldgeneratie zijn er?",
        "Bij text-to-image vormt tekst het vertrekpunt. Bij image-to-image stuurt een bestaand beeld de nieuwe uitwerking. Inpainting richt zich op een geselecteerd gebied, terwijl uitbreiden van een beeld extra ruimte rond de oorspronkelijke compositie kan maken. Welke functies beschikbaar zijn, hangt af van het model en de software. Sommige toepassingen combineren meerdere modellen of bewerkingsstappen in plaats van alles met één opdracht te doen."
      ],
      [
        "Wat maakt een beschrijving bruikbaar?",
        "Beschrijf onderwerp, omgeving, standpunt, licht en gewenste compositie. Geef ook aan waar ruimte voor tekst moet blijven of welke details behouden moeten worden. Een referentiebeeld kan helpen bij vorm en verhoudingen. Een opdracht met veel tegenstrijdige eisen maakt controle moeilijker. Werk liever met een duidelijke basis en gerichte aanpassingen. Een seed kan varianten vergelijkbaar maken binnen dezelfde omgeving, maar is geen garantie voor identieke uitvoer op andere systemen."
      ],
      [
        "Een praktisch voorbeeld",
        "Een organisatie zoekt een illustratie voor een interne presentatie over onderhoud. Eerst wordt vastgelegd welke machine herkenbaar moet zijn en welke details essentieel zijn. Het model maakt enkele concepten, waarna een medewerker de beste compositie kiest en controleert. Voor een afbeelding die een echt product nauwkeurig moet tonen, kan fotografie of een gecontroleerde productrender geschikter zijn. Het gewenste gebruik bepaalt welke aanpak overtuigend én bruikbaar is."
      ],
      [
        "Genereren is niet hetzelfde als beeld begrijpen",
        "Een vision-model interpreteert bijvoorbeeld een foto of documentbeeld. Een generatief beeldmodel maakt of bewerkt een afbeelding. Die functies kunnen samenwerken, maar zijn verschillende taken. Een systeem kan eerst een foto analyseren en daarna een bewerkingsopdracht voorbereiden. Het begrijpen van een beeld betekent niet automatisch dat het systeem dat beeld ook nauwkeurig kan reconstrueren. Beoordeel beide stappen afzonderlijk als je ze in een workflow combineert."
      ],
      [
        "Van concept naar bruikbaar beeld",
        "Controleer details, perspectief, tekst in het beeld en samenhang met andere afbeeldingen. Kies de benodigde resolutie op basis van het uiteindelijke formaat; een groter bestand maakt fouten niet vanzelf beter. Leg de gekozen instellingen en versies vast wanneer je een consistente beeldreeks wilt. Neem ook het toegestane gebruik van model en referentiemateriaal mee. Generatie, selectie en nabewerking vormen samen het productieproces."
      ]
    ],
    "related": [
      "hoe-werkt-generatie-met-diffusion-modellen",
      "wat-is-een-vision-model",
      "wat-is-3d-generatie"
    ],
    "sources": [
      {
        "title": "Hugging Face — Text-to-image",
        "url": "https://huggingface.co/docs/diffusers/en/using-diffusers/conditional_image_generation"
      },
      {
        "title": "Hugging Face — Onderdelen van een diffusion-pipeline",
        "url": "https://huggingface.co/docs/diffusers/en/quicktour"
      },
      {
        "title": "Hugging Face — Reproduceerbare generatie",
        "url": "https://huggingface.co/docs/diffusers/en/using-diffusers/reusing_seeds"
      }
    ]
  },
  {
    "slug": "wat-is-music-generation",
    "title": "Wat is music generation?",
    "excerpt": "Music generation is muziek maken met AI op basis van bijvoorbeeld stijl, sfeer, instrumenten of een geluidsfragment. Het model genereert een muzikale uitwerking die je vervolgens beluistert en bewerkt.",
    "topic": "AI-basis",
    "image": "wat-is-een-llm",
    "visual": {
      "icon": "music",
      "left": "Sfeer en muziekopdracht",
      "core": "Muziekmodel",
      "right": "Muziekfragment",
      "label": "Van een beschrijving naar klank en ritme"
    },
    "sections": [
      [
        "In het kort",
        "Music generation betekent dat een AI-model nieuwe muzikale uitvoer maakt. Je beschrijft bijvoorbeeld een rustig instrumentaal fragment met piano en een langzaam tempo. Afhankelijk van het model kan ook bestaande audio als richting dienen. Het resultaat kan een kort fragment, begeleiding of uitgebreidere compositie zijn. Een muziekmodel doet daarmee iets anders dan een afspeellijst samenstellen: het produceert geluid of een muzikale representatie."
      ],
      [
        "Hoe wordt muziek gegenereerd?",
        "Modellen leren patronen in ritme, klank en muzikale samenhang. Sommige systemen voorspellen compacte audio-codes die daarna worden omgezet naar geluid. Andere generatieve technieken werken met opeenvolgende bewerkingsstappen. Het is niet altijd dezelfde methode als bij tekstgeneratie. Ook verschillen de uitkomsten: het ene systeem geeft een audiobestand, terwijl een andere toepassing bijvoorbeeld noten of afzonderlijk bewerkbare onderdelen kan leveren. Controleer welke uitvoer je werkelijk krijgt."
      ],
      [
        "Wat zet je in een muziekopdracht?",
        "Beschrijf het doel, de sfeer, instrumentatie, gewenste lengte en hoe aanwezig de muziek mag zijn. Achtergrondmuziek bij een gesproken uitleg vraagt iets anders dan een herkenbare opening. Woorden zoals rustig of energiek geven richting, maar bepalen geen exacte compositie. Luister daarom meerdere varianten en beoordeel het fragment in zijn uiteindelijke context. Een losse demo kan prettig klinken en toch te druk zijn onder een stem."
      ],
      [
        "Een praktisch voorbeeld",
        "Een team maakt een korte uitlegvideo en zoekt een bescheiden instrumentale achtergrond. Het laat verschillende fragmenten uitwerken, kiest een passende versie en monteert die onder de gesproken tekst. Daarbij wordt gelet op volume, overgang en lengte. Het genereren is één stap; de uiteindelijke mix en montage blijven belangrijk. Voor een vaste herkenningsmelodie kan meer controle over melodie en arrangement nodig zijn dan een algemene muziekopdracht biedt."
      ],
      [
        "Waar zit de kwaliteitscontrole?",
        "Let op abrupte overgangen, herhaling, ongewenste geluiden en de aansluiting tussen begin en einde. Bij langere uitvoer moet ook de muzikale samenhang blijven werken. Zang, afzonderlijke instrumentsporen en nauwkeurige tempo-instellingen zijn geen vanzelfsprekende mogelijkheden van ieder model. Beoordeel wat je nodig hebt voordat je de workflow kiest. Een fragment dat direct mooi klinkt, is niet automatisch eenvoudig verder te bewerken in je muzieksoftware."
      ],
      [
        "Wat betekent dit voor een workflow?",
        "Leg vast hoe opdracht, selectie, montage en opslag verlopen. Bewaar de gekozen variant met de gebruikte instellingen, zodat een team weet waar die bij hoort. Vergelijk kosten per bruikbaar fragment in plaats van alleen per generatiepoging. Controleer ook welke gebruiksvoorwaarden gelden voor het model en de invoer. Een lokaal beschikbaar model kan een optie zijn, maar vraagt passende rekenkracht en biedt niet vanzelf dezelfde functies als een externe muziekdienst."
      ]
    ],
    "related": [
      "wat-is-spraak-en-audiogeneratie",
      "wat-is-videogeneratie",
      "ai-generatie-lokaal-of-via-een-api"
    ],
    "sources": [
      {
        "title": "Hugging Face — MusicGen",
        "url": "https://huggingface.co/docs/transformers/en/model_doc/musicgen"
      },
      {
        "title": "IBM — Generative AI",
        "url": "https://www.ibm.com/think/topics/generative-ai"
      }
    ]
  },
  {
    "slug": "wat-is-spraak-en-audiogeneratie",
    "title": "Wat is spraak- en audiogeneratie?",
    "excerpt": "Met AI kun je tekst omzetten naar spraak en andere geluiden laten maken. Hoe verschillen text-to-speech, geluidseffecten en transcriptie, en waar passen ze in een praktische workflow?",
    "topic": "AI-basis",
    "image": "wat-is-een-llm",
    "visual": {
      "icon": "mic",
      "left": "Tekst of geluidsopdracht",
      "core": "Audiomodel",
      "right": "Spraak of geluid",
      "label": "Informatie hoorbaar maken"
    },
    "sections": [
      [
        "In het kort",
        "Audiogeneratie is het maken van geluid met een model. Spraakgeneratie is daar een specifieke vorm van: geschreven tekst wordt bijvoorbeeld een gesproken uitleg. Andere toepassingen maken geluidseffecten of een geluidsomgeving. Muziek valt ook onder generatieve audio, maar heeft eigen eisen aan ritme en compositie. De gekozen taak bepaalt welk model en welke uitvoer bruikbaar zijn; één audiomodel hoeft niet al die mogelijkheden te ondersteunen."
      ],
      [
        "Wat is text-to-speech?",
        "Text-to-speech, vaak afgekort tot TTS, zet tekst om naar gesproken audio. Een model of toepassing kan instellingen bieden voor taal, stem, snelheid of spreekstijl. Dat verschilt per systeem. De tekst blijft belangrijk: afkortingen, cijfers en merknamen kunnen anders worden uitgesproken dan verwacht. Een tekst die goed leesbaar is op papier, klinkt ook niet altijd natuurlijk wanneer hij letterlijk wordt voorgelezen."
      ],
      [
        "Wat is het verschil met transcriptie?",
        "Bij spraakherkenning wordt bestaand geluid omgezet naar tekst. Bij spraakgeneratie loopt de richting andersom. Je kunt beide combineren: een ingesproken vraag wordt getranscribeerd, een taalmodel bereidt een antwoord voor en een TTS-model leest dat antwoord uit. Dat zijn afzonderlijke stappen met eigen foutmogelijkheden. Een onjuiste transcriptie kan bijvoorbeeld een fout antwoord veroorzaken, ook als de uiteindelijke stem heel natuurlijk klinkt."
      ],
      [
        "Een praktisch voorbeeld",
        "Een organisatie wil een werkinstructie ook als gesproken uitleg aanbieden. Eerst wordt de tekst herschreven voor luisteren: kortere zinnen en duidelijk uitgesproken getallen. Daarna wordt audio gemaakt en beluisterd door iemand die de procedure kent. Pas na controle wordt het bestand bij de instructie geplaatst. Wijzigt de procedure, dan moet ook de gesproken versie worden bijgewerkt. Zo blijven tekst en audio bij dezelfde actuele informatie horen."
      ],
      [
        "Waar let je op bij stem en geluid?",
        "Beoordeel verstaanbaarheid, uitspraak, pauzes en het volume van de uitvoer. Bij meerdere talen kan kwaliteit per taal verschillen. Een gekozen stem is bovendien iets anders dan een nagebootste stem van een herkenbare persoon. Gebruik van zo’n stem vraagt duidelijke afspraken en toestemming van de betrokkene. Voor geluidseffecten telt vooral of het geluid past bij de gebeurtenis en voldoende beheersbaar blijft in de montage."
      ],
      [
        "Hoe richt je de verwerking in?",
        "Bepaal welke tekst naar het model gaat, waar audiobestanden worden opgeslagen en hoe hergeneratie werkt na een wijziging. Denk ook aan uitvoerlengte, wachttijd en het afspelen in je toepassing. Kosten kunnen bijvoorbeeld samenhangen met tekens, audiolengte of rekenwerk en hoeven niet dezelfde tokenstructuur te volgen als een tekst-API. Een goede workflow bewaart de inhoudelijke bron en maakt duidelijk welke versie van de audio daarbij hoort."
      ]
    ],
    "related": [
      "wat-is-tekstgeneratie",
      "wat-is-music-generation",
      "wat-is-een-workflow"
    ],
    "sources": [
      {
        "title": "Hugging Face — Text-to-speech",
        "url": "https://huggingface.co/docs/transformers/en/tasks/text-to-speech"
      },
      {
        "title": "Hugging Face — MusicGen",
        "url": "https://huggingface.co/docs/transformers/en/model_doc/musicgen"
      },
      {
        "title": "IBM — Generative AI",
        "url": "https://www.ibm.com/think/topics/generative-ai"
      }
    ]
  },
  {
    "slug": "wat-is-videogeneratie",
    "title": "Wat is videogeneratie met AI?",
    "excerpt": "Videogeneratie maakt bewegend beeld vanuit een beschrijving, afbeelding of bestaand fragment. Het model moet daarbij niet alleen mooie beelden maken, maar ook samenhang tussen opeenvolgende frames behouden.",
    "topic": "AI-basis",
    "image": "wat-is-een-frontend",
    "visual": {
      "icon": "video",
      "left": "Beschrijving of startbeeld",
      "core": "Videomodel",
      "right": "Bewegend fragment",
      "label": "Een visueel idee in beweging brengen"
    },
    "sections": [
      [
        "In het kort",
        "Bij videogeneratie berekent een AI-model een reeks beelden die samen beweging vormen. De opdracht kan tekst zijn of een afbeelding die als vertrekpunt dient. Sommige toepassingen bewerken ook bestaande video. Een gegenereerd fragment kan bruikbaar zijn als concept, ondersteunend beeld of onderdeel van een montage. Het is geen registratie van een echte gebeurtenis, zelfs wanneer de uitkomst op een gewone opname lijkt."
      ],
      [
        "Van tekst of afbeelding naar beweging",
        "Text-to-video laat een beschrijving de inhoud sturen. Bij image-to-video geeft een startbeeld al informatie over onderwerp en compositie. De opdracht kan vervolgens richting geven aan de beweging of camera. Welke controle beschikbaar is, verschilt per model. Een beschreven panbeweging, exact aantal handelingen of vaste tijdsduur wordt niet altijd nauwkeurig uitgevoerd. Gebruik de mogelijkheden van het gekozen systeem als uitgangspunt voor je shotplanning."
      ],
      [
        "Waarom is video ingewikkelder dan een afbeelding?",
        "Opeenvolgende frames moeten bij elkaar passen. Een persoon, product of achtergrond mag niet onbedoeld veranderen zodra iets beweegt. Ook richting, snelheid en onderlinge verhoudingen moeten geloofwaardig blijven. Daarnaast groeit de hoeveelheid te verwerken informatie met lengte en resolutie. Een mooi stilstaand frame zegt daarom weinig over de volledige video. Beoordeel altijd het fragment in beweging en kijk ook naar begin, overgangen en einde."
      ],
      [
        "Een praktisch voorbeeld",
        "Een team maakt een uitlegvideo over een nieuw werkproces. De kern bestaat uit echte schermopnamen van de toepassing. Voor een korte overgang wordt een abstract bewegend beeld gegenereerd. Het team kiest een passend fragment en verwerkt dat in de montage. Zo ondersteunt generatie het verhaal zonder de echte werking van de software te vervangen door verzonnen schermen. De keuze tussen opname, animatie en generatie volgt uit wat je wilt laten zien."
      ],
      [
        "Wat hoort bij het productieproces?",
        "Videogeneratie levert niet automatisch een complete gemonteerde film. Ondertiteling, gesproken uitleg, geluid, muziek en het samenvoegen van shots kunnen aparte stappen zijn. Sommige modellen combineren beeld en audio, andere niet. Leg daarom vast welke bestanden je ontvangt en hoe ze worden nabewerkt. Controleer ook tekst, logo’s en productdetails wanneer die belangrijk zijn. Bij meerdere shots vraagt herkenbare continuïteit vaak aanvullende selectie en bewerking."
      ],
      [
        "Hoe vergelijk je snelheid en kosten?",
        "Vergelijk bruikbare seconden video, de benodigde pogingen en het nabewerkingswerk. Een korte generatie met een lage resolutie kan vooral dienen als proef, terwijl het eindformaat zwaarder rekent. Lokaal draaien vraagt passende hardware; een externe dienst kan capaciteit leveren met eigen limieten en tarieven. Kies eerst welke kwaliteit en controle nodig zijn. Dan kun je bepalen of genereren voor dit onderdeel echt een passende productiestap is."
      ]
    ],
    "related": [
      "wat-is-image-generation",
      "wat-is-music-generation",
      "ai-generatie-lokaal-of-via-een-api"
    ],
    "sources": [
      {
        "title": "Hugging Face — Video generation",
        "url": "https://huggingface.co/docs/diffusers/en/using-diffusers/text-img2vid"
      },
      {
        "title": "Hugging Face — Onderdelen van een diffusion-pipeline",
        "url": "https://huggingface.co/docs/diffusers/en/quicktour"
      },
      {
        "title": "Hugging Face — Geheugengebruik van generatieve modellen",
        "url": "https://huggingface.co/docs/diffusers/en/optimization/memory"
      }
    ]
  },
  {
    "slug": "wat-is-3d-generatie",
    "title": "Wat is 3D-generatie met AI?",
    "excerpt": "3D-generatie maakt een digitale ruimtelijke uitwerking vanuit tekst of afbeeldingen. Van conceptobject tot model met textuur: de uitvoer is pas bruikbaar wanneer die aansluit op je ontwerpsoftware en toepassing.",
    "topic": "AI-basis",
    "image": "wat-is-een-frontend",
    "visual": {
      "icon": "box",
      "left": "Tekst of referentiebeelden",
      "core": "3D-modelgeneratie",
      "right": "Ruimtelijk object",
      "label": "Van een visueel idee naar een digitaal object"
    },
    "sections": [
      [
        "In het kort",
        "Bij 3D-generatie maakt AI een digitale voorstelling van een ruimtelijk object of een scène. Tekst of één of meer afbeeldingen kunnen als invoer dienen. Afhankelijk van het systeem ontstaat bijvoorbeeld een mesh met textuur of een andere ruimtelijke representatie. Dat is iets anders dan een gewone afbeelding die op 3D lijkt. Een bruikbaar 3D-bestand bevat informatie waarmee je het object vanuit verschillende richtingen kunt bekijken of verder verwerken."
      ],
      [
        "Wat zijn geometrie en textuur?",
        "Geometrie beschrijft de vorm van een object. Een mesh gebruikt daarvoor punten, verbindingen en vlakken. Een textuur geeft informatie over het uiterlijk van oppervlakken, zoals kleur en details. Materiaaleigenschappen kunnen daarnaast bepalen hoe licht wordt weergegeven. Een overtuigende textuur kan een zwakke vorm verbergen in één aanzicht. Bekijk daarom ook de geometrie en de achterkant van het object, zeker wanneer het model verder wordt aangepast."
      ],
      [
        "Wat kun je uit een afbeelding afleiden?",
        "Een foto laat maar een deel van een object zien. Niet-zichtbare kanten moet een generatief systeem invullen op basis van geleerde patronen. De uitkomst kan plausibel zijn zonder exact overeen te komen met het echte object. Meerdere bruikbare aanzichten kunnen meer richting geven, maar sluiten ontbrekende of onjuiste details niet uit. Voor een product waarvan afmetingen en constructie belangrijk zijn, blijft gecontroleerde ontwerpinformatie nodig."
      ],
      [
        "Een praktisch voorbeeld",
        "Een ontwerper wil verschillende vormen voor een decoratief object verkennen. AI levert enkele digitale concepten die vanuit verschillende hoeken worden bekeken. De gekozen vorm wordt daarna in ontwerpsoftware opgeschoond en aangepast. Voor gebruik in een interactieve omgeving worden bijvoorbeeld omvang en detailniveau gecontroleerd. De generatie versnelt zo een ontwerpfase, terwijl de eisen aan de uiteindelijke toepassing bepalen hoeveel nabewerking er nodig is."
      ],
      [
        "3D-generatie is geen kant-en-klaar CAD-ontwerp",
        "Een gegenereerd object heeft niet vanzelf correcte maten, een bewerkbare onderdelenstructuur of productiegeschikte toleranties. Ook betekent een mooi model niet automatisch dat het geschikt is om te printen. Voor 3D-printen moet onder meer de vorm bruikbaar zijn als gesloten volume en passen bij de gekozen productiemethode. Voor games of webweergave spelen weer andere eisen, zoals bestandsgrootte en het aantal vlakken. Die toepassingen vragen elk hun eigen controles."
      ],
      [
        "Hoe maak je uitvoer overdraagbaar?",
        "Bepaal vooraf welk bestandstype, welke schaal en welke onderdelen de volgende stap verwacht. Controleer of geometrie en texturen daadwerkelijk worden geëxporteerd en of je software ze goed inleest. Bewaar de referenties en gemaakte aanpassingen. Vergelijk de hele route van concept naar bruikbaar bestand, niet alleen de eerste render. Daarmee wordt duidelijk of AI-generatie tijd bespaart of vooral extra herstelwerk oplevert."
      ]
    ],
    "related": [
      "wat-is-image-generation",
      "wat-is-een-vision-model",
      "ai-generatie-lokaal-of-via-een-api"
    ],
    "sources": [
      {
        "title": "Tencent — Hunyuan3D 2.1",
        "url": "https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1"
      },
      {
        "title": "IBM — Generative AI",
        "url": "https://www.ibm.com/think/topics/generative-ai"
      }
    ]
  },
  {
    "slug": "wat-is-codegeneratie",
    "title": "Wat is codegeneratie met AI?",
    "excerpt": "Codegeneratie laat een model softwarecode voorstellen, uitbreiden of aanpassen. De echte waarde ontstaat wanneer dat voorstel past bij het bestaande project en gecontroleerd kan worden uitgevoerd.",
    "topic": "Koppelen en bouwen",
    "image": "wat-is-een-backend",
    "visual": {
      "icon": "code",
      "left": "Taak en projectcontext",
      "core": "Codevoorstel",
      "right": "Review en tests",
      "label": "Van een opdracht naar controleerbare software"
    },
    "sections": [
      [
        "In het kort",
        "Codegeneratie betekent dat een model code maakt op basis van een opdracht en beschikbare projectinformatie. Dat kan een functie, test, script of wijziging in bestaande software zijn. Het model genereert een voorstel; de ontwikkelomgeving bepaalt hoe je dat voorstel toepast. Code die goed oogt is nog niet noodzakelijk correct. Werking, aansluiting op het project en onderhoudbaarheid worden beoordeeld met passende tests en review."
      ],
      [
        "Wat heeft het model nodig?",
        "Beschrijf welke taak de code moet uitvoeren, welke invoer en uitvoer horen bij de functie en welke beperkingen gelden. Bestaande bestanden, interfaces, tests en gebruikte bibliotheken geven belangrijke context. Een model dat de projectafspraken niet kent, kan een oplossing maken die op zichzelf logisch lijkt maar niet aansluit. Geef daarom gerichte informatie uit de codebase mee in plaats van alleen een algemene wens voor een complete toepassing."
      ],
      [
        "Wat is het verschil met een coding-model of agent?",
        "Een coding-model is het model dat voor codewerk wordt gebruikt. Codegeneratie is een taak die dat model uitvoert. Een coding-agent kan daarnaast tools gebruiken om bestanden te bekijken, wijzigingen toe te passen en controles te starten. Die combinatie maakt een uitgebreidere workflow mogelijk, maar bepaalt niet vanzelf welke rechten passend zijn. Het blijft nuttig om zichtbaar te houden wat wordt voorgesteld, veranderd en daadwerkelijk uitgevoerd."
      ],
      [
        "Een praktisch voorbeeld",
        "Een ontwikkelaar wil een importfunctie uitbreiden met een nieuw gegevensveld. Het model krijgt de bestaande functie, voorbeeldinvoer en relevante tests. Het stelt een kleine wijziging en aanvullende test voor. Daarna worden de controles uitgevoerd en wordt de wijziging beoordeeld. Vragen over ontbrekende invoer en bestaande records horen bij die beoordeling. Het proces draait om een afgebakende aanpassing, zodat gevolgen en fouten beter te herkennen zijn."
      ],
      [
        "Welke fouten wil je vroeg vinden?",
        "Een model kan een niet-bestaande functie gebruiken, een randgeval missen of bestaande regels verkeerd interpreteren. Een test die door hetzelfde model is geschreven, kan bovendien dezelfde aanname overnemen. Beoordeel daarom ook of de test het gewenste gedrag controleert. Bij koppelingen tellen foutafhandeling, rechten en invoervalidatie mee. De relevante controle hangt af van de wijziging: een kleine tekstaanpassing vraagt iets anders dan code die gegevens wijzigt."
      ],
      [
        "Hoe houd je het werk efficiënt?",
        "Laat software bestanden vinden, zoekresultaten selecteren en vaste controles uitvoeren. Geef het model daarna de context die nodig is voor de volgende stap. Een grote codebase telkens volledig meesturen kan onnodig veel tokens en wachttijd kosten. Vergelijk modellen op de concrete taken in je project, inclusief herstelwerk. Goede codegeneratie helpt een ontwikkelaar vooruit en laat duidelijk zien welk werk nog gecontroleerd moet worden."
      ]
    ],
    "related": [
      "wat-is-een-coding-model",
      "wat-is-tool-calling",
      "wat-is-een-ai-agent"
    ],
    "sources": [
      {
        "title": "Mistral — Code en ontwikkeltools",
        "url": "https://docs.mistral.ai/vibe/code/overview"
      },
      {
        "title": "Hugging Face — Tekstgeneratie met LLM’s",
        "url": "https://huggingface.co/docs/transformers/en/llm_tutorial"
      }
    ]
  },
  {
    "slug": "hoe-werkt-generatie-met-diffusion-modellen",
    "title": "Hoe werkt generatie met diffusion-modellen?",
    "excerpt": "Veel generatieve beeldmodellen bouwen een afbeelding op via opeenvolgende stappen vanuit ruis. Wat doen het model, de prompt en de instellingen tijdens dat proces?",
    "topic": "AI-basis",
    "image": "wat-is-een-frontend",
    "visual": {
      "icon": "image",
      "left": "Ruis en opdracht",
      "core": "Denoising-stappen",
      "right": "Afbeelding",
      "label": "Stap voor stap van ruis naar een beeld"
    },
    "sections": [
      [
        "In het kort",
        "Een diffusion-model leert hoe een duidelijke uitwerking uit een verstoorde voorstelling kan ontstaan. Bij beeldgeneratie wordt vaak gestart met willekeurige ruis. Het model berekent vervolgens opeenvolgende bewerkingsstappen, waarbij een opdracht richting geeft aan het resultaat. Zo ontstaat een afbeelding. Deze uitleg gaat over diffusion; niet ieder generatief model gebruikt precies dit proces. Tekstgeneratie met een taalmodel werkt bijvoorbeeld doorgaans met het voorspellen van volgende tokens."
      ],
      [
        "Wat leert het model tijdens training?",
        "Een vereenvoudigde voorstelling is dat trainingsbeelden worden verstoord met verschillende hoeveelheden ruis. Het model leert informatie waarmee die verstoring kan worden teruggedrongen. Tijdens gebruik wordt die kennis toegepast om vanuit een ruisstart een nieuwe uitwerking op te bouwen. De precieze voorspelling en berekening hangen af van het model en de gekozen methode. Het gaat niet om een opgeslagen foto waarvan een filter wordt verwijderd, maar om een nieuw berekend resultaat."
      ],
      [
        "Hoe geeft tekst richting aan het beeld?",
        "Een tekstencoder zet de beschrijving om in een representatie die het generatieproces kan gebruiken. Het beeldmodel verwerkt die informatie tijdens de opeenvolgende stappen. Bij veel pipelines gebeurt dit in een compacte, latente ruimte in plaats van rechtstreeks op alle beeldpixels. Een decoder zet de uiteindelijke voorstelling om naar een afbeelding. Daardoor bestaat beeldgeneratie vaak uit meerdere samenwerkende onderdelen en niet uit één enkele berekening."
      ],
      [
        "Wat doen stappen en guidance?",
        "Het aantal stappen bepaalt hoe vaak de pipeline een bewerking uitvoert. Meer stappen vragen doorgaans meer rekenwerk, maar leveren niet onbeperkt betere kwaliteit. Een scheduler bepaalt hoe de opeenvolgende stappen worden berekend. Guidance stuurt bij ondersteunde modellen hoe sterk de opdracht meeweegt. Een hogere waarde is niet automatisch mooier. Instellingen moeten passen bij het model en de taak; waarden van verschillende modellen zijn niet zomaar vergelijkbaar."
      ],
      [
        "Wat is een seed bij generatie?",
        "Een seed stuurt de willekeurige start binnen de gebruikte omgeving. Met dezelfde seed kun je varianten beter vergelijken wanneer je andere instellingen gelijk houdt. Dat is handig als je één wijziging in de opdracht wilt beoordelen. Het betekent niet dat hetzelfde getal op een ander model, andere hardware of andere softwareversie exact dezelfde afbeelding oplevert. Voor herhaalbaarheid leg je ook modelversie, instellingen en de overige onderdelen van de pipeline vast."
      ],
      [
        "Wat betekent dit voor praktisch gebruik?",
        "Begin met een vaste taak en beoordeel welke instellingen bruikbare resultaten geven. Werk eventueel eerst met een kleiner formaat om compositie te verkennen en pas daarna met het eindformaat. Een geselecteerd gebied bewerken kan geschikter zijn dan een volledige afbeelding opnieuw laten maken. Houd bij hoeveel pogingen en bewerkingsstappen nodig zijn. Zo beoordeel je snelheid en kosten van de hele beeldworkflow in plaats van alleen één generatie."
      ]
    ],
    "related": [
      "wat-is-image-generation",
      "wat-zijn-embeddings",
      "ai-generatie-lokaal-of-via-een-api"
    ],
    "sources": [
      {
        "title": "Hugging Face — Onderdelen van een diffusion-pipeline",
        "url": "https://huggingface.co/docs/diffusers/en/quicktour"
      },
      {
        "title": "Hugging Face — Text-to-image",
        "url": "https://huggingface.co/docs/diffusers/en/using-diffusers/conditional_image_generation"
      },
      {
        "title": "Hugging Face — Reproduceerbare generatie",
        "url": "https://huggingface.co/docs/diffusers/en/using-diffusers/reusing_seeds"
      }
    ]
  },
  {
    "slug": "ai-generatie-lokaal-of-via-een-api",
    "title": "AI-generatie lokaal of via een API?",
    "excerpt": "Tekst, beeld en andere uitvoer kun je soms op eigen hardware genereren of via een externe modeldienst laten maken. Welke route past bij je gegevens, gewenste kwaliteit en gebruik?",
    "topic": "Je eigen AI-omgeving",
    "image": "wat-is-local-ai",
    "visual": {
      "icon": "server",
      "left": "Taak en gegevens",
      "core": "Model en uitvoerroute",
      "right": "Generatie onder jouw regie",
      "label": "Kiezen op kwaliteit, capaciteit en kosten"
    },
    "sections": [
      [
        "In het kort",
        "Lokaal genereren betekent dat het model op je eigen apparaat of server wordt uitgevoerd. Bij een externe model-API stuur je een verzoek naar een dienst die de verwerking doet. Dat zijn keuzes over de uitvoeromgeving. Een API kan ook naar je eigen lokale server verwijzen: API betekent een koppeling, niet automatisch cloud. Voor je afweging moet daarom duidelijk zijn waar het model draait en welke gegevens de omgeving verlaten."
      ],
      [
        "Welke modellen kun je zelf draaien?",
        "Je hebt modelbestanden nodig die je mag gebruiken, passende uitvoersoftware en voldoende rekenkracht en geheugen. Een vrij te downloaden model is niet automatisch open source of geschikt voor elke toepassing. De benodigde capaciteit verschilt bovendien sterk tussen tekst, beeld, audio en video. Bekijk de concrete taak, uitvoerlengte en het aantal gelijktijdige gebruikers. Dat geeft meer richting dan alleen een algemene aanduiding zoals een grote of kleine AI-computer."
      ],
      [
        "Wanneer kan een externe route passen?",
        "Een externe dienst kan toegang bieden tot een model dat je niet zelf kunt uitvoeren, aanvullende functies of capaciteit voor wisselend gebruik. Daar staan afhankelijkheden tegenover, zoals verbinding, beschikbaarheid en de voorwaarden voor gegevensverwerking. Ook kunnen limieten en wachttijden invloed hebben op de workflow. Een externe route is daarom een bewuste keuze voor een bepaalde taak, niet automatisch de beste optie voor alle gegevens en alle stappen."
      ],
      [
        "Hoe vergelijk je de werkelijke kosten?",
        "Voor eigen hardware tellen aanschaf, energie, beheer en benutting mee. Bij externe diensten kan het tarief bijvoorbeeld per token, afbeelding, audiominuut, videofragment of rekentijd worden berekend. Tel ook mislukte pogingen, hergeneratie en nabewerking mee. Een route met een lage prijs per verzoek kan duur uitpakken wanneer veel verzoeken nodig zijn. Vergelijk de totale kosten per bruikbaar eindresultaat bij het gebruik dat je verwacht."
      ],
      [
        "Kun je lokaal en extern combineren?",
        "Ja, verschillende stappen kunnen verschillende uitvoerroutes krijgen. Code kan eerst gegevens ophalen en structureren. Een lokaal model kan een concept voorbereiden, waarna een externe route voor een specifieke aanvullende taak wordt gekozen. Of alle modelverwerking blijft lokaal terwijl een gewone API bedrijfsgegevens aanlevert. Leg vast welke informatie elke stap ontvangt. Een combinatie blijft alleen beheersbaar wanneer de taakverdeling, gegevensstromen en uitzonderingen duidelijk zijn."
      ],
      [
        "Hoe kies je een passende inrichting?",
        "Gebruik een kleine verzameling representatieve opdrachten en vergelijk kwaliteit, wachttijd, correctiewerk en kosten. Bepaal welke verwerking lokaal moet blijven en hoeveel beheer je zelf wilt doen. Test ook of de uitvoering past bij het verwachte aantal gebruikers. Kies daarna een modelroute per taak en houd de koppeling waar mogelijk vervangbaar. Zo maak je de keuze op praktisch gebruik en regie, in plaats van op één indrukwekkende demonstratie."
      ]
    ],
    "related": [
      "wat-is-local-ai",
      "wat-is-modelrouting",
      "wat-is-quantisatie"
    ],
    "sources": [
      {
        "title": "Hugging Face — Geheugengebruik van generatieve modellen",
        "url": "https://huggingface.co/docs/diffusers/en/optimization/memory"
      },
      {
        "title": "Hugging Face — Tekstgeneratie met LLM’s",
        "url": "https://huggingface.co/docs/transformers/en/llm_tutorial"
      },
      {
        "title": "Mistral — Code en ontwikkeltools",
        "url": "https://docs.mistral.ai/vibe/code/overview"
      }
    ]
  },
  {
    slug: "wat-zijn-frontier-modellen",
    title: "Wat zijn frontier-modellen?",
    excerpt: "Frontier-modellen zitten aan de voorhoede van wat AI op dat moment kan. Wat zegt dat over kwaliteit, en wanneer heb je zo'n model echt nodig?",
    topic: "AI-basis", image: "wat-is-een-llm",
    visual: visual("sparkles", "Complexe vraag", "Frontier", "Uitwerking", "DE VOORHOEDE VAN AI"),
    sections: [
      ["In het kort", "Een frontier-model is een AI-model dat op dat moment tot de meest geavanceerde en capabele modellen behoort. Frontier betekent grens of voorhoede. Het is geen vast keurmerk en ook geen specifieke architectuur: wat vandaag vooroploopt, kan later worden ingehaald. Vaak gaat het om breed inzetbare modellen die meerdere soorten ingewikkelde taken aankunnen."],
      ["Wat maakt een model frontier?", "Het gaat om mogelijkheden, zoals complexe instructies volgen, problemen uitwerken, code schrijven of tekst en beelden combineren. Een model kan op de ene taak uitblinken en op een andere minder sterk zijn. Een hoge algemene benchmarkscore vertelt daarom nog niet hoe goed het jouw Nederlandse documenten begrijpt of jouw bedrijfsproces uitvoert."],
      ["Frontier, open en lokaal zijn verschillende begrippen", "Frontier beschrijft de capaciteiten. Open of gesloten gaat over toegang en gebruiksrechten. Lokaal of via een externe API gaat over waar het model wordt uitgevoerd. Die eigenschappen vallen niet automatisch samen. Een lokaal model is niet per definitie eenvoudig, en een frontier-model hoeft niet per definitie gesloten te zijn. De beschikbare hardware en licentie bepalen mede wat praktisch mogelijk is."],
      ["Een praktisch voorbeeld", "Stel dat je binnenkomende berichten wilt indelen in vijf categorieën en daarna lastige uitzonderingen wilt uitwerken. Voor de eerste stap kun je een klein model testen. Alleen de ingewikkelde berichten gaan naar een sterker model. Dit is een mogelijke workflow, geen bewezen prestatieclaim. Je vergelijkt de uitkomsten met dezelfde voorbeelden en duidelijke acceptatiecriteria."],
      ["Wanneer is een sterker model zinvol?", "Een sterker model kan waarde toevoegen als fouten kostbaar zijn of de taak veel context en afweging vraagt. Het kan ook langer wachten of meer kosten betekenen. Meet daarom hoeveel bruikbare resultaten je krijgt, hoeveel correctiewerk nodig is en hoe gegevens worden verwerkt. Een modelnaam of populariteit alleen is geen selectiecriterium."],
      ["Hoe AITJE hiernaar kijkt", "Begin bij de taak en test verschillende modellen op dezelfde invoer. Kies per onderdeel voldoende kwaliteit, met passende kosten en controle. Soms past een frontier-API, soms een model op eigen hardware en soms een combinatie. Door die keuze los van de rest van je workflow te houden, kun je later makkelijker een ander model inzetten."],
    ],
    related: ["wat-zijn-open-source-ai-modellen", "wat-is-modelrouting", "wat-is-een-coding-model"],
    sources: [sources.frontier, sources.routing],
  },
  {
    slug: "wat-zijn-open-source-ai-modellen",
    title: "Wat zijn open-source AI-modellen?",
    excerpt: "Open source, open weights en gratis toegang betekenen niet hetzelfde. Ontdek wat je kunt downloaden, aanpassen en zelf draaien — en welke rechten je daarvoor nodig hebt.",
    topic: "Je eigen AI-omgeving", image: "wat-is-local-ai",
    visual: visual("box", "Modelbestanden", "Licentie", "Eigen omgeving", "OPENHEID BEGINT BIJ JE RECHTEN"),
    sections: [
      ["In het kort", "Bij een open-source AI-model draait het om de vrijheid om het systeem te gebruiken, te onderzoeken, aan te passen en te delen. Alleen een gratis chat of downloadbare modelbestanden maken een model nog niet volledig open source. In gesprekken over AI wordt de term ruim gebruikt; kijk daarom naar wat daadwerkelijk beschikbaar is en wat de licentie toestaat."],
      ["Wat zijn open weights?", "Open weights betekent dat de geleerde modelparameters beschikbaar zijn. Je kunt het model daarmee mogelijk zelf uitvoeren en aanpassen. Maar de licentie kan beperkingen bevatten, bijvoorbeeld voor bepaalde toepassingen of verspreiding. Open weights zegt ook niet vanzelf dat de trainingscode en voldoende informatie over de trainingsdata beschikbaar zijn. De OSI-definitie stelt bredere eisen aan een open AI-systeem."],
      ["Waarin verschilt dit van een gesloten API?", "Bij een gesloten API stuur je een verzoek naar een dienst die het model voor je uitvoert. Je krijgt het antwoord, maar meestal niet de gewichten of de mogelijkheid om dezelfde modelversie zelfstandig te beheren. Een aanbieder kan ook een API aanbieden voor een model met beschikbare gewichten. Toegang tot bestanden en toegang tot een dienst zijn dus verschillende zaken."],
      ["Een praktisch voorbeeld", "Een organisatie wil interne handleidingen doorzoekbaar maken. Met een geschikt model en passende licentie kan zij de verwerking op een eigen server inrichten. Daarbij horen nog een zoekindex, toegangsrechten en een gebruikersinterface. De modeldownload is één onderdeel van die oplossing. Het beheren van die onderdelen vraagt tijd, ook wanneer de download zelf niets kost."],
      ["Open betekent niet automatisch veilig of gratis", "Beschikbare gewichten zeggen niets definitiefs over antwoordkwaliteit, herkomst van trainingsdata of beveiliging van jouw installatie. Zelf draaien brengt kosten mee voor hardware, stroom en beheer. Controleer bovendien of de gebruiksrechten passen bij jouw toepassing. Een lokaal model met online zoektools kan nog steeds gegevens naar externe diensten sturen."],
      ["Wat betekent dit voor je keuze?", "Bewaar bij een geselecteerd model de versie, licentie en configuratie. Test met eigen taken en maak helder welke onderdelen je zelfstandig kunt vervangen. Dan is openheid een praktische mogelijkheid om regie te houden, in plaats van alleen een aantrekkelijk label. De keuze tussen zelf draaien en een dienst gebruiken blijft afhankelijk van capaciteit, kennis en gebruik."],
    ],
    related: ["wat-zijn-model-weights", "wat-is-digitale-soevereiniteit", "wat-is-local-ai"],
    sources: [sources.open, sources.tuning],
  },
  {
    slug: "wat-zijn-tokens",
    title: "Wat zijn tokens bij AI?",
    excerpt: "Een taalmodel werkt met tokens: kleine bouwstenen van invoer en uitvoer. Ze bepalen mede hoeveel context past, hoe lang een antwoord duurt en wat een API-verzoek kost.",
    topic: "AI-basis", image: "wat-is-context",
    visual: visual("message", "Tekst", "Tokens", "Model", "VAN WOORDEN NAAR BOUWSTENEN"),
    sections: [
      ["In het kort", "Een token is een eenheid waarmee een taalmodel invoer verwerkt en uitvoer opbouwt. Bij tekst kan het een heel woord, een deel van een woord, een leesteken of een andere tekencombinatie zijn. De tokenizer verdeelt de invoer en koppelt de stukjes aan nummers. Tokens in deze betekenis zijn geen cryptocurrency en geen los abonnementstegoed."],
      ["Een token is niet hetzelfde als een woord", "Hoeveel tokens een zin bevat, hangt af van de tokenizer en de tekst. Een lange Nederlandse samenstelling kan in meerdere stukjes uiteen vallen. Code en getallen kunnen anders worden opgesplitst dan lopende tekst. Een vaste verhouding tussen woorden en tokens is daarom hooguit een schatting. Gebruik voor een nauwkeurige telling de tokenizer of gebruiksrapportage van het gekozen model."],
      ["Invoertokens en uitvoertokens", "Invoertokens omvatten de informatie die het model krijgt, zoals instructies, gespreksgeschiedenis en opgehaalde documenten. Uitvoertokens zijn de gegenereerde inhoud. API's kunnen verschillende tarieven hanteren voor invoer, uitvoer, hergebruikte context en eventuele redeneertokens. Kijk naar de werkelijke facturering van de gebruikte dienst, ook wanneer je alleen een kort antwoord ziet."],
      ["Een rekenvoorbeeld", "Stel voor deze uitleg dat invoer €4 per miljoen tokens kost. Dan kost 100.000 invoertokens €0,40. Dat is een fictief tarief en alleen het invoerdeel: uitvoer, extra verzoeken en overige kosten komen daar eventueel bij. Stuur je dezelfde grote documenten bij iedere stap opnieuw mee, dan kan dat invoerdeel zich snel herhalen."],
      ["Minder tokens gebruiken zonder informatie te verliezen", "Laat code vooraf dubbele velden verwijderen, berekeningen uitvoeren en relevante gegevens ophalen. Een zoekstap kan de benodigde passages selecteren, zodat het model niet telkens het hele archief ontvangt. Controleer wel of de geselecteerde informatie voldoende is. Een te korte opdracht kan fouten en extra pogingen veroorzaken, waardoor het uiteindelijke resultaat alsnog duurder wordt."],
      ["Wat betekent dit voor lokale AI?", "Ook een lokaal model verwerkt tokens, hoewel je geen externe tokenfactuur hoeft te krijgen. De invoerlengte en antwoordlengte beïnvloeden rekenwerk, geheugengebruik en wachttijd. Meet bij API's én eigen hardware de kosten en kwaliteit per afgeronde taak. Het goedkoopste token is niet automatisch het goedkoopste bruikbare resultaat."],
    ],
    related: ["wat-is-inference", "wat-is-kv-cache", "wat-is-modelrouting"],
    sources: [sources.tokenizer, sources.inference],
  },
  {
    slug: "wat-is-modelrouting",
    title: "Wat is modelrouting?",
    excerpt: "Met modelrouting kiest een workflow welk AI-model een taak uitvoert. Zo kun je lokale modellen en externe API's combineren op basis van kwaliteit, gegevens en kosten.",
    topic: "Agents en workflows", image: "wat-is-een-workflow",
    visual: visual("workflow", "Taak", "Router", "Passend model", "HET JUISTE MODEL PER STAP"),
    sections: [
      ["In het kort", "Modelrouting is het doorsturen van een AI-verzoek naar een passend model volgens afgesproken criteria. De keuze kan afhangen van de soort taak, de gevoeligheid van de gegevens, de benodigde kwaliteit of beschikbare capaciteit. Een router kan eenvoudige regels gebruiken of zelf een model zijn. Het is dus een onderdeel van de workflow, geen nieuw taalmodel."],
      ["Waarom niet alles naar hetzelfde model?", "Verschillende modellen hebben verschillende sterke kanten. Een taak als berichtcategorisatie kan een andere aanpak vragen dan ingewikkelde codeanalyse. Je hoeft niet automatisch het zwaarste model voor iedere stap te gebruiken. Onderzoek naar routing laat zien dat kosten en kwaliteit samen geoptimaliseerd kunnen worden; de uitkomst van jouw proces moet je wel zelf meten."],
      ["Een praktisch voorbeeld", "Een mogelijke orderworkflow laat code eerst klantgegevens ophalen. Een klein model zet de e-mail om in afgesproken velden. Als verplichte gegevens ontbreken, wordt de order tegengehouden. Alleen een onduidelijke uitzondering gaat naar een sterker model of een medewerker. De router bepaalt de route, terwijl de controles voorkomen dat een onvolledige order automatisch doorgaat."],
      ["Regels en grenzen vastleggen", "Bepaal welke gegevens naar een externe API mogen en welke taken lokaal moeten blijven. Spreek ook af wat er gebeurt bij een storing, een ongeldige reactie of een overschreden budget. Een alternatieve route mag geen gegevensbeleid omzeilen. Een foutmelding of menselijke beoordeling kan in zo'n situatie een betere vervolgstap zijn dan automatisch elders proberen."],
      ["Hoe weet je of de routing werkt?", "Vergelijk verschillende routes op dezelfde representatieve opdrachten. Tel geslaagde resultaten, correcties, wachttijd en alle verzoeken mee. Een goedkoper model dat regelmatig opnieuw moet proberen kan duurder uitpakken. Houd ook bij waarom een route is gekozen. Daarmee kun je zien welke uitzonderingen te vaak worden doorgestuurd en waar een betere regel nodig is."],
      ["Wat betekent dit voor AITJE?", "Bij token management en optimalisatie kan modelrouting deel zijn van een grotere aanpak. Eerst maak je de taak kleiner en de invoer gerichter; daarna vergelijk je modellen. Zo stuur je op een bruikbaar eindresultaat en houd je de modelkeuze vervangbaar. Of de oplossing lokaal, aan de edge of via frontier-API's werkt, volgt uit de eisen van de taak."],
    ],
    related: ["wat-zijn-frontier-modellen", "wat-zijn-tokens", "wat-is-tool-calling"],
    sources: [sources.routing, sources.tools],
  },
  {
    slug: "wat-is-quantisatie",
    title: "Wat is quantisatie bij AI-modellen?",
    excerpt: "Quantisatie slaat modelgetallen op met minder precisie. Daardoor kan een model minder geheugen vragen, maar de invloed op snelheid en kwaliteit verschilt per toepassing.",
    topic: "Je eigen AI-omgeving", image: "wat-is-edge-ai",
    visual: visual("cpu", "Modelgetallen", "Minder bits", "Minder geheugen", "EEN MODEL PASSEND MAKEN"),
    sections: [
      ["In het kort", "Quantisatie, ook quantization genoemd, betekent dat getallen in een AI-model met minder precisie worden weergegeven. Daardoor nemen ze minder ruimte in. Bij LLM's gaat het vaak om modelgewichten, maar ook andere berekeningen en opgeslagen tussenresultaten kunnen worden gequantiseerd. Het doel is de toepassing uitvoerbaar te maken met minder geheugen en passend rekenwerk."],
      ["Wat betekenen 16-bit, 8-bit en 4-bit?", "Bits zijn de eenheden waarmee een getal wordt opgeslagen. Minder bits bieden minder mogelijke waarden. Een methode moet dus bepalen hoe de oorspronkelijke getallen worden benaderd. Een model met 4-bit gewichten is niet simpelweg vier keer zo klein als de hele 16-bit installatie: extra schaalgegevens, software en het geheugen voor de context tellen ook mee."],
      ["Een vergelijking om het te begrijpen", "Denk aan het afronden van een meetwaarde van veel decimalen naar minder decimalen. Voor sommige toepassingen maakt dat nauwelijks verschil; voor andere is de verloren precisie belangrijk. Dit is een vereenvoudigde vergelijking. Quantisatie gebruikt verschillende technieken om de fout te beperken en belangrijke informatie zo goed mogelijk te behouden."],
      ["Waarom is dit nuttig bij lokale AI?", "Een model dat in zijn oorspronkelijke vorm niet in het beschikbare geheugen past, kan in een andere uitvoering mogelijk wel bruikbaar worden. Dat kan de keuze aan modellen op een Mac, pc of server vergroten. Tegelijk moet je ruimte reserveren voor invoer, lopende gesprekken en de KV-cache. Alleen de bestandsgrootte zegt dus nog niet of de toepassing soepel werkt."],
      ["Wat lever je mogelijk in?", "De kwaliteit kan veranderen, bijvoorbeeld bij nauwkeurige instructies, rekenen of minder voorkomende talen. Snelheidswinst is ook niet gegarandeerd: die hangt af van hardware en ondersteuning in de uitvoersoftware. Test daarom de concrete uitvoering met dezelfde vragen en documenten. Kijk vooral of fouten veranderen op de onderdelen die voor jouw werk belangrijk zijn."],
      ["Een praktische keuze maken", "Leg de modelversie, quantisatie en gebruikte software vast. Vergelijk kwaliteit, geheugen en wachttijd bij het verwachte aantal gebruikers. Kies vervolgens de uitvoering die aan je eisen voldoet. Een klein bestand op zichzelf is geen doel; een stabiele toepassing met voldoende kwaliteit en capaciteit wel."],
    ],
    related: ["wat-zijn-model-weights", "wat-is-kv-cache", "wat-is-inference"],
    sources: [sources.quantization, sources.cache],
  },
  {
    slug: "wat-is-fine-tuning",
    title: "Wat is fine-tuning?",
    excerpt: "Fine-tuning traint een bestaand model verder met gerichte voorbeelden. Wanneer helpt dat, en wanneer zijn een betere prompt of documentzoekfunctie voldoende?",
    topic: "Koppelen en bouwen", image: "wat-is-prompt-engineering",
    visual: visual("gauge", "Voorbeelden", "Verder trainen", "Taakgedrag", "GERICHT AANPASSEN MET DATA"),
    sections: [
      ["In het kort", "Fine-tuning is het verder trainen van een bestaand model op een gerichte verzameling voorbeelden. Je begint niet vanaf nul: het model heeft al algemene patronen geleerd. Met extra training probeer je gedrag voor een bepaalde taak, stijl of domein te verbeteren. Daarbij veranderen de gewichten van het model of worden aanvullende trainbare onderdelen gebruikt."],
      ["Wat voor gedrag kun je aanpassen?", "Denk aan berichten indelen volgens eigen categorieën, steeds hetzelfde antwoordformaat gebruiken of bepaalde soorten code beter aanvullen. De voorbeelden laten het gewenste verband tussen invoer en uitvoer zien. Fine-tuning is geen garantie dat het model alle bedrijfsregels foutloos toepast. Regels die absoluut moeten gelden kun je beter ook met gewone software controleren."],
      ["Fine-tuning is iets anders dan documenten ophalen", "Bij RAG zoek je relevante informatie op en geef je die mee bij een vraag. Bij fine-tuning verander je modelgedrag door training. Voor actuele prijzen, medewerkersgegevens en handleidingen is ophalen vaak makkelijker bij te werken. De twee technieken kunnen samengaan: een aangepast model kan antwoorden geven op basis van informatie uit een zoekfunctie."],
      ["Een praktisch voorbeeld", "Een supportteam gebruikt steeds dezelfde acht categorieën. Eerst test je een duidelijke prompt met een paar voorbeelden. Als de indeling daarmee onvoldoende consistent is en er genoeg goed gelabelde berichten bestaan, kun je fine-tuning onderzoeken. Houd een aparte testverzameling achter. Daarmee beoordeel je of het model ook werkt op berichten die het tijdens training niet heeft gezien."],
      ["Wat zijn adapters en LoRA?", "Bij sommige methoden train je kleine aanvullende onderdelen in plaats van alle oorspronkelijke gewichten. Zulke adapters kunnen de benodigde trainingsmiddelen verminderen. LoRA is een bekende techniek daarvoor. Dat maakt training toegankelijker, maar de kwaliteit blijft afhangen van de voorbeelden en evaluatie. Een adapter moet bovendien passen bij de modelversie waarvoor hij is gemaakt."],
      ["Wanneer is het de moeite waard?", "Vergelijk de verbetering met de kosten van data voorbereiden, trainen, testen en onderhouden. Probeer eerst of een beter afgebakende taak, prompt of zoekstap voldoende is. Gebruik fine-tuning wanneer die extra inspanning een aantoonbaar probleem oplost. Bewaar daarbij de gebruikte datarechten, versies en testresultaten, zodat een volgende wijziging controleerbaar blijft."],
    ],
    related: ["wat-zijn-model-weights", "wat-is-rag", "wat-is-abliteration"],
    sources: [sources.tuning, source("Hugging Face — Parameter-efficient fine-tuning", "https://huggingface.co/docs/transformers/en/peft")],
  },
  {
    slug: "wat-is-tool-calling",
    title: "Wat is tool calling?",
    excerpt: "Met tool calling kan een taalmodel voorstellen om een functie aan te roepen. Je software haalt gegevens op of voert een actie uit, binnen de rechten die je zelf bepaalt.",
    topic: "Agents en workflows", image: "wat-is-een-api",
    visual: visual("wrench", "Vraag", "Toolkeuze", "Gegevens of actie", "TAALMODELLEN VERBINDEN MET CODE"),
    sections: [
      ["In het kort", "Tool calling, ook function calling genoemd, laat een model een gestructureerd verzoek maken om een beschikbare functie te gebruiken. Denk aan een voorraad opvragen, een berekening uitvoeren of een document zoeken. Het model bepaalt welke functie en invoer passend lijken. De applicatie controleert dat verzoek en beslist vervolgens of de functie wordt uitgevoerd."],
      ["Het model voert de code niet zelf uit", "Je beschrijft welke functies beschikbaar zijn en welke velden ze verwachten. Het model produceert een aanroep, vaak in een gestructureerd formaat. Jouw software doet het echte werk en geeft de uitkomst terug. Zo blijft de berekening in code en de actuele voorraad in het voorraadsysteem. Dat is een ander mechanisme dan het model vragen een antwoord uit zijn training te raden."],
      ["Een praktisch voorbeeld", "Een medewerker vraagt hoeveel stuks van een artikel beschikbaar zijn. Het model stelt een voorraadaanvraag voor met een artikelnummer. De applicatie controleert de toegang, vraagt het systeem om de actuele voorraad en geeft alleen de relevante velden terug. Daarna formuleert het model een leesbaar antwoord. Bij een ontbrekend artikelnummer kan de workflow eerst om verduidelijking vragen."],
      ["Waarom helpt dit bij tokenoptimalisatie?", "Een functie kan gericht gegevens ophalen in plaats van een heel gegevensbestand mee te sturen. Ook vaste berekeningen en formaatcontroles kunnen buiten het model plaatsvinden. Daardoor heeft het model minder onnodige invoer. Toolbeschrijvingen, resultaten en extra modelrondes kosten zelf ook context en tijd. Meet dus de hele keten, niet alleen de eerste aanroep."],
      ["Rechten horen bij de applicatie", "Een toolverzoek is geen toestemming. De uitvoerende software moet gebruikersrechten, invoer en toegestane acties controleren. Een voorraad lezen vraagt andere rechten dan een bestelling plaatsen. Voor acties met gevolgen kun je een expliciete bevestiging inbouwen. Geef bovendien een duidelijke fout terug als een tool niet werkt, zodat het model geen succesvol resultaat hoeft te veronderstellen."],
      ["Hoe hangt dit samen met agents en MCP?", "Een agent kan meerdere toolaanroepen gebruiken om een taak uit te voeren. MCP biedt een gemeenschappelijke manier om tools en bronnen aan een AI-applicatie beschikbaar te maken. Tool calling werkt ook zonder MCP en maakt een losse chatbot niet automatisch een zelfstandige agent. De workflow bepaalt hoeveel keuzevrijheid het model werkelijk krijgt."],
    ],
    related: ["wat-is-mcp", "wat-is-modelrouting", "wat-is-een-ai-agent"],
    sources: [sources.tools, sources.mcp],
  },
  {
    slug: "wat-is-mcp",
    title: "Wat is MCP, het Model Context Protocol?",
    excerpt: "MCP geeft AI-applicaties een gezamenlijke manier om tools en informatiebronnen te benaderen. Wat wordt daarmee eenvoudiger, en wat moet je zelf nog regelen?",
    topic: "Koppelen en bouwen", image: "wat-is-een-webhook",
    visual: visual("plug", "AI-applicatie", "MCP", "Tools en bronnen", "EEN GEZAMENLIJKE KOPPELTAAL"),
    sections: [
      ["In het kort", "MCP staat voor Model Context Protocol. Het is een open protocol voor het verbinden van AI-applicaties met tools en informatiebronnen. Het beschrijft hoe die onderdelen mogelijkheden bekendmaken en verzoeken uitwisselen. Daardoor hoeft niet iedere aansluiting vanaf nul een eigen koppeltaal te gebruiken. MCP is zelf geen taalmodel, database of zoekmachine."],
      ["Welke onderdelen werken samen?", "Een AI-applicatie is de host. Daarbinnen onderhoudt een client de verbinding met een MCP-server. Die server is software die mogelijkheden aanbiedt, bijvoorbeeld documentzoeken of gegevens opvragen. Een server kan lokaal draaien of via een netwerk bereikbaar zijn. Het woord server betekent hier dus niet noodzakelijk een aparte fysieke computer."],
      ["Tools, resources en prompts", "MCP onderscheidt onder meer tools voor uitvoerbare functies, resources voor beschikbare informatie en prompts voor herbruikbare instructies. De host bepaalt hoe die mogelijkheden in de toepassing worden gebruikt. Een protocol regelt de uitwisseling; het bepaalt niet welk model het beste antwoord geeft of hoe jouw bedrijf een werkproces moet uitvoeren."],
      ["Een praktisch voorbeeld", "Een interne assistent moet handleidingen kunnen doorzoeken. Je kunt een MCP-server maken die een zoekfunctie aanbiedt en alleen documenten teruggeeft waarvoor de medewerker toegang heeft. Een geschikte AI-applicatie kan die functie ontdekken en gebruiken. Het onderliggende documentarchief blijft bestaan; MCP is de koppeling naar die bron, geen vervanging van het archief."],
      ["Wat moet je nog zelf regelen?", "Je blijft verantwoordelijk voor toegangsrechten, betrouwbare tools en wat de applicatie met resultaten mag doen. Een lokale MCP-server kan op zijn beurt externe systemen benaderen. Lokaal verbinden betekent dus niet vanzelf dat alle gegevens lokaal blijven. Leg per koppeling vast waar de verwerking gebeurt en welke informatie de gebruiker en het model daadwerkelijk krijgen."],
      ["Wanneer past MCP?", "Het kan nuttig zijn wanneer meerdere geschikte AI-applicaties dezelfde bronnen of functies moeten gebruiken. Voor één eenvoudige aansluiting kan een gewone API voldoende zijn. Kies op basis van ondersteunde functies en beheer, niet omdat het protocol populair is. Controleer ook de ondersteunde protocolversies voordat je een koppeling als vervangbaar beschouwt."],
    ],
    related: ["wat-is-tool-calling", "wat-is-een-api", "wat-is-vendor-lock-in"],
    sources: [sources.mcp, sources.tools],
  },
  {
    slug: "wat-zijn-ai-hallucinaties",
    title: "Wat zijn AI-hallucinaties?",
    excerpt: "AI kan een overtuigend antwoord geven dat feitelijk onjuist is. Leer hoe je verzonnen informatie herkent en toepassingen bouwt die onzekerheid beter afhandelen.",
    topic: "AI-basis", image: "wat-is-rag",
    visual: visual("file-search", "Antwoord", "Broncontrole", "Beoordeling", "OVERTUIGEND IS NIET ALTIJD CORRECT"),
    sections: [
      ["In het kort", "Een AI-hallucinatie is gegenereerde inhoud die onjuist, verzonnen of niet onderbouwd is, terwijl het antwoord betrouwbaar kan klinken. Denk aan een niet-bestaande bron, een verkeerd bedrag of een softwarefunctie die helemaal niet bestaat. De term beschrijft een fout in de uitvoer; hij betekent niet dat het model een menselijke waarneming of bewuste bedoeling heeft."],
      ["Waarom gebeurt dit?", "Een taalmodel maakt passende uitvoer op basis van geleerde patronen en de beschikbare context. Dat proces is geen automatische feitencontrole. Ontbrekende informatie, onduidelijke vragen of verkeerde bronnen kunnen leiden tot een plausibele aanvulling die niet klopt. Ook bij voldoende context kan het model passages verkeerd interpreteren of gegevens uit verschillende onderdelen door elkaar halen."],
      ["Een praktisch voorbeeld", "Een medewerker vraagt naar de opzegtermijn in een contract. Het document bevat daar geen bepaling over. Een slecht ingerichte assistent vult een gebruikelijke termijn in alsof die uit het contract komt. Een beter ingerichte toepassing zegt dat de bepaling niet is gevonden, toont wat wel is geraadpleegd en verwijst de vraag voor beoordeling door."],
      ["Helpt zoeken in eigen documenten?", "RAG kan relevante broninformatie toevoegen, waardoor het model minder uit zijn algemene training hoeft aan te vullen. Maar ook dan kunnen de verkeerde documenten worden gevonden of bronpassages verkeerd worden weergegeven. Laat waar mogelijk de gebruikte passage en documentversie zien. Een bronvermelding is pas bruikbaar als je kunt controleren of de bron de conclusie werkelijk ondersteunt."],
      ["Welke controles kun je toevoegen?", "Laat het model ontbrekende gegevens benoemen en beperk het antwoord tot de beschikbare informatie wanneer de taak dat vraagt. Controleer bedragen en verplichte velden met code. Gebruik testvragen waarbij het correcte antwoord bekend is, inclusief vragen die niet beantwoord kunnen worden. Voor belangrijke beslissingen blijft een passende beoordeling nodig, ook als eerdere antwoorden goed waren."],
      ["Wat betekent dit voor AITJE?", "Een lokale installatie voorkomt geen hallucinaties. De kwaliteit volgt uit modelkeuze, informatievoorziening en controles. Bouw daarom een toepassing rond een heldere taak en een herkenbare grens: wanneer kan het systeem antwoorden, wanneer moet het stoppen en wie kijkt dan mee? Betrouwbaarheid gaat ook over goed omgaan met een vraag waarvoor geen onderbouwd antwoord beschikbaar is."],
    ],
    related: ["wat-is-rag", "wat-is-een-vision-model", "wat-is-een-coding-model"],
    sources: [sources.hallucinations, source("Onderzoek — Codehallucinaties en API-documentatie", "https://arxiv.org/abs/2407.09726")],
  },
  {
    slug: "wat-is-digitale-soevereiniteit",
    title: "Wat is digitale soevereiniteit?",
    excerpt: "Digitale soevereiniteit gaat over zeggenschap over je gegevens, systemen en keuzes. Bij AI raakt dat ook modeltoegang, beheer en de mogelijkheid om over te stappen.",
    topic: "Je eigen AI-omgeving", image: "wat-is-on-premise-ai",
    visual: visual("shield", "Jouw gegevens", "Zeggenschap", "Jouw keuzes", "REGIE OVER JE DIGITALE OMGEVING"),
    sections: [
      ["In het kort", "Digitale soevereiniteit gaat over de zeggenschap over digitale systemen, gegevens en de voorwaarden waaronder je ze gebruikt. Voor een organisatie betekent dat onder meer kunnen bepalen wie toegang krijgt, waar verwerking plaatsvindt en hoe je van leverancier verandert. Het is niet hetzelfde als alles zelf bouwen of nooit een externe dienst gebruiken."],
      ["Waarom komt dit bij AI ter sprake?", "Een AI-toepassing kan kennis uit documenten, klantgegevens en bedrijfsprocessen gebruiken. Als de toepassing volledig afhangt van één externe API, kunnen wijzigingen in modellen, voorwaarden of beschikbaarheid je werk raken. De relevante vraag is welke afhankelijkheden je aanvaardt en welke onderdelen je zelf kunt beheren of vervangen. Dat vraagt inzicht in de hele keten."],
      ["Een Nederlandse locatie is één onderdeel", "Een server in Nederland kan belangrijk zijn, maar geeft op zichzelf geen volledige zeggenschap. Ook beheerrechten, contracten, gebruikte software en eventuele externe verbindingen tellen mee. Omgekeerd kan een externe dienst onderdeel zijn van een bewuste keuze met goede exportmogelijkheden. Locatie en de mogelijkheid om zelfstandig te handelen moet je allebei beoordelen."],
      ["Een praktisch voorbeeld", "Een organisatie bewaart haar documenten in een eigen omgeving en gebruikt een vervangbare modellaag. Een lokaal model beantwoordt interne vragen. Voor een andere taak kan een toegestane externe dienst worden gebruikt zonder het documentarchief te verplaatsen. Dit is een mogelijke inrichting: de voordelen hangen af van toegangsrechten, gegevensstromen en hoe goed een overstap werkelijk is voorbereid."],
      ["Welke vragen helpen?", "Kun je gegevens en configuratie exporteren? Kun je een oudere modelversie blijven gebruiken? Wie kan de systemen beheren wanneer de leverancier uitvalt? Wat blijft werken zonder een externe verbinding? Beantwoord die vragen met documentatie en een kleine praktijktest. Een belofte dat iets onafhankelijk is, is minder bruikbaar dan een aantoonbare mogelijkheid om door te werken of te migreren."],
      ["De verbinding met AITJE", "AI op eigen hardware of een eigen server kan een manier zijn om meer controle te houden. Daar horen verantwoordelijkheden voor updates, beveiliging en continuïteit bij. Kies daarom een haalbare inrichting met heldere rollen. Het doel is dat je de techniek bewust kunt gebruiken en vervangen, terwijl de toepassing blijft aansluiten op je werk."],
    ],
    related: ["wat-is-vendor-lock-in", "wat-zijn-open-source-ai-modellen", "wat-is-local-ai"],
    sources: [sources.sovereignty, sources.switching],
  },
  {
    slug: "wat-is-abliteration",
    title: "Wat is abliteration bij taalmodellen?",
    excerpt: "Abliteration past interne eigenschappen van een model aan om aangeleerd weigeringsgedrag te verminderen. Wat verandert daarmee, en wat zegt het juist niet over de kwaliteit?",
    topic: "AI-basis", image: "wat-is-een-backend",
    visual: visual("gauge", "Modelgedrag", "Aanpassing", "Andere reacties", "GEDRAG AANPASSEN IS GEEN WAARHEIDSGARANTIE"),
    sections: [
      ["In het kort", "Abliteration is een informele term voor technieken die weigeringsgedrag van een taalmodel proberen te verminderen door interne modelrepresentaties of gewichten aan te passen. Je ziet de term vaak bij bewerkte modellen met beschikbare gewichten. De gebruikelijke spelling is abliteration. Het is geen standaard keurmerk en ook geen garantie dat een model voortaan iedere opdracht uitvoert."],
      ["Waar komt het idee vandaan?", "Onderzoekers vonden bij de onderzochte chatmodellen een interne richting die sterk samenhing met het weigeren van bepaalde verzoeken. Door die richting te beïnvloeden veranderde het weigeringsgedrag. Abliteration bouwt op dat soort inzichten voort. Dat beschrijft een bevinding bij specifieke modellen en experimenten; het bewijst niet dat ieder model op dezelfde manier reageert."],
      ["Wat is het verschil met een prompt of fine-tuning?", "Een prompt geeft instructies tijdens gebruik. Fine-tuning traint een model verder met voorbeelden. Abliteration probeert een intern patroon gerichter te veranderen, soms door een bewerkte versie van de gewichten te maken. De uitkomst is afhankelijk van de techniek en het oorspronkelijke model. Het is dus meer dan een verzoek om in een chat anders te antwoorden."],
      ["Minder weigeren is niet automatisch beter antwoorden", "Een model dat vaker antwoord geeft kan nog steeds fouten maken, iets verzinnen of een instructie verkeerd volgen. De aanpassing voegt geen nieuwe betrouwbare kennis toe. Ook andere eigenschappen kunnen veranderen. Beoordeel een aangepaste versie daarom op de echte taak, inclusief feitelijke juistheid en het vermogen om ontbrekende informatie te herkennen."],
      ["Een praktisch voorbeeld", "Stel dat je model een legitieme technische documentvraag te vaak afwijst. Onderzoek eerst welke instructie, documentcontext of toepassingsfilter dat veroorzaakt. Een andere prompt, modelkeuze of configuratie kan het probleem oplossen. Een aangepaste modelversie is een aparte keuze die je met dezelfde testvragen vergelijkt; een algemene belofte van minder beperkingen zegt weinig over dat concrete probleem."],
      ["Wat betekent dit voor een bedrijfsomgeving?", "De rechten in een applicatie, toegangscontrole tot bestanden en regels voor acties blijven nodig, ongeacht het weigeringsgedrag van het model. Leg bij een aangepast model vast welke versie en bewerking je gebruikt. Kies op basis van meetbare taakgeschiktheid. AITJE kan een model alleen zinvol in een workflow inzetten als ook de informatie, rechten en controles passend zijn."],
    ],
    related: ["wat-zijn-model-weights", "wat-is-fine-tuning", "wat-zijn-ai-hallucinaties"],
    sources: [sources.refusal, sources.tuning],
  },
  {
    slug: "wat-zijn-model-weights",
    title: "Wat zijn weights van een AI-model?",
    excerpt: "Weights zijn de geleerde getallen die bepalen hoe een model informatie verwerkt. Ontdek wat modelgewichten, parameters en een downloadbaar modelbestand met elkaar te maken hebben.",
    topic: "AI-basis", image: "wat-is-een-backend",
    visual: visual("cpu", "Training", "Weights", "Modelgedrag", "WAT EEN MODEL HEEFT GELEERD"),
    sections: [
      ["In het kort", "Weights, of modelgewichten, zijn getallen in een neuraal netwerk die beïnvloeden hoe invoer wordt omgezet in uitvoer. Tijdens training worden zulke getallen aangepast om de prestaties op trainingsvoorbeelden te verbeteren. Bij normaal gebruik van een taalmodel blijven de gewichten meestal gelijk. Het model gebruikt ze samen met de informatie uit de huidige opdracht."],
      ["Waarom heten ze gewichten?", "Een gewicht bepaalt hoe sterk een onderdeel van een berekening meetelt. Een eenvoudige vergelijking is een formule waarin verschillende kenmerken elk een eigen vermenigvuldigingsfactor hebben. Een LLM bevat veel ingewikkelder, opeenvolgende berekeningen. De betekenis zit verspreid over grote aantallen gewichten; er is niet voor ieder feit één herkenbaar vakje dat je kunt openen en wijzigen."],
      ["Wat betekenen 7B of 70B parameters?", "De B staat voor billion, miljard. Een aanduiding als 7B verwijst doorgaans naar ongeveer zeven miljard modelparameters. Het aantal zegt iets over omvang, maar voorspelt de kwaliteit op jouw taak niet volledig. Architectuur, trainingsdata en verdere training tellen ook mee. Bij sommige modellen worden bovendien niet alle parameters voor ieder token tegelijk gebruikt."],
      ["Wat zit er in een modeldownload?", "Modelgewichten worden in bestanden opgeslagen. Om een taalmodel te draaien heb je daarnaast passende uitvoersoftware, modelconfiguratie en een tokenizer nodig. De precisie waarin de gewichten zijn opgeslagen beïnvloedt hoeveel ruimte ze vragen. Met quantisatie kun je die opslag veranderen. Het geheugen voor lopende verzoeken en de KV-cache komt boven op het geheugen voor de gewichten."],
      ["Een praktisch voorbeeld", "Je kunt dezelfde modelversie in verschillende uitvoeringen testen, bijvoorbeeld met gewichten in hogere of lagere precisie. Die uitvoeringen kunnen andere geheugeneisen en uitkomsten hebben. Een download past misschien op je schijf terwijl de toepassing niet goed in het werkgeheugen past. Test daarom ook echte documenten en het beoogde aantal gelijktijdige gebruikers."],
      ["Wat betekent toegang tot weights?", "Beschikbare gewichten geven je de mogelijkheid het model zelf uit te voeren, als hardware, software en licentie dat toelaten. Het betekent niet dat alle trainingsdata openbaar zijn of dat er geen gebruiksbeperkingen gelden. Leg versie en rechten vast. Zo weet je welk model je beheert en kun je een wijziging in gedrag later vergelijken met de oorspronkelijke uitvoering."],
    ],
    related: ["wat-zijn-open-source-ai-modellen", "wat-is-quantisatie", "wat-is-kv-cache"],
    sources: [sources.weights, sources.quantization, sources.open],
  },
  {
    slug: "wat-is-kv-cache",
    title: "Wat is KV-cache bij een LLM?",
    excerpt: "De KV-cache bewaart tussenresultaten van een taalmodel, zodat het tijdens tekstgeneratie minder werk hoeft te herhalen. Dat helpt bij snelheid, maar vraagt ook geheugen.",
    topic: "Je eigen AI-omgeving", image: "wat-is-een-context-window",
    visual: visual("server", "Eerdere tokens", "KV-cache", "Volgend token", "TUSSENRESULTATEN HERGEBRUIKEN"),
    sections: [
      ["In het kort", "KV staat hier voor key en value: twee soorten interne vectoren die een transformer gebruikt bij attention. Attention helpt het model verbanden met eerdere invoer te verwerken. De KV-cache bewaart eerder berekende keys en values, zodat die bij het volgende token opnieuw gebruikt kunnen worden. In deze LLM-context gaat het dus niet om een algemene key-value-database."],
      ["Waarom scheelt dat werk?", "Een taalmodel bouwt een antwoord doorgaans stap voor stap op. Het volgende token hangt mede af van de eerdere tokens. Zonder hergebruik zou het veel eerdere tussenresultaten telkens opnieuw moeten berekenen. De cache maakt een deel van dat herhaalde werk overbodig. Het is een optimalisatie van het uitvoeren van het model, geen extra training."],
      ["De cache vraagt ook geheugen", "Meer bewaarde context en meer gelijktijdige verzoeken kunnen meer cachegeheugen vragen. Hoeveel precies hangt onder meer af van de architectuur en de gekozen cachestrategie. Sommige modellen bewaren slechts een beperkt venster in bepaalde lagen. Een modelbestand dat in het geheugen past is daarom niet genoeg: ook de ruimte voor de actieve verzoeken moet passen."],
      ["Een praktisch voorbeeld", "Een lokale assistent verwerkt korte vragen soepel. Bij een lang document of meerdere gebruikers tegelijk raakt dezelfde machine eerder vol. De gewichten zijn niet gegroeid, maar er is meer werkgeheugen nodig voor de verzoeken. Je kunt dan bijvoorbeeld minder gesprekken tegelijk uitvoeren of de context gerichter selecteren. Welke oplossing helpt moet je op die installatie meten."],
      ["KV-cache is geen blijvend persoonlijk geheugen", "De cache bevat interne tussenresultaten voor een bepaalde context. Het is geen gewone lijst met feiten en verandert niet vanzelf de modelgewichten. Gespreksgeschiedenis opslaan, herhaalde promptdelen hergebruiken en persoonlijke kennis beheren zijn andere functies. Ze kunnen technisch samenhangen, maar mogen in een gebruikersbelofte niet allemaal als hetzelfde geheugen worden beschreven."],
      ["Wat betekent dit voor je inrichting?", "Reserveer capaciteit voor modelgewichten én context. Test wachttijd en geheugengebruik met het aantal gebruikers en documentlengtes dat je verwacht. Er bestaan verschillende cachetechnieken, bijvoorbeeld lagere precisie of verplaatsing naar ander geheugen. Die kunnen ruimte besparen, maar ook vertraging of kwaliteitsverschillen geven. Kies daarom op basis van je concrete werkbelasting."],
    ],
    related: ["wat-is-inference", "wat-zijn-model-weights", "wat-is-een-context-window"],
    sources: [sources.cache, source("Hugging Face — Hoe caching werkt", "https://huggingface.co/docs/transformers/en/cache_explanation")],
  },
  {
    slug: "wat-is-een-vector",
    title: "Wat is een vector bij AI?",
    excerpt: "Een vector is een geordende reeks getallen. In AI helpt zo'n reeks om informatie weer te geven, te vergelijken en terug te vinden — bijvoorbeeld bij zoeken op betekenis.",
    topic: "AI-basis", image: "wat-zijn-embeddings",
    visual: visual("scan", "Informatie", "Vector", "Vergelijken", "INFORMATIE WEERGEVEN MET GETALLEN"),
    sections: [
      ["In het kort", "Een vector is een geordende reeks getallen, zoals [0,2; 0,8; -0,1]. Elk getal heeft een vaste plek, een dimensie. Met vectoren kan software rekenen aan informatie die oorspronkelijk uit tekst, beelden of andere gegevens bestaat. Een vector is de vorm van de weergave; de manier waarop je die getallen maakt, bepaalt wat ze betekenen."],
      ["Een eenvoudige vergelijking", "Je kunt een product voorstellen met getallen voor gewicht, lengte en prijs. Dan weet je precies wat elke dimensie betekent. AI-vectoren kunnen veel meer dimensies hebben, waarbij de eigenschappen gezamenlijk worden geleerd. Zo'n dimensie is meestal niet eenvoudig te benoemen als bijvoorbeeld onderwerp of toon. De combinatie van getallen is bepalend."],
      ["Wat is het verschil met een embedding?", "Een embedding is een geleerde representatie van informatie, vaak in de vorm van een vector. Een embeddingmodel kan zinnen met verwante betekenis dicht bij elkaar plaatsen. Niet iedere vector is dus een embedding. Vectoren worden ook voor andere interne berekeningen gebruikt, waaronder de keys en values in de aandachtlagen van een taalmodel."],
      ["Hoe kun je ermee zoeken?", "Een zoektoepassing maakt met hetzelfde embeddingmodel een vector van de vraag en van documentpassages. Daarna vergelijkt zij de vectoren om verwante passages te vinden. Verschillende vergelijkingsmethoden meten dat verband op verschillende manieren. Een hoge overeenkomst betekent dat een passage waarschijnlijk relevant is; het is geen bewijs dat die passage waar of actueel is."],
      ["Een praktisch voorbeeld", "Iemand zoekt naar het herstellen van toegang. Een handleiding gebruikt de woorden wachtwoord opnieuw instellen. Zoeken op embeddings kan helpen die passage te vinden, ook zonder exact dezelfde woorden. Je toont vervolgens de oorspronkelijke passage met bron en datum. De vector vervangt dus niet het document, maar helpt om het terug te vinden."],
      ["Wat moet je goed inrichten?", "Vergelijk representaties die voor dezelfde vectorruimte zijn gemaakt. Als je het embeddingmodel wijzigt, kan opnieuw indexeren nodig zijn. Houd daarnaast documentrechten en broninformatie bij. Een gebruiker mag geen vertrouwelijke passage krijgen alleen omdat die goed op de vraag lijkt. Voor een bruikbare zoekfunctie zijn de gevonden tekst en de toegangscontrole minstens zo belangrijk als de vectoren."],
    ],
    related: ["wat-zijn-embeddings", "wat-is-rag", "wat-is-kv-cache"],
    sources: [sources.vector, sources.cache],
  },
  {
    slug: "wat-is-een-token-factory",
    title: "Wat is een token factory?",
    excerpt: "Een token factory is een beeldspraak voor infrastructuur die AI-uitvoer produceert. Wat zit er achter zo'n fabriek, en hoe hangt dat samen met inference en kosten?",
    topic: "Je eigen AI-omgeving", image: "wat-is-on-premise-ai",
    visual: visual("server", "Verzoeken", "Inference", "Tokens", "VAN REKENKRACHT NAAR AI-UITVOER"),
    sections: [
      ["In het kort", "Token factory is een beeldspraak voor een installatie of platform dat AI-uitvoer op schaal produceert. De term wordt gebruikt rondom AI factories en inference-infrastructuur. Het is geen afzonderlijk soort taalmodel en geen universele technische standaard. In dit artikel gaat het om tokens van AI-modellen, niet om het aanmaken van cryptotokens."],
      ["Wat zit er in zo'n omgeving?", "Er zijn modellen, rekenhardware, geheugen, netwerken en software nodig om verzoeken te verwerken. Daar omheen staan onder meer gegevensvoorziening, toegangsbeheer en monitoring. NVIDIA gebruikt AI factory voor een bredere infrastructuur die ook training en andere AI-werkzaamheden kan ondersteunen. Token factory legt vooral de nadruk op de productie van modeluitvoer tijdens gebruik."],
      ["Waarom wordt het een fabriek genoemd?", "De vergelijking maakt een keten zichtbaar: gegevens en opdrachten komen binnen, rekenwerk wordt uitgevoerd en bruikbare uitvoer gaat naar toepassingen. Net als bij een productieproces heb je capaciteit, wachtrijen en kwaliteitscontrole. Het woord fabriek zegt echter niets over de kwaliteit van ieder antwoord. Meer geproduceerde tokens kunnen ook meer overbodige tekst betekenen."],
      ["Een praktisch voorbeeld", "Een organisatie laat meerdere interne toepassingen dezelfde modelserver gebruiken. Een assistent stelt vragen, een documentworkflow maakt samenvattingen en een ontwikkelaar laat code toelichten. Het platform verdeelt de capaciteit en registreert het gebruik. In klein formaat kan dit al een gedeelde AI-voorziening zijn; de benaming factory vraagt niet automatisch om een groot datacenter."],
      ["Hoe beoordeel je capaciteit en kosten?", "Tokens per seconde kunnen nuttig zijn, maar zeggen niet hoeveel gebruikers een goed resultaat krijgen binnen de gewenste tijd. Meet ook wachttijd, bezetting en geslaagde taken. Een machine die de hele dag aanstaat voor een paar korte vragen kan economisch anders uitpakken dan dezelfde machine met een constante werkvoorraad. Stroom, aanschaf en beheer horen daarom bij de vergelijking."],
      ["Wat past bij AITJE?", "Begin met de taken en het verwachte gebruik. Voor sommige organisaties past een eigen gedeelde modelserver; voor andere een API of combinatie. Richt de invoer efficiënt in en stuur verschillende taken naar geschikte modellen. Het doel is bruikbare AI-capaciteit met inzicht in gebruik en kosten, niet zoveel mogelijk tokens produceren om het produceren."],
    ],
    related: ["wat-is-inference", "wat-zijn-tokens", "wat-is-modelrouting"],
    sources: [sources.factory, sources.infrastructure],
  },
  {
    slug: "wat-is-inference",
    title: "Wat is inference bij een LLM?",
    excerpt: "Inference is het gebruiken van een getraind model om een uitkomst te maken. Bij een LLM betekent dat invoer verwerken en vervolgens een antwoord opbouwen.",
    topic: "AI-basis", image: "wat-is-een-llm",
    visual: visual("cpu", "Invoer", "Getraind model", "Uitvoer", "EEN MODEL DAADWERKELIJK GEBRUIKEN"),
    sections: [
      ["In het kort", "Inference is de fase waarin je een getraind AI-model gebruikt om een voorspelling of andere uitkomst te produceren. Bij een taalmodel kan dat een antwoord, samenvatting of stuk code zijn. Het model rekent met de beschikbare gewichten en huidige invoer. Een gewone chat verandert die gewichten niet automatisch; trainen en gebruiken zijn verschillende processen."],
      ["Wat gebeurt er bij tekstgeneratie?", "Eerst wordt de invoer omgezet naar de vorm die het model verwacht. Bij een LLM bestaat tekst uit tokens. Daarna verwerkt het model de context en bouwt het uitvoer op. Bij veel generatieve taalmodellen gebeurt dat token voor token. De selectie van de volgende tokens hangt ook af van instellingen die bepalen hoe voorspelbaar of gevarieerd de uitvoer mag zijn."],
      ["Prefill en decode", "Prefill is het verwerken van de meegegeven context voordat de volgende uitvoer wordt opgebouwd. Decode is het herhaald genereren van nieuwe tokens. Een lange invoer kan de tijd tot de eerste reactie vergroten; een lang antwoord vraagt extra generatiewerk. De KV-cache helpt om bepaalde eerdere berekeningen tijdens dat proces opnieuw te gebruiken."],
      ["Een praktisch voorbeeld", "Je vraagt een samenvatting van een document. Het verwerken van de documenttekst hoort bij inference, net als het maken van de samenvatting. Als je daarna een gerichte vraag stelt, zijn er opnieuw berekeningen nodig. Of eerdere context efficiënt wordt hergebruikt hangt af van de toepassing. Een opgeslagen chat betekent niet vanzelf dat alle eerdere rekenkosten verdwijnen."],
      ["Waar hangt de snelheid van af?", "Modelomvang, precisie, hardware, invoerlengte en gelijktijdige verzoeken spelen mee. Een snelle korte test voorspelt daarom niet altijd hoe een team met grote documenten werkt. Meet de wachttijd tot het eerste token en de tijd tot een volledig bruikbaar antwoord. Ook zoekstappen en toolaanroepen kunnen de totale doorlooptijd bepalen."],
      ["Lokaal en via een API", "Inference kan op je eigen apparaat, op een eigen server of bij een externe aanbieder plaatsvinden. Bij een API betaalt de gebruiker volgens de voorwaarden van de dienst; zelf draaien brengt hardware- en beheerkosten mee. De technische kern blijft hetzelfde: een bestaand model wordt gebruikt. Optimalisatie begint bij een heldere taak, gerichte context en een passende uitvoering."],
    ],
    related: ["wat-zijn-tokens", "wat-is-kv-cache", "wat-is-een-token-factory"],
    sources: [sources.inference, sources.cache],
  },
  {
    slug: "wat-is-een-vision-model",
    title: "Wat is een vision-model?",
    excerpt: "Een vision-model verwerkt visuele informatie, zoals foto's en documentbeelden. Een vision-language model combineert dat met taal om vragen over een afbeelding te beantwoorden.",
    topic: "AI-basis", image: "wat-is-een-frontend",
    visual: visual("image", "Afbeelding", "Vision", "Interpretatie", "AI LATEN WERKEN MET BEELD"),
    sections: [
      ["In het kort", "Een vision-model is een AI-model voor visuele informatie. Het kan bijvoorbeeld afbeeldingen classificeren of objecten herkennen. Een vision-language model combineert beeld en taal: je geeft een afbeelding plus een vraag en krijgt een tekstuele reactie. Niet ieder vision-model kan chatten, en niet ieder taalmodel kan afbeeldingen verwerken."],
      ["Wat kun je ermee doen?", "Denk aan gegevens uit een documentbeeld halen, een grafiek toelichten of een foto beschrijven. Of een model dat goed doet hangt af van zijn training, de taak en de invoerkwaliteit. Video is bovendien een aparte capaciteit die niet elk beeldmodel ondersteunt. Een product dat foto's accepteert is dus niet automatisch geschikt voor iedere visuele toepassing."],
      ["Hoe verschilt dit van OCR?", "OCR richt zich op het herkennen van geschreven of gedrukte tekst. Een vision-language model kan daarnaast vragen beantwoorden over indeling, objecten en verbanden in een beeld. Voor een vaste documenttaak kan een OCR-stap gevolgd door gewone code geschikter zijn. Je kunt technieken ook combineren, bijvoorbeeld tekstherkenning voor velden en een model voor een toelichting."],
      ["Een praktisch voorbeeld", "Een monteur levert een foto en een korte notitie aan. Een model kan een conceptbeschrijving van de zichtbare situatie maken. De workflow haalt daarna materiaalprijzen uit een database en laat een medewerker de voorgestelde werkzaamheden controleren. Het model hoeft de prijzen niet uit de foto te raden. Dit is een mogelijke toepassing, geen garantie dat elk detail betrouwbaar wordt herkend."],
      ["Waar moet je op letten?", "Onscherpe beelden, kleine tekst en onduidelijke details kunnen tot verkeerde interpretaties leiden. Ook een beeldmodel kan overtuigend iets beschrijven dat niet zichtbaar is. Laat ontbrekende of onzekere velden daarom open voor controle. Test met de echte soorten foto's en documenten die in het werk voorkomen, inclusief moeilijke en onvolledige invoer."],
      ["Wat betekent dit voor je AI-omgeving?", "Beeldverwerking kan meer capaciteit vragen en heeft eigen gebruikslimieten. Controleer ook waar afbeeldingen worden verwerkt en of persoonsgegevens in beeld nodig zijn voor de taak. Vergelijk een lokaal model, een externe API en een combinatie van OCR, code en AI. De beste route volgt uit nauwkeurigheid, gegevensbeleid en kosten per gecontroleerde uitkomst."],
    ],
    related: ["wat-zijn-ai-hallucinaties", "wat-is-modelrouting", "wat-zijn-tokens"],
    sources: [sources.vision, source("InternLM-XComposer-2.5 — Onderzoek naar vision-language modellen", "https://arxiv.org/abs/2407.03320")],
  },
  {
    slug: "wat-is-een-coding-model",
    title: "Wat is een coding-model?",
    excerpt: "Een coding-model is gericht op taken met softwarecode. Het kan helpen bij uitleg, aanvullingen en wijzigingen, maar een werkende ontwikkelomgeving vraagt ook tools en tests.",
    topic: "Koppelen en bouwen", image: "wat-is-een-backend",
    visual: visual("code", "Code en opdracht", "Coding-model", "Voorstel", "VAN IDEE NAAR CONTROLEERBARE CODE"),
    sections: [
      ["In het kort", "Een coding-model is een AI-model dat specifiek geschikt of verder getraind is voor programmeertaken. Het kan code aanvullen, uitleg geven, fouten onderzoeken of wijzigingen voorstellen. Ook algemene taalmodellen kunnen programmeertaken uitvoeren. Coding-model is daarom een beschrijving van taakgerichtheid, geen garantie dat iedere gegenereerde wijziging werkt."],
      ["Wat maakt programmeren een bijzondere taak?", "Code moet aansluiten op een taal, bibliotheken, projectstructuur en bestaand gedrag. Een voorstel kan er overtuigend uitzien en toch een niet-bestaande functie gebruiken of een belangrijk randgeval missen. Goede context bestaat daarom uit relevante bestanden, instructies en actuele documentatie. Alleen een grote hoeveelheid broncode meesturen is niet hetzelfde als de juiste informatie geven."],
      ["Een model en een coding-agent verschillen", "Het model produceert uitvoer. Een coding-agent gebruikt daarnaast software om bestanden te lezen, wijzigingen toe te passen en controles uit te voeren. De rechten en ontwikkeltools bepalen welke acties mogelijk zijn. Een model met programmeerkennis heeft dus niet vanzelf toegang tot je repository of toestemming om een wijziging te publiceren."],
      ["Een praktisch voorbeeld", "Een ontwikkelaar vraagt een fout in ordervalidatie te herstellen. De toepassing geeft relevante code en het verwachte gedrag mee. Het model stelt een wijziging voor, waarna de ontwikkelomgeving passende tests draait. De ontwikkelaar beoordeelt de uitkomst. Als een test faalt, wordt die informatie gebruikt om de wijziging te verbeteren; een groen testresultaat vervangt niet alle inhoudelijke beoordeling."],
      ["Hoe kies je een geschikt model?", "Test met jouw programmeertaal en echte projecttaken. Vergelijk de kwaliteit van wijzigingen, benodigde begeleiding en tijd tot een bruikbaar resultaat. Let ook op de aansluiting op ontwikkeltools en de capaciteit voor langere context. Een model dat goed is in een kleine puzzel kan minder geschikt zijn voor onderhoud in een grote bestaande codebase."],
      ["Wat betekent dit voor AITJE Coder?", "Een eigen coding-omgeving kan een model op lokale hardware of een eigen server combineren met passende tools. Dat geeft andere beheer- en gegevenskeuzes dan alles via een externe API uitvoeren. Externe modellen kunnen daarnaast bewust worden ingezet wanneer de taak dat vraagt. Houd code, ontwikkelrechten en modelkeuze zo ingericht dat je wijzigingen kunt controleren en je omgeving kunt aanpassen."],
    ],
    related: ["wat-is-tool-calling", "wat-zijn-frontier-modellen", "wat-zijn-ai-hallucinaties"],
    sources: [sources.coding, source("Onderzoek — Codehallucinaties en API-documentatie", "https://arxiv.org/abs/2407.09726")],
  },
  {
    slug: "wat-is-vc-subsidy",
    title: "Wat is VC subsidy bij AI-diensten?",
    excerpt: "Investeerders en tijdelijke credits kunnen groei financieren voordat een dienst zichzelf terugverdient. Wat betekent zo'n mogelijke subsidie voor je beeld van AI-kosten?",
    topic: "Je eigen AI-omgeving", image: "wat-is-cloud",
    visual: visual("gauge", "Kapitaal of credits", "Tijdelijk voordeel", "Gebruiksprijs", "PRIJS EN KOSTEN ZIJN VERSCHILLEND"),
    sections: [
      ["In het kort", "VC subsidy is een informele term voor het voordeel dat gebruikers kunnen ervaren wanneer investeerders groei en verliezen van een dienst financieren. VC staat voor venture capital, durfkapitaal. Het is geen vaste financiële categorie of bewijs dat iedere goedkope AI-dienst verlies maakt. Het benoemt een mogelijke financieringsdynamiek, geen universele verklaring voor API-prijzen."],
      ["Hoe kan financiering een lage prijs ondersteunen?", "Een bedrijf kan kapitaal aantrekken om ontwikkeling, infrastructuur en klantenwerving te betalen voordat inkomsten al die uitgaven dekken. Ook kan een leverancier tijdelijke tegoeden of promotionele credits verstrekken. Investeringsgeld en leverancierstegoeden zijn verschillende vormen van ondersteuning. In beide gevallen kan tijdelijk een deel van de rekening buiten de directe klantprijs vallen."],
      ["Waarom bewijst een lage tokenprijs weinig?", "Een aanbieder kan efficiënt werken, bestaande capaciteit benutten of een smaller model aanbieden. Daarnaast is bedrijfsverlies niet hetzelfde als verlies op ieder API-verzoek: onderzoekskosten en andere uitgaven tellen ook mee. Zonder geschikte informatie over kosten en inkomsten kun je niet vaststellen hoeveel een specifieke dienst wordt gesubsidieerd. Daarover moet je dus geen aannames als feiten presenteren."],
      ["Een fictief voorbeeld", "Stel dat een team voor een proef tijdelijk cloudcredits ontvangt. Een workflow lijkt tijdens die proef bijna niets te kosten. Zodra het tegoed op is, gelden de normale gebruikskosten. Dit voorbeeld laat het verschil tussen een tijdelijke rekening en structurele kosten zien. Het zegt niets over de winstgevendheid of toekomstige prijzen van een bepaalde AI-aanbieder."],
      ["Hoe kun je ermee omgaan?", "Maak een berekening zonder tijdelijke kortingen en tel alle stappen van de workflow mee. Onderzoek ook wat een ander gebruiksvolume of een ander model voor de kosten betekent. Je hoeft daarvoor geen toekomstige prijsstijging te voorspellen. Het helpt al om de aannames zichtbaar te maken en een modelkeuze niet onnodig vast te zetten."],
      ["Wat betekent dit voor AITJE?", "Vergelijk API-gebruik en eigen infrastructuur op totale kosten en bruikbare resultaten. Een eigen server vraagt aanschaf, stroom en beheer; een externe dienst biedt andere schaalvoordelen en afhankelijkheden. Laat een pilot aantonen wat werkt en beoordeel daarna de structurele inrichting. Een tijdelijke lage prijs kan helpen om te beginnen, maar is geen volledige businesscase."],
    ],
    related: ["wat-is-loss-leader-pricing", "wat-is-vendor-lock-in", "wat-is-modelrouting"],
    sources: [sources.financing, sources.credits],
  },
  {
    slug: "wat-is-loss-leader-pricing",
    title: "Wat is loss-leader pricing bij AI?",
    excerpt: "Bij loss-leader pricing wordt een aanbod verliesgevend geprijsd om klanten te trekken. Hoe verschilt dat van een tijdelijke korting, financiering en predatory pricing?",
    topic: "Je eigen AI-omgeving", image: "wat-is-cloud",
    visual: visual("gauge", "Lage instapprijs", "Klantrelatie", "Andere inkomsten", "EEN GOEDKOPE INSTAP BEGRIJPEN"),
    sections: [
      ["In het kort", "Loss-leader pricing is een prijsstrategie waarbij een product of dienst onder de kostprijs wordt aangeboden om klanten aan te trekken. De aanbieder verwacht de investering bijvoorbeeld terug te verdienen via andere aankopen, aanvullingen of een langere klantrelatie. Je hoort ook de term lokvogelprijs. Dat betekent niet dat iedere korting of gratis proef meteen zo'n strategie is."],
      ["Hoe kan dit bij AI eruitzien?", "Denk als mogelijk scenario aan goedkoop API-gebruik binnen een platform dat daarnaast betaalde opslag, beheer of grotere pakketten aanbiedt. De prijs van één onderdeel zegt dan niet alles over de totale rekening. Om vast te stellen dat het echt om een verliesgevend aanbod gaat, heb je inzicht in de relevante kosten nodig. Alleen de zichtbare tokenprijs is daarvoor onvoldoende."],
      ["Een fictief voorbeeld", "Een denkbeeldige leverancier biedt een basisfunctie tijdelijk beneden zijn kosten aan en verwacht inkomsten uit een betaald beheerpakket. Een gebruiker met alleen de basisfunctie profiteert aanvankelijk. Een organisatie die het hele pakket afneemt moet het totaal vergelijken. Dit is een uitlegvoorbeeld van het mechanisme, geen beschrijving van een specifieke aanbieder of een voorspelling van prijsverhogingen."],
      ["Het verschil met VC subsidy", "VC subsidy beschrijft hoe kapitaal tijdelijk groei of verliezen kan financieren. Loss-leader pricing beschrijft de prijsstrategie voor een aanbod. Die begrippen kunnen samen voorkomen, maar hoeven dat niet. Een groter winstgevend bedrijf kan bijvoorbeeld een verliesgevend instapproduct betalen uit andere inkomsten zonder dat durfkapitaal betrokken is."],
      ["Het verschil met predatory pricing", "Predatory pricing gaat over een uitsluitende prijspraktijk die de concurrentie aantast. Een lage of verliesgevende prijs alleen bewijst dat niet. Voor een juridische beoordeling in de EU zijn onder meer marktmacht, kosten en het concurrentie-effect relevant. Loss-leader pricing moet je daarom niet automatisch als roofprijs of onrechtmatig gedrag bestempelen."],
      ["Wat betekent dit voor je AI-keuze?", "Vergelijk de gehele workflow: modelaanroepen, opslag, koppelingen, beheer en het werk om later over te stappen. Controleer of proefprijzen en structurele tarieven verschillen. Een gunstige instap kan een prima keuze zijn zolang je de voorwaarden begrijpt. Houd je data en modelkoppeling waar mogelijk overdraagbaar, zodat je ook bij veranderde behoeften een keuze hebt."],
    ],
    related: ["wat-is-vc-subsidy", "wat-is-predatory-pricing", "wat-is-vendor-lock-in"],
    sources: [sources.belowCost, sources.competition],
  },
  {
    slug: "wat-is-predatory-pricing",
    title: "Wat is predatory pricing, of roofprijzen?",
    excerpt: "Predatory pricing gaat over lage prijzen die concurrentie kunnen uitsluiten. Waarom is een goedkope AI-API nog geen bewijs van zo'n praktijk?",
    topic: "Je eigen AI-omgeving", image: "wat-is-cloud",
    visual: visual("shield", "Prijs en kosten", "Marktpositie", "Concurrentie", "GOEDKOOP IS GEEN JURIDISCHE CONCLUSIE"),
    sections: [
      ["In het kort", "Predatory pricing, vaak roofprijzen genoemd, is een uitsluitende prijspraktijk waarbij een onderneming met een dominante positie onder de relevante kosten prijst om concurrenten te marginaliseren of concurrentie te verminderen. In de EU valt de beoordeling binnen het verbod op misbruik van een dominante positie. Het begrip is dus specifieker dan een bedrijf dat goedkoop verkoopt of veel investeert."],
      ["Waarom zijn lage prijzen op zichzelf geen bewijs?", "Lage prijzen kunnen ook voortkomen uit efficiëntere productie, schaalvoordelen of gewone concurrentie. Dat kan gebruikers juist helpen. Voor de beoordeling kijk je onder meer naar de relevante markt, dominante positie, prijs-kostenverhouding en de omstandigheden van het gedrag. Uit één API-tarief kun je die conclusie niet trekken."],
      ["De gedachte achter de term", "Het economische idee is dat een onderneming tijdelijk opbrengst opgeeft om concurrentie te verzwakken, waardoor klanten later minder alternatieven hebben. Hogere toekomstige prijzen kunnen daarbij een verwachting zijn. Een concrete juridische beoordeling vraagt meer dan dit verhaal; welke feiten en toetsen doorslaggevend zijn hangt ook af van de toepasselijke rechtsregels en omstandigheden."],
      ["Een fictief voorbeeld", "Twee AI-diensten rekenen uiteenlopende tokenprijzen. Dat toont alleen een prijsverschil. Misschien gebruiken ze andere modellen, hardware of servicevoorwaarden. Zonder gegevens over kosten en marktpositie kun je niet zeggen dat de goedkoopste dienst roofprijzen hanteert. Dit voorbeeld helpt onderscheid maken tussen een waarneembaar tarief en een onbewezen conclusie over de strategie daarachter."],
      ["Waarom is het relevant voor organisaties?", "Je hoeft geen mededingingszaak te beoordelen om je afhankelijkheden te begrijpen. Een toepassing die sterk aan één dienst hangt kan kwetsbaar zijn voor wijzigingen in voorwaarden of beschikbaarheid, ongeacht de verklaring voor de prijs. Kijk daarom naar modelvervanging, exportmogelijkheden en alternatieve routes. Dat zijn concrete keuzes die je zelf kunt onderzoeken."],
      ["Wat kun je wél vergelijken?", "Bereken de kosten per geslaagd resultaat met alle benodigde stappen. Leg vast welke eisen een alternatief moet halen en test een kleine overstap. Houd feitelijke prijsinformatie gescheiden van vermoedens over bedrijfsvoering. Zo kun je verstandig inkopen en een workflow ontwerpen zonder ongefundeerde beschuldigingen over aanbieders te gebruiken."],
    ],
    related: ["wat-is-loss-leader-pricing", "wat-is-vc-subsidy", "wat-is-vendor-lock-in"],
    sources: [sources.competition, sources.belowCost],
  },
  {
    slug: "wat-is-vendor-lock-in",
    title: "Wat is vendor lock-in bij AI?",
    excerpt: "Vendor lock-in ontstaat wanneer overstappen van leverancier lastig of duur wordt. Bij AI zit die afhankelijkheid vaak in gegevens, API's, modelgedrag en workflows tegelijk.",
    topic: "Je eigen AI-omgeving", image: "wat-is-een-api",
    visual: visual("plug", "Leverancier", "Overstapwerk", "Alternatief", "JE KEUZEMOGELIJKHEDEN BEHOUDEN"),
    sections: [
      ["In het kort", "Vendor lock-in betekent dat een organisatie zo afhankelijk is van een leverancier dat overstappen moeilijk, duur of tijdrovend wordt. Switching costs zijn de overstapkosten: geld, ontwikkelwerk, opnieuw testen en soms onderbreking van het werk. Lock-in hoeft geen bewuste misleiding te zijn. Hij kan ook groeien doordat een handig platform steeds meer taken overneemt."],
      ["Waar ontstaat afhankelijkheid bij AI?", "Niet alleen bij de API-aanroep. Ook prompts, specifieke antwoordformaten, ingebouwde zoekfuncties, opgeslagen bestanden en modelgedrag kunnen leveranciersgebonden worden. Een ander model kan dezelfde technische interface ondersteunen en toch andere antwoorden geven. Daardoor moet je soms niet alleen de koppeling aanpassen, maar ook de hele taak opnieuw beoordelen."],
      ["Een praktisch voorbeeld", "Een assistent bewaart documenten in een leveranciersspecifieke zoekomgeving en gebruikt eigen conversatiefuncties van dat platform. Later wil de organisatie van model veranderen. Dan zijn documentexport, indexering, koppelingen en testvragen nodig. Een exportknop voor de oorspronkelijke bestanden is nuttig, maar betekent niet dat alle configuratie en het verwachte gedrag mee verhuizen."],
      ["Hoe kun je overstapkosten beperken?", "Bewaar brongegevens in een overdraagbare vorm en leg belangrijke instellingen vast. Houd de modelkoppeling waar mogelijk los van bedrijfslogica. Maak een testverzameling met gewenste resultaten, zodat je een alternatief eerlijk kunt beoordelen. Open protocollen kunnen aansluitingen vereenvoudigen, maar nemen verschillen in modelkwaliteit en platformfuncties niet automatisch weg."],
      ["Is lokaal draaien automatisch vrij van lock-in?", "Nee. Ook een eigen installatie kan afhangen van één beheerpartij, hardwareplatform of bijzondere software. Je houdt meer regie wanneer je toegang hebt tot gegevens, configuratie en documentatie en wanneer onderhoud overdraagbaar is. Een open modellicentie kan helpen, maar zonder beheerkennis en een haalbaar migratiepad blijven er afhankelijkheden bestaan."],
      ["Hoe kiest AITJE een passende balans?", "Niet iedere afhankelijkheid hoeft te verdwijnen. Een beheerde dienst kan veel werk besparen. Maak wel bewust welke onderdelen je accepteert en welke je vervangbaar wilt houden. Een kleine proef met een tweede model of uitvoeromgeving kan zichtbaar maken hoeveel overstapwerk werkelijk nodig is. Zo beoordeel je keuzevrijheid op mogelijkheden in de praktijk."],
    ],
    related: ["wat-is-digitale-soevereiniteit", "wat-is-mcp", "wat-is-modelrouting"],
    sources: [sources.switching, sources.sovereignty, sources.mcp],
  },
];

const existingTitles: Record<string, string> = {
  "wat-is-een-llm": "Wat is een LLM?",
  "wat-is-local-ai": "Wat is local AI?",
  "wat-is-rag": "Wat is RAG?",
  "wat-is-een-api": "Wat is een API?",
  "wat-is-een-ai-agent": "Wat is een AI-agent?",
  "wat-zijn-embeddings": "Wat zijn embeddings?",
  "wat-is-een-context-window": "Wat is een context window?",
  "wat-is-een-workflow": "Wat is een workflow?",
};

const seededKnowledgeArticles: KnowledgeArticle[] = seeds.map((article) => {
  const words = [article.excerpt, ...article.sections.map(([, content]) => content)].join(" ").split(/\s+/).length;
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    ...knowledgeArticleImages[article.image],
    readTime: `${Math.max(1, Math.ceil(words / 190))} min`,
    category: article.topic,
    topic: article.topic,
    lastUpdated: "2026-10-03",
    visual: article.visual,
    sections: article.sections.map(([title, content]) => ({ title, content })),
    links: article.related.map((slug) => ({ slug, label: seeds.find((related) => related.slug === slug)?.title ?? existingTitles[slug] ?? slug })),
    sources: article.sources,
  };
});

const articleDefinitions: KnowledgeArticle[] = [
  ...seededKnowledgeArticles,
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
    links: [
      { label: "Local AI", slug: "wat-is-local-ai" },
      { label: "On-premise AI", slug: "wat-is-on-premise-ai" },
      { label: "White-label hardware, AITJE software", slug: "white-label-hardware-aitje-software" },
    ],
  },
  {
    slug: "wat-is-local-ai",
    title: "Wat is local AI?",
    excerpt:
      "Local AI betekent dat AI binnen je eigen omgeving draait, bijvoorbeeld op een lokaal device, server of netwerk. Het draait om meer grip op data, beschikbaarheid, kosten en afhankelijkheid van externe AI-platformen.",
    ...knowledgeArticleImages["wat-is-local-ai"],
    readTime: "5 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "In het kort",
        content:
          "Local AI is AI die niet volledig afhankelijk is van een externe cloudomgeving. De verwerking gebeurt lokaal, op eigen hardware of binnen het eigen netwerk. Daardoor blijft de basis dichter bij de organisatie die de AI gebruikt.",
      },
      {
        title: "Waarom is dit relevant?",
        content:
          "Veel AI-gebruik loopt via externe platformen met abonnementen, API-kosten en regels van derden. Local AI beperkt die afhankelijkheid. Dat is vooral interessant wanneer interne kennis, privacy, continuiteit of voorspelbare kosten belangrijk zijn.",
      },
      {
        title: "Is local AI hetzelfde als edge AI?",
        content:
          "De begrippen overlappen sterk. Edge AI benadrukt dat verwerking dicht bij de databron gebeurt. Local AI benadrukt dat de AI binnen je eigen omgeving beschikbaar is. In de praktijk worden de termen vaak samen gebruikt.",
      },
      {
        title: "Wat kun je lokaal doen?",
        content:
          "Denk aan interne vragen beantwoorden, documenten doorzoeken, kennisbanken gebruiken, samenvattingen maken, agents draaien of workflows ondersteunen. Niet alles hoeft lokaal, maar de onderdelen met gevoelige data of hoge beschikbaarheid kunnen er vaak veel baat bij hebben.",
      },
      {
        title: "Waar moet je op letten?",
        content:
          "Local AI vraagt om goede keuzes rond hardware, modellen, toegang, updates en beheer. Het is geen los trucje, maar een infrastructuurkeuze. De beste oplossing combineert lokale kracht met duidelijke afspraken over wat eventueel nog extern mag.",
      },
    ],
    links: [
      { label: "Edge AI", slug: "wat-is-edge-ai" },
      { label: "On-premise AI", slug: "wat-is-on-premise-ai" },
      { label: "AI agent", slug: "wat-is-een-ai-agent" },
    ],
  },
  {
    slug: "wat-is-on-premise-ai",
    title: "Wat is on-premise AI?",
    excerpt:
      "On-premise AI betekent dat AI draait op infrastructuur die onder beheer staat van je eigen organisatie of locatie. Dat kan helpen bij privacy, compliance, continuiteit en controle over systemen.",
    ...knowledgeArticleImages["wat-is-on-premise-ai"],
    readTime: "5 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "In het kort",
        content:
          "On-premise AI draait op hardware die bij de organisatie, vestiging of eigen beheeromgeving hoort. In plaats van alle verwerking naar een externe AI-dienst te sturen, houd je de belangrijkste onderdelen dichter bij je eigen infrastructuur.",
      },
      {
        title: "Wanneer kies je hiervoor?",
        content:
          "On-premise AI is logisch wanneer data gevoelig is, systemen lokaal moeten blijven werken of wanneer externe platformen niet passen bij beleid, kosten of beschikbaarheid. Het is vooral relevant voor organisaties met duidelijke eisen rond beheer en toegang.",
      },
      {
        title: "Wat is het verschil met cloud AI?",
        content:
          "Bij cloud AI draait de verwerking grotendeels op infrastructuur van een externe aanbieder. Bij on-premise AI ligt meer verantwoordelijkheid bij de organisatie zelf of bij een partner die de lokale omgeving beheert. Je wint controle, maar moet beheer goed regelen.",
      },
      {
        title: "Welke onderdelen horen erbij?",
        content:
          "Naast het model heb je hardware, software, toegangsbeheer, logging, updates, monitoring en afspraken over support nodig. On-premise AI is dus niet alleen een model installeren, maar een werkbare omgeving bouwen.",
      },
      {
        title: "Praktische nuance",
        content:
          "On-premise betekent niet dat nooit iets extern mag. Sommige organisaties combineren lokale verwerking met geselecteerde externe koppelingen. Belangrijk is dat je bewust kiest welk deel lokaal blijft en waar externe diensten wel of niet logisch zijn.",
      },
    ],
    links: [
      { label: "Local AI", slug: "wat-is-local-ai" },
      { label: "Edge AI", slug: "wat-is-edge-ai" },
      { label: "White-label hardware, AITJE software", slug: "white-label-hardware-aitje-software" },
    ],
  },
  {
    slug: "white-label-hardware-aitje-software",
    title: "White-label hardware, AITJE software",
    excerpt:
      "White-label hardware met AITJE software betekent dat AITJE passende hardware selecteert en daarop de softwarelaag, inrichting en AI-functionaliteit levert die bij de toepassing past.",
    ...knowledgeArticleImages["white-label-hardware-aitje-software"],
    readTime: "5 min",
    category: "Infrastructuur",
    sections: [
      {
        title: "Wat betekent white-label hardware?",
        content:
          "White-label hardware is bestaande of geselecteerde hardware die niet als eigen hardwareproduct vanaf nul wordt ontworpen, maar wordt gekozen omdat de specificaties passen bij de toepassing. AITJE gebruikt die basis om een praktische lokale AI-oplossing te leveren.",
      },
      {
        title: "Waar zit de waarde van AITJE?",
        content:
          "De waarde zit niet alleen in het apparaat, maar vooral in de combinatie van hardwarekeuze, software, configuratie, AI-functionaliteit, toegang en beheer. AITJE zorgt dat de oplossing bruikbaar wordt voor de organisatie en het proces waarvoor die bedoeld is.",
      },
      {
        title: "Waarom niet altijd eigen hardware bouwen?",
        content:
          "Hardware vanaf nul ontwikkelen is vaak traag, duur en onnodig. Voor veel AI-toepassingen is het slimmer om bewezen hardware te kiezen en de softwarelaag, inrichting en AI-workflow daarop goed te ontwerpen.",
      },
      {
        title: "Hoe past dit bij lokale AI?",
        content:
          "Lokale AI vraagt om hardware die voldoende krachtig, stabiel en passend is voor de taak. Door de hardware te kiezen op basis van het gebruik, kan een oplossing lokaal draaien zonder dat elke toepassing volledig afhankelijk wordt van externe platformen.",
      },
      {
        title: "Wat krijg je uiteindelijk?",
        content:
          "Het resultaat is geen losse doos met specs, maar een werkende AI-oplossing op gekozen hardware met AITJE software eromheen. Denk aan een assistent, agent, workflow, koppeling of lokale AI-toepassing.",
      },
    ],
    links: [
      { label: "Local AI", slug: "wat-is-local-ai" },
      { label: "On-premise AI", slug: "wat-is-on-premise-ai" },
      { label: "Workflow", slug: "wat-is-een-workflow" },
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

export const knowledgeArticles: KnowledgeArticle[] = articleDefinitions.map((article) => {
  const application = knowledgeApplications[article.slug];
  const words = [article.excerpt, ...article.sections.map((section) => section.content), application?.text ?? ""].join(" ").split(/\s+/).length;
  return {
    ...article,
    ...knowledgePhotography[article.slug],
    application,
    readTime: `${Math.max(1, Math.ceil(words / 190))} min`,
    lastUpdated: "2026-10-03",
  };
});
