import type { CaseStudy } from "./types";

export const productModelsCase: CaseStudy = {
  slug: "3d-productmodellen-met-ai",
  label: "Praktijkcase",
  title: "Van technische tekening naar 3D-productmodel.",
  context: "Contactsnoeren / 3D-catalogus & workflowoptimalisatie",
  summary: "Voor een partner in contactsnoeren bouwde AITJE een workflow die productgegevens en technische tekeningen uit WordPress omzet naar 3D-modellen. AITJE Coder stuurt Blender aan; Three.js maakt de GLB-bestanden bruikbaar op de website. Na optimalisatie daalden de API-kosten van circa €9 naar €0,11–€0,18 per product.",
  image: "/img/cases/contact-lead.png",
  background: "/img/cases/bg-case-3d-productmodellen.jpg",
  photoAlt: "Een werktafel met technische tekeningen en tekeninstrumenten",
  icon: "box",
  offer: [
    { name: "AITJE Coder", to: "/producten/aitje-coder" },
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
    { name: "Token management & optimalisatie", to: "/diensten/token-management-en-optimalisatie" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  productModels: {
    intro: [
      "Bij contactsnoeren maken de details het verschil: de vorm van een connector, de positie van de contacten en de manier waarop een kabel aansluit. Een foto laat één kant zien. Een draaibaar 3D-model helpt klanten om het product van meerdere kanten te bekijken.",
      "Onze partner heeft een catalogus van meer dan 10.000 producten. Handmatig voor ieder product een model en een serie beelden laten maken, was op die schaal moeilijk betaalbaar. AITJE bouwde daarom een herhaalbare workflow op basis van de productgegevens en technische tekeningen die al in het WordPress-CMS stonden.",
    ],
    models: [
      { name: "Tweepolig contactsnoer", src: "/models/contact-leads/sae-twin-lead.glb", text: "Twee connectoren, een rood-zwarte kabel en een beschermkap." },
      { name: "Snoer met ringklemmen", src: "/models/contact-leads/ring-terminal-lead.glb", text: "Een tweepolige aansluiting met twee metalen ringterminals." },
      { name: "Y-adapter", src: "/models/contact-leads/y-adapter.glb", text: "Een ingang die zich vertakt naar twee aansluitingen." },
    ],
    workflow: [
      { title: "Product ophalen", icon: "library", text: "Een gerichte toolcall haalt het product, de bijbehorende gegevens en de technische tekening op uit WordPress. De agent krijgt de informatie voor deze opdracht, zonder zelf door de hele website te hoeven zoeken.", output: "Productgegevens + technische tekening" },
      { title: "Instructies laden", icon: "code", text: "Een vaste prompt en gestructureerde Markdown-instructies beschrijven de modelleerregels, materialen, uitvoer en controles. De agent hoeft niet bij ieder product opnieuw het werkproces uit te vinden.", output: "Een afgebakende opdracht met vaste modelleerregels" },
      { title: "Blender aansturen", icon: "box", text: "AITJE Coder gebruikt OpenCode in automatische modus, verbonden met GPT-6 Astra via de OpenAI-API. Via Blender MCP bouwt de agent de geometrie op basis van de opgehaalde tekening en productinformatie.", output: "Een Blender-model voor het betreffende product" },
      { title: "Exporteren naar GLB", icon: "package", text: "Het model wordt geëxporteerd als GLB: een bestand waarin geometrie en materialen samen worden opgeslagen. Het CMS koppelt de uitvoer aan het juiste product, zodat het resultaat in de catalogus terechtkomt.", output: "Een herbruikbaar 3D-bestand gekoppeld aan het product" },
      { title: "Tonen op de website", icon: "globe", text: "Three.js laadt het GLB-model in de browser. Klanten kunnen het product draaien en van meerdere kanten bekijken. GSAP verzorgt de presentatie en beweging in de interface.", output: "Een interactieve productpresentatie" },
    ],
    instructions: [
      { file: "product.md", purpose: "Product-ID, relevante gegevens en verwijzing naar de technische tekening." },
      { file: "modeling.md", purpose: "Vaste regels voor geometrie, connectoren, materialen en het gebruik van de tekening." },
      { file: "export.md", purpose: "GLB-uitvoer, naamgeving en de koppeling terug naar het juiste product in het CMS." },
      { file: "checks.md", purpose: "Controlepunten voor het model en de uitvoer voordat de volgende stap start." },
    ],
    costs: { initialPerProductEur: 9, optimizedPerProductEur: [0.11, 0.18], totalSavingPercent: 60, manualEightImagesEur: 1000 },
  },
};
