# Prijsinventarisatie AITJE — 5 oktober 2026

Momentopname van de huidige lokale site op **http://localhost:3000**, inclusief de nog niet gecommitte wijzigingen. Onderzocht: **76 gepubliceerde pagina’s**, broncode, de twee publieke LLM-tekstbestanden en de Git-versie vóór het verwijderen van het openbare uurtarief. 24 pagina’s bevatten bedragen of prijslabels; 14 daarvan bevatten AITJE-tarieven of aanbodlabels. De overige vermeldingen betreffen cases of rekenvoorbeelden.

Voor **“stond eerder”** is vergeleken met commit **44df691**, direct vóór de prijswijziging in **c7e6d2c** op 5 oktober 2026. De oude €85-vermeldingen zijn aan de historische templates en content gekoppeld; de huidige pagina’s zijn daadwerkelijk uitgelezen. Dit is geen controle van de productieversie of van actuele tarieven bij externe aanbieders.

## Bestanden

- [Alle huidige en voormalige vermeldingen](prijsinventarisatie-2026-10-05-vermeldingen.csv): één regel per plaats, inclusief FAQ’s, SEO-meta, JSON-LD en publieke tekstbestanden.
- [Tarieven per product, dienst en onderdeel](prijsinventarisatie-2026-10-05-tarieven.csv): bedragen, basis, voorwaarden, bron en alle bijbehorende pagina’s.
- [Bronvermeldingen en interne documenten](prijsinventarisatie-2026-10-05-bronnen.csv): de implementatie en alle euro-/dollarvermeldingen in redesign-documenten. Interne/historische bedragen zijn geen actuele verkoopprijzen.

## 1. Huidige tarieven en prijslabels

De AITJE-bedragen zijn exclusief btw. “Vanaf” betekent een startprijs voor de afgesproken scope. Hardware, hosting en extern modelgebruik worden afzonderlijk begroot; er is geen vaste algemene totaalprijs. De huidige contentbestanden en interne prijsdocumenten noemen de bedragen nog dummydata/voorlopig; deze inventarisatie legt vast wat de site nu gebruikt en bevestigt geen nieuwe prijzen.

