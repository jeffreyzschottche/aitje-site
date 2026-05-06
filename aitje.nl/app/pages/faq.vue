<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">FAQ</p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">Veelgestelde vragen</h1>
        <p class="mt-6 text-lg text-gray-600">
          Antwoorden op veelgestelde vragen over wat AITJE doet en aanbied.
        </p>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_0.35fr]">
        <div class="space-y-6">
          <article class="rounded-3xl border border-gray-200 bg-white p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]">
                <Search class="h-6 w-6" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">Zoeken</p>
                <h2 class="text-2xl font-semibold text-gray-900">Filter je vragen</h2>
              </div>
            </div>
            <div class="mt-6 space-y-4">
              <label class="block">
                <span class="sr-only">Zoek in veelgestelde vragen</span>
                <div class="flex items-center gap-3 rounded-2xl bg-[#fafafa] px-4 py-3">
                  <Search class="h-5 w-5 text-gray-400" />
                  <input
                    v-model="searchQuery"
                    type="search"
                    placeholder="Typ hier je vraag..."
                    class="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </label>
            </div>
          </article>

          <article
            v-for="group in filteredGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]">
                <component :is="group.icon" class="h-6 w-6" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">
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
                <summary class="cursor-pointer text-base font-semibold text-gray-900">
                  {{ item.question }}
                </summary>
                <p class="mt-3 text-sm text-gray-600">{{ item.answer }}</p>
                <component
                  :is="item.external ? 'a' : NuxtLink"
                  v-if="item.linkTo"
                  :href="item.external ? item.linkTo : undefined"
                  :to="!item.external ? item.linkTo : undefined"
                  :target="item.external ? '_blank' : undefined"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                  class="mt-3 inline-flex text-sm font-semibold text-[#d4a700] underline decoration-[#d4a700]/40 underline-offset-4 transition hover:text-black hover:decoration-black"
                >
                  {{ item.linkLabel || "Lees meer" }}
                </component>
              </details>
            </div>
          </article>

          <article
            v-if="filteredGroups.length === 0"
            class="rounded-3xl border border-dashed border-gray-300 bg-white p-6 text-center"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">Geen resultaten</p>
            <h2 class="mt-3 text-2xl font-semibold text-gray-900">Geen vragen gevonden</h2>
            <p class="mt-3 text-sm text-gray-600">Probeer een bredere term zoals milieu, diensten, privacy of RAG.</p>
          </article>
        </div>

        <aside class="h-max rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <h3 class="text-2xl font-semibold text-gray-900">
            Staat je vraag er niet tussen?
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Stuur ons gerust een bericht of neem contact op via de onderstaande
            platformen.
          </p>
          <div class="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aitje-bv-a095453b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AITJE op LinkedIn"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img :src="linkedinIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://www.tiktok.com/@aitje.bv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AITJE op TikTok"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.38V2h-3.13v12.38a2.67 2.67 0 1 1-2.67-2.67c.31 0 .61.05.9.15V8.67a5.8 5.8 0 0 0-.9-.07A5.8 5.8 0 1 0 15.82 14V7.73a7.9 7.9 0 0 0 4.77 1.6V6.2c-.34 0-.67-.03-1-.11Z" />
              </svg>
            </a>
            <a
              href="mailto:aitjebv@gmail.com"
              aria-label="Mail AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
            >
              <img :src="gmailIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
            <button
              type="button"
              aria-label="Vraag een belverzoek aan bij AITJE"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] text-gray-900 transition hover:border-[#facc15] hover:text-[#d4a700]"
              @click="showPhoneNotice = true"
            >
              <PhoneCall aria-hidden="true" class="h-5 w-5" />
            </button>
          </div>
          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Neem contact op
          </NuxtLink>
          <div class="mt-6 rounded-3xl bg-[#facc15] p-4 text-[#212121]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em]">Kenniscentrum</p>
            <p class="mt-2 text-sm">
              In het kenniscentrum schrijven we over termen en onderwerpen uit de wereld van AI. Misschien staat het antwoord op jouw vraag daar al tussen.
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

      <section class="mx-auto mt-16 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white">
        <h2 class="text-3xl font-black">Snelle feiten</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article
            v-for="fact in facts"
            :key="fact.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
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

    <Teleport to="body">
      <div
        v-if="showPhoneNotice"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faq-phone-notice-title"
        @click.self="showPhoneNotice = false"
      >
        <div class="w-full max-w-md rounded-3xl border border-white/10 bg-[#111] p-6 text-white shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                Telefonisch contact
              </p>
              <h2 id="faq-phone-notice-title" class="mt-3 text-2xl font-semibold">
                Vraag een belverzoek aan
              </h2>
            </div>
            <button
              type="button"
              aria-label="Sluiten"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              <X aria-hidden="true" class="h-5 w-5" />
            </button>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">
            We delen ons telefoonnummer niet meer openbaar door de toename van spam calls. Laat via het contactformulier een belverzoek achter, dan nemen we contact met je op.
          </p>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              :to="phoneContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              @click="showPhoneNotice = false"
            >
              Belverzoek indienen
            </NuxtLink>
            <NuxtLink
              :to="introContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              Digitale kennismaking
            </NuxtLink>
          </div>
        </div>
      </div>
    </Teleport>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { BookOpenCheck, Leaf, Lock, PhoneCall, PlugZap, Search, Shield, Sparkles, X } from "lucide-vue-next";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { localePath } = useSiteLocale();
const showPhoneNotice = ref(false);
const phoneContactPath = computed(() => localePath("/contact?onderwerp=belverzoek"));
const introContactPath = computed(() => localePath("/contact?onderwerp=kennismaking"));

type FaqItem = {
  question: string;
  answer: string;
  linkTo?: string;
  linkLabel?: string;
  external?: boolean;
};

const searchQuery = ref("");

const faqGroups = [
  {
    title: "Producten",
    badge: "Hardware",
    icon: Sparkles,
    items: [
      {
        question: "Wat is AITJE Assistent precies?",
        answer:
          "AITJE Assistent is een mini computer die geoptimaliseerd is met onze eigen software. Je krijgt een lokale LLM, een door AITJE gemaakte kennisbank om je documenten te verwerken zodat ze in de LLM gebruikt kunnen worden en een AI powered kennis systeem dat ook zonder internet bereikbaar blijft.",
      },
      {
        question: "Doet AITJE ook aan custom build hardware?",
        answer:
          "Ja. En als we je niet volledig kunnen helpen binnen jouw specifieke expertise, hebben we een stabiel netwerk van specialisten waarmee we je wens kunnen realiseren.",
      },
      {
        question: "Wat is AITJE Coder?",
        answer:
          "AITJE Coder is een manier om te programmeren zonder Claude Code, Codex of Gemini. Je hebt een coding agent beschikbaar via ons hardware device. Geen abonnementen, geen storingen. Een coding partner die bereikbaar is zolang je internet hebt.",
      },
      {
        question: "Hoeveel kosten jullie producten?",
        answer: "Vraag een prijslijst of offerte aan via onze contactpagina.",
        linkTo: "/contact?onderwerp=offerte",
        linkLabel: "Vraag een offerte aan",
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
        answer: "Voor backend werken we vooral met Python, .NET, PHP, Laravel en Node.js.",
      },
      {
        question: "Welke frameworks en tools gebruiken jullie?",
        answer:
          "Afhankelijk van de oplossing gebruiken we voor frontend en interfaces onder andere Nuxt, en voor backend en services bijvoorbeeld FastAPI, Laravel, Blazor, PySide, Qdrant, Internal Lemonade Server en SearXNG.",
      },
      {
        question: "Kunnen jullie koppelen met bestaande systemen?",
        answer:
          "Ja. We kunnen koppelen met externe platformen en andere systemen waar dit nodig is. Dit is custom of uitbreiding van een bestaand product. Onze producten doen dit niet out of the box, alleen met door ons zelf ontwikkelde externe applicaties.",
      },
      {
        question: "Is alles lokaal of ook hybride mogelijk?",
        answer:
          "Beide. We ontwerpen lokaal waar het kan en hybride waar het nodig is, met behoud van grip op data, kosten en continuiteit.",
      },
      {
        question: "Kan jullie LLM op internet zoeken?",
        answer:
          "Ja. Zolang er een internetverbinding beschikbaar is op het wifi- of lokale netwerk, kunnen AITJE-producten ook gebruikmaken van AI.",
      },
      {
        question: "Welke modellen gebruiken jullie?",
        answer:
          "We hebben geen vaste voorkeur: modellen kunnen worden aangepast op vraag en geüpdatet wanneer dat waarde toevoegt. We houden je daar actief van op de hoogte. Voor algemene use cases werken Gemma, Qwen en DeepSeek-modellen vaak sterk.",
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
          "Data blijft in Nederland of Europa, of verlaat het systeem helemaal niet. In veel gevallen kunnen we zelfs een volledig lokale oplossing bouwen binnen je eigen omgeving.",
      },
      {
        question: "Hoe embedden jullie data in de kennisbank voor AITJE Assistent?",
        answer:
          "We verwerken en embedden data op de server en synchroniseren die naar een prive versiebeheeraccount voor jouw organisatie. Vanaf daar kun je op de Assistent syncen met de live omgeving. Als verkeerde data is toegevoegd, kunnen we via versiebeheer ook terugzetten en back-ups maken.",
      },
      {
        question: "Kan AITJE Assistent lokaal doorwerken zonder internet?",
        answer:
          "Ja. Data wordt lokaal op je device opgeslagen zolang dat nodig is. Zodra vector embeddings en chunks beschikbaar zijn, kan de lokale of private LLM antwoorden en samenvattingen blijven leveren zonder internet.",
      },
    ],
  },
  {
    title: "Milieu",
    badge: "Impact",
    icon: Leaf,
    items: [
      {
        question: "Hoe helpt AITJE het milieu?",
        answer:
          "AITJE Assistent verwerkt gegevens lokaal, waardoor minder continue calls naar externe datacenters nodig zijn. Dat beperkt energiegebruik en koelwaterverbruik in grootschalige cloudinfrastructuur.",
      },
      {
        question: "Is lokaal altijd duurzamer?",
        answer:
          "Ja. Dat is de focus van alle producten van AITJE: minimaal stroomverbruik, zo weinig mogelijk externe API-calls en geen onnodige afhankelijkheid van cloudplatformen.",
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
        answer: "Voor een overzicht van alle diensten kun je terecht op onze dienstenpagina.",
        linkTo: "/diensten",
        linkLabel: "Bekijk diensten",
      },
      {
        question: "Kunnen jullie AI-strategie met ons uitdenken?",
        answer:
          "Ja. We helpen mee met keuzes rond interne AI-infrastructuur, tooling, processen en prioriteiten, zodat onze on-premise Edge AI past binnen je organisatie in plaats van dat je organisatie zich moet aanpassen aan onze oplossingen.",
      },
      {
        question: "Kunnen jullie een maatwerk agent voor ons maken?",
        answer:
          "Omdat de vraag naar lokale maatwerk agents groeit, hebben we het AITJE Custom-traject opgezet.",
        linkTo: "/producten/aitje-custom",
        linkLabel: "Bekijk AITJE Custom",
      },
      {
        question: "Kunnen jullie een RAG chat bouwen?",
        answer:
          "Ja. Hier zijn AITJE Assistent en AITJE Assistent+ voor gemaakt: je eigen assistent die beschikt over alle data die jij gekozen hebt om te delen. Die kennis wordt lokaal in het geheugen opgeslagen, zodat de LLM daar steeds toegang toe heeft.",
      },
      {
        question: "Bouwen jullie AI-workflows met of zonder human-in-the-loop?",
        answer:
          "Ja. We ontwerpen zowel volledig geautomatiseerde workflows als varianten met menselijke controle en goedkeuringsstappen.",
      },
      {
        question: "Kunnen jullie je producten uitbreiden of tweaken voor specifieke behoeftes?",
        answer: "Dat kan zeker. Dit doen we wel alleen in partnerschap.",
      },
      {
        question: "Wat houdt het SLA in?",
        answer:
          "De visie van AITJE is: je partner in edge en on-premise AI. We mikken dus op een langdurig strategisch partnerschap. Daarbij hoort een SLA met concrete afspraken over onderhoud, ondersteuning en uitbreidingen.",
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
          "Tuurlijk. We kunnen een maatwerk lokale edge AI-oplossing voor je creëren. We vinden het ook geen probleem om dit over te dragen aan je huidige webbouwer of applicatiebeheerder zodat die het kan onderhouden. Let wel: bij overdracht vervalt onze garantie en monitoren we de oplossing niet meer. We voeren dan ook geen up-to-date verbeteringen door en bieden geen uitbreidingen aan.",
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
        question: "Kunnen meerdere mensen op het netwerk AITJE Assistent API gebruiken?",
        answer:
          "Ja. Je maakt accounts aan en installeert de mobiele of desktopapplicatie. Daarna kan die gebruiker via het netwerk en via de AITJE Client-applicatie gebruikmaken van de lokale LLM en API.",
      },
      {
        question: "Hoe beperken jullie dat agents een eigen wil krijgen?",
        answer:
          "Dat doen we met constrained prompting, guardrailing en sandboxing. Guardrails zetten duidelijke grenzen op acties, toegestane tools, output en rechten. Sandboxing zorgt dat agents in een afgeschermde omgeving draaien met beperkte toegang tot systemen en data.",
      },
      {
        question: "Wat als er een storing is?",
        answer:
          "We kunnen op afstand meekijken. Neem contact op met AITJE of schiet een ticket in als je een SLA hebt, dan kijken we op afstand met je mee.",
      },
      {
        question: "Hoe voorkomt AITJE afhankelijkheid van externe platformen?",
        answer:
          "Door meerdere keuzes open te houden, geen single point of failure te bouwen en zoveel mogelijk lokaal af te handelen of op servers in beheer van AITJE. Zo beperk je externe invloeden maximaal.",
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
        question: "Helpen jullie organisaties ook om betere prompts te schrijven en meer uit LLM te halen?",
        answer:
          "Ja. Het is mogelijk om een training van AITJE te ontvangen. Dit heeft meestal de focus om het meeste uit AITJE-producten te halen, maar de theorie is vaak ook toepasbaar op andere AI-platformen.",
      },
    ],
  },
];

const filteredGroups = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return faqGroups;

  return faqGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        `${group.title} ${group.badge} ${item.question} ${item.answer}`.toLowerCase().includes(query),
      ),
    }))
    .filter((group) => group.items.length > 0);
});

const resultCount = computed(() => filteredGroups.value.reduce((sum, group) => sum + group.items.length, 0));

const allFaqItems = faqGroups.flatMap((group) => group.items);

useHead({
  script: [
    {
      type: "application/ld+json",
      key: "faq-structured-data",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    },
  ],
});

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
    description: "Minder serverwater, minder energie en dus een lichtere voetafdruk.",
  },
];
</script>
