import type { CaseStudy } from "./types";

export const gameLevelsCase: CaseStudy = {
  slug: "coder-game-in-24-uur",
  label: "Praktijkcase",
  title: "25 nieuwe gamelevels per week. Zonder externe tokenkosten.",
  context: "Marketingbureau / leveldesign & eigen coding agent",
  summary: "Een marketingbureau nam een bestaande mobiele puzzelgame over, maar liep vast bij het maken van nieuwe levels. AITJE analyseerde de game, bouwde een herbruikbaar leveldesignsysteem en koppelde AITJE Coder aan Qwen op een eigen server. Nu maakt het bureau 25 nieuwe levels per week vanuit één opdracht in OpenCode.",
  icon: "code",
  image: "/img/redesign/case-coder.webp",
  background: "/img/cases/bg-case-coder.webp",
  photoAlt: "Code op het scherm van een laptop",
  offer: [
    { name: "AITJE Coder", to: "/producten/aitje-coder" },
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  gameLevels: {
    intro: [
      "Het marketingbureau had een mobiele game overgenomen van een development agency. Een puzzelgame in de stijl van Candy Crush: de app werkte en stond al live. Het bureau kon de game vermarkten, maar had minder ervaring met het beheren en uitbreiden van de code.",
      "Nieuwe levels werden het struikelblok. Een marketeer gebruikte AI om ze te bouwen, maar iedere opdracht begon grotendeels opnieuw. Er was geen vast systeem voor de opbouw, herbruikbare onderdelen of de moeilijkheid. Daardoor ontstonden steeds gaten in het proces.",
    ],
    design: [
      { title: "Bestaande levels analyseren", icon: "search", text: "AITJE onderzocht hoe de bestaande levels waren opgebouwd en welke patronen, ritmes en moeilijkheidsgraden er al in de game voorkwamen. De bestaande game vormde het vertrekpunt voor de uitbreiding." },
      { title: "Onderdelen herbruikbaar maken", icon: "box", text: "Daaruit ontstond een leveldesignsysteem met herbruikbare componenten. Nieuwe levels bouwen voort op de structuur van de game, zodat de agent gericht kan variëren binnen een herkenbare aanpak." },
      { title: "De opbouw bijhouden in CSV", icon: "library", text: "CSV-bestanden houden bij welke ritmes en moeilijkheidsgraden al per level voorkomen. Die informatie geeft de agent context voor volgende levels, in plaats van telkens een losse opdracht zonder overzicht." },
    ],
    workflow: [
      { title: "De juiste repository openen", text: "De marketeer opent het gameproject in OpenCode via de AITJE Coder-werkwijze. Zo werkt de agent met de bestaande code, componenten en het leveldesignsysteem van deze game." },
      { title: "Een reeks van 25 levels vragen", text: "De opdracht is nu overzichtelijk: maak 25 nieuwe levels op basis van het designsysteem en de bestaande levelregistratie. De regels en context staan al in het project." },
      { title: "Qwen laten doorwerken", text: "De agent gebruikt een API-endpoint van Qwen3.6-35B-A3B op een server in eigen beheer. De ontwikkellus werkt de levelreeks uit met de herbruikbare componenten en de informatie over ritme en moeilijkheid." },
      { title: "Verder bouwen op het systeem", text: "Het bureau werkt nu met een ritme van 25 nieuwe levels per week. Nieuwe opdrachten gebruiken dezelfde basis, waardoor uitbreiden een herhaalbare werkwijze wordt." },
    ],
    outcome: "Het bureau heeft een manier om zijn overgenomen game verder te ontwikkelen, zonder dat de marketeer iedere keer het hele proces opnieuw hoeft te bedenken. AITJE combineerde software engineering, leveldesign en een coding agent tot een workflow die past bij de mensen die ermee werken.",
  },
};
