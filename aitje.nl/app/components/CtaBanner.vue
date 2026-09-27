<script setup lang="ts">
import { contact, mainCta } from "@/content/site";
withDefaults(
  defineProps<{
    title?: string;
    text?: string;
    primary?: { label: string; to: string };
    secondary?: { label: string; to: string };
  }>(),
  {
    title: "Jouw volgende stap begint met een vraag.",
    text: "Een idee, een knelpunt of gewoon nieuwsgierig? Vertel wat je wilt bereiken. AITJE denkt met je mee.",
  },
);
</script>
<template>
  <section class="cta-section">
    <div class="container-page">
      <div class="cta-composition">
        <div>
          <p class="eyebrow">SAMEN VERDER MET AI</p>
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
          <div class="cta-actions">
            <UiButton
              :to="primary?.to ?? mainCta.to"
              variant="dark"
              size="lg"
              arrow
              >{{ primary?.label ?? mainCta.label }}</UiButton
            ><UiButton
              v-if="secondary"
              :to="secondary.to"
              variant="secondary"
              size="lg"
              >{{ secondary.label }}</UiButton
            ><a v-else :href="`mailto:${contact.email}`" class="text-link"
              >{{ contact.email }}<AppIcon name="arrow-up-right" :size="16"
            /></a>
          </div>
        </div>
        <div class="cta-orbit" aria-hidden="true">
          <OrbitGraphic /><span
            ><AppIcon name="sparkles" :size="52" :stroke-width="1"
          /></span>
        </div>
      </div>
    </div>
  </section>
</template>
