# AITJE Coder — productpagina, media en codevoorbeelden

De bestaande header, hero, prijzen en bruikbare productrondleiding zijn behouden. De pagina is uitgebreid met werkende voorbeelden, echte productopnamen, een overzicht van de functionaliteit en twee transparante beeldcomposities. In de aanvullende AI Station-ronde zijn beide productpagina’s verrijkt; de bestaande Assistent-inhoud is behouden.

## Bronnen en functionele dekking

Controle op 18 oktober 2026 tegen `/Users/jeffreyzschottche/Sites/AITJE_Coder`: de huidige webclient, `README.md`, `docs-site/operator-nl.md`, `docs/deepdive-docs/agent-runs.md`, de budget-/repositoryrechtennotities en `docs/custom-solutions.md`. De kaart in `app/content/coderCapabilities.ts` groepeert de productfuncties; zij doet geen claim dat iedere externe integratie op iedere hardwareconfiguratie is doorgemeten.

| Productingang / functie | Waar op de verkooppagina |
|---|---|
| Nieuwe taak, repository, branch, model, multi-repo, webzoeken | Werkruimte en taakroute |
| Live stappen, bestanden, commando’s, tests, stoppen en herstel bij herhaling | Taakroute en Agent & review |
| Verslag, diff, oordeel en opmerking per bestand, opnieuw uitvoeren, vergelijken | Taakroute en echte bugfix in de code-showcase |
| Review, GitHub device-login, forks, PR naar GitHub/GitLab/Gitea | Taakroute en Agent & review |
| Wachtrij, volgorde/pauze, planning, eenmalig/cron/herhaling, push/issue, rondes, interactieve voorrang | Wachtrij en Agent & review |
| Mijn sessies, CLI, editor, /connect, persoonlijke sleutel, completion, contextsamenvatting | Je eigen tools en Tools & modellen |
| Repositories, per-persoon Git-URL-beleid, zelf verbinden, intrekken | Beheer en Team & budgetten |
| Skills, import SKILL.md, per-repo beschikbaarheid | Beheer en Skills & koppelingen |
| Maatwerk, toegang, dagmaximum, instellingen en bevestigde schrijfacties | Skills & koppelingen; apart begroot |
| Meldingen via mail/webhooks, webzoeken, MCP-registry/eigen servers | Beheer en Skills & koppelingen |
| Modellen, standaardmodel, API-compatibiliteit, externe modeltoegang | Tools & modellen, Beheer en Eigen omgeving |
| Gebruik, tarieven, cache, geld/tokenbudgetten, vier scopes, perioden, afrondtijd, herstel | Beheer en Team & budgetten |
| Chat en Ctrl J-hulpassistent, menselijke bevestiging | Beheer en Tools & modellen |
| Gebruikers, rollen, uitnodiging/QR, blokkeren, sleutels en limieten | Beheer en Team & budgetten |
| Auditlog, support-toegang, systeem, capaciteit, telemetrie | Beheer & continuïteit |
| Back-ups, herstel, updates/rollback, watchdog, containerlimieten, retentie | Beheer & continuïteit |
| Desktop, telefoon, licht/donker en vier talen | Werkruimte, mobiele compositie en Tools & modellen |

## Echte opnamen

De bestaande 36 geselecteerde WebP-screenshots en zes montages komen uit `docs/website-screenshots/`. De bronscreenshots zijn op een BOSGAME M6 gemaakt: de demo-agent heeft de taken werkelijk uitgevoerd. Bedrijfsnamen, gebruiker en repository zijn fictief. `taak-start`, `taak-bezig` en `taak-resultaat` zijn verschillende taken; verslag, diff en afgerond resultaat horen bij dezelfde btw-fix. De pagina houdt dat onderscheid zichtbaar. De pagina’s Modellen en Gebruik met interne meetnotities zijn niet toegevoegd.

De extra `budget-scope-desktop-dark.webp` en `budget-scope-desktop-light.webp` komen uit `docs/goals/assets/budgetten/budget-scope-*-1440.png`. Ze tonen de echte admininterface met voorbeeldinstellingen in een lokale testomgeving, niet een nieuw bewezen appliance- of betaalde-providerexperiment. Dit staat bij het beeld.

`CoderMedia.vue` en `CoderArtwork.vue` gebruiken rechtstreeks GIF als een opname in beeld komt; er zijn geen video-/GIF-keuzeknoppen. Minder-bewegen gebruikt een stilstaand beeld. `CoderScreen.vue` biedt een native vergrootdialoog met sluiten via knop, achtergrond of Escape. Geen bestaande accounts of instellingen zijn aangepast voor deze website.

