# Kenniscentrum (overzicht en artikeltemplate)

## Status

Dit document beschrijft het overzicht van het kenniscentrum en de template voor kennisartikelen. Plaats in de navigatie (besluit 49) en categorieën, zoeken en datum (besluit 51) zijn bevestigd.

## Doel

Het kenniscentrum moet:
1. Begrippen en technieken begrijpelijk uitleggen
2. Een vaste bestemming zijn voor links vanuit andere pagina's
3. Bezoekers met verschillende kennisniveaus helpen
4. De actuele kennis van AITJE laten zien zonder te verkopen

Andere pagina's blijven ook zonder doorklikken begrijpelijk. Het kenniscentrum geeft de verdieping.

## Overzichtspagina

### 1. Kop

**Titel (voorstel):**
> Kenniscentrum

**Ondertitel (voorstel):**
> Heldere uitleg over AI, modellen en je eigen AI-omgeving.

### 2. Categorieën en zoeken

De huidige site heeft 17 artikelen verdeeld over zes categorieën (Basis, Techniek, Infrastructuur, Toepassing, Werkwijze, Software). Dat is te versnipperd: sommige categorieën hebben maar één of twee artikelen. Bevestigd (besluit 51): vier categorieën, ingedeeld naar de vraag van de bezoeker in plaats van naar techniek.

| Categorie | Vraag van de bezoeker | Huidige artikelen |
| --- | --- | --- |
| **AI-basis** | Hoe werkt AI eigenlijk? | LLM, context, context window, prompt engineering |
| **Je eigen AI-omgeving** | Waar draait AI en wat heb ik nodig? | Local AI, edge AI, on-premise AI, cloud, white-label hardware |
| **Agents en workflows** | Hoe laat ik AI werk uitvoeren? | AI agent, workflow, RAG |
| **Koppelen en bouwen** | Hoe sluit AI aan op mijn systemen? | API, webhook, embeddings, backend, frontend |

Later mogelijk erbij, zodra er artikelen voor zijn: **Kosten en privacy** (tokens, verbruikskosten, datalocatie).

Filters als tabs bovenaan. **Geen zoekveld bij de start:** met circa 20 artikelen zijn vier tabs sneller. Voeg zoeken toe vanaf ongeveer 40 artikelen.

### 3. Uitgelichte artikelen

2-3 artikelen die veel vanuit andere pagina's worden gelinkt, bijvoorbeeld over LLM's, lokale AI en edge AI.

### 4. Alle artikelen

Kaart per artikel:

- categorie;
- titel als vraag of begrip (bijv. "Wat is edge AI?");
- korte samenvatting;
- eventueel een beeld.

### 5. CTA

> Wil je weten wat dit voor jouw werk betekent? Bespreek je AI-vraag.

## Artikeltemplate

### 1. Kop

**Categorie**

**Titel:**
> [Begrip of vraag]

**Samenvatting:** 1-2 zinnen.

### 2. In het kort

Het antwoord in een paar zinnen, zonder voorkennis te veronderstellen.

### 3. Uitleg in secties

Vaste opbouw als richtlijn (de huidige artikelen gebruiken al een vergelijkbare vorm):

- Wat is het?
- Waarom is het relevant?
- Wanneer past het, en wanneer niet?
- Waar moet je op letten?
- Veelgemaakte misvatting (optioneel)

### 4. Relatie met AITJE (optioneel, kort)

Waar dit begrip terugkomt in het aanbod, met links naar een product, dienst of case. Informatief, niet verkopend.

### 5. Gerelateerde artikelen

2-4 verwante kennisartikelen.

### 6. CTA

> Bespreek je AI-vraag

## Linkregels vanuit andere pagina's

Volgens [terminology.md](../context/terminology.md):

- Link technische termen met een gele tekstlink naar het passende artikel.
- Link bij voorkeur alleen de eerste relevante vermelding per pagina.
- De linktekst is de term zelf.
- Link alleen naar bestaande, inhoudelijk passende artikelen. Ontbrekende artikelen noteren als benodigde content; geen lege of verzonnen bestemmingen.

## Schrijfregels

- Neutraal en uitleggend; het kenniscentrum is geen verkooppagina.
- Nuance boven stelligheid: lokale AI is bijvoorbeeld niet automatisch goedkoper, veiliger of groener.
- Je/jouw, en AITJE als onderwerp wanneer AITJE wordt genoemd.
- Toon **"Laatst bijgewerkt: [datum]"** bij ieder artikel (besluit 51). Modellen en hardware veranderen snel, dus een datum geeft vertrouwen en maakt duidelijk welke artikelen herzien moeten worden. Geen persoonlijke auteur: AITJE is de afzender.

## Bestaande artikelen

De huidige site heeft 17 NL-artikelen in `knowledgeArticles.ts`, met Engelse varianten en beelden. Bij de bouw per artikel controleren:

- klopt de inhoud nog met de huidige modellen, hardware en het aanbod;
- past de aanspreekvorm en terminologie;
- welke artikelen nodig zijn voor links vanuit de nieuwe product-, dienst- en casepagina's, en welke nog ontbreken.

## Niet in het kenniscentrum

- Prijzen en actuele aanbiedingen
- Productspecificaties (verwijzen naar productpagina's)
- Vragen over AITJE als bedrijf (die horen in de [algemene FAQ](faq.md))

## Open punten

- Ontbrekende artikelen en nieuwe indeling: [content/knowledge-backlog.md](../content/knowledge-backlog.md).

## Bronnen

- [sitemap.md](sitemap.md) — plaats in de navigatie.
- [../context/terminology.md](../context/terminology.md) — linkregels voor technische termen.
- [../strategy/audiences.md](../strategy/audiences.md) — verschillende kennisniveaus.
- [../context/vision.md](../context/vision.md) — de kennisbasis als onderdeel van de visie.
- [../context/decisions.md](../context/decisions.md) — besluiten 49 en 51.
