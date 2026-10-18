# Wat zijn AI-hallucinaties?

Officiële pagina: https://aitje.com/kenniscentrum/wat-zijn-ai-hallucinaties

> AI kan een overtuigend antwoord geven dat feitelijk onjuist is. Leer hoe je verzonnen informatie herkent en toepassingen bouwt die onzekerheid beter afhandelen.

### In het kort

Een AI-hallucinatie is gegenereerde inhoud die onjuist, verzonnen of niet onderbouwd is, terwijl het antwoord betrouwbaar kan klinken. Denk aan een niet-bestaande bron, een verkeerd bedrag of een softwarefunctie die helemaal niet bestaat. De term beschrijft een fout in de uitvoer; hij betekent niet dat het model een menselijke waarneming of bewuste bedoeling heeft.

### Waarom gebeurt dit?

Een taalmodel maakt passende uitvoer op basis van geleerde patronen en de beschikbare context. Dat proces is geen automatische feitencontrole. Ontbrekende informatie, onduidelijke vragen of verkeerde bronnen kunnen leiden tot een plausibele aanvulling die niet klopt. Ook bij voldoende context kan het model passages verkeerd interpreteren of gegevens uit verschillende onderdelen door elkaar halen.

### Een praktisch voorbeeld

Een medewerker vraagt naar de opzegtermijn in een contract. Het document bevat daar geen bepaling over. Een slecht ingerichte assistent vult een gebruikelijke termijn in alsof die uit het contract komt. Een beter ingerichte toepassing zegt dat de bepaling niet is gevonden, toont wat wel is geraadpleegd en verwijst de vraag voor beoordeling door.

### Helpt zoeken in eigen documenten?

RAG kan relevante broninformatie toevoegen, waardoor het model minder uit zijn algemene training hoeft aan te vullen. Maar ook dan kunnen de verkeerde documenten worden gevonden of bronpassages verkeerd worden weergegeven. Laat waar mogelijk de gebruikte passage en documentversie zien. Een bronvermelding is pas bruikbaar als je kunt controleren of de bron de conclusie werkelijk ondersteunt.

### Welke controles kun je toevoegen?

Laat het model ontbrekende gegevens benoemen en beperk het antwoord tot de beschikbare informatie wanneer de taak dat vraagt. Controleer bedragen en verplichte velden met code. Gebruik testvragen waarbij het correcte antwoord bekend is, inclusief vragen die niet beantwoord kunnen worden. Voor belangrijke beslissingen blijft een passende beoordeling nodig, ook als eerdere antwoorden goed waren.

### Wat betekent dit voor AITJE?

Een lokale installatie voorkomt geen hallucinaties. De kwaliteit volgt uit modelkeuze, informatievoorziening en controles. Bouw daarom een toepassing rond een heldere taak en een herkenbare grens: wanneer kan het systeem antwoorden, wanneer moet het stoppen en wie kijkt dan mee? Betrouwbaarheid gaat ook over goed omgaan met een vraag waarvoor geen onderbouwd antwoord beschikbaar is.

## Bronnen

- [Anthropic — Hallucinaties verminderen](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Onderzoek — Codehallucinaties en API-documentatie](https://arxiv.org/abs/2407.09726)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