## 3D-illustraties

Met de imagegen-skill en de ingebouwde `image_gen`-tool zijn twee beelden gemaakt: `public/img/coder/v2/workbench.png` en `mobile-edge.png`. De site gebruikt de gelijknamige WebP-versies. Alpha is behouden; de beelden lopen over de werkelijke sectierand. De productinterface is als aparte HTML-laag ingevoegd, zonder de inhoud van de screenshots te veranderen. Volledige prompts en herkomst staan in [provenance.json](../public/img/coder/v2/provenance.json).

## Werkende codevoorbeelden

`app/content/coder-demos/` bevat de leesbare bronbestanden; `CoderCodeStudio.vue` importeert precies deze bronnen als tekst. De bestanden in `public/demos/coder/` worden hieruit opgebouwd:

```sh
npm run demos:coder
```

Dit gebruikt de bestaande Three.js- en esbuild-installatie en het lokale `zip`-programma. De ZIP-voorbeelden bevatten broncode, uitvoer en een README; het 3D-voorbeeld werkt al gebundeld zonder npm-installatie. Wie de bron wijzigt, kan opnieuw bundelen met de meegeleverde packageconfiguratie.

- **AURA:** procedureel 3D-object met drie gimbals, metaal, glazen kern, voet, gegraveerde markeringen, licht en schaduw. OrbitControls, materiaalkeuze, exploded view, reset, pauze en toetsenbordbediening. Houdt rekening met minder-bewegen en rendert alleen wanneer zichtbaar. Geen gegenereerde afbeelding die zich voordoet als WebGL.
- **Orbit:** werkelijk bedienbaar projectboard met teamfilter, zoeken, verplaatsen, tellingen, feedback en behoud van toetsenbordfocus. Voorbeelddata staan alleen in het geheugen.
- **Btw-fix:** leesbare Python-uitwerking van dezelfde Decimal/ROUND_HALF_UP-oplossing als de echte demo. De nieuwe module is apart gecontroleerd op halve centen, laag/nultarief, creditbedrag en totaal. De vermelding ‘alle 3 de tests slagen’ verwijst naar de bestaande echte productopname, niet naar deze aanvullende controle.

De 3D-scène en webapp zijn speciaal voor deze pagina geschreven. Er wordt niet beweerd dat een gemeten lokale Coder-run precies deze bestanden produceerde. De pagina noemt dit bij de voorbeelden. De bron is te bekijken, te kopiëren en te downloaden; er wordt geen model aangeroepen.

## Kostenboodschap

€0 betreft externe API-tokenkosten bij lokale modelverwerking. De agent gebruikt wel tokens en rekenkracht. Hardware, software, stroom, onderhoud en eventuele externe modellen blijven aparte kosten. De bestaande prijsbron en de gemeten demo-uitkomsten zijn behouden; er is geen nieuwe besparings-, snelheids- of terugverdientijdclaim toegevoegd.

## AI Station, repository en modelkwaliteit

`AiStationArchitecture.vue` legt de eigen omgeving en opslag uit voor beide producten. Voor Coder is de bron `deploy/docker-compose.appliance.yml`: lokale PostgreSQL met `postgres-data`, Git-/werkmappen onder `/var/aitje`, afzonderlijk blijvende modelcache. Voor Assistent zijn de kennisarchitectuur, ORM en installatiehandleiding gecontroleerd: PostgreSQL + pgvector met `chunks`/`chunk_vectors`, originele kennisbestanden onder `/var/lib/aitje/files/knowledge/`. Afwijkende serverinrichting wordt apart afgestemd. Een browser of IDE kan uiteraard informatie en eigen werkbestanden op de gebruikerswerkplek hebben.

`CoderRepositoryWorkflow.vue` beschrijft waarom een eigen werkmap, review, PR, CI en mergebeleid bij elkaar horen. De planningsuitleg omvat eenmalig, werkdagen/dag/week/cron en ondersteunde push-/issuegebeurtenissen. Er wordt geen onbewezen claim gedaan dat andere agents dit niet kunnen. De agent hoeft geen open browser te hebben; de box, rechten, model en benodigde externe bronnen moeten beschikbaar zijn. Een externe AI-storing blokkeert lokale inferentie niet, maar een Git-storing kan clone/push/PR alsnog blokkeren.

