# Zoekmachines en AI-systemen — NL en EN

Op 6 oktober 2026 is de vindbaarheid van alle gepubliceerde pagina’s uitgebreid. Het doel is dat AITJE herkenbaar is als Nederlandse specialist in lokale AI, automatisering en workflows, met duidelijke informatie over het aanbod en de uitvoering. Er worden geen verzonnen ranglijsten, beoordelingen, certificeringen, adressen of bedrijfsregistraties toegevoegd.

## Eén bron voor pagina’s en prijzen

- `aitje.nl/app/content/pricing.ts`: tarieven, productprijzen, basisinstallatie en introductievoorwaarden.
- `aitje.nl/app/content/products.ts`: productinhoud en publicatiestatus. `disabled` komt niet op detailpagina’s, sitemap of AI-index.
- `aitje.nl/app/content/services.ts`: diensten, onderdelen en onderhoudsplannen.
- `aitje.nl/app/content/cases.ts`: gepubliceerde cases met hun bestaande labels.
- `aitje.nl/app/content/knowledge.ts`: gepubliceerde artikelen.
- `aitje.nl/app/content/seo.ts`: feitelijke bedrijfsinformatie en metadata voor statische pagina’s.
- `aitje.nl/app/content/searchCatalog.ts`: automatisch afgeleide pagina-inventaris voor sitemap en AI-bestanden.

Een nieuw product of case in de bestaande inhoudscollectie krijgt automatisch een NL- en EN-vermelding, een Markdown-alternatief en structured data op de bestaande detailtemplate. Een product zonder installatiepakket krijgt uitsluitend zijn eigen bevestigde aanbod. Nieuwe Nederlandse teksten moeten zoals voorheen met DeepL worden vertaald; dat is geen extra SEO-inventarisatiestap.

## AI-bestanden

`/llms.txt` bevat de Nederlandse bedrijfsintroductie, prijsvoorwaarden en verwijzingen naar alle gepubliceerde pagina’s. `/en/llms.txt` doet hetzelfde in het Engels. De twee bestanden verwijzen naar elkaar. `/llms-full.txt` en `/en/llms-full.txt` bundelen de paginateksten. Iedere pagina heeft daarnaast een eigen Markdown-weergave onder `/llms/pages`, met een verwijzing naar de officiële HTML-pagina.

`scripts/generate-ai-files.mjs` genereert deze bestanden bij iedere Nuxt-build, ook buiten het npm-script om. De development-watcher vernieuwt ze na wijzigingen in inhoud, pagina’s en vertalingen. De bestanden worden met de productiebuild meegeleverd; een inhoudswijziging wordt live bij de volgende deployment. Oude gegenereerde detailbestanden verdwijnen wanneer een pagina niet langer gepubliceerd is. Geen DeepL-key of andere private configuratie gaat naar deze bestanden.

## Structured data en metadata

Alle pagina’s krijgen één JSON-LD-grafiek met dezelfde Organization-identiteit, WebSite, een eigen pagina-identiteit en de actieve taal. Over- en contactpagina’s hebben passende paginatypes. Producten, diensten, cases en kennisartikelen krijgen afzonderlijke gekoppelde entiteiten; overzichtspagina’s een ItemList. Zichtbare FAQ’s behouden hun vragen en antwoorden. Dit is inhoudsmarkering, geen belofte van een FAQ-rich-result.

Prijsmarkering onderscheidt losse software, basisinstallatie, een vanafprijs en maandelijkse ondersteuning. Btw-status, uitgesloten infrastructuur en het beperkte introductieaanbod blijven expliciet. Uurwerk dat op de pagina alleen ‘Vast uurtarief’ heet, krijgt geen verzonnen vaste totaalprijs. Het algemene uurtarief staat in de FAQ en de AI-prijsintroductie, uit dezelfde prijsbron.

Canonicals, taalalternatieven en breadcrumbs verwijzen naar de juiste NL- of EN-pagina. De sitemap gebruikt dezelfde inventaris en bevat taalalternatieven inclusief x-default. De bestaande robots.txt staat publieke crawlers toe. Schema-URL’s en technische waarden blijven intact; leesbare beschrijvingen volgen de taal. De HTML verwijst ook naar het eigen Markdown-alternatief en de taalindex.

## Controle

`npm run seo:test` wijzigt in een tijdelijke kopie de uurprijs, scanprijs, productprijs, installatiebasis en onderhoudsprijs, en voegt een product, verborgen product en case toe. De test controleert beide taalindexen, snapshots, de gedeelde sitemap-inventaris en prijs-schema’s. De echte werkbestanden blijven ongemoeid.

`npm run seo:audit -- --base-url <lokale-preview>` controleert de server-rendered HTML van alle gepubliceerde NL- en EN-pagina’s, JSON-LD, canonical/hreflang, beschrijvingen, publicatiestatus, prijzen/btw, sitemap, crawltoegang en AI-alternatieven. `npm run seo:check` detecteert verouderde bestanden. Deze controles versturen geen contactformulieren of e-mails.

Controle op 6 oktober 2026: productiebuild geslaagd; alle 76 Nederlandse en 76 Engelse pagina’s slagen voor de audit. De 156 gegenereerde AI-bestanden zijn actueel. De regressietest met gewijzigde prijzen en nieuwe inhoud slaagt. De development-hook vernieuwt de bestanden bij een inhoudswijziging. Browsernavigatie en taalwisselen houden één juiste JSON-LD-grafiek en canonical, zonder hydrationfouten; analytics- en contactverzoeken zijn daarbij geblokkeerd.

## Verwachtingen en vervolgstappen na livegang

Een nummer 1-vermelding in een AI-antwoord is niet af te dwingen. `llms.txt` is een voorgestelde conventie om website-inhoud bruikbaar aan te bieden, geen rangschikkingssignaal met gegarandeerde werking. Google vraagt voor AI Overviews en AI Mode dezelfde basis als voor gewone zoekresultaten: crawlbare, relevante inhoud, indexeerbare pagina’s en structured data die bij de zichtbare tekst past.

Na deployment: sitemap opnieuw aanbieden in Search Console, belangrijke NL- en EN-URL’s inspecteren, productmarkering met de Rich Results Test nalopen en indexering en relevante zoekvragen volgen. Onderbouwde praktijkcases, duidelijke specialisatie en onafhankelijke vermeldingen blijven nodig om bekendheid en vertrouwen op te bouwen. Search Console en externe bedrijfsprofielen zijn tijdens deze codewijziging niet aangepast.

Bronnen: [Google over AI-functies en websites](https://developers.google.com/search/docs/appearance/ai-features), [Google-richtlijnen voor structured data](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [llms.txt-voorstel](https://llmstxt.org/).
