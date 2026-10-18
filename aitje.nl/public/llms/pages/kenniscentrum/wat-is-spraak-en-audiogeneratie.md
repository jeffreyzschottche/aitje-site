# Wat is spraak- en audiogeneratie?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-spraak-en-audiogeneratie

> Met AI kun je tekst omzetten naar spraak en andere geluiden laten maken. Hoe verschillen text-to-speech, geluidseffecten en transcriptie, en waar passen ze in een praktische workflow?

### In het kort

Audiogeneratie is het maken van geluid met een model. Spraakgeneratie is daar een specifieke vorm van: geschreven tekst wordt bijvoorbeeld een gesproken uitleg. Andere toepassingen maken geluidseffecten of een geluidsomgeving. Muziek valt ook onder generatieve audio, maar heeft eigen eisen aan ritme en compositie. De gekozen taak bepaalt welk model en welke uitvoer bruikbaar zijn; één audiomodel hoeft niet al die mogelijkheden te ondersteunen.

### Wat is text-to-speech?

Text-to-speech, vaak afgekort tot TTS, zet tekst om naar gesproken audio. Een model of toepassing kan instellingen bieden voor taal, stem, snelheid of spreekstijl. Dat verschilt per systeem. De tekst blijft belangrijk: afkortingen, cijfers en merknamen kunnen anders worden uitgesproken dan verwacht. Een tekst die goed leesbaar is op papier, klinkt ook niet altijd natuurlijk wanneer hij letterlijk wordt voorgelezen.

### Wat is het verschil met transcriptie?

Bij spraakherkenning wordt bestaand geluid omgezet naar tekst. Bij spraakgeneratie loopt de richting andersom. Je kunt beide combineren: een ingesproken vraag wordt getranscribeerd, een taalmodel bereidt een antwoord voor en een TTS-model leest dat antwoord uit. Dat zijn afzonderlijke stappen met eigen foutmogelijkheden. Een onjuiste transcriptie kan bijvoorbeeld een fout antwoord veroorzaken, ook als de uiteindelijke stem heel natuurlijk klinkt.

### Een praktisch voorbeeld

Een organisatie wil een werkinstructie ook als gesproken uitleg aanbieden. Eerst wordt de tekst herschreven voor luisteren: kortere zinnen en duidelijk uitgesproken getallen. Daarna wordt audio gemaakt en beluisterd door iemand die de procedure kent. Pas na controle wordt het bestand bij de instructie geplaatst. Wijzigt de procedure, dan moet ook de gesproken versie worden bijgewerkt. Zo blijven tekst en audio bij dezelfde actuele informatie horen.

### Waar let je op bij stem en geluid?

Beoordeel verstaanbaarheid, uitspraak, pauzes en het volume van de uitvoer. Bij meerdere talen kan kwaliteit per taal verschillen. Een gekozen stem is bovendien iets anders dan een nagebootste stem van een herkenbare persoon. Gebruik van zo’n stem vraagt duidelijke afspraken en toestemming van de betrokkene. Voor geluidseffecten telt vooral of het geluid past bij de gebeurtenis en voldoende beheersbaar blijft in de montage.

### Hoe richt je de verwerking in?

Bepaal welke tekst naar het model gaat, waar audiobestanden worden opgeslagen en hoe hergeneratie werkt na een wijziging. Denk ook aan uitvoerlengte, wachttijd en het afspelen in je toepassing. Kosten kunnen bijvoorbeeld samenhangen met tekens, audiolengte of rekenwerk en hoeven niet dezelfde tokenstructuur te volgen als een tekst-API. Een goede workflow bewaart de inhoudelijke bron en maakt duidelijk welke versie van de audio daarbij hoort.

## Bronnen

- [Hugging Face — Text-to-speech](https://huggingface.co/docs/transformers/en/tasks/text-to-speech)
- [Hugging Face — MusicGen](https://huggingface.co/docs/transformers/en/model_doc/musicgen)
- [IBM — Generative AI](https://www.ibm.com/think/topics/generative-ai)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
