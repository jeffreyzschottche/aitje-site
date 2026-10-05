# Dienstpagina (template)

## Status

Dit document beschrijft de structuur voor individuele dienstpagina's (besluit 51). De inhoud per dienst staat in [offer/services/](../offer/services/); deze template bepaalt alleen de volgorde op de pagina.

Geldt voor: AI-scan, Advies en analyse, Installatie en inrichting, Optimalisatie, Veilig AI-gebruik, AITJE Custom en Ondersteuning en onderhoud. De pagina voor IT-bedrijven en bureaus heeft een eigen opzet in [partners.md](partners.md).

Uitwerking 5 oktober 2026: AITJE Custom gebruikt voor Aanpak en Oplevering een eigen visuele compositie met zes projectfases, een feedbacklus en een overdrachtsblok. Het beschrijft een volledig maatwerktraject tot het afgesproken eindproduct; een prototype kan een tussenstap zijn. De gedeelde hero, prijs, cases, FAQ en contactroute blijven gebruikt.

Keuze oprichter, 5 oktober 2026: alle individuele dienstpagina's gebruiken dezelfde gele balk en witte sectienavigatie als AI-scan. Ook Voor IT-bedrijven en bureaus volgt dit patroon. `ServicePageNav.vue` staat direct tegen de hero, toont drie korte kernpunten met iconen uit de centrale dienstinhoud en daarna de links naar de aanwezige paginaonderdelen. Dezelfde kleur, typografie, afstanden en mobiele behandeling gelden voor elke dienst. AI-scan behoudt de bestaande kernpunten en sectielinks; andere diensten krijgen passende teksten en ankers. De dienstenarchive houdt de eigen opzet.

## Doel van de pagina

Een dienstpagina moet:
1. Duidelijk maken welke vraag de dienst beantwoordt
2. Laten zien wat AITJE doet en wat de klant krijgt
3. Eerlijk maken wat wel en niet inbegrepen is, en wat het kost
4. Een passende vervolgstap bieden

## Structuur

### 1. Hero

**Titel:** naam van de dienst.

**Kop:** de vraag of het resultaat in gewone taal, bijvoorbeeld:
> Waar kan AI je werk makkelijker, beter of goedkoper maken?

**Knop:** de dienstknop uit [calls-to-action.md](../copy/calls-to-action.md), bijvoorbeeld **Vraag een AI-scan aan** of **Bespreek je AI-idee**.

### 2. Wat het is

1-2 alinea's, vanuit "In één zin" in het dienstdocument.

### 3. Voor wie

Herkenbare situaties en klantvragen.

### 4. Hoe het werkt

Stappen van de werkwijze, bijvoorbeeld intake → onderzoek → rapport, of meten → verbeterplan → uitvoering → opnieuw testen.

### 5. Wat je krijgt

De concrete oplevering: rapport, werkende omgeving, verbeterplan, MVP, service-uren.

### 6. Onderdelen (waar van toepassing)

Afgebakende checks of pakketten binnen deze dienst, elk met korte uitleg en prijs. Bijvoorbeeld Guardrailcheck onder Optimalisatie, AI-datalocatiecheck onder Veilig AI-gebruik, of Core, Plus en Max onder Ondersteuning en onderhoud.

### 7. Prijs en afbakening

- Prijs (Excl btw), vanafprijs of uurtarief.
- Wat niet standaard inbegrepen is.
- Wat als betaald vervolgwerk geldt.

Prijzen blijven dummydata tot controle vóór publicatie.

### 8. Cases

1-3 previews uit [cases.md](cases.md). Vervangt een los blok "Voorbeeldsituatie".

### 9. Veelgestelde vragen

Specifieke vragen over deze dienst. De hoofdvragen verschijnen ook op de [algemene FAQ](faq.md), vanuit dezelfde bron. Met FAQPage-structured data.

### 10. Afsluitende CTA

Dezelfde dienstknop als in de hero, eventueel met **Bespreek je AI-vraag** als tweede route.

### 11. Gerelateerde diensten en producten

2-3 links, bijvoorbeeld van AI-scan naar Custom, of van Installatie naar Ondersteuning.

## Regels

- Geen juridische garanties bij Veilig AI-gebruik: AITJE signaleert aandachtspunten, maar geeft geen bindend oordeel.
- Geen "gratis", reactietermijn of gegarandeerde uitkomst zonder bevestigde afspraak.
- Technische termen linken naar het kenniscentrum.

## Bronnen

- [../offer/services/](../offer/services/) — inhoud per dienst.
- [../offer/pricing.md](../offer/pricing.md) — prijzen.
- [../copy/calls-to-action.md](../copy/calls-to-action.md) — knoppen.
- [../context/decisions.md](../context/decisions.md) — besluiten 28, 31-37 en 51.
