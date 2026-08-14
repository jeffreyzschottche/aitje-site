<template>
  <div class="bg-[#f6f3ea] text-[#161616]">
    <SiteNavigation />

    <main class="pt-24">
      <!-- Hero: wat het is en wat je krijgt, meteen -->
      <section class="bg-[#101010] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <!-- Geen automatische kenniscentrum-links in de hero: die leiden af van de
               eerste indruk en van de twee knoppen eronder. -->
          <div data-no-knowledge-links>
            <p class="inline-flex w-fit items-center rounded-full border border-[#facc15]/40 bg-[#facc15] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_28px_rgba(250,204,21,0.18)]">
              {{ t.hero.badge }}
            </p>
            <h1 class="mt-4 max-w-4xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              {{ t.hero.title }}
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              {{ t.hero.text }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink
                :to="routePath('/contact?onderwerp=interesse-aitje-coder')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                {{ t.hero.primaryCta }}
              </NuxtLink>
              <a
                href="#op-de-hoogte"
                class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/8"
              >
                {{ t.hero.secondaryCta }}
              </a>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="fact in t.hero.facts"
                :key="fact.label"
                class="border-l border-[#facc15]/50 pl-4"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  {{ fact.label }}
                </p>
                <p class="mt-2 text-sm leading-6 text-white/84">
                  {{ fact.value }}
                </p>
              </div>
            </div>
          </div>

          <figure>
            <ScreenshotSlot
              :src="media.dashboard"
              :alt="t.hero.imageAlt"
              :caption="t.hero.imageCaption"
              :icon="LayoutDashboard"
              :zoom-label="t.mediaActions.zoomLabel"
              :close-label="t.mediaActions.closeLabel"
              :pending-label="t.mediaActions.pendingLabel"
              frame-class="rounded-[2rem] border border-white/10 bg-[#161616] text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              image-class="aspect-[16/10] w-full object-contain"
              placeholder-class="min-h-[20rem]"
              loading="eager"
              fetchpriority="high"
            />
          </figure>
        </div>
      </section>

      <!-- Dit krijg je: de levering, in vier blokken -->
      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.delivery.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.delivery.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.delivery.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="item in t.delivery.items"
              :key="item.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161616] text-[#facc15]">
                <component :is="item.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-xl font-black text-gray-950">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ item.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Drie manieren van werken -->
      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.ways.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.ways.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.ways.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-3">
            <article
              v-for="(way, index) in t.ways.items"
              :key="way.title"
              class="flex flex-col rounded-[2.5rem] border border-gray-200 bg-[#fbfaf6] p-6"
            >
              <div class="flex items-center gap-3">
                <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#facc15] text-lg font-black text-black">
                  {{ index + 1 }}
                </span>
                <span class="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f7200]">
                  {{ way.tag }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-black text-gray-950">
                {{ way.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ way.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Grip: de goedkeuringsroute, het kernargument voor een manager -->
      <section class="bg-[#161616] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ t.control.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black">
              {{ t.control.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-white/76">
              {{ t.control.text }}
            </p>
          </div>

          <figure class="mt-8">
            <ScreenshotSlot
              :src="media.diffReview"
              :alt="t.control.imageAlt"
              :caption="t.control.imageCaption"
              :icon="GitPullRequest"
              :zoom-label="t.mediaActions.zoomLabel"
              :close-label="t.mediaActions.closeLabel"
              :pending-label="t.mediaActions.pendingLabel"
              frame-class="rounded-[2rem] border border-white/10 bg-[#101010] text-white"
              image-class="aspect-[16/9] w-full object-contain"
              placeholder-class="min-h-[18rem]"
            />
          </figure>

          <ol class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <li
              v-for="(step, index) in t.control.steps"
              :key="step.title"
              class="rounded-[1.5rem] border border-white/10 bg-white/6 p-5"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#facc15]">
                {{ String(index + 1).padStart(2, "0") }}
              </p>
              <h3 class="mt-3 text-base font-black">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-white/70">
                {{ step.text }}
              </p>
            </li>
          </ol>

          <p class="mt-8 max-w-3xl text-sm leading-7 text-white/60">
            {{ t.control.note }}
          </p>
        </div>
      </section>

      <!-- Regie en privacy -->
      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.trust.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.trust.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.trust.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="item in t.trust.items"
              :key="item.title"
              class="rounded-[2.5rem] border border-gray-200 bg-[#fbfaf6] p-6"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#8f7200] shadow-sm">
                <component :is="item.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-xl font-black text-gray-950">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ item.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Kosten zonder bedragen -->
      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.cost.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.cost.title }}
            </h2>
            <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
              <p v-for="paragraph in t.cost.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
            <NuxtLink
              :to="routePath('/contact?onderwerp=prijslijst')"
              class="mt-7 inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:text-[#facc15]"
            >
              {{ t.cost.cta }}
            </NuxtLink>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="point in t.cost.points"
              :key="point"
              class="flex min-h-20 items-center gap-3 rounded-[1.5rem] border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700"
            >
              <CheckCircle2 class="h-5 w-5 shrink-0 text-[#8f7200]" />
              <span>{{ point }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Integraties -->
      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.integrations.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.integrations.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.integrations.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="group in t.integrations.groups"
              :key="group.title"
              class="rounded-[2.5rem] border border-gray-200 bg-[#fbfaf6] p-6"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161616] text-[#facc15]">
                <component :is="group.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-lg font-black text-gray-950">
                {{ group.title }}
              </h3>
              <ul class="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                <li
                  v-for="entry in group.items"
                  :key="entry"
                  class="flex items-start gap-3"
                >
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>{{ entry }}</span>
                </li>
              </ul>
            </article>
          </div>

          <p class="mt-6 max-w-3xl text-sm leading-7 text-gray-500">
            {{ t.integrations.note }}
          </p>
        </div>
      </section>

      <!-- Varianten -->
      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.variants.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.variants.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.variants.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-2">
            <article
              v-for="variant in t.variants.items"
              :key="variant.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161616] text-[#facc15]">
                <component :is="variant.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-2xl font-black text-gray-950">
                {{ variant.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ variant.text }}
              </p>
              <ul class="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                <li
                  v-for="point in variant.points"
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
      </section>

      <!-- Waar we nu staan: eerlijke status -->
      <section class="bg-[#101010] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ t.status.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black">
              {{ t.status.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-white/76">
              {{ t.status.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-3">
            <article
              v-for="column in t.status.columns"
              :key="column.title"
              class="rounded-[2rem] border border-white/10 bg-white/6 p-6"
            >
              <h3 class="text-lg font-black text-white">
                {{ column.title }}
              </h3>
              <ul class="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li
                  v-for="entry in column.items"
                  :key="entry"
                  class="flex items-start gap-3"
                >
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>{{ entry }}</span>
                </li>
              </ul>
            </article>
          </div>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NuxtLink
              :to="routePath('/use-cases')"
              class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/8"
            >
              {{ t.status.useCasesCta }}
            </NuxtLink>
            <NuxtLink
              :to="routePath('/roadmap')"
              class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/8"
            >
              {{ t.status.roadmapCta }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-4xl">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
            {{ t.faq.kicker }}
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-950">
            {{ t.faq.title }}
          </h2>

          <div class="mt-8 space-y-3">
            <details
              v-for="item in t.faq.items"
              :key="item.question"
              class="rounded-2xl border border-gray-200 bg-[#fbfaf6] p-5"
            >
              <summary class="cursor-pointer text-base font-semibold text-gray-900">
                {{ item.question }}
              </summary>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ item.answer }}
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>

    <!-- Afsluitende CTA met wachtlijst -->
    <section id="op-de-hoogte" class="bg-[#facc15] px-6 py-20" data-no-knowledge-links>
      <div class="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] bg-black px-8 py-10 text-white lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-10">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            {{ t.cta.eyebrow }}
          </p>
          <h2 class="mt-3 text-4xl font-black">
            {{ t.cta.title }}
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-8 text-gray-300">
            {{ t.cta.text }}
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NuxtLink
              :to="routePath('/contact?onderwerp=interesse-aitje-coder')"
              class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black transition hover:bg-white"
            >
              {{ t.cta.primaryCta }}
            </NuxtLink>
            <NuxtLink
              :to="routePath('/contact?onderwerp=belverzoek')"
              class="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
            >
              {{ t.cta.secondaryCta }}
            </NuxtLink>
          </div>
        </div>

        <form
          class="rounded-[2rem] border border-white/12 bg-white/6 p-6"
          @submit.prevent="submitWaitlist"
        >
          <label class="text-sm font-semibold text-white" for="coder-waitlist-email">
            {{ t.cta.waitlist.label }}
          </label>
          <p class="mt-2 text-sm leading-6 text-gray-400">
            {{ t.cta.waitlist.text }}
          </p>
          <input
            id="coder-waitlist-email"
            v-model="waitlistEmail"
            type="email"
            inputmode="email"
            autocomplete="email"
            :placeholder="t.cta.waitlist.placeholder"
            class="mt-4 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-gray-500 focus:border-[#facc15]"
          />

          <p v-if="waitlistError" class="mt-3 text-sm font-medium text-red-400">
            {{ waitlistError }}
          </p>
          <p v-if="waitlistSuccess" class="mt-3 text-sm font-medium text-[#facc15]">
            {{ waitlistSuccess }}
          </p>

          <button
            type="submit"
            :disabled="waitlistSubmitting"
            class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ waitlistSubmitting ? t.cta.waitlist.busy : t.cta.waitlist.button }}
          </button>
        </form>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Bell,
  Bot,
  CheckCircle2,
  Eye,
  GitPullRequest,
  Github,
  LayoutDashboard,
  LifeBuoy,
  ListChecks,
  Lock,
  Power,
  ScrollText,
  Server,
  SquareTerminal,
  Users,
  UserRound,
} from "lucide-vue-next";
import { computed, ref } from "vue";

type LocaleKey = "nl" | "en";

const props = defineProps<{
  locale: LocaleKey;
}>();

const { localePath } = useSiteLocale();

const routePath = (path: string) => localePath(path, props.locale);

// Screenshots volgen later. Zolang een pad leeg is, toont ScreenshotSlot een nette
// placeholder met het bijschrift; invullen is straks genoeg om hem te laten verschijnen.
const media = {
  dashboard: "",
  diffReview: "",
};

const nl = {
  mediaActions: {
    zoomLabel: "Vergroot",
    closeLabel: "Sluiten",
    pendingLabel: "Screenshot volgt",
  },
  hero: {
    badge: "In ontwikkeling · pilotplekken open",
    title: "AITJE Coder",
    text:
      "Eén apparaat in je eigen netwerk waarmee je team AI inzet bij softwareontwikkeling. Je developers werken door in de editor die ze al gebruiken, en grotere klussen zet je uit bij een agent die zelfstandig aan de slag gaat. Je code en je vragen blijven binnen je eigen omgeving.",
    primaryCta: "Word pilotklant",
    secondaryCta: "Houd me op de hoogte",
    imageAlt: "Het overzichtsscherm van AITJE Coder",
    imageCaption: "Overzicht: lopende taken, wat op beoordeling wacht en wat je team verbruikt",
    facts: [
      {
        label: "Op je eigen netwerk",
        value: "Het apparaat staat bij jou. Vragen en code gaan niet naar een externe AI-dienst.",
      },
      {
        label: "Geen abonnement per developer",
        value: "Geen licenties die meegroeien met je team en geen afrekening per vraag.",
      },
      {
        label: "Jij houdt de regie",
        value: "Niets komt in je codebase zonder dat een mens de wijzigingen heeft goedgekeurd.",
      },
    ],
  },
  delivery: {
    kicker: "Wat je krijgt",
    title: "Vier dingen, geleverd als één werkend geheel",
    text:
      "AITJE Coder is geen abonnement en geen losse tool die je zelf moet samenstellen. Je krijgt hardware, software, begeleiding en support als één pakket, geïnstalleerd en werkend opgeleverd.",
    items: [
      {
        icon: Server,
        title: "Het apparaat",
        text: "Een compacte computer die je in de meterkast of serverruimte zet. Wij leveren hem ingericht, met de AI-modellen er al op. Aansluiten op stroom en netwerk is genoeg.",
      },
      {
        icon: Bot,
        title: "De codeer-agent",
        text: "Je beschrijft een klus in gewone taal. De agent leest de code, voert het werk uit in een afgeschermde kopie en levert het resultaat aan ter beoordeling.",
      },
      {
        icon: LayoutDashboard,
        title: "Het beheerpaneel",
        text: "Een webomgeving op je eigen netwerk waarin je taken uitzet, meekijkt, wijzigingen beoordeelt en ziet wie waar mee bezig is.",
      },
      {
        icon: LifeBuoy,
        title: "Onboarding en support",
        text: "Wij zetten hem op, helpen je team op weg en blijven bereikbaar. Support kan alleen meekijken op het moment dat jij daar toestemming voor geeft.",
      },
    ],
  },
  ways: {
    kicker: "Hoe je team het gebruikt",
    title: "Drie manieren, van meedenken tot uitbesteden",
    text:
      "Je hoeft niet in één keer om. De meeste teams beginnen links en schuiven op naar rechts zodra ze vertrouwen hebben in wat de agent oplevert.",
    items: [
      {
        tag: "Meedenken",
        title: "In de editor die je al gebruikt",
        text: "Je developers richten hun bestaande tools op het apparaat in plaats van op een clouddienst. Ze merken vooral dat het sneller is en dat er niets naar buiten gaat.",
      },
      {
        tag: "Meewerken",
        title: "Samen aan een klus",
        text: "Dezelfde tools, maar dan zelfstandiger: de developer geeft een opdracht, de AI voert stappen uit en de developer stuurt bij. Er wordt niets opgeslagen buiten je netwerk.",
      },
      {
        tag: "Uitbesteden",
        title: "Taken uitzetten via het beheerpaneel",
        text: "Grotere of terugkerende klussen zet je als taak weg. De agent werkt hem zelfstandig af, ook 's nachts of op vaste momenten, en levert het resultaat aan ter beoordeling.",
      },
    ],
  },
  control: {
    kicker: "Grip",
    title: "Er verandert niets aan je code zonder dat iemand ja zegt",
    text:
      "Dit is het verschil tussen een handige tool en iets dat je durft los te laten op je eigen repositories. Elke taak volgt dezelfde route, en die route eindigt altijd bij een mens.",
    imageAlt: "Het beoordelingsscherm van AITJE Coder met wijzigingen per bestand",
    imageCaption: "Beoordelen per bestand, met de mogelijkheid om per bestand opmerkingen achter te laten",
    steps: [
      {
        title: "Taak indienen",
        text: "Iemand beschrijft de klus, of een terugkerende taak start vanzelf op een vast moment.",
      },
      {
        title: "Afgeschermde kopie",
        text: "De agent werkt in een aparte kopie van de code, niet in de versie waar je team mee bezig is.",
      },
      {
        title: "Alles wordt vastgelegd",
        text: "Elke wijziging, elk uitgevoerd commando en elke stap is achteraf terug te lezen.",
      },
      {
        title: "Beoordelen",
        text: "Een beoordelaar bekijkt de wijzigingen per bestand en keurt goed of af, met opmerkingen.",
      },
      {
        title: "Pas dan een pull request",
        text: "Na goedkeuring gaat er een pull request open in je eigen Git-omgeving. Je normale proces gaat gewoon door.",
      },
    ],
    note:
      "Rollen bepalen wie wat mag: een developer dient taken in, een beoordelaar keurt goed of af, en een beheerder regelt instellingen en toegang. Wie geen beoordelaar is, kan niets doorzetten.",
  },
  trust: {
    kicker: "Regie en privacy",
    title: "Niets gaat naar buiten zonder dat je het weet",
    text:
      "Voor de meeste organisaties is dit de reden om lokaal te draaien. Broncode is bedrijfseigendom, en bij een clouddienst geef je een deel van dat vertrouwen uit handen.",
    items: [
      {
        icon: Lock,
        title: "Je code blijft bij jou",
        text: "De AI-modellen draaien op het apparaat zelf. Je code en je vragen worden in de standaardopstelling niet naar een externe dienst gestuurd.",
      },
      {
        icon: Users,
        title: "Rollen en rechten",
        text: "Developer, beoordelaar of beheerder. Zo bepaal je zelf wie taken mag indienen, wie mag goedkeuren en wie bij de instellingen kan.",
      },
      {
        icon: ScrollText,
        title: "Onwijzigbaar logboek",
        text: "Wie wat wanneer deed staat vast en kan niet achteraf worden weggehaald. Handig bij audits en bij de vraag hoe iets in de code terecht is gekomen.",
      },
      {
        icon: Eye,
        title: "Geen stille statistieken",
        text: "Meesturen van gebruiksgegevens staat standaard uit. Zet je het aan, dan kun je vooraf precies inzien wat er verstuurd zou worden.",
      },
      {
        icon: Power,
        title: "Support alleen met toestemming",
        text: "Onze engineers kunnen alleen meekijken als jij dat toestaat. Elke sessie wordt gelogd en er is een noodknop die de verbinding direct verbreekt.",
      },
      {
        icon: CheckCircle2,
        title: "AVG in orde",
        text: "Jij bent verwerkingsverantwoordelijke over je eigen data. Er hoort een verwerkersovereenkomst naar Nederlands recht bij.",
      },
    ],
  },
  cost: {
    kicker: "Kosten",
    title: "Geen abonnement per developer",
    paragraphs: [
      "Bij de bekende AI-codeerdiensten betaal je per developer per maand, en vaak nog extra zodra iemand veel gebruikt. Groeit je team, dan groeit de rekening mee. Draait er een zware taak, dan zie je dat terug op de factuur.",
      "AITJE Coder werkt anders. Het apparaat staat bij jou en draait de modellen zelf. Of er nu drie of dertig taken doorheen gaan, dat verandert niets aan wat het kost.",
      "Wat je wél ziet is verbruik: hoeveel er per developer, per project en per taak doorheen gaat. Niet om af te rekenen, maar om te weten waar de tijd en de capaciteit heen gaan.",
    ],
    cta: "Vraag de prijslijst aan",
    points: [
      "Geen kosten per vraag of per taak",
      "Geen licenties die meegroeien met je team",
      "Geen verrassing na een drukke maand",
      "Inzicht in verbruik per developer en per project",
      "Werkt door als je internetverbinding hapert",
      "Blijft werken als een leverancier zijn prijzen verandert",
    ],
  },
  integrations: {
    kicker: "Aansluiting",
    title: "Werkt met wat je al hebt",
    text:
      "Je hoeft je manier van werken niet te veranderen. AITJE Coder sluit aan op de omgeving die je team al gebruikt, en levert het werk af op de plek waar je het verwacht.",
    groups: [
      {
        icon: Github,
        title: "Je Git-omgeving",
        items: ["GitHub", "GitLab", "Gitea", "Pull requests in je eigen omgeving"],
      },
      {
        icon: ListChecks,
        title: "Je issues",
        items: ["GitHub Issues", "Linear", "Automatisch starten op een label", "Vaste momenten in de week"],
      },
      {
        icon: Bell,
        title: "Je meldingen",
        items: ["Slack", "Microsoft Teams", "Mattermost", "E-mail"],
      },
      {
        icon: SquareTerminal,
        title: "De tools van je developers",
        items: [
          "VS Code met Continue.dev of Cline",
          "Aider en Zed",
          "Claude Code",
          "GitHub Copilot met eigen model",
        ],
      },
    ],
    note:
      "Eerlijk erbij: niet elke tool laat een eigen server toe. Cursor werkt alleen voor chat, omdat de agentfunctie daar bewust dichtgezet is. We nemen dit soort dingen vooraf met je door, zodat niemand achteraf voor een verrassing staat.",
  },
  variants: {
    kicker: "Varianten",
    title: "Solo of team",
    text:
      "Twee formaten. Het verschil zit vooral in hoeveel er tegelijk kan draaien, niet in wat je kunt doen.",
    items: [
      {
        icon: UserRound,
        title: "Voor een enkele developer",
        text: "De compacte variant, bedoeld voor een zelfstandige developer of een klein bureau dat wil beginnen zonder grote investering.",
        points: [
          "Eén taak tegelijk",
          "Dezelfde functies als de teamvariant",
          "Past op een bureau",
          "Ook prima als proefopstelling voor een groter team",
        ],
      },
      {
        icon: Users,
        title: "Voor een team",
        text: "De ruimere variant, voor teams waar meerdere developers naast elkaar werken en er ook nog taken op de achtergrond doorlopen.",
        points: [
          "Meerdere taken tegelijk",
          "Meerdere projecten en repositories naast elkaar",
          "Ruimte voor grotere modellen",
          "Interactief werk krijgt voorrang op achtergrondtaken",
        ],
      },
    ],
  },
  status: {
    kicker: "Eerlijk over de stand van zaken",
    title: "Waar we nu staan",
    text:
      "AITJE Coder is nog niet los te bestellen. De software is af en getest, en draait end-to-end op echte hardware. Wat rest is de laatste afronding en de eerste klanten die meedraaien. We vertellen liever precies wat er wel en niet klaar is dan dat je er later achter komt.",
    columns: [
      {
        title: "Werkt vandaag",
        items: [
          "Taken indienen, volgen en beoordelen",
          "Wijzigingen per bestand goedkeuren en een pull request openen",
          "Koppelingen met GitHub, GitLab en Gitea",
          "Rollen, logboek en meldingen",
          "Geplande en terugkerende taken",
        ],
      },
      {
        title: "Ronden we nog af",
        items: [
          "Automatische back-up en herstel",
          "Extra afscherming van opgeslagen toegangssleutels",
          "Strengere netwerkafscherming rond de agent",
          "Laatste metingen op de grotere teamvariant",
        ],
      },
      {
        title: "Doen we samen in de pilot",
        items: [
          "Opstellen en aansluiten op jouw omgeving",
          "Je team op weg helpen",
          "Meekijken welke taken in de praktijk werken",
          "Jouw ervaring gebruiken om de eerste versie scherp te krijgen",
        ],
      },
    ],
    useCasesCta: "Bekijk de use cases",
    roadmapCta: "Bekijk de roadmap",
  },
  faq: {
    kicker: "Veelgestelde vragen",
    title: "Wat een IT-verantwoordelijke meestal wil weten",
    items: [
      {
        question: "Wie kan onze broncode zien?",
        answer:
          "Alleen jij. De AI-modellen draaien op het apparaat in je eigen netwerk, dus je code en je vragen gaan in de standaardopstelling niet naar een externe partij. Onze support kan alleen meekijken als jij daar toestemming voor geeft, en dat wordt gelogd.",
      },
      {
        question: "Moeten onze developers hun vertrouwde tools inruilen?",
        answer:
          "Nee. Ze blijven werken in de editor die ze al gebruiken; die wijst alleen naar jullie eigen apparaat in plaats van naar een clouddienst. Het beheerpaneel is er daarnaast, voor het werk dat je liever uitbesteedt.",
      },
      {
        question: "Wat als het apparaat uitvalt?",
        answer:
          "Dan valt het AI-gedeelte weg, niet je ontwikkelwerk: je code staat gewoon in je eigen Git-omgeving. De onderdelen starten zichzelf opnieuw op na een storing, en via een SLA kunnen we onderhoud en ondersteuning vastleggen.",
      },
      {
        question: "Hoeveel beheer kost dit ons?",
        answer:
          "In de praktijk weinig. Het apparaat werkt na installatie zelfstandig, updates worden gecontroleerd geïnstalleerd en nooit tijdens kantooruren, en er zit een scherm op waarmee je basiszaken kunt regelen zonder browser.",
      },
      {
        question: "En als er over een half jaar een beter AI-model is?",
        answer:
          "Dan zet je dat erop. De modellen zitten niet vastgeklonken aan het product; welk model je gebruikt is een instelling. Je kunt zelfs dezelfde taak opnieuw draaien met een ander model en de resultaten naast elkaar leggen.",
      },
      {
        question: "Hoe begint een pilot?",
        answer:
          "Met een gesprek van een half uur over jullie situatie en wat je zou willen uitbesteden aan een agent. Past het, dan zetten we er samen één neer in je eigen omgeving en kiezen we een handvol echte taken om mee te beginnen.",
      },
    ],
  },
  cta: {
    eyebrow: "> Volgende stap",
    title: "Praat met ons over een pilot",
    text:
      "We zoeken een klein aantal organisaties die AITJE Coder in hun eigen omgeving willen draaien voordat we breed lanceren. Je krijgt vroeg toegang en directe invloed op wat er in de eerste versie komt.",
    primaryCta: "Plan een gesprek",
    secondaryCta: "Laat me terugbellen",
    waitlist: {
      label: "Nog niet toe aan een gesprek?",
      text: "Laat je e-mailadres achter, dan laten we het weten zodra AITJE Coder beschikbaar is. Verder sturen we je niets.",
      placeholder: "je@bedrijf.nl",
      button: "Houd me op de hoogte",
      busy: "Opslaan...",
      success: "Gelukt. We laten het weten zodra AITJE Coder beschikbaar is.",
      exists: "Je stond al op de lijst. We houden je op de hoogte.",
      errorEmpty: "Vul een e-mailadres in.",
      errorGeneric: "Opslaan mislukt. Probeer het later opnieuw.",
    },
  },
};

const en = {
  mediaActions: {
    zoomLabel: "Enlarge",
    closeLabel: "Close",
    pendingLabel: "Screenshot coming",
  },
  hero: {
    badge: "In development · pilot spots open",
    title: "AITJE Coder",
    text:
      "One box on your own network that lets your team use AI in software development. Your developers keep working in the editor they already use, and bigger jobs go to an agent that handles them on its own. Your code and your questions stay inside your own environment.",
    primaryCta: "Become a pilot customer",
    secondaryCta: "Keep me posted",
    imageAlt: "The overview screen of AITJE Coder",
    imageCaption: "Overview: running tasks, what is waiting for review and what your team is using",
    facts: [
      {
        label: "On your own network",
        value: "The box sits with you. Questions and code do not go to an external AI service.",
      },
      {
        label: "No per-developer subscription",
        value: "No licences that grow with your team and no charge per question.",
      },
      {
        label: "You stay in control",
        value: "Nothing enters your codebase until a person has approved the changes.",
      },
    ],
  },
  delivery: {
    kicker: "What you get",
    title: "Four things, delivered as one working whole",
    text:
      "AITJE Coder is not a subscription and not a loose tool you have to assemble yourself. You get hardware, software, guidance and support as one package, installed and working.",
    items: [
      {
        icon: Server,
        title: "The box",
        text: "A compact computer you put in the server cupboard. We deliver it set up, with the AI models already on it. Plugging in power and network is enough.",
      },
      {
        icon: Bot,
        title: "The coding agent",
        text: "You describe a job in plain language. The agent reads the code, does the work in a shielded copy and hands the result over for review.",
      },
      {
        icon: LayoutDashboard,
        title: "The management panel",
        text: "A web environment on your own network where you hand out tasks, follow along, review changes and see who is working on what.",
      },
      {
        icon: LifeBuoy,
        title: "Onboarding and support",
        text: "We set it up, get your team going and stay reachable. Support can only look along at the moment you allow it.",
      },
    ],
  },
  ways: {
    kicker: "How your team uses it",
    title: "Three ways, from assisting to handing over",
    text:
      "You do not have to switch all at once. Most teams start on the left and move right as soon as they trust what the agent delivers.",
    items: [
      {
        tag: "Assisting",
        title: "In the editor they already use",
        text: "Your developers point their existing tools at the box instead of at a cloud service. Mostly they notice it is faster and that nothing leaves the building.",
      },
      {
        tag: "Working along",
        title: "Together on a job",
        text: "The same tools, but more independent: the developer gives an instruction, the AI takes steps and the developer adjusts. Nothing is stored outside your network.",
      },
      {
        tag: "Handing over",
        title: "Tasks through the management panel",
        text: "Bigger or recurring jobs are handed over as a task. The agent works through it on its own, at night or at fixed times, and hands the result over for review.",
      },
    ],
  },
  control: {
    kicker: "Control",
    title: "Nothing changes in your code until someone says yes",
    text:
      "This is the difference between a handy tool and something you dare to let loose on your own repositories. Every task follows the same route, and that route always ends with a person.",
    imageAlt: "The review screen of AITJE Coder showing changes per file",
    imageCaption: "Review file by file, with room for a comment on each one",
    steps: [
      {
        title: "Submit a task",
        text: "Someone describes the job, or a recurring task starts by itself at a set moment.",
      },
      {
        title: "A shielded copy",
        text: "The agent works in a separate copy of the code, not in the version your team is working on.",
      },
      {
        title: "Everything is recorded",
        text: "Every change, every command run and every step can be read back afterwards.",
      },
      {
        title: "Review",
        text: "A reviewer goes through the changes file by file and approves or rejects, with comments.",
      },
      {
        title: "Only then a pull request",
        text: "After approval a pull request opens in your own Git environment. Your normal process simply continues.",
      },
    ],
    note:
      "Roles decide who may do what: a developer submits tasks, a reviewer approves or rejects, and an admin handles settings and access. Anyone who is not a reviewer cannot push anything through.",
  },
  trust: {
    kicker: "Control and privacy",
    title: "Nothing leaves without you knowing",
    text:
      "For most organizations this is the reason to run locally. Source code is company property, and with a cloud service you hand part of that trust over.",
    items: [
      {
        icon: Lock,
        title: "Your code stays with you",
        text: "The AI models run on the box itself. In the default setup your code and your questions are not sent to an external service.",
      },
      {
        icon: Users,
        title: "Roles and rights",
        text: "Developer, reviewer or admin. That is how you decide who may submit tasks, who may approve and who can reach the settings.",
      },
      {
        icon: ScrollText,
        title: "An unchangeable log",
        text: "Who did what and when is fixed and cannot be removed afterwards. Useful during audits and when you want to know how something got into the code.",
      },
      {
        icon: Eye,
        title: "No quiet statistics",
        text: "Sending usage data is off by default. If you turn it on, you can see beforehand exactly what would be sent.",
      },
      {
        icon: Power,
        title: "Support only with permission",
        text: "Our engineers can only look along if you allow it. Every session is logged and there is an emergency button that cuts the connection instantly.",
      },
      {
        icon: CheckCircle2,
        title: "GDPR in order",
        text: "You are the data controller for your own data. A processing agreement under Dutch law is included.",
      },
    ],
  },
  cost: {
    kicker: "Cost",
    title: "No per-developer subscription",
    paragraphs: [
      "With the well-known AI coding services you pay per developer per month, and often more as soon as someone uses it heavily. If your team grows, the bill grows with it. If a heavy task runs, you see it on the invoice.",
      "AITJE Coder works differently. The box sits with you and runs the models itself. Whether three or thirty tasks go through it changes nothing about what it costs.",
      "What you do see is usage: how much goes through per developer, per project and per task. Not to be billed for, but to know where your time and capacity are going.",
    ],
    cta: "Request the price list",
    points: [
      "No cost per question or per task",
      "No licences that grow with your team",
      "No surprise after a busy month",
      "Insight into usage per developer and per project",
      "Keeps working when your internet connection stutters",
      "Keeps working when a supplier changes its prices",
    ],
  },
  integrations: {
    kicker: "Fits in",
    title: "Works with what you already have",
    text:
      "You do not have to change the way you work. AITJE Coder connects to the environment your team already uses, and delivers the work where you expect it.",
    groups: [
      {
        icon: Github,
        title: "Your Git environment",
        items: ["GitHub", "GitLab", "Gitea", "Pull requests in your own environment"],
      },
      {
        icon: ListChecks,
        title: "Your issues",
        items: ["GitHub Issues", "Linear", "Start automatically on a label", "Fixed moments in the week"],
      },
      {
        icon: Bell,
        title: "Your notifications",
        items: ["Slack", "Microsoft Teams", "Mattermost", "Email"],
      },
      {
        icon: SquareTerminal,
        title: "Your developers' tools",
        items: [
          "VS Code with Continue.dev or Cline",
          "Aider and Zed",
          "Claude Code",
          "GitHub Copilot with your own model",
        ],
      },
    ],
    note:
      "To be straight about it: not every tool allows a server of your own. Cursor only works for chat, because its agent function is deliberately closed off. We go through this kind of thing with you beforehand, so nobody is surprised later.",
  },
  variants: {
    kicker: "Variants",
    title: "Solo or team",
    text:
      "Two sizes. The difference is mostly in how much can run at the same time, not in what you can do.",
    items: [
      {
        icon: UserRound,
        title: "For a single developer",
        text: "The compact variant, meant for an independent developer or a small agency that wants to start without a large investment.",
        points: [
          "One task at a time",
          "The same functions as the team variant",
          "Fits on a desk",
          "Works well as a trial setup for a larger team too",
        ],
      },
      {
        icon: Users,
        title: "For a team",
        text: "The roomier variant, for teams where several developers work side by side and tasks also keep running in the background.",
        points: [
          "Several tasks at the same time",
          "Several projects and repositories side by side",
          "Room for larger models",
          "Interactive work takes priority over background tasks",
        ],
      },
    ],
  },
  status: {
    kicker: "Straight about where we are",
    title: "Where we stand today",
    text:
      "AITJE Coder cannot be ordered off the shelf yet. The software is finished and tested, and runs end to end on real hardware. What remains is the final polish and the first customers running along. We would rather tell you exactly what is and is not ready than have you find out later.",
    columns: [
      {
        title: "Works today",
        items: [
          "Submitting, following and reviewing tasks",
          "Approving changes per file and opening a pull request",
          "Connections to GitHub, GitLab and Gitea",
          "Roles, logging and notifications",
          "Scheduled and recurring tasks",
        ],
      },
      {
        title: "Still finishing",
        items: [
          "Automatic backup and restore",
          "Extra protection for stored access keys",
          "Stricter network isolation around the agent",
          "Final measurements on the larger team variant",
        ],
      },
      {
        title: "Together during the pilot",
        items: [
          "Setting it up and connecting it to your environment",
          "Getting your team going",
          "Seeing which tasks work in practice",
          "Using your experience to sharpen the first release",
        ],
      },
    ],
    useCasesCta: "See the use cases",
    roadmapCta: "See the roadmap",
  },
  faq: {
    kicker: "Frequently asked",
    title: "What an IT lead usually wants to know",
    items: [
      {
        question: "Who can see our source code?",
        answer:
          "Only you. The AI models run on the box on your own network, so in the default setup your code and your questions do not go to an outside party. Our support can only look along if you allow it, and that is logged.",
      },
      {
        question: "Do our developers have to give up their familiar tools?",
        answer:
          "No. They keep working in the editor they already use; it simply points at your own box instead of a cloud service. The management panel exists alongside that, for the work you would rather hand over.",
      },
      {
        question: "What if the box goes down?",
        answer:
          "Then the AI part drops away, not your development work: your code is in your own Git environment. The components restart themselves after a failure, and an SLA lets us put maintenance and support in writing.",
      },
      {
        question: "How much administration does this cost us?",
        answer:
          "In practice, little. The box runs on its own after installation, updates are installed in a controlled way and never during office hours, and there is a screen on the device itself for the basics without needing a browser.",
      },
      {
        question: "And if a better AI model comes out in six months?",
        answer:
          "Then you put it on. The models are not welded to the product; which model you use is a setting. You can even run the same task again with a different model and put the results side by side.",
      },
      {
        question: "How does a pilot start?",
        answer:
          "With a half-hour conversation about your situation and what you would want to hand over to an agent. If it fits, we set up a box in your own environment together and pick a handful of real tasks to start with.",
      },
    ],
  },
  cta: {
    eyebrow: "> Next step",
    title: "Talk to us about a pilot",
    text:
      "We are looking for a small number of organizations that want to run AITJE Coder in their own environment before we launch widely. You get early access and direct influence on what goes into the first release.",
    primaryCta: "Plan a conversation",
    secondaryCta: "Call me back",
    waitlist: {
      label: "Not ready for a conversation yet?",
      text: "Leave your email address and we will let you know as soon as AITJE Coder is available. We will not send you anything else.",
      placeholder: "you@company.com",
      button: "Keep me posted",
      busy: "Saving...",
      success: "Done. We will let you know as soon as AITJE Coder is available.",
      exists: "You were already on the list. We will keep you posted.",
      errorEmpty: "Please enter an email address.",
      errorGeneric: "Saving failed. Please try again later.",
    },
  },
};

const t = computed(() => (props.locale === "en" ? en : nl));

const waitlistEmail = ref("");
const waitlistError = ref("");
const waitlistSuccess = ref("");
const waitlistSubmitting = ref(false);

const submitWaitlist = async () => {
  const email = waitlistEmail.value.trim();
  const copy = t.value.cta.waitlist;

  waitlistError.value = "";
  waitlistSuccess.value = "";

  if (!email) {
    waitlistError.value = copy.errorEmpty;
    return;
  }

  waitlistSubmitting.value = true;

  try {
    const response = await $fetch<{ ok: boolean; alreadyExists?: boolean }>("/api/waitlist", {
      method: "POST",
      body: {
        email,
        locale: props.locale,
        productSlug: "aitje-coder",
        productTitle: "AITJE Coder",
      },
    });

    waitlistSuccess.value = response.alreadyExists ? copy.exists : copy.success;
    waitlistEmail.value = "";
  } catch (error) {
    // Alleen validatiemeldingen (400) zijn voor de bezoeker bedoeld en al vertaald.
    // Serverfouten houden we bij ons; die zeggen de bezoeker niets.
    const status = (error as { statusCode?: number } | null)?.statusCode;
    const message = (error as { statusMessage?: string } | null)?.statusMessage;

    waitlistError.value =
      status && status >= 400 && status < 500 && message ? message : copy.errorGeneric;
  } finally {
    waitlistSubmitting.value = false;
  }
};

// De algemene SEO-plugin zet titel, description en OG-tags op basis van app/utils/seo.ts.
// Hier komt alleen het extra FAQ-blok bij, zodat de vragen ook los vindbaar zijn.
useHead(() => ({
  script: [
    {
      type: "application/ld+json",
      key: "aitje-coder-faq",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.value.faq.items.map((item) => ({
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
}));
</script>
