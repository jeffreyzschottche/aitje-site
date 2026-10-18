# Wat is abliteration bij taalmodellen?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-abliteration

> Abliteration past interne eigenschappen van een model aan om aangeleerd weigeringsgedrag te verminderen. Wat verandert daarmee, en wat zegt het juist niet over de kwaliteit?

### In het kort

Abliteration is een informele term voor technieken die weigeringsgedrag van een taalmodel proberen te verminderen door interne modelrepresentaties of gewichten aan te passen. Je ziet de term vaak bij bewerkte modellen met beschikbare gewichten. De gebruikelijke spelling is abliteration. Het is geen standaard keurmerk en ook geen garantie dat een model voortaan iedere opdracht uitvoert.

### Waar komt het idee vandaan?

Onderzoekers vonden bij de onderzochte chatmodellen een interne richting die sterk samenhing met het weigeren van bepaalde verzoeken. Door die richting te beïnvloeden veranderde het weigeringsgedrag. Abliteration bouwt op dat soort inzichten voort. Dat beschrijft een bevinding bij specifieke modellen en experimenten; het bewijst niet dat ieder model op dezelfde manier reageert.

### Wat is het verschil met een prompt of fine-tuning?

Een prompt geeft instructies tijdens gebruik. Fine-tuning traint een model verder met voorbeelden. Abliteration probeert een intern patroon gerichter te veranderen, soms door een bewerkte versie van de gewichten te maken. De uitkomst is afhankelijk van de techniek en het oorspronkelijke model. Het is dus meer dan een verzoek om in een chat anders te antwoorden.

### Minder weigeren is niet automatisch beter antwoorden

Een model dat vaker antwoord geeft kan nog steeds fouten maken, iets verzinnen of een instructie verkeerd volgen. De aanpassing voegt geen nieuwe betrouwbare kennis toe. Ook andere eigenschappen kunnen veranderen. Beoordeel een aangepaste versie daarom op de echte taak, inclusief feitelijke juistheid en het vermogen om ontbrekende informatie te herkennen.

### Een praktisch voorbeeld

Stel dat je model een legitieme technische documentvraag te vaak afwijst. Onderzoek eerst welke instructie, documentcontext of toepassingsfilter dat veroorzaakt. Een andere prompt, modelkeuze of configuratie kan het probleem oplossen. Een aangepaste modelversie is een aparte keuze die je met dezelfde testvragen vergelijkt; een algemene belofte van minder beperkingen zegt weinig over dat concrete probleem.

### Wat betekent dit voor een bedrijfsomgeving?

De rechten in een applicatie, toegangscontrole tot bestanden en regels voor acties blijven nodig, ongeacht het weigeringsgedrag van het model. Leg bij een aangepast model vast welke versie en bewerking je gebruikt. Kies op basis van meetbare taakgeschiktheid. AITJE kan een model alleen zinvol in een workflow inzetten als ook de informatie, rechten en controles passend zijn.

## Bronnen

- [Arditi e.a. — Refusal in Language Models Is Mediated by a Single Direction](https://arxiv.org/abs/2406.11717)
- [Hugging Face — Fine-tuning](https://huggingface.co/docs/transformers/en/training)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
