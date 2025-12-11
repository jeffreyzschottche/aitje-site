<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />

    <main class="pt-32">
      <section class="px-6 pb-20">
        <div class="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 animate-pulse rounded-full bg-yellow-400 blur-3xl opacity-20"></div>
              <img
                src="/images/aitje-logo.png"
                alt="AITJE ei"
                class="relative z-10 h-64 w-64 animate-pulse"
                style="animation-duration: 3s"
              />
            </div>
          </div>

          <div class="space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">Lokale AI</p>
            <h1 class="text-5xl font-black leading-tight text-gray-900">
              AITJE is
              <span class="inline-block min-w-[260px] text-yellow-500 transition-all duration-500">
                {{ phrases[currentPhrase] }}
              </span>
            </h1>
            <p class="text-xl text-gray-600">
              Jouw persoonlijke AI-assistent die 100% lokaal draait. Geen cloud, geen gedoe, gewoon jouw eigen
              intelligentie.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/shop"
                class="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-black transition hover:bg-yellow-500"
              >
                Bestel nu
              </NuxtLink>
              <NuxtLink
                to="/app"
                class="inline-flex items-center justify-center rounded-full border border-gray-900 px-8 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                Probeer de app
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 px-6 py-20">
        <div class="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold">Klein kastje, grote kracht</h2>
            <p class="text-gray-600">
              AITJE is een compact AI-systeem dat volledig lokaal op jouw netwerk draait. Alle verwerking gebeurt in dit
              kleine kastje - geen data naar de cloud, volledige controle in jouw handen.
            </p>
            <ul class="space-y-3">
              <li v-for="item in productHighlights" :key="item" class="flex items-center gap-3">
                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold">
                  ✓
                </div>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <img src="/images/aitje-product.png" alt="AITJE product" class="w-full max-w-xl rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="mx-auto max-w-7xl">
          <h2 class="mb-16 text-center text-4xl font-bold">Waarom AITJE?</h2>
          <div class="grid gap-8 md:grid-cols-3">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="space-y-4 rounded-2xl border border-gray-200 p-6 text-center shadow-sm"
            >
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <component :is="feature.icon" class="h-8 w-8" />
              </div>
              <h3 class="text-2xl font-semibold">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 px-6 py-20">
        <div class="mx-auto max-w-7xl">
          <h2 class="mb-16 text-center text-4xl font-bold">Wat kun je ermee?</h2>
          <div class="grid gap-8 md:grid-cols-2">
            <article
              v-for="useCase in useCases"
              :key="useCase.title"
              class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 class="mb-4 text-2xl font-semibold">{{ useCase.title }}</h3>
              <ul class="space-y-3 text-gray-600">
                <li v-for="item in useCase.items" :key="item">• {{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="mx-auto max-w-4xl">
          <h2 class="mb-16 text-center text-4xl font-bold">Technische specificaties</h2>
          <div class="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div v-for="spec in specs" :key="spec.label" class="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <span class="text-gray-500">{{ spec.label }}</span>
              <span class="font-semibold text-gray-900">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-yellow-400 px-6 py-20">
        <div class="mx-auto max-w-4xl space-y-6 text-center">
          <h2 class="text-5xl font-black text-gray-900">Klaar voor jouw eigen AI?</h2>
          <p class="text-lg text-gray-800">Begin vandaag nog met 100% lokale, veilige en snelle AI.</p>
          <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <NuxtLink
              to="/shop"
              class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white transition hover:bg-gray-900"
            >
              Bekijk de shop
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Neem contact op
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-black px-6 py-12 text-center text-white">
      <div class="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div class="flex items-center gap-3">
          <img src="/images/aitje-logo.png" alt="AITJE logo" class="h-8 w-8 invert" />
          <span class="text-xl font-semibold">AITJE</span>
        </div>
        <p class="text-gray-400">Lokale AI, altijd dichtbai.</p>
        <p class="text-xs text-gray-500">© {{ new Date().getFullYear() }} AITJE. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Cpu, Lock, Server, Shield, Sparkles, Zap } from 'lucide-vue-next';

const phrases = [
  'dichtbai',
  'vogelvrai',
  'jouw aigen',
  'aigenwijs',
  'aitonoom',
  'lokail',
  'het gouden aitje'
];

const productHighlights = [
  'Plug & Play installatie',
  'REST API voor al je toepassingen',
  'Ingebouwde chat interface',
  'Meerdere gebruikers & API keys'
];

const features = [
  {
    title: '100% Privacy',
    description: 'Al je data blijft lokaal. Geen cloud servers, geen tracking of gedeelde informatie.',
    icon: Lock
  },
  {
    title: 'Razendsnel',
    description: 'Geen vertraging door internetverbindingen. AITJE reageert instant omdat alles lokaal draait.',
    icon: Zap
  },
  {
    title: 'Volledige API',
    description: 'Integreer AITJE met al je applicaties via de REST API. Compatible met ChatGPT API formaat.',
    icon: Cpu
  },
  {
    title: 'Altijd beschikbaar',
    description: 'Geen afhankelijkheid van externe diensten. Ook zonder internet blijft AITJE werken.',
    icon: Server
  },
  {
    title: 'Veilig',
    description: 'Gebruikersbeheer, API key authenticatie en volledige controle over toegang.',
    icon: Shield
  },
  {
    title: 'Gebruiksvriendelijk',
    description: 'Intuïtieve interface voor chat, API management en device instellingen.',
    icon: Sparkles
  }
];

const useCases = [
  {
    title: 'Voor particulieren',
    items: [
      'Privé AI-assistent voor dagelijkse vragen',
      'Hulp bij schrijven, programmeren en leren',
      'Lokale documentanalyse zonder privacy-zorgen',
      'Experimenten met AI zonder kosten per vraag'
    ]
  },
  {
    title: 'Voor bedrijven',
    items: [
      'Integratie in bedrijfsapplicaties via API',
      'Veilige documentverwerking zonder datalekken',
      'Meerdere gebruikers en API keys beheren',
      'Geen recurring kosten, eenmalige investering'
    ]
  },
  {
    title: 'Voor developers',
    items: [
      'Lokale AI voor projecten en experimenten',
      'Compatible met ChatGPT API format',
      'Traffic monitoring en analytics',
      'Geen API rate limits of kosten'
    ]
  },
  {
    title: 'Voor scholen',
    items: [
      'Veilige AI voor educatieve doeleinden',
      'Geen zorgen over privacy van leerlingen',
      'Meerdere gebruikers simultaan',
      'Volledig beheer over toegang en gebruik'
    ]
  }
];

const specs = [
  { label: 'Processor', value: 'High-performance AI processor' },
  { label: 'Geheugen', value: '16GB RAM' },
  { label: 'Opslag', value: '256GB SSD' },
  { label: 'Connectiviteit', value: 'Ethernet, USB 3.0, HDMI' },
  { label: 'Afmetingen', value: '12 x 8 x 5 cm' },
  { label: 'Stroomverbruik', value: '15W (max)' },
  { label: 'Model', value: 'Lokaal AI model (vergelijkbaar met GPT)' }
];

const currentPhrase = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentPhrase.value = (currentPhrase.value + 1) % phrases.length;
  }, 2000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
