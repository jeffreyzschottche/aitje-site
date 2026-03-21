import { cases as casesEn } from "@/data/cases.en";
import { cases as casesNl } from "@/data/cases";
import { hardwareCatalog as hardwareEn } from "@/data/hardwareCatalog.en";
import { hardwareCatalog as hardwareNl } from "@/data/hardwareCatalog";
import { knowledgeArticles as knowledgeEn } from "@/data/knowledgeArticles.en";
import { knowledgeArticles as knowledgeNl } from "@/data/knowledgeArticles";
import { softwareCatalog as softwareEn } from "@/data/softwareCatalog.en";
import { softwareCatalog as softwareNl } from "@/data/softwareCatalog";

type LocaleCode = "nl-NL" | "en-US";
type LocaleKey = "nl" | "en";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type StaticSeoEntry = {
  title: string;
  description: string;
  pageType?: string;
  image?: string;
};

type ResolvedSeoEntry = {
  title: string;
  description: string;
  path: string;
  locale: LocaleCode;
  localeKey: LocaleKey;
  image: string;
  pageType: string;
  breadcrumbs: BreadcrumbItem[];
  alternatePath: string;
  schema: Record<string, unknown>[];
};

const SITE_NAME = "AITJE";
const SITE_URL = "https://aitje.nl";
const DEFAULT_IMAGE = "/images/aitje-cubes.png";
const DEFAULT_NL_DESCRIPTION =
  "AITJE ontwikkelt lokale AI-oplossingen, software, hardware en maatwerk voor organisaties die grip willen houden op data, privacy en continuiteit.";
const DEFAULT_EN_DESCRIPTION =
  "AITJE builds local AI solutions, software, hardware and custom implementations for organizations that want control over data, privacy and continuity.";

