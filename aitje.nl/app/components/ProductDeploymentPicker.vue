<script setup lang="ts">
import {
  deploymentGroups,
  deploymentOptions,
  findDeploymentOption,
} from "#shared/deploymentOptions";
import { contactLink } from "@/content/site";
import { euros, getInstalledProductOffer } from "@/content/pricing";

const props = defineProps<{ product: string }>();
const selected = ref("maatwerk-omgeving");
const current = computed(() => findDeploymentOption(selected.value)!);
const offer = computed(() => getInstalledProductOffer(props.product));
</script>
<template>
  <div class="deployment-picker">
    <div class="dp-intro">
      <p class="eyebrow text-brand-ink">Hardware en hosting kies je erbij</p>
      <h3>Waar wil jij je AI laten draaien?</h3>
      <p>
        De productprijs hierboven is voor software en basisinstallatie. Nieuwe
        hardware, serverhuur en betaalde inference komen daar apart bij. Met
        bestaande geschikte hardware kan de aanschaf van een nieuw apparaat
        vervallen.
      </p>
      <label :for="`deployment-${product}`"
        >Kies hardware, een server of hulp bij je keuze</label
      >
      <select
        :id="`deployment-${product}`"
        v-model="selected"
        name="deployment"
      >
        <optgroup
          v-for="group in deploymentGroups"
          :key="group.key"
          :label="group.label"
        >
          <option
            v-for="option in deploymentOptions.filter(
              (option) => option.group === group.key,
            )"
            :key="option.key"
            :value="option.key"
          >
            {{ option.label }}
          </option>
        </optgroup>
      </select>
      <p class="dp-choices">
        BOSGAME M5 / M6 · Mac mini · eigen hardware · eigen server · Hetzner ·
        DigitalOcean · AITJE-datacenter
      </p>
    </div>
    <div class="dp-selection" aria-live="polite">
      <div class="dp-selected-title">
        <AppIcon :name="current.icon" :size="28" />
        <h4>{{ current.label }}</h4>
      </div>
      <p>{{ current.description }}</p>
      <dl>
        <div>
          <dt>Product + basisinstallatie</dt>
          <dd>{{ euros(offer?.price ?? 0) }}</dd>
        </div>
        <div>
          <dt>Hardware / hosting / inference</dt>
          <dd>+ op offerte</dd>
        </div>
        <div class="dp-total">
          <dt>Totale oplossing</dt>
          <dd>Persoonlijke offerte</dd>
        </div>
      </dl>
      <p class="dp-extra">
        {{ current.extra }}. Alle bedragen exclusief btw; externe aanbieders en
        doorlopend gebruik worden afzonderlijk afgesproken.
      </p>
      <UiButton :to="contactLink('product-regelen', product, selected)" arrow
        >Vraag deze opstelling aan</UiButton
      >
    </div>
  </div>
</template>
<style scoped>
.deployment-picker {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 2rem;
  border: 1px solid #d4d6c8;
  border-radius: 1.5rem;
  background: #fff;
}
.dp-intro h3 {
  font: 600 1.65rem/1.25 var(--font-heading);
  margin: 0.8rem 0 1rem;
}
.dp-intro > p:not(.eyebrow),
.dp-selection > p {
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--color-muted);
}
.dp-intro label {
  display: block;
  font-weight: 600;
  font-size: 0.85rem;
  margin: 1.5rem 0 0.6rem;
}
.dp-intro select {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 48px;
  border: 1px solid #bec5ac;
  border-radius: 0.8rem;
  padding: 0.8rem;
  background: #f7f8f2;
  font-size: 1rem;
}
.dp-intro .dp-choices {
  font-size: 0.7rem;
  margin-top: 0.75rem;
  line-height: 1.8;
}
.dp-selection {
  min-width: 0;
  padding: 1.5rem;
  background: #f3f5eb;
  border-radius: 1rem;
}
.dp-selected-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
}
.dp-selected-title h4 {
  font: 600 1.15rem/1.4 var(--font-heading);
}
.dp-selection dl {
  margin: 1.4rem 0;
}
.dp-selection dl > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem 1rem;
  border-bottom: 1px solid #d8ddcd;
  padding: 0.75rem 0;
  font-size: 0.82rem;
}
.dp-selection dd {
  font-weight: 600;
}
.dp-total {
  color: #3c4f26;
}
.dp-selection .dp-extra {
  font-size: 0.72rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.dp-selection :deep(a) {
  white-space: normal;
  height: auto;
  min-height: 48px;
  padding-block: 0.8rem;
  text-align: center;
}
@media (max-width: 850px) {
  .deployment-picker {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.4rem;
  }
}
@media (max-width: 480px) {
  .deployment-picker {
    padding: 1rem;
  }
  .dp-selection {
    padding: 1.1rem;
  }
}
</style>
