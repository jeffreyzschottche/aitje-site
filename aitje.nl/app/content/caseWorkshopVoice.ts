import type { CaseStudy } from "./types";

export const workshopVoiceCase: CaseStudy = {
  slug: "spraak-naar-werkorder",
  label: "Praktijkcase",
  title: "Hey Bob. Een extra paar handen in de werkplaats.",
  context: "Automotive / Spraakgestuurde werkplaats",
  summary: "Voor een lokale garage met dagelijks meer dan honderd klanten bouwde AITJE een spraakgestuurde applicatie. Zes Android-tablets verbinden monteurs met technische informatie, werkbonnen en hun administratie. Gewoon door het te vragen.",
  image: "/img/redesign/case-werkorder.webp",
  background: "/img/cases/bg-case-werkorder.webp",
  photoAlt: "Een automonteur aan het werk onder de motorkap",
  icon: "mic",
  offer: [
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
    { name: "Installatie en inrichting", to: "/diensten/installatie-en-inrichting" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  workshopVoice: {
    intro: "Onder een auto staan, een inspectie uitvoeren en tussendoor naar een computer lopen: in een drukke werkplaats onderbreekt administratie voortdurend het werk. AITJE maakte de bestaande garageprocessen bereikbaar via spraak. Bob haalt informatie op en bereidt acties voor, terwijl de monteur doorwerkt.",
    hardwareImage: "/images/assistant/device-with-logo.png",
    costs: {
      hardwareEur: 2000,
      whisperMinuteUsd: 0.006,
      models: [
        { name: "GPT-6 Luna", inputUsd: 0.10, outputUsd: 0.50 },
        { name: "GPT-6.1 Sol", inputUsd: 2, outputUsd: 10 },
      ],
    },
    actions: [
      { title: "Technische informatie", icon: "library", question: "Hey Bob, Dirk hier. Wat is het aanhaalmoment voor de cilinderkop van de Golf op brug 2?", description: "Bob gebruikt de actieve werkbon om het juiste voertuig te vinden. Via technische databronnen haalt de app aanhaalmomenten, vloeistofhoeveelheden of de locatie van een onderdeel op.", connection: "Haynes / Autodata + actieve werkbon", reply: "Ik zoek het juiste voertuig bij brug 2 en haal de specificatie op uit de technische database.", confirmation: false },
      { title: "Werkbonnen bijwerken", icon: "pen", question: "Zet op de werkbon van de Ford Focus dat de voorbanden nog 2 millimeter profiel hebben.", description: "Bevindingen worden direct een voorstel op de juiste werkbon. Ook adviespunten en meerwerk, zoals het vervangen van de remschijven, kunnen tijdens de inspectie worden vastgelegd.", connection: "Werkbon in het garage-managementsysteem", reply: "Voorstel voor de werkbon: voorbanden 2 mm profiel. Advies: binnenkort vervangen. Zal ik dit vastleggen?", confirmation: true },
      { title: "Tijd registreren", icon: "gauge", question: "Klok mij uit op de APK van brug 1 en start de uren voor de distributieriem op brug 3.", description: "De monteur wisselt met een gesproken opdracht van klus. Bob bereidt het stoppen en starten van de juiste timers voor. Wachten op een onderdeel? Dan kan de tijd op pauze.", connection: "Urenregistratie + medewerker + werkbon", reply: "Ik zet het stoppen op brug 1 en starten op brug 3 voor Dirk klaar. Klopt deze wissel?", confirmation: true },
      { title: "Onderdelen & voorraad", icon: "package", question: "Zet een set ruitenwissers voorzijde voor een Tesla Model 3 op de bestellijst voor de middaglevering.", description: "De app controleert voorraad in het ERP of zet onderdelen klaar op de bestellijst bij de grossier. Zo hoeft de monteur voor een voorraadvraag niet naar het magazijn of de balie te lopen.", connection: "ERP / voorraad + onderdelengrossier", reply: "Voorstel: ruitenwissers voorzijde, Tesla Model 3, middaglevering. Zal ik ze aan de bestellijst toevoegen?", confirmation: true },
      { title: "De balie informeren", icon: "message", question: "Stuur naar de balie dat de auto van meneer De Vries klaar is en ze hem kunnen bellen.", description: "Bob bereidt een statuswijziging en bericht voor de receptie voor. Ook een verzoek aan de chef werkplaats, bijvoorbeeld om bij brug 4 naar een lekkage te kijken, kan via de tablet.", connection: "Werkbonstatus + receptie-interface", reply: "Ik zet de werkbon op Gereed en stuur de balie een bericht om de klant te bellen. Akkoord?", confirmation: true },
      { title: "Inspecties afvinken", icon: "check", question: "Vink ruitensproeiervloeistof, verlichting en bandenspanning af als akkoord voor de huidige beurt.", description: "Gesproken bevindingen vullen de bijbehorende velden in een digitaal inspectieformulier. De monteur controleert het voorstel voordat de administratie wordt bijgewerkt.", connection: "Digitaal inspectieformulier / APK-checklist", reply: "Drie punten op Akkoord: ruitensproeiervloeistof, verlichting en bandenspanning. Zal ik dit opslaan?", confirmation: true },
    ],
  },
};
