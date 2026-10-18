# Wat is inference bij een LLM?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-inference

> Inference is het gebruiken van een getraind model om een uitkomst te maken. Bij een LLM betekent dat invoer verwerken en vervolgens een antwoord opbouwen.

### In het kort

Inference is de fase waarin je een getraind AI-model gebruikt om een voorspelling of andere uitkomst te produceren. Bij een taalmodel kan dat een antwoord, samenvatting of stuk code zijn. Het model rekent met de beschikbare gewichten en huidige invoer. Een gewone chat verandert die gewichten niet automatisch; trainen en gebruiken zijn verschillende processen.

### Wat gebeurt er bij tekstgeneratie?

Eerst wordt de invoer omgezet naar de vorm die het model verwacht. Bij een LLM bestaat tekst uit tokens. Daarna verwerkt het model de context en bouwt het uitvoer op. Bij veel generatieve taalmodellen gebeurt dat token voor token. De selectie van de volgende tokens hangt ook af van instellingen die bepalen hoe voorspelbaar of gevarieerd de uitvoer mag zijn.

### Prefill en decode

Prefill is het verwerken van de meegegeven context voordat de volgende uitvoer wordt opgebouwd. Decode is het herhaald genereren van nieuwe tokens. Een lange invoer kan de tijd tot de eerste reactie vergroten; een lang antwoord vraagt extra generatiewerk. De KV-cache helpt om bepaalde eerdere berekeningen tijdens dat proces opnieuw te gebruiken.

### Een praktisch voorbeeld

Je vraagt een samenvatting van een document. Het verwerken van de documenttekst hoort bij inference, net als het maken van de samenvatting. Als je daarna een gerichte vraag stelt, zijn er opnieuw berekeningen nodig. Of eerdere context efficiënt wordt hergebruikt hangt af van de toepassing. Een opgeslagen chat betekent niet vanzelf dat alle eerdere rekenkosten verdwijnen.

### Waar hangt de snelheid van af?

Modelomvang, precisie, hardware, invoerlengte en gelijktijdige verzoeken spelen mee. Een snelle korte test voorspelt daarom niet altijd hoe een team met grote documenten werkt. Meet de wachttijd tot het eerste token en de tijd tot een volledig bruikbaar antwoord. Ook zoekstappen en toolaanroepen kunnen de totale doorlooptijd bepalen.

### Lokaal en via een API

Inference kan op je eigen apparaat, op een eigen server of bij een externe aanbieder plaatsvinden. Bij een API betaalt de gebruiker volgens de voorwaarden van de dienst; zelf draaien brengt hardware- en beheerkosten mee. De technische kern blijft hetzelfde: een bestaand model wordt gebruikt. Optimalisatie begint bij een heldere taak, gerichte context en een passende uitvoering.

## Bronnen

- [Hugging Face — Tekstgeneratie met LLM's](https://huggingface.co/docs/transformers/en/llm_tutorial)
- [Hugging Face — KV-cache en cachestrategieën](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
