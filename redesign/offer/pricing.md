# Prijsoverzicht en prijsopbouw

## Bevestigd prijsmodel — 5 oktober 2026, bijgewerkt op 6 oktober 2026

De oprichter heeft het onderstaande prijsmodel en de bijbehorende afbakening goedgekeurd. Dit vervangt de eerdere dummyprijzen en SLA-uren; zie besluit 52 in de besluitenlog. Alle bedragen zijn exclusief btw.

De uitvoerbare prijsgegevens staan centraal in **aitje.nl/app/content/pricing.ts**. Product- en dienstcontent, FAQ, prijsblokken en kaarten gebruiken deze gegevens. De openbare bestanden **llms.txt** en **llms-full.txt** worden automatisch bij builds en tijdens ontwikkeling gesynchroniseerd.

## Openbare PDF-prijslijst

De volledige prijslijst is beschikbaar via `/prijslijst-aitje.pdf` (Nederlands) en `/pricelist-aitje.pdf` (Engels). De FAQ, footer en de product-/dienstenoverzichten bieden een link in de actieve taal. De PDF bevat producten, diensten, uurtarieven, ondersteuning en introductievoorwaarden. Bij een prijswijziging worden de PDF’s en hun publicatiekopieën vernieuwd; zie `output/pricelists/README.md`.

## Uurtarief

**€75 per persoonuur** voor advies, verdiepend onderzoek, optimalisatie, tokenmanagement, aanvullende inrichting en Custom. Scope, verwachte uren en budget worden vooraf afgesproken. Extra werk begint na akkoord.

Het bedrag staat in de algemene FAQ-vraag **Wat vraagt AITJE per uur?** en in de openbare PDF-prijslijst. Bij uurwerk elders staat **Vast uurtarief**. Een afgebakende dienst of projectfase kan een eigen bedrag tonen.

Begroot voorbereiding, klantcontact, tests, rapportage, uitleg en afgesproken nazorg mee. Reken intern in persoonuren: vier uur onderzoek met twee specialisten is acht uur inzet. Algemene productontwikkeling is apart van klantspecifiek werk.

## Introductieaanbod

De AI-scan geldt voor de **eerste tien betaalde klanten**. Het productaanbod voor Assistent en Coder geldt voor de **eerste honderd betaalde klanten**:

| Aanbod | Introductie | Reguliere prijsbasis | Klantlimiet |
| --- | ---: | ---: | ---: |
| AI-scan | €395 | €495 | 10 |
| Assistent met basisinstallatie | €599 | Vanaf €698 | 100 voor het productaanbod |
| Coder met basisinstallatie | €799 | Vanaf €898 | 100 voor het productaanbod |

Beschikbaarheid wordt in de offerte bevestigd. De site toont geen verzonnen aantal resterende plaatsen. De actuele beschikbaarheid wordt commercieel bijgehouden; zet **introduction.scan.active** of **introduction.products.active** afzonderlijk uit wanneer het betreffende aanbod is afgelopen en synchroniseer de openbare AI-informatie.

Hardware, serverhuur, eventuele reis- of locatiekosten en aanvullende inrichting staan apart. De productbundels bevatten het product, basisinstallatie, testen, uitleg en afgesproken korte nazorg op een bekende, geschikte omgeving. Er wordt geen verplichte SLA aan gekoppeld.

## Losse producten

| Product | Per omgeving/device, voor zelfinstallatie |
| --- | ---: |
| AITJE Assistent | €499 |
| AITJE Coder | €699 |

Geen licentieprijs per gebruiker binnen de omgeving. De aankoop geeft blijvend gebruik van de opgeleverde versie. Infrastructuur, installatie door AITJE, updates en doorlopende ondersteuning zijn afzonderlijk.

Normale productprijs plus basisinstallatie is €499 + €199 = €698 voor Assistent en €699 + €199 = €898 voor Coder. De introductiebundels hebben €99 voordeel. De offerte maakt deze opbouw zichtbaar en begroting van extra werk gebeurt vooraf.

## Diensten en urenbegroting

| Onderdeel | Prijs | Afbakening/startbegroting |
| --- | ---: | --- |
| AI-scan | €495 regulier; €395 introductie | Maximaal drie belangrijke processen; intake, circa vier uur onderzoek, compact rapport en bespreking van een halfuur. |
| Gerichte adviessessie | €150 | Twee uur werk in totaal: voorbereiding, gesprek en korte aanbeveling. |
| Eenvoudige datalocatiecheck | Vanaf €225 | Circa drie uur; beperkt aantal bekende AI-diensten, instellingen, beschikbare providerinformatie en bevindingen. |
| Gerichte kostenanalyse | Vanaf €325 | Circa drie uur; beschikbare facturen en gebruiksgegevens, alternatieven en verbeterkansen. |
| Guardrailcheck | Vanaf €299 | Circa vier uur; één afgebakende workflow, gerichte controles, tests en bevindingen. Uitvoering apart. |
| Praktische teamtraining | €399 | Circa vier uur totaalwerk, waarvan twee uur teamsessie; teamgrootte en onderwerpen vooraf afspreken. |
| Praktische interne AI-afspraken | Vanaf €349 | Circa drie uur; gesprek, aanpassen van richtlijnen en bespreken. |
| Basisinstallatie | Vanaf €199 | Twee tot tweeënhalf uur op een bekende, geschikte omgeving, inclusief testen, uitleg en afgesproken korte nazorg. |
| Afwijkende infrastructuur/uitgebreide inrichting | €75 per uur | Vooraf een eigen begroting voor netwerk, server, toegang, kennisbankwerk en koppelingen. |
| Optimalisatie, tokenmanagement en Custom | €75 per uur | Afgebakende opdracht of projectfase met budget. |

