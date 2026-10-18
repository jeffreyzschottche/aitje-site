# Wat zijn weights van een AI-model?

Officiële pagina: https://aitje.com/kenniscentrum/wat-zijn-model-weights

> Weights zijn de geleerde getallen die bepalen hoe een model informatie verwerkt. Ontdek wat modelgewichten, parameters en een downloadbaar modelbestand met elkaar te maken hebben.

### In het kort

Weights, of modelgewichten, zijn getallen in een neuraal netwerk die beïnvloeden hoe invoer wordt omgezet in uitvoer. Tijdens training worden zulke getallen aangepast om de prestaties op trainingsvoorbeelden te verbeteren. Bij normaal gebruik van een taalmodel blijven de gewichten meestal gelijk. Het model gebruikt ze samen met de informatie uit de huidige opdracht.

### Waarom heten ze gewichten?

Een gewicht bepaalt hoe sterk een onderdeel van een berekening meetelt. Een eenvoudige vergelijking is een formule waarin verschillende kenmerken elk een eigen vermenigvuldigingsfactor hebben. Een LLM bevat veel ingewikkelder, opeenvolgende berekeningen. De betekenis zit verspreid over grote aantallen gewichten; er is niet voor ieder feit één herkenbaar vakje dat je kunt openen en wijzigen.

### Wat betekenen 7B of 70B parameters?

De B staat voor billion, miljard. Een aanduiding als 7B verwijst doorgaans naar ongeveer zeven miljard modelparameters. Het aantal zegt iets over omvang, maar voorspelt de kwaliteit op jouw taak niet volledig. Architectuur, trainingsdata en verdere training tellen ook mee. Bij sommige modellen worden bovendien niet alle parameters voor ieder token tegelijk gebruikt.

### Wat zit er in een modeldownload?

Modelgewichten worden in bestanden opgeslagen. Om een taalmodel te draaien heb je daarnaast passende uitvoersoftware, modelconfiguratie en een tokenizer nodig. De precisie waarin de gewichten zijn opgeslagen beïnvloedt hoeveel ruimte ze vragen. Met quantisatie kun je die opslag veranderen. Het geheugen voor lopende verzoeken en de KV-cache komt boven op het geheugen voor de gewichten.

### Een praktisch voorbeeld

Je kunt dezelfde modelversie in verschillende uitvoeringen testen, bijvoorbeeld met gewichten in hogere of lagere precisie. Die uitvoeringen kunnen andere geheugeneisen en uitkomsten hebben. Een download past misschien op je schijf terwijl de toepassing niet goed in het werkgeheugen past. Test daarom ook echte documenten en het beoogde aantal gelijktijdige gebruikers.

### Wat betekent toegang tot weights?

Beschikbare gewichten geven je de mogelijkheid het model zelf uit te voeren, als hardware, software en licentie dat toelaten. Het betekent niet dat alle trainingsdata openbaar zijn of dat er geen gebruiksbeperkingen gelden. Leg versie en rechten vast. Zo weet je welk model je beheert en kun je een wijziging in gedrag later vergelijken met de oorspronkelijke uitvoering.

## Bronnen

- [Google Machine Learning Crash Course — Gewichten in een model](https://developers.google.com/machine-learning/crash-course/linear-regression)
- [Hugging Face — Quantization overview](https://huggingface.co/docs/transformers/en/quantization/overview)
- [Open Source Initiative — Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
