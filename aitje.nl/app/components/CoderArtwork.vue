<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: "workbench" | "mobile";
    scene?: string;
    shot?: string;
  }>(),
  { scene: "review" },
);
const root = ref<HTMLElement>();
const visible = ref(false);
const reduce = ref(false);
let observer: IntersectionObserver | undefined;
let preference: MediaQueryList | undefined;
const updateMotion = () => {
  reduce.value = preference?.matches ?? false;
};
const screen = computed(() =>
  props.shot
    ? `/img/coder/screenshots/${props.shot}-telefoon-dark.webp`
    : visible.value && !reduce.value
      ? `/img/coder/gifs/${props.scene}.gif`
      : `/img/coder/posters/${props.scene}.webp`,
);
onMounted(() => {
  preference = matchMedia("(prefers-reduced-motion: reduce)");
  updateMotion();
  preference.addEventListener("change", updateMotion);
  observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = !!entry?.isIntersecting;
    },
    { rootMargin: "200px" },
  );
  if (root.value) observer.observe(root.value);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  preference?.removeEventListener("change", updateMotion);
});
</script>
<template>
  <figure ref="root" class="coder-artwork" :class="`cart-${variant}`">
    <div class="cart-composition">
      <img
        class="cart-base"
        :src="`/img/coder/v2/${variant === 'workbench' ? 'workbench' : 'mobile-edge'}.webp`"
        :alt="
          variant === 'workbench'
            ? 'AITJE-uil bij een werkstation met echte code-review op het scherm'
            : 'Lokale AITJE-box met de Coder-webapp op een telefoon'
        "
        width="1536"
        height="1024"
        loading="eager"
      />
      <div class="cart-display">
        <img
          :src="screen"
          :alt="
            variant === 'workbench'
              ? 'Productopname van de code-review'
              : 'Echte mobiele interface van AITJE Coder'
          "
          :width="variant === 'workbench' ? 1440 : 640"
          :height="variant === 'workbench' ? 900 : 1385"
          loading="eager"
        />
      </div>
      <span
        v-if="variant === 'mobile'"
        class="cart-camera"
        aria-hidden="true"
      />
    </div>
    <figcaption>
      Productillustratie met echte Coder-schermen · fictief demoproject
    </figcaption>
  </figure>
</template>
<style scoped>
.coder-artwork {
  margin: 0;
  min-width: 0;
}
.cart-composition {
  position: relative;
}
.cart-base {
  width: 100%;
  height: auto;
  display: block;
}
.cart-display {
  position: absolute;
  overflow: hidden;
  background: #1a1a1a;
}
.cart-display > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.cart-workbench .cart-display {
  left: 31.9%;
  top: 20.2%;
  width: 54.8%;
  height: 46.7%;
  border-radius: 0.2rem;
}
.cart-mobile .cart-display {
  left: 51.4%;
  top: 2.8%;
  width: 25%;
  height: 78.8%;
  border-radius: 9%/4.5%;
}
.cart-camera {
  position: absolute;
  left: 60.7%;
  top: 3.8%;
  width: 6.4%;
  height: 2.7%;
  border-radius: 2rem;
  background: #050505;
}
.coder-artwork figcaption {
  color: #919b82;
  font-size: 0.58rem;
  line-height: 1.8;
  text-align: center;
  max-width: 32rem;
  margin: 0.6rem auto 0;
}
@media (max-width: 480px) {
  .coder-artwork figcaption {
    font-size: 0.5rem;
    max-width: 18rem;
  }
}
</style>
