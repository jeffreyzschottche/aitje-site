<script setup lang="ts">
import type { Product } from "@/content/types";
import { euros, getInstalledProductOffer, introduction } from "@/content/pricing";
const props = withDefaults(
  defineProps<{ product: Product; large?: boolean; showPrice?: boolean }>(),
  { large: false, showPrice: true },
);
const installedOffer = computed(() => getInstalledProductOffer(props.product.slug));
</script>
<template>
  <NuxtLink
    v-if="product.status !== 'disabled'"
    :to="`/producten/${product.slug}`"
    class="product-card"
    :class="{
      'product-planned': product.status !== 'available',
      'product-coder': product.slug === 'aitje-coder',
    }"
  >
    <template v-if="product.status === 'available'">
      <div class="product-card-top">
        <span class="eyebrow">{{
          product.slug === "aitje-coder"
            ? "ONTWIKKELEN & BOUWEN"
            : "KENNIS & DAGELIJKS WERK"
        }}</span
        ><UiBadge tone="brand" dot>Vraag een demo aan</UiBadge>
      </div>
      <div class="product-card-stage">
        <img
          class="product-card-photo"
          :src="`/img/products/card-${product.slug}.webp`"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <OrbitGraphic /><ProductPackshot
          :src="product.image"
          :alt="`Verpakking van ${product.name}`"
          width="1200"
          height="1200"
          loading="lazy"
        /><span class="product-stage-label">{{
          product.slug === "aitje-coder"
            ? "CODE. CREATE. ITERATE."
            : "JOUW KENNIS. MEER MOGELIJK."
        }}</span>
      </div>
      <div class="product-card-copy">
        <div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.tagline }}</p>
        </div>
        <span class="round-arrow"
          ><AppIcon name="arrow-up-right" :size="22"
        /></span>
      </div>
      <div class="product-card-specs">
        <span
          ><AppIcon :name="product.icon" :size="16" />{{
            product.slug === "aitje-coder"
              ? "GUI · API · CLI"
              : "Chat · kennisbank · beheer"
          }}</span
        ><span><AppIcon name="server" :size="16" />Eigen omgeving</span>
      </div>
      <div v-if="showPrice && product.price" class="product-card-price">
        <span><strong>{{ euros(installedOffer?.price ?? product.price) }}</strong>
          {{ installedOffer ? 'met basisinstallatie' : 'per omgeving' }} (Excl btw)</span>
        <span>{{ installedOffer?.introductory ? `Introductie · eerste ${introduction.products.customerLimit} betaalde klanten` : 'Hardware of serverhuur apart' }}</span>
      </div>
      <p v-if="showPrice && installedOffer" class="px-6 pb-5 text-xs leading-relaxed text-muted md:px-8">
        Los product voor zelfinstallatie: {{ euros(product.price!) }}. Hardware, serverhuur en aanvullende inrichting apart.
      </p>
    </template>
    <template v-else
      ><div class="planned-art">
        <ProductPackshot
          v-if="product.image"
          :src="product.image"
          :alt="`Conceptverpakking ${product.name}`"
          width="1000"
          height="1000"
          loading="lazy"
        />
        <AppIcon v-else :name="product.icon" :size="42" :stroke-width="1.2" />
      </div>
      <div class="planned-copy">
        <UiBadge tone="muted">In ontwikkeling</UiBadge>
        <h3>{{ product.name }}</h3>
        <p>{{ product.tagline }}</p>
        <span class="text-link"
          >Bekijk het idee <AppIcon name="arrow-up-right" :size="16"
        /></span></div
    ></template>
  </NuxtLink>
</template>

<style scoped>
.product-card-price {
  flex-wrap: wrap;
  align-items: baseline;
}
.product-card-price > span {
  line-height: 1.6;
}
</style>
