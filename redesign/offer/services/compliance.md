# Veilig AI-gebruik

## Status en uitgangspunt

Deze inhoud is bevestigd met de oprichter. Prijzen blijven voorlopige dummydata; actuele technische informatie over aanbieders wordt per opdracht onderzocht.

AITJE helpt klanten begrijpen waar hun AI-data terechtkomt, welke controle zij hebben en hoe zij AI praktischer en veiliger kunnen gebruiken.

De nadruk ligt op datalocatie, gegevensstromen, instellingen en technische maatregelen. AITJE signaleert aandachtspunten rond privacy en AVG, maar levert geen bindend juridisch oordeel, certificering of garantie op compliance.

## AI-datalocatiecheck

**In welke landen wordt jouw AI-data verwerkt en opgeslagen?**

Bij AI-gebruik kunnen berichten, documenten en andere gegevens naar externe aanbieders gaan. De geografische locatie van verwerking en opslag is een belangrijk onderdeel van de beoordeling.

De AI-datalocatiecheck brengt de huidige situatie in kaart:

- welke AI-diensten, aanbieders en modellen worden gebruikt;
- welke gegevens vanuit welke processtappen worden verstuurd;
- op welke servers, bij welke aanbieders en in welke landen verwerking en opslag plaatsvinden, voor zover vast te stellen;
- wat aanbieders bewaren en welke informatie daarover beschikbaar is;
- wie toegang kan krijgen en welke controle de klant zelf houdt;
- welke privacyinstellingen beschikbaar en ingeschakeld zijn;
- welke locaties, instellingen of gegevensstromen onduidelijk blijven.

AITJE maakt onderscheid tussen vastgestelde informatie en onbekende gegevens. Een exacte serverlocatie wordt niet ingevuld op basis van alleen de vestigingsplaats van een aanbieder.

### Wat de klant ontvangt

Een begrijpelijk overzicht van de gebruikte diensten, gegevensstromen, servers en landen, met aandachtspunten en verbeteradvies op hoofdlijnen.

Het overzicht maakt duidelijk waar gegevens worden verwerkt en bewaard en welke vragen of keuzes daaruit volgen. Het doet geen algemene uitspraak dat iedere buitenlandse dienst alle controle wegneemt of dat iedere Nederlandse server automatisch veilig is.

### Vervolgonderzoek en uitvoering

Wil de klant de aangetroffen situatie veranderen, dan volgt een afzonderlijk betaald traject op uurbasis.

AITJE kan daarin onderzoeken hoe het beter kan, geschikte alternatieven vergelijken en een aanpak uitwerken. De klant kiest vervolgens welke veranderingen AITJE uitvoert.

De check bevat dus geen automatisch inbegrepen migratie, uitgewerkt alternatief ontwerp of uitgebreid vervolgonderzoek.

## Praktische maatregelen

Afhankelijk van de klantvraag kan AITJE adviseren over of werken aan:

- minder gegevens delen met externe modellen;
- persoonsgegevens verwijderen of anonimiseren voordat een bericht naar een frontier-model gaat;
- lokale AI of AI op een eigen server inzetten;
- passende Nederlandse of Europese infrastructuur onderzoeken;
- externe modellen bewust gebruiken waar ze waarde toevoegen;
- privacyinstellingen van gebruikte AI-diensten controleren en uitleggen;
- guardrails, toegangsrechten en menselijke controle toevoegen;
- processen aanpassen zodat duidelijk is welke gegevens waarheen mogen;
- logging en inzicht in het gebruik verbeteren.

Welke maatregelen passen, wordt per omgeving beoordeeld. Anonimisering wordt niet zonder controle als volledig of gegarandeerd voorgesteld.

### Verdieping bevestigd op 5 oktober 2026

De oprichter wil de pagina vooral concreet maken rond maatregelen vóór verzending, kennisopvraging en uitvoering:

