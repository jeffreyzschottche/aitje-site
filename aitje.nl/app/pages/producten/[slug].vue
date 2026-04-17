<template>
  <div class="bg-[#f3efe5] text-gray-950">
    <SiteNavigation />

    <main v-if="product" class="pb-24 pt-28">
      <section>
        <div
          class="relative w-full overflow-hidden border border-black/10 bg-[#050505] px-6 py-8 text-white shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:px-8 lg:px-10 lg:py-10"
        >
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#facc15]/20 blur-3xl"></div>
            <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl"></div>
            <div class="absolute -bottom-10 right-20 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl"></div>
            <div
              class="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(250,204,21,0.14)_100%)]"
            ></div>
          </div>

          <div class="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="inline-flex items-center rounded-full border border-[#facc15]/40 bg-[#facc15]/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#facc15]"
                >
                  {{ statusLabel }}
                </span>
              </div>

              <h1 class="mt-5 max-w-4xl text-[2.8rem] font-black uppercase leading-[0.9] sm:text-[4rem] xl:text-[5.2rem]">
                {{ product.title }}
              </h1>
              <p class="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {{ product.summary }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  :to="primaryCta"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  {{ product.cta }}
                </NuxtLink>
                <NuxtLink
                  :to="useCasesRoute"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Bekijk use cases
                </NuxtLink>
              </div>

              <div class="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div v-for="item in heroFacts" :key="item.label" class="min-h-20">
                  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/40">
                    {{ item.label }}
                  </p>
                  <p class="mt-3 max-w-[18rem] text-sm leading-6 text-white/82">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="relative overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_top,#1f1f1f_0%,#090909_62%,#050505_100%)] p-6 sm:p-8"
              >
                <div class="rounded-[2rem] p-3">
                  <img
                    :src="heroImage"
                    :alt="product.title"
                    class="h-[20rem] w-full rounded-[1.5rem] object-cover sm:h-[26rem]"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto -mt-4 w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          {{ introSection.kicker }}
        </p>
        <h2 class="mt-4 text-5xl font-black text-gray-900">
          {{ introSection.title }}
        </h2>
        <p class="mt-6 text-lg text-gray-600">
          {{ introSection.text }}
        </p>
      </section>

      <section class="mx-auto mt-2 max-w-6xl px-4 sm:px-6">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="card in introCards"
            :key="card.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="card.icon" class="h-6 w-6" />
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ card.badge }}
            </p>
            <h2 class="mt-2 text-2xl font-black text-gray-900">
              {{ card.title }}
            </h2>
            <p class="mt-3 text-sm leading-7 text-gray-600">
              {{ card.description }}
            </p>
          </article>
        </div>
      </section>

      <section class="mt-16 bg-black py-14">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <article class="flex h-full flex-col justify-center rounded-[2rem] border border-white/10 bg-white/5 p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              {{ blackSection.kicker }}
            </p>
            <h2 class="mt-4 text-3xl font-black">
              {{ blackSection.title }}
            </h2>
            <p class="mt-5 text-lg font-medium leading-8 text-white/88">
              {{ blackSection.subtitle }}
            </p>
            <p class="mt-5 max-w-2xl text-base leading-8 text-white/72">
              {{ blackSection.paragraph }}
            </p>
          </article>

          <article>
            <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                :src="heroImage"
                :alt="product.title"
                class="h-[18rem] w-full rounded-[1.4rem] object-cover sm:h-[24rem]"
              />
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Visie
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            AI moet voor jouw organisatie werken, niet andersom
          </h2>
          <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-700">
            AI is niet meer weg te denken. Agents, LLM&apos;s, beeldgeneratie en
            videogeneratie gaan een steeds grotere rol spelen in hoe organisaties werken.
            Onze visie is dat je die ontwikkeling beter op je eigen systemen kunt
            voorbereiden, zonder volledige afhankelijkheid van het buitenland, Big Tech
            of externe platformen.
          </p>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div class="rounded-[3rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Waar we in geloven
          </p>
          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="card in beliefCards"
              :key="card.title"
              class="rounded-[1.75rem] border border-gray-100 bg-[#fafafa] p-6"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6">
        <div class="border-b border-gray-200">
          <div class="flex flex-wrap gap-x-8 gap-y-3">
            <button
              v-for="tab in productTabs"
              :key="tab.key"
              type="button"
              class="border-b-[3px] px-1 pb-5 text-lg font-black transition"
              :class="activeProductTab === tab.key
                ? 'border-black text-black'
                : 'border-transparent text-gray-400 hover:text-gray-700'"
              @click="activeProductTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="pt-10 md:min-h-[34rem]">
          <div v-if="activeProductTab === 'specs'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ specsIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Onderdeel</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Inhoud</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in specsRows"
                    :key="row.label"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.label }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.value }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-600">
                      {{ row.note }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'os'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ osIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Laag</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Status</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Beschrijving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in osRows"
                    :key="row.layer"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.layer }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.status }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-600">
                      {{ row.description }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'models'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ modelsIntro }}
            </p>

            <div class="mt-8 overflow-x-auto rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <table class="w-full min-w-[600px] border-collapse text-left">
                <thead class="bg-[#fafafa]">
                  <tr>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Model type</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Model</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Standaard</th>
                    <th class="border-b border-gray-200 px-5 py-4 text-base font-black text-gray-900">Uitbreidbaar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in modelRows"
                    :key="`${row.type}-${row.name}`"
                    class="odd:bg-[#f7f7f7]"
                  >
                    <td class="px-5 py-4 text-base font-medium text-gray-800">
                      {{ row.type }}
                    </td>
                    <td class="px-5 py-4 text-base text-gray-700">
                      {{ row.name }}
                    </td>
                    <td class="px-5 py-4 text-base font-semibold" :class="row.default ? 'text-green-700' : 'text-red-500'">
                      {{ row.default ? 'Ja' : 'Nee' }}
                    </td>
                    <td class="px-5 py-4 text-base font-semibold" :class="row.expandable ? 'text-green-700' : 'text-red-500'">
                      {{ row.expandable ? 'Ja' : 'Nee' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeProductTab === 'personalization'">
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ personalizationIntro }}
            </p>

            <div class="mt-8 grid gap-5 md:grid-cols-2">
              <article
                v-for="item in personalizationItems"
                :key="item.title"
                class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ item.title }}
                </h3>
                <ul class="mt-4 space-y-3 text-base leading-7 text-gray-600">
                  <li
                    v-for="point in item.points"
                    :key="point"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <div v-else>
            <p class="max-w-6xl text-lg leading-9 text-gray-600">
              {{ installationIntro }}
            </p>

            <div class="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <article class="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
                <h3 class="text-2xl font-black text-gray-900">
                  Wat we rondom installatie kunnen betekenen
                </h3>
                <ul class="mt-5 space-y-3 text-base leading-7 text-gray-600">
                  <li
                    v-for="point in installationPoints"
                    :key="point"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </article>

              <article class="rounded-[2rem] bg-[#212121] p-7 text-white shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                  Diensten
                </p>
                <h3 class="mt-4 text-2xl font-black">
                  Voor alle info over wat wij kunnen betekenen
                </h3>
                <p class="mt-4 text-base leading-8 text-gray-300">
                  Bekijk de dienstenpagina voor installatie, uitbreiding, consultancy, SLA en andere vormen van begeleiding rond producten van AITJE.
                </p>
                <NuxtLink
                  to="/diensten"
                  class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Bekijk diensten
                </NuxtLink>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6">
        <div>
          <div class="grid gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
            <div class="grid gap-6">
              <article
                v-for="value in valueColumns.left"
                :key="value.title"
                class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ value.title }}
                </h3>
                <p class="mt-4 text-sm leading-7 text-gray-600">
                  {{ value.text }}
                </p>
              </article>
            </div>

            <article class="rounded-[2.75rem] border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
              <img
                src="/images/aitje-logo.png"
                alt="AITJE logo"
                class="mx-auto h-24 w-auto object-contain"
              />
              <p class="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Onze visie
              </p>
              <h3 class="mt-3 text-4xl font-black text-gray-900">
                AI moet voor jouw organisatie werken, niet andersom
              </h3>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
                <p>
                  AI is niet meer weg te denken. Agents, LLM&apos;s, beeldgeneratie en videogeneratie
                  gaan een steeds grotere rol spelen in hoe organisaties werken.
                </p>
                <p>
                  Onze visie is dat je die ontwikkeling beter op je eigen systemen kunt voorbereiden,
                  zonder volledige afhankelijkheid van het buitenland, Big Tech of externe platformen.
                </p>
                <p>
                  Daarom kijken we niet alleen naar wat technisch mogelijk is, maar vooral naar wat
                  bruikbaar, verantwoord en werkbaar blijft. De nieuwste tool is niet automatisch de juiste tool.
                </p>
              </div>
            </article>

            <div class="grid gap-6">
              <article
                v-for="value in valueColumns.right"
                :key="value.title"
                class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <h3 class="text-2xl font-black text-gray-900">
                  {{ value.title }}
                </h3>
                <p class="mt-4 text-sm leading-7 text-gray-600">
                  {{ value.text }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div class="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article class="rounded-[2.5rem] bg-[#212121] px-8 py-10 text-white lg:px-10">
            <div class="mx-auto flex max-w-2xl flex-col justify-center">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Prijs & volgende stap
              </p>
              <h2 class="mt-3 text-4xl font-black">
                Vraag een prijslijst of offerte aan
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                Producten, diensten en SLA zijn bewust niet uitgewerkt als losse
                prijsblokjes op de pagina. We houden de site helder en sturen door
                naar een prijslijst, offerte of kennismaking zodra de vraag concreet is.
              </p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  to="/contact?onderwerp=prijslijst"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Prijslijst aanvragen
                </NuxtLink>
                <NuxtLink
                  to="/contact?onderwerp=offerte"
                  class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Offerte aanvragen
                </NuxtLink>
              </div>
            </div>
          </article>

          <article class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/aitje-product.png"
              alt="AITJE producten en diensten"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                Waarom dit smaller is
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Minder grootspraak, meer focus
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Duidelijker onderscheid tussen product, dienst en custom route.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Betere aansluiting op organisaties die geen vaag maatwerkverhaal zoeken.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Een geloofwaardiger site waarin begeleiding de productlijn versterkt.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Leaf, PlugZap, Sparkles } from "lucide-vue-next";
import { productCatalogV2, productStatusLabel } from "@/data/productCatalogV2";

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const unavailableSlugs = new Set(["aitje-notulist", "aitje-prepper", "aitje-manager"]);

if (unavailableSlugs.has(slug.value)) {
  await navigateTo("/producten", { redirectCode: 302 });
}

const product = computed(() => productCatalogV2.nl.products.find((entry) => entry.slug === slug.value));

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Pagina niet gevonden" });
}

