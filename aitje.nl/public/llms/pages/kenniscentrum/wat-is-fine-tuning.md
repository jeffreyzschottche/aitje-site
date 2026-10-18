# Wat is fine-tuning?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-fine-tuning

> Fine-tuning traint een bestaand model verder met gerichte voorbeelden. Wanneer helpt dat, en wanneer zijn een betere prompt of documentzoekfunctie voldoende?

### In het kort

Fine-tuning is het verder trainen van een bestaand model op een gerichte verzameling voorbeelden. Je begint niet vanaf nul: het model heeft al algemene patronen geleerd. Met extra training probeer je gedrag voor een bepaalde taak, stijl of domein te verbeteren. Daarbij veranderen de gewichten van het model of worden aanvullende trainbare onderdelen gebruikt.

### Wat voor gedrag kun je aanpassen?

Denk aan berichten indelen volgens eigen categorieën, steeds hetzelfde antwoordformaat gebruiken of bepaalde soorten code beter aanvullen. De voorbeelden laten het gewenste verband tussen invoer en uitvoer zien. Fine-tuning is geen garantie dat het model alle bedrijfsregels foutloos toepast. Regels die absoluut moeten gelden kun je beter ook met gewone software controleren.

### Fine-tuning is iets anders dan documenten ophalen

Bij RAG zoek je relevante informatie op en geef je die mee bij een vraag. Bij fine-tuning verander je modelgedrag door training. Voor actuele prijzen, medewerkersgegevens en handleidingen is ophalen vaak makkelijker bij te werken. De twee technieken kunnen samengaan: een aangepast model kan antwoorden geven op basis van informatie uit een zoekfunctie.

### Een praktisch voorbeeld

Een supportteam gebruikt steeds dezelfde acht categorieën. Eerst test je een duidelijke prompt met een paar voorbeelden. Als de indeling daarmee onvoldoende consistent is en er genoeg goed gelabelde berichten bestaan, kun je fine-tuning onderzoeken. Houd een aparte testverzameling achter. Daarmee beoordeel je of het model ook werkt op berichten die het tijdens training niet heeft gezien.

### Wat zijn adapters en LoRA?

Bij sommige methoden train je kleine aanvullende onderdelen in plaats van alle oorspronkelijke gewichten. Zulke adapters kunnen de benodigde trainingsmiddelen verminderen. LoRA is een bekende techniek daarvoor. Dat maakt training toegankelijker, maar de kwaliteit blijft afhangen van de voorbeelden en evaluatie. Een adapter moet bovendien passen bij de modelversie waarvoor hij is gemaakt.

### Wanneer is het de moeite waard?

Vergelijk de verbetering met de kosten van data voorbereiden, trainen, testen en onderhouden. Probeer eerst of een beter afgebakende taak, prompt of zoekstap voldoende is. Gebruik fine-tuning wanneer die extra inspanning een aantoonbaar probleem oplost. Bewaar daarbij de gebruikte datarechten, versies en testresultaten, zodat een volgende wijziging controleerbaar blijft.

## Bronnen

- [Hugging Face — Fine-tuning](https://huggingface.co/docs/transformers/en/training)
- [Hugging Face — Parameter-efficient fine-tuning](https://huggingface.co/docs/transformers/en/peft)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
