# Huidige site-overzicht

Dit document beschrijft de huidige publieke pagina-structuur van `aitje.nl` zoals die nu in `app/pages` en de gekoppelde data staat.

## 1. Hoofdstructuur in navigatie

### Nederlands

| Route | Type | Wat staat hier nu ongeveer? |
| --- | --- | --- |
| `/` | Hoofdpagina | Grote merk- en overzichtspagina voor AITJE met intro, productblokken, diensten, argumenten voor lokaal/cloud, cases en CTA's. |
| `/producten` | Overzicht | Grote verzamelpagina voor hardware, software en toepassingen van AITJE. |
| `/producten/hardware` | Overzicht | Hardware-index met selector en kaarten voor hardwareproducten. |
| `/producten/software` | Overzicht | Software-index met selector en kaarten voor softwareproducten en workflows. |
| `/diensten` | Overzicht | Diensten- en consultancy-pagina; positioneert AITJE als strategische AI-partner. |
| `/cases` | Overzicht | Praktijkvoorbeelden / showcase van gerealiseerde oplossingen. |
| `/kenniscentrum` | Overzicht | Artikelhub met uitleg van AI-, software- en technische begrippen. |
| `/roadmap` | Overzicht | Tijdlijn met waar AITJE aan bouwt. |
| `/visie` | Overzicht | Visiepagina over onafhankelijkheid, continuiteit, lokaal werken en strategische positie. |
| `/faq` | Overzicht | Grote FAQ-pagina met product-, techniek-, privacy- en dienstenvragen. |
| `/contact` | Conversie | Contactpagina met formulier/kanalen en CTA's. |

### Engels

Dezelfde hoofdstructuur bestaat ook in het Engels onder `/en/...`:

- `/en`
- `/en/producten`
- `/en/producten/hardware`
- `/en/producten/software`
- `/en/diensten`
- `/en/cases`
- `/en/kenniscentrum`
- `/en/roadmap`
- `/en/visie`
- `/en/faq`
- `/en/contact`

## 2. Productpagina's

### Hardware detailpagina's

| Nederlands | Engels | Bron |
| --- | --- | --- |
| `/producten/hardware/aitje-assistent` | `/en/producten/hardware/aitje-assistent` | `hardwareCatalog(.en).ts` |
| `/producten/hardware/aitje-custom` | `/en/producten/hardware/aitje-custom` | `hardwareCatalog(.en).ts` |

Opmerking:
- `aitje-assistent` is inhoudelijk de AITJE Cube / Assistant hardwarepagina.
- `aitje-custom` is een uitgebreid maatwerk-hardwareverhaal, niet alleen een simpele productkaart.

### Software detailpagina's

| Nederlands | Engels | Bron |
| --- | --- | --- |
| `/producten/software/aitje-assistent-os` | `/en/producten/software/aitje-assistent-os` | `softwareCatalog(.en).ts` |
| `/producten/software/aitje-assistent-client` | `/en/producten/software/aitje-assistent-client` | `softwareCatalog(.en).ts` |
| `/producten/software/aitje-assistent-kennisbank` | `/en/producten/software/aitje-assistent-kennisbank` | `softwareCatalog(.en).ts` |
| `/producten/software/wordpress-ai-search-overview` | `/en/producten/software/wordpress-ai-search-overview` | `softwareCatalog(.en).ts` |
| `/producten/software/wordpress-ai-chat` | `/en/producten/software/wordpress-ai-chat` | `softwareCatalog(.en).ts` |
| `/producten/software/wordpress-alt-tekst-generator` | `/en/producten/software/wordpress-alt-tekst-generator` | `softwareCatalog(.en).ts` |
| `/producten/software/promptpaleis` | `/en/producten/software/promptpaleis` | `softwareCatalog(.en).ts` |
| `/producten/software/raad-van-bestuur` | `/en/producten/software/raad-van-bestuur` | `softwareCatalog(.en).ts` |
| n.v.t. | `/en/producten/software/aitje-notulist` | alleen `softwareCatalog.en.ts` |

Opmerking:
- In de Engelse data staat ook `aitje-notulist`; die route bestaat dus technisch wel als `/en/producten/software/aitje-notulist`, maar er is geen directe navigatielink voor gevonden in `SiteNavigation.vue`.
- Sommige software-detailpagina's zijn inhoudelijk veel uitgebreider en voelen meer als mini-landingspagina's dan als gewone productdetails, vooral `promptpaleis` en `raad-van-bestuur`.

## 3. Kenniscentrum

### Artikelindex

- `/kenniscentrum`
- `/en/kenniscentrum`

### Artikeldetailpagina's

Deze slugs bestaan op zowel Nederlands als Engels:

- `/kenniscentrum/wat-is-een-llm`
- `/kenniscentrum/wat-is-edge-ai`
- `/kenniscentrum/wat-is-rag`
- `/kenniscentrum/wat-is-context`
- `/kenniscentrum/wat-is-een-context-window`
- `/kenniscentrum/wat-is-een-ai-agent`
- `/kenniscentrum/wat-zijn-embeddings`
- `/kenniscentrum/wat-is-prompt-engineering`
- `/kenniscentrum/wat-is-een-api`
- `/kenniscentrum/wat-is-een-webhook`
- `/kenniscentrum/wat-is-een-backend`
- `/kenniscentrum/wat-is-een-frontend`
- `/kenniscentrum/wat-is-cloud`
- `/kenniscentrum/wat-is-een-workflow`

Engelse varianten:

