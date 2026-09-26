<script setup lang="ts">
// General FAQ (redesign/pages/faq.md, besluiten 50-51: complete overview, FAQPage structured data).
import { faqGroups } from "@/content/faq";

usePageSeo({
  title: "Veelgestelde vragen",
  description:
    "Antwoorden over AITJE, de AI-producten, diensten, samenwerking, data en kosten. Staat je vraag er niet tussen? Bespreek je AI-vraag met AITJE.",
  breadcrumbs: [{ name: "Veelgestelde vragen", path: "/faq" }],
  faq: faqGroups.flatMap((g) => g.items),
});
</script>

<template>
  <div>
    <PageHero
      eyebrow="Veelgestelde vragen"
      title="Antwoorden over AITJE, het aanbod en samenwerken."
      subline="Kort antwoord, en een link naar de pagina met meer details. Specifieke vragen over een product of dienst vind je ook op die pagina."
    />

    <section class="pb-24">
      <div class="container-page grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav class="lg:sticky lg:top-28 lg:self-start" aria-label="Categorieën">
          <ul class="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            <li v-for="group in faqGroups" :key="group.id">
              <a
                :href="`#${group.id}`"
                class="block rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium hover:border-ink lg:rounded-xl lg:border-0 lg:bg-transparent lg:px-3 lg:hover:bg-sand"
              >
                {{ group.title }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="space-y-16">
          <section v-for="group in faqGroups" :id="group.id" :key="group.id" class="scroll-mt-28">
            <div class="mb-4 flex items-end justify-between gap-4">
              <h2 class="font-heading text-2xl font-bold md:text-3xl">{{ group.title }}</h2>
              <NuxtLink v-if="group.link" :to="group.link.to" class="shrink-0 text-sm font-semibold underline decoration-brand underline-offset-4">
                {{ group.link.label }}
              </NuxtLink>
            </div>
            <FaqList :items="group.items" />
          </section>
        </div>
      </div>
    </section>

    <CtaBanner title="Staat je vraag er niet tussen?" text="Stel hem gewoon. AITJE denkt mee en geeft een eerlijk antwoord." />
  </div>
</template>
