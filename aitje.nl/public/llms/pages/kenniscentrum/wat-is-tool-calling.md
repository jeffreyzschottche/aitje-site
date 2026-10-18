# Wat is tool calling?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-tool-calling

> Met tool calling kan een taalmodel voorstellen om een functie aan te roepen. Je software haalt gegevens op of voert een actie uit, binnen de rechten die je zelf bepaalt.

### In het kort

Tool calling, ook function calling genoemd, laat een model een gestructureerd verzoek maken om een beschikbare functie te gebruiken. Denk aan een voorraad opvragen, een berekening uitvoeren of een document zoeken. Het model bepaalt welke functie en invoer passend lijken. De applicatie controleert dat verzoek en beslist vervolgens of de functie wordt uitgevoerd.

### Het model voert de code niet zelf uit

Je beschrijft welke functies beschikbaar zijn en welke velden ze verwachten. Het model produceert een aanroep, vaak in een gestructureerd formaat. Jouw software doet het echte werk en geeft de uitkomst terug. Zo blijft de berekening in code en de actuele voorraad in het voorraadsysteem. Dat is een ander mechanisme dan het model vragen een antwoord uit zijn training te raden.

### Een praktisch voorbeeld

Een medewerker vraagt hoeveel stuks van een artikel beschikbaar zijn. Het model stelt een voorraadaanvraag voor met een artikelnummer. De applicatie controleert de toegang, vraagt het systeem om de actuele voorraad en geeft alleen de relevante velden terug. Daarna formuleert het model een leesbaar antwoord. Bij een ontbrekend artikelnummer kan de workflow eerst om verduidelijking vragen.

### Waarom helpt dit bij tokenoptimalisatie?

Een functie kan gericht gegevens ophalen in plaats van een heel gegevensbestand mee te sturen. Ook vaste berekeningen en formaatcontroles kunnen buiten het model plaatsvinden. Daardoor heeft het model minder onnodige invoer. Toolbeschrijvingen, resultaten en extra modelrondes kosten zelf ook context en tijd. Meet dus de hele keten, niet alleen de eerste aanroep.

### Rechten horen bij de applicatie

Een toolverzoek is geen toestemming. De uitvoerende software moet gebruikersrechten, invoer en toegestane acties controleren. Een voorraad lezen vraagt andere rechten dan een bestelling plaatsen. Voor acties met gevolgen kun je een expliciete bevestiging inbouwen. Geef bovendien een duidelijke fout terug als een tool niet werkt, zodat het model geen succesvol resultaat hoeft te veronderstellen.

### Hoe hangt dit samen met agents en MCP?

Een agent kan meerdere toolaanroepen gebruiken om een taak uit te voeren. MCP biedt een gemeenschappelijke manier om tools en bronnen aan een AI-applicatie beschikbaar te maken. Tool calling werkt ook zonder MCP en maakt een losse chatbot niet automatisch een zelfstandige agent. De workflow bepaalt hoeveel keuzevrijheid het model werkelijk krijgt.

## Bronnen

- [Hugging Face — Tool use en function calling](https://huggingface.co/docs/transformers/en/chat_extras)
- [Model Context Protocol — Architectuur en onderdelen](https://modelcontextprotocol.io/docs/learn/architecture)

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
