# Contactpagina

## Status

Dit document beschrijft de contactpagina. Contactroutes, e-mailadres, formulieronderwerpen, bevestigingsmail en het ontbreken van een reactietermijn zijn bevestigd (besluiten 46 en 51). Het telefoonnummer staat als dummy in [content/team.md](../content/team.md).

## Doel van de pagina

De contactpagina moet:
1. Het makkelijk maken om contact op te nemen
2. Bellen, mailen en een formulier bieden
3. Productaanvragen, demo's en interesse zonder extra uitleg laten landen
4. Persoonlijk en uitnodigend zijn

## Structuur

### 1. Kop

**Titel:**
> Contact

**Ondertitel (voorstel):**
> Bespreek je AI-vraag. AITJE denkt mee.

### 2. Contactmogelijkheden

**Bellen**
> [Telefoonnummer, dummy in [content/team.md](../content/team.md)]

**E-mail**
> contact@aitje.com

**Formulier**
> Of vul het formulier in.

Geen fysiek adres.

### 3. Contactformulier

Velden:
- Naam (verplicht)
- E-mail (verplicht)
- Telefoon (optioneel)
- Bedrijf (optioneel)
- Waar gaat je vraag over? (dropdown)
  - Ik wil mijn AI-vraag bespreken
  - Ik wil een product laten regelen
  - Ik wil een demo aanvragen
  - Ik wil een AI-scan
  - Ik wil bestaande AI verbeteren
  - Ik wil AI op maat
  - Ik ben een IT-bedrijf of bureau en wil samenwerken
  - Anders
- Product (verschijnt bij product, demo of interesse)
- Bericht (verplicht)

**Vooraf ingevuld vanuit knoppen:**

| Knop | Onderwerp | Product |
| --- | --- | --- |
| Laat AITJE het regelen | Product laten regelen | Het product van de pagina |
| Vraag een demo aan | Demo aanvragen | Het product van de pagina |
| Laat je interesse weten (gepland product) | Anders, met "Interesse in [product]" | Het product van de pagina |
| Vraag een AI-scan aan | AI-scan | — |
| Bespreek je AI-idee | AI op maat | — |
| Bespreek een samenwerking | IT-bedrijf of bureau | — |

**Verzendknop:**
> Verstuur je vraag

**Melding na verzenden:**
> Bedankt! AITJE neemt contact met je op. Bij spoed kun je ook bellen.

Geen reactietermijn noemen.

### 4. Voor IT-bedrijven en bureaus

> Klantvraag over AI? Bekijk hoe AITJE met IT-bedrijven en bureaus samenwerkt.

Link naar `/diensten/voor-it-bedrijven`.

## Formuliergedrag

### Validatie
- Duidelijke foutmeldingen bij ontbrekende velden
- E-mailvalidatie
- Spambescherming zonder zichtbare captcha waar mogelijk (bijvoorbeeld een honeypot)

### Bevestigingsmail
- Korte bevestiging naar de afzender via Resend, vanaf contact@aitje.com
- Met een kopie van de vraag en "AITJE neemt contact met je op"
- Geen reactietermijn

### Verwerking
- Aanvraag naar contact@aitje.com via de bestaande Resend-koppeling
- Onderwerp en product zichtbaar in de onderwerpregel van de interne mail

## Toon

Uitnodigend, niet formeel.

Goed:
> Benieuwd wat AITJE voor je kan betekenen? Stel je vraag.

Niet:
> Vul onderstaand formulier in om uw aanvraag te registreren.

## Bronnen

- [../copy/voice.md](../copy/voice.md) — voice en toon.
- [../copy/calls-to-action.md](../copy/calls-to-action.md) — knoppen.
- [../context/decisions.md](../context/decisions.md) — besluiten 46 en 51.
