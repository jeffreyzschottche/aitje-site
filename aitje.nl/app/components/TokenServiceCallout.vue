<script setup lang="ts">
import { getService } from "@/content/services";

const service = getService("token-management-en-optimalisatie")!;
</script>

<template>
  <aside class="token-service-callout rounded-panel border border-line bg-sand p-7 md:p-9">
    <div class="flex items-start gap-4">
      <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-ink">
        <AppIcon :name="service.icon" :size="25" />
      </span>
      <div class="min-w-0">
        <p class="eyebrow text-brand-ink">Grip op je AI-gebruik</p>
        <h2 class="mt-2 font-heading text-2xl font-semibold">{{ service.name }}</h2>
        <p class="mt-3 max-w-3xl leading-relaxed text-muted">{{ service.short }}</p>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          Van content en kennis tot beeld en code: de taak bepaalt het model.
          Gerichte context en een slimme taakverdeling beperken onnodig verbruik.
        </p>
        <NuxtLink
          :to="`/diensten/${service.slug}`"
          class="mt-5 inline-flex items-center gap-2 font-semibold underline decoration-brand decoration-2 underline-offset-4"
        >
          Ontdek de aanpak <AppIcon name="arrow-right" :size="18" />
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
