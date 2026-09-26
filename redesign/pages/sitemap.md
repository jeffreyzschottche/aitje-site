# Sitemap en navigatie

## Status

Bevestigde paginastructuur op basis van het overleg met de oprichter. Deze Markdown beschrijft het redesign; routes en navigatie zijn hiermee nog niet in de frontend aangepast.

De pagina's worden meteen voor Nederlands en Engels voorbereid. De Nederlandse inhoud wordt eerst gecontroleerd en goedgekeurd.

## Hoofdnavigatie

**Producten · Diensten · Cases · Kenniscentrum · Over AITJE · Contact**

Contact is bereikbaar via de opvallende hoofdactie **Bespreek je AI-vraag**. Het hoeft niet daarnaast als tweede identieke link te worden herhaald. Het logo verwijst naar de homepage.

### Producten

Dropdown en overzicht voor het vaste aanbod. Assistent en Coder zijn beschikbaar. Overige geplande producten blijven herkenbaar zichtbaar maar gedempt zolang ze niet gereed zijn; hun pagina is bereikbaar met een knop om interesse door te geven (besluit 51).

Custom is geen vast product in dit menu.

### Diensten

Dropdown en dienstenoverzicht met:

- AI-scan;
- Advies en analyse;
- Installatie en inrichting;
- Optimalisatie;
- Veilig AI-gebruik;
- AITJE Custom — AI op maat;
- Ondersteuning en onderhoud;
- Voor IT-bedrijven en bureaus.

De partnerroute is zowel in de dropdown als op het dienstenoverzicht herkenbaar aanwezig en krijgt een eigen detailpagina op `/diensten/voor-it-bedrijven` (besluit 51). Partners is geen apart hoofdmenu-item.

Afgebakende onderdelen zoals de AI-datalocatiecheck, Guardrailcheck en AI-wegwijs horen bij de passende dienst. Een zelfstandige pagina voor ieder onderdeel is niet automatisch vereist.

### Cases

Een zelfstandig hoofdmenu-item met een overzicht en detailpagina's. Het helpt bezoekers toepassingen begrijpen voordat ze een product of dienst kiezen.

### Kenniscentrum

Vanaf het begin onderdeel van de structuur, met een overzicht en individuele kennisartikelen. Technische termen en namen zoals ChatGPT en Claude kunnen linken naar bestaande passende artikelen.

### Over AITJE

Dropdown met:

- Over AITJE;
- Visie;
- Algemene FAQ.

De over-pagina vertelt wie AITJE is, wie erachter zit en hoe de samenwerking werkt. De visiepagina geeft ruimte aan het grotere verhaal over toegang tot AI, eigen regie en technologische ontwikkeling.

De over-pagina bevat een korte visiesamenvatting met een link naar de aparte visiepagina.

## Inhoudelijke paginaboom

Dit is een inhoudelijke hiërarchie, geen definitieve lijst van URL-slugs.

```
Home
├── Producten — overzicht
│   ├── AITJE Assistent
│   ├── AITJE Coder
│   └── Geplande producten — zichtbaar, voorlopig disabled
├── Diensten — overzicht
│   ├── AI-scan
│   ├── Advies en analyse
│   ├── Installatie en inrichting
│   ├── Optimalisatie
│   ├── Veilig AI-gebruik
│   ├── AITJE Custom — AI op maat
│   ├── Ondersteuning en onderhoud — Core, Plus en Max
│   └── Voor IT-bedrijven en bureaus
├── Cases — overzicht
│   └── Case — detail
├── Kenniscentrum — overzicht
│   └── Kennisartikel — detail
├── Over AITJE
│   ├── Visie
│   └── Algemene FAQ
└── Contact
```

Privacy en voorwaarden blijven via de footer vindbaar. De bestaande documenten en bestemmingen worden bij de bouw gecontroleerd; dit document stelt geen juridische inhoud vast.

## Cases: overzicht, details en previews

Cases krijgen een eigen overzicht en afzonderlijke detailpagina's onder `/cases` (besluit 51). `/use-cases` vervalt en wordt doorgestuurd.

Homepage, product- en dienstpagina's tonen previews met een knop naar de bijbehorende detailpagina. Op product- en dienstpagina's vervangen previews het aparte blok "Voorbeeldsituatie". Gebruik dezelfde case-inhoud als bron, zodat titel, label en samenvatting op verschillende plekken overeenkomen.

Zichtbare labels:

- **Praktijkcase:** bevestigd gerealiseerd werk bij een klant;
- **Demo:** demonstratie van een eigen product of kunnen;
- **Voorbeeldsituatie:** fictieve maar toepasbare situatie.

Een detailpagina of preview maakt een dummycase niet tot een gerealiseerde opdracht. Volg [proof/cases.md](../proof/cases.md) en [pages/cases.md](cases.md).

