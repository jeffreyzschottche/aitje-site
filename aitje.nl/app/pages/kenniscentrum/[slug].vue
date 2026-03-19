<template>
  <div v-if="article" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          to="/kenniscentrum"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar kenniscentrum
        </NuxtLink>
        <div
          class="relative mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.24),_transparent_40%),linear-gradient(135deg,_#ffffff_0%,_#fff9db_48%,_#f8fafc_100%)] shadow-sm"
        >
          <div class="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/60 blur-3xl" />
          <div class="absolute left-10 top-10 h-24 w-24 rounded-full border border-white/50 bg-white/40 blur-2xl" />
          <div class="relative p-8 sm:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#b88a00]">
              {{ article.category }} - {{ article.readTime }}
            </p>
            <h1 class="mt-4 max-w-3xl text-4xl font-black text-gray-900 sm:text-5xl">
              {{ article.title }}
            </h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              {{ article.excerpt }}
            </p>
            <div class="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
              <span class="rounded-full border border-black/10 bg-white/80 px-4 py-2 font-medium">
                {{ article.sections.length }} onderdelen
              </span>
              <span class="rounded-full border border-black/10 bg-white/80 px-4 py-2 font-medium">
                Praktisch uitgelegd
              </span>
              <span class="rounded-full border border-black/10 bg-white/80 px-4 py-2 font-medium">
                Voor teams en organisaties
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-4xl space-y-6">
        <article
          v-for="(section, index) in article.sections"
          :key="section.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff4bf] text-sm font-black text-[#9a6f00]"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div>
              <h2 class="text-2xl font-black text-gray-900">
                {{ section.title }}
              </h2>
              <p class="mt-3 text-base leading-8 text-gray-600">
                {{ section.content }}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-12 max-w-5xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Verder lezen
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-3">
            <NuxtLink
              v-for="(related, index) in relatedArticles"
              :key="related.slug"
              :to="`/kenniscentrum/${related.slug}`"
              class="group overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                class="border-b border-gray-200 bg-[linear-gradient(135deg,_#fff7cc_0%,_#ffffff_65%)] p-4"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a6f00]"
                  >
                    Verder lezen
                  </span>
                  <span class="text-sm font-black text-gray-400">
                    {{ String(index + 1).padStart(2, "0") }}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ related.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-600">
                  {{ related.excerpt }}
                </p>
                <p class="mt-4 text-sm font-semibold text-[#b88a00]">
                  Open artikel
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
import { knowledgeArticles } from "../../data/knowledgeArticles";

const mergedSlugAliases: Record<string, string> = {
  "wat-is-een-taalmodel": "wat-is-een-llm",
  "wat-betekent-lokale-ai": "wat-is-edge-ai",
};

const route = useRoute();

const currentSlug = computed(() => {
  const slug = route.params.slug;
  return Array.isArray(slug) ? slug[0] : slug;
});

const canonicalSlug = computed(
  () => mergedSlugAliases[currentSlug.value] ?? currentSlug.value
);

if (currentSlug.value in mergedSlugAliases) {
  await navigateTo(`/kenniscentrum/${canonicalSlug.value}`, {
    redirectCode: 301,
  });
}

const article = computed(() =>
  knowledgeArticles.find((item) => item.slug === canonicalSlug.value)
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Artikel niet gevonden",
  });
}

const relatedArticles = computed(() =>
  knowledgeArticles
    .filter((item) => item.slug !== article.value?.slug)
    .slice(0, 3)
);
</script>
