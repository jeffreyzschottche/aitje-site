<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />

    <main>
      <section
        class="relative overflow-hidden rounded-[3rem] bg-[#212121] text-white"
      >
        <div
          class="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-32 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div class="space-y-6">
            <p
              class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-gray-300"
            >
              Vogelvraie AI
            </p>
            <p class="text-5xl font-black leading-tight text-white">
              AITJE is altijd
            </p>
            <p class="text-4xl font-black text-[#facc15]">
              {{ phrases[currentPhrase] }}
            </p>
            <p class="text-lg text-gray-200">
              AITJE is het ei dat we zelf uitbroeden: een mini-computer met
              eigen operating system, een getraind Nederlands LLM en jouw
              kennis. Hij draait dichtbai, gebruikt minder energie en deelt
              nooit data met Amerikaanse corporaties.
            </p>
            <p class="text-sm uppercase tracking-[0.4em] text-gray-400">
              Jouw data blijft in je eigen nest · Minder koelwater ·
              Onafhankelijk van Big Tech
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/shop"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
              >
                Bekijk pakketten
              </NuxtLink>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                Diensten & support
              </NuxtLink>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p class="text-sm text-gray-300">{{ stat.label }}</p>
                <p class="text-xl font-semibold text-white">{{ stat.value }}</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="rounded-[2.5rem] p-8 backdrop-blur">
              <img
                src="/images/aitje-product.png"
                alt="AITJE nest"
                class="w-full rounded-3xl border border-white/10 bg-white/80 object-cover"
              />
              <p
                class="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                AITJE nest
              </p>
              <p class="mt-2 text-sm text-gray-200">
                Klein kastje, grote kracht: elke prompt wordt lokaal verwerkt.
                Elke vraag die je stelt redt kilo’s servers en liters water
                elders.
              </p>
              <div
                class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p class="text-xs uppercase tracking-[0.4em] text-[#facc15]">
                  Academy
                </p>
                <p class="mt-2 text-lg font-semibold">
                  Leer prompen als een vlieginstructeur via de AITJE Academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-10 px-6 pb-16">
        <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article
            v-for="pillar in promisePillars"
            :key="pillar.title"
            class="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="pillar.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ pillar.highlight }}
                </p>
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ pillar.title }}
                </h3>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-600">{{ pillar.description }}</p>
          </article>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 py-20">
        <div class="mx-auto max-w-6xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
          >
            Uit het businessplan
          </p>
          <h2 class="mt-4 text-4xl font-black text-gray-900">
            De vier problemen die AITJE oplost
          </h2>
        </div>
        <div class="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <article
            v-for="reason in reasons"
            :key="reason.title"
            class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="reason.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ reason.theme }}
                </p>
                <h3 class="text-2xl font-semibold text-gray-900">
                  {{ reason.title }}
                </h3>
              </div>
            </div>
            <div class="mt-4 flex flex-1 flex-col gap-3">
              <div
                class="flex flex-1 flex-col rounded-2xl bg-[#fafafa] p-4 text-sm text-gray-600"
              >
                <p class="font-semibold text-gray-900">Nu:</p>
                <p>{{ reason.problem }}</p>
              </div>
              <div
                class="flex flex-1 flex-col rounded-2xl bg-[#facc15] p-4 text-sm text-[#212121]"
              >
                <p class="font-semibold">Met AITJE:</p>
                <p>{{ reason.solution }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="px-6 py-20">
        <div
          class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div
            class="space-y-6 rounded-3xl border border-gray-200 bg-[#fafafa] p-10"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Klein kastje, grote kracht
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              Elke prompt blijft in je eigen nest
            </h2>
            <p class="text-gray-700">
              AITJE is een mini-computer met OS + kennisbank. Je sluit hem aan,
              registreert accounts en praat via chat, API of microfoon. De
              hardware is getest, we installeren hem desgewenst en blijven
              bereikbaar via onze diensten.
            </p>
            <ul class="space-y-4">
              <li
                v-for="item in productHighlights"
                :key="item"
                class="flex items-center gap-3 text-gray-700"
              >
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-[#212121] text-sm font-bold text-[#facc15]"
                >
                  ✓
                </div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="rounded-3xl border border-gray-200 p-6 shadow-md"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="feature.icon" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-xl font-semibold text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                {{ feature.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#212121] px-6 py-20 text-white">
        <div class="mx-auto max-w-6xl">
          <div
            class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Voor wie
              </p>
              <h2 class="text-4xl font-black">Van solist tot organisatie</h2>
              <p class="mt-3 text-gray-300">
                Uit het businessplan: drie persona’s met ieder hun eigen pakket,
                abonnement en dienstverlening.
              </p>
            </div>
            <NuxtLink
              to="/shop"
              class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
            >
              Naar de shop
            </NuxtLink>
          </div>
          <div class="mt-12 grid gap-8 md:grid-cols-3">
            <article
              v-for="persona in personas"
              :key="persona.title"
              class="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ persona.badge }}
              </p>
              <h3 class="mt-2 text-2xl font-semibold">{{ persona.title }}</h3>
              <p class="text-sm text-gray-300">{{ persona.story }}</p>
              <div class="mt-6 rounded-2xl bg-black/30 p-4">
                <p class="text-xs text-gray-400">Eenmalig</p>
                <p class="text-xl font-semibold text-white">
                  {{ persona.investment }}
                </p>
                <p class="mt-2 text-xs text-gray-400">Terugkerend</p>
                <p class="text-lg font-semibold text-[#facc15]">
                  {{ persona.recurring }}
                </p>
              </div>
              <ul class="mt-6 space-y-3 text-sm text-gray-200">
                <li
                  v-for="extra in persona.extras"
                  :key="extra"
                  class="flex items-start gap-2"
                >
                  <span
                    class="mt-1 h-1.5 w-1.5 rounded-full bg-[#facc15]"
                  ></span>
                  {{ extra }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 py-20">
        <div class="mx-auto max-w-5xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Techniek
          </p>
          <h2 class="mt-4 text-4xl font-black text-gray-900">
            Specificaties van het kastje
          </h2>
          <p class="mt-3 text-gray-600">
            Hardware uit het businessplan: krachtige processor, stille koeling,
            energiezuinig. We testen elk device voordat hij het nest verlaat.
          </p>
        </div>
        <div
          class="mx-auto mt-12 max-w-4xl space-y-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div
            v-for="spec in specs"
            :key="spec.label"
            class="flex flex-wrap items-center justify-between border-b border-dashed border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <span class="text-sm uppercase tracking-[0.4em] text-gray-400">{{
              spec.label
            }}</span>
            <span class="text-lg font-semibold text-gray-900">{{
              spec.value
            }}</span>
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Wie is AITJE?
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              Jeffrey & Kees bouwen een gouden ei voor Europese organisaties
            </h2>
            <p class="text-lg text-gray-700">
              We zijn twee Nederlandse makers die hardware, software en diensten
              combineren. In het businessplan zie je onze roadmap: van MVP naar
              hardware, naar de eerste klanten, aangevuld met consults, SLA en
              e-learning. We zijn aanspreekbaar, geen anonieme vendor.
            </p>
            <div class="grid gap-6 md:grid-cols-2">
              <article
                v-for="founder in founders"
                :key="founder.name"
                class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
                  >
                    <component :is="founder.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">{{ founder.name }}</h3>
                    <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
                      {{ founder.role }}
                    </p>
                  </div>
                </div>
                <p class="mt-3 text-sm text-gray-600">{{ founder.story }}</p>
              </article>
            </div>
          </div>
          <div
            class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 shadow-sm"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Academy + diensten
            </p>
            <h3 class="mt-3 text-3xl font-black text-gray-900">
              Leer vliegen met prompts
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              We lanceren de AITJE Academy: een eigen e-learning platform (100,-
              p/j) met documentatie, cheatsheets en vliegles in prompt
              engineering. Combineer het met diensten zoals installatie,
              kennisupdates en SLA’s.
            </p>
            <div class="mt-6 space-y-4">
              <div
                v-for="item in academyHighlights"
                :key="item.title"
                class="rounded-2xl bg-white p-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ item.badge }}
                </p>
                <h4 class="text-lg font-semibold text-gray-900">
                  {{ item.title }}
                </h4>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
            </div>
            <div class="mt-6 flex flex-col gap-3">
              <NuxtLink
                to="/academy"
                class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
              >
                Naar de Academy
              </NuxtLink>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#fafafa]"
              >
                Bekijk diensten
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  Bird,
  BookOpen,
  Cpu,
  Droplet,
  Feather,
  Globe,
  Leaf,
  Lock,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-vue-next";

const phrases = ["jouw aigen"];
const heroStats = [
  { label: "Data eigendom", value: "100% van jou" },
  { label: "Koelwater bespaard", value: "Geen cloud calls" },
  { label: "Soevereiniteit", value: "Zonder Big Tech" },
];

const promisePillars = [
  {
    title: "Natuurvriendelijke AI",
    highlight: "Reduceert verspilling",
    description:
      "Elke prompt draait in je eigen kastje. Geen gigantische serverhallen die liters water verbruiken.",
    icon: Leaf,
  },
  {
    title: "Data blijft van jou",
    highlight: "100% lokaal",
    description:
      "Aitje stuurt niets naar Amerikaanse of Chinese platformen. Accounts en kennisbanken beheer je zelf.",
    icon: Lock,
  },
  {
    title: "Onafhankelijke autonomie",
    highlight: "Altijd bereikbaar",
    description:
      "Ook bij storingen of prijsstijgingen blijf jij antwoorden krijgen. Aitje is jouw plan B én plan A.",
    icon: Globe,
  },
];

const reasons = [
  {
    title: "Afhankelijkheid",
    theme: "Altijd beschikbaar",
    problem:
      "Als cloud AI plat ligt of een storing heeft, valt de productiviteit stil.",
    solution:
      "Aitje draait lokaal. Zelfs zonder internet blijft jouw team vragen stellen.",
    icon: Server,
  },
  {
    title: "Financieel",
    theme: "Voorspelbare kosten",
    problem:
      "Naarmate meer mensen AI gebruiken, stijgen de tarieven van Big Tech platformen.",
    solution:
      "Je betaalt één keer voor het kastje en kiest zelf diensten of upgrades wanneer het jou uitkomt.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    theme: "Europese soevereiniteit",
    problem:
      "We delen gevoelige data met buitenlandse partijen en weten niet wie toegang heeft.",
    solution:
      "Aitje bewaart alles lokaal. Geen data richting Amerikaanse corporaties en compliant met strenge sectoren.",
    icon: Shield,
  },
  {
    title: "Klimaat",
    theme: "Help de natuur",
    problem:
      "Massale servercalls verbruiken enorme hoeveelheden water en energie.",
    solution:
      "Lokale LLM’s zoals Aitje verminderen serverbelasting en daarmee de ecologische voetafdruk.",
    icon: Droplet,
  },
];

const productHighlights = [
  "Plug & Play installatie",
  "REST API in ChatGPT-format",
  "Chat, audio en document analyse",
  "Eigen kennisbanken en accounts",
];

const features = [
  {
    title: "100% privacy",
    description:
      "Gegevens blijven op je eigen hardware, ideaal voor scholen, gemeenten en MKB.",
    icon: Lock,
  },
  {
    title: "Razendsnelle antwoorden",
    description:
      "Doordat alles lokaal draait, krijg je reactie zonder internetvertraging.",
    icon: Zap,
  },
  {
    title: "Volledige API",
    description:
      "Integreer eigen applicaties via dezelfde API-structuur als ChatGPT.",
    icon: Cpu,
  },
  {
    title: "Eigen identiteit",
    description:
      "Train Aitje met jouw kennisbank. Het kastje leert je tone-of-voice.",
    icon: BookOpen,
  },
];

const personas = [
  {
    title: "Solo & ZZP · AITJE",
    badge: "Eenmalige investering",
    story: "Voor professionals die zekerheid en autonomie willen.",
    investment: "€ 3.999",
    recurring: "€ 0,- per jaar",
    extras: [
      "Plug & play hardware",
      "Eigen accounts & API keys",
      "Community support",
    ],
  },
  {
    title: "MKB · AITJE Pro",
    badge: "Plan B voor teams",
    story: "Voor kantoren, scholen en bibliotheken die begeleiding wensen.",
    investment: "€ 5.499",
    recurring: "€ 1.200 p/j (SLA + e-learning + consult)",
    extras: [
      "Installatie + consult",
      "Eigen kennis update 1x",
      "SLA + e-learning + demo’s",
    ],
  },
  {
    title: "Organisatie · AITJE Custom",
    badge: "Strategisch partnerschap",
    story: "Voor grotere organisaties die samen willen doorontwikkelen.",
    investment: "€ 7.500+",
    recurring: "€ 2.500 - 3.750 p/j",
    extras: [
      "Consults + kennis updates",
      "LLM upgrades & SLA",
      "E-learning + maatwerk workflows",
    ],
  },
];

const founders = [
  {
    name: "Jeffrey Zschöttche",
    role: "Product & strategie",
    story:
      "Vertaalde het businessplan naar hardware + OS + client en bewaakt dat alles offline bereikbaar blijft.",
    icon: Feather,
  },
  {
    name: "Kees van Ruler",
    role: "Technologie & diensten",
    story:
      "Bewaakt installaties, embedding-workflows en consults voor klanten die willen opschalen.",
    icon: Bird,
  },
];

const academyHighlights = [
  {
    badge: "Prompt vlieglessen",
    title: "Modules over scenario’s uit jouw sector",
    description:
      "Leer hoe je Aitje inzet voor beleid, klantcontact of onderwijs.",
  },
  {
    badge: "Docs & cheatsheets",
    title: "Toegang tot onze documentatie",
    description:
      "Uitgebreide instructies, best practices en embed workflows (100,- p/j).",
  },
  {
    badge: "Live sessies",
    title: "Digitale consults met Jeffrey & Kees",
    description: "Spar mee over kennisupdates, promptdesign en governance.",
  },
];

const specs = [
  { label: "Processor", value: "High-performance AI processor" },
  { label: "Geheugen", value: "16GB RAM" },
  { label: "Opslag", value: "256GB SSD" },
  { label: "Connectiviteit", value: "Ethernet, USB 3.0, HDMI" },
  { label: "Afmetingen", value: "12 x 8 x 5 cm" },
  { label: "Stroomverbruik", value: "15W (max)" },
  { label: "Model", value: "Lokaal LLM (GPT-klasse)" },
];

const currentPhrase = ref(0);
</script>