- **Dataminimalisatie en anonimisatie:** persoonsgegevens en herkenbare details lokaal verwijderen of vervangen vóór een externe frontier-call. Pseudonimisatie met labels is niet vanzelf volledige anonimisatie; context kan iemand herkenbaar houden.
- **Gescheiden context:** nieuwe sessies per taak of klant en bewust ingesteld geheugen. Dit voorkomt onnodig meesturen van historie, maar verandert geen providerbewaring of trainingbeleid.
- **Providerinstellingen:** waar beschikbaar traininggebruik uitschakelen, bewaartermijnen onderzoeken en voorwaarden en uitzonderingen voor zero-data retention controleren. Geen algemene belofte van direct verwijderen bij alle enterprise-API's.
- **Role-based access:** authenticatie en autorisatie buiten de LLM afdwingen, vóór retrieval. Alleen toegestane documenten, categorieën en tekststukken mogen in de RAG-context terechtkomen. Dezelfde rechten gelden bij tool calls.
- **Prompt injection en jailbreaks:** een invoer-/documentfilter of LLM-firewall combineren met scheiding van instructies en bronmateriaal, beperkte toolrechten en validatie van acties. Eén filter wordt niet als sluitende beveiliging gepresenteerd.
- **Billing en gebruik:** budgetcontrole vóór calls, rate limiting per gebruiker en taak, begrensde retries en stopmomenten. Waarschuwingen bij providers zijn niet altijd harde caps; vertraagde rapportage en lopende calls tellen mee.
- **Human in the loop:** voorstel en gevolgen tonen, expliciet akkoord vóór belangrijke acties en de bevestiging loggen.
- **Outputvalidatie:** codecontroles, broncontrole via RAG en eventueel LLM-as-a-Judge. RAG of een tweede model sluit fouten niet uit; belangrijke uitkomsten kunnen menselijke beoordeling nodig hebben.
- **Lokale verwerking:** gevoelige stappen waar passend intern houden, met aandacht voor netwerk, toegang, logging en externe terugvalroutes. Geen algemene garantie dat lokaal draaien gegevenslekken onmogelijk maakt.
- **Auditlogs en sleutels:** gebruiker, model, bronnen, akkoord en actie herleidbaar maken. Gevoelige inhoud niet automatisch volledig loggen; toegang en bewaartermijnen afspreken. API-sleutels afschermen en rechten beperken.

De pagina laat een illustratief voorbeeld van gegevensvoorbereiding en een interactieve rolverdeling voor RAG zien. Dit zijn uitlegelementen, geen werkende authenticatie- of anonimisatievoorziening van de website.

De AI-datalocatiecheck blijft een afzonderlijk geprijsd onderzoek met overzicht en verbeteradvies. Een uitgewerkt maatregelenplan en implementatie worden apart op scope en uren afgesproken.

De Guardrailcheck blijft beschreven onder [Optimalisatie](optimization.md). Praktische interne afspraken en AI-beleid sluiten aan op [Advies en analyse](consultancy.md).

## AI-wegwijs

**Slim en veilig werken met AI.**

AI-wegwijs is aanvullende begeleiding die klanten helpt AI beter te begrijpen en gebruiken. Het versterkt het partnerschap en is geen centrale, zelfstandige trainingsactiviteit van AITJE.

Het kan bestaan uit:

- informatieve sessies over de AI die de klant gebruikt;
- toegang tot online omgevingen met richtlijnen en documentatie;
- minicursussen en voorbeeldprompts;
- uitleg over privacyinstellingen, datalocatie en wat aanbieders bewaren;
- praktische hulp bij het verbeteren van de dagelijkse werkwijze.

Promptpaleis is een door de oprichter genoemd voorbeeld van een eigen site die hierbij een rol kan spelen. De exacte toegang en koppeling aan het aanbod zijn nog niet vastgelegd.

