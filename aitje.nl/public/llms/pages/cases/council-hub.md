# 350 klanten. Eén centrale werkplek.

Officiële pagina: https://aitje.com/cases/council-hub

> Na een overname groeide een marketingbedrijf van 150 naar 350 klanten. AITJE bracht klantgegevens, tickets, projecten, factuurinformatie en gesprekstranscripties samen in een centrale hub. Medewerkers zoeken en chatten met hun bedrijfskennis, met toegang op basis van hun rol en AI op een bestaande Mac mini.

Praktijkcase — Marketingbedrijf / klantbeheer, tickets & bedrijfskennis

Het marketingbedrijf werkte met 150 klanten. Door een overname kwamen daar 200 klanten bij. De klantenportefeuille groeide naar 350, maar de informatie zat nog verspreid over verschillende applicaties en teams.

Wanneer de telefoon overging, wist de medewerker niet meteen wat er speelde. Was er een open ticket? Wie werkte aan het project? Had iemand al teruggebeld? En stonden er nog facturen open? Het antwoord vroeg telkens om zoeken in meerdere systemen.

AITJE bouwde een centrale managementhub waarin medewerkers snel zoeken op klantnaam, bedrijfsnaam of website. Via API-koppelingen komen de relevante gegevens bijeen. Daarnaast kunnen zij vragen stellen aan een RAG-chat met de gesynchroniseerde bedrijfskennis.

## De aanpak

### Verbinden

Code verbindt de hub met de externe applicaties via API- en MCP-koppelingen. Toolcalling geeft het taalmodel afgebakende manieren om de aangesloten platforms te raadplegen.

### Synchroniseren

Drie keer per dag worden de geselecteerde bedrijfsgegevens opgehaald en omgezet naar vector-embeddings. De lokale vector-database maakt deze kennis beschikbaar voor de RAG-chat.

### Zoeken & ophalen

Een naam, bedrijf of website leidt naar de beschikbare klantcontext. Bij een chatvraag haalt RAG relevante passages op; toolcalls kunnen daarnaast gegevens uit gekoppelde applicaties raadplegen wanneer die bereikbaar zijn.

### Antwoorden met toegang

Qwen formuleert het antwoord met de beschikbare context. Toegang wordt in de hub en bij het ophalen van gegevens begrensd op basis van de medewerkersrol, zodat de chat alleen met toegestane informatie werkt.

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
