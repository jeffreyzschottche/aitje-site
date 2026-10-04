import type { CaseStudy } from "./types";

// Project facts supplied by the founder on 2026-10-04. Client remains anonymous.
// GPU tariff is this project's agreed rate, not a publicly available hosting price.
// Public model benchmarks are separate from the measured catalogue run.
export const productEnrichmentCase: CaseStudy = {
  slug: "productteksten-zonder-tokenkosten",
  label: "Praktijkcase",
  title: "6.900 producten verrijkt en vertaald in 7 uur",
  context: "E-commerce / Opladers & elektronica",
  summary: "Voor een toonaangevende Nederlandse webshop in opladers bouwde AITJE een workflow die productteksten aanvult met technische laaddata, vertaalt voor vier markten en direct terugplaatst in het CMS. Zonder externe kosten per AI-token.",
  icon: "package",
  image: "/img/redesign/case-productteksten.webp",
  background: "/img/cases/bg-case-productteksten.webp",
  photoAlt: "Voorraad en producten in een magazijn",
  offer: [
    { name: "AITJE Custom", to: "/diensten/aitje-custom" },
    { name: "Token management & optimalisatie", to: "/diensten/token-management-en-optimalisatie" },
  ],
  recognize: [],
  sections: [],
  dummy: false,
  productEnrichment: {
    run: { products: 6900, hours: 7, hourlyUsd: 3.19, gpu: "NVIDIA A100", memory: "80 GB", precision: "16-bit · ongecomprimeerd" },
    challenge: {
      title: "Welke oplader past écht bij jouw telefoon?",
      paragraphs: [
        "Een oplader kiezen gaat om meer dan het aantal watt op de verpakking. Voltage, aansluitingen zoals USB-C en de combinatie met een specifiek toestel bepalen hoe snel je kunt laden. Dezelfde oplader kan voor de ene telefoon een goede keuze zijn en voor een andere minder geschikt.",
        "Bij deze webshop ontbrak die verdieping in de oorspronkelijke productteksten. De informatie was elders beschikbaar, maar moest worden opgehaald, gecombineerd en vertaald naar iets waar een klant tijdens het winkelen echt wat aan heeft. Voor 6.900 producten, en voor meerdere landen.",
      ],
      specifications: ["Vermogen", "Voltage", "USB-C & aansluitingen", "Toestelcompatibiliteit", "Laadbenchmarks"],
    },
    workflow: [
      { title: "Productdata", icon: "package", text: "Via de CMS-koppeling haalt de workflow de huidige producten, omschrijvingen en beschikbare specificaties op. Zo begint de analyse bij de catalogus die de webshop al gebruikt.", output: "Bestaande teksten en productgegevens" },
      { title: "Laaddata", icon: "library", text: "Gemma kan via toolcalls gerichte informatie laten ophalen uit laaddatabanken. Benchmarks per oplader en toestel vullen de bestaande productgegevens aan.", output: "Benchmarks voor de juiste oplader-toestelcombinaties" },
      { title: "Verrijken", icon: "cpu", text: "Gemma 4 31B analyseert de oorspronkelijke tekst en de opgehaalde gegevens. Code verwerkt de laaddata en berekeningen; het model maakt daar begrijpelijke productinformatie van.", output: "Technische kenmerken, keuzehulp en laadvergelijkingen" },
      { title: "Vertalen", icon: "globe", text: "Een Gemma-gebaseerde vertaalstap maakt de verrijkte informatie geschikt voor de markten Duitsland, België, Luxemburg en Frankrijk. Specificaties en productinformatie blijven onderdeel van de vertaalworkflow.", output: "Verrijkte teksten voor vier markten" },
      { title: "Publiceren", icon: "plug", text: "De workflow schrijft de nieuwe teksten en vertalingen via de CMS-koppeling terug naar de bijbehorende producten. Tijdens de eerste verwerking liep deze publicatie al mee: de inhoud hoefde niet achteraf handmatig te worden overgezet.", output: "Nieuwe inhoud direct bij de producten in de webshop" },
    ],
    connections: [
      { title: "Het CMS", icon: "package", text: "Producten en bestaande informatie ophalen, en verrijkte teksten en vertalingen terugplaatsen." },
      { title: "De GPU-VPS", icon: "server", text: "Gemma laten draaien op een afzonderlijke rekenomgeving, verbonden met de workflow en het wekelijkse opstartproces." },
      { title: "Laaddatabanken", icon: "library", text: "Externe benchmarkgegevens ophalen over opladers, telefoons en hun onderlinge laadprestaties." },
    ],
    toolCalling: [
      "Een toolcall is een gerichte opdracht van het model aan een functie in de software. Gemma kan bijvoorbeeld vragen om laadbenchmarks voor een specifieke oplader. De software voert die zoekopdracht uit en geeft de gevonden gegevens terug aan het model.",
      "Zo krijgt AI toegang tot actuele productinformatie buiten zijn eigen modelkennis. Het hoeft laadprestaties niet uit een bestaande omschrijving te raden. De koppelingen, gegevensverwerking, berekeningen en publicatie worden door de software afgehandeld; Gemma analyseert de inhoud en schrijft de uitleg.",
    ],
    outcomes: [
      { title: "Completere productpagina’s", icon: "file-search", text: "Bestaande omschrijvingen zijn aangevuld met eigenschappen en laadinformatie die eerder niet in de teksten stonden." },
      { title: "Een betere keuzehulp", icon: "phone", text: "Benchmarkgegevens voeden filters en inzicht in laadprestaties. Klanten zien tien toestellen die snel laden met een oplader, hoe snel dat gaat en welke modellen minder snel laden." },
      { title: "Direct in de webshop", icon: "globe", text: "Verrijkte teksten en vertalingen zijn tijdens de verwerking rechtstreeks via de CMS-koppeling bij de producten geplaatst." },
    ],
    markets: [{ code: "DE", name: "Duitsland" }, { code: "BE", name: "België" }, { code: "LU", name: "Luxemburg" }, { code: "FR", name: "Frankrijk" }],
    translation: "Naast de analyse is een Gemma-gebaseerde vertaalworkflow ingezet, met Gemma Translator als onderdeel van de gekozen aanpak. De technische informatie wordt zo bruikbaar voor klanten in vier markten, zonder per vertaling een externe model-API te betalen.",
    modelChoice: [
      "Voor deze opdracht koos AITJE Gemma 4 31B. Productinformatie combineren, gerichte tools gebruiken en duidelijke teksten maken waren belangrijker dan alleen de hoogste generatiesnelheid. De gekozen A100 bood ruimte om het model in 16-bit zonder compressie te draaien.",
      "Het alternatief, Gemma 4 26B A4B, is een Mixture-of-Experts-model. Het bevat ongeveer 26 miljard parameters, maar activeert per token ongeveer 4 miljard. Dat maakt het een interessante keuze wanneer snelheid en rekenverbruik zwaarder wegen. De 31B-variant is een dense model en scoort hoger op de onderstaande gepubliceerde kwaliteitstests. Dat ondersteunt de afweging voor deze inhoudelijke verrijkingstaak.",
    ],
    modelBenchmarks: [
      { label: "τ2-bench", task: "Tools gebruiken · gemiddelde van drie domeinen", dense: 76.9, moe: 68.2 },
      { label: "MMMLU", task: "Meertalige kennisvragen", dense: 88.4, moe: 86.3 },
      { label: "GPQA Diamond", task: "Complexe kennisvragen", dense: 84.3, moe: 82.3 },
      { label: "MRCR v2 · 128K", task: "Informatie terugvinden in lange context", dense: 66.4, moe: 44.1 },
    ],
    modelSource: { name: "Google · Gemma 4 modelkaart", url: "https://ai.google.dev/gemma/docs/core/model_card_4" },
    modelNotes: "Dit zijn Googles gepubliceerde resultaten voor instruction-tuned modellen, geen eigen vergelijking op de webshopdata. Meertalige kennisvragen meten geen vertaalkwaliteit. De praktijkrun meet de volledige workflow; er is geen afzonderlijke tokens-per-seconde-meting beschikbaar.",
    tokenCosts: {
      reportedMillions: [68, 75],
      checkedOn: "4 oktober 2026",
      deepl: { monthlyEur: 29.75, includedMillions: 1, extraMillionEur: 22, source: "https://www.deepl.com/nl/pro#api" },
      turns: [
        { title: "De informatie ophalen", input: 2050, output: 80, inputDetail: "System prompt (1.200) + productdata (850)", outputDetail: "JSON-toolcall voor de databank" },
        { title: "Verrijken & vertalen", input: 2730, output: 1000, inputDetail: "Vorige context (2.130) + zoekresultaat (600)", outputDetail: "Verrijkte tekst en vertaling via CMS-toolcall" },
        { title: "Afronden", input: 3780, output: 20, inputDetail: "Vorige context (3.730) + CMS-bevestiging (50)", outputDetail: "Eindbevestiging: product verwerkt" },
      ],
      models: [
        { name: "GPT-6 Sol", inputUsd: 2, outputUsd: 10, source: "https://developers.openai.com/api/docs/models/gpt-6-sol" },
        { name: "GPT-6.1 Sol", inputUsd: 2, outputUsd: 10, source: "https://developers.openai.com/api/docs/models/gpt-6.1-sol" },
        { name: "GPT-5.6 Terra", inputUsd: 2, outputUsd: 12, source: "https://developers.openai.com/api/docs/models/gpt-5.6-terra" },
        { name: "Claude Opus 5.5", inputUsd: 4, outputUsd: 20, source: "https://platform.claude.com/docs/en/about-claude/pricing" },
        { name: "Claude Fable 5", inputUsd: 10, outputUsd: 50, source: "https://platform.claude.com/docs/en/about-claude/pricing" },
      ],
    },
    frontierComparison: {
      gemma: "Gemma 4 26B A4B · Reasoning",
      frontier: "GPT-6 Luna · Low",
      rows: [
        { label: "Humanity’s Last Exam", task: "Moeilijke vragen uit uiteenlopende vakgebieden", gemma: 19, frontier: 20 },
        { label: "SciCode", task: "Programmeren voor wetenschappelijke taken", gemma: 40, frontier: 47 },
        { label: "AA-LCR v1.1", task: "Redeneren met lange context", gemma: 66, frontier: 74 },
      ],
      source: "https://artificialanalysis.ai/models/releases/comparisons/gpt-6-luna-vs-gemma-4-26b-a4b",
      note: "Selectie van de drie scores die in de aangeleverde Artificial Analysis-vergelijking dicht bij elkaar liggen, afgerond zoals in die vergelijking. Andere tests tonen grotere verschillen. Dit vergelijkt de 26B A4B-variant met GPT-6 Luna op Low; deze webshopworkflow draaide op Gemma 4 31B. Het is geen vergelijking van de productteksten of vertaalkwaliteit.",
    },
    sync: [
      { title: "Wekelijks starten", text: "De automatische synchronisatie start de GPU-omgeving voor de nieuwe verwerkingsronde." },
      { title: "Ontbrekende producten ophalen", text: "Nieuwe producten die nog niet in het analysesysteem staan, worden via de CMS-koppeling toegevoegd." },
      { title: "Verrijken en terugplaatsen", text: "De workflow haalt benchmarks op, maakt de nieuwe teksten en vertalingen en plaatst deze terug in de webshop." },
    ],
    hosting: "De webshop had al een hostingpartner vanwege het grote bezoekersvolume. AITJE stemde met die partij een voordelige GPU-VPS af voor de analyse. Zo bleef de bestaande hostingrelatie behouden en kreeg de AI-workflow een eigen rekenomgeving.",
    conclusion: "AITJE bouwde de verbinding tussen de webshop, technische databronnen en een open model. Het resultaat is een terugkerend proces voor productinformatie, keuzehulp en vertalingen, met inzicht in de rekenkosten en zonder een externe AI-rekening per token.",
  },
};
