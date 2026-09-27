# Redesign — implementatie en controle

Uitgevoerd op 26 september 2026, op basis van de Markdown-documenten en inspiratiebeelden in deze map. De bestaande Nuxt-app en routes blijven de basis.

## Wat is vernieuwd

- Alle paginatemplates: homepage, producten, diensten, partnerpagina, cases, kenniscentrum, over AITJE, visie, FAQ en contact.
- Een lichte basis met grote typografie, gele accenten, donkere natuurscènes en meer afwisseling tussen beeld, tekst, schema's en productvoorbeelden.
- Twaalf nieuwe WebP-beelden: vier merkbeelden, Custom en zeven geplande productverpakkingen. De bestaande Assistent- en Coder-verpakkingen zijn behouden. Prompts staan in `visuals/asset-manifest.md`.
- Interactieve uitleg over lokale/server/hybride omgevingen, illustratieve chat- en codevoorbeelden, productgalerijen, kennisschema's en concrete dienstonderdelen.
- Mobiele navigatie, filters en zoeken, contactvoorselectie en formulierfeedback.
- Onbevestigde klantresultaten en fictieve biografieën worden niet als echte referenties gepresenteerd. Voorbeeldcases en geplande producten zijn herkenbaar gelabeld.

## Validatie

- Productiebuild met `nvm use 23` (Node 23.11.1).
- 51 interne routes: HTTP 200, één H1 per pagina.
- 16 representatieve pagina's op desktop (1440px) en mobiel (390px): geen ontbrekende afbeeldingen, horizontale pagina-overflow of afgeknipte interactieve elementen.
- Geen JavaScript- of Vue-hydratatiefouten tijdens de browsercontrole.
- Navigatie tussen productdetailpagina's, mobiel menu en Escape, FAQ-zoekfunctie, case-/kennisfilters, omgevingskeuze, productdemo's en galerij gecontroleerd.
- Contactformulier: verplichte velden, voorselectie, foutmelding met behoud van invoer en succesmelding gecontroleerd met onderschepte API-antwoorden. Er is geen echte e-mail verstuurd.
- Extra controle op 320, 768 en 1024px; de te lange demoknop is ingekort.
- `git diff --check` zonder fouten.

## Nog te bevestigen voor publicatie

- Definitieve prijzen: bestaande bedragen blijven zichtbaar als voorlopig en worden niet als definitieve Offer-structured-data gepubliceerd.
- Echte teamnamen, biografieën en portretfoto's; nu staan er inhoudelijke rollen zonder verzonnen personen.
- Telefoonnummer: het dummy-nummer wordt niet getoond; contact loopt via formulier en e-mail.
- Echte klantreferenties en eventuele privacy-/voorwaardenpagina's vragen bronmateriaal.
- Engelse versie volgt conform de brondocumenten na akkoord op de Nederlandse inhoud.

De wijzigingen zijn lokaal aangebracht; er is niets gepusht of gepubliceerd.