`CoderModelEvidence.vue` houdt twee evaluaties uit elkaar. De eigen proef is C6 ronde 2 van 17 september 2026 op een M6 met 32 GB, zoals vastgelegd in `docs/goals/c6-modelvergelijking-m6.md`: drie Python-opdrachten × twee herhalingen, gecorrigeerde beoordeling met verborgen tests. Tiel 6/6 (553 s mediaan), Ornith 1.0 5/6 (384 s), Ornith 1.5 4/6 (831 s). Dit wordt niet gepresenteerd als algemene slagingskans. Een openbare, inhoudelijk beperkte samenvatting staat in `public/evidence/coder-m6-comparison.json`.

De gepubliceerde Qwen3.8-27B/Opus 4.6 Max-scores zijn op 18 oktober 2026 gecontroleerd tegen de [primaire modelkaart](https://huggingface.co/Qwen/Qwen3.8-27B). Het zijn geen scores van de getoonde M6-runs. De afwijkende meetopzetten en de overgenomen officiële Opus-score bij SWE-bench Pro worden genoemd. Nieuwe modellen worden als een te testen mogelijkheid beschreven; er is geen garantie voor een toekomstige prestatie, releasedatum of inbegrepen update.

## Responsive en bediening

Op 18 oktober 2026 zijn beide productpagina’s in Chrome gecontroleerd op 320×740, 360×800, 430×932, 600×900, 820×1180, 1024×768, 1280×800, 1920×1080 en 844×390. De pagina’s en de projectboard-demo hebben geen onbedoelde horizontale overflow. Brede tabellen en tabstroken blijven waar nodig afzonderlijk scrollbaar.

De aanvullende touchcontrole op 320×740, 820×1180 en 844×390 omvatte het mobiele menu, functie- en beheertabbladen, budget- en guardrailvoorbeelden, de screenshotdialoog, materiaalkeuze en exploded view van AURA, het filteren en verplaatsen van projectboardtaken en de footer boven de vaste contactbalk. Deze controles zijn geslaagd zonder JavaScript-fouten.

Beide talen zijn bovendien op 320 pixels gecontroleerd. De werkplektabbladen van Assistent kunnen afbreken en hebben minimaal 44 pixels hoogte. De invoeringsstappen van Coder staan onder 480 pixels in één kolom. De Engelse vertaling van ‘Overdracht’ is vastgelegd als ‘Handover’. De vertaalcontrole dekt alle 5.487 gevonden teksten en de productiebuild is geslaagd. De schermen en touchbediening zijn gesimuleerd in Chrome.

## Hardware, inference en laatste visuele correcties

De verkooptekst beschrijft Coder als een omgeving op gekozen hardware of een server, met afzonderlijke modelverwerking waar gewenst. Beide prijsblokken gebruiken `ProductDeploymentPicker.vue`: BOSGAME M5/M6, actuele Mac mini-uitvoeringen, bestaande hardware, een eigen server, Hetzner, DigitalOcean, AITJE-datacenterservers en een adviesoptie. Hardware, hosting en betaalde inference zijn zichtbaar aanvullend op software en basisinstallatie. De gekozen opstelling wordt als gevalideerde `omgeving`-parameter naar het contactformulier meegenomen en in aanvraag én bevestiging vermeld.

`ProductModelRoutes.vue` beschrijft eigen modellen, Nebius Token Factory en externe modelaanbieders. `AitjeInferenceServers.vue` beschrijft het AITJE-serveraanbod. De door de opdrachtgever gevraagde vergelijking met frontier-API’s van OpenAI, Anthropic en Gemini staat als workflowafhankelijk besparingsdoel van maximaal 100×, met toetsing van kwaliteit, volume en kosten in het voorstel; er is geen universeel bewezen besparingspercentage gepubliceerd.

De afzonderlijke tabel met drie uitgevoerde agenttaken is op verzoek verwijderd; modelvergelijkingen en de echte btw-bugfix blijven beschikbaar. De zes GIF’s worden met `node scripts/build-coder-gifs.mjs` opgebouwd uit volledige productopnamen, zonder zoom, pan of uitsnede. De 3D-demo heeft begrensde canvasafmetingen voor Retina en een eigen indeling voor titel, render en bediening. De aanduiding ‘voorbeeldgeneratie’ maakt de relatie tussen prompt, code en resultaat zichtbaar; de herkomstnotitie blijft onderscheid maken tussen de uitgewerkte websitevoorbeelden en echte modelruns.

De actuele releasecontrole en de SEO-bronnen staan in [product-pages-release.md](product-pages-release.md).
