# Wat is een webhook?

Officiële pagina: https://aitje.com/kenniscentrum/wat-is-een-webhook

> Een webhook is een automatisch bericht van het ene systeem naar het andere zodra er iets gebeurt. Daarmee kun je processen direct laten starten zonder steeds actief te hoeven controleren of er nieuwe informatie is.

### In gewone taal

Een webhook is een seintje dat automatisch wordt verstuurd zodra een gebeurtenis plaatsvindt, zoals een nieuwe aanvraag, betaling, upload of formulierinzending. In plaats van steeds te vragen of er iets is veranderd, ontvang je direct een melding wanneer dat zo is.

### Wat is het verschil met een API?

Bij een API vraag je meestal actief informatie op. Een webhook werkt omgekeerd: een systeem meldt uit zichzelf dat er iets is gebeurd. In veel integraties gebruik je beide samen: een webhook voor de trigger en een API voor het vervolgwerk.

### Wat stuur je meestal mee?

Een webhook bevat vaak informatie over het type gebeurtenis, een tijdstip, een record-id of een verwijzing naar extra data. Soms zit alle benodigde informatie in het webhookbericht, en soms moet een ander systeem via een API extra gegevens ophalen.

### Waar zitten de valkuilen?

Een webhook moet betrouwbaar aankomen en veilig worden verwerkt. Je moet daarom letten op verificatie, retries, logging en wat er gebeurt als het ontvangende systeem tijdelijk niet beschikbaar is. Zonder die zaken wordt een ogenschijnlijk simpele koppeling toch fragiel.

### Waarom is het handig?

Webhooks maken processen sneller en efficienter. Ze zijn nuttig voor notificaties, workflowstarts, documentverwerking en andere situaties waar directe opvolging belangrijk is. In goed ontworpen systemen zorgen webhooks voor minder vertraging en minder onnodig verkeer.

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
