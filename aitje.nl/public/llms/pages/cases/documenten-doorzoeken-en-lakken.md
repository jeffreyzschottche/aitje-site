# De kennis van je kantoor. Een assistent die ermee werkt.

Officiële pagina: https://aitje.com/cases/documenten-doorzoeken-en-lakken

> Voor een makelaarsbureau verbond AITJE Realworks, mailboxen en Google Drive aan een eigen AI-assistent. Medewerkers chatten met de kennis die bij hun rol hoort. De websitechatbot gebruikt een afzonderlijke, zorgvuldig geselecteerde kennisbank uit dezelfde omgeving.

Praktijkcase — Makelaardij / Eigen kennis & websitechat

Bij een makelaarsbureau staat de informatie zelden op één plek. Woninggegevens staan in Realworks, afspraken en correspondentie in de mailbox, documenten in Google Drive. Een antwoord vinden betekent vaak tussen systemen wisselen en zelf bepalen welk gegeven nog actueel is.

AITJE installeerde de Assistent op een Linux-server, gekoppeld aan een BOSGAME M5. De bestaande bronnen komen samen in een eigen kennisbank. Medewerkers stellen hun vraag in één chat; de zoeklaag haalt relevante informatie op, met de juiste datum, categorie en toegangsrechten.

## De aanpak

### Synchroniseren

Drie keer per dag wordt de kennis uit de gekoppelde bronnen gesynchroniseerd. Zo worden nieuwe en gewijzigde gegevens meegenomen in de kennisbank.

### Ordenen & embedden

De inhoud wordt verdeeld in doorzoekbare tekstfragmenten. Harrier maakt vector-embeddings; categorie, datum, bron, prioriteit en toegangsrechten blijven gekoppeld aan de kennis.

### Gericht terugvinden

Bij een vraag zoekt RAG naar inhoudelijk passende fragmenten binnen de kennis die de medewerker mag gebruiken. Datum en prioriteit helpen om de juiste informatie te selecteren.

### Een antwoord formuleren

GPT-OSS-120B gebruikt de gevonden passages om het antwoord samen te stellen. De bedrijfskennis wordt opgehaald wanneer die nodig is; er wordt niet telkens een heel dossier naar het model gestuurd.

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
