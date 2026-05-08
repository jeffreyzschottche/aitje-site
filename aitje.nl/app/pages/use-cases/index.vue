<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">Use Cases</p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">Situaties waarin de oplossingen van AITJE uitblinken</h1>
        <p class="mt-6 text-lg text-gray-600">
          We maken onze producten om concrete problemen op te lossen: geen API-tokens
          die je moet beheren, gevoelige data die jouw systeem nooit verlaat en geen
          afhankelijkheid van externe platformen. Neem een kijkje welke oplossingen
          iets voor jouw organisatie kunnen betekenen.
        </p>
      </section>

      <section class="mx-auto mt-6 max-w-6xl">
        <article
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
            <div class="border-b border-gray-200 bg-[#faf7ea] md:border-b-0 md:border-r">
              <img
                src="/images/use-case-image.png"
                alt="Use cases van AITJE"
                class="h-full min-h-[18rem] w-full object-cover"
              />
            </div>

            <div class="p-8 md:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Aanpak
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Hoe wij werken
              </h2>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-600">
                <p>
                  De use cases zijn realistische situaties en problemen waarvoor
                  onze oplossingen werken. Heb je een specifiekere behoefte of
                  is er extra ondersteuning nodig, dan denken we mee over een
                  passende route. AITJE is je strategische partner in edge AI:
                  praktisch, technisch en betrokken bij wat jouw organisatie
                  nodig heeft.
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
          <p class="mt-4 text-base leading-8 text-gray-600">
            Hieronder vind je voorbeelden van situaties waarin lokale AI direct
            waarde kan toevoegen: van kennis beter vindbaar maken tot gevoelige
            processen lokaal automatiseren zonder afhankelijk te worden van externe
            platforms.
          </p>
        </div>
        <div class="space-y-12">
          <UseCaseSlider
            title="AITJE Assistent & Assistent+"
            eyebrow="Product"
            :items="assistentUseCases"
            base-path="/use-cases"
            cta-label="Bekijk use case"
          />
          <UseCaseSlider
            title="AITJE Coder"
            eyebrow="Product"
            :items="coderUseCases"
            base-path="/use-cases"
            cta-label="Bekijk use case"
          />
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useCasesV2 } from "@/data/useCasesV2";

const assistentUseCases = useCasesV2.nl.filter((item) => item.product === "assistent");
const coderUseCases = useCasesV2.nl.filter((item) => item.product === "coder");
</script>