const statusLabel = computed(() => {
  const customLabels: Record<string, string> = {
    "aitje-assistent": "Lokale AI",
    "aitje-custom": "Custom AI",
  };

  return customLabels[slug.value] ?? productStatusLabel.nl[product.value!.status];
});
const heroImage = computed(() => {
  const mapping: Record<string, string> = {
    "aitje-assistent": "/images/aitje-cubes.png",
    "aitje-custom": "/images/custom-suited.png",
    "aitje-notulist": "/images/spraakmemowhatsapp.png",
    "aitje-prepper": "/images/ei-internet.png",
    "aitje-manager": "/images/aitje-os-1.png",
    "aitje-coder": "/images/aitje-product.png",
  };
  return mapping[slug.value] ?? "/images/aitje-product.png";
});
const primaryCta = computed(() => {
  if (slug.value === "aitje-custom") return "/contact?onderwerp=offerte";
  if (slug.value === "aitje-manager") return "/contact?onderwerp=kennismaking";
  if (slug.value === "aitje-coder") return "/contact?onderwerp=interesse-aitje-coder";
  return "/contact?onderwerp=demo";
});
const useCasesRoute = "/use-cases";

const heroFacts = computed(() => [
  { label: "Publiek", value: product.value!.audience },
  { label: "Use cases", value: `${product.value!.useCases.length} concrete richtingen` },
  {
    label: "Modules",
    value: product.value!.modules?.length ? `${product.value!.modules.length} gekoppelde onderdelen` : "Standalone propositie",
  },
]);

