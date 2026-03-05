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
        <div class="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <img
            :src="article.thumbnail"
            :alt="article.title"
            class="h-72 w-full object-cover"
          />
          <div class="p-8">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              {{ article.category }} · {{ article.readTime }}
            </p>
            <h1 class="mt-3 text-4xl font-black text-gray-900">
              {{ article.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-600">
              {{ article.excerpt }}
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-4xl space-y-6">
        <article
          v-for="section in article.sections"
          :key="section.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 class="text-2xl font-black text-gray-900">
            {{ section.title }}
          </h2>
          <p class="mt-3 text-base leading-7 text-gray-600">
            {{ section.content }}
          </p>
        </article>
      </section>

      <section class="mx-auto mt-12 max-w-5xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Verder lezen
          </p>
          <div class="mt-6 grid gap-6 md:grid-cols-3">
            <NuxtLink
              v-for="related in relatedArticles"
              :key="related.slug"
              :to="`/kenniscentrum/${related.slug}`"
              class="overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                :src="related.thumbnail"
                :alt="related.title"
                class="h-32 w-full object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ related.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-600">
                  {{ related.excerpt }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />
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