| Product / dienst / onderdeel | Huidige vermelding | Basis / inhoud |
| --- | --- | --- |
| Algemeen uurtarief | **€85** | Per uur, excl. btw. Werkzaamheden, uren en budget vooraf afgestemd; extra werk na akkoord. |
| AITJE Assistent | **€499** | Eenmalig per omgeving/device, excl. btw. Blijvend gebruik van de opgeleverde versie; hardware, installatie, updates, ondersteuning en externe API’s apart. |
| AITJE Coder | **€699** | Eenmalig per omgeving/device, excl. btw. Blijvend gebruik van de opgeleverde versie; hardware, installatie, updates, ondersteuning en externe API’s apart. |
| AI-scan | **Vanaf €595** | Afgebakende opdracht, excl. btw. Intake, onderzoeksdagdeel van ongeveer vier uur, beoordeling en rapport. De scope en prijs stem je vooraf af. |
| Token management & optimalisatie | **Op aanvraag** | Scope en prijs in voorstel. Inventarisatie, vergelijking, uitvoering en eventueel beheer worden vooraf afgebakend. Je kunt ook alleen een analyse laten doen. Abonnementen, modelgebruik, hardware en hosting worden apart begroot. |
| Advies en analyse | **Vast uurtarief** | Uurwerk; bedrag alleen bij algemene FAQ. Je spreekt vooraf het uurtarief, de scope en de verwachte uren af. Een grotere analyse krijgt een eigen voorstel. Eventuele bouw wordt apart begroot en start na jouw akkoord. |
| Kostenanalyse | **Vanaf €499** | Onderdeel/losse opdracht, excl. btw. Abonnementen, tokengebruik, modellen en infrastructuur in kaart, met alternatieven en waar het goedkoper of efficiënter kan. |
| Praktisch werken met AI | **Vanaf €399** | Onderdeel/losse opdracht, excl. btw. Training voor je team: goede opdrachten geven, het juiste model kiezen, resultaten controleren en omgaan met gevoelige informatie. |
| AI-beleid | **Vanaf €399** | Onderdeel/losse opdracht, excl. btw. Praktische afspraken over welke tools en gegevens wel en niet mogen, en wie waarvoor verantwoordelijk is. |
| Installatie en inrichting | **Vanaf €199** | Afgebakende opdracht, excl. btw. Voor een standaardinstallatie met vooraf afgesproken scope. Productkosten, hardware of serverhuur en aanvullende inrichting staan apart in het voorstel. Je kunt ook geschikte eigen hardware of zelf gekozen hosting gebruiken. |
| Hardwareonderzoek | **€125** | Onderdeel/losse opdracht, excl. btw. Bestaande hardware beoordelen of uitzoeken welke computer en capaciteit passen bij de modellen en het gebruik. |
| Onderzoek digitale omgeving | **€125** | Onderdeel/losse opdracht, excl. btw. Je eigen server, hosting en netwerk beoordelen, inclusief benodigde toegang en mogelijke beperkingen voor de installatie. |
| Uitgebreidere inrichting | **Vast uurtarief** | Uurwerk; werkzaamheden vooraf afgestemd. Aanvullend documentwerk, kennisbankinrichting, koppelingen of aanpassingen aan de standaardarchitectuur. Vooraf afgebakend. |
| Optimalisatie | **Vast uurtarief** | Uurwerk; bedrag alleen bij algemene FAQ. Voor onderzoek en het verbeterplan. Aanpassingen aan de workflow, kennisbank of modellen worden apart begroot, per uur of als project. Jij geeft vooraf akkoord op wat wordt uitgevoerd. |
| Guardrailcheck | **€449** | Onderdeel/losse opdracht, excl. btw. Controle van begrenzingen, menselijke controle, foutafhandeling, noodstop en logging. Inbouwen gaat per uur. |
| Veilig AI-gebruik | **€1.499** | Afgebakende opdracht, excl. btw. Voor de AI-datalocatiecheck: overzicht en verbeteradvies op hoofdlijnen. Een maatregelenplan, technische aanpassingen en vervolgonderzoek worden apart op scope en uren afgesproken. |
| AI-datalocatiecheck | **€1.499** | Onderdeel/losse opdracht, excl. btw. In welke landen wordt jouw AI-data verwerkt en opgeslagen? Aanbieders, bekende servers, landen en instellingen in kaart. |
| Praktische maatregelen | **Per uur** | Uurwerk; werkzaamheden vooraf afgestemd. Anonimisatie, rolrechten in RAG, guardrails, bevestiging door medewerkers, budgetlimieten en logging. De gekozen aanpassingen worden vooraf afgesproken. |
| AI-wegwijs | **Op aanvraag** | Scope en prijs op aanvraag. Uitleg, richtlijnen en hulpmiddelen om slim en veilig met AI te werken, als onderdeel van je samenwerking of los. |
| AITJE Custom — AI op maat | **Vast uurtarief** | Uurwerk; bedrag alleen bij algemene FAQ. Het hele traject werkt op uurbasis: analyse, ontwerp, ontwikkeling, tests, optimalisatie, livegang en feedback. Vooraf spreek je de scope, verwachte uren en budget per fase af. Extra werk begint na jouw akkoord. Hardware, hosting, licenties en externe modelkosten worden apart begroot. |
| Ondersteuning en onderhoud | **Vanaf €49,99 per maand** | Per maand, excl. btw. Opzeggen tijdens een maand betekent beëindiging aan het einde van de volgende kalendermaand. |
| AITJE Core | **€49,99 per maand** | Per maand, excl. btw. 1 serviceuur per maand. Maandelijkse ontwikkelingsmail. |
| AITJE Plus | **€129,99 per maand** | Per maand, excl. btw. 2 serviceuren per maand. Maandelijkse ontwikkelingsmail. |
| AITJE Max | **€249 per maand** | Per maand, excl. btw. 3 serviceuren per maand. 2× per maand een persoonlijke mail. |
| Voor IT-bedrijven en bureaus | **Per opdracht** | Afspraken per samenwerking. Geen openbaar vast partnertarief. |
| Hardware / hosting / serverruimte | Geen vaste algemene prijs | Capaciteit en situatie bepalen de offerte; gehuurde servers worden volgens de site rechtstreeks aan de aanbieder betaald. |
| Losse AI-APK | Op aanvraag, geen vaste prijs | Genoemd bij ondersteuning; een AI-APK is opgenomen bij Plus en Max. |

## 2. Waar ieder tarief nu terugkomt

Deze tabel omvat gewone pagina-inhoud, FAQ’s en zoekmachinedata. De CSV geeft per pagina de precieze plaats. Prijslabels als “Vast uurtarief” staan ook hier.

