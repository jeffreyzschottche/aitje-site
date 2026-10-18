# Hoe werkt generatie met diffusion-modellen?

Officiële pagina: https://aitje.com/kenniscentrum/hoe-werkt-generatie-met-diffusion-modellen

> Veel generatieve beeldmodellen bouwen een afbeelding op via opeenvolgende stappen vanuit ruis. Wat doen het model, de prompt en de instellingen tijdens dat proces?

### In het kort

Een diffusion-model leert hoe een duidelijke uitwerking uit een verstoorde voorstelling kan ontstaan. Bij beeldgeneratie wordt vaak gestart met willekeurige ruis. Het model berekent vervolgens opeenvolgende bewerkingsstappen, waarbij een opdracht richting geeft aan het resultaat. Zo ontstaat een afbeelding. Deze uitleg gaat over diffusion; niet ieder generatief model gebruikt precies dit proces. Tekstgeneratie met een taalmodel werkt bijvoorbeeld doorgaans met het voorspellen van volgende tokens.

### Wat leert het model tijdens training?

Een vereenvoudigde voorstelling is dat trainingsbeelden worden verstoord met verschillende hoeveelheden ruis. Het model leert informatie waarmee die verstoring kan worden teruggedrongen. Tijdens gebruik wordt die kennis toegepast om vanuit een ruisstart een nieuwe uitwerking op te bouwen. De precieze voorspelling en berekening hangen af van het model en de gekozen methode. Het gaat niet om een opgeslagen foto waarvan een filter wordt verwijderd, maar om een nieuw berekend resultaat.

### Hoe geeft tekst richting aan het beeld?

Een tekstencoder zet de beschrijving om in een representatie die het generatieproces kan gebruiken. Het beeldmodel verwerkt die informatie tijdens de opeenvolgende stappen. Bij veel pipelines gebeurt dit in een compacte, latente ruimte in plaats van rechtstreeks op alle beeldpixels. Een decoder zet de uiteindelijke voorstelling om naar een afbeelding. Daardoor bestaat beeldgeneratie vaak uit meerdere samenwerkende onderdelen en niet uit één enkele berekening.

### Wat doen stappen en guidance?

Het aantal stappen bepaalt hoe vaak de pipeline een bewerking uitvoert. Meer stappen vragen doorgaans meer rekenwerk, maar leveren niet onbeperkt betere kwaliteit. Een scheduler bepaalt hoe de opeenvolgende stappen worden berekend. Guidance stuurt bij ondersteunde modellen hoe sterk de opdracht meeweegt. Een hogere waarde is niet automatisch mooier. Instellingen moeten passen bij het model en de taak; waarden van verschillende modellen zijn niet zomaar vergelijkbaar.

### Wat is een seed bij generatie?

Een seed stuurt de willekeurige start binnen de gebruikte omgeving. Met dezelfde seed kun je varianten beter vergelijken wanneer je andere instellingen gelijk houdt. Dat is handig als je één wijziging in de opdracht wilt beoordelen. Het betekent niet dat hetzelfde getal op een ander model, andere hardware of andere softwareversie exact dezelfde afbeelding oplevert. Voor herhaalbaarheid leg je ook modelversie, instellingen en de overige onderdelen van de pipeline vast.

### Wat betekent dit voor praktisch gebruik?

Begin met een vaste taak en beoordeel welke instellingen bruikbare resultaten geven. Werk eventueel eerst met een kleiner formaat om compositie te verkennen en pas daarna met het eindformaat. Een geselecteerd gebied bewerken kan geschikter zijn dan een volledige afbeelding opnieuw laten maken. Houd bij hoeveel pogingen en bewerkingsstappen nodig zijn. Zo beoordeel je snelheid en kosten van de hele beeldworkflow in plaats van alleen één generatie.

## Bronnen

- [Hugging Face — Onderdelen van een diffusion-pipeline](https://huggingface.co/docs/diffusers/en/quicktour)
- [Hugging Face — Text-to-image](https://huggingface.co/docs/diffusers/en/using-diffusers/conditional_image_generation)
- [Hugging Face — Reproduceerbare generatie](https://huggingface.co/docs/diffusers/en/using-diffusers/reusing_seeds)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
