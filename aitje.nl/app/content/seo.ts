// Public, verifiable company information. Used by page metadata and the AI index.
// Add addresses, registration numbers or social profiles only after confirmation.
export const companyProfile = {
  name: "AITJE",
  slogan: "Je partner in AI.",
  description: "AITJE is een Nederlandse AI-specialist voor lokale AI, automatisering en slimmere workflows. Eigen AI-producten, advies, ontwikkeling, installatie en ondersteuning, met onafhankelijkheid als uitgangspunt.",
  expertise: ["Lokale AI", "On-premise AI", "Edge AI", "AI-automatisering", "AI-agents en workflows", "AI-kennisbanken", "AI-softwareontwikkeling", "Token management & optimalisatie"],
  email: "contact@aitje.com",
} as const;

export const staticPageSeo = {
  "/": {
    title: "AITJE — Lokale AI en automatisering in Nederland",
    description: "Nederlandse AI-specialisten voor lokale AI, automatisering en slimmere workflows. AITJE adviseert, bouwt en regelt je AI-producten en infrastructuur.",
    pageType: "WebPage",
  },
  "/producten": {
    title: "AI-producten",
    description: "AITJE Assistent en Coder: lokale AI met afgestemde modellen en software. Op passende hardware, een eigen server of digitale omgeving, met installatie en hulp naar behoefte.",
    pageType: "CollectionPage",
  },
  "/diensten": {
    title: "AI-diensten: advies, automatisering en maatwerk",
    description: "Nederlandse AI-specialisten voor AI-scans, advies, automatisering, AI op maat, installatie, tokenoptimalisatie en onderhoud. Van eerste vraag tot werkende oplossing.",
    pageType: "CollectionPage",
  },
  "/diensten/voor-it-bedrijven": {
    title: "AI-specialist voor IT-bedrijven en bureaus",
    description: "Jouw klanten vragen om AI. AITJE helpt IT-bedrijven en bureaus met onderzoek, bouw en beheer van AI-oplossingen. Jij houdt de klantrelatie en de regie.",
    pageType: "WebPage",
  },
  "/cases": {
    title: "Cases",
    description: "AI in het dagelijkse werk: interne kennis doorzoeken, werkprocessen verbinden en software ontwikkelen. Bekijk de toepassingen en de aanpak van AITJE.",
    pageType: "CollectionPage",
  },
  "/kenniscentrum": {
    title: "Kenniscentrum",
    description: "Heldere uitleg over AI, modellen en je eigen AI-omgeving. Wat is een LLM, wat is lokale AI, wat doet een agent? Het kenniscentrum van AITJE.",
    pageType: "CollectionPage",
  },
  "/over-aitje": {
    title: "Over AITJE — De AI-specialist van dichtbij",
    description: "Een Nederlands AI-productbedrijf en specialist. AITJE onderzoekt, bouwt, installeert en blijft bereikbaar. Ontdek de mensen, expertise en visie achter AITJE.",
    pageType: "AboutPage",
  },
  "/visie": {
    title: "Visie",
    description: "De visie van AITJE: Nederlandse organisaties houden toegang tot krachtige AI in eigen beheer, zonder onbedoeld afhankelijk te worden van gesloten platformen.",
    pageType: "WebPage",
  },
  "/faq": {
    title: "Veelgestelde vragen",
    description: "Antwoorden over AITJE, de AI-producten, diensten, samenwerking, data en kosten. Staat je vraag er niet tussen? Bespreek je AI-vraag met AITJE.",
    pageType: "FAQPage",
  },
  "/contact": {
    title: "Contact",
    description: "Bespreek je AI-vraag met AITJE. Mail contact@aitje.com of vul het formulier in. AITJE denkt mee.",
    pageType: "ContactPage",
  },
} as const;
