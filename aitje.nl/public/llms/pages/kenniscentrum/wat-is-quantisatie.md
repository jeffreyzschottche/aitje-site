# Wat is quantisatie bij AI-modellen?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-quantisatie

> Quantisatie slaat modelgetallen op met minder precisie. Daardoor kan een model minder geheugen vragen, maar de invloed op snelheid en kwaliteit verschilt per toepassing.

### In het kort

Quantisatie, ook quantization genoemd, betekent dat getallen in een AI-model met minder precisie worden weergegeven. Daardoor nemen ze minder ruimte in. Bij LLM's gaat het vaak om modelgewichten, maar ook andere berekeningen en opgeslagen tussenresultaten kunnen worden gequantiseerd. Het doel is de toepassing uitvoerbaar te maken met minder geheugen en passend rekenwerk.

### Wat betekenen 16-bit, 8-bit en 4-bit?

Bits zijn de eenheden waarmee een getal wordt opgeslagen. Minder bits bieden minder mogelijke waarden. Een methode moet dus bepalen hoe de oorspronkelijke getallen worden benaderd. Een model met 4-bit gewichten is niet simpelweg vier keer zo klein als de hele 16-bit installatie: extra schaalgegevens, software en het geheugen voor de context tellen ook mee.

### Een vergelijking om het te begrijpen

Denk aan het afronden van een meetwaarde van veel decimalen naar minder decimalen. Voor sommige toepassingen maakt dat nauwelijks verschil; voor andere is de verloren precisie belangrijk. Dit is een vereenvoudigde vergelijking. Quantisatie gebruikt verschillende technieken om de fout te beperken en belangrijke informatie zo goed mogelijk te behouden.

### Waarom is dit nuttig bij lokale AI?

Een model dat in zijn oorspronkelijke vorm niet in het beschikbare geheugen past, kan in een andere uitvoering mogelijk wel bruikbaar worden. Dat kan de keuze aan modellen op een Mac, pc of server vergroten. Tegelijk moet je ruimte reserveren voor invoer, lopende gesprekken en de KV-cache. Alleen de bestandsgrootte zegt dus nog niet of de toepassing soepel werkt.

### Wat lever je mogelijk in?

De kwaliteit kan veranderen, bijvoorbeeld bij nauwkeurige instructies, rekenen of minder voorkomende talen. Snelheidswinst is ook niet gegarandeerd: die hangt af van hardware en ondersteuning in de uitvoersoftware. Test daarom de concrete uitvoering met dezelfde vragen en documenten. Kijk vooral of fouten veranderen op de onderdelen die voor jouw werk belangrijk zijn.

### Een praktische keuze maken

Leg de modelversie, quantisatie en gebruikte software vast. Vergelijk kwaliteit, geheugen en wachttijd bij het verwachte aantal gebruikers. Kies vervolgens de uitvoering die aan je eisen voldoet. Een klein bestand op zichzelf is geen doel; een stabiele toepassing met voldoende kwaliteit en capaciteit wel.

## Bronnen

- [Hugging Face — Quantization overview](https://huggingface.co/docs/transformers/en/quantization/overview)
- [Hugging Face — KV-cache en cachestrategieën](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
