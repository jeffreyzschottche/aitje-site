// General FAQ (redesign/content/faq.md, pages/faq.md, besluiten 50-51).
// Product and service questions marked `general` are pulled in from their own source.
import type { Faq } from "./types";
import { availableProducts } from "./products";
import { services } from "./services";
import { contact } from "./site";

export type FaqGroup = {
  id: string;
  title: string;
  items: Faq[];
  link?: { label: string; to: string };
};

const generalGroups: FaqGroup[] = [
  {
    id: "over-aitje",
    title: "Over AITJE",
    items: [
      {
        q: "Wat doet AITJE?",
        a: "AITJE is een Nederlandse AI-specialist met eigen producten. AITJE onderzoekt waar AI je werk makkelijker, beter of goedkoper maakt, bouwt en installeert de oplossing en blijft daarna bereikbaar. Vaak draait die oplossing op je eigen hardware of server.",
      },
      {
        q: "Voor wie is AITJE bedoeld?",
        a: "Voor bedrijven, makers en professionals, en IT-bedrijven en bureaus. Denk aan het MKB, gemeenten, scholen, zelfstandigen en ontwikkelaars. De sector maakt minder uit dan de vraag: is er een concreet probleem waar AI iets kan oplossen?",
      },
      {
        q: "Is AITJE tegen cloud of externe AI-diensten?",
        a: "Nee. De taak bepaalt de oplossing. AITJE werkt graag lokaal of op een eigen server, maar gebruikt een extern model wanneer dat aantoonbaar beter past. Afhankelijkheid mag een bewuste keuze zijn, geen onbedoeld gevolg.",
      },
      {
        q: "Met welke vragen kun je niet bij AITJE terecht?",
        a: "AITJE richt zich niet op medische systemen, kritieke infrastructuur of industriële machinebouw. Een organisatie in zo'n sector kan wel terecht voor een afgebakende toepassing, zoals administratie of interne kennis.",
      },
      {
        q: "Wie zitten er achter AITJE?",
        a: "Twee oprichters en een vast netwerk van professionals die per opdracht worden ingeschakeld. Lees meer [over AITJE](/over-aitje).",
      },
    ],
  },
  {
    id: "aanbod",
    title: "Aanbod",
    items: [
      {
        q: "Wat is het verschil tussen producten, diensten en AITJE Custom?",
        a: "Producten zijn kant-en-klare AI-omgevingen waarin AITJE het uitzoekwerk al heeft gedaan, zoals AITJE Assistent en AITJE Coder. Diensten zijn onderzoek, advies, installatie, optimalisatie en ondersteuning. AITJE Custom is AI op maat: een oplossing die voor jouw vraag wordt gebouwd.",
      },
      {
        q: "Moet ik nieuwe hardware kopen?",
        a: "Niet altijd. Als je bestaande computer of server geschikt is, kan AITJE daarop installeren. Is extra rekenkracht nodig, dan adviseert AITJE wat past. Je kunt het zelf kopen of via AITJE laten leveren. Hardware die je betaalt, is van jou.",
      },
      {
        q: "Kan ik een product zelf installeren?",
        a: "Ja. Beschikbare producten kun je bestellen voor zelfinstallatie op geschikte eigen hardware.",
      },
      {
        q: "Welke producten zijn nu beschikbaar?",
        a: "AITJE Assistent en AITJE Coder. Manager, Notulist, Prepper, 3D, Beeld, Video en Muziek zijn in ontwikkeling. Op hun pagina kun je je interesse laten weten.",
      },
      {
        q: "Wanneer komen de andere producten beschikbaar?",
        a: "Er is nog geen vaste datum. Laat je interesse weten op de productpagina, dan hoor je het als eerste. Iets vergelijkbaars nu al nodig? Dan kan het misschien via [AITJE Custom](/diensten/aitje-custom).",
      },
    ],
  },
];

const trailingGroups: FaqGroup[] = [
  {
    id: "samenwerken",
    title: "Samenwerken",
    items: [
      {
        q: "Waar begint een samenwerking meestal?",
        a: "Met een gesprek of demo, en vaak daarna een [AI-scan](/diensten/ai-scan). Heb je al een concrete vraag, dan kan AITJE ook direct een voorstel maken.",
      },
      {
        q: "Wat houdt een demo in?",
        a: "Een persoonlijke online demonstratie, bijvoorbeeld via Google Meet. AITJE laat zien wat een product kan en bespreekt met je wat past bij jouw situatie.",
      },
      {
        q: "Werkt AITJE samen met IT-bedrijven en bureaus?",
        a: "Ja. Jij houdt de klantrelatie, AITJE levert de AI-expertise. Hoe zichtbaar AITJE is, spreek je per opdracht af. Lees meer op [Voor IT-bedrijven en bureaus](/diensten/voor-it-bedrijven).",
      },
      {
        q: "Kan ik AITJE bellen?",
        a: contact.phoneConfirmed
          ? `Ja. Bel ${contact.phone} of mail naar ${contact.email}.`
          : `Laat je telefoonnummer achter via het [contactformulier](/contact), of mail naar ${contact.email}.`,
      },
    ],
  },
  {
    id: "data",
    title: "Data en eigen beheer",
    items: [
      {
        q: "Waar blijven mijn gegevens?",
        a: "Bij lokaal gebruik op je eigen hardware of server blijven documenten en vragen in je eigen omgeving. Gebruik je bewust websearch of een extern model, dan gaat de betreffende informatie naar die dienst. AITJE maakt vooraf duidelijk welke functie wat doet.",
      },
      {
        q: "Is lokale AI altijd goedkoper of veiliger?",
        a: "Niet automatisch. Lokaal betaal je geen tokenkosten, maar wel hardware, stroom en eventueel onderhoud. Of het veiliger is, hangt af van de inrichting. AITJE rekent met je door wat in jouw situatie past.",
      },
    ],
  },
  {
    id: "kosten",
    title: "Kosten",
    items: [
      {
        q: "Hoe zijn de prijzen opgebouwd?",
        a: "Uit drie onderdelen: het AI-product of de ontwikkeling, de hardware of server, en de installatie. Ondersteuning is optioneel en apart. Alle prijzen zijn exclusief btw.",
      },
      {
        q: "Wat betekent 'zonder externe tokenkosten'?",
        a: "Dat je bij lokaal gebruik niet per vraag of per token betaalt aan een externe AI-aanbieder. Je gebruikt het zo vaak als je hardware aankan. Externe modellen kunnen wel gebruikskosten hebben.",
      },
    ],
  },
];

const productGroup: FaqGroup = {
  id: "producten",
  title: "Producten",
  items: availableProducts.flatMap((p) =>
    (p.faq ?? []).filter((f) => f.general),
  ),
  link: { label: "Bekijk alle producten", to: "/producten" },
};

const serviceGroup: FaqGroup = {
  id: "diensten",
  title: "Diensten",
  items: services.flatMap((s) => s.faq.filter((f) => f.general)),
  link: { label: "Bekijk alle diensten", to: "/diensten" },
};

export const faqGroups: FaqGroup[] = [
  ...generalGroups,
  productGroup,
  serviceGroup,
  ...trailingGroups,
];
