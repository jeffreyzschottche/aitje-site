<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">Use Cases</p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">Situations where AITJE solutions stand out</h1>
        <p class="mt-6 text-lg text-gray-600">
          We build our products to solve concrete problems: no API tokens to
          manage, sensitive data that never leaves your system and no dependency
          on external platforms. Take a look at which solutions could be relevant
          for your organization.
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
                alt="AITJE use cases"
                class="h-full min-h-[18rem] w-full object-cover"
              />
            </div>

            <div class="p-8 md:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Approach
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                How we work
              </h2>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-600">
                <p>
                  These use cases are realistic situations and problems our
                  solutions are built for. If your organization has a more
                  specific need or requires extra support, we help shape the
                  right path. AITJE is your strategic partner in edge AI:
                  practical, technical and involved in what your organization
                  needs.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="mb-8 max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Overview
          </p>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Below you will find examples of situations where local AI can add
            value directly: from making knowledge easier to find to automating
            sensitive processes locally without becoming dependent on external
            platforms.
          </p>
        </div>
        <div class="space-y-12">
          <UseCaseSlider
            title="AITJE Assistent & Assistent+"
            eyebrow="Product"
            :items="assistentUseCases"
            base-path="/en/use-cases"
            cta-label="View use case"
          />
          <UseCaseSlider
            title="AITJE Coder"
            eyebrow="Product"
            :items="coderUseCases"
            base-path="/en/use-cases"
            cta-label="View use case"
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

const assistentUseCases = useCasesV2.en.filter((item) => item.product === "assistent");
const coderUseCases = useCasesV2.en.filter((item) => item.product === "coder");
</script>
