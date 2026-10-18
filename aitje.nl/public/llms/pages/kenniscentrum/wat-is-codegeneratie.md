# Wat is codegeneratie met AI?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-codegeneratie

> Codegeneratie laat een model softwarecode voorstellen, uitbreiden of aanpassen. De echte waarde ontstaat wanneer dat voorstel past bij het bestaande project en gecontroleerd kan worden uitgevoerd.

### In het kort

Codegeneratie betekent dat een model code maakt op basis van een opdracht en beschikbare projectinformatie. Dat kan een functie, test, script of wijziging in bestaande software zijn. Het model genereert een voorstel; de ontwikkelomgeving bepaalt hoe je dat voorstel toepast. Code die goed oogt is nog niet noodzakelijk correct. Werking, aansluiting op het project en onderhoudbaarheid worden beoordeeld met passende tests en review.

### Wat heeft het model nodig?

Beschrijf welke taak de code moet uitvoeren, welke invoer en uitvoer horen bij de functie en welke beperkingen gelden. Bestaande bestanden, interfaces, tests en gebruikte bibliotheken geven belangrijke context. Een model dat de projectafspraken niet kent, kan een oplossing maken die op zichzelf logisch lijkt maar niet aansluit. Geef daarom gerichte informatie uit de codebase mee in plaats van alleen een algemene wens voor een complete toepassing.

### Wat is het verschil met een coding-model of agent?

Een coding-model is het model dat voor codewerk wordt gebruikt. Codegeneratie is een taak die dat model uitvoert. Een coding-agent kan daarnaast tools gebruiken om bestanden te bekijken, wijzigingen toe te passen en controles te starten. Die combinatie maakt een uitgebreidere workflow mogelijk, maar bepaalt niet vanzelf welke rechten passend zijn. Het blijft nuttig om zichtbaar te houden wat wordt voorgesteld, veranderd en daadwerkelijk uitgevoerd.

### Een praktisch voorbeeld

Een ontwikkelaar wil een importfunctie uitbreiden met een nieuw gegevensveld. Het model krijgt de bestaande functie, voorbeeldinvoer en relevante tests. Het stelt een kleine wijziging en aanvullende test voor. Daarna worden de controles uitgevoerd en wordt de wijziging beoordeeld. Vragen over ontbrekende invoer en bestaande records horen bij die beoordeling. Het proces draait om een afgebakende aanpassing, zodat gevolgen en fouten beter te herkennen zijn.

### Welke fouten wil je vroeg vinden?

Een model kan een niet-bestaande functie gebruiken, een randgeval missen of bestaande regels verkeerd interpreteren. Een test die door hetzelfde model is geschreven, kan bovendien dezelfde aanname overnemen. Beoordeel daarom ook of de test het gewenste gedrag controleert. Bij koppelingen tellen foutafhandeling, rechten en invoervalidatie mee. De relevante controle hangt af van de wijziging: een kleine tekstaanpassing vraagt iets anders dan code die gegevens wijzigt.

### Hoe houd je het werk efficiënt?

Laat software bestanden vinden, zoekresultaten selecteren en vaste controles uitvoeren. Geef het model daarna de context die nodig is voor de volgende stap. Een grote codebase telkens volledig meesturen kan onnodig veel tokens en wachttijd kosten. Vergelijk modellen op de concrete taken in je project, inclusief herstelwerk. Goede codegeneratie helpt een ontwikkelaar vooruit en laat duidelijk zien welk werk nog gecontroleerd moet worden.

## Bronnen

- [Mistral — Code en ontwikkeltools](https://docs.mistral.ai/vibe/code/overview)
- [Hugging Face — Tekstgeneratie met LLM’s](https://huggingface.co/docs/transformers/en/llm_tutorial)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