const staticSeoEntries: Record<string, StaticSeoEntry> = {
  "/": {
    title: "AITJE | Lokale AI hardware, software en maatwerk",
    description:
      "Lokale AI-oplossingen, edge hardware, software en maatwerk voor organisaties die grip willen houden op data, privacy, API-kosten en continuiteit.",
    pageType: "WebSite",
  },
  "/diensten": {
    title: "Diensten | AI implementatie, strategie en maatwerk | AITJE",
    description:
      "Bekijk de AI-diensten van AITJE voor strategie, implementatie, integraties, lokale LLM's, RAG, agents en maatwerk software.",
    pageType: "Service",
  },
  "/faq": {
    title: "FAQ | Veelgestelde vragen over AITJE",
    description:
      "Antwoorden op veelgestelde vragen over AITJE, lokale AI, hardware, software, privacy, infrastructuur, maatwerk en support.",
    pageType: "FAQPage",
  },
  "/aitje-custom": {
    title: "AITJE Custom | AI maatwerkoplossingen",
    description:
      "AITJE Custom is bedoeld voor organisaties die een AI-oplossing nodig hebben buiten standaardsoftware of standaardhardware.",
    pageType: "Service",
  },
  "/roadmap": {
    title: "Roadmap | Waar AITJE aan bouwt",
    description:
      "Bekijk de roadmap van AITJE en zie aan welke AI-producten, hardware, software en toepassingen we werken.",
  },
  "/oplossingen": {
    title: "Oplossingen | AI-oplossingen voor organisaties | AITJE",
    description:
      "Ontdek AI-oplossingen van AITJE voor lokale assistenten, kennisbanken, automatisering, agents en organisatie-specifieke implementaties.",
    pageType: "CollectionPage",
  },
  "/aitje-pro": {
    title: "AITJE Pro | Doorlopende AI ondersteuning",
    description:
      "AITJE Pro biedt doorlopende begeleiding, onderhoud en uitbreiding voor organisaties die AI structureel willen inzetten.",
    pageType: "Service",
  },
  "/aitje": {
    title: "AITJE | Over het platform en de aanpak",
    description:
      "Lees meer over AITJE, onze visie op lokale AI, privacy, infrastructuur en de manier waarop we organisaties praktisch helpen.",
    pageType: "AboutPage",
  },
  "/contact": {
    title: "Contact | Praat met het team van AITJE",
    description:
      "Neem contact op met AITJE voor vragen over lokale AI, hardware, software, maatwerk, implementatie en samenwerking.",
    pageType: "ContactPage",
  },
  "/shop": {
    title: "Shop | AITJE",
    description:
      "Bekijk de shop van AITJE voor AI-producten, software, hardware en oplossingen die direct inzetbaar zijn.",
    pageType: "CollectionPage",
  },
  "/visie": {
    title: "Visie | Lokale AI, privacy en autonomie | AITJE",
    description:
      "De visie van AITJE op lokale AI, privacy, duurzame infrastructuur, autonomie en praktische inzet binnen organisaties.",
    pageType: "AboutPage",
  },
  "/academy": {
    title: "Academy | AI uitleg en begeleiding | AITJE",
    description:
      "AITJE Academy helpt teams en organisaties om AI beter te begrijpen, slimmer toe te passen en praktisch in te richten.",
    pageType: "EducationalOccupationalProgram",
  },
  "/producten": {
    title: "Producten | Software, hardware en toepassingen | AITJE",
    description:
      "Overzicht van AITJE producten: lokale AI-hardware, software, toepassingen en diensten die direct inzetbaar zijn binnen je organisatie.",
    pageType: "CollectionPage",
  },
  "/producten/hardware": {
    title: "Hardware | Lokale AI hardware van AITJE",
    description:
      "Bekijk de hardware-oplossingen van AITJE, waaronder lokale AI-systemen en maatwerk hardware voor organisaties.",
    pageType: "CollectionPage",
  },
  "/producten/software": {
    title: "Software | AI software en tools van AITJE",
    description:
      "Bekijk de software-oplossingen van AITJE, van lokale clients en kennisbanken tot AI-tools, chats en maatwerk software.",
    pageType: "CollectionPage",
  },
  "/kenniscentrum": {
    title: "Kenniscentrum | Begrippen en jargon uitgelegd | AITJE",
    description:
      "Lees artikelen over AI-termen, RAG, LLM's, context, embeddings, edge AI en andere technische begrippen in het kenniscentrum van AITJE.",
    pageType: "CollectionPage",
  },
  "/cases": {
    title: "Cases | Praktische AI-cases van AITJE",
    description:
      "Bekijk cases van AITJE met praktische AI-toepassingen, lokale automatisering, RAG, voice agents en maatwerk workflows.",
    pageType: "CollectionPage",
  },
  "/en": {
    title: "AITJE | Local AI hardware, software and custom work",
    description:
      "Local AI solutions, edge hardware, software and custom work for organizations that want control over data, privacy, API costs and continuity.",
    pageType: "WebSite",
  },
  "/en/diensten": {
    title: "Services | AI implementation, strategy and custom work | AITJE",
    description:
      "Explore AITJE services for AI strategy, implementation, integrations, local LLMs, RAG, agents and custom software.",
    pageType: "Service",
  },
  "/en/faq": {
    title: "FAQ | Frequently asked questions about AITJE",
    description:
      "Answers to frequently asked questions about AITJE, local AI, hardware, software, privacy, infrastructure, custom work and support.",
    pageType: "FAQPage",
  },
  "/en/aitje-custom": {
    title: "AITJE Custom | Custom AI solutions",
    description:
      "AITJE Custom is built for organizations that need an AI solution beyond standard software or standard hardware.",
    pageType: "Service",
  },
  "/en/roadmap": {
    title: "Roadmap | What AITJE is building",
    description:
      "See the AITJE roadmap and discover which AI products, hardware, software and applications are currently in development.",
  },
  "/en/oplossingen": {
    title: "Solutions | AI solutions for organizations | AITJE",
    description:
      "Discover AITJE solutions for local assistants, knowledge bases, automation, agents and organization-specific implementations.",
    pageType: "CollectionPage",
  },
  "/en/aitje-pro": {
    title: "AITJE Pro | Ongoing AI support",
    description:
      "AITJE Pro offers ongoing guidance, maintenance and expansion for organizations that want to use AI structurally.",
    pageType: "Service",
  },
  "/en/aitje": {
    title: "AITJE | Platform and approach",
    description:
      "Learn more about AITJE, our view on local AI, privacy, infrastructure and how we help organizations in practice.",
    pageType: "AboutPage",
  },
  "/en/contact": {
    title: "Contact | Talk to the AITJE team",
    description:
      "Contact AITJE about local AI, hardware, software, custom work, implementation and collaboration.",
    pageType: "ContactPage",
  },
  "/en/shop": {
    title: "Shop | AITJE",
    description:
      "Browse the AITJE shop for AI products, software, hardware and solutions that are ready to use.",
    pageType: "CollectionPage",
  },
  "/en/visie": {
    title: "Vision | Local AI, privacy and autonomy | AITJE",
    description:
      "The AITJE view on local AI, privacy, sustainable infrastructure, autonomy and practical adoption inside organizations.",
    pageType: "AboutPage",
  },
  "/en/academy": {
    title: "Academy | AI training and guidance | AITJE",
    description:
      "AITJE Academy helps teams and organizations understand AI better, apply it more effectively and set it up in practice.",
    pageType: "EducationalOccupationalProgram",
  },
  "/en/producten": {
    title: "Products | Software, hardware and applications | AITJE",
    description:
      "Overview of AITJE products: local AI hardware, software, applications and services that are ready to use inside your organization.",
    pageType: "CollectionPage",
  },
  "/en/producten/hardware": {
    title: "Hardware | Local AI hardware by AITJE",
    description:
      "Explore AITJE hardware solutions, including local AI systems and custom hardware for organizations.",
    pageType: "CollectionPage",
  },
  "/en/producten/software": {
    title: "Software | AI software and tools by AITJE",
    description:
      "Explore AITJE software solutions, from local clients and knowledge bases to AI tools, chats and custom software.",
    pageType: "CollectionPage",
  },
  "/en/kenniscentrum": {
    title: "Knowledge Center | AI terms and jargon explained | AITJE",
    description:
      "Read articles about AI terms, RAG, LLMs, context, embeddings, edge AI and other technical topics in the AITJE knowledge center.",
    pageType: "CollectionPage",
  },
  "/en/cases": {
    title: "Cases | Practical AI cases by AITJE",
    description:
      "View AITJE cases with practical AI applications, local automation, RAG, voice agents and custom workflows.",
    pageType: "CollectionPage",
  },
};

