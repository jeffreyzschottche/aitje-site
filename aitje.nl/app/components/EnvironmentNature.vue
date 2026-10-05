<script setup lang="ts">
import { gsap } from "gsap";

const nature = ref<HTMLElement | null>(null);
let media: gsap.MatchMedia | undefined;

onMounted(() => {
  const element = nature.value;
  if (!element) return;

  media = gsap.matchMedia();
  media.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
    const animations = Array.from(element.querySelectorAll<HTMLElement>(".nature-motion"))
      .map((item, index) => {
        const bird = item.parentElement?.classList.contains("nature-bird");
        const flying = item.parentElement?.classList.contains("bird-left");
        return gsap.to(item, {
          x: flying ? 7 : 0,
          y: flying ? -5 : bird ? -1.5 : -7,
          rotation: flying ? -0.8 : bird ? 0.25 : (index % 2 ? 1.8 : -1.8),
          duration: flying ? 5.8 : bird ? 5.2 : 4.8 + index * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
          transformOrigin: bird ? "50% 80%" : "30% 90%",
        });
      });
    const observer = new IntersectionObserver(([entry]) => {
      animations.forEach(animation => entry?.isIntersecting ? animation.resume() : animation.pause());
    });
    observer.observe(element);
    return () => observer.disconnect();
  });
});

onBeforeUnmount(() => media?.revert());
</script>

<template>
  <div ref="nature" class="environment-nature" aria-hidden="true">
    <div class="nature-decoration nature-bird bird-left">
      <div class="nature-motion">
        <img src="/img/redesign/environment-swallow.webp" alt="" width="768" height="512" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="nature-decoration plant-left">
      <div class="nature-motion">
        <img src="/img/redesign/environment-flowers.webp" alt="" width="768" height="768" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="nature-decoration plant-top-right">
      <div class="nature-motion">
        <img src="/img/redesign/environment-foliage.webp" alt="" width="768" height="768" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="nature-decoration nature-bird bird-right">
      <div class="nature-motion">
        <img src="/img/redesign/environment-finch.webp" alt="" width="768" height="768" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="nature-decoration plant-bottom-right">
      <div class="nature-motion">
        <img src="/img/redesign/environment-foliage.webp" alt="" width="768" height="768" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="nature-decoration nest-corner">
      <img src="/img/redesign/environment-flower-nest.webp" alt="" width="768" height="768" loading="lazy" decoding="async" />
    </div>
  </div>
</template>

<style scoped>
.environment-nature {
  --nature-gutter: max(0px, calc((100vw - 1320px) / 2));
  position: absolute;
  inset: 0;
  /* Contain horizontal overflow while leaves cross both section edges. */
  clip-path: inset(-240px 0 -240px);
  pointer-events: none;
  user-select: none;
}
.nature-decoration {
  position: absolute;
}
.nature-decoration img {
  display: block;
  width: 100%;
  height: auto;
}
.bird-left {
  top: 15%;
  left: clamp(16px, calc(var(--nature-gutter) * 0.3 - 30px), 220px);
  width: clamp(150px, calc(var(--nature-gutter) * 0.62), 280px);
}
.plant-left {
  top: 43%;
  left: -90px;
  width: clamp(240px, calc(var(--nature-gutter) * 0.85), 420px);
  transform: rotate(18deg);
}
.plant-top-right {
  top: -100px;
  right: -65px;
  width: clamp(240px, calc(var(--nature-gutter) * 0.9), 400px);
  transform: rotate(-110deg);
}
.bird-right {
  top: 30%;
  right: -28px;
  width: clamp(135px, calc(var(--nature-gutter) * 0.52), 230px);
}
.plant-bottom-right {
  bottom: -145px;
  right: -85px;
  width: clamp(260px, calc(var(--nature-gutter) * 0.95), 460px);
  transform: rotate(-65deg);
}
.nest-corner {
  bottom: 35px;
  right: clamp(8px, calc(var(--nature-gutter) * 0.1), 90px);
  width: clamp(170px, calc(var(--nature-gutter) * 0.72), 290px);
}
@media (min-width: 1280px) and (max-width: 1599px) {
  .bird-left { left: 6px; width: 140px; }
  .bird-right { right: -28px; width: 125px; }
  .plant-left { left: -125px; width: 230px; }
  .plant-top-right { right: -95px; width: 220px; }
  .plant-bottom-right { right: -95px; width: 240px; }
  .nest-corner { right: 0; bottom: 25px; width: 150px; }
}
@media (max-width: 1279px) {
  .nature-decoration { display: none; }
  .plant-bottom-right {
    display: block;
    width: 160px;
    right: -60px;
    bottom: -75px;
  }
  .nest-corner {
    display: block;
    width: 130px;
    right: 18px;
    bottom: 0;
  }
}
@media (max-width: 767px) {
  .nest-corner {
    left: 18px;
    right: auto;
  }
}
</style>
