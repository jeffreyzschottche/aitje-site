import type { CaseStudy } from "./types";

export const councilHubCase: CaseStudy = {
  slug: "council-hub",
  label: "Praktijkcase",
  title: "350 klanten. Eén centrale werkplek.",
  context: "Marketingbedrijf / klantbeheer, tickets & bedrijfskennis",
  summary: "Na een overname groeide een marketingbedrijf van 150 naar 350 klanten. AITJE bracht klantgegevens, tickets, projecten, factuurinformatie en gesprekstranscripties samen in een centrale hub. Medewerkers zoeken en chatten met hun bedrijfskennis, met toegang op basis van hun rol en AI op een bestaande Mac mini.",
  icon: "layout",
  image: "/img/redesign/case-council.webp",
  background: "/img/cases/bg-case-council.webp",
  photoAlt: "Collega’s bespreken informatie aan een vergadertafel",
  offer: [
    { name: "AITJE Assistent", to: "/producten/aitje-assistent" },
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  councilHub: {
    sync: "3× per dag",
    intro: [
      "Het marketingbedrijf werkte met 150 klanten. Door een overname kwamen daar 200 klanten bij. De klantenportefeuille groeide naar 350, maar de informatie zat nog verspreid over verschillende applicaties en teams.",
      "Wanneer de telefoon overging, wist de medewerker niet meteen wat er speelde. Was er een open ticket? Wie werkte aan het project? Had iemand al teruggebeld? En stonden er nog facturen open? Het antwoord vroeg telkens om zoeken in meerdere systemen.",
      "AITJE bouwde een centrale managementhub waarin medewerkers snel zoeken op klantnaam, bedrijfsnaam of website. Via API-koppelingen komen de relevante gegevens bijeen. Daarnaast kunnen zij vragen stellen aan een RAG-chat met de gesynchroniseerde bedrijfskennis.",
    ],
    sources: [
      { name: "Klanten & tickets", icon: "users", text: "Klantgegevens, taken en tickets samen bekijken, met de medewerker die ermee bezig is." },
      { name: "monday.com", icon: "workflow", text: "Projectinformatie betrekken bij vragen over voortgang en projecten die aandacht nodig hebben." },
      { name: "Rinkel", icon: "phone", text: "Transcripties van telefoongesprekken meenemen, zodat eerdere gesprekken onderdeel worden van de klantcontext." },
      { name: "Factuurinformatie", icon: "library", text: "Openstaande facturen naast klantcontact bekijken, voor medewerkers die deze gegevens mogen inzien." },
    ],
    questions: [
      { label: "Wie pakt dit op?", question: "Klant X heeft gebeld over Y en Z. Wie is met dat ticket bezig?", answer: "De hub brengt het klantdossier, de relevante tickets en de toegewezen medewerkers samen. Gesprekstranscripties geven context bij wat eerder is besproken.", sources: ["Klantgegevens", "Tickets", "Rinkel-transcripties"] },
      { label: "Bellen & facturen", question: "Welke klanten bellen regelmatig terwijl er nog facturen openstaan?", answer: "Gespreksinformatie en openstaande facturen kunnen naast elkaar worden bekeken. De medewerker ziet die financiële context alleen wanneer zijn of haar rol daarvoor toegang geeft.", sources: ["Klantgegevens", "Gespreksinformatie", "Factuurinformatie"] },
      { label: "Projectrisico’s", question: "Welke projecten dreigen volgens monday.com in de knel te komen?", answer: "De assistent betrekt de beschikbare projectgegevens, taken en tickets bij het antwoord. Dat geeft medewerkers een vertrekpunt om te bepalen welke projecten aandacht vragen.", sources: ["monday.com", "Taken", "Tickets"] },
    ],
    comparison: [
      { subject: "Een klant aan de telefoon", before: "Eerst uitzoeken welk bedrijf, project en ticket erbij horen.", after: "Zoeken op klant, bedrijf of website en de beschikbare context bijeen zien." },
      { subject: "Een vraag over meerdere systemen", before: "Zelf klantgegevens, tickets, facturen en gesprekken naast elkaar leggen.", after: "Een vraag stellen die de assistent met de aangesloten bronnen uitwerkt." },
      { subject: "Toegang tot bedrijfsinformatie", before: "Informatie raadplegen via de afzonderlijke applicaties.", after: "Een centrale werkplek met toegang tot gegevens op basis van de medewerkersrol." },
      { subject: "AI-gebruik", before: "Geen eigen centrale AI-omgeving voor deze informatie.", after: "Qwen 3.8 op de bestaande Mac mini, zonder externe tarieven per AI-token." },
    ],
    workflow: [
      { title: "Verbinden", text: "Code verbindt de hub met de externe applicaties via API- en MCP-koppelingen. Toolcalling geeft het taalmodel afgebakende manieren om de aangesloten platforms te raadplegen." },
      { title: "Synchroniseren", text: "Drie keer per dag worden de geselecteerde bedrijfsgegevens opgehaald en omgezet naar vector-embeddings. De lokale vector-database maakt deze kennis beschikbaar voor de RAG-chat." },
      { title: "Zoeken & ophalen", text: "Een naam, bedrijf of website leidt naar de beschikbare klantcontext. Bij een chatvraag haalt RAG relevante passages op; toolcalls kunnen daarnaast gegevens uit gekoppelde applicaties raadplegen wanneer die bereikbaar zijn." },
      { title: "Antwoorden met toegang", text: "Qwen formuleert het antwoord met de beschikbare context. Toegang wordt in de hub en bij het ophalen van gegevens begrensd op basis van de medewerkersrol, zodat de chat alleen met toegestane informatie werkt." },
    ],
  },
};
