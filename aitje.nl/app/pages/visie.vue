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
          Visie
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          AI moet voor jouw organisatie werken, niet andersom
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AI is niet meer weg te denken. Agents, LLM's, beeldgeneratie en
          videogeneratie gaan een steeds grotere rol spelen in hoe organisaties
          werken. Onze visie is dat je die ontwikkeling beter op je eigen
          systemen kunt voorbereiden, zonder volledige afhankelijkheid van het
          buitenland, Big Tech of externe platformen.
        </p>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        <article
          v-for="principle in principles"
          :key="principle.title"
          class="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow"
        >
          <div
            class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
          >
            <component :is="principle.icon" class="h-7 w-7" />
          </div>
          <p
            class="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
          >
            {{ principle.badge }}
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-900">
            {{ principle.title }}
          </h3>
          <p class="mt-3 text-sm text-gray-600">{{ principle.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
        <article
          v-for="point in visionPoints"
          :key="point.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div class="flex items-center gap-4">
            <component :is="point.icon" class="h-10 w-10 text-[#facc15]" />
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ point.title }}
              </h2>
              <p class="text-sm text-gray-500">{{ point.subtitle }}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-700">{{ point.description }}</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li
              v-for="item in point.highlights"
              :key="item"
              class="flex items-center gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#facc15]"></span>
              {{ item }}
            </li>
          </ul>
        </article>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl rounded-3xl border border-gray-200 bg-white p-10 shadow"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          Waar we in geloven
        </p>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <article
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
          >
            <div class="flex items-center gap-3">
              <component :is="value.icon" class="h-6 w-6 text-[#facc15]" />
              <h3 class="text-xl font-semibold text-gray-900">
                {{ value.title }}
              </h3>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ value.description }}</p>
          </article>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <article class="rounded-3xl bg-[#212121] p-8 text-white shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Roadmap
          </p>
          <h2 class="mt-3 text-3xl font-black">
            We ontwikkelen en experimenteren volop
          </h2>
          <p class="mt-3 text-sm text-gray-200">
            AI ontwikkelt snel. Daarom bouwen en testen we continu door op
            hardware, software, agents, workflows en toepassingen die klanten
            helpen om AI praktisch en veilig in te zetten.
          </p>
          <ul class="mt-6 space-y-4 text-sm text-gray-100">
            <li v-for="item in roadmapHighlights" :key="item.title">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ item.badge }}
              </p>
              <p class="font-semibold">{{ item.title }}</p>
              <p class="text-gray-300">{{ item.description }}</p>
            </li>
          </ul>
          <NuxtLink
            to="/roadmap"
            class="mt-8 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
          >
            Bekijk de volledige roadmap
          </NuxtLink>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Risico's & focus
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Waarom dit nu belangrijk is
          </h2>
          <div class="mt-6 space-y-4">
            <div
              v-for="risk in risks"
              :key="risk.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ risk.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ risk.description }}</p>
              <p class="mt-2 text-xs font-semibold text-gray-900">
                {{ risk.solution }}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-20 max-w-6xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-10 shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Samenwerking
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            We maken jouw organisatie AI-proof voor de toekomst
          </h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <article
              v-for="move in collaborationPoints"
              :key="move.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ move.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ move.description }}</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Globe,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const principles = [
  {
    title: "Onafhankelijkheid",
    badge: "Minder afhankelijk van Big Tech",
    description:
      "Wie AI volledig bouwt op externe platformen, bouwt ook mee aan een afhankelijkheid van prijswijzigingen, voorwaarden en keuzes van grote buitenlandse partijen.",
    icon: ShieldCheck,
  },
  {
    title: "Continuiteit",
    badge: "Werken als internet of hosting faalt",
    description:
      "Wanneer internet, cloudhosting of een extern platform uitvalt, wil je niet meteen stilvallen. Met lokale AI-oplossingen blijft kennis en documentatie bereikbaar.",
    icon: Globe,
  },
  {
    title: "Verantwoord groeien",
    badge: "AI-proof en bewuster",
    description:
      "We helpen organisaties moderniseren met AI, terwijl we verspilling beperken en bewust omgaan met infrastructuur, energie en langdurige afhankelijkheid.",
    icon: Leaf,
  },
];

