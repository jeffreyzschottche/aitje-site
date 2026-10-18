# Veilig AI-gebruik: Meer controle over je AI en je gegevens.

Officiële pagina: https://aitje.com/diensten/veilig-ai-gebruik

> AITJE helpt AI-gebruik begrenzen met anonimisatie, rolrechten voor RAG, guardrails, menselijke controle en budgetlimieten. Inzicht in datalocaties en bewaarbeleid.

Veilig AI-gebruik begint vóórdat je iets naar een model stuurt. Welke informatie is echt nodig? Mag deze medewerker die gegevens gebruiken? Kunnen namen, contactgegevens en andere herkenbare details worden verwijderd? AITJE helpt die keuzes in je workflow verwerken.

Daarna volgen de controles op antwoorden, acties en kosten. Met passende guardrails, bevestiging door een medewerker, logging en limieten bepaal je wat de oplossing mag doen. AITJE bekijkt ook waar gegevens worden verwerkt en bewaard, en wanneer verwerking in je eigen omgeving beter past.

## Voor wie

- Teams die klantgegevens met AI verwerken
- Kennisbanken met verschillende toegangsrechten
- Agents die acties in je systemen uitvoeren
- Organisaties die grip op gebruik en kosten willen

## De aanpak

### Inventariseren

Welke gegevens gaan naar welk model? Wie heeft toegang, welke acties zijn mogelijk en hoe wordt het gebruik begrensd?

### Instellingen & locaties

AITJE onderzoekt verwerking, opslag, traininginstellingen, bewaartermijnen en aanwezige controles. Onbekende informatie blijft herkenbaar.

### Maatregelen kiezen

Een voorstel voor dataminimalisatie, rolrechten, guardrails, bevestiging en limieten. Jij kiest welke aanpassingen nodig zijn.

### Inrichten & toetsen

Uitvoering wordt apart afgesproken. AITJE test de gekozen maatregelen, ook bij onbevoegde toegang, ongewenste instructies en overschreden limieten.

## Wat je krijgt

- Overzicht van gegevensstromen, aanbieders en datalocaties
- Inzicht in toegang, bewaarbeleid en aanwezige controles
- Aandachtspunten met praktische verbeterkeuzes
- Na afgesproken uitvoering: ingerichte en geteste maatregelen

## Prijzen en voorwaarden

Vanaf €225. Alle prijzen zijn exclusief btw.

Voor een eenvoudige AI-datalocatiecheck, begroot op circa drie uur voor een beperkt aantal bekende diensten. De basisinventarisatie hoort al bij de AI-scan; eerdere bevindingen gebruiken we opnieuw. Verdiepend technisch onderzoek en uitvoering krijgen een aparte urenbegroting. De onderzochte diensten en oplevering spreek je vooraf af.

### AI-datalocatiecheck

Gerichte check van een beperkt aantal bekende AI-diensten, beschikbare providerinformatie en instellingen. Circa drie uur voor een eenvoudige situatie. Bevindingen uit een scan gebruiken we opnieuw; onzekerheden blijven zichtbaar.

Vanaf €225. Alle prijzen zijn exclusief btw.

### Praktische maatregelen

Anonimisatie, rolrechten in RAG, guardrails, bevestiging door medewerkers, budgetlimieten en logging. De gekozen aanpassingen worden vooraf afgesproken.

Vast uurtarief. Alle prijzen zijn exclusief btw.

### AI-wegwijs

Uitleg, richtlijnen en hulpmiddelen om slim en veilig met AI te werken, als onderdeel van je samenwerking of los.

Op aanvraag. Alle prijzen zijn exclusief btw.

## Apart af te spreken

- Een bindend juridisch oordeel, certificering of compliancegarantie
- Migratie of uitgewerkt alternatief ontwerp
- Uitgebreid vervolgonderzoek

## Veelgestelde vragen

### Wat kost een AI-datalocatiecheck?

Vanaf €225 exclusief btw voor een eenvoudige situatie, begroot op circa drie uur. We controleren een vooraf afgesproken, beperkt aantal bekende AI-diensten, instellingen en beschikbare providerinformatie. De basisinventarisatie is onderdeel van de AI-scan. Eerdere bevindingen gebruiken we opnieuw; aanvullend technisch onderzoek en maatregelen begroten we apart.

### Hoe helpt AITJE bij veilig AI-gebruik?

AITJE brengt gegevensstromen, toegang, datalocaties en instellingen in kaart en kan praktische maatregelen inrichten. Denk aan persoonsgegevens verwijderen vóór een externe modelcall, rolrechten voor de kennisbank, menselijke bevestiging, guardrails, gebruikslimieten en logging. Onderzoek en uitvoering worden vooraf afgebakend.

### Kan AITJE persoonsgegevens verwijderen voordat ze naar een extern model gaan?

