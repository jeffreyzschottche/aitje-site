# Media op de AITJE Assistent-pagina

De header en hero van de bestaande productpagina zijn behouden. De secties eronder staan in `AssistantExperience.vue`, met aparte componenten voor de productrondleiding, interactieve antwoorden, beheervoorbeelden, schermopnamen en beeldcomposities.

## Illustraties

`public/img/assistant/v2/` bevat twee nieuwe 3D-illustraties, gemaakt met de ingebouwde image_gen-tool en de imagegen-skill. De PNG-bronnen behouden transparantie. De website gebruikt de gecomprimeerde WebP-versies met een afzonderlijke laag echte schermopnamen. De volledige prompts en herkomst staan in `v2/provenance.json`. De hardware is een conceptillustratie, geen specificatie van meegeleverde hardware.

`public/img/assistant/v3/` bevat de twee aanvullende beelden voor de bovenkant van de pagina: de zilveren en blauwe BOSGAME met AITJE-sticker, op basis van de aangeleverde referentiefoto, en een Linux-server met monitor. Ook deze zijn met de ingebouwde image_gen-tool gemaakt. PNG-bronnen, WebP-versies en de volledige prompts staan samen in deze map; zie `v3/provenance.json`. De Linux-terminal wordt als leesbare HTML over het scherm geplaatst. Op verzoek van de opdrachtgever toont de installatieschets `aitje run qwen3.8`; dit is geen live serverstatus.

## Productopnamen herhalen

De veertien nieuwe scènes tonen de echte frontend op localhost:3000. Alle API-verzoeken worden in een afzonderlijke browsercontext onderschept met fictieve gegevens. Er is geen login op een bestaand account, geen klantdatabase, geen modelgeneratie en geen wijziging aan de werkelijke admininstellingen. Quizzen, grafieken, het proces en het draaibare prototype zijn vooraf uitgewerkte resultaten in de echte artifactweergave.

Vereisten: Chrome, FFmpeg met H.264/GIF-ondersteuning en de bestaande playwright-core-installatie van de assistentrepo. Vanuit de siterepo:

```sh
node scripts/record-assistant-marketing.mjs
```

Optioneel: `AITJE_ASSISTANT_SOURCE` voor het pad naar de frontend, `AITJE_ASSISTANT_URL` voor de lokale ontwikkelserver en `AITJE_CAPTURE_SCENES` voor een komma-gescheiden selectie van scènes. Het script schrijft PNG, MP4 en GIF naar `public/img/assistant/` en bewaart de herkomst in `captures.json`. Ruwe video's blijven in `/tmp/aitje-marketing-v2`.

De eerdere categoriebeheer- en calculatoropnamen komen uit het aangeleverde contentpakket. De GIF-export daarvan is voor de site opnieuw gecomprimeerd.

## Beweging en voorbeelden

Opnamen spelen rechtstreeks als GIF wanneer ze in beeld komen. Er zijn geen video-/GIF-keuzeknoppen. Bij de systeeminstelling minder-bewegen wordt het stilstaande PNG-beeld gebruikt. De 3D-composities gebruiken dezelfde instelling. Losse quiz-, reken- en prototypewidgets op de website zijn verwijderd; de opnamen laten de mogelijkheden binnen de echte chat zien. De afzonderlijke beheervoorbeelden doen geen AI-aanroep en veranderen geen productinstellingen.

De Rubik’s Cube is een volledige Three.js-render met 27 blokjes en 54 gekleurde vlakken, belichting en rotatie. De bron staat in `scripts/assistant-demos/rubiks-cube.js`; `node scripts/assistant-demos/build-rubik.mjs` bundelt deze tot een zelfstandig HTML-resultaat dat in de echte artifactweergave wordt opgenomen. De capture controleert het aantal blokjes en vlakken. De quiz gaat nu over lokale verwerking en tokenkosten.

De uitleg van budgetten is gecontroleerd tegen het actuele permissieregister en de budgetservice: rolrechten worden samengevoegd; de ruimste rolcap geldt per periode en eenheid; een persoonlijke policy vervangt de rolcaps; providergrenzen gelden aanvullend. Tokens tellen lokaal en extern mee. Een lokale terugval omzeilt een bereikte gebruikerstokengrens niet. Een lopend antwoord kan nog over een grens gaan.

## Verkooppagina en beheer

Guardrails zijn uitgewerkt met de drie huidige soorten: kennis lokaal houden, acties begrenzen en antwoorden maskeren of tegenhouden. De productnavigatie is gecontroleerd tegen `frontend/app/shells/sidebars.ts`. De aanvullende opnamen tonen Guardrails, Skills, Modes, Netwerk en Systeem.

`AssistantOwnership.vue` koppelt de echte beelden aan de uitleg over werkwijzen, edge/on-premise verwerking en de oplevering. `AssistantPricing.vue` toont de productprijs, basisinstallatie en korting uit dezelfde centrale prijsbron. Hardware/hosting en aanvullende onderdelen blijven afzonderlijk zichtbaar. De uil- en monitorcomposities staan over de werkelijke sectierand; de schermlagen tonen de hele opname.

