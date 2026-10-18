# Productpagina’s en redesign — releasecontrole

Datum: 18 oktober 2026. Publieke talen: Nederlands en Engels. De Engelse aanvullingen zijn met de bestaande DeepL-koppeling verwerkt; gecontroleerde correcties staan in `shared/translations/overrides.en.json`.

## Contact en demo’s

De opties `demo-fysiek` en `demo-endpoint` gebruiken dezelfde onderwerpbron voor de pagina en de API. Product en onderwerp worden vooraf ingevuld. De hardware-/hostingkeuze gebruikt de gevalideerde bron `shared/deploymentOptions.ts`, blijft bij herladen behouden en gaat mee in de aanvraagmail en bevestiging.

De productiebuild is met een lokale mailtestserver doorlopen: twee producten × twee demo-opties × twee talen. Ook een geweigerde mailverzending, opnieuw proberen met behoud van invoer en servervalidatie zijn gecontroleerd. Achttien berichten zijn lokaal opgevangen; er zijn hiervoor geen echte testmails verzonden.

## AI-bestanden en structured data

`scripts/generate-ai-files.mjs` genereert de NL/EN-index, volledige versies en afzonderlijke Markdown-pagina’s uit de huidige productdata, FAQ’s, centrale prijzen, hardwarekeuzes, trailers en de Coder-functiekaart. De bestanden worden bij iedere build vernieuwd.

De twee productpagina’s publiceren Product, PropertyValue-eigenschappen, aanbiedingen, FAQPage, BreadcrumbList en een gekoppeld VideoObject. Prijzen blijven beperkt tot software en basisinstallatie; voor hardware of hosting wordt geen bedrag verzonnen. Videodatum, duur en afbeelding komen uit de opgegeven YouTube-trailers. De gesproken videotaal blijft Nederlands, ook op de Engelstalige pagina.

De SEO-audit controleert alle 152 NL/EN-pagina’s op serverweergave, taal, canonical/hreflang, JSON-LD, prijzen, sitemap, AI-bestanden en Markdown-alternatieven. Voor beide productpagina’s worden ook de trailer, gekoppelde identifiers en de uitgebreide AI-inhoud gecontroleerd. De aparte regressiecontrole varieert echte prijsbronnen, publiceert testcontent in een tijdelijke kopie en controleert de uitsluiting van verborgen producten.

## Gecontroleerde primaire bronnen

- [Apple: huidige Mac mini-specificaties](https://www.apple.com/nl/mac-mini/specs/) — M6 en M5 Pro; geschiktheid voor de gekozen AITJE-inrichting wordt vooraf getoetst.
- [BOSGAME M5](https://www.bosgamepc.com/en/products/bosgame-m5-ai-mini-desktop-ryzen-ai-max-395) en [BOSGAME M6](https://www.bosgamepc.com/products/bosgame-m6-hx370-ai-pc-radeon-890m-32gb-ddr5-1tb-pcie-4.0-ssd-mini-pc).
- [Hetzner Cloud](https://www.hetzner.com/cloud/) en [DigitalOcean GPU Droplets](https://www.digitalocean.com/products/gpu-droplets) — applicatiehosting en modelcapaciteit zijn afzonderlijke keuzes.
- [Nebius Token Factory API](https://docs.tokenfactory.nebius.com/api-reference/introduction) — compatibele externe inference; de productkoppeling en privacygrenzen zijn daarnaast tegen de lokale productdocumentatie gecontroleerd.
- [YouTube Coder](https://www.youtube.com/watch?v=rHF4Ba0OZ48) en [YouTube Assistent](https://www.youtube.com/watch?v=NLznu5msvwg) — titels, embedding, publicatiedatum en duur gecontroleerd.
- [Google: Product](https://developers.google.com/search/docs/appearance/structured-data/product-snippet) en [VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video) — geen verzonnen beoordelingen of videometadata.

De AITJE-serverdienst en het workflowafhankelijke besparingsdoel zijn door de opdrachtgever aangeleverd. De site presenteert het doel niet als een algemeen bewezen resultaat of een vaste inferenceprijs.
