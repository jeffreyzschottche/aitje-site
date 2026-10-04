import type { CaseStudy } from "./types";

export const realEstateCase: CaseStudy = {
  slug: "documenten-doorzoeken-en-lakken",
  label: "Praktijkcase",
  title: "De kennis van je kantoor. Een assistent die ermee werkt.",
  context: "Makelaardij / Eigen kennis & websitechat",
  summary: "Voor een makelaarsbureau verbond AITJE Realworks, mailboxen en Google Drive aan een eigen AI-assistent. Medewerkers chatten met de kennis die bij hun rol hoort. De websitechatbot gebruikt een afzonderlijke, zorgvuldig geselecteerde kennisbank uit dezelfde omgeving.",
  image: "/img/redesign/case-lakken.webp",
  background: "/img/cases/bg-case-lakken.webp",
  photoAlt: "Documenten en dossiers worden aan een bureau doorgenomen",
  icon: "library",
  offer: [
    { name: "AITJE Assistent", to: "/producten/aitje-assistent" },
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
    { name: "Installatie en inrichting", to: "/diensten/installatie-en-inrichting" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  realEstate: {
    hardwareImage: "/images/assistant/device-plus-with-logo.png",
    intro: [
      "Bij een makelaarsbureau staat de informatie zelden op één plek. Woninggegevens staan in Realworks, afspraken en correspondentie in de mailbox, documenten in Google Drive. Een antwoord vinden betekent vaak tussen systemen wisselen en zelf bepalen welk gegeven nog actueel is.",
      "AITJE installeerde de Assistent op een Linux-server, gekoppeld aan een BOSGAME M5. De bestaande bronnen komen samen in een eigen kennisbank. Medewerkers stellen hun vraag in één chat; de zoeklaag haalt relevante informatie op, met de juiste datum, categorie en toegangsrechten.",
    ],
    sources: [
      { name: "Realworks", icon: "layout", text: "Woninggegevens en informatie uit de bestaande makelaarsomgeving." },
      { name: "Mailboxen", icon: "mail", text: "Correspondentie en afspraken als doorzoekbare bedrijfskennis." },
      { name: "Google Drive", icon: "library", text: "Documenten en bestanden uit de gekoppelde bedrijfsomgeving." },
    ],
    workflow: [
      { title: "Synchroniseren", text: "Drie keer per dag wordt de kennis uit de gekoppelde bronnen gesynchroniseerd. Zo worden nieuwe en gewijzigde gegevens meegenomen in de kennisbank." },
      { title: "Ordenen & embedden", text: "De inhoud wordt verdeeld in doorzoekbare tekstfragmenten. Harrier maakt vector-embeddings; categorie, datum, bron, prioriteit en toegangsrechten blijven gekoppeld aan de kennis." },
      { title: "Gericht terugvinden", text: "Bij een vraag zoekt RAG naar inhoudelijk passende fragmenten binnen de kennis die de medewerker mag gebruiken. Datum en prioriteit helpen om de juiste informatie te selecteren." },
      { title: "Een antwoord formuleren", text: "GPT-OSS-120B gebruikt de gevonden passages om het antwoord samen te stellen. De bedrijfskennis wordt opgehaald wanneer die nodig is; er wordt niet telkens een heel dossier naar het model gestuurd." },
    ],
    access: [
      { name: "Medewerker", text: "Een medewerker kan met de toegewezen woning- en procesinformatie werken. Vertrouwelijke financiële categorieën zijn niet automatisch beschikbaar.", allowed: ["Toegewezen woninggegevens", "Werkafspraken", "Gedeelde documenten"], excluded: ["Afgeschermde financiële data", "Kennis buiten de eigen rol"] },
      { name: "Bevoegde rol", text: "Voor een rol met aanvullende rechten kunnen ook geselecteerde financiële categorieën beschikbaar zijn. De kennisbank bepaalt de toegang, niet een verzoek in de chat.", allowed: ["Toegewezen woninggegevens", "Gedeelde documenten", "Toegestane financiële categorieën"], excluded: ["Categorieën zonder toestemming"] },
      { name: "Websitebezoeker", text: "De publieke chatbot zoekt in een eigen kennisbank met website-informatie en vrijgegeven categorieën. Interne mailboxen en vertrouwelijke dossiers worden niet als geheel meegenomen.", allowed: ["Website-informatie", "Vrijgegeven woninginformatie", "Geselecteerde publieke categorieën"], excluded: ["Interne correspondentie", "Privé- en financiële dossiers"] },
    ],
  },
};
