# Typografie

## Bevestigde lettertypen

- **Sora:** koppen.
- **Inter:** leestekst en gewone UI-tekst.
- **JetBrains Mono:** kleine technische labels en code.

De oprichter wil fonts centraal kunnen vervangen. Onderstaande opzet is een implementatievoorstel; de frontend is hiermee nog niet aangepast.

```css
:root {
  --font-heading: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-technical: "JetBrains Mono", monospace;
}

body { font-family: var(--font-body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
.technical-label, code, pre { font-family: var(--font-technical); }
```

Laat componenten en eventuele Tailwind-fontutilities dezelfde centrale rollen gebruiken. Bij een fontwissel moeten ook het fontbestand en de laadconfiguratie worden bijgewerkt; een variabele laadt een nieuw font niet vanzelf.

## Patroon voor koppen en nadruk

De oprichter heeft gevraagd om een patroon gebaseerd op Laws of UX. Dit is de voorgestelde vertaling:

### 1. Herkenbare rollen

Gebruik dezelfde stijl voor dezelfde rol, ongeacht de paginalayout: hero, sectiekop, kaarttitel, leestekst en technisch label.

Dit volgt het principe dat overeenkomst in uiterlijk samenhang suggereert. [Law of Similarity](https://lawsofux.com/law-of-similarity/)

### 2. Kop en uitleg horen samen

Een optioneel klein label, de kop en de toelichting vormen één groep. De afstand tussen die onderdelen is kleiner dan de afstand tot de volgende inhoudsgroep.

Zo helpt nabijheid de lezer de structuur begrijpen. [Law of Proximity](https://lawsofux.com/law-of-proximity/)

### 3. Gele nadruk is selectief

Een hero of belangrijk overgangsmoment mag één kort betekenisvol fragment benadrukken. Gewone sectiekoppen en kaarttitels blijven doorgaans in één tekstkleur.

Niet iedere kop krijgt een geel woord. Binnen een compositie krijgt één inhoudelijk zwaartepunt de meeste nadruk; CTA's houden daarnaast hun herkenbare functie. Op lichte achtergronden moet het fragment leesbaar blijven: kies een geschikte accentvariant of bijvoorbeeld een geel detail met donkere letters.

Deze terughoudendheid is afgeleid van het effect dat een afwijkend element meer opvalt; exact één fragment is een AITJE-ontwerpregel, geen wetenschappelijk vast aantal. [Von Restorff Effect](https://lawsofux.com/von-restorff-effect/)

## Schaal als startpunt

Onderstaande maten zijn voorstellen om responsief te testen, geen definitieve pixelspecificatie.

| Rol | Richting | Gewicht |
| --- | --- | --- |
| Hero | Circa 36–72 px, afhankelijk van breedte | Sora bold |
| Sectiekop | Circa 28–44 px | Sora semibold/bold |
| Kaarttitel | Circa 20–26 px | Sora semibold |
| Intro | Circa 18–22 px | Inter regular |
| Leestekst | Circa 16–18 px, ruime regelafstand | Inter regular |
| Label/bijschrift | Circa 13–14 px | Inter of functioneel JetBrains Mono |

Maak de schaal centraal instelbaar met typografische tokens. Gebruik vloeibare schaal waar dat helpt, zonder lange Nederlandse koppen of mobiele schermen te laten overlopen.

## Tekstbeeld

- Koppen zijn groot en compact, met genoeg regelafstand voor leesbaarheid.
- Leestekst krijgt rust en een beperkte regelbreedte.
- Technische labels zijn accenten, niet een tweede laag uitleg boven ieder blok.
- Hoofdletters zijn passend voor AITJE en korte labels, niet voor hele alinea's.
- Gebruik semantische kopniveaus; kies niet een verkeerd niveau alleen vanwege de grootte.
- Laat belangrijke tekst echte tekst blijven, ook wanneer een hero een rijk beeld bevat.

## Links en voorwaarden

Kennislinks blijven herkenbaar door de geel/okerkleur, onderstreping en focus. Noodzakelijke voorwaarden staan leesbaar bij de claim en niet alleen in kleine tekst of een kennisartikel.

## Nog testen

Fontlading en fallback, lange koppen, accentcontrast, mobiele regelafbreking, zoom en de definitieve schaal.

## Samenhang

[voice.md](../copy/voice.md), [headlines.md](../copy/headlines.md), [colors.md](colors.md) en besluit 48.
