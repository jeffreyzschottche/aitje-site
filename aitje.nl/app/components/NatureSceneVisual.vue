<script setup lang="ts">
const visual = ref<SVGSVGElement | null>(null);
const glowId = `egg-light-${useId().replace(/:/g, "")}`;
const birdMaskId = `${glowId}-bird`;

onMounted(() => {
  const element = visual.value;
  if (!element) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = false;
  let frame = 0;

  const update = () => {
    frame = 0;
    const bounds = element.getBoundingClientRect();
    // Charge while the artwork enters the viewport; retain the glow on exit.
    const distance = Math.min(bounds.height, window.innerHeight) * 0.85;
    const progress = motion.matches
      ? 0.65
      : Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / distance));
    element.style.setProperty("--egg-charge", progress.toFixed(3));
  };
  const schedule = () => {
    if (visible && !motion.matches && !frame) frame = requestAnimationFrame(update);
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? false;
    if (visible) update();
  });

  observer.observe(element);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  motion.addEventListener("change", update);
  update();

  onBeforeUnmount(() => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    motion.removeEventListener("change", update);
  });
});
</script>

<template>
  <div class="nature-scene-artwork">
    <div class="nature-scene-crop">
      <svg
        ref="visual"
        class="nature-scene-visual"
        viewBox="0 0 1536 1024"
        preserveAspectRatio="xMinYMid slice"
        role="img"
        aria-label="Een kraai bij een ei met een gouden lichtkring tussen mos, takken en kabels"
      >
        <defs>
          <radialGradient :id="glowId">
            <stop offset="0" stop-color="#ffd45a" stop-opacity="0.65" />
            <stop offset="0.4" stop-color="#ffb719" stop-opacity="0.24" />
            <stop offset="1" stop-color="#ff9d00" stop-opacity="0" />
          </radialGradient>
        </defs>
        <image
          href="/img/redesign/raven-scene-natural.webp"
          width="1536"
          height="1024"
        />
        <g class="egg-light" aria-hidden="true">
          <ellipse cx="542" cy="695" rx="230" ry="185" :fill="`url(#${glowId})`" />
          <path
            class="egg-orbit-halo"
            d="M 448 708 C 434 743 644 656 617 604"
            pathLength="1"
          />
          <path
            class="egg-orbit-core"
            d="M 448 708 C 434 743 644 656 617 604"
            pathLength="1"
          />
        </g>
      </svg>
    </div>
    <svg
      class="nature-scene-bird"
      viewBox="0 0 1536 1024"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      <defs>
        <!-- Use the feather alpha, keeping the original photo pixels aligned. -->
        <filter :id="`${birdMaskId}-opaque`" color-interpolation-filters="sRGB">
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.02" />
          </feComponentTransfer>
        </filter>
        <mask
          :id="birdMaskId"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1536"
          height="1024"
          style="mask-type: alpha"
        >
          <image
            href="/img/redesign/raven-feather-mask.webp"
            width="1536"
            height="1024"
            :filter="`url(#${birdMaskId}-opaque)`"
          />
        </mask>
      </defs>
      <image
        href="/img/redesign/raven-scene-natural.webp"
        width="1536"
        height="1024"
        :mask="`url(#${birdMaskId})`"
      />
    </svg>
  </div>
</template>

<style scoped>
.nature-scene-artwork {
  pointer-events: none;
}
.nature-scene-crop {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.nature-scene-visual,
.nature-scene-bird {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.nature-scene-bird {
  overflow: visible;
  /* Only the crown above the photo needs the transparent overlay. */
  clip-path: inset(-100vmax 0 calc(100% - 2px) 0);
}
.nature-scene-visual {
  --egg-charge: 0;
  pointer-events: none;
}
.egg-light {
  opacity: var(--egg-charge);
  mix-blend-mode: screen;
}
.egg-orbit-halo,
.egg-orbit-core {
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: calc(1 - var(--egg-charge));
}
.egg-orbit-halo {
  stroke: #ffbd15;
  stroke-width: 16;
  filter: blur(9px);
}
.egg-orbit-core {
  stroke: #fff6bb;
  stroke-width: 3;
  filter: drop-shadow(0 0 5px #ffde32) drop-shadow(0 0 13px #ffb300);
}
@media (max-width: 767px) {
  .nature-scene-crop {
    mask-image: linear-gradient(to bottom, #000 76%, transparent);
  }
  .nature-scene-visual,
  .nature-scene-bird {
    top: -84px;
    bottom: auto;
    height: calc(100% + 84px);
    width: 100%;
    max-width: none;
  }
  .nature-scene-bird {
    clip-path: inset(0 0 calc(100% - 86px) 0);
  }
}
</style>