const breadcrumbLabels: Record<string, string> = {
  diensten: "Diensten",
  faq: "FAQ",
  "aitje-custom": "AITJE Custom",
  roadmap: "Roadmap",
  oplossingen: "Oplossingen",
  "aitje-pro": "AITJE Pro",
  aitje: "AITJE",
  contact: "Contact",
  shop: "Shop",
  visie: "Visie",
  academy: "Academy",
  producten: "Producten",
  hardware: "Hardware",
  software: "Software",
  kenniscentrum: "Kenniscentrum",
  cases: "Cases",
};

const faqNl = [
  {
    question: "Wat is AITJE Assistent precies?",
    answer:
      "AITJE Assistent is een mini computer die geoptimaliseerd is met ons eigen OS. Je krijgt een lokale LLM, een kennisbank om je documenten in de LLM te gebruiken, offline maps en een AI powered kennis systeem dat ook zonder internet bereikbaar blijft.",
  },
  {
    question: "Wat is AITJE Notulist?",
    answer:
      "AITJE Notulist is zowel als hardware als software te bestellen. Het neemt gesprekken op en laat je instellen hoe je samenvattingen en output wilt ontvangen.",
  },
  {
    question: "Doet AITJE ook aan custom build hardware?",
    answer:
      "Ja. En als we je niet volledig kunnen helpen binnen jouw specifieke expertise, hebben we een stabiel netwerk van specialisten waarmee we het plan kunnen afronden.",
  },
  {
    question: "Biedt AITJE nog meer hardware aan?",
    answer:
      "Op dit moment nog niet. Houd onze roadmappagina in de gaten voor nieuwe hardwareontwikkelingen.",
  },
  {
    question: "Welke backend-talen gebruiken jullie voornamelijk?",
    answer:
      "Voor backend werken we vooral met Python, .NET, PHP, Laravel en Node.js.",
  },
  {
    question: "Welke frameworks en tools gebruiken jullie?",
    answer:
      "Afhankelijk van de oplossing gebruiken we voor frontend en interfaces onder andere Nuxt 3, en voor backend en services bijvoorbeeld FastAPI, Laravel, Blazor, PySide en Qdrant.",
  },
  {
    question: "Kunnen jullie koppelen met bestaande systemen?",
    answer:
      "Ja. We kunnen koppelen met veelgebruikte tools en CMS-omgevingen, zolang de integratie technisch en organisatorisch verantwoord is.",
  },
  {
    question: "Is alles lokaal of ook hybride mogelijk?",
    answer:
      "Beide. We ontwerpen lokaal waar het kan en hybride waar het nodig is, met behoud van grip op data, kosten en continuiteit.",
  },
  {
    question: "Hoe runnen jullie de LLM?",
    answer:
      "In de meeste gevallen gebruiken we Ollama. Als het nodig is, kunnen we ook andere inference engines inzetten, zoals vLLM.",
  },
  {
    question: "Welke modellen gebruiken jullie?",
    answer:
      "We hebben geen vaste voorkeur: modellen kunnen worden aangepast op vraag en geüpdatet wanneer dat waarde toevoegt. We houden je daar actief van op de hoogte. Voor algemene use cases werken Gemma-modellen vaak sterk.",
  },
  {
    question: "Waar draaien jullie servers?",
    answer:
      "Servers staan in Nederland of Duitsland, nooit buiten Europa. Op aanvraag kunnen we ook andere omgevingen inrichten als je een cloudoplossing wilt.",
  },
  {
    question: "Waar blijft mijn data?",
    answer:
      "Data blijft in Nederland of Europa. In veel gevallen kunnen we zelfs een volledig lokale oplossing bouwen binnen je eigen omgeving.",
  },
  {
    question: "Hoe embedden jullie data in de kennisbank voor AITJE Assistent?",
    answer:
      "We verwerken en embedden data op de server en synchroniseren die naar een prive versiebeheeraccount voor jouw organisatie. Vanaf daar kun je op de Assistent syncen met de live omgeving. Als verkeerde data is toegevoegd, kunnen we via versiebeheer ook terugzetten en back-ups maken.",
  },
  {
    question: "Kan AITJE Assistent lokaal doorwerken zonder internet?",
    answer:
      "Ja. Data wordt lokaal op je device opgeslagen zolang dat nodig is. Zodra vector embeddings en chunks beschikbaar zijn, kan de lokale of private LLM antwoorden en samenvattingen blijven leveren zonder internet.",
  },
  {
    question: "Kan AITJE Notulist lokaal doorwerken zonder internet?",
    answer:
      "Ja. Opnames en verwerking kunnen lokaal plaatsvinden, waarna de samenvatting via de lokale of private omgeving wordt teruggegeven. Zo blijf je ook bij internetuitval werkbaar.",
  },
  {
    question: "Hoe helpt lokale AI het milieu?",
    answer:
      "AITJE Assistent & Notulist verwerken de gegevens lokaal, waardoor minder continue calls naar externe datacenters nodig zijn. Dat beperkt energiegebruik en koelwaterverbruik in grootschalige cloudinfrastructuur.",
  },
  {
    question: "Is lokaal altijd duurzamer?",
    answer: "Ja, dit is de focus van AITJE.",
  },
  {
    question: "Wat is jullie uitgangspunt?",
    answer:
      "Lokaal waar het kan, extern waar het nodig is. Extern doen we alleen op veilige plekken met betrouwbare partners en zonder afhankelijk te zijn van 1 service.",
  },
  {
    question: "Welke diensten bied je aan?",
    answer:
      "We denken strategie met je uit om zo goedkoop en stabiel mogelijk te automatiseren met AI. We leveren zowel technische implementatie als doorlopende begeleiding.",
  },
  {
    question: "Kunnen jullie AI-strategie met ons uitdenken?",
    answer:
      "Ja. We helpen met keuzes in infrastructuur, tooling, processen en prioriteiten, zodat AI past bij je organisatie in plaats van andersom.",
  },
  {
    question: "Kunnen jullie een maatwerk agent voor ons maken?",
    answer:
      "Ja. We bouwen een persoonlijke agent op maat voor jouw processen, inclusief koppelingen met systemen, beveiliging en beheer.",
  },
  {
    question: "Kunnen jullie een RAG chat bouwen?",
    answer:
      "Ja. We kunnen een RAG-chat opzetten die werkt met jouw documenten en kennisbank, zodat antwoorden contextueel en bruikbaar zijn.",
  },
  {
    question: "Bouwen jullie AI-workflows met of zonder human-in-the-loop?",
    answer:
      "Ja. We ontwerpen zowel volledig geautomatiseerde workflows als varianten met menselijke controle en goedkeuringsstappen.",
  },
  {
    question: "Bouwen jullie ook software-oplossingen op maat?",
    answer:
      "Ja. We bouwen maatwerk webapplicaties en mobiele applicaties, inclusief Android en iOS waar nodig.",
  },
  {
    question: "Kunnen jullie een lokale LLM op ons netwerk installeren?",
    answer:
      "Ja. We installeren en configureren lokale LLM-oplossingen op je eigen netwerk, inclusief beheer, beveiliging en koppeling met je kennisbronnen.",
  },
  {
    question: "Wat houdt het SLA in?",
    answer:
      "We spreken altijd een SLA af. Daarin staan de afspraken over onderhoud, ondersteuning en uitbreidingen.",
  },
  {
    question: "Welke software heeft AITJE allemaal gemaakt?",
    answer:
      "Bekijk de pagina producten/software voor al onze algemene software-oplossingen.",
  },
  {
    question: "Voor wie is AITJE bedoeld?",
    answer:
      "MKB-bedrijven, gemeentes, scholen, bibliotheken en artsen. Organisaties die met gevoelige gegevens werken en dit liever niet delen in de cloud of met andere landen.",
  },
  {
    question: "Kan ik jullie inhuren zonder dienstenpakket?",
    answer:
      "Tuurlijk. We kunnen een maatwerk lokale edge AI-oplossing voor je creëren. We vinden het ook geen probleem om dit over te dragen aan je huidige webbouwer of applicatiebeheerder zodat die het kan onderhouden.",
  },
  {
    question: "Waar beginnen jullie meestal mee?",
    answer:
      "We beginnen meestal met een goed gesprek om te kijken waar AI echt een verschil kan maken in jouw organisatie.",
  },
  {
    question: "Wat als er een internetstoring is bij AITJE Assistent?",
    answer:
      "AITJE Assistent merkt daar in de basis weinig van. Synchroniseren is dan tijdelijk lastiger, omdat gechunkte vector-embedding data uit versiebeheer wordt opgehaald. De lokale gegevens en lokale LLM-functionaliteit blijven wel beschikbaar.",
  },
  {
    question:
      "Kunnen meerdere mensen op het netwerk AITJE Assistent API gebruiken?",
    answer:
      "Ja. Je maakt accounts aan en installeert de mobiele of desktopapplicatie. Daarna kan die gebruiker via het netwerk gebruikmaken van de lokale LLM en API.",
  },
  {
    question: "Hoe beperken jullie dat agents een eigen wil krijgen?",
    answer:
      "Dat doen we met constrained prompting, guardrailing en sandboxing. Guardrails zetten duidelijke grenzen op acties, toegestane tools, output en rechten. Sandboxing zorgt dat agents in een afgeschermde omgeving draaien met beperkte toegang tot systemen en data.",
  },
  {
    question: "Wat als er een storing is?",
    answer:
      "We bouwen cloudoplossingen met plan B en plan C, plus tijdige monitoring en meldingen. Onze systemen zijn ingericht voor stabiele inzet binnen organisaties, niet voor een wereldwijd publiek. Dat maakt ze beter schaalbaar en makkelijker in de lucht te houden.",
  },
  {
    question: "Deelt AITJE Notulist de gesprekken?",
    answer:
      "AITJE Notulist neemt gesprekken op en deelt ze naar jouw eigen omgeving in de applicatie. Wat je er daarna mee doet, bepaal je zelf.",
  },
  {
    question: "Hoe voorkomt AITJE afhankelijkheid van externe platformen?",
    answer:
      "Door meerdere keuzes open te houden, geen single point of failure te bouwen en zoveel mogelijk lokaal af te handelen of op servers in beheer van AITJE of van jullie zelf. Zo beperk je externe invloeden maximaal.",
  },
  {
    question: "Waar leer ik meer over AI-termen en onderwerpen?",
    answer:
      "In ons kenniscentrum vind je artikelen over termen, technieken en toepassingen. Denk aan LLM's, RAG, context en lokale AI.",
  },
  {
    question: "Hebben jullie prompts & guides om meer uit LLM te halen?",
    answer:
      "Ja, die hebben we. Een onderdeel van AITJE is PromptPaleis: de Nederlandse marktplaats met pre-made prompts en guides om meer uit AI te halen.",
  },
];

