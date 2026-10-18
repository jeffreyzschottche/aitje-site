# Nederlands en Engels

De Engelse versie is op 6 oktober 2026 toegevoegd met DeepL, op verzoek van de oprichter. Nederlandse pagina’s behouden hun bestaande URL. De Engelse versie begint bij `/en` en gebruikt `products`, `services`, `cases`, `knowledge`, `about-aitje`, `vision`, `faq` en `contact` als secties. Detail-slugs blijven dezelfde inhoud identificeren.

De vlaggenknop staat in de header op desktop en mobiel, met 🇳🇱 en 🇬🇧 als taalkeuzes in een dropdown. Wisselen behoudt pagina, queryparameters en anker, waaronder case-/kennisfilters en het vooraf gekozen contactonderwerp en product. Interne paginalinks volgen de actieve taal; afbeeldingen, API-routes, externe links en technische identifiers blijven gedeeld.

## Teksten bijwerken

1. Pas de Nederlandse bron aan in `aitje.nl/app` of de gedeelde contactkeuzes.
2. Voer vanuit `aitje.nl` `npm run translate:english` uit. Het script leest `DEEPL_KEY` uit de omgeving of de bestaande `.env` en vertaalt uitsluitend ontbrekende teksten met DeepL naar Brits Engels.
3. Controleer de Engelse formulering, namen, bedragen en voorwaarden. Zet redactionele correcties in `shared/translations/overrides.en.json` en voer het script opnieuw uit.
4. Voer `npm run translations:check` en de productiebuild uit. Controleer nieuwe inhoud ook op de Engelse pagina.

`shared/translations/en.json` bevat de opgeslagen vertalingen en wordt met de site gebouwd. De browser krijgt geen DeepL-key en doet geen vertaalverzoeken. De Engelse woordenlijst wordt alleen geladen voor Engelse pagina’s. Bestaande vertalingen worden hergebruikt; de vertaalronde is niet nodig tijdens een normale deployment.

## Technische uitwerking

- `shared/siteLocales.ts` beheert de routekoppeling; `pages:extend` maakt de Engelse routes uit dezelfde paginabestanden.
- De Vite-plugin in `scripts/lib/localize-template.mjs` vertaalt zichtbare Vue-template-tekst en links op client en server. De Nederlandse bron blijft leesbaar. Codevoorbeelden, invoerwaarden, klassen en andere technische identifiers worden niet vertaald.
- `useSiteLanguage` en de taalplugin leveren tekst- en linkhelpers. Route-middleware laadt de woordenlijst voordat een Engelse pagina wordt getoond.
- Dynamische tekst gebruikt opgeslagen vertalingen met genummerde placeholders. FAQ-/kenniszoeken gebruikt de zichtbare taal; rekenvoorbeelden en artikeldatums gebruiken de taal voor getallen en datums.
- Paginatitels, beschrijvingen, toegankelijke labels, breadcrumbs, FAQ-structured-data, `html lang`, canonicals, hreflang-links en sitemap zijn meertalig.

De bestaande Resend-endpoint, payload en mailinstellingen zijn ongewijzigd. Formulierlabels en foutmeldingen zijn Engels op de Engelse pagina. De bestaande bevestigingsmail blijft Nederlands; tijdens deze wijziging zijn geen contactverzoeken verstuurd. De live mailcontrole volgt afzonderlijk, volgens de instructie van de oprichter.

## Controle op 6 oktober 2026

- Alle 4.278 verzamelde bronstrings hebben een opgeslagen Engelse vertaling.
- Alle 80 Vue-bestanden compileren na de taaltransformatie; de productiebuild slaagt.
- De sitemap bevat 76 Nederlandse en 76 Engelse pagina’s met taalalternatieven. Alle 76 Engelse routes geven HTTP 200.
- Representatieve pagina’s, taalwisselen in beide richtingen, query-/ankerbehoud, Engelse zoekfuncties en de contactkeuzes zijn in Chrome gecontroleerd.
- Mobiele en desktopweergave op 320, 390, 768, 1024, 1280 en 1440 pixels gecontroleerd. De header gebruikt onder 1280 pixels het uitklapmenu, zodat de langere Engelse labels passen.
- Engelse 404-pagina en mobiele navigatie naar Custom gecontroleerd. Geen contactverzoek of e-mail verstuurd.