Dit zijn startbegrotingen, geen gemeten uitvoeringstijden of onbeperkte pakketten. De onderzochte onderdelen, toegang, input en oplevering worden vooraf vastgesteld. Een grotere scope krijgt een eigen begroting.

## Eén onderzoek als basis

De AI-scan bevat de basisinventarisatie van AI-gebruik, abonnementen, kosten, gegevensstromen en duidelijke aandachtspunten. Eerdere bevindingen worden opnieuw gebruikt. Verdiepend onderzoek wordt alleen voor aanvullende vragen en werk begroot.

De eenvoudige datalocatiecheck vervangt het oude vaste bedrag voor de bredere check. Verwerking/opslag bij aanbieders exact vaststellen kan extra onderzoek vragen; onbekende informatie blijft zichtbaar. Een omvangrijke technische audit krijgt een eigen begroting.

Een scan is niet verplicht voor een product, installatie of concrete adviesvraag. De scan blijft een zelfstandige betaalde dienst en wordt niet automatisch verrekend met een vervolgopdracht.

Interne scanbegroting: 0,5 uur intake/voorbereiding + 4 uur onderzoek + 1,5 uur beoordeling/rapport + 0,5 uur bespreking = **6,5 persoonuren**. Uitvoering in beginsel door één specialist.

## Infrastructuur en installatie

AITJE kan de benodigde hardware of serveromgeving regelen. Er is geen verplichting om vooraf zelf geschikte apparatuur te bezitten. Hardware, serverhuur en overige infrastructuurkosten worden apart begroot; gehuurde capaciteit wordt rechtstreeks aan de aanbieder betaald.

De basisinstallatie omvat geen onbeperkt netwerkwerk, documentopschoning, kennisbankinrichting of koppelingen. Aanvullend hardware- of omgevingsonderzoek krijgt een urenbegroting; de twee oude vaste onderzoekstoeslagen vervallen. Bekende informatie uit de scan of eerdere opdrachten wordt meegenomen.

## Custom

Begin desgewenst met een onderzoeksfase van **vier tot acht uur, €300–€600**, voor de vraag, haalbaarheid en aanpak. Dit bedrag betreft de onderzoeksfase. Ontwikkeling, tests, livegang, feedback en overdracht worden daarna apart per fase begroot.

De klant kan per fase doorgaan, bijsturen of stoppen. Bestede onderzoeksuren blijven betaald. Inrichtingswerk en ontwikkeling staan herkenbaar in dezelfde begroting en worden niet dubbel berekend.

## Ondersteuning

| Niveau | Per maand | Tijdsbudget | Maximaal met één maand meegenomen tijd |
| --- | ---: | ---: | ---: |
| Core | €49 | 30 minuten | 1 uur |
| Plus | €129 | 1,5 uur | 3 uur |
| Max | €249 | 3 uur | 6 uur |

Hulp, modeltests, onderhoud, prompts, skills, persoonlijke analyses, overleg, controles en uitvoering gebruiken hetzelfde tijdsbudget. De klant en AITJE spreken af waar de tijd aan wordt besteed. Een algemene ontwikkelingsupdate staat daar los van; er is geen vast aantal persoonlijke mails boven op het budget inbegrepen.

Plus en Max kunnen een kwartaalcheck binnen het beschikbare tegoed inplannen; Max heeft prioriteit en kan ook overleg binnen het budget afspreken. Extra werk tegen normaal uurtarief na akkoord. Grote projecten krijgen een aparte offerte.

Ongebruikte tijd gaat maximaal één maand mee, tot één extra maandtegoed; oudste tijd eerst. Bereikbaar op werkdagen van 09.00 tot 18.00 uur, uitgezonderd feestdagen. Opzegging eindigt aan het einde van de volgende kalendermaand. Er is geen vaste oplostijd toegezegd.

## Evaluatie

Meet bij de eerste vijf klanten alle klantspecifieke uren, inclusief voorbereiding, contact, tests, uitleg en nazorg. Beoordeel of afwijkingen eenmalige leerkosten of structurele scopeproblemen zijn. Evalueer het scanintroductieaanbod na de eerste tien betaalde klanten en het productintroductieaanbod na honderd betaalde klanten.

De prijsinventarisatie van eerder op 5 oktober blijft een historische momentopname vóór dit besluit; die bedragen worden niet als actueel aanbod hergebruikt. Geplande producten en oude bundels hebben geen bevestigd huidig verkoopbedrag. IT-partneropdrachten worden afzonderlijk begroot.