const introSection = computed(() => ({
  kicker: product.value!.status === "available" ? "Product" : "In ontwikkeling",
  title: product.value!.title,
  text: product.value!.intro,
}));

const blackSection = computed(() => ({
  kicker: product.value!.status === "available" ? "Product" : "Richting",
  title: product.value!.title,
  subtitle: product.value!.summary,
  paragraph: product.value!.intro,
}));

const productTabs = [
  { key: "specs", label: "Specs" },
  { key: "os", label: "OS" },
  { key: "models", label: "Models" },
  { key: "personalization", label: "Personalisatie" },
  { key: "installation", label: "Ondersteuning" },
] as const;

const activeProductTab = ref<(typeof productTabs)[number]["key"]>("specs");

const specsIntro = computed(() =>
  `${product.value!.title} is opgezet als een duidelijke productlaag binnen AITJE. Onderstaand zie je welke onderdelen, inzet en rol daarbij horen.`
);

const specsRows = computed(() => [
  {
    label: "Status",
    value: statusLabel.value,
    note: product.value!.status === "available" ? "Direct inzetbaar voor trajecten" : "Nog niet live als standaardproduct",
  },
  {
    label: "Doelgroep",
    value: product.value!.audience,
    note: "Primaire organisatievorm waar dit product op gericht is",
  },
  {
    label: "Samenvatting",
    value: product.value!.summary,
    note: "Kern van de propositie",
  },
  {
    label: "Use cases",
    value: product.value!.useCases.join(", "),
    note: "Voorbeelden van praktische inzet",
  },
]);