const visionPoints = [
  {
    title: "Waarom lokaal belangrijker wordt",
    subtitle: "De markt verandert snel",
    description:
      "AI wordt een vast onderdeel van moderne organisaties. Agents, LLM's, beeldgeneratie en videogeneratie gaan processen veranderen, maar de partijen die daar miljarden in investeren willen dat uiteindelijk ook terugverdienen.",
    highlights: [
      "Externe AI-kosten kunnen fors stijgen",
      "Platformkeuzes van derden raken direct jouw operatie",
      "Volledige afhankelijkheid maakt je kwetsbaar",
    ],
    icon: Sparkles,
  },
  {
    title: "Waar AITJE voor bouwt",
    subtitle: "Software, hardware en begeleiding",
    description:
      "AITJE biedt hardware en software om jouw organisatie toekomstbestendig met AI te laten werken. Niet als hype, maar als praktische infrastructuur waarmee jij grip houdt op data, kosten en continuiteit.",
    highlights: [
      "Lokale toegang tot documenten en kennis via een LLM",
      "Praktische inzet voor teams en bedrijfsprocessen",
      "Ondersteuning bij integratie op een veilige manier",
    ],
    icon: HeartHandshake,
  },
];

const values = [
  {
    title: "AI moet in dienst staan van je organisatie",
    description:
      "Je bedrijf moet niet om AI heen hoeven bouwen. Technologie hoort zich aan te passen aan jouw processen, mensen en verantwoordelijkheden.",
    icon: ShieldCheck,
  },
  {
    title: "Voorbereiden is beter dan verrast worden",
    description:
      "Wie nu bewust keuzes maakt in infrastructuur en data, voorkomt later dure migraties, lock-in en afhankelijkheid van platformen die hun prijsmodel veranderen.",
    icon: Sparkles,
  },
  {
    title: "Lokaal waar het kan, extern waar het nodig is",
    description:
      "We zijn niet dogmatisch. We kijken per situatie wat lokaal moet blijven en waar koppelingen of cloud logisch zijn, zolang de regie maar bij jou blijft.",
    icon: Globe,
  },
  {
    title: "Technologie mag ook beter zijn voor de planeet",
    description:
      "Door niet alles standaard via grote externe infrastructuur te laten lopen, werk je bewuster met rekenkracht, dataverkeer en de impact daarvan.",
    icon: Sparkles,
  },
];

const roadmapHighlights = [
  {
    badge: "Nu",
    title: "Experimenteren en ontwikkelen",
    description:
      "We testen voortdurend nieuwe toepassingen, modellen, interfaces en integraties om te zien wat in de praktijk echt waarde toevoegt.",
  },
  {
    badge: "Doorlopend",
    title: "Bouwen aan praktische oplossingen",
    description:
      "Onze focus ligt op producten en diensten die organisaties helpen om AI veilig, bruikbaar en toekomstbestendig te integreren.",
  },
  {
    badge: "Meer weten?",
    title: "Volg de roadmap",
    description:
      "Voor de actuele richting en concrete stappen verwijzen we naar de roadmap-pagina.",
  },
];

const risks = [
  {
    title: "Kosten worden niet vanzelf lager",
    description:
      "Big Tech heeft enorm geïnvesteerd in AI en zal dat moeten terugverdienen. Wie volledig bouwt op externe AI-platformen, kan later geconfronteerd worden met hogere structurele kosten.",
    solution:
      "Daarom geloven wij in een model waarin lokale infrastructuur en slimme keuzes je meer controle geven.",
  },
  {
    title: "Continuiteit is een bedrijfsrisico",
    description:
      "Als een grote hostingpartij, internetverbinding of extern AI-platform uitvalt, kan je organisatie direct stilvallen wanneer alles daarop leunt.",
    solution:
      "Met sommige oplossingen van AITJE kun je lokaal blijven werken met documenten en kennis via een LLM.",
  },
  {
    title: "Met wie deel je je gevoelige bedrijfsdata eigenlijk?",
    description:
      "Wie AI gebruikt via externe platformen, deelt vaak ongemerkt documenten, vragen, interne kennis en bedrijfscontext met partijen buiten de eigen organisatie. Veel bedrijven staan daar nog te weinig bij stil.",
    solution:
      "Daarom vinden wij het belangrijk dat je kritisch kijkt naar waar je data heen gaat en welke onderdelen je beter lokaal of binnen je eigen omgeving kunt organiseren.",
  },
];

const collaborationPoints = [
  {
    title: "Software en hardware die samen kloppen",
    description:
      "We leveren niet alleen losse tools, maar bouwen aan een combinatie van hardware, software en gebruik die praktisch werkt binnen jouw organisatie.",
  },
  {
    title: "Strategische samenwerking",
    description:
      "Ons doel is een langdurige relatie waarin jij kunt focussen op je business en wij helpen met het AI-aspect van je onderneming.",
  },
  {
    title: "Veilige integratie in de praktijk",
    description:
      "We kijken naar wat verantwoord kan, welke data lokaal moet blijven en hoe AI bruikbaar wordt zonder onnodig risico.",
  },
  {
    title: "Praktisch, niet theoretisch",
    description:
      "Geen abstract toekomstverhaal, maar concrete oplossingen waarmee teams vandaag al beter kunnen werken en morgen sterker staan.",
  },
];
</script>
