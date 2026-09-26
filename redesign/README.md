# AITJE Redesign Kennisbank

## Wat dit is

Dit is de kennisbank voor het redesign van de AITJE-website. Alle documenten in deze map vormen samen de basis voor de nieuwe website.

## Hoe te gebruiken

1. **Lees eerst de context/** — dit zijn de harde waarheden en besluiten
2. **Dan strategy/** — dit bepaalt de richting
3. **Dan offer/** — dit is het aanbod
4. **Copy, visuals en pages zijn uitwerking** — voor de daadwerkelijke bouw

Bij conflicten geldt de volgorde: decisions.md > truths.md > andere documenten.

## Structuur

```
redesign/
├── README.md                   ← dit bestand
├── context/                    ← wat waar is
│   ├── company.md              — wat AITJE is
│   ├── truths.md               — harde waarheden
│   ├── vision.md               — waarom AITJE bestaat
│   ├── terminology.md          — termen en schrijfstijl
│   └── decisions.md            — besluitenlog
├── strategy/                   ← hoe AITJE zich positioneert
│   ├── positioning.md          — de positie
│   ├── audiences.md            — doelgroepen
│   ├── differentiators.md      — onderscheidend vermogen
│   ├── customer-problems.md    — klantproblemen
│   └── partner-model.md        — samenwerking met partners
├── offer/                      ← wat AITJE aanbiedt
│   ├── overview.md             — totaaloverzicht
│   ├── products/               — productbeschrijvingen
│   ├── services/               — dienstbeschrijvingen
│   ├── subscriptions.md        — abonnementen
│   └── pricing.md              — prijsoverzicht
├── proof/                      ← bewijs en onderbouwing
│   ├── existing-work.md        — wat al gedaan is
│   ├── cases.md                — cases en voorbeelden
│   ├── capabilities.md         — wat AITJE kan
│   └── claims.md               — wat wel en niet claimen
├── copy/                       ← tekst en toon
│   ├── voice.md                — stem en toon
│   ├── messaging.md            — kernboodschappen
│   ├── vocabulary.md           — woordenlijst
│   ├── headlines.md            — koppen
│   └── calls-to-action.md      — CTA's
├── visuals/                    ← visuele richting
│   ├── vibe.md                 — sfeer
│   ├── principles.md           — principes
│   ├── colors.md               — kleuren
│   ├── typography.md           — typografie
│   ├── imagery.md              — beeldgebruik
│   └── components.md           — UI-componenten
├── pages/                      ← paginastructuren
│   ├── sitemap.md              — overzicht
│   ├── home.md                 — homepage
│   ├── products.md             — productoverzicht
│   ├── product.md              — productpagina template
│   ├── services.md             — dienstenoverzicht
│   ├── partners.md             — partnerpagina
│   ├── about.md                — over AITJE
│   └── contact.md              — contactpagina
└── sources/                    ← bronnen
    ├── company-document.md     — referentie naar PDF
    ├── current-site-audit.md   — audit huidige site
    └── open-questions.md       — openstaande vragen
```

## Status

- **context/** — compleet
- **strategy/** — compleet
- **offer/** — compleet (producten en diensten beschreven)
- **proof/** — ingevuld: nog geen klanten of geteste producten, alleen voorbeeldsituaties
- **copy/** — compleet
- **visuals/** — richting bepaald: zwart/geel/wit/grijs, modern 2026, Claude-inspiratie, 3D art
- **pages/** — structuren compleet, bouwen is volgende stap
- **sources/** — compleet

## Bevestigde keuzes (open vragen sessie)

- **Producten:** nog niet live getest, conceptueel uitgewerkt
- **Klanten:** nog geen externe klanten
- **Kleuren:** zwart, geel, wit, grijs
- **Stijl:** modern 2026, Claude-site inspiratie, neo-brutalism invloeden, 3D art, levend
- **Niet:** Swiss/editorial, saaie grids, corporate blauw
- **Contact:** telefoon + e-mail, geen fysiek adres
- **Prijzen:** plaatsen, worden later bijgewerkt
- **Hardware:** Mac, PC met GPU, beide, situatieafhankelijk
- **Geplande producten:** allemaal op de site

## Kernboodschap

> **Je partner in AI.**

AITJE is een Nederlands AI-productbedrijf en specialist. Eigen producten, advies op maat, en iemand die je kunt bellen.

## Belangrijkste besluiten

1. AITJE claimt de rol die nog niet bestaat (zoals systeembeheerder/webbureau)
2. Top 3 onderscheiders: eigen beheer + voordelen, bereikbaar persoon, eigen producten + expertise
3. Presentatievolgorde: probleem + oplossing samen, niet visie-eerst
4. Producten en diensten als aparte secties
5. Flexibele partnerzichtbaarheid met duidelijke afspraken

## Volgende stappen

1. Open vragen beantwoorden (zie sources/open-questions.md)
2. Visuele richting bepalen
3. Proof-documenten aanvullen met concrete cases
4. Pagina's bouwen in de Nuxt-codebase

## Bronnen

- Bedrijfsoverzicht AITJE, september 2026 (PDF)
- Redesigngesprekken met de oprichter