Ja. AITJE kan een lokale voorbereidingsstap inbouwen die namen, contactgegevens en andere herkenbare details verwijdert of vervangt, en alleen noodzakelijke informatie doorstuurt. Of de uitkomst echt anoniem is, hangt ook af van de overige context. Een naam vervangen door een label is niet vanzelf volledige anonimisatie.

### Helpt het om steeds een nieuwe, lege chat te gebruiken?

Een nieuwe context per taak of klant beperkt welke eerdere berichten aan de volgende vraag worden meegegeven. AITJE kan sessies, geheugen en context scheiden. Dat verandert niet automatisch wat de provider zelf bewaart of voor training gebruikt: die instellingen en afspraken worden afzonderlijk gecontroleerd.

### Kan gebruik voor training of databewaring worden uitgezet?

AITJE controleert welke instellingen en afspraken bij de gekozen dienst beschikbaar zijn. Gebruik voor training uitschakelen is iets anders dan niets bewaren. Zero-data retention kan voor bepaalde API's en functies beschikbaar zijn, met voorwaarden en uitzonderingen. AITJE onderzoekt wat werkelijk voor jouw gebruikte route geldt.

### Hoe voorkom je dat een medewerker via AI afgeschermde documenten vindt?

De applicatie controleert de identiteit en rol vóórdat RAG gegevens ophaalt. De zoekopdracht wordt beperkt tot toegestane documenten, tekststukken en categorieën. Dezelfde rechten gelden voor tool calls en andere koppelingen. Afgeschermde inhoud hoort dus niet eerst aan het model te worden gegeven met alleen de instructie om die niet te delen.

### Kan AITJE beschermen tegen prompt injection en jailbreaks?

AITJE kan meerdere controles combineren: invoer en opgehaalde documenten controleren, instructies van bronmateriaal scheiden, toolrechten beperken en acties valideren. Een filterlaag of LLM-firewall kan daarbij helpen, maar houdt niet iedere aanval tegen. Daarom worden ook toegang en toegestane acties buiten het model afgedwongen en getest.

### Kunnen AI-kosten en het aantal calls worden begrensd?

Ja. AITJE kan budgetten, limieten per taak en gebruiker, rate limiting en een maximumaantal pogingen inrichten. Voor een nieuwe call kan de toepassing controleren of er nog budget beschikbaar is. Providerwaarschuwingen zijn niet altijd een harde stop; daarom wordt gekeken welke limieten werkelijk blokkeren. Lopende calls en vertraagde verbruiksrapportage worden meegenomen in de inrichting.

### Wanneer moet een medewerker een actie bevestigen?

Dat spreek je vooraf af. Bijvoorbeeld voordat een bericht wordt verstuurd, een betaling wordt voorbereid of belangrijke gegevens worden gewijzigd. De medewerker ziet het voorstel en de gevolgen en moet expliciet akkoord geven voordat de actie wordt uitgevoerd. De bevestiging en uitvoering kunnen worden gelogd.

### Hoe worden antwoorden en acties gecontroleerd?

AITJE kan antwoorden koppelen aan toegestane bronnen via RAG en uitvoer met code controleren op formaat, verplichte velden en toegestane acties. Een tweede model, LLM-as-a-Judge, kan aanvullend meekijken. RAG en een tweede model kunnen fouten helpen vinden, maar sluiten ze niet uit. Voor belangrijke uitkomsten blijft menselijke beoordeling een passende controle.

### Wat wordt er intern gelogd?

Bijvoorbeeld wie een taak startte, welke bronnen en modelversie zijn gebruikt, welke actie is voorgesteld, wie akkoord gaf en wat er is uitgevoerd. AITJE stemt detailniveau, toegang en bewaartermijn af. Persoonsgegevens, volledige prompts en API-sleutels hoeven niet standaard in een logbestand terecht te komen.

### Is lokaal draaien altijd voldoende om gegevens te beschermen?

Lokaal verwerken kan voorkomen dat de inhoud naar een externe modelprovider gaat. De omgeving zelf heeft nog steeds passende netwerkbeveiliging, toegangsrechten en beheer nodig. AITJE controleert ook koppelingen, logging en terugvalroutes, zodat vertrouwelijke gegevens niet via een andere route alsnog worden verstuurd.

### Is een Nederlandse server automatisch veilig?

Nee. Een locatie zegt iets, maar niet alles. AITJE kijkt ook naar wie toegang heeft, wat er bewaard wordt en welke instellingen aan staan.

### Vervangt dit een jurist of privacy officer?

Nee. AITJE levert de technische kant: waar gegevens heen gaan en welke maatregelen mogelijk zijn. Voor een juridisch oordeel heb je een specialist nodig.

## Contact

[Neem contact op met AITJE](https://aitje.com/contact) — contact@aitje.com
