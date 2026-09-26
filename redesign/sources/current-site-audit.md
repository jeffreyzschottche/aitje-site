# Audit huidige website

## Status

Dit document inventariseert de huidige website als referentie voor het redesign.

## Belangrijke context

> De huidige website presenteert AITJE te veel als leverancier van een AI-pc en te uitsluitend als Edge-AI-bedrijf.

Dit is een van de redenen voor het redesign.

## Nog te inventariseren

- [ ] Welke pagina's bestaan er?
- [ ] Wat staat er op de homepage?
- [ ] Hoe worden producten gepresenteerd?
- [ ] Wat klopt en kan blijven?
- [ ] Wat moet veranderen?
- [ ] Zijn er technische componenten om te hergebruiken?

## Bestaande codewijzigingen

Eerder zijn alvast toegevoegd:
- Productgegevens in `aitje.nl/app/data/productCatalogV2.ts`
- Nederlandse en Engelse dynamische routes voor de negen producten
- Wijzigingen in `/producten/` en `/en/products/`

De build slaagde, maar dit was geen afgerond inhoudelijk redesign.

## Bekende issues

- Coder staat in sommige code nog als "in ontwikkeling", terwijl het verkoopbaar is
- Bestaande producttemplates bevatten oude teksten
- Er zijn uncommitted wijzigingen in de werkboom

## Instructie

> Behoud de bestaande wijzigingen en inspecteer de werkboom voordat je code verandert.

## Volgende stap

Volledige audit van de huidige site uitvoeren voordat de nieuwe pagina's worden gebouwd.

## Bronnen

- Huidige site in `aitje.nl/`
- Git status en uncommitted changes
