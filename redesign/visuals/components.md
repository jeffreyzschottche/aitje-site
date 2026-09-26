# Componenten en interactie

## Status

Deze afspraken bepalen de gedeelde vormtaal. Pagina's combineren componenten volgens hun doel; niet iedere pagina krijgt dezelfde layout.

Exacte maten, timings en technische implementatie worden bij de bouw getest. De huidige frontend is nog niet aangepast.

## Header met twee toestanden

De header blijft tijdens scrollen beschikbaar en verandert van vorm:

- **Bovenaan:** een brede/full-width header die aansluit op de bovenkant van de pagina.
- **Na scrollen:** een compactere, gecentreerde pill-header met het bestaande logo, navigatie en hoofdactie.

Ongeveer 80% breedte is de door de oprichter genoemde richting voor ruime schermen, geen harde maat op ieder apparaat. Gebruik een passende maximale breedte; op mobiel blijft de header breed genoeg voor bruikbare bediening.

De overgang mag rustig verlopen, zonder inhoud te laten verspringen of menu's af te snijden. Test langere navigatietekst, focus, geopende menu's en gereduceerde beweging.

De hoofdactie is **Bespreek je AI-vraag**. Exacte menu-indeling volgt uit sitemap.md; neem oude navigatievoorstellen niet automatisch over.

## Knoppen en links

- **Primair:** pill-vorm, AITJE-geel met donkere tekst.
- **Secundair:** dezelfde vorm, rustige outline/neutrale behandeling passend bij de achtergrond.
- **Tekstlink:** herkenbare tekst met onderstreping of ondersteunende pijl.
- **Kennislink:** de afgesproken geel/okerfamilie met onderstreping.

Gebruik consistente hover-, focus-, active- en disabled-toestanden. Vermijd wisselende omkeringen tussen zwart, wit en geel per afzonderlijk blok.

Volg [calls-to-action.md](../copy/calls-to-action.md) voor knopteksten en routes. Producten kennen de regelroute, demo-aanvraag en afzonderlijke zelfinstallatie-aankoop.

## Kaarten

Kaarten hebben bescheiden afgeronde hoeken, dunne randen en terughoudende schaduw. Geen dikke neo-brutalistische kaders of zware harde slagschaduw.

Een productkaart kan verpakking, naam, korte uitleg, status en prijs combineren. Een dienstkaart legt vooral de klantvraag en bijdrage van AITJE uit. Een voorbeeldkaart bevat het zichtbare label Voorbeeldsituatie.

Kaarten zijn een middel om inhoud te groeperen, geen verplichte container voor ieder stuk tekst of beeld. Geplande producten blijven zichtbaar met een duidelijke disabled-status.

## Composities per pagina

De componentenset kan onder meer bevatten:

- open tekst/beeldsecties;
- grote hero- of bannerscènes;
- productpresentaties met vrijstaande of overhangende visuals;
- demonstratievideo's en fotocarrousels;
- compacte iconenlijsten;
- processtappen en vergelijkingen;
- prijsopbouw en SLA-tabellen;
- contactformulieren en technische uitklapblokken.

Gebruik een carousel wanneer meerdere beelden nuttig zijn; maak de bediening expliciet en toegankelijk. Bij video worden afspelen, geluid en bewegingsgedrag bewust uitgewerkt. Geen van deze media is verplicht op iedere pagina.

De contactpagina blijft taakgericht. Een productpagina mag meer demonstratie, uitleg en beeldlagen hebben.

## Lagen en overhangende beelden

Gebruik waar passend meerdere visuele lagen om diepte te maken. Een ei, vogel of verpakking kan over een sectiegrens uitsteken of optisch samenvloeien met de achtergrond.

Tekst, klikgebieden en focus blijven vrij. Houd rekening met mobiele uitsnedes, stapelvolgorde en horizontale overflow; volgorde in de code moet ook zonder decoratie logisch zijn.

## Typografie en iconen

Gebruik de centrale fontrollen voor Sora, Inter en JetBrains Mono. Geen aparte fontkeuze per component.

Gebruik herkenbare lijniconen met consistente dikte en schaal. Geel is een accent; iconen hoeven niet allemaal in een aparte zwarte of gele tegel. Kies een bestaande passende set bij de uitvoering, zonder nu een nieuwe iconenbibliotheek als besluit te verzinnen.

## Formulieren en feedback

Een contactroute heeft korte, duidelijke invoer en zichtbare labels. De definitieve velden volgen in contact.md.

Laat foutmeldingen uitleggen wat aangepast moet worden en behoud ingevoerde gegevens waar mogelijk. Succes- en foutstatussen gebruiken tekst en waar passend een icoon naast kleur.

Product- en demo-aanvragen nemen relevante context mee. Een aanvraag is geen automatisch geboekte afspraak.

## Uitklapblokken

Gebruik voor technische verdieping en FAQ's herkenbare bediening, zichtbare focus en duidelijke open/dicht-status.

Noodzakelijke voorwaarden voor claims, prijzen en aankoop blijven direct zichtbaar. Verstop die niet in een accordion.

## Motion

Begin met subtiele feedback:

- een lichte lift of randverandering bij klikbare kaarten;
- rustige zoom op geselecteerde beelden;
- enkele bewegende scènes;
- korte, vloeiende overgangen van componenttoestanden.

Hover heeft een gelijkwaardige focusbehandeling waar relevant. Op touch blijft alle noodzakelijke informatie zonder hover zichtbaar.

Een interactief 3D-ei is een optionele vervolgstap; de pagina moet zonder die techniek al goed ontworpen zijn. Een custom cursor is geen bevestigde functie.

## Nog uit te werken

- Radius-, spacing- en schaduwtokens.
- Scrollpunt, breedte en overgang van de header.
- Mobiele navigatie en menu-indeling.
- Exacte focus-, hover- en motionvarianten.
- Formuliervelden en mediabediening.
- Technische componentstructuur en beeldlagen.

## Samenhang

[principles.md](principles.md), [colors.md](colors.md), [typography.md](typography.md), [imagery.md](imagery.md) en besluit 48.