const faqEn = [
  {
    question: "What exactly is AITJE Assistant?",
    answer:
      "AITJE Assistant is a mini computer optimized with our own OS. You get a local LLM, a knowledge base to use your documents in the LLM, offline maps and an AI powered knowledge system that remains accessible even without internet.",
  },
  {
    question: "What is AITJE Notetaker?",
    answer:
      "AITJE Notetaker can be ordered as both hardware and software. It records conversations and lets you set up how you want to receive summaries and output.",
  },
  {
    question: "Does AITJE also do custom build hardware?",
    answer:
      "Yes. And if we cannot help you fully within your specific expertise, we have a stable network of specialists with whom we can complete the plan.",
  },
  {
    question: "Does AITJE offer any other hardware?",
    answer:
      "Not at this time. Keep an eye on our roadmap page for new hardware developments.",
  },
  {
    question: "What backend languages do you primarily use?",
    answer:
      "For backend, we work mainly with Python, .NET, PHP, Laravel and Node.js.",
  },
  {
    question: "What frameworks and tools do you use?",
    answer:
      "Depending on the solution, for frontend and interfaces we use Nuxt 3, among others, and for backend and services we use FastAPI, Laravel, Blazor, PySide and Qdrant, for example.",
  },
  {
    question: "Can you interface with existing systems?",
    answer:
      "Yes. We can link with commonly used tools and CMS environments, as long as the integration is technically and organizationally sound.",
  },
  {
    question: "Is everything local or also hybrid possible?",
    answer:
      "Both. We design locally where we can and hybrid where we need to, while maintaining a grip on data, cost and continuity.",
  },
  {
    question: "How do you run the LLM?",
    answer:
      "In most cases, we use Ollama. If necessary, we can also use other inference engines, such as vLLM.",
  },
  {
    question: "What models do you guys use?",
    answer:
      "We have no set preference: models can be changed on demand and updated when it adds value. We actively keep you informed about that. For general use cases, Gemma models often work strongly.",
  },
  {
    question: "Where are your servers running?",
    answer:
      "Servers are located in the Netherlands or Germany, never outside of Europe. On request, we can also set up other environments if you want a cloud solution.",
  },
  {
    question: "Where is my data?",
    answer:
      "Data stays in the Netherlands or Europe. In many cases, we can even build a completely local solution within your own environment.",
  },
  {
    question: "How do you embed data in the knowledge base for AITJE Assistant?",
    answer:
      "We process and embed data on the server and sync it to a private version control account for your organization. From there, you can sync to the live environment on the Assistant. If wrong data is added, we can also restore and backup via version control.",
  },
  {
    question: "Can AITJE Assistant continue to work locally without the Internet?",
    answer:
      "Yes. Data is stored locally on your device for as long as needed. Once vector embeddings and chunks are available, the local or private LLM can continue to provide answers and summaries without the Internet.",
  },
  {
    question: "Can AITJE Notepad continue to work locally without the Internet?",
    answer:
      "Yes. Recording and processing can be done locally, and then the summary returned via the local or private environment. This keeps you workable even in the event of an Internet outage.",
  },
  {
    question: "How is local AI helping the environment?",
    answer:
      "AITJE Assistant & Notetaker process data locally, requiring fewer continuous calls to remote data centers. This reduces energy use and cooling water consumption in large-scale cloud infrastructure.",
  },
  {
    question: "Is local always more sustainable?",
    answer: "Yes, this is the focus of AITJE.",
  },
  {
    question: "What is your starting point?",
    answer:
      "Local where we can, external where we need to. External we do only in safe places with reliable partners and without depending on 1 service.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We think strategy with you to automate with AI as cheaply and stably as possible. We provide both technical implementation and ongoing guidance.",
  },
  {
    question: "Can you figure out AI strategy with us?",
    answer:
      "Yes. We help with choices in infrastructure, tooling, processes and priorities so that AI fits your organization rather than the other way around.",
  },
  {
    question: "Can you make a custom agent for us?",
    answer:
      "Yes. We build a personal agent tailored to your processes, including links to systems, security and management.",
  },
  {
    question: "Can you guys build a RAG chat?",
    answer:
      "Yes. We can set up a RAG chat that works with your documents and knowledge base so that answers are contextual and actionable.",
  },
  {
    question: "Do you build AI workflows with or without human-in-the-loop?",
    answer:
      "Yes. We design both fully automated workflows and variants with human control and approval steps.",
  },
  {
    question: "Do you also build custom software solutions?",
    answer:
      "Yes. We build custom web applications and mobile applications, including Android and iOS where appropriate.",
  },
  {
    question: "Can you install a local LLM on our network?",
    answer:
      "Yes. We install and configure local LLM solutions on your own network, including management, security and linkage to your knowledge resources.",
  },
  {
    question: "What does the SLA entail?",
    answer:
      "We always agree on an SLA. This contains agreements on maintenance, support and extensions.",
  },
  {
    question: "What software did AITJE create?",
    answer:
      "See the products/software page for all of our general software solutions.",
  },
  {
    question: "Who is AITJE intended for?",
    answer:
      "SMEs, municipalities, schools, libraries and doctors. Organizations that work with sensitive data and prefer not to share it in the cloud or with other countries.",
  },
  {
    question: "Can I hire you without a service package?",
    answer:
      "Sure. We can create a custom local edge AI solution for you. We also don't mind handing this over to your current web builder or application administrator so they can maintain it.",
  },
  {
    question: "What do you usually start with?",
    answer:
      "We usually start with a good conversation to see where AI can really make a difference in your organization.",
  },
  {
    question: "What if there is an internet outage at AITJE Assistant?",
    answer:
      "AITJE Assistant does not notice much of this in basic terms. Synchronization is then temporarily more difficult, as chunked vector-embedding data is retrieved from version control. However, local data and local LLM functionality remain available.",
  },
  {
    question:
      "Can multiple people on the network use AITJE Assistant API?",
    answer:
      "Yes. You create accounts and install the mobile or desktop application. Then that user can use the local LLM and API over the network.",
  },
  {
    question: "How do you limit agents getting a will of their own?",
    answer:
      "We do that with constrained prompting, guardrailing and sandboxing. Guardrails set clear boundaries on actions, allowed tools, output and permissions. Sandboxing ensures that agents run in a protected environment with limited access to systems and data.",
  },
  {
    question: "What if there is a malfunction?",
    answer:
      "We build cloud solutions with plan B and plan C, plus timely monitoring and notifications. Our systems are set up for stable deployment within organizations, not for a global audience. That makes them more scalable and easier to keep in the air.",
  },
  {
    question: "Does AITJE Note-taker share the conversations?",
    answer:
      "AITJE Assistant records conversations and shares them to your own environment in the application. What you do with them afterwards is up to you.",
  },
  {
    question: "How does AITJE avoid dependence on external platforms?",
    answer:
      "By keeping multiple choices open, not building a single point of failure and handling as much as possible locally or on servers managed by AITJE or yourselves. This way you limit external influences to the maximum.",
  },
  {
    question: "Where do I learn more about AI terms and topics?",
    answer:
      "In our knowledge center, you will find articles on terms, techniques and applications. Think LLMs, RAG, context and local AI.",
  },
  {
    question: "Do you have prompts & guides to get more out of LLM?",
    answer:
      "Yes, we have. Part of AITJE is PromptPaleis: the Dutch marketplace of pre-made prompts and guides to get more out of AI.",
  },
];