| Product / dienst / onderdeel | Alle huidige pagina’s / publieke bestanden |
| --- | --- |
| Algemeen uurtarief | [/faq](http://localhost:3000/faq) |
| AITJE Assistent | [/producten](http://localhost:3000/producten)<br>[/faq](http://localhost:3000/faq)<br>[/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent)<br>[/producten/aitje-coder](http://localhost:3000/producten/aitje-coder)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| AITJE Coder | [/producten](http://localhost:3000/producten)<br>[/faq](http://localhost:3000/faq)<br>[/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent)<br>[/producten/aitje-coder](http://localhost:3000/producten/aitje-coder)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| AI-scan | [/diensten](http://localhost:3000/diensten)<br>[/faq](http://localhost:3000/faq)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| Token management & optimalisatie | [/diensten](http://localhost:3000/diensten)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) |
| Advies en analyse | [/diensten](http://localhost:3000/diensten)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| Kostenanalyse | [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse) |
| Praktisch werken met AI | [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse) |
| AI-beleid | [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse) |
| Installatie en inrichting | [/producten](http://localhost:3000/producten)<br>[/diensten](http://localhost:3000/diensten)<br>[/faq](http://localhost:3000/faq)<br>[/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent)<br>[/producten/aitje-coder](http://localhost:3000/producten/aitje-coder)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| Hardwareonderzoek | [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) |
| Onderzoek digitale omgeving | [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) |
| Uitgebreidere inrichting | [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) |
| Optimalisatie | [/diensten](http://localhost:3000/diensten)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven) |
| Guardrailcheck | [/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie) |
| Veilig AI-gebruik | [/diensten](http://localhost:3000/diensten)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| AI-datalocatiecheck | [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik) |
| Praktische maatregelen | [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik) |
| AI-wegwijs | [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik) |
| AITJE Custom — AI op maat | [/diensten](http://localhost:3000/diensten)<br>[/diensten/ai-scan](http://localhost:3000/diensten/ai-scan)<br>[/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie)<br>[/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| Ondersteuning en onderhoud | [/diensten](http://localhost:3000/diensten)<br>[/faq](http://localhost:3000/faq)<br>[/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent)<br>[/producten/aitje-coder](http://localhost:3000/producten/aitje-coder)<br>[/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting)<br>[/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie)<br>[/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom)<br>[/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud)<br>[/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven)<br>[/llms.txt](http://localhost:3000/llms.txt)<br>[/llms-full.txt](http://localhost:3000/llms-full.txt) |
| AITJE Core | [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) |
| AITJE Plus | [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) |
| AITJE Max | [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) |
| Voor IT-bedrijven en bureaus | Geen afzonderlijke bedragvermelding aangetroffen; zie inhoud/voorwaarden hierboven. |

## 3. Pagina voor pagina: eigen prijzen en verwijzingen

De kaarten tonen de prijs van het aanbod waarnaar ze linken, zowel op overzichtspagina’s als bij gerelateerd aanbod. “Cases” in deze tabel zijn meetgegevens of kostenvoorbeelden, geen tariefkaart van AITJE.

| Pagina | Eigen prijzen / onderdelen / FAQ | Kaarten met prijzen / links | Overige bedragen |
| --- | --- | --- | --- |
| [/](http://localhost:3000/) | — | — | 2 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/producten](http://localhost:3000/producten) | Installatie en inrichting: €199 | AITJE Assistent: €499<br>AITJE Coder: €699 | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten](http://localhost:3000/diensten) | — | AI-scan: €595<br>Token management & optimalisatie: Op aanvraag<br>Advies en analyse: Vast uurtarief<br>Installatie en inrichting: €199<br>Optimalisatie: Vast uurtarief<br>Veilig AI-gebruik: €1.499<br>AITJE Custom — AI op maat: Vast uurtarief<br>Ondersteuning en onderhoud: €49,99 | — |
| [/cases](http://localhost:3000/cases) | — | — | 2 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/faq](http://localhost:3000/faq) | AITJE Assistent: €499<br>AITJE Coder: €699<br>AI-scan: €595<br>Installatie en inrichting: €199<br>Ondersteuning en onderhoud: €49,99<br>Algemeen uurtarief: €85 | — | — |
| [/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent) | AITJE Assistent: €499<br>Installatie en inrichting: €199<br>Ondersteuning en onderhoud: €49,99 | AITJE Coder: €699 | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/producten/aitje-coder](http://localhost:3000/producten/aitje-coder) | AITJE Coder: €699<br>Installatie en inrichting: €199<br>Ondersteuning en onderhoud: €49,99 | AITJE Assistent: €499 | 2 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/ai-scan](http://localhost:3000/diensten/ai-scan) | AI-scan: €595 | Advies en analyse: Vast uurtarief<br>AITJE Custom — AI op maat: Vast uurtarief<br>Optimalisatie: Vast uurtarief<br>Token management & optimalisatie: Op aanvraag<br>Installatie en inrichting: €199<br>Veilig AI-gebruik: €1.499 | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie) | Token management & optimalisatie: Op aanvraag | AI-scan: €595<br>Advies en analyse: Vast uurtarief<br>Optimalisatie: Vast uurtarief<br>AITJE Custom — AI op maat: Vast uurtarief<br>Installatie en inrichting: €199<br>Veilig AI-gebruik: €1.499 | 10 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse) | Advies en analyse: Vast uurtarief<br>Kostenanalyse: €499<br>Praktisch werken met AI: €399<br>AI-beleid: €399 | AI-scan: €595<br>Optimalisatie: Vast uurtarief<br>Veilig AI-gebruik: €1.499<br>Token management & optimalisatie: Op aanvraag<br>Installatie en inrichting: €199<br>AITJE Custom — AI op maat: Vast uurtarief | 2 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) | Installatie en inrichting: €199<br>Hardwareonderzoek: €125<br>Onderzoek digitale omgeving: €125<br>Uitgebreidere inrichting: Vast uurtarief | Ondersteuning en onderhoud: €49,99<br>AITJE Custom — AI op maat: Vast uurtarief<br>AI-scan: €595<br>Token management & optimalisatie: Op aanvraag<br>Advies en analyse: Vast uurtarief<br>Optimalisatie: Vast uurtarief | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie) | Optimalisatie: Vast uurtarief<br>Guardrailcheck: €449 | Advies en analyse: Vast uurtarief<br>Ondersteuning en onderhoud: €49,99<br>AITJE Custom — AI op maat: Vast uurtarief<br>Token management & optimalisatie: Op aanvraag<br>AI-scan: €595<br>Installatie en inrichting: €199 | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik) | Veilig AI-gebruik: €1.499<br>AI-datalocatiecheck: €1.499<br>Praktische maatregelen: Per uur<br>AI-wegwijs: Op aanvraag | Advies en analyse: Vast uurtarief<br>Installatie en inrichting: €199<br>AI-scan: €595<br>Token management & optimalisatie: Op aanvraag<br>Optimalisatie: Vast uurtarief<br>AITJE Custom — AI op maat: Vast uurtarief | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom) | AITJE Custom — AI op maat: Vast uurtarief | Advies en analyse: Vast uurtarief<br>Installatie en inrichting: €199<br>Ondersteuning en onderhoud: €49,99<br>Token management & optimalisatie: Op aanvraag<br>AI-scan: €595<br>Optimalisatie: Vast uurtarief | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) | Ondersteuning en onderhoud: €49,99<br>AITJE Core: €49,99<br>AITJE Plus: €129,99<br>AITJE Max: €249 | Installatie en inrichting: €199<br>Optimalisatie: Vast uurtarief<br>AITJE Custom — AI op maat: Vast uurtarief<br>AI-scan: €595<br>Token management & optimalisatie: Op aanvraag<br>Advies en analyse: Vast uurtarief | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven) | — | AITJE Custom — AI op maat: Vast uurtarief<br>Installatie en inrichting: €199<br>Advies en analyse: Vast uurtarief<br>Ondersteuning en onderhoud: €49,99<br>Optimalisatie: Vast uurtarief<br>Veilig AI-gebruik: €1.499 | 2 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/chatgpt-of-codex-in-je-eigen-organisatie](http://localhost:3000/cases/chatgpt-of-codex-in-je-eigen-organisatie) | — | — | 24 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/council-hub](http://localhost:3000/cases/council-hub) | — | — | 5 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/coder-game-in-24-uur](http://localhost:3000/cases/coder-game-in-24-uur) | — | — | 4 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/3d-productmodellen-met-ai](http://localhost:3000/cases/3d-productmodellen-met-ai) | — | — | 12 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/documenten-doorzoeken-en-lakken](http://localhost:3000/cases/documenten-doorzoeken-en-lakken) | — | — | 4 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/spraak-naar-werkorder](http://localhost:3000/cases/spraak-naar-werkorder) | — | — | 25 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/cases/productteksten-zonder-tokenkosten](http://localhost:3000/cases/productteksten-zonder-tokenkosten) | — | — | 39 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |
| [/kenniscentrum/wat-zijn-tokens](http://localhost:3000/kenniscentrum/wat-zijn-tokens) | — | — | 1 vermeldingen uit cases/rekenvoorbeelden; volledig in CSV. |

## 4. Niet direct zichtbare prijsvermeldingen

| Vindplaats | Bedragen | Waar ze vandaan komen |
| --- | --- | --- |
| [/faq](http://localhost:3000/faq) | €499, €699, €595, €199, €49,99, €85 | FAQPage JSON-LD |
| [/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent) | €499 | description + og:description; FAQPage JSON-LD |
| [/producten/aitje-coder](http://localhost:3000/producten/aitje-coder) | €699 | description + og:description; FAQPage JSON-LD |
| [/diensten/ai-scan](http://localhost:3000/diensten/ai-scan) | €595 | description + og:description; FAQPage JSON-LD |
| [/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie) | €4, €0,40 | FAQPage JSON-LD |
| [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) | €199 | FAQPage JSON-LD |
| [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) | €49,99 | FAQPage JSON-LD |
| [/cases/chatgpt-of-codex-in-je-eigen-organisatie](http://localhost:3000/cases/chatgpt-of-codex-in-je-eigen-organisatie) | €350, €200 | description + og:description |
| [/cases/3d-productmodellen-met-ai](http://localhost:3000/cases/3d-productmodellen-met-ai) | €9, €0,11, €0,18 | description + og:description |
| [/llms.txt](http://localhost:3000/llms.txt) en [/llms-full.txt](http://localhost:3000/llms-full.txt) | €499, €699, vanaf €595, vanaf €199, €1.499, vanaf €49,99 per maand; “Vast uurtarief” voor advies en Custom | Handmatig geschreven publieke tekstbestanden, onafhankelijk van de prijsobjecten. |

Productpagina’s bevatten volgens de code geen commerciële Offer-schema’s met een numerieke prijs; de prijzen in JSON-LD komen uit FAQ-antwoorden.

## 5. Waar €85 eerder stond

| Pagina / bestand | Exacte plaatsen vóór verwijderen | Huidige situatie |
| --- | --- | --- |
| [/diensten/ai-scan](http://localhost:3000/diensten/ai-scan) | Past hier ook bij: dienstkaart (Advies en analyse)<br>Past hier ook bij: dienstkaart (AITJE Custom — AI op maat)<br>Past hier ook bij: dienstkaart (Optimalisatie) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie) | Past hier ook bij: dienstkaart (Advies en analyse)<br>Past hier ook bij: dienstkaart (Optimalisatie)<br>Past hier ook bij: dienstkaart (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse) | Hero: prijs (Advies en analyse)<br>Prijsblok #dienst-prijs (Advies en analyse)<br>FAQ: Wat doet AITJE bij Advies en analyse? (Advies en analyse)<br>FAQ-schema: Wat doet AITJE bij Advies en analyse? (Advies en analyse)<br>SEO: description (Advies en analyse)<br>SEO: og:description (Advies en analyse)<br>Past hier ook bij: dienstkaart (Optimalisatie) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten](http://localhost:3000/diensten) | Dienstkaart / Custom-blok (Advies en analyse)<br>Dienstkaart / Custom-blok (Optimalisatie)<br>Dienstkaart / Custom-blok (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/faq](http://localhost:3000/faq) | FAQ: Wat doet AITJE bij Advies en analyse? (Advies en analyse)<br>FAQ-schema: Wat doet AITJE bij Advies en analyse? (Advies en analyse)<br>FAQ: Hoe werkt AITJE Custom? (AITJE Custom — AI op maat)<br>FAQ-schema: Hoe werkt AITJE Custom? (AITJE Custom — AI op maat) | Oude bedragen in de vragen over Advies en Custom verwijderd; €85 staat nu bij “Wat vraagt AITJE per uur?” en het bijbehorende FAQ-schema. |
| [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting) | Onderdelen #oplevering (Uitgebreidere inrichting)<br>Past hier ook bij: dienstkaart (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie) | Hero: prijs (Optimalisatie)<br>Prijsblok #dienst-prijs (Optimalisatie)<br>SEO: description (Optimalisatie)<br>SEO: og:description (Optimalisatie)<br>Past hier ook bij: dienstkaart (Advies en analyse)<br>Past hier ook bij: dienstkaart (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik) | Past hier ook bij: dienstkaart (Advies en analyse) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom) | Hero: prijs (AITJE Custom — AI op maat)<br>Prijsblok #dienst-prijs (AITJE Custom — AI op maat)<br>FAQ: Hoe werkt AITJE Custom? (AITJE Custom — AI op maat)<br>FAQ-schema: Hoe werkt AITJE Custom? (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud) | Past hier ook bij: dienstkaart (Optimalisatie)<br>Past hier ook bij: dienstkaart (AITJE Custom — AI op maat) | €85 verwijderd uit deze plaatsen; uurwerk vermeldt “Vast uurtarief”. |
| [/llms.txt](http://localhost:3000/llms.txt) | Regel 18 (Advies en analyse)<br>Regel 22 (AITJE Custom — AI op maat) | Advies en Custom vermelden “Vast uurtarief”. |
| [/llms-full.txt](http://localhost:3000/llms-full.txt) | Regel 18 (Advies en analyse)<br>Regel 22 (AITJE Custom — AI op maat) | Advies en Custom vermelden “Vast uurtarief”. |

Het bedrag stond vóór deze wijziging op **10 gewone pagina’s** en in **2 publieke tekstbestanden**, met herhalingen binnen dezelfde pagina. Op de home/productoverzichten stond toen geen AITJE-uurtarief van €85. De historische tabel omvat ook de twee SEO-beschrijvingen voor Advies en Optimalisatie en de FAQ-schema’s voor Advies, Custom en de algemene FAQ.

## 6. Casebedragen en rekenvoorbeelden

Deze bedragen horen bij een toepassing, vergelijking of calculator en hebben hun eigen grondslag. De getallen hieronder zijn de inhoud van de huidige site; externe modeltarieven zijn voor deze audit niet opnieuw op geldigheid gecontroleerd. De volledige teksten en calculator-uitkomsten bij de standaardinstellingen staan in de vermeldingen-CSV.

| Pagina | Bedragen / grondslag op de site |
| --- | --- |
| [/cases/chatgpt-of-codex-in-je-eigen-organisatie](http://localhost:3000/cases/chatgpt-of-codex-in-je-eigen-organisatie) | 9 × €200 = €1.800 per maand; gedeeld API-budget €350 per maand; verschil €1.450 per maand. |
| [/cases/council-hub](http://localhost:3000/cases/council-hub) | €0 externe AI-tokenkosten; bestaande hardware. |
| [/cases/coder-game-in-24-uur](http://localhost:3000/cases/coder-game-in-24-uur) | €0 externe AI-tokenkosten voor lokaal gebruik. |
| [/cases/3d-productmodellen-met-ai](http://localhost:3000/cases/3d-productmodellen-met-ai) | Circa €9 → €0,11–€0,18 API-kosten per product; voorbeeld bij 10.000 producten: €90.000 → €1.100–€1.800. Circa €1.000 voor acht beelden uit een traditionele modelleerofferte. |
| [/cases/documenten-doorzoeken-en-lakken](http://localhost:3000/cases/documenten-doorzoeken-en-lakken) | €2–4 per dag websitechat; modeltarieven $0,10 input / $0,50 output per miljoen tokens. |
| [/cases/spraak-naar-werkorder](http://localhost:3000/cases/spraak-naar-werkorder) | €2.000 hardware; $0,006 per minuut Whisper. Modelvergelijking: Luna $0,10 / $0,50 en Sol $2 / $10 per miljoen input/outputtokens. Calculator gebruikt onder andere €0,30/kWh en €0,90 per dollar als aanname. Standaarduitkomst ongeveer €6,02 lokale stroom/maand, €203,15 cloud-AI/maand, €199,69 verschil/maand en €2.396,30 verschil/jaar; invoer is verstelbaar. |
| [/cases/productteksten-zonder-tokenkosten](http://localhost:3000/cases/productteksten-zonder-tokenkosten) | GPU-projecttarief $3,19/uur × 7 uur = $22,33, circa $0,0032/product. API-vergelijking: Sol $2/$10, Terra $2/$12, Opus $4/$20 en Fable $10/$50 per miljoen input/outputtokens; afgeleide totalen in de tabel. DeepL-voorbeeld €29,75/maand, 1 miljoen tekens inbegrepen en €22 per extra miljoen. |
| [/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie) | Fictief €4 → €0,40 modelgebruik per resultaat, uitgaand van €4 per miljoen tokens; in het voorbeeld én de dienst-FAQ/JSON-LD. |
| [/kenniscentrum/wat-zijn-tokens](http://localhost:3000/kenniscentrum/wat-zijn-tokens) | Dezelfde fictieve €4 → €0,40-illustratie. |

De kosten uit de development-agency- en 3D-productmodelcases worden ook getoond in casevoorbeelden op: [/](http://localhost:3000/), [/producten](http://localhost:3000/producten), [/cases](http://localhost:3000/cases), [/producten/aitje-assistent](http://localhost:3000/producten/aitje-assistent), [/producten/aitje-coder](http://localhost:3000/producten/aitje-coder), [/diensten/ai-scan](http://localhost:3000/diensten/ai-scan), [/diensten/token-management-en-optimalisatie](http://localhost:3000/diensten/token-management-en-optimalisatie), [/diensten/advies-en-analyse](http://localhost:3000/diensten/advies-en-analyse), [/diensten/installatie-en-inrichting](http://localhost:3000/diensten/installatie-en-inrichting), [/diensten/optimalisatie](http://localhost:3000/diensten/optimalisatie), [/diensten/veilig-ai-gebruik](http://localhost:3000/diensten/veilig-ai-gebruik), [/diensten/aitje-custom](http://localhost:3000/diensten/aitje-custom), [/diensten/ondersteuning-en-onderhoud](http://localhost:3000/diensten/ondersteuning-en-onderhoud), [/diensten/voor-it-bedrijven](http://localhost:3000/diensten/voor-it-bedrijven), [/cases/chatgpt-of-codex-in-je-eigen-organisatie](http://localhost:3000/cases/chatgpt-of-codex-in-je-eigen-organisatie), [/cases/council-hub](http://localhost:3000/cases/council-hub), [/cases/coder-game-in-24-uur](http://localhost:3000/cases/coder-game-in-24-uur), [/cases/3d-productmodellen-met-ai](http://localhost:3000/cases/3d-productmodellen-met-ai), [/cases/documenten-doorzoeken-en-lakken](http://localhost:3000/cases/documenten-doorzoeken-en-lakken), [/cases/spraak-naar-werkorder](http://localhost:3000/cases/spraak-naar-werkorder), [/cases/productteksten-zonder-tokenkosten](http://localhost:3000/cases/productteksten-zonder-tokenkosten). De CSV koppelt iedere vermelding aan de betreffende case.

## 7. Interne historische prijzen

Deze bedragen staan in de interne redesign-documentatie; ze zijn niet aangetroffen als huidige publieke verkoopprijs. “Historisch” betekent hier een interne prijsreferentie, niet dat het bedrag aantoonbaar op een oude openbare productpagina stond.

| Onderdeel | Intern oud bedrag | Bron / status |
| --- | --- | --- |
| IT-partnertarief | €65 per uur | pricing.md: uitsluitend interne dummydata; publiek geen vast partnertarief. |
| AITJE Manager | €699 | pricing.md: historisch, product disabled. |
| AITJE Notulist | €299 | pricing.md: historisch, product disabled. |
| AITJE Prepper | €149 | pricing.md: historisch, product disabled. |
| AITJE 3D | €499 | pricing.md: historisch, product disabled. |
| AITJE Beeld | €599 | pricing.md: historisch, product disabled. |
| AITJE Video | €699 | pricing.md: historisch, product disabled. |
| AITJE Muziek | €599 | pricing.md: historisch, product disabled. |

Oude bundels Startpakket, Doorlichting en Compliance en hun eventuele korting/SLA-maanden zijn volgens pricing.md niet opnieuw afgestemd op het huidige aanbod. Alle gevonden interne prijsvermeldingen, ook buiten offer-documenten, zijn opgenomen met bestand en regelnummer in de bronnen-CSV.

## 8. Bevindingen voor een eenduidig prijsbeleid

1. **Het algemene uurtarief staat nu op één gewone pagina:** /faq, bij “Wat vraagt AITJE per uur?”. Het FAQ-schema op dezelfde pagina bevat hetzelfde bedrag.
2. **Productprijzen gebruiken verschillende formuleringen:** kaarten en prijsblokken tonen €499/€699, de hero noemt “Voorlopig”, product-FAQ’s “voorlopige productprijs” en SEO zegt “Vanaf”. “Voorlopige prijzen” staat ook nog onder het samengestelde productprijsblok.
3. **€1.499 hoort bij de AI-datalocatiecheck.** Het dienstenoverzicht verduidelijkt dit met “Datalocatiecheck”; de hero en gerelateerde kaarten van Veilig AI-gebruik tonen het bedrag onder de algemene dienstnaam. De prijsnotitie begrenst de scope wel tot de check.
4. **Bedragen worden op meerdere plekken handmatig onderhouden:** products.ts en services.ts zijn de hoofdbronnen, maar product-/dienst-FAQ’s, SEO-beschrijvingen en llms-bestanden bevatten aparte tekstkopieën. De vanafprijs voor ondersteuning (€49,99) staat bovendien hardcoded in het productdetailtemplate; die volgt slaPlans niet automatisch.
5. **Installatie heeft twee losse bronnen voor €199:** installPrice in products.ts en de installatieprijzen/FAQ in services.ts. Voor de losse onderdelen Kostenanalyse, Training, AI-beleid, onderzoeken en Guardrailcheck bestaan afzonderlijke prijzen.
6. **Niet ieder onderdeel heeft een vast bedrag:** token management, AI-wegwijs, partnerwerk en hardware/hosting; maatregelen en uitgebreidere inrichting gebruiken uurwerk. Een losse AI-APK heeft geen vaste prijs op de site.
7. **Cases noemen bedragen van leveranciers en klanttoepassingen.** Die staan los van AITJE’s product-/dienstprijzen; alle vindplaatsen zijn wel meegenomen.

Er zijn bij deze inventarisatie geen prijzen of websiteonderdelen gewijzigd.

## 9. Pagina’s zonder aangetroffen bedragen of prijslabels

[/kenniscentrum](http://localhost:3000/kenniscentrum), [/over-aitje](http://localhost:3000/over-aitje), [/visie](http://localhost:3000/visie), [/contact](http://localhost:3000/contact), [/kenniscentrum/wat-is-generatieve-ai](http://localhost:3000/kenniscentrum/wat-is-generatieve-ai), [/kenniscentrum/wat-is-tekstgeneratie](http://localhost:3000/kenniscentrum/wat-is-tekstgeneratie), [/kenniscentrum/wat-is-image-generation](http://localhost:3000/kenniscentrum/wat-is-image-generation), [/kenniscentrum/wat-is-music-generation](http://localhost:3000/kenniscentrum/wat-is-music-generation), [/kenniscentrum/wat-is-spraak-en-audiogeneratie](http://localhost:3000/kenniscentrum/wat-is-spraak-en-audiogeneratie), [/kenniscentrum/wat-is-videogeneratie](http://localhost:3000/kenniscentrum/wat-is-videogeneratie), [/kenniscentrum/wat-is-3d-generatie](http://localhost:3000/kenniscentrum/wat-is-3d-generatie), [/kenniscentrum/wat-is-codegeneratie](http://localhost:3000/kenniscentrum/wat-is-codegeneratie), [/kenniscentrum/hoe-werkt-generatie-met-diffusion-modellen](http://localhost:3000/kenniscentrum/hoe-werkt-generatie-met-diffusion-modellen), [/kenniscentrum/ai-generatie-lokaal-of-via-een-api](http://localhost:3000/kenniscentrum/ai-generatie-lokaal-of-via-een-api), [/kenniscentrum/wat-zijn-frontier-modellen](http://localhost:3000/kenniscentrum/wat-zijn-frontier-modellen), [/kenniscentrum/wat-zijn-open-source-ai-modellen](http://localhost:3000/kenniscentrum/wat-zijn-open-source-ai-modellen), [/kenniscentrum/wat-is-modelrouting](http://localhost:3000/kenniscentrum/wat-is-modelrouting), [/kenniscentrum/wat-is-quantisatie](http://localhost:3000/kenniscentrum/wat-is-quantisatie), [/kenniscentrum/wat-is-fine-tuning](http://localhost:3000/kenniscentrum/wat-is-fine-tuning), [/kenniscentrum/wat-is-tool-calling](http://localhost:3000/kenniscentrum/wat-is-tool-calling), [/kenniscentrum/wat-is-mcp](http://localhost:3000/kenniscentrum/wat-is-mcp), [/kenniscentrum/wat-zijn-ai-hallucinaties](http://localhost:3000/kenniscentrum/wat-zijn-ai-hallucinaties), [/kenniscentrum/wat-is-digitale-soevereiniteit](http://localhost:3000/kenniscentrum/wat-is-digitale-soevereiniteit), [/kenniscentrum/wat-is-abliteration](http://localhost:3000/kenniscentrum/wat-is-abliteration), [/kenniscentrum/wat-zijn-model-weights](http://localhost:3000/kenniscentrum/wat-zijn-model-weights), [/kenniscentrum/wat-is-kv-cache](http://localhost:3000/kenniscentrum/wat-is-kv-cache), [/kenniscentrum/wat-is-een-vector](http://localhost:3000/kenniscentrum/wat-is-een-vector), [/kenniscentrum/wat-is-een-token-factory](http://localhost:3000/kenniscentrum/wat-is-een-token-factory), [/kenniscentrum/wat-is-inference](http://localhost:3000/kenniscentrum/wat-is-inference), [/kenniscentrum/wat-is-een-vision-model](http://localhost:3000/kenniscentrum/wat-is-een-vision-model), [/kenniscentrum/wat-is-een-coding-model](http://localhost:3000/kenniscentrum/wat-is-een-coding-model), [/kenniscentrum/wat-is-vc-subsidy](http://localhost:3000/kenniscentrum/wat-is-vc-subsidy), [/kenniscentrum/wat-is-loss-leader-pricing](http://localhost:3000/kenniscentrum/wat-is-loss-leader-pricing), [/kenniscentrum/wat-is-predatory-pricing](http://localhost:3000/kenniscentrum/wat-is-predatory-pricing), [/kenniscentrum/wat-is-vendor-lock-in](http://localhost:3000/kenniscentrum/wat-is-vendor-lock-in), [/kenniscentrum/wat-is-een-llm](http://localhost:3000/kenniscentrum/wat-is-een-llm), [/kenniscentrum/wat-is-edge-ai](http://localhost:3000/kenniscentrum/wat-is-edge-ai), [/kenniscentrum/wat-is-local-ai](http://localhost:3000/kenniscentrum/wat-is-local-ai), [/kenniscentrum/wat-is-on-premise-ai](http://localhost:3000/kenniscentrum/wat-is-on-premise-ai), [/kenniscentrum/white-label-hardware-aitje-software](http://localhost:3000/kenniscentrum/white-label-hardware-aitje-software), [/kenniscentrum/wat-is-rag](http://localhost:3000/kenniscentrum/wat-is-rag), [/kenniscentrum/wat-is-context](http://localhost:3000/kenniscentrum/wat-is-context), [/kenniscentrum/wat-is-een-context-window](http://localhost:3000/kenniscentrum/wat-is-een-context-window), [/kenniscentrum/wat-is-een-ai-agent](http://localhost:3000/kenniscentrum/wat-is-een-ai-agent), [/kenniscentrum/wat-zijn-embeddings](http://localhost:3000/kenniscentrum/wat-zijn-embeddings), [/kenniscentrum/wat-is-prompt-engineering](http://localhost:3000/kenniscentrum/wat-is-prompt-engineering), [/kenniscentrum/wat-is-een-api](http://localhost:3000/kenniscentrum/wat-is-een-api), [/kenniscentrum/wat-is-een-webhook](http://localhost:3000/kenniscentrum/wat-is-een-webhook), [/kenniscentrum/wat-is-een-backend](http://localhost:3000/kenniscentrum/wat-is-een-backend), [/kenniscentrum/wat-is-een-frontend](http://localhost:3000/kenniscentrum/wat-is-een-frontend), [/kenniscentrum/wat-is-cloud](http://localhost:3000/kenniscentrum/wat-is-cloud), [/kenniscentrum/wat-is-een-workflow](http://localhost:3000/kenniscentrum/wat-is-een-workflow).

De navigatie en footer bevatten geen product-/dienstbedragen. Home heeft geen prijzen in de eigen product- en dienstkaarten, maar wel bedragen in casevoorbeelden. De publieke sitemap noemt URL’s en geen prijzen.

## 10. Oude URL’s die nu doorsturen

Deze routes bevatten geen eigen actuele prijscontent: de bezoeker wordt naar de huidige pagina gestuurd.

| Oude route | Huidige bestemming |
| --- | --- |
| /diensten/consultancy | /diensten/advies-en-analyse |
| /diensten/ai-strategie | /diensten/ai-scan |
| /diensten/sla | /diensten/ondersteuning-en-onderhoud |
| /aitje-custom en /producten/aitje-custom | /diensten/aitje-custom |
| /oplossingen | /diensten |
| /shop, /aitje, /aitje-pro en /roadmap | /producten |
| /producten/hardware en onderliggende routes | /producten |
| /producten/software en onderliggende routes | /producten |
| /producten/aitje-assistent/aitje-os, /producten/aitje-assistent/aitje-client en /producten/aitje-assistent/kennisbank | /producten/aitje-assistent |

## Controlebasis

- Alle 76 onderzochte pagina’s antwoordden met HTTP 200.
- De 49 gepubliceerde kennisartikelen zijn inbegrepen; bij “Wat zijn tokens?” staat een eurovoorbeeld.
- FAQ-antwoorden zijn gecontroleerd inclusief ingeklapte antwoorden; meta-tags en JSON-LD afzonderlijk uitgelezen.
- Hero’s, onderdelen, productkaarten, gerelateerde dienst-/productkaarten, SLA-plannen, cases en calculators zijn meegenomen.
- De standaardinstellingen van calculators zijn geïnventariseerd; verstelbare bedragen zijn in de CSV als kostenvoorbeeld herkenbaar.
- Huidige broncode: products.ts, services.ts, faq.ts, product-/diensttemplates, prijsdragende componenten, kennisdata, usePageSeo en public/llms*.txt.
- Historische broncode: 44df691 → c7e6d2c. Huidige Git HEAD: f7d0f8c8af2f36c1b8b7cdf66062587085acb3a6.
