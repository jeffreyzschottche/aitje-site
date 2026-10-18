# Wat is een vector bij AI?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-een-vector

> Een vector is een geordende reeks getallen. In AI helpt zo'n reeks om informatie weer te geven, te vergelijken en terug te vinden — bijvoorbeeld bij zoeken op betekenis.

### In het kort

Een vector is een geordende reeks getallen, zoals [0,2; 0,8; -0,1]. Elk getal heeft een vaste plek, een dimensie. Met vectoren kan software rekenen aan informatie die oorspronkelijk uit tekst, beelden of andere gegevens bestaat. Een vector is de vorm van de weergave; de manier waarop je die getallen maakt, bepaalt wat ze betekenen.

### Een eenvoudige vergelijking

Je kunt een product voorstellen met getallen voor gewicht, lengte en prijs. Dan weet je precies wat elke dimensie betekent. AI-vectoren kunnen veel meer dimensies hebben, waarbij de eigenschappen gezamenlijk worden geleerd. Zo'n dimensie is meestal niet eenvoudig te benoemen als bijvoorbeeld onderwerp of toon. De combinatie van getallen is bepalend.

### Wat is het verschil met een embedding?

Een embedding is een geleerde representatie van informatie, vaak in de vorm van een vector. Een embeddingmodel kan zinnen met verwante betekenis dicht bij elkaar plaatsen. Niet iedere vector is dus een embedding. Vectoren worden ook voor andere interne berekeningen gebruikt, waaronder de keys en values in de aandachtlagen van een taalmodel.

### Hoe kun je ermee zoeken?

Een zoektoepassing maakt met hetzelfde embeddingmodel een vector van de vraag en van documentpassages. Daarna vergelijkt zij de vectoren om verwante passages te vinden. Verschillende vergelijkingsmethoden meten dat verband op verschillende manieren. Een hoge overeenkomst betekent dat een passage waarschijnlijk relevant is; het is geen bewijs dat die passage waar of actueel is.

### Een praktisch voorbeeld

Iemand zoekt naar het herstellen van toegang. Een handleiding gebruikt de woorden wachtwoord opnieuw instellen. Zoeken op embeddings kan helpen die passage te vinden, ook zonder exact dezelfde woorden. Je toont vervolgens de oorspronkelijke passage met bron en datum. De vector vervangt dus niet het document, maar helpt om het terug te vinden.

### Wat moet je goed inrichten?

Vergelijk representaties die voor dezelfde vectorruimte zijn gemaakt. Als je het embeddingmodel wijzigt, kan opnieuw indexeren nodig zijn. Houd daarnaast documentrechten en broninformatie bij. Een gebruiker mag geen vertrouwelijke passage krijgen alleen omdat die goed op de vraag lijkt. Voor een bruikbare zoekfunctie zijn de gevonden tekst en de toegangscontrole minstens zo belangrijk als de vectoren.

## Bronnen

- [Google Machine Learning Crash Course — Embedding space](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space)
- [Hugging Face — KV-cache en cachestrategieën](https://huggingface.co/docs/transformers/en/kv_cache)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
