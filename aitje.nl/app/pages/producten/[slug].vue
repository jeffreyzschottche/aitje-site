<script setup lang="ts">
// Product page (redesign/pages/product.md, besluiten 41, 45, 46, 51).
import { availableProducts, getProduct, installPrice, localNote } from "@/content/products";
import { contactLink } from "@/content/site";

const route = useRoute();
const product = getProduct(String(route.params.slug));

if (!product) {
  throw createError({ statusCode: 404, statusMessage: "Product niet gevonden", fatal: true });
}

const available = product.status === "available";
const others = availableProducts.filter((p) => p.slug !== product.slug);

usePageSeo({
  title: available ? `${product.name}: ${product.headline}` : `${product.name} (in ontwikkeling)`,
  description: product.seoDescription,
  image: product.image,
  breadcrumbs: [
    { name: "Producten", path: "/producten" },
    { name: product.name, path: `/producten/${product.slug}` },
  ],
  faq: product.faq,
  schema: available
    ? [
        {
          "@type": "Product",
          name: product.name,
          description: product.subline,
          brand: { "@type": "Brand", name: "AITJE" },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        },
      ]
    : [],
});
</script>

<template>
  <div v-if="available">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div class="pointer-events-none absolute -top-40 -right-40 -z-10 size-[42rem] rounded-full bg-brand/20 blur-3xl" />
      <div class="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <UiBadge tone="brand" dot>Beschikbaar</UiBadge>
            <NuxtLink to="/producten" class="text-sm text-muted hover:text-ink">← Alle producten</NuxtLink>
          </div>
          <p class="eyebrow text-brand-ink">{{ product.name }}</p>
          <h1 class="mt-4 font-heading text-[2.6rem] leading-[1.02] font-bold md:text-[3.8rem]">{{ product.headline }}</h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">{{ product.subline }}</p>
          <p class="mt-5 max-w-xl border-l-2 border-brand pl-4 text-sm leading-relaxed text-muted">{{ localNote }}</p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <UiButton :to="contactLink('product-regelen', product.slug)" size="lg" arrow>Laat AITJE het regelen</UiButton>
            <UiButton :to="contactLink('demo', product.slug)" variant="secondary" size="lg">Vraag een demo aan</UiButton>
          </div>
          <p class="mt-5 text-sm text-muted">
            Vanaf <strong class="text-ink">€{{ product.price }}</strong> per omgeving, excl. btw ·
            <a href="#prijs" class="underline decoration-brand underline-offset-4 hover:text-ink">Bekijk de prijsopbouw</a>
          </p>
        </div>
        <div class="relative">
          <div class="absolute inset-8 -z-10 rounded-full bg-brand/30 blur-3xl" />
          <img
            :src="product.image"
            :alt="`Verpakking van ${product.name}`"
            class="mx-auto w-full max-w-md drop-shadow-[0_40px_50px_rgb(0_0_0/0.22)]"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <!-- In het kort + features -->
    <section class="py-16 md:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p class="eyebrow text-brand-ink">In het kort</p>
          <div class="mt-5 space-y-5 text-lg leading-relaxed text-ink/85">
            <RichText v-for="(p, i) in product.intro" :key="i" :text="p" tag="p" />
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="feature in product.features" :key="feature.title" class="rounded-card border border-line bg-surface p-6">
            <span class="grid size-10 place-items-center rounded-xl bg-brand"><AppIcon :name="feature.icon" :size="19" /></span>
            <h3 class="mt-4 font-heading font-semibold">{{ feature.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problemen -->
    <section class="px-3 md:px-5">
      <div class="on-dark rounded-[2.25rem] bg-ink py-20 text-white md:py-24">
        <div class="container-page">
          <SectionHeading eyebrow="Waarom" :title="`Wat ${product.name} voor je oplost.`" dark />
          <div class="mt-12 grid gap-4 md:grid-cols-2">
            <div v-for="row in product.problems" :key="row.problem" class="rounded-card border border-line-dark bg-charcoal p-6">
              <p class="flex gap-3 text-muted-dark">
                <AppIcon name="x" :size="18" class="mt-0.5 shrink-0 text-white/40" /> {{ row.problem }}
              </p>
              <p class="mt-4 flex gap-3 font-medium">
                <AppIcon name="check" :size="18" class="mt-0.5 shrink-0 text-brand" /> {{ row.solution }}
              </p>
            </div>
          </div>
          <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_2fr]">
            <h3 class="font-heading text-2xl font-bold">Voor wie</h3>
            <CheckList :items="product.forWho" dark />
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section v-if="product.gallery?.length" class="py-20 md:py-24">
      <div class="container-page">
        <SectionHeading eyebrow="Zo ziet het eruit" :title="`${product.shortName} in beeld.`" />
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <figure v-for="shot in product.gallery" :key="shot.src" class="group">
            <div class="overflow-hidden rounded-card border border-line bg-surface">
              <img :src="shot.src" :alt="shot.alt" loading="lazy" class="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <figcaption class="mt-3 text-sm text-muted">{{ shot.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Prijs -->
    <section id="prijs" class="scroll-mt-24 bg-sand py-20 md:py-24">
      <div class="container-page">
        <SectionHeading
          eyebrow="Prijs"
          title="Eerlijk opgebouwd. Jij ziet wat je betaalt."
          intro="Het product, de hardware en de installatie staan apart. Zo weet je precies waar je geld naartoe gaat."
        />
        <div class="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <!-- Laat AITJE het regelen -->
          <div class="rounded-panel border-2 border-ink bg-surface p-7 md:p-9">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h3 class="font-heading text-2xl font-bold">AITJE regelt het</h3>
              <UiBadge tone="brand">Aanbevolen</UiBadge>
            </div>
            <p class="mt-2 text-muted">AITJE adviseert de hardware, installeert en levert gebruiksklaar op.</p>
            <dl class="mt-8 divide-y divide-line border-y border-line">
              <div class="flex items-baseline justify-between gap-4 py-4">
                <dt>{{ product.name }}</dt>
                <dd class="text-right font-heading text-xl font-bold">€{{ product.price }}</dd>
              </div>
              <div class="flex items-baseline justify-between gap-4 py-4">
                <dt>Installatie en inrichting</dt>
                <dd class="text-right font-semibold">vanaf €{{ installPrice }}</dd>
              </div>
              <div class="flex items-baseline justify-between gap-4 py-4">
                <dt>Hardware of server</dt>
                <dd class="text-right text-sm text-muted">Afhankelijk van capaciteit, in je offerte</dd>
              </div>
              <div class="flex items-baseline justify-between gap-4 py-4">
                <dt>
                  <NuxtLink to="/diensten/ondersteuning-en-onderhoud" class="underline decoration-brand underline-offset-4">Ondersteuning en onderhoud</NuxtLink>
                </dt>
                <dd class="text-right text-sm text-muted">Optioneel, vanaf €49,99 p/m</dd>
              </div>
            </dl>
            <p class="mt-5 text-xs text-muted">Alle prijzen exclusief btw. Geen totaalprijs zolang hardware en scope nog niet bekend zijn.</p>
            <UiButton :to="contactLink('product-regelen', product.slug)" size="lg" arrow class="mt-7 w-full sm:w-auto">Laat AITJE het regelen</UiButton>
          </div>

          <!-- Zelfinstallatie -->
          <div class="flex flex-col rounded-panel border border-line bg-surface p-7 md:p-9">
            <h3 class="font-heading text-2xl font-bold">Zelf installeren</h3>
            <p class="mt-2 text-muted">Heb je geschikte hardware? Dan kun je {{ product.shortName }} zelf installeren.</p>
            <p class="mt-6 font-heading text-4xl font-bold">€{{ product.price }}</p>
            <p class="text-sm text-muted">per omgeving, excl. btw</p>
            <div class="mt-6">
              <CheckList :items="product.selfInstall ?? []" />
            </div>
            <UiButton :to="contactLink('zelfinstallatie', product.slug)" variant="dark" arrow class="mt-auto w-full sm:w-auto">
              Bestel voor zelfinstallatie
            </UiButton>
          </div>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="rounded-card border border-line bg-surface p-6">
            <h3 class="font-heading font-semibold">Wat erbij zit</h3>
            <CheckList :items="product.included ?? []" class="mt-4" />
          </div>
          <div class="rounded-card border border-line bg-surface p-6">
            <h3 class="font-heading font-semibold">Niet automatisch inbegrepen</h3>
            <CheckList :items="product.notIncluded ?? []" negative class="mt-4" />
          </div>
        </div>
      </div>
    </section>

    <CasesSection :slugs="product.caseSlugs ?? []" :title="`${product.shortName} in de praktijk.`" />

    <!-- Technische details + FAQ -->
    <section class="py-20 md:py-24" :class="product.caseSlugs?.length ? 'border-t border-line' : ''">
      <div class="container-page grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Technische details" title="Voor wie het precies wil weten." />
          <div class="mt-8 divide-y divide-line border-y border-line">
            <details v-for="item in product.technical" :key="item.title" class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-5 font-heading font-semibold">
                {{ item.title }}
                <AppIcon name="chevron-down" :size="18" class="transition-transform group-open:rotate-180" />
              </summary>
              <p class="pb-5 leading-relaxed text-muted">{{ item.text }}</p>
            </details>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Veelgestelde vragen" :title="`Vragen over ${product.shortName}.`" />
          <div class="mt-8"><FaqList :items="product.faq ?? []" /></div>
        </div>
      </div>
    </section>

    <!-- Bredere mogelijkheden -->
    <section class="pb-20">
      <div class="container-page">
        <div class="grid items-center gap-8 overflow-hidden rounded-panel border border-line bg-surface md:grid-cols-[1fr_1.2fr]">
          <img src="/img/ai-op-maat.webp" alt="Een papegaai als kleermaker die een vogel een pak aanmeet" loading="lazy" class="aspect-[4/3] size-full object-cover" />
          <div class="p-8 md:p-10">
            <p class="eyebrow text-brand-ink">Bredere mogelijkheden</p>
            <h2 class="mt-3 font-heading text-3xl font-bold">Iets vergelijkbaars nodig, maar net anders?</h2>
            <p class="mt-4 text-muted">
              {{ product.name }} laat zien wat AITJE kan bouwen. Andere workflows, koppelingen of hardware? Dat kan met AITJE Custom — AI op maat.
            </p>
            <UiButton to="/diensten/aitje-custom" variant="secondary" arrow class="mt-6">Bekijk AITJE Custom</UiButton>
          </div>
        </div>

        <div v-if="others.length" class="mt-16">
          <h2 class="font-heading text-2xl font-bold">Andere producten</h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <ProductCard v-for="other in others" :key="other.slug" :product="other" />
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      :title="`${product.name} voor jouw werk?`"
      text="Laat AITJE de hardware kiezen en alles gebruiksklaar opleveren, of zie het eerst in een persoonlijke demo."
      :primary="{ label: 'Laat AITJE het regelen', to: contactLink('product-regelen', product.slug) }"
      :secondary="{ label: 'Vraag een demo aan', to: contactLink('demo', product.slug) }"
    />
  </div>

  <!-- Gepland product -->
  <div v-else>
    <PageHero eyebrow="In ontwikkeling" :title="product.name" :subline="product.tagline">
      <template #before>
        <div class="mb-6 flex flex-wrap items-center gap-3">
          <UiBadge tone="muted" dot>In ontwikkeling</UiBadge>
          <NuxtLink to="/producten" class="text-sm text-muted hover:text-ink">← Alle producten</NuxtLink>
        </div>
      </template>
      <div class="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/80">
        <p v-for="(p, i) in product.intro" :key="i">{{ p }}</p>
      </div>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <UiButton :to="contactLink('interesse', product.slug)" size="lg" arrow>Laat je interesse weten</UiButton>
        <UiButton to="/diensten/aitje-custom" variant="secondary" size="lg">Nu al iets vergelijkbaars nodig?</UiButton>
      </div>
    </PageHero>

    <section class="pb-24">
      <div class="container-page grid gap-6 md:grid-cols-2">
        <div class="rounded-panel border border-line bg-surface p-8">
          <h2 class="font-heading text-xl font-bold">Voor wie</h2>
          <CheckList :items="product.forWho" class="mt-5" />
        </div>
        <div class="rounded-panel border border-line bg-surface p-8">
          <h2 class="font-heading text-xl font-bold">Wat het gaat oplossen</h2>
          <ul class="mt-5 space-y-4">
            <li v-for="row in product.problems" :key="row.problem">
              <p class="text-muted">{{ row.problem }}</p>
              <p class="mt-1 flex gap-2 font-medium"><AppIcon name="check" :size="18" class="mt-0.5 shrink-0 text-brand-ink" /> {{ row.solution }}</p>
            </li>
          </ul>
        </div>
      </div>
      <p class="container-page mt-8 text-sm text-muted">
        {{ product.name }} is nog niet beschikbaar. Prijs en exacte functionaliteit worden bekendgemaakt zodra het product klaar is.
      </p>
    </section>

    <CtaBanner
      :title="`Interesse in ${product.name}?`"
      text="Laat het weten. Je hoort het als eerste zodra er meer bekend is, zonder verplichtingen."
      :primary="{ label: 'Laat je interesse weten', to: contactLink('interesse', product.slug) }"
      :secondary="{ label: 'Bekijk beschikbare producten', to: '/producten' }"
    />
  </div>
</template>