function isEnglishPath(path: string) {
  return path === "/en" || path.startsWith("/en/");
}

function normalizePath(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

function getLocaleInfo(path: string) {
  if (isEnglishPath(path)) {
    return {
      locale: "en-US" as const,
      localeKey: "en" as const,
      homePath: "/en",
      defaultDescription: DEFAULT_EN_DESCRIPTION,
    };
  }

  return {
    locale: "nl-NL" as const,
    localeKey: "nl" as const,
    homePath: "/",
    defaultDescription: DEFAULT_NL_DESCRIPTION,
  };
}

function toAbsoluteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function stripEnPrefix(path: string) {
  if (path === "/en") {
    return "/";
  }

  return path.startsWith("/en/") ? path.slice(3) : path;
}

function createAlternatePath(path: string) {
  const normalized = normalizePath(path);
  return isEnglishPath(normalized)
    ? stripEnPrefix(normalized)
    : normalized === "/"
      ? "/en"
      : `/en${normalized}`;
}

function createBreadcrumbs(path: string, localeKey: LocaleKey): BreadcrumbItem[] {
  const normalized = normalizePath(path);
  const homePath = localeKey === "en" ? "/en" : "/";
  const homeLabel = "Home";
  const stripped = stripEnPrefix(normalized);

  if (stripped === "/") {
    return [{ name: homeLabel, path: homePath }];
  }

  const segments = stripped.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: homeLabel, path: homePath }];

  segments.forEach((segment, index) => {
    const partial = `/${segments.slice(0, index + 1).join("/")}`;
    const localizedPath =
      localeKey === "en" ? (partial === "/" ? "/en" : `/en${partial}`) : partial;

    breadcrumbs.push({
      name: breadcrumbLabels[segment] ?? decodeURIComponent(segment),
      path: localizedPath,
    });
  });

  return breadcrumbs;
}

