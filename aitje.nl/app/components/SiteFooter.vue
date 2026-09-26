<script setup lang="ts">
import { contact, footerGroups, mainCta } from "@/content/site";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="on-dark bg-ink text-white">
    <div class="container-page pt-20 pb-10">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <img src="/img/logo-light.png" alt="AITJE" width="600" height="245" class="h-9 w-auto" loading="lazy" />
          <p class="mt-6 max-w-sm font-heading text-2xl leading-tight font-semibold">
            Je partner in AI.
          </p>
          <p class="mt-3 max-w-sm text-muted-dark">
            AI op je eigen hardware of server. Jij houdt de controle, AITJE regelt de techniek.
          </p>
          <div class="mt-8 space-y-2 text-sm">
            <a :href="`mailto:${contact.email}`" class="flex items-center gap-2 text-white/85 hover:text-brand">
              <AppIcon name="mail" :size="16" /> {{ contact.email }}
            </a>
            <a :href="contact.phoneHref" class="flex items-center gap-2 text-white/85 hover:text-brand">
              <AppIcon name="phone" :size="16" /> {{ contact.phone }}
            </a>
          </div>
          <UiButton :to="mainCta.to" arrow class="mt-8">{{ mainCta.label }}</UiButton>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div v-for="group in footerGroups" :key="group.title">
            <p class="eyebrow mb-4 text-brand">{{ group.title }}</p>
            <ul class="space-y-2.5 text-sm">
              <li v-for="link in group.links" :key="link.to">
                <NuxtLink :to="link.to" class="text-white/75 transition-colors hover:text-white">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} AITJE. Alle prijzen exclusief btw.</p>
        <p class="font-mono tracking-wide">// lokaal waar het kan · eigen server waar het past · extern waar het nodig is</p>
      </div>
    </div>
  </footer>
</template>