AI-wegwijs kan onderdeel zijn van de samenwerking of SLA, of afzonderlijk worden afgesproken. Toegang, materiaal en sessies volgen de gemaakte afspraken; ze zijn niet automatisch allemaal inbegrepen.

### Voor directe klanten en IT-partners

AI-wegwijs is bedoeld voor MKB-klanten én IT-bedrijven en hun klanten.

IT-partners kunnen deze begeleiding als dienst aan hun eigen MKB-klanten aanbieden. AITJE kan de kennis, materialen en eventuele sessies verzorgen. Zichtbaarheid en taakverdeling worden per samenwerking afgesproken volgens het [partner-model](../../strategy/partner-model.md).

## Prijs en afbakening

Voorlopige bedragen uit de bestaande prijsbasis blijven uitsluitend dummydata:

| Onderdeel | Voorlopige prijsbasis |
| --- | ---: |
| AI-datalocatiecheck | €1.499, overgenomen van de voormalige Europese AI-check |
| Vervolgonderzoek en uitvoering | €85 per uur |
| AI-beleid | Vanaf €399, zie Advies en analyse |
| Guardrailcheck | €449, zie Optimalisatie |

De oude cursusprijs van €399 is historische dummydata. De invulling en eventuele losse prijs van AI-wegwijs worden later afgestemd; de dienst is geen vaste promptcursus.

De eerdere compliancebundel van €1.799 wordt niet als bevestigd actueel pakket aangeboden. De gewijzigde inhoud moet eerst worden afgestemd voordat een nieuwe bundel wordt gepubliceerd.

## Voorbeeldsituatie

**Een MKB-bedrijf** gebruikt meerdere AI-diensten voor klantmails en documenten, maar weet niet in welke landen die gegevens worden verwerkt en opgeslagen.

AITJE brengt de gebruikte aanbieders, bekende serverlocaties en privacyinstellingen in kaart en benoemt ontbrekende informatie. Het bedrijf wil bepaalde gegevens dichter bij huis houden en laat AITJE vervolgens op uurbasis onderzoeken welke lokale of Nederlandse/Europese oplossing past. De klant beslist daarna over uitvoering.

Via AI-wegwijs kunnen medewerkers uitleg en naslagmateriaal krijgen over welke informatie zij met welke dienst mogen delen.

Dit is een voorbeeldsituatie, geen gerealiseerde klantcase.

## Grenzen aan de boodschap

Gebruik geen beloften zoals:

- een volledige juridische toets aan alle regelgeving;
- gegarandeerd AVG-proof of volledig veilig;
- een sessie of minicursus die automatisch aan wettelijke scholingseisen voldoet;
- met één bundel volledig compliant worden.

AITJE levert praktische inzichten, begeleiding en technische verbeteringen. Juridische beoordeling en certificering zijn geen onderdeel van dit aanbod.

## Nog uit te werken

- Definitieve prijs en scope van de AI-datalocatiecheck.
- Rapportvorm en werkwijze voor het vastleggen van onbekende locaties.
- Inhoud, toegang en prijsafspraken voor AI-wegwijs en Promptpaleis.
- Concrete afspraken voor levering via IT-partners.

## Bronnen en samenhang

- Bevestigde antwoorden van de oprichter over Veilig AI-gebruik, AI-datalocatiecheck en AI-wegwijs.
- Bestaande prijsbasis uit het bedrijfsdocument; bedragen worden later gecontroleerd.
- [Aanbodoverzicht](../overview.md), [Advies en analyse](consultancy.md), [Optimalisatie](optimization.md) en de contextdocumenten.
- [OWASP — Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html), [RAG Security](https://cheatsheetseries.owasp.org/cheatsheets/RAG_Security_Cheat_Sheet.html) en [System Prompt Leakage](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/).
- [Anthropic — API and data retention](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention).
- [European Data Protection Board — Anonymisation / pseudonymisation](https://www.edpb.europa.eu/topics/ai-and-technology/anonymisation-pseudonymisation_en).
