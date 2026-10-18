# Van technische tekening naar 3D-productmodel.

Officiële pagina: https://aitje.com/cases/3d-productmodellen-met-ai

> Voor een partner in contactsnoeren bouwde AITJE een workflow die productgegevens en technische tekeningen uit WordPress omzet naar 3D-modellen. AITJE Coder stuurt Blender aan; Three.js maakt de GLB-bestanden bruikbaar op de website. Na optimalisatie daalden de API-kosten van circa €9 naar €0,11–€0,18 per product.

Praktijkcase — Contactsnoeren / 3D-catalogus & workflowoptimalisatie

Bij contactsnoeren maken de details het verschil: de vorm van een connector, de positie van de contacten en de manier waarop een kabel aansluit. Een foto laat één kant zien. Een draaibaar 3D-model helpt klanten om het product van meerdere kanten te bekijken.

Onze partner heeft een catalogus van meer dan 10.000 producten. Handmatig voor ieder product een model en een serie beelden laten maken, was op die schaal moeilijk betaalbaar. AITJE bouwde daarom een herhaalbare workflow op basis van de productgegevens en technische tekeningen die al in het WordPress-CMS stonden.

## De aanpak

### Product ophalen

Een gerichte toolcall haalt het product, de bijbehorende gegevens en de technische tekening op uit WordPress. De agent krijgt de informatie voor deze opdracht, zonder zelf door de hele website te hoeven zoeken.

### Instructies laden

Een vaste prompt en gestructureerde Markdown-instructies beschrijven de modelleerregels, materialen, uitvoer en controles. De agent hoeft niet bij ieder product opnieuw het werkproces uit te vinden.

### Blender aansturen

AITJE Coder gebruikt OpenCode in automatische modus, verbonden met GPT-6 Astra via de OpenAI-API. Via Blender MCP bouwt de agent de geometrie op basis van de opgehaalde tekening en productinformatie.

### Exporteren naar GLB

Het model wordt geëxporteerd als GLB: een bestand waarin geometrie en materialen samen worden opgeslagen. Het CMS koppelt de uitvoer aan het juiste product, zodat het resultaat in de catalogus terechtkomt.

### Tonen op de website

Three.js laadt het GLB-model in de browser. Klanten kunnen het product draaien en van meerdere kanten bekijken. GSAP verzorgt de presentatie en beweging in de interface.

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