function createOrganizationSchema(locale: LocaleCode) {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: "info@aitje.nl",
    telephone: "+31201234567",
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl("/images/aitje-logo.png"),
    },
    areaServed: "NL",
    knowsAbout: [
      "Local AI",
      "Edge AI",
      "RAG",
      "AI Agents",
      "Knowledge Bases",
      "Custom Software",
    ],
    inLanguage: locale,
  };
}

function createWebsiteSchema(locale: LocaleCode) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: locale,
  };
}

function createBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

function createWebPageSchema(entry: ResolvedSeoEntry) {
  return {
    "@type": entry.pageType,
    "@id": `${toAbsoluteUrl(entry.path)}#webpage`,
    url: toAbsoluteUrl(entry.path),
    name: entry.title,
    description: entry.description,
    inLanguage: entry.locale,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: entry.image,
    },
  };
}

function createItemListSchema(
  entry: ResolvedSeoEntry,
  name: string,
  items: { title: string; path: string }[],
) {
  return {
    "@type": "ItemList",
    name,
    url: toAbsoluteUrl(entry.path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: toAbsoluteUrl(item.path),
    })),
  };
}

function createFaqSchema(
  entry: ResolvedSeoEntry,
  items: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${toAbsoluteUrl(entry.path)}#faq`,
    url: toAbsoluteUrl(entry.path),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function createContactSchema(entry: ResolvedSeoEntry) {
  return {
    "@type": "ContactPage",
    "@id": `${toAbsoluteUrl(entry.path)}#contact`,
    url: toAbsoluteUrl(entry.path),
    name: entry.title,
    description: entry.description,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@aitje.nl",
          telephone: "+31201234567",
          availableLanguage: ["nl", "en"],
        },
      ],
    },
  };
}