## FAQ op twee niveaus

De algemene FAQ is het complete overzicht: vragen over AITJE en de samenwerking, plus de hoofdvragen per product en dienst met een link naar die pagina. Deze staat onder Over AITJE en in de footer.

Producten en diensten tonen op hun eigen pagina alleen de specifieke vragen voor dat aanbod. Die behandelen bijvoorbeeld gebruik, installatie, werking en afspraken voor dat aanbod.

Het kenniscentrum blijft de plek voor verdere uitleg van begrippen en onderwerpen. Niet alle inhoud hoeft naar de algemene FAQ te worden gekopieerd.

## Contact, demo en aankoop

De hoofdactie leidt naar een contactpagina met een kort formulier, e-mailadres en telefoonnummer.

Productpagina's kennen daarnaast:

- **Laat AITJE het regelen:** productgerichte contactaanvraag;
- **Vraag een demo aan:** persoonlijke online demonstratie en gesprek;
- **Bestel voor zelfinstallatie:** directe aankoop van een beschikbaar product.

De exacte formulier-, betaal- en eventuele bevestigingsroutes volgen bij de implementatie. Een aparte publieke demopagina of automatische boekingsagenda is niet bevestigd.

## Nederlands en Engels

### Structuur

Bereid de pagina's en inhoudsrelaties vanaf het begin in NL en EN voor. Behoud als uitgangspunt Nederlands op het hoofdniveau en Engels onder `/en/`.

Koppel taalvarianten aan dezelfde inhoudelijke pagina. Een taalwissel hoort naar de overeenkomstige pagina te leiden wanneer die beschikbaar is.

### Vertaalvolgorde

1. Werk de Nederlandse teksten uit.
2. Laat de oprichter de Nederlandse inhoud controleren en bevestigen.
3. Voer daarna één gebundelde DeepL-vertaalrun naar Engels uit.
4. Controleer de vertaling op productnamen, vaste termen, opmaak, links en betekenis.
5. Publiceer taalvarianten volgens dezelfde bevestigde structuur.

Gebruik bij die latere vertaalrun `DEEPL_KEY` uit de omgeving. Lees of toon de sleutel niet voor documentatiewerk en neem die nooit op in bestanden of logs.

Eén run betekent één gecoördineerde vertaalronde van de goedgekeurde content; technische batches kunnen nodig zijn. Er is nu geen vertaalrun uitgevoerd.

## Bestaande routes en migratie

De huidige code bevat onder andere:

- `/producten` en productdetails;
- `/diensten`;
- `/use-cases` én `/cases`, beide met detailroutes (worden samen `/cases`);
- `/kenniscentrum`;
- `/over-aitje`, `/visie`, `/faq` en `/contact`;
- meerdere Engelse routevarianten onder `/en/`.

Leg bij de bouw één canonieke bestemming per pagina en taal vast. Controleer bestaande links en richt redirects in voor vervangen routes. Een menuplaatsing onder Diensten bepaalt niet automatisch de URL van de partnerpagina.

De sitemap mag geen dubbele, disabled of niet-publiceerbare bestemmingen als actieve pagina presenteren. De definitieve URL-mapping en publicatiestatus worden bij de bouw gecontroleerd.

## Footer

Maak in elk geval producten, diensten, IT-bedrijven en bureaus, cases, kenniscentrum, Over AITJE, visie, algemene FAQ, contact en de geldende privacy/voorwaarden vindbaar.

De exacte kolomindeling volgt het ontwerp; niet ieder item hoeft in een eigen kolom.

## Paginabeschrijvingen

Alle paginadocumenten zijn met de oprichter doorgenomen en bijgewerkt (besluit 51). Resterende open punten staan per document.

- [home.md](home.md) — homepage;
- [products.md](products.md) — productoverzicht;
- [product.md](product.md) — productpagina, beschikbaar en gepland;
- [services.md](services.md) — dienstenoverzicht;
- [service.md](service.md) — dienstpagina;
- [partners.md](partners.md) — Voor IT-bedrijven en bureaus;
- [cases.md](cases.md) — cases-overzicht en previews;
- [case.md](case.md) — casepagina;
- [knowledge.md](knowledge.md) — kenniscentrum en artikeltemplate;
- [about.md](about.md) — Over AITJE;
- [vision.md](vision.md) — visie;
- [faq.md](faq.md) — algemene FAQ;
- [contact.md](contact.md) — contact.

## Bronnen

- Bevestigde navigatie-, cases-, taal- en FAQ-keuzes van de oprichter.
- [Aanbod](../offer/overview.md), [CTA's](../copy/calls-to-action.md) en [Cases](../proof/cases.md).
- Bestaande Nuxt-paginaroutes als migratiereferentie.
- [Besluitenlog](../context/decisions.md), besluiten 49, 50 en 51.
