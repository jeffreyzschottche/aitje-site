# Kleuren

## Uitgangspunt

Behoud het bestaande AITJE-palet. De oprichter vraagt geen nieuwe kleurenidentiteit, maar een consequent gebruik van de kleuren die al in de site zitten.

Lichte vlakken vormen de basis, donkere scènes geven afwisseling en geel blijft de dominante merkkleur. Blauw is niet verplicht en ook niet verboden: het wolkenblok is een geslaagde scène, geen aanwijzing om de hele interface blauw te maken.

## Aangetroffen kleuren in de huidige code

| Bestaande kleur | Voorbeelden van huidige toepassing |
| --- | --- |
| `#facc15` | Gele CTA's, iconen en accenten. |
| `#212121`, `#111111`, zwart | Donkere secties, kaarten en knoppen. |
| Wit, `#fafafa`, `#f5f5f5` | Lichte achtergronden en oppervlakken. |
| Grijstinten uit utilities | Leestekst, randen en secundaire informatie. |
| `#d4a700`, hover `#a16207` | Kennislinks in de globale stylesheet. |

Bronnen: `aitje.nl/app/pages/index.vue` en `aitje.nl/app/assets/css/main.css`.

Aanwezigheid in de code is geen bewijs dat iedere huidige combinatie goed werkt. De implementatie moet de varianten terugbrengen tot een beheersbare set rollen.

## Vaste rollen

| Rol | Richting |
| --- | --- |
| Merkaccent | Bestaand AITJE-geel. |
| Primaire actie | Gele knop met donkere tekst, consequent op lichte en donkere secties. |
| Lichte basis | Wit/lichtgrijs uit het bestaande palet. |
| Donkere scène | Een vaste donkere basiskleur, met bijpassende lichte tekst. |
| Hoofdtekst | Donker op licht, licht op donker. |
| Secundaire tekst | Een leesbare lichtere/donkerdere variant binnen dezelfde sectie. |
| Randen | Subtiele neutrale scheiding. |
| Kennislinks | Herkenbare geel/okerfamilie met onderstreping en zichtbare focus. |
| Status | Functionele kleur met tekst of icoon; niet uitsluitend kleur. |

Geel benadrukt acties, geselecteerde elementen, grafische details en incidenteel een kopfragment. Gele tekst op een geel vlak en witte leestekst op een felgeel vlak zijn geen standaardvarianten.

## Lichte en donkere secties

Definieer per sectiethema de rollen voor achtergrond, tekst, subtiele tekst, rand en links. Componenten gebruiken deze rollen in plaats van steeds eigen losse combinaties te kiezen.

Beeld mag natuurlijke kleuren bevatten. Een blauwe lucht of groen mos is geen extra algemene UI-accentkleur.

## Implementatierichting

Centraliseer semantische kleurvariabelen, bijvoorbeeld:

- `--color-brand`
- `--color-page`
- `--color-surface`
- `--color-surface-dark`
- `--color-text`
- `--color-text-muted`
- `--color-border`
- `--color-link`

De precieze variabelen en selectie van bestaande tinten worden bij de bouw vastgelegd. Nieuwe willekeurige hexwaarden per component zijn niet de bedoeling.

## Leesbaarheid

Controleer contrast op de daadwerkelijke achtergrond, ook bij transparantie of foto's. Neem de bestaande kennislinkkleur niet automatisch als geschikt voor iedere achtergrond over; kies waar nodig een leesbare donkerdere variant uit dezelfde kleurfamilie.

Gebruik onderstreping, vorm en focus naast kleur om interactie herkenbaar te maken.

## Open uitwerking

- Definitieve selectie van lichte en donkere basistinten uit de bestaande site.
- Geteste tekst-, link-, hover- en focuskleuren per sectiethema.
- Functionele statuskleuren en disabled-varianten.

## Samenhang

[vibe.md](vibe.md), [principles.md](principles.md), [components.md](components.md) en besluit 48.
