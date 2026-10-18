# Wat is modelrouting?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-modelrouting

> Met modelrouting kiest een workflow welk AI-model een taak uitvoert. Zo kun je lokale modellen en externe API's combineren op basis van kwaliteit, gegevens en kosten.

### In het kort

Modelrouting is het doorsturen van een AI-verzoek naar een passend model volgens afgesproken criteria. De keuze kan afhangen van de soort taak, de gevoeligheid van de gegevens, de benodigde kwaliteit of beschikbare capaciteit. Een router kan eenvoudige regels gebruiken of zelf een model zijn. Het is dus een onderdeel van de workflow, geen nieuw taalmodel.

### Waarom niet alles naar hetzelfde model?

Verschillende modellen hebben verschillende sterke kanten. Een taak als berichtcategorisatie kan een andere aanpak vragen dan ingewikkelde codeanalyse. Je hoeft niet automatisch het zwaarste model voor iedere stap te gebruiken. Onderzoek naar routing laat zien dat kosten en kwaliteit samen geoptimaliseerd kunnen worden; de uitkomst van jouw proces moet je wel zelf meten.

### Een praktisch voorbeeld

Een mogelijke orderworkflow laat code eerst klantgegevens ophalen. Een klein model zet de e-mail om in afgesproken velden. Als verplichte gegevens ontbreken, wordt de order tegengehouden. Alleen een onduidelijke uitzondering gaat naar een sterker model of een medewerker. De router bepaalt de route, terwijl de controles voorkomen dat een onvolledige order automatisch doorgaat.

### Regels en grenzen vastleggen

Bepaal welke gegevens naar een externe API mogen en welke taken lokaal moeten blijven. Spreek ook af wat er gebeurt bij een storing, een ongeldige reactie of een overschreden budget. Een alternatieve route mag geen gegevensbeleid omzeilen. Een foutmelding of menselijke beoordeling kan in zo'n situatie een betere vervolgstap zijn dan automatisch elders proberen.

### Hoe weet je of de routing werkt?

Vergelijk verschillende routes op dezelfde representatieve opdrachten. Tel geslaagde resultaten, correcties, wachttijd en alle verzoeken mee. Een goedkoper model dat regelmatig opnieuw moet proberen kan duurder uitpakken. Houd ook bij waarom een route is gekozen. Daarmee kun je zien welke uitzonderingen te vaak worden doorgestuurd en waar een betere regel nodig is.

### Wat betekent dit voor AITJE?

Bij token management en optimalisatie kan modelrouting deel zijn van een grotere aanpak. Eerst maak je de taak kleiner en de invoer gerichter; daarna vergelijk je modellen. Zo stuur je op een bruikbaar eindresultaat en houd je de modelkeuze vervangbaar. Of de oplossing lokaal, aan de edge of via frontier-API's werkt, volgt uit de eisen van de taak.

## Bronnen

- [RouteLLM — Onderzoek naar modelrouting en de afweging tussen kwaliteit en kosten](https://arxiv.org/abs/2406.18665)
- [Hugging Face — Tool use en function calling](https://huggingface.co/docs/transformers/en/chat_extras)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