function createServiceSchema(entry: ResolvedSeoEntry) {
  return {
    "@type": "Service",
    name: entry.title,
    description: entry.description,
    url: toAbsoluteUrl(entry.path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "NL",
  };
}

function resolveStaticSchema(entry: ResolvedSeoEntry) {
  const localeKey = entry.localeKey;
  const faqItems = localeKey === "en" ? faqEn : faqNl;
  const knowledge = localeKey === "en" ? knowledgeEn : knowledgeNl;
  const software = localeKey === "en" ? softwareEn : softwareNl;
  const hardware = localeKey === "en" ? hardwareEn : hardwareNl;
  const caseItems = localeKey === "en" ? casesEn : casesNl;

  switch (entry.path) {
    case "/faq":
    case "/en/faq":
      return [createFaqSchema(entry, faqItems)];
    case "/contact":
    case "/en/contact":
      return [createContactSchema(entry)];
    case "/diensten":
    case "/en/diensten":
    case "/aitje-custom":
    case "/en/aitje-custom":
    case "/aitje-pro":
    case "/en/aitje-pro":
      return [createServiceSchema(entry)];
    case "/producten":
    case "/en/producten":
      return [
        createItemListSchema(entry, entry.title, [
          {
            title: localeKey === "en" ? "Hardware" : "Hardware",
            path: localeKey === "en" ? "/en/producten/hardware" : "/producten/hardware",
          },
          {
            title: localeKey === "en" ? "Software" : "Software",
            path: localeKey === "en" ? "/en/producten/software" : "/producten/software",
          },
          {
            title: localeKey === "en" ? "Services" : "Diensten",
            path: localeKey === "en" ? "/en/diensten" : "/diensten",
          },
        ]),
      ];
    case "/producten/hardware":
    case "/en/producten/hardware":
      return [
        createItemListSchema(
          entry,
          entry.title,
          hardware.map((item) => ({
            title: item.title,
            path:
              localeKey === "en"
                ? `/en/producten/hardware/${item.slug}`
                : `/producten/hardware/${item.slug}`,
          })),
        ),
      ];
    case "/producten/software":
    case "/en/producten/software":
      return [
        createItemListSchema(
          entry,
          entry.title,
          software.map((item) => ({
            title: item.title,
            path:
              localeKey === "en"
                ? `/en/producten/software/${item.slug}`
                : `/producten/software/${item.slug}`,
          })),
        ),
      ];
    case "/kenniscentrum":
    case "/en/kenniscentrum":
      return [
        createItemListSchema(
          entry,
          entry.title,
          knowledge.map((item) => ({
            title: item.title,
            path:
              localeKey === "en"
                ? `/en/kenniscentrum/${item.slug}`
                : `/kenniscentrum/${item.slug}`,
          })),
        ),
      ];
    case "/cases":
    case "/en/cases":
      return [
        createItemListSchema(
          entry,
          entry.title,
          caseItems.map((item) => ({
            title: item.title,
            path: localeKey === "en" ? `/en/cases/${item.slug}` : `/cases/${item.slug}`,
          })),
        ),
      ];
    default:
      return [];
  }
}

function resolveDynamicSeo(path: string): ResolvedSeoEntry | null {
  const normalized = normalizePath(path);
  const localeInfo = getLocaleInfo(normalized);
  const localeKey = localeInfo.localeKey;

  const softwarePrefix =
    localeKey === "en" ? "/en/producten/software/" : "/producten/software/";
  const hardwarePrefix =
    localeKey === "en" ? "/en/producten/hardware/" : "/producten/hardware/";
  const knowledgePrefix =
    localeKey === "en" ? "/en/kenniscentrum/" : "/kenniscentrum/";
  const casesPrefix = localeKey === "en" ? "/en/cases/" : "/cases/";

  if (normalized.startsWith(softwarePrefix)) {
    const slug = normalized.slice(softwarePrefix.length);
    const item = (localeKey === "en" ? softwareEn : softwareNl).find(
      (entry) => entry.slug === slug,
    );

    if (!item) {
      return null;
    }

    const entry: ResolvedSeoEntry = {
      title: `${item.title} | Software | ${SITE_NAME}`,
      description: item.shortDescription,
      path: normalized,
      locale: localeInfo.locale,
      localeKey,
      image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
      pageType: "WebPage",
      breadcrumbs: createBreadcrumbs(normalized, localeKey),
      alternatePath: createAlternatePath(normalized),
      schema: [
        {
          "@type": "SoftwareApplication",
          name: item.title,
          description: item.shortDescription,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Local Network, Edge Device",
          url: toAbsoluteUrl(normalized),
          image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      ],
    };

    return entry;
  }

  if (normalized.startsWith(hardwarePrefix)) {
    const slug = normalized.slice(hardwarePrefix.length);
    const item = (localeKey === "en" ? hardwareEn : hardwareNl).find(
      (entry) => entry.slug === slug,
    );

    if (!item) {
      return null;
    }

    const entry: ResolvedSeoEntry = {
      title: `${item.title} | Hardware | ${SITE_NAME}`,
      description: item.shortDescription,
      path: normalized,
      locale: localeInfo.locale,
      localeKey,
      image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
      pageType: "WebPage",
      breadcrumbs: createBreadcrumbs(normalized, localeKey),
      alternatePath: createAlternatePath(normalized),
      schema: [
        {
          "@type": "Product",
          name: item.title,
          description: item.shortDescription,
          image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
          brand: {
            "@type": "Brand",
            name: SITE_NAME,
          },
          manufacturer: { "@id": `${SITE_URL}/#organization` },
          url: toAbsoluteUrl(normalized),
          category: "AI Hardware",
        },
      ],
    };

    return entry;
  }

  if (normalized.startsWith(knowledgePrefix)) {
    const slug = normalized.slice(knowledgePrefix.length);
    const item = (localeKey === "en" ? knowledgeEn : knowledgeNl).find(
      (entry) => entry.slug === slug,
    );

    if (!item) {
      return null;
    }

    const entry: ResolvedSeoEntry = {
      title: `${item.title} | Kenniscentrum | ${SITE_NAME}`,
      description: item.excerpt,
      path: normalized,
      locale: localeInfo.locale,
      localeKey,
      image: toAbsoluteUrl(item.thumbnail || DEFAULT_IMAGE),
      pageType: "Article",
      breadcrumbs: createBreadcrumbs(normalized, localeKey),
      alternatePath: createAlternatePath(normalized),
      schema: [
        {
          "@type": "TechArticle",
          headline: item.title,
          description: item.excerpt,
          image: toAbsoluteUrl(item.thumbnail || DEFAULT_IMAGE),
          articleSection: item.category,
          timeRequired: item.readTime,
          inLanguage: localeInfo.locale,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          url: toAbsoluteUrl(normalized),
        },
      ],
    };

    return entry;
  }

  if (normalized.startsWith(casesPrefix)) {
    const slug = normalized.slice(casesPrefix.length);
    const item = (localeKey === "en" ? casesEn : casesNl).find(
      (entry) => entry.slug === slug,
    );

    if (!item) {
      return null;
    }

    const entry: ResolvedSeoEntry = {
      title: `${item.title} | Case | ${SITE_NAME}`,
      description: item.summary,
      path: normalized,
      locale: localeInfo.locale,
      localeKey,
      image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
      pageType: "Article",
      breadcrumbs: createBreadcrumbs(normalized, localeKey),
      alternatePath: createAlternatePath(normalized),
      schema: [
        {
          "@type": "Article",
          headline: item.title,
          description: item.summary,
          image: toAbsoluteUrl(item.image || DEFAULT_IMAGE),
          about: item.solutions,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          url: toAbsoluteUrl(normalized),
        },
      ],
    };

    return entry;
  }

  return null;
}

export function resolveSeoEntry(path: string): ResolvedSeoEntry {
  const normalized = normalizePath(path);
  const dynamicEntry = resolveDynamicSeo(normalized);

  if (dynamicEntry) {
    return dynamicEntry;
  }

  const localeInfo = getLocaleInfo(normalized);
  const staticEntry = staticSeoEntries[normalized];
  const defaultPath = localeInfo.localeKey === "en" ? "/en" : "/";
  const fallback = staticEntry ?? staticSeoEntries[defaultPath];

  const entry: ResolvedSeoEntry = {
    title: fallback?.title ?? `${SITE_NAME}`,
    description: fallback?.description ?? localeInfo.defaultDescription,
    path: normalized,
    locale: localeInfo.locale,
    localeKey: localeInfo.localeKey,
    image: toAbsoluteUrl(fallback?.image ?? DEFAULT_IMAGE),
    pageType: fallback?.pageType ?? "WebPage",
    breadcrumbs: createBreadcrumbs(normalized, localeInfo.localeKey),
    alternatePath: createAlternatePath(normalized),
    schema: [],
  };

  entry.schema = resolveStaticSchema(entry);
  return entry;
}

export function buildSeoGraph(entry: ResolvedSeoEntry) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationSchema(entry.locale),
      createWebsiteSchema(entry.locale),
      createBreadcrumbSchema(entry.breadcrumbs),
      createWebPageSchema(entry),
      ...entry.schema,
    ],
  };
}

export function buildAlternateLinks(entry: ResolvedSeoEntry) {
  return [
    {
      rel: "canonical",
      href: toAbsoluteUrl(entry.path),
    },
    {
      rel: "alternate",
      hreflang: "nl-NL",
      href: toAbsoluteUrl(isEnglishPath(entry.path) ? entry.alternatePath : entry.path),
    },
    {
      rel: "alternate",
      hreflang: "en-US",
      href: toAbsoluteUrl(isEnglishPath(entry.path) ? entry.path : entry.alternatePath),
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: toAbsoluteUrl("/"),
    },
  ];
}
