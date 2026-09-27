<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const notFound = computed(() => props.error.statusCode === 404);

useHead({ title: notFound.value ? "Pagina niet gevonden | AITJE" : "Er ging iets mis | AITJE" });
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />
    <main class="container-page grid flex-1 items-center gap-10 py-36 lg:grid-cols-[1.2fr_1fr]">
      <div>
      <p class="eyebrow text-brand-ink">{{ error.statusCode }}</p>
      <h1 class="mt-4 font-heading text-[2.6rem] leading-tight font-bold md:text-[3.6rem]">
        {{ notFound ? "Dit ei is nog niet uitgekomen." : "Er ging iets mis." }}
      </h1>
      <p class="mt-5 max-w-lg text-lg text-muted">
        {{ notFound ? "De pagina die je zoekt bestaat niet (meer). Misschien vind je hieronder wat je zocht." : "Probeer het later opnieuw, of neem direct contact op." }}
      </p>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <UiButton to="/" arrow @click="clearError({ redirect: '/' })">Naar de homepage</UiButton>
        <UiButton to="/contact" variant="secondary">Bespreek je AI-vraag</UiButton>
      </div>
      </div>
      <ServiceScene src="/img/redesign/faq.webp" alt="Een koolmees op een houten wegwijzer" class="mx-auto w-full max-w-md" />
    </main>
    <SiteFooter />
  </div>
</template>
