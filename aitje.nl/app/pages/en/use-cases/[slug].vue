<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main v-if="item" class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink to="/en/use-cases" class="text-sm font-semibold text-[#d4a700] transition hover:text-black">
          Back to use cases
        </NuxtLink>
        <div
          class="relative mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="relative h-[260px] sm:h-[360px]">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover"
              fetchpriority="high"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div class="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Use Case
              </p>
              <h1 class="mt-4 max-w-4xl text-4xl font-black sm:text-5xl">
                {{ item.title }}
              </h1>
              <p class="mt-5 max-w-3xl text-lg leading-8 text-white/85">
                {{ item.summary }}
              </p>
            </div>
          </div>
          <div class="border-t border-gray-200 bg-[#212121] p-8 sm:p-10">
            <div class="flex flex-wrap gap-3 text-sm text-white">
              <span class="rounded-full border border-[#facc15] bg-[#facc15] px-4 py-2 font-semibold text-black">
                Practical fit
              </span>
              <span class="rounded-full border border-[#facc15] bg-[#facc15] px-4 py-2 font-semibold text-black">
                Local AI context
              </span>
              <span class="rounded-full border border-[#facc15] bg-[#facc15] px-4 py-2 font-semibold text-black">
                For teams and organizations
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-4xl space-y-6">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#facc15] text-sm font-black text-black"
            >
              01
            </div>
            <div>
              <h2 class="text-2xl font-black text-gray-900">
                Recognizable problem
              </h2>
              <p class="mt-3 text-base leading-8 text-gray-600">
                {{ item.problem }}
              </p>
            </div>
          </div>
        </article>

        <article class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#facc15] text-sm font-black text-black"
            >
              02
            </div>
            <div>
              <h2 class="text-2xl font-black text-gray-900">
                Desired outcome
              </h2>
              <p class="mt-3 text-base leading-8 text-gray-600">
                {{ item.outcome }}
              </p>
            </div>
          </div>
        </article>

        <article class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#facc15] text-sm font-black text-black"
            >
              03
            </div>
            <div class="w-full">
              <h2 class="text-2xl font-black text-gray-900">
                What fits here
              </h2>
              <ul class="mt-4 space-y-3 text-base text-gray-600">
                <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-3">
                  <span class="mt-2 h-2 w-2 rounded-full bg-[#facc15]"></span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-12 max-w-5xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            More use cases
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-3">
            <NuxtLink
              v-for="(related, index) in relatedUseCases"
              :key="related.slug"
              :to="`/en/use-cases/${related.slug}`"
              class="group overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="relative border-b border-gray-200">
                <img
                  :src="related.image"
                  :alt="related.title"
                  class="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div class="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span
                    class="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white"
                  >
                    Use Case
                  </span>
                  <span class="text-sm font-black text-white/70">
                    {{ String(index + 1).padStart(2, "0") }}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ related.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-600">
                  {{ related.summary }}
                </p>
                <p class="mt-4 text-sm font-semibold text-[#facc15]">
                  Open use case
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCasesV2 } from "@/data/useCasesV2";

const route = useRoute();
const item = computed(() => useCasesV2.en.find((entry) => entry.slug === String(route.params.slug)));

const relatedUseCases = computed(() =>
  useCasesV2.en
    .filter((entry) => entry.slug !== item.value?.slug)
    .slice(0, 3)
);

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>
