# Cases (overzicht en previews)

## Status

Dit document beschrijft het cases-overzicht en de previews op product- en dienstpagina's. Menu-item, route, labels en previews zijn bevestigd (besluiten 49-51). De overige indeling is een voorstel.

Detailpagina's volgen [case.md](case.md). Het onderscheid tussen echte cases en voorbeeldsituaties volgt [proof/cases.md](../proof/cases.md).

## Naam en route

- Menu-item en paginatitel: **Cases**.
- Route: `/cases` en `/cases/[slug]`; Engels `/en/cases` en `/en/cases/[slug]`.
- `/use-cases` en de detailroutes daaronder bestaan niet meer en worden met een 301 doorgestuurd naar de overeenkomstige `/cases`-pagina.

## Doel van de pagina

Het overzicht moet:
1. Laten zien waarvoor AI in de praktijk kan worden ingezet
2. Bezoekers helpen een toepassing te herkennen voordat ze een product of dienst kiezen
3. Doorverwijzen naar het passende product of de passende dienst
4. Eerlijk tonen welke voorbeelden gerealiseerd werk zijn en welke niet

## Labels

| Soort | Zichtbaar label | Gebruik |
| --- | --- | --- |
| Gerealiseerd werk bij een klant | **Praktijkcase** | Alleen na bevestiging door de oprichter |
| Demonstratie van eigen product of kunnen | **Demo** | Werking tonen zonder klantopdracht |
| Fictieve toepasbare situatie | **Voorbeeldsituatie** | Verplicht bij iedere dummycase |

Het label staat op de kaart, op de detailpagina en in iedere preview.

## Structuur

### 1. Kop

**Titel:**
> Cases

**Ondertitel (voorstel):**
> Zie wat AI in de praktijk voor jouw werk kan doen.

Korte intro van 1-2 zinnen: de voorbeelden beginnen bij een herkenbare vraag en laten zien welke route AITJE daarbij kan bieden.

### 2. Overzicht van kaarten

Per case:

- label;
- titel vanuit de vraag of het resultaat;
- korte samenvatting in 1-2 zinnen;
- gekoppeld product of gekoppelde dienst;
- beeld;
- link naar de detailpagina.

Volgorde: praktijkcases, dan demo's, dan voorbeeldsituaties.

Filters (product/dienst, doelgroep, label) zijn pas nodig wanneer het aantal cases groeit.

### 3. CTA

> Herken je jouw situatie niet? Bespreek je AI-vraag.

Link naar de contactpagina.

## Previews op andere pagina's

Previews **vervangen** het aparte blok "Voorbeeldsituatie" op product- en dienstpagina's (besluit 51). Ook de homepage toont previews.

Per preview:

- hetzelfde label als op het overzicht;
- titel en korte samenvatting uit dezelfde bron als de detailpagina;
- knop naar de detailpagina, bijvoorbeeld **Bekijk deze case**.

Toon 1-3 relevante cases, met praktijkcases en demo's vóór voorbeeldsituaties. Eén bron per case: titel, label en samenvatting worden niet per pagina opnieuw geschreven.

## Inhoud

De acht cases staan uitgeschreven in [content/cases.md](../content/cases.md). Die inhoud is dummy tot bevestiging.

| # | Case | Label |
| --- | --- | --- |
| 1 | ChatGPT in je eigen organisatie | Praktijkcase |
| 2 | Council Hub: één centraal punt voor je bedrijf | Praktijkcase |
| 3 | AITJE Coder in actie: een game in 24 uur | Demo |
| 4 | Van werkbon naar conceptofferte | Voorbeeldsituatie |
| 5 | Orders uit e-mail automatisch in het systeem | Voorbeeldsituatie |
| 6 | Honderden documenten doorzoeken en lakken | Voorbeeldsituatie |
| 7 | Inspreken in plaats van typen in de werkplaats | Voorbeeldsituatie |
| 8 | Duizenden productteksten zonder rekening per tekst | Voorbeeldsituatie |

Iedere case krijgt een blok **Herken je dit?** met twee of drie herkenbare knelpunten. Voorbeeldsituaties krijgen ook een regel **Ook herkenbaar voor**, zodat bezoekers uit andere branches zich herkennen.

## Overige beginvulling

De voorbeeldsituaties per dienst uit [proof/cases.md](../proof/cases.md) kunnen de overige plekken vullen: AI-scan, Advies en analyse, Installatie en inrichting, Optimalisatie, Veilig AI-gebruik en Ondersteuning en onderhoud.

De huidige site bevat use cases in `useCasesV2.ts` en cases in `cases.ts`. Bij de bouw gaan ze op in één bron onder `/cases`. Controleer per item of het een praktijkcase, demo of voorbeeldsituatie is, en label het daarop. Niets wordt automatisch als gerealiseerd werk overgenomen.

De thuiszorgcase in `cases.ts` vervalt (besluit 51). Het ging om administratieve rapportage, geen zorgoplossing, maar een thuiszorgvoorbeeld past niet bij de bewuste grenzen rond zorg.

## Niet op deze pagina

- Fictieve testimonials, klantlogo's of meetcijfers
- Resultaten of besparingen die niet bevestigd zijn
- Geplande producten gepresenteerd als gerealiseerd werk
- Namen van IT-partners (besluit 51)

## Bronnen

- [sitemap.md](sitemap.md) — navigatie en previews.
- [../proof/cases.md](../proof/cases.md) — vormen, schrijfregels en voorbeeldsituaties.
- [../proof/existing-work.md](../proof/existing-work.md) — bevestigde status van eigen werk.
- [../context/decisions.md](../context/decisions.md) — besluiten 49, 50 en 51.
