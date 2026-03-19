<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          FAQ
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Veelgestelde vragen
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Antwoorden op veelgestelde vragen over wat AITJE doet en aanbied.
        </p>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_0.35fr]"
      >
        <div class="space-y-6">
          <article
            v-for="group in faqGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="group.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ group.badge }}
                </p>
                <h2 class="text-2xl font-semibold text-gray-900">
                  {{ group.title }}
                </h2>
              </div>
            </div>
            <div class="mt-6 space-y-4">
              <details
                v-for="item in group.items"
                :key="item.question"
                class="rounded-2xl bg-[#fafafa] p-4"
              >
                <summary
                  class="cursor-pointer text-base font-semibold text-gray-900"
                >
                  {{ item.question }}
                </summary>
                <p class="mt-3 text-sm text-gray-600">{{ item.answer }}</p>
                <NuxtLink
                  v-if="item.linkTo"
                  :to="item.linkTo"
                  class="mt-3 inline-flex text-sm font-semibold text-[#d4a700] underline decoration-[#d4a700]/40 underline-offset-4 transition hover:text-black hover:decoration-black"
                >
                  {{ item.linkLabel || "Lees meer" }}
                </NuxtLink>
              </details>
            </div>
          </article>
        </div>
        <aside
          class="h-max rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start"
        >
          <h3 class="text-2xl font-semibold text-gray-900">
            Staat je vraag er niet tussen?
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Stuur ons gerust een bericht of neem contact op via de onderstaande
            platformen.
          </p>
          <div class="mt-6 flex items-center gap-4">
            <a
              href="/contact"
              aria-label="AITJE op LinkedIn"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img
                :src="linkedinIcon"
                alt=""
                aria-hidden="true"
                class="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://wa.me/31201234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp met AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img
                :src="whatsappIcon"
                alt=""
                aria-hidden="true"
                class="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="mailto:info@aitje.nl"
              aria-label="Mail AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img
                :src="gmailIcon"
                alt=""
                aria-hidden="true"
                class="h-5 w-5 object-contain"
              />
            </a>
          </div>
          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Neem contact op
          </NuxtLink>
          <div class="mt-6 rounded-3xl bg-[#facc15] p-4 text-[#212121]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em]">
              Kenniscentrum
            </p>
            <p class="mt-2 text-sm">
              In het kenniscentrum schrijven we over termen en onderwerpen uit
              de wereld van AI. Misschien staat het antwoord op jouw vraag daar
              al tussen.
            </p>
            <NuxtLink
              to="/kenniscentrum"
              class="mt-4 inline-flex text-sm font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
            >
              Naar het kenniscentrum
            </NuxtLink>
          </div>
        </aside>
      </section>

      <section
        class="mx-auto mt-16 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <h2 class="text-3xl font-black">Snelle feiten</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article
            v-for="fact in facts"
            :key="fact.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              {{ fact.badge }}
            </p>
            <h3 class="mt-2 text-xl font-semibold text-white">
              {{ fact.title }}
            </h3>
            <p class="mt-3 text-sm text-gray-200">{{ fact.description }}</p>
          </article>
        </div>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenCheck,
  Leaf,
  Lock,
  PlugZap,
  Shield,
  Sparkles,
} from "lucide-vue-next";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import whatsappIcon from "@/assets/images/social/whatsapp.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const faqGroups = [
  {
    title: "Producten",
    badge: "Hardware",
    icon: Sparkles,
    items: [
      {
        question: "Wat is AITJE Assistent precies?",
        answer:
          "AITJE Assistent is een mini computer die geoptimaliseerd is met ons eigen OS. Je krijgt een lokale LLM, een kennisbank om je documenten in de LLM te gebruiken, offline maps en een AI powered kennis systeem dat ook zonder internet bereikbaar blijft.",
      },
      {
        question: "Wat is AITJE Notulist?",
        answer:
          "AITJE Notulist is zowel als hardware als software te bestellen. Het neemt gesprekken op en laat je instellen hoe je samenvattingen en output wilt ontvangen.",
      },
      {
        question: "Doet AITJE ook aan custom build hardware?",
        answer:
          "Ja. En als we je niet volledig kunnen helpen binnen jouw specifieke expertise, hebben we een stabiel netwerk van specialisten waarmee we het plan kunnen afronden.",
      },
      {
        question: "Biedt AITJE nog meer hardware aan?",
        answer:
          "Op dit moment nog niet. Houd onze roadmappagina in de gaten voor nieuwe hardwareontwikkelingen.",
        linkTo: "/roadmap",
        linkLabel: "Bekijk roadmap",
      },
    ],
  },
  {
    title: "Techniek",
    badge: "Technische infrastructuur",
    icon: PlugZap,
    items: [
      {
        question: "Welke backend-talen gebruiken jullie voornamelijk?",
        answer:
          "Voor backend werken we vooral met Python, .NET, PHP, Laravel en Node.js.",
      },
      {
        question: "Welke frameworks en tools gebruiken jullie?",
        answer:
          "Afhankelijk van de oplossing gebruiken we voor frontend en interfaces onder andere Nuxt 3, en voor backend en services bijvoorbeeld FastAPI, Laravel, Blazor, PySide en Qdrant.",
      },
      {
        question: "Kunnen jullie koppelen met bestaande systemen?",
        answer:
          "Ja. We kunnen koppelen met veelgebruikte tools en CMS-omgevingen, zolang de integratie technisch en organisatorisch verantwoord is.",
      },
      {
        question: "Is alles lokaal of ook hybride mogelijk?",
        answer:
          "Beide. We ontwerpen lokaal waar het kan en hybride waar het nodig is, met behoud van grip op data, kosten en continuiteit.",
      },
      {
        question: "Hoe runnen jullie de LLM?",
        answer:
          "In de meeste gevallen gebruiken we Ollama. Als het nodig is, kunnen we ook andere inference engines inzetten, zoals vLLM.",
      },
      {
        question: "Welke modellen gebruiken jullie?",
        answer:
          "We hebben geen vaste voorkeur: modellen kunnen worden aangepast op vraag en geüpdatet wanneer dat waarde toevoegt. We houden je daar actief van op de hoogte. Voor algemene use cases werken Gemma-modellen vaak sterk.",
      },
      {
        question: "Waar draaien jullie servers?",
        answer:
          "Servers staan in Nederland of Duitsland, nooit buiten Europa. Op aanvraag kunnen we ook andere omgevingen inrichten als je een cloudoplossing wilt.",
      },
    ],
  },
  {
    title: "Privacy",
    badge: "Datacontrole",
    icon: Lock,
    items: [
      {
        question: "Waar blijft mijn data?",
        answer:
          "Data blijft in Nederland of Europa. In veel gevallen kunnen we zelfs een volledig lokale oplossing bouwen binnen je eigen omgeving.",
      },
      {
        question:
          "Hoe embedden jullie data in de kennisbank voor AITJE Assistent?",
        answer:
          "We verwerken en embedden data op de server en synchroniseren die naar een priv\u00e9 versiebeheeraccount voor jouw organisatie. Vanaf daar kun je op de Assistent syncen met de live omgeving. Als verkeerde data is toegevoegd, kunnen we via versiebeheer ook terugzetten en back-ups maken.",
      },
      {
        question: "Kan AITJE Assistent lokaal doorwerken zonder internet?",
        answer:
          "Ja. Data wordt lokaal op je device opgeslagen zolang dat nodig is. Zodra vector embeddings en chunks beschikbaar zijn, kan de lokale of private LLM antwoorden en samenvattingen blijven leveren zonder internet.",
      },
      {
        question: "Kan AITJE Notulist lokaal doorwerken zonder internet?",
        answer:
          "Ja. Opnames en verwerking kunnen lokaal plaatsvinden, waarna de samenvatting via de lokale of private omgeving wordt teruggegeven. Zo blijf je ook bij internetuitval werkbaar.",
      },
    ],
  },
  {
    title: "Milieu",
    badge: "Impact",
    icon: Leaf,
    items: [
      {
        question: "Hoe helpt lokale AI het milieu?",
        answer:
          "AITJE Assistent & Notulist verwerken de gegevens lokaal, waardoor minder continue calls naar externe datacenters nodig zijn. Dat beperkt energiegebruik en koelwaterverbruik in grootschalige cloudinfrastructuur.",
      },
      {
        question: "Is lokaal altijd duurzamer?",
        answer: "Ja, dit is de focus van AITJE.",
      },
      {
        question: "Wat is jullie uitgangspunt?",
        answer:
          "Lokaal waar het kan, extern waar het nodig is. Extern doen we alleen op veilige plekken met betrouwbare partners en zonder afhankelijk te zijn van 1 service.",
      },
    ],
  },
  {
    title: "Diensten",
    badge: "Partnerschap",
    icon: Sparkles,
    items: [
      {
        question: "Welke diensten bied je aan?",
        answer:
          "We denken strategie met je uit om zo goedkoop en stabiel mogelijk te automatiseren met AI. We leveren zowel technische implementatie als doorlopende begeleiding.",
        linkTo: "/diensten",
        linkLabel: "Bekijk alle diensten",
      },
      {
        question: "Kunnen jullie AI-strategie met ons uitdenken?",
        answer:
          "Ja. We helpen met keuzes in infrastructuur, tooling, processen en prioriteiten, zodat AI past bij je organisatie in plaats van andersom.",
      },
      {
        question: "Kunnen jullie een maatwerk agent voor ons maken?",
        answer:
          "Ja. We bouwen een persoonlijke agent op maat voor jouw processen, inclusief koppelingen met systemen, beveiliging en beheer.",
      },
      {
        question: "Kunnen jullie een RAG chat bouwen?",
        answer:
          "Ja. We kunnen een RAG-chat opzetten die werkt met jouw documenten en kennisbank, zodat antwoorden contextueel en bruikbaar zijn.",
      },
      {
        question: "Bouwen jullie AI-workflows met of zonder human-in-the-loop?",
        answer:
          "Ja. We ontwerpen zowel volledig geautomatiseerde workflows als varianten met menselijke controle en goedkeuringsstappen.",
      },
      {
        question: "Bouwen jullie ook software-oplossingen op maat?",
        answer:
          "Ja. We bouwen maatwerk webapplicaties en mobiele applicaties, inclusief Android en iOS waar nodig.",
      },
      {
        question: "Kunnen jullie een lokale LLM op ons netwerk installeren?",
        answer:
          "Ja. We installeren en configureren lokale LLM-oplossingen op je eigen netwerk, inclusief beheer, beveiliging en koppeling met je kennisbronnen.",
      },
      {
        question: "Wat houdt het SLA in?",
        answer:
          "We spreken altijd een SLA af. Daarin staan de afspraken over onderhoud, ondersteuning en uitbreidingen.",
      },
    ],
  },
  {
    title: "Software",
    badge: "Integraties & workflows",
    icon: PlugZap,
    items: [
      {
        question: "Welke software heeft AITJE allemaal gemaakt?",
        answer:
          "Bekijk de pagina producten/software voor al onze algemene software-oplossingen.",
        linkTo: "/producten/software",
        linkLabel: "Naar producten/software",
      },
    ],
  },
  {
    title: "Doelgroep & gebruik",
    badge: "Doelgroep",
    icon: BookOpenCheck,
    items: [
      {
        question: "Voor wie is AITJE bedoeld?",
        answer:
          "MKB-bedrijven, gemeentes, scholen, bibliotheken en artsen. Organisaties die met gevoelige gegevens werken en dit liever niet delen in de cloud of met andere landen.",
      },
      {
        question: "Kan ik jullie inhuren zonder dienstenpakket?",
        answer:
          "Tuurlijk. We kunnen een maatwerk lokale edge AI-oplossing voor je creëren. We vinden het ook geen probleem om dit over te dragen aan je huidige webbouwer of applicatiebeheerder zodat die het kan onderhouden.",
      },
      {
        question: "Waar beginnen jullie meestal mee?",
        answer:
          "We beginnen meestal met een goed gesprek om te kijken waar AI echt een verschil kan maken in jouw organisatie.",
      },
    ],
  },
  {
    title: "Veiligheid & onafhankelijkheid",
    badge: "Zekerheid",
    icon: Shield,
    items: [
      {
        question: "Wat als er een internetstoring is bij AITJE Assistent?",
        answer:
          "AITJE Assistent merkt daar in de basis weinig van. Synchroniseren is dan tijdelijk lastiger, omdat gechunkte vector-embedding data uit versiebeheer wordt opgehaald. De lokale gegevens en lokale LLM-functionaliteit blijven wel beschikbaar.",
      },
      {
        question:
          "Kunnen meerdere mensen op het netwerk AITJE Assistent API gebruiken?",
        answer:
          "Ja. Je maakt accounts aan en installeert de mobiele of desktopapplicatie. Daarna kan die gebruiker via het netwerk gebruikmaken van de lokale LLM en API.",
      },
      {
        question: "Hoe beperken jullie dat agents een eigen wil krijgen?",
        answer:
          "Dat doen we met constrained prompting, guardrailing en sandboxing. Guardrails zetten duidelijke grenzen op acties, toegestane tools, output en rechten. Sandboxing zorgt dat agents in een afgeschermde omgeving draaien met beperkte toegang tot systemen en data.",
      },
      {
        question: "Wat als er een storing is?",
        answer:
          "We bouwen cloudoplossingen met plan B en plan C, plus tijdige monitoring en meldingen. Onze systemen zijn ingericht voor stabiele inzet binnen organisaties, niet voor een wereldwijd publiek. Dat maakt ze beter schaalbaar en makkelijker in de lucht te houden.",
      },
      {
        question: "Deelt AITJE Notulist de gesprekken?",
        answer:
          "AITJE Notulist neemt gesprekken op en deelt ze naar jouw eigen omgeving in de applicatie. Wat je er daarna mee doet, bepaal je zelf.",
      },
      {
        question: "Hoe voorkomt AITJE afhankelijkheid van externe platformen?",
        answer:
          "Door meerdere keuzes open te houden, geen single point of failure te bouwen en zoveel mogelijk lokaal af te handelen of op servers in beheer van AITJE of van jullie zelf. Zo beperk je externe invloeden maximaal.",
      },
    ],
  },
  {
    title: "Leren met AITJE",
    badge: "Kennis & prompts",
    icon: BookOpenCheck,
    items: [
      {
        question: "Waar leer ik meer over AI-termen en onderwerpen?",
        answer:
          "In ons kenniscentrum vind je artikelen over termen, technieken en toepassingen. Denk aan LLM's, RAG, context en lokale AI.",
        linkTo: "/kenniscentrum",
        linkLabel: "Naar het kenniscentrum",
      },
      {
        question: "Hebben jullie prompts & guides om meer uit LLM te halen?",
        answer:
          "Ja, die hebben we. Een onderdeel van AITJE is PromptPaleis: de Nederlandse marktplaats met pre-made prompts en guides om meer uit AI te halen.",
        linkTo: "https://www.promptpaleis.nl",
        linkLabel: "Naar PromptPaleis",
      },
    ],
  },
];

const facts = [
  {
    title: "Lokale verwerking",
    badge: "100% data van jou",
    description: "We delen geen data met externe partijen.",
  },
  {
    title: "Voorspelbare kosten",
    badge: "In eigen beheer",
    description: "Je investeert in een houdbare lange termijn oplossing.",
  },
  {
    title: "Natuurvriendelijk",
    badge: "Klimaat",
    description:
      "Minder serverwater, minder energie en dus een lichtere voetafdruk.",
  },
];
</script>
