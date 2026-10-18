// Custom starts with the customer's task; these are possibilities, not fixed packages.
export const customPossibilities = [
  {
    title: "Minder handwerk. Meer gedaan.",
    text: "Mails verwerken, offertes voorbereiden, gegevens overnemen of een werkorder klaarzetten. We bouwen een workflow die de stappen verbindt en om jouw akkoord vraagt waar dat nodig is.",
    examples: ["Administratie", "Sales & CRM", "Planning"],
    icon: "workflow",
    image: "/img/redesign/advice-cutout.webp",
    tone: "yellow",
  },
  {
    title: "Een eigen app voor jouw werk.",
    text: "Een kleine toepassing voor telefoon, desktop of tablet. Een foto of gesproken vraag omzetten in een actie, een handige interne tool of een dashboard dat je team direct kan gebruiken.",
    examples: ["Telefoon & tablet", "Desktop", "Webapp"],
    icon: "phone",
    image: "/img/redesign/cases-workflow-workbench.webp",
    tone: "light",
  },
  {
    title: "AI die jouw organisatie kent.",
    text: "Een assistent die je documenten doorzoekt, gesprekken samenvat of taken voorbereidt. Met de juiste kennis, toegangsrechten en koppelingen naar de systemen die je al gebruikt.",
    examples: ["Eigen kennisbank", "Spraak", "AI-agents"],
    icon: "bot",
    image: "/img/redesign/support-cutout.webp",
    tone: "light",
  },
  {
    title: "Maak het zichtbaar. In 3D of VR.",
    text: "Interactieve productmodellen, visuele inzage in je gegevens, een digitaal karakter of een VR-ervaring voor uitleg en training. We onderzoeken hoe AI de ervaring nuttiger maakt.",
    examples: ["3D & visualisatie", "Digitale karakters", "VR"],
    icon: "box",
    image: "/img/redesign/raven-scene-cutout.webp",
    tone: "light",
  },
  {
    title: "Laat je bestaande tools samenwerken.",
    text: "Verbind je website, mailbox, CRM, ERP of bestanden. Met n8n, Zapier, Make, API’s of eigen code bouwen we de ontbrekende stap tussen je systemen.",
    examples: ["n8n · Zapier · Make", "API-koppelingen", "Jouw systemen"],
    icon: "plug",
    image: "/img/redesign/infrastructure-cutout.webp",
    tone: "light",
  },
  {
    title: "Al zelf gebouwd met AI?",
    text: "Je prototype groeit, het debuggen kost tijd of de tokenrekening loopt op. We helpen je verder: code en workflows nalopen, de inrichting verbeteren en de volgende stap werkend krijgen.",
    examples: ["Vibe coding", "Bestaande code", "Kosten & kwaliteit"],
    icon: "code",
    image: "/img/covers/v2/aitje-custom.webp",
    tone: "green",
  },
];

export const customToolGroups = [
  {
    title: "Automatisering & koppelingen",
    icon: "workflow",
    text: "Je bestaande tools verbinden en terugkerende taken slimmer laten verlopen.",
    tools: ["n8n", "Zapier", "Make", "Microsoft 365", "WordPress", "CRM & ERP", "API’s & webhooks"],
  },
  {
    title: "Modellen & AI-platforms",
    icon: "sparkles",
    text: "Een passende combinatie van externe AI, open modellen en je eigen kennis.",
    tools: ["OpenAI", "Claude", "OpenRouter", "Mistral", "Qwen", "Ollama", "vLLM", "Hugging Face"],
  },
  {
    title: "Omgevingen & rekenkracht",
    icon: "server",
    text: "Van een compact lokaal systeem tot een eigen server of gehuurde capaciteit.",
    tools: ["Mac mini", "BOSGAME", "Dell AI-server", "NVIDIA DGX Spark", "Hetzner VPS", "Nebius GPU-cloud", "Eigen server & netwerk"],
  },
];

export const customEnvironments = [
  {
    id: "lokaal",
    label: "Lokaal",
    icon: "cpu",
    title: "AI dichtbij je werk en je gegevens.",
    text: "De lokale AI-stappen draaien op een geschikte computer of binnen je eigen netwerk. We kiezen de capaciteit die je nodig hebt en richten modellen, toegang en beheer in.",
    model: "Lokaal model",
    location: "Computer of lokaal netwerk",
    examples: "Bijvoorbeeld een Mac mini, BOSGAME, Dell AI-server of NVIDIA DGX Spark. De taak en het model bepalen welke opstelling geschikt is.",
    data: "De lokale verwerking kan in je eigen omgeving blijven. Online koppelingen en eventuele externe stappen brengen we apart in kaart.",
    costs: "Geen externe tokenkosten voor de lokale modelstappen. Hardware, stroom en beheer nemen we mee in de kostenafweging.",
  },
  {
    id: "server",
    label: "Op een server",
    icon: "server",
    title: "Eén AI-omgeving voor je team.",
    text: "Je toepassing en modellen draaien op een eigen server of gehuurde capaciteit. Je team kan de oplossing via een beveiligde toegang gebruiken vanaf telefoon, tablet of desktop.",
    model: "Eigen AI-omgeving",
    location: "Eigen of gehuurde server",
    examples: "Bijvoorbeeld een eigen Dell- of NVIDIA-opstelling, een Hetzner VPS voor passende taken of GPU-capaciteit bij Nebius voor zwaardere modellen.",
    data: "We stemmen locatie, toegang, opslag en back-ups af. Een gehuurde server staat bij een provider; die afspraken nemen we mee.",
    costs: "Capaciteit afstemmen op het gebruik. We vergelijken aanschaf, serverhuur en beheer met de verwachte belasting.",
  },
  {
    id: "hybride",
    label: "Externe AI & hybride",
    icon: "globe",
    title: "Het juiste model voor de juiste stap.",
    text: "We kunnen OpenAI, Claude of modellen via OpenRouter gebruiken, combineren met lokale AI en verbinden met n8n, Zapier of Make. Iedere stap krijgt een duidelijke taak.",
    model: "Lokale en/of externe AI",
    location: "Een bewuste combinatie",
    examples: "Een lokaal model voor interne documenten en een extern model voor een specifieke taak. Of je bestaande automatisering uitbreiden met een gerichte AI-stap.",
    data: "We bepalen welke gegevens een externe dienst mag ontvangen, wie acties goedkeurt en welke instellingen en voorwaarden daarbij gelden.",
    costs: "Gerichte modelcalls, budgetlimieten en herbruikbare code helpen onnodige tokens en abonnementen te beperken. Extern gebruik kan kosten hebben.",
  },
] as const;

export const customDesignChoices = [
  { icon: "shield", title: "Grip op je gegevens", text: "Datalocatie, toegangsrechten, minimale gegevensdeling en menselijke controle nemen we mee in het ontwerp." },
  { icon: "gauge", title: "Grip op de kosten", text: "We vergelijken modelgebruik, abonnementen en infrastructuur. Code doet het vaste werk; AI krijgt de taken waarvoor het iets toevoegt." },
  { icon: "compass", title: "Grip op je oplossing", text: "Een begrijpelijke inrichting, documentatie en overdracht. Je weet wat je gebruikt en kunt bewust kiezen hoe je verdergaat." },
];
