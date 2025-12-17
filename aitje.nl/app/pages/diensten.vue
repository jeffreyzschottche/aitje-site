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
          Diensten & abonnementen
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          We zijn jouw strategische AI-partner
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is meer dan een kastje. We helpen je installeren, trainen je
          team, beheren kennis en houden je modellen actueel – helemaal volgens
          het businessplan.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="value in heroValues"
          :key="value.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5 text-left"
        >
          <component :is="value.icon" class="h-8 w-8 text-[#facc15]" />
          <h3 class="mt-4 text-lg font-semibold text-gray-900">
            {{ value.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">{{ value.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="service.icon" class="h-7 w-7" />
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
              >
                {{ service.badge }}
              </p>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ service.title }}
              </h2>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-600">{{ service.description }}</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-700">
            <li v-for="item in service.details" :key="item">• {{ item }}</li>
          </ul>
        </article>
      </section>

      <section
        class="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <div
          class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Abonnementen
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Voorspelbare jaarlijkse kosten
            </h2>
            <p class="mt-2 text-sm text-gray-300">
              Weg uit de maandelijkse API-kermis. Onze abonnementen houden je
              nest veilig en up-to-date.
            </p>
          </div>
            <NuxtLink
            to="/shop"
            class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Combineer met een pakket
          </NuxtLink>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="sub in subscriptions"
            :key="sub.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h3 class="text-2xl font-semibold text-white">{{ sub.title }}</h3>
            <p class="text-sm text-gray-300">{{ sub.description }}</p>
            <p class="mt-4 text-lg font-semibold text-[#facc15]">
              {{ sub.price }}
            </p>
            <ul class="mt-4 space-y-2 text-sm text-gray-200">
              <li v-for="item in sub.items" :key="item">• {{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Workflow
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Van intake tot gouden nest
          </h2>
          <div class="mt-6 space-y-4">
            <div
              v-for="(step, idx) in steps"
              :key="step.title"
              class="rounded-3xl border border-gray-100 p-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Stap {{ idx + 1 }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-gray-900">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Waarom dit werkt
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            In lijn met ons businessplan
          </h2>
          <p class="mt-3 text-sm text-gray-600">
            Onze diensten zorgen ervoor dat je niet afhankelijk wordt van
            buitenlandse platformen. AITJE draait lokaal, jij houdt regie.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Minder stroom en water via lokale prompts.</li>
            <li>• Privacy-proof voor gemeenten, scholen en bibliotheken.</li>
            <li>• Strategische partner voor innovatieve organisaties.</li>
          </ul>
          <NuxtLink
            to="/contact"
            class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Plan een traject
          </NuxtLink>
        </article>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenCheck,
  ClipboardPenLine,
  Cog,
  GraduationCap,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const heroValues = [
  {
    title: "Installatie door de bouwers",
    description:
      "We koppelen hardware, testen het OS en laten je nest vliegen.",
    icon: PlugZap,
  },
  {
    title: "Partnerschap",
    description:
      "Consults, kennisupdates en upgrades zorgen voor continuïteit.",
    icon: Sparkles,
  },
  {
    title: "Natuur & privacy",
    description:
      "Lokale prompts besparen water en houden data in eigen beheer.",
    icon: Leaf,
  },
];

const services = [
  {
    title: "Installeren & voorbereiden",
    badge: "2,5 uur + 50,- voorrijkosten",
    description: "We zetten alles klaar: van kabels tot eerste accounts.",
    details: [
      "Hardware check & plaatsing",
      "OS configuratie",
      "Gebruikerstraining",
    ],
    icon: PlugZap,
  },
  {
    title: "Consult & strategie",
    badge: "Eerste kennismaking gratis",
    description:
      "Digitale sessies (daarna 100,- p uur) waarin we meedenken over governance en use-cases.",
    details: [
      "Roadmap en prioriteiten",
      "Prompt coaching",
      "Security en privacy",
    ],
    icon: ClipboardPenLine,
  },
  {
    title: "Eigen kennis updaten",
    badge: "€ 1.250 per update",
    description:
      "Upload documenten naar onze embedding omgeving, wij plaatsen de kennis lokaal.",
    details: [
      "Drag & drop omgeving",
      "Controle door ons team",
      "Nazorg en test prompt",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "LLM upgrades",
    badge: "€ 250 per kwartaal",
    description:
      "We monitoren modellen, leveren een rapport en installeren na akkoord.",
    details: [
      "Rapport met advies",
      "Installatie + validatie",
      "Training voor je team",
    ],
    icon: Cog,
  },
  {
    title: "SLA & storing",
    badge: "€ 250 per kwartaal (4 uur inbegrepen)",
    description:
      "Voor calamiteiten en dringende ondersteuning. Meerwerk via uurtarief.",
    details: [
      "Monitoring & health checks",
      "Incident response",
      "Communicatiekanaal op maat",
    ],
    icon: ShieldCheck,
  },
  {
    title: "E-learning & Academy",
    badge: "€ 100 per jaar",
    description:
      "Toegang tot docs, cheatsheets en promptlessen voor je hele team.",
    details: ["Video’s & templates", "Live Q&A’s", "Community toegang"],
    icon: GraduationCap,
  },
];

const subscriptions = [
  {
    title: "E-learning",
    price: "€ 100 / jaar",
    description: "Alles over prompt engineering en workflows.",
    items: ["Volledige bibliotheek", "Cheatsheets", "Nieuwe modules"],
  },
  {
    title: "SLA + Support",
    price: "€ 250 / kwartaal",
    description: "4 uur support, prioriteit en monitoring.",
    items: ["Ticketdesk", "Standaard responstijden", "Optie op-site"],
  },
  {
    title: "LLM upgrade service",
    price: "€ 250 / kwartaal",
    description: "Rapport + implementatie van nieuwe modellen.",
    items: ["Businesscase per upgrade", "Installatie", "Training"],
  },
];

const steps = [
  {
    title: "Intake & demo",
    description: "We analyseren je doelen, privacy eisen en impact op natuur.",
  },
  {
    title: "Installatie & configuratie",
    description: "We plaatsen het kastje, richten accounts in en testen alles.",
  },
  {
    title: "Academy & onboarding",
    description:
      "Je team krijgt promptlessen, docs en toegang tot de embedding omgeving.",
  },
  {
    title: "Doorlopende verbeteringen",
    description:
      "We plannen consults, kennisupdates en upgrades wanneer jij dat wilt.",
  },
];
</script>