- `/en/kenniscentrum/wat-is-een-llm`
- `/en/kenniscentrum/wat-is-edge-ai`
- `/en/kenniscentrum/wat-is-rag`
- `/en/kenniscentrum/wat-is-context`
- `/en/kenniscentrum/wat-is-een-context-window`
- `/en/kenniscentrum/wat-is-een-ai-agent`
- `/en/kenniscentrum/wat-zijn-embeddings`
- `/en/kenniscentrum/wat-is-prompt-engineering`
- `/en/kenniscentrum/wat-is-een-api`
- `/en/kenniscentrum/wat-is-een-webhook`
- `/en/kenniscentrum/wat-is-een-backend`
- `/en/kenniscentrum/wat-is-een-frontend`
- `/en/kenniscentrum/wat-is-cloud`
- `/en/kenniscentrum/wat-is-een-workflow`

Opmerking:
- De Engelse kenniscentrumroutes gebruiken nog steeds Nederlandse slugs.
- Er zijn ook redirect-aliases aanwezig, zoals `wat-is-een-taalmodel` -> `wat-is-een-llm` en `wat-betekent-lokale-ai` -> `wat-is-edge-ai`.

## 4. Cases

### Case-index

- `/cases`
- `/en/cases`

### Case-detailpagina's

Deze slugs bestaan op zowel Nederlands als Engels:

- `/cases/thuiszorg-voice-rapportage`
- `/cases/boekenwinkel-rag-isbn`
- `/cases/it-beheer-lokale-coding-agents`
- `/cases/rijschool-whatsapp-notulist`

Engelse varianten:

- `/en/cases/thuiszorg-voice-rapportage`
- `/en/cases/boekenwinkel-rag-isbn`
- `/en/cases/it-beheer-lokale-coding-agents`
- `/en/cases/rijschool-whatsapp-notulist`

## 5. Overige losse pagina's buiten hoofdnavigatie

Deze pagina's bestaan ook nog in `app/pages`, maar hangen niet duidelijk in de huidige hoofdstructuur:

### Nederlands

- `/academy`
- `/aitje`
- `/aitje-custom`
- `/aitje-pro`
- `/oplossingen`
- `/shop`

### Engels

- `/en/academy`
- `/en/aitje`
- `/en/aitje-custom`
- `/en/aitje-pro`
- `/en/oplossingen`
- `/en/shop`

Korte duiding:
- `/aitje`, `/aitje-custom` en `/aitje-pro` lijken oudere of parallelle product-/positioneringspagina's naast de huidige `/producten/...` structuur.
- `/oplossingen` voelt als een aparte doelgroep-landingspagina naast `/diensten` en `/producten`.
- `/shop` en `/academy` vergroten de omvang van de site, maar zijn niet zichtbaar als kernonderdeel van de navigatie.

## 6. Redirectpagina's en route-varianten

Een deel van de URL's is geen zelfstandige inhoudspagina, maar wel een echte route die binnen de site gebruikt wordt:

### Redirect-only pagina's

| Route | Doet nu dit |
| --- | --- |
| `/academy` | redirect naar `/kenniscentrum` |
| `/shop` | redirect naar `/producten` |
| `/en/academy` | redirect naar `/en/kenniscentrum` |
| `/en/shop` | redirect naar `/en/producten` |
| `/en/aitje` | redirect naar `/en/producten/hardware/aitje-assistent` |
| `/en/aitje-custom` | redirect naar `/en/producten/hardware/aitje-custom` |
| `/en/aitje-pro` | redirect naar `/en/producten/hardware/aitje-assistent` |

Opmerking:
- De Nederlandse varianten `/aitje`, `/aitje-custom` en `/aitje-pro` zijn geen redirect-only pagina's; daar staat nog echte content op.

### Query-gestuurde route-varianten

De site gebruikt ook meerdere varianten van de contactroute als instappunt:

- `/contact?onderwerp=demo`
- `/contact?onderwerp=offerte`
- `/contact?onderwerp=kennismaking`
- `/contact?onderwerp=council`
- `/contact?onderwerp=wordpress-plugin`

En in sommige gevallen ook met voorgeladen berichttekst via `bericht=...`.

Deze zijn inhoudelijk geen aparte pagina-bestanden, maar functioneel wel aparte entry points in de huidige siteflow.

## 7. Samenvatting van de huidige omvang

Als je alleen kijkt naar de publieke pagina's die nu technisch bestaan:

- 11 hoofdnavigatiepagina's in het Nederlands
- 11 hoofdnavigatiepagina's in het Engels
- 2 hardware detailpagina's in NL + 2 in EN
- 8 software detailpagina's in NL + 9 in EN
- 14 kennisartikelen in NL + 14 in EN
- 4 cases in NL + 4 in EN
- 6 extra losse pagina's in NL + 6 in EN

Dat maakt de site nu inhoudelijk groot, gelaagd en op meerdere plekken dubbel:

- hoofdnavigatie
- productstructuur
- detailstructuur
- kenniscentrum
- cases
- extra parallelle landingspagina's
- volledige Engelse variant

## 8. Afbakening: wat hier wel en niet in zit

Wel meegenomen:

- alle publieke routebestanden in `app/pages`
- alle data-gedreven dynamische detailpagina's uit hardware, software, cases en kenniscentrum
- de Engelse varianten daarvan
- redirect-only routes zoals `/shop` en `/academy`
- functioneel gebruikte query-gestuurde contactvarianten

Niet meegenomen:

- `server/api/...` endpoints
- externe links zoals `promptpaleis.nl`
- assets, afbeeldingen, PDF's en technische plugin-routes

## 9. Eerste inhoudelijke observatie

De site voelt nu niet als "een compacte heldere frontend", maar als een mix van:

- merkverhaal
- consultancysite
- productcatalogus
- softwaremarketplace
- kennisbank
- casebibliotheek
- roadmap/visiedocument

Dat verklaart goed waarom het nu groter en ingewikkelder voelt dan je eigenlijk wilt.