const osIntro = computed(() =>
  `Binnen AITJE kijken we niet alleen naar een losse interface, maar naar de hele laag eromheen: beheer, toegang, workflows en de manier waarop dit product in de organisatie landt.`
);

const osRows = computed(() => {
  const moduleRows = product.value!.modules?.map((module) => ({
    layer: module.title,
    status: "Actief onderdeel",
    description: module.summary,
  })) ?? [];

  return [
    {
      layer: "Beheerlaag",
      status: "Ingericht per traject",
      description: `Aansluitend op ${product.value!.title}, rechten, gebruik en praktische inrichting.`,
    },
    {
      layer: "Workflowlaag",
      status: "Afhankelijk van inzet",
      description: product.value!.highlights[0] ?? product.value!.summary,
    },
    ...moduleRows,
  ];
});

const modelsIntro = computed(() =>
  `Niet elk product vraagt dezelfde modelmix. Deze tabel laat zien welke modelrichtingen logisch aansluiten op ${product.value!.title}.`
);

const modelRows = computed(() => [
  {
    type: "Kennis & chat",
    name: "Llama / Qwen instruct-modellen",
    default: slug.value === "aitje-assistent",
    expandable: true,
  },
  {
    type: "Document & workflow",
    name: "Samenvatten, structureren en extraction-routes",
    default: true,
    expandable: true,
  },
  {
    type: "Speech / intake",
    name: "Transcriptie- of intakegerichte modellen",
    default: slug.value !== "aitje-assistent",
    expandable: true,
  },
  {
    type: "Vision / multimodaal",
    name: "Beeld- of camera-ondersteuning waar relevant",
    default: false,
    expandable: slug.value !== "aitje-custom",
  },
]);

