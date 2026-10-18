# Wat zijn tokens bij AI?

Officiële pagina: https://aitje.com/kenniscentrum/wat-zijn-tokens

> Een taalmodel werkt met tokens: kleine bouwstenen van invoer en uitvoer. Ze bepalen mede hoeveel context past, hoe lang een antwoord duurt en wat een API-verzoek kost.

### In het kort

Een token is een eenheid waarmee een taalmodel invoer verwerkt en uitvoer opbouwt. Bij tekst kan het een heel woord, een deel van een woord, een leesteken of een andere tekencombinatie zijn. De tokenizer verdeelt de invoer en koppelt de stukjes aan nummers. Tokens in deze betekenis zijn geen cryptocurrency en geen los abonnementstegoed.

### Een token is niet hetzelfde als een woord

Hoeveel tokens een zin bevat, hangt af van de tokenizer en de tekst. Een lange Nederlandse samenstelling kan in meerdere stukjes uiteen vallen. Code en getallen kunnen anders worden opgesplitst dan lopende tekst. Een vaste verhouding tussen woorden en tokens is daarom hooguit een schatting. Gebruik voor een nauwkeurige telling de tokenizer of gebruiksrapportage van het gekozen model.

### Invoertokens en uitvoertokens

Invoertokens omvatten de informatie die het model krijgt, zoals instructies, gespreksgeschiedenis en opgehaalde documenten. Uitvoertokens zijn de gegenereerde inhoud. API's kunnen verschillende tarieven hanteren voor invoer, uitvoer, hergebruikte context en eventuele redeneertokens. Kijk naar de werkelijke facturering van de gebruikte dienst, ook wanneer je alleen een kort antwoord ziet.

### Een rekenvoorbeeld

Stel voor deze uitleg dat invoer €4 per miljoen tokens kost. Dan kost 100.000 invoertokens €0,40. Dat is een fictief tarief en alleen het invoerdeel: uitvoer, extra verzoeken en overige kosten komen daar eventueel bij. Stuur je dezelfde grote documenten bij iedere stap opnieuw mee, dan kan dat invoerdeel zich snel herhalen.

### Minder tokens gebruiken zonder informatie te verliezen

Laat code vooraf dubbele velden verwijderen, berekeningen uitvoeren en relevante gegevens ophalen. Een zoekstap kan de benodigde passages selecteren, zodat het model niet telkens het hele archief ontvangt. Controleer wel of de geselecteerde informatie voldoende is. Een te korte opdracht kan fouten en extra pogingen veroorzaken, waardoor het uiteindelijke resultaat alsnog duurder wordt.

### Wat betekent dit voor lokale AI?

Ook een lokaal model verwerkt tokens, hoewel je geen externe tokenfactuur hoeft te krijgen. De invoerlengte en antwoordlengte beïnvloeden rekenwerk, geheugengebruik en wachttijd. Meet bij API's én eigen hardware de kosten en kwaliteit per afgeronde taak. Het goedkoopste token is niet automatisch het goedkoopste bruikbare resultaat.

## Bronnen

- [Hugging Face — Tokenizers en het opdelen van tekst](https://huggingface.co/docs/transformers/en/tokenizer_summary)
- [Hugging Face — Tekstgeneratie met LLM's](https://huggingface.co/docs/transformers/en/llm_tutorial)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