## Kosten en modelprestaties

`app/content/assistantComparison.ts` bevat de tarieven en scores voor `AssistantCostOutput.vue`, gecontroleerd op 18 oktober 2026. De prijsbron is [de officiële Claude-prijspagina](https://claude.com/pricing). Het rekenvoorbeeld gebruikt 10 miljoen input- en 2 miljoen outputtokens, zonder caching, batchkorting, tools of belastingen. De lokale rij toont uitsluitend externe API-kosten; aanschaf, software, stroom en beheer zijn afzonderlijke kosten.

De vier benchmarks komen uit [de officiële Qwen3.8-27B-modelkaart](https://huggingface.co/Qwen/Qwen3.8-27B). Ze vergelijken met Opus 4.6 Max, niet met de nieuwere modellen in de prijstabel. Twee getoonde taken vallen hoger uit voor Qwen, twee voor Claude. Het zijn Qwens eigen evaluaties, geen BOSGAME- of AITJE-metingen. De kwantisatie en de gebruikte hardware kunnen andere praktijkscores opleveren. [Ollama](https://ollama.com/library/qwen3.8) documenteert de lokale modelopdracht.

De elektriciteitsindicatie van minder dan €0,40 per dag en circa 8–12 outputtokens/s voor een 4-bit 100B/120B-model zijn door de opdrachtgever gerapporteerde AITJE-praktijkervaringen op BOSGAME-hardware. M5/gpt-oss-120b en M6/Qwen3.8 zijn daarbij genoemd. Er is geen onderliggend meetlog, stroomtarief of gemeten gemiddeld vermogen aangeleverd. De pagina schrijft deze cijfers daarom toe aan AITJE, noemt de afhankelijkheden en presenteert ze niet als totale kosten of algemene snelheidsgarantie. Het daarnaast genoemde bedrag ‘0.12cent’ is door de onduidelijke eenheid niet gepubliceerd; €0,40 per dag is expliciet bevestigd als 40 cent.

## Aanvullende AI Station- en RAG-uitleg

`AiStationArchitecture.vue` en `AssistantRag.vue` voegen tekst en visualisaties toe zonder de bestaande productsecties weg te halen. De vectoropslag is expliciet beschreven als pgvector in de lokale PostgreSQL-database, met originele bestanden buiten de webroot. Bronnen: `docs/architecture/contexts/knowledge.md`, `backend/aitje/knowledge/infrastructure/orm.py`, `backend/aitje/knowledge/application/retrieval.py` en `docs/runbooks/install.md` in de Assistent-repository.

De RAG-uitleg volgt de werkelijke keten: structuurbehoudende passagevorming, embeddings, scope in de databasequery, hybride vector-/trefwoordselectie, weging, ontdubbelen, reranking, drempel en contextbudget. De gebruiker ziet bronverwijzingen met opnieuw gecontroleerde toegang. Testvraag en de opgeslagen evaluatieset worden uitgelegd als controle op gevonden bronnen; antwoordkwaliteit vraagt daarnaast semantische beoordeling.

`docs/runbooks/rag-acceptatie.md` maakt expliciet dat de fictieve seed en gesimuleerde Mac-regressies geen echte BOSGAME-modelacceptatie bewijzen. Er wordt daarom geen algemeen RAG-nauwkeurigheidspercentage verzonnen. De pagina beschrijft een acceptatieproef met eigen vragen, rollen, documenten en echte lokale modellen. Bij offline gebruik moeten modellen en index vooraf lokaal beschikbaar zijn; externe bronverversing en andere online diensten hebben afzonderlijke afhankelijkheden.

## Responsive en bediening

De responsivecontrole van 18 oktober 2026 voor beide productpagina’s staat bij [Coder: responsive en bediening](coder-page-media.md#responsive-en-bediening). Ook de Nederlandse en Engelse Assistent-pagina, de werkplektabbladen, beheervoorbeelden en de vaste mobiele contactbalk zijn daarin meegenomen.

## Externe modellen, hardware en trailers

De Assistent heeft aanvullende uitleg over Nebius Token Factory, OpenAI/Claude met lokale pseudonimisering en inference op AITJE-servers. De uitleg is gecontroleerd tegen `docs/privacy.md` en `docs/runbooks/nebius.md` in de productrepository. De tekst maakt onderscheid tussen herkende persoonsgegevens, niet-herkende inhoud, afbeeldingen en afzonderlijke web-/MCP-kanalen.

`public/img/assistant/v4/privacy-gateway.png` en de WebP-versie zijn met de ingebouwde image_gen-tool gemaakt. Transparantie is behouden. De volledige prompt staat in [v4/provenance.json](../public/img/assistant/v4/provenance.json); het beeld is een conceptillustratie van lokale maskering vóór externe inference.

Beide productpagina’s delen de demo-intro, de expliciete extra hardware-/hostingkosten en de opstellingskeuze. Producttrailers en hun geverifieerde publicatiedata staan in `app/content/productTrailers.ts`. Zie [de releasecontrole](product-pages-release.md) voor de samenhang met contactaanvragen, vertalingen, AI-bestanden en structured data.
