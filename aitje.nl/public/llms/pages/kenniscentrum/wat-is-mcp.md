# Wat is MCP, het Model Context Protocol?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-mcp

> MCP geeft AI-applicaties een gezamenlijke manier om tools en informatiebronnen te benaderen. Wat wordt daarmee eenvoudiger, en wat moet je zelf nog regelen?

### In het kort

MCP staat voor Model Context Protocol. Het is een open protocol voor het verbinden van AI-applicaties met tools en informatiebronnen. Het beschrijft hoe die onderdelen mogelijkheden bekendmaken en verzoeken uitwisselen. Daardoor hoeft niet iedere aansluiting vanaf nul een eigen koppeltaal te gebruiken. MCP is zelf geen taalmodel, database of zoekmachine.

### Welke onderdelen werken samen?

Een AI-applicatie is de host. Daarbinnen onderhoudt een client de verbinding met een MCP-server. Die server is software die mogelijkheden aanbiedt, bijvoorbeeld documentzoeken of gegevens opvragen. Een server kan lokaal draaien of via een netwerk bereikbaar zijn. Het woord server betekent hier dus niet noodzakelijk een aparte fysieke computer.

### Tools, resources en prompts

MCP onderscheidt onder meer tools voor uitvoerbare functies, resources voor beschikbare informatie en prompts voor herbruikbare instructies. De host bepaalt hoe die mogelijkheden in de toepassing worden gebruikt. Een protocol regelt de uitwisseling; het bepaalt niet welk model het beste antwoord geeft of hoe jouw bedrijf een werkproces moet uitvoeren.

### Een praktisch voorbeeld

Een interne assistent moet handleidingen kunnen doorzoeken. Je kunt een MCP-server maken die een zoekfunctie aanbiedt en alleen documenten teruggeeft waarvoor de medewerker toegang heeft. Een geschikte AI-applicatie kan die functie ontdekken en gebruiken. Het onderliggende documentarchief blijft bestaan; MCP is de koppeling naar die bron, geen vervanging van het archief.

### Wat moet je nog zelf regelen?

Je blijft verantwoordelijk voor toegangsrechten, betrouwbare tools en wat de applicatie met resultaten mag doen. Een lokale MCP-server kan op zijn beurt externe systemen benaderen. Lokaal verbinden betekent dus niet vanzelf dat alle gegevens lokaal blijven. Leg per koppeling vast waar de verwerking gebeurt en welke informatie de gebruiker en het model daadwerkelijk krijgen.

### Wanneer past MCP?

Het kan nuttig zijn wanneer meerdere geschikte AI-applicaties dezelfde bronnen of functies moeten gebruiken. Voor één eenvoudige aansluiting kan een gewone API voldoende zijn. Kies op basis van ondersteunde functies en beheer, niet omdat het protocol populair is. Controleer ook de ondersteunde protocolversies voordat je een koppeling als vervangbaar beschouwt.

## Bronnen

- [Model Context Protocol — Architectuur en onderdelen](https://modelcontextprotocol.io/docs/learn/architecture)
- [Hugging Face — Tool use en function calling](https://huggingface.co/docs/transformers/en/chat_extras)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
