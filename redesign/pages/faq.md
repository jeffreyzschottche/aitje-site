# Algemene FAQ

## Status

Dit document beschrijft de algemene FAQ-pagina en hoe die zich verhoudt tot de FAQ's op product- en dienstpagina's. De opzet op twee niveaus is bevestigd (besluit 49). De categorieën en vragen hieronder zijn voorstellen; antwoorden worden pas geschreven op basis van bevestigde bronnen.

## Doel van de pagina

De algemene FAQ moet:
1. Een overzicht geven van de belangrijkste vragen over alles: AITJE, ieder product, iedere dienst en de samenwerking
2. Doorverwijzen naar de juiste product-, dienst- of kennispagina voor details
3. Drempels wegnemen voordat iemand contact opneemt

De pagina staat onder Over AITJE en in de footer.

## Wat hoort waar

De algemene FAQ is het **complete overzicht**. Productpagina's en dienstpagina's tonen alleen de **specifieke** vragen voor dat aanbod (besluit 50).

| Soort vraag | Algemene FAQ | Product- of dienstpagina | Kenniscentrum |
| --- | --- | --- | --- |
| Over AITJE, samenwerking en werkwijze | Ja | Nee | Nee |
| Over het aanbod als geheel | Ja | Nee | Nee |
| Hoofdvragen per product of dienst ("Wat is AITJE Coder?", "Wat kost een AI-scan?") | Ja, kort, met link | Ja | Nee |
| Specifieke vragen over gebruik, installatie of afspraken ("Werkt Assistent zonder internet?") | Alleen als ze veel gesteld worden | Ja | Nee |
| Uitleg van een begrip ("Wat is edge AI?") | Nee, link naar artikel | Nee, link naar artikel | Ja |

Vuistregel: iedere bezoeker moet op de algemene FAQ per product en dienst de hoofdvragen vinden. Wie meer wil weten, gaat via de link naar de specifieke FAQ op die pagina.

Gebruik voor een vraag die op beide plekken staat één bron met hetzelfde antwoord, zodat de antwoorden niet uit elkaar gaan lopen. Begrippen blijven in het kenniscentrum.

## Structuur

### 1. Kop

**Titel (voorstel):**
> Veelgestelde vragen

**Ondertitel (voorstel):**
> Antwoorden over AITJE, het aanbod en hoe samenwerken werkt.

### 2. Categorieën

Voorstel voor categorieën, met uitklapbare vragen:

**Over AITJE**
- Wat doet AITJE?
- Voor wie is AITJE bedoeld?
- Is AITJE tegen cloud of externe AI-diensten?
- Met welke vragen kan ik niet bij AITJE terecht?

**Aanbod**
- Wat is het verschil tussen producten, diensten en AITJE Custom?
- Moet ik hardware kopen om AITJE te gebruiken?
- Kan ik een product zelf installeren?
- Welke producten zijn nu beschikbaar?

**Samenwerken**
- Waar begint een samenwerking meestal?
- Wat houdt een demo in?
- Hoe werkt ondersteuning en onderhoud na oplevering?
- Werkt AITJE ook samen met IT-bedrijven en bureaus?

**Producten**, met per beschikbaar product 2-3 hoofdvragen en een link naar de FAQ op de productpagina:
- AITJE Assistent: wat is het, wat heb je nodig, wat kost het?
- AITJE Coder: wat is het, wat heb je nodig, wat kost het?
- Geplande producten: wanneer komen ze beschikbaar en kan ik interesse doorgeven?

**Diensten**, met per dienst 1-2 hoofdvragen en een link naar de FAQ op de dienstpagina:
- AI-scan, Advies en analyse, Installatie en inrichting, Optimalisatie, Veilig AI-gebruik, AITJE Custom, Ondersteuning en onderhoud, Voor IT-bedrijven en bureaus.

**Data en eigen beheer**
- Waar blijven mijn gegevens?
- Is lokale AI altijd goedkoper of veiliger?

**Kosten**
- Hoe zijn de prijzen opgebouwd?
- Wat betekent "zonder verbruikskosten"?

Het aantal vragen per categorie blijft beperkt, als richtlijn 3-6. Door het volledige overzicht wordt de pagina lang. Gebruik daarom een inhoudsopgave of tabs per categorie, en eventueel een zoekveld.

### 3. CTA

> Staat je vraag er niet tussen? Bespreek je AI-vraag.

## Schrijfregels voor antwoorden

- Kort antwoord eerst, daarna een link naar de pagina met details.
- Je/jouw, en AITJE als onderwerp (niet "wij" of "jullie"), volgens [terminology.md](../context/terminology.md).
- Alleen bevestigde afspraken: geen reactietermijnen, gratis onderdelen of garanties die niet zijn vastgelegd.
- Geen absolute claims over privacy, kosten of duurzaamheid.
- Begrippen linken naar het kenniscentrum in plaats van ze hier volledig uit te leggen.

## Migratie van de huidige FAQ

De huidige `/faq` bevat ongeveer 30 vragen in de "wij/jullie"-vorm, deels over één product (Assistent, Coder), deels technisch (frameworks, embeddings, backend-talen) en deels algemeen.

Bij de bouw per vraag bepalen:

- **algemeen** → herschrijven voor deze pagina;
- **hoofdvraag over een product of dienst** → op deze pagina én op die pagina;
- **specifiek voor een product of dienst** → verplaatsen naar die pagina;
- **begripsuitleg** → kennisartikel of link naar een bestaand artikel;
- **verouderd of te technisch voor de doelgroep** → weglaten.

## Structured data

De algemene FAQ en de FAQ's op product- en dienstpagina's krijgen FAQPage-structured data (schema.org), besluit 51. Vragen en antwoorden staan daarvoor letterlijk en zichtbaar op de pagina.

## Niet op deze pagina

- Uitgebreide productspecificaties of hardware-eisen
- Volledige prijstabellen (verwijzen naar productpagina's en [pricing.md](../offer/pricing.md))
- Juridische tekst (privacy en voorwaarden staan apart)

## Open punten

- Conceptvragen en -antwoorden: [content/faq.md](../content/faq.md). Controleren vóór publicatie.

## Bronnen

- [sitemap.md](sitemap.md) — FAQ op twee niveaus.
- [product.md](product.md) — FAQ-sectie op productpagina's.
- [../context/terminology.md](../context/terminology.md) — aanspreekvorm en termen.
- [../context/decisions.md](../context/decisions.md) — besluiten 49, 50 en 51.
