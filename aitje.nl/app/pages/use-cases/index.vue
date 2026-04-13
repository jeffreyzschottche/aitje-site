<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">Use Cases</p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">Herkenbare situaties waarin AITJE kan passen</h1>
        <p class="mt-6 text-lg text-gray-600">
            Geen opgeblazen klantverhalen, maar duidelijke voorbeelden van situaties waarin lokale Edge AI waarde kan hebben voor een organisatie.
        </p>
      </section>

      <section class="mx-auto mt-6 max-w-6xl">
        <article
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
            <div class="border-b border-gray-200 bg-[#faf7ea] md:border-b-0 md:border-r">
              <img
                src="/images/wanneer-aitje.png"
                alt="Wanneer AITJE past"
                class="h-full min-h-[18rem] w-full object-cover"
              />
            </div>

            <div class="p-8 md:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Opzet
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Duidelijker, herkenbaarder en direct toepasbaar
              </h2>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-600">
                <p>
                  Deze use cases zijn geen grote klantverhalen, maar herkenbare
                  situaties waarin lokale Edge AI logisch kan zijn voor een team
                  of organisatie.
                </p>
                <p>
                  Zo zie je sneller waar AITJE praktisch kan helpen, zonder eerst
                  door abstracte consultancytaal of brede scenario&apos;s heen te
                  hoeven.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="mb-8 max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Overzicht
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            Praktische situaties waar AITJE op kan aansluiten
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Hieronder vind je use cases die aansluiten op de producten en
            richtingen van AITJE. Niet als verkooppraatje, maar als snelle manier
            om te zien waar lokale AI in de praktijk nuttig kan zijn.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="item in useCases"
            :key="item.slug"
            :to="`/use-cases/${item.slug}`"
            class="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div class="relative overflow-hidden border-b border-gray-200 bg-gray-100">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div class="absolute inset-x-0 bottom-0 p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                  Use Case
                </p>
                <div class="mt-5 flex items-end justify-end">
                  <span
                    class="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
                  >
                    Use Case
                  </span>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h2
                class="text-2xl font-black text-gray-900 transition group-hover:text-[#facc15]"
              >
                {{ item.title }}
              </h2>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ item.summary }}
              </p>
              <div class="mt-5 flex items-center justify-between text-sm">
                <span class="font-semibold text-[#facc15]">Bekijk use case</span>
                <span
                  class="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition group-hover:border-[#facc15] group-hover:text-[#facc15]"
                >
                  Use Cases
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useCasesV2 } from "@/data/useCasesV2";

const useCases = useCasesV2.nl;
</script>