const personalizationIntro = computed(() =>
  `Personalisatie zit niet alleen in styling, maar vooral in rechten, bronnen, workflowstappen en output. Dit zijn de belangrijkste richtingen waarin ${product.value!.title} aangepast kan worden.`
);

const personalizationItems = computed(() => [
  {
    title: "Inrichting",
    points: [
      "Toegang, rollen en gebruik afstemmen op team of organisatie",
      "Bronnen, documenten of context toevoegen per traject",
      "Werkflows laten aansluiten op bestaande processen",
    ],
  },
  {
    title: "Output",
    points: [
      "Samenvatting, transcript of gestructureerde output per situatie",
      "Koppeling naar eigen app, site of interne omgeving waar nodig",
      "Instelbare vorm voor terugkoppeling, opvolging of verwerking",
    ],
  },
]);

const installationIntro = computed(() =>
  `Een product van AITJE staat niet los van inrichting en overdracht. Rond ${product.value!.title} kunnen we helpen met installatie, afstemming en praktische ingebruikname.`
);

const installationPoints = computed(() => [
  `Installatie en basisinrichting van ${product.value!.title} in jullie omgeving`,
  "Afstemming van rechten, toegang en gebruik per team of organisatie",
  "Koppelingen, kennisbronnen en workflowstappen praktisch inrichten",
  "Overdracht en begeleiding zodat het product ook echt gebruikt wordt",
]);

const introCards = [
  {
    badge: "Strategie",
    title: "Niet alles tegelijk",
    description:
      "We helpen eerst bepalen wat logisch is, voordat er gebouwd of uitgebreid wordt.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Alleen als standaard niet past",
    description:
      "AITJE Custom blijft bestaan, maar als gerichte route in plaats van een breed maatwerklabel. Kleiner en duidelijker.",
    icon: Sparkles,
  },
  {
    badge: "Continuiteit",
    title: "Regie en continuiteit",
    description:
      "De focus ligt op meer grip op AI-gebruik, minder afhankelijkheid en keuzes die op lange termijn houdbaar zijn.",
    icon: Leaf,
  },
];

const values = [
  {
    title: "Helderheid boven jargon",
    text: "We willen dat organisaties snel begrijpen wat iets doet, waarom het relevant is en wanneer het zinvol is.",
  },
  {
    title: "Regie boven afhankelijkheid",
    text: "We zoeken steeds naar manieren om data, kennis en AI-gebruik minder kwetsbaar te maken voor externe keuzes.",
  },
  {
    title: "Stabiliteit boven hype",
    text: "Niet elke trend verdient een plek in een organisatie. We kiezen liever iets dat werkt en houdbaar blijft.",
  },
  {
    title: "Partnerschap boven losse verkoop",
    text: "We willen niet alleen iets neerzetten, maar ook meedenken over hoe het in de praktijk blijft werken.",
  },
];

const valueColumns = {
  left: values.slice(0, 2),
  right: values.slice(2, 4),
};

const beliefCards = [
  {
    title: "De markt verandert snel",
    text: "AI wordt een vast onderdeel van moderne organisaties. Agents, LLM's, beeldgeneratie en videogeneratie gaan processen veranderen, terwijl de partijen daarachter hun investeringen uiteindelijk willen terugverdienen.",
  },
  {
    title: "Afhankelijkheid maakt kwetsbaar",
    text: "Externe AI-kosten kunnen fors stijgen, platformkeuzes van derden raken direct jouw operatie en volledige afhankelijkheid maakt organisaties op termijn kwetsbaar.",
  },
  {
    title: "Software, hardware en begeleiding",
    text: "AITJE biedt hardware en software om jouw organisatie toekomstbestendig met AI te laten werken. Niet als hype, maar als praktische infrastructuur waarmee jij grip houdt op data, kosten en continuiteit.",
  },
  {
    title: "Praktisch inzetbaar in de organisatie",
    text: "Lokale toegang tot documenten en kennis via een LLM, praktische inzet voor teams en bedrijfsprocessen en ondersteuning bij integratie op een veilige manier.",
  },
];
</script>
