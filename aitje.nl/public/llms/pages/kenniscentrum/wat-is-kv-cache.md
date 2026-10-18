# Wat is KV-cache bij een LLM?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-kv-cache

> De KV-cache bewaart tussenresultaten van een taalmodel, zodat het tijdens tekstgeneratie minder werk hoeft te herhalen. Dat helpt bij snelheid, maar vraagt ook geheugen.

### In het kort

KV staat hier voor key en value: twee soorten interne vectoren die een transformer gebruikt bij attention. Attention helpt het model verbanden met eerdere invoer te verwerken. De KV-cache bewaart eerder berekende keys en values, zodat die bij het volgende token opnieuw gebruikt kunnen worden. In deze LLM-context gaat het dus niet om een algemene key-value-database.

### Waarom scheelt dat werk?

Een taalmodel bouwt een antwoord doorgaans stap voor stap op. Het volgende token hangt mede af van de eerdere tokens. Zonder hergebruik zou het veel eerdere tussenresultaten telkens opnieuw moeten berekenen. De cache maakt een deel van dat herhaalde werk overbodig. Het is een optimalisatie van het uitvoeren van het model, geen extra training.

### De cache vraagt ook geheugen

Meer bewaarde context en meer gelijktijdige verzoeken kunnen meer cachegeheugen vragen. Hoeveel precies hangt onder meer af van de architectuur en de gekozen cachestrategie. Sommige modellen bewaren slechts een beperkt venster in bepaalde lagen. Een modelbestand dat in het geheugen past is daarom niet genoeg: ook de ruimte voor de actieve verzoeken moet passen.

### Een praktisch voorbeeld

Een lokale assistent verwerkt korte vragen soepel. Bij een lang document of meerdere gebruikers tegelijk raakt dezelfde machine eerder vol. De gewichten zijn niet gegroeid, maar er is meer werkgeheugen nodig voor de verzoeken. Je kunt dan bijvoorbeeld minder gesprekken tegelijk uitvoeren of de context gerichter selecteren. Welke oplossing helpt moet je op die installatie meten.

### KV-cache is geen blijvend persoonlijk geheugen

De cache bevat interne tussenresultaten voor een bepaalde context. Het is geen gewone lijst met feiten en verandert niet vanzelf de modelgewichten. Gespreksgeschiedenis opslaan, herhaalde promptdelen hergebruiken en persoonlijke kennis beheren zijn andere functies. Ze kunnen technisch samenhangen, maar mogen in een gebruikersbelofte niet allemaal als hetzelfde geheugen worden beschreven.

### Wat betekent dit voor je inrichting?

Reserveer capaciteit voor modelgewichten én context. Test wachttijd en geheugengebruik met het aantal gebruikers en documentlengtes dat je verwacht. Er bestaan verschillende cachetechnieken, bijvoorbeeld lagere precisie of verplaatsing naar ander geheugen. Die kunnen ruimte besparen, maar ook vertraging of kwaliteitsverschillen geven. Kies daarom op basis van je concrete werkbelasting.

## Bronnen

- [Hugging Face — KV-cache en cachestrategieën](https://huggingface.co/docs/transformers/en/kv_cache)
- [Hugging Face — Hoe caching werkt](https://huggingface.co/docs/transformers/en/cache_explanation)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
