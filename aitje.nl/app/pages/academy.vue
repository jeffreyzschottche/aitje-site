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
          AITJE Academy
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Vliegles voor prompts & lokale AI
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Denk aan een Udemy, maar dan alleen over AITJE. We leren je hoe je het
          gouden ei inzet, hoe je eigen kennis embedt en hoe je alles uit
          prompts haalt – gebaseerd op ons businessplan.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="highlight in heroHighlights"
          :key="highlight.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5"
        >
          <component :is="highlight.icon" class="h-8 w-8 text-[#facc15]" />
          <h3 class="mt-4 text-lg font-semibold text-gray-900">
            {{ highlight.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">{{ highlight.description }}</p>
        </article>
      </section>

      <section
        class="mx-auto mt-16 max-w-6xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        <div class="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <aside>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Cursussen
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900">
              Kies hoe jij wilt leren
            </h2>
            <div class="mt-6 space-y-3">
              <button
                v-for="(tab, index) in tabs"
                :key="tab.title"
                @click="activeTab = index"
                :class="[
                  'w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition',
                  activeTab === index
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 bg-[#fafafa] text-gray-700 hover:border-black/40',
                ]"
              >
                {{ tab.title }}
              </button>
            </div>
          </aside>
          <div
            v-if="tabs[activeTab]"
            class="grid gap-6 rounded-3xl bg-[#fafafa] p-6 md:grid-cols-[0.5fr_0.5fr] md:items-center"
          >
            <img
              :src="tabs[activeTab].image"
              :alt="tabs[activeTab].title"
              class="h-72 w-full rounded-3xl object-cover shadow"
            />
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ tabs[activeTab].badge }}
              </p>
              <h3 class="mt-3 text-3xl font-semibold text-gray-900">
                {{ tabs[activeTab].title }}
              </h3>
              <p class="mt-3 text-sm text-gray-600">
                {{ tabs[activeTab].description }}
              </p>
              <ul class="mt-4 space-y-2 text-sm text-gray-700">
                <li
                  v-for="item in tabs[activeTab].highlights"
                  :key="item"
                  class="flex items-center gap-2"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-[#facc15]"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-4xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          Klaar om te leren?
        </p>
        <h2 class="mt-3 text-3xl font-black text-gray-900">
          Boek een demo of vraag een les aan
        </h2>
        <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Plan een demo
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full border border-[#facc15] bg-[#facc15] px-8 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Vraag een les aan
          </NuxtLink>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { BookOpenCheck, GraduationCap, Sparkles } from "lucide-vue-next";
import { ref } from "vue";

const heroHighlights = [
  {
    title: "Prompt vliegschool",
    description:
      "Je leert hoe je vragen stelt zoals wij dat doen voor klanten.",
    icon: GraduationCap,
  },
  {
    title: "Eigen kennis embedden",
    description:
      "Stap-voor-stap flow voor het vullen van je lokale kennisbank.",
    icon: BookOpenCheck,
  },
  {
    title: "Community & live lessen",
    description:
      "Sluit aan bij live sessies en ontvang updates uit de roadmap.",
    icon: Sparkles,
  },
];

const tabs = [
  {
    title: "Solo vlieglessen",
    badge: "Zelfstandig leren",
    description:
      "Ideaal voor ZZP’ers en pioniers die eigen prompts willen perfectioneren.",
    highlights: [
      "E-learning + docs + cheatsheets",
      "Community toegang",
      "Maandelijkse live Q&A",
    ],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Team runway",
    badge: "Voor teams",
    description:
      "Voor MKB en scholen die samen willen oefenen en templates delen.",
    highlights: [
      "Alles van Solo",
      "On-demand workshops",
      "Template bibliotheek per afdeling",
    ],
    image:
      "https://images.unsplash.com/photo-1529333166431-0f2c944584d6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Custom cockpit",
    badge: "Op maat",
    description:
      "Voor organisaties die samen met ons lespaden bouwen en diensten koppelen.",
    highlights: [
      "Eigen lespaden",
      "Consultsessies met Jeffrey & Kees",
      "Integratie met diensten",
    ],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
  },
];

const activeTab = ref(0);
</script>
