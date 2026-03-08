<template>
  <section
    class="relative mt-[12.5em] overflow-visible bg-[#facc15] px-6 py-20"
  >
    <div
      class="owl-anchor pointer-events-none absolute z-20"
      aria-hidden="true"
    >
      <div class="owl" :style="owlStyle">
        <div class="head">
          <div></div>
          <div></div>
          <div class="eye"></div>
          <div class="eye"></div>
          <div></div>
        </div>
        <div class="body">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="wing">
          <div></div>
          <div class="feather"></div>
          <div class="feather"></div>
          <div class="feather"></div>
        </div>
        <div class="tail">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="legs">
          <div></div>
          <div></div>
        </div>
        <div class="feathers">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="floor"></div>
        <div class="extra">
          <div class="leaf"></div>
          <div class="leaf"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -right-28 -bottom-36 opacity-35 md:-right-16 md:-bottom-28"
      >
        <svg width="360" height="360" viewBox="-400 -400 600 800">
          <path
            stroke="#111111"
            stroke-width="24"
            fill="#facc15"
            stroke-linejoin="round"
            d="
            M 0 0
            A 60 60 0 1 1 -120 0
            L -120 -150
            L -250 -150
            A 10 10 0 0 1 -225 -25
            A 100 100 0 0 0 0 150
          "
          />
          <defs>
            <g id="wing">
              <path
                stroke="#111111"
                stroke-width="24"
                stroke-linejoin="round"
                fill="#facc15"
                d="
                M 0 0
                L 0 -240
                A 70 70 0 1 1 150 -150
                Z
              "
              />
              <path
                stroke="#111111"
                stroke-width="12"
                stroke-linejoin="round"
                fill="#111111"
                d="
                M 35 -90
                L 35 -210
                A 30 30 0 0 1 120 -170
                Z
              "
              />
            </g>
            <g id="crest">
              <line
                x1="-120"
                y1="-150"
                x2="-120"
                y2="-225"
                stroke="#111111"
                stroke-width="24"
                stroke-linecap="round"
              />
              <circle
                r="24"
                cx="-120"
                cy="-225"
                stroke="#111111"
                fill="#111111"
              />
            </g>
          </defs>
          <use href="#wing" />
          <use href="#wing" transform="rotate(45)" />
          <use href="#wing" transform="rotate(90)" />
          <use href="#wing" transform="rotate(135)" />
          <line
            x1="-100"
            y1="210"
            x2="-120"
            y2="260"
            stroke="#111111"
            stroke-width="24"
            stroke-linecap="round"
          />
          <line
            x1="-160"
            y1="210"
            x2="-180"
            y2="260"
            stroke="#111111"
            stroke-width="24"
            stroke-linecap="round"
          />
          <use href="#crest" />
          <use
            href="#crest"
            transform="translate(-120, -150) rotate(45) translate(120, 150)"
          />
          <use
            href="#crest"
            transform="translate(-120, -150) rotate(90) translate(120, 150)"
          />
          <use
            href="#crest"
            transform="translate(-120, -150) rotate(135) translate(120, 150)"
          />
        </svg>
      </div>
    </div>
    <div class="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
      <h2 class="text-5xl font-black text-gray-900">
        Klaar om onafhankelijk met AI te werken?
      </h2>
      <p class="text-lg text-gray-800">
        Met AITJE werk je lokaal, houd je jouw data in eigen beheer en heb je
        regie over je AI infrastructuur. We laten je graag zien wat dat in de
        praktijk oplevert.
      </p>
      <div class="flex justify-center">
        <NuxtLink
          to="/contact?onderwerp=kennismaking"
          class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
        >
          Plan een kennismaking
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const owlStyle = computed(() => ({
  "--bg-colour": route.path === "/" ? "#ffffff" : "#f5f5f5",
}));
</script>

<style scoped>
.owl-anchor {
  left: 0.5rem;
  top: 0;
  margin-top: -7em;
  transform: scale(0.62);
  transform-origin: top left;
}

.owl {
  --main-colour: #333d3f;
  --bg-colour: #f5f5f5;
  position: relative;
  width: 265px;
  height: 245px;
}

.owl .head {
  position: relative;
  z-index: 2;
}

.owl .head div:nth-child(1) {
  position: absolute;
  top: -20px;
  left: 175px;
  width: 50px;
  height: 50px;
  background: var(--bg-colour);
  transform: rotate(45deg);
  overflow: hidden;
  z-index: 2;
}

.owl .head div:nth-child(1)::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  display: block;
  width: 100px;
  height: 100px;
  background: var(--main-colour);
  border-radius: 100%;
}

.owl .head div:nth-child(2) {
  position: absolute;
  top: 33px;
  left: 168px;
  width: 63px;
  height: 30px;
  background: var(--bg-colour);
  border-radius: 30px;
  z-index: 1;
}

.owl .head .eye {
  position: absolute;
  width: 13px;
  height: 13px;
  background: var(--main-colour);
  border-radius: 100%;
  z-index: 2;
}

.owl .head div:nth-child(3) {
  top: 41px;
  left: 175px;
}

.owl .head div:nth-child(4) {
  top: 41px;
  left: 211px;
}

.owl .head div:nth-child(5) {
  position: absolute;
  top: 51px;
  left: 196px;
  border-top: 10px solid var(--main-colour);
  border-left: 4px solid var(--bg-colour);
  border-right: 4px solid var(--bg-colour);
  z-index: 2;
}

.owl .head div:nth-child(5)::after {
  content: "";
  position: absolute;
  top: -14px;
  left: -4px;
  width: 8px;
  height: 4px;
  background: var(--main-colour);
  border-radius: 50% 50% 100% 0 / 100% 100% 0 0;
}

.owl .body {
  position: relative;
  z-index: 1;
}

.owl .body div:nth-child(1) {
  position: absolute;
  top: 10px;
  left: 190px;
  border-right: 50px solid var(--main-colour);
  border-top: 50px solid var(--bg-colour);
}

.owl .body div:nth-child(2) {
  position: absolute;
  top: 10px;
  left: 160px;
  border-left: 50px solid var(--main-colour);
  border-top: 50px solid var(--bg-colour);
}

.owl .body div:nth-child(3) {
  position: absolute;
  top: 60px;
  left: 160px;
  width: 80px;
  height: 20px;
  background: var(--main-colour);
}

.owl .body div:nth-child(4) {
  position: absolute;
  top: 80px;
  left: 160px;
  width: 80px;
  height: 80px;
  background: var(--main-colour);
  border-radius: 0 100% 100% 0 / 0 0 100% 100%;
  border-bottom: 4px solid var(--bg-colour);
  border-right: 4px solid var(--bg-colour);
}

.owl .wing div:nth-child(1) {
  position: absolute;
  top: 30px;
  left: 105px;
  width: 60px;
  height: 106px;
  background: var(--main-colour);
  border-top-right-radius: 20px;
  transform: skew(30deg);
}

.owl .wing .feather {
  position: absolute;
  width: 60px;
  height: 30px;
  background: var(--main-colour);
}

.owl .wing .feather::before {
  content: "";
  position: absolute;
  left: -30px;
  display: block;
  width: 30px;
  height: 30px;
  background: var(--main-colour);
  border-radius: 0 100% 0 100% / 0 0 100% 100%;
}

.owl .wing div:nth-child(2) {
  top: 30px;
  left: 40px;
}

.owl .wing div:nth-child(3) {
  top: 68px;
  left: 60px;
}

.owl .wing div:nth-child(4) {
  top: 106px;
  left: 85px;
}

.owl .tail div:nth-child(1) {
  position: absolute;
  top: 125px;
  left: 112px;
  border-top: 60px solid transparent;
  border-right: 30px solid var(--main-colour);
}

.owl .tail div:nth-child(2) {
  position: absolute;
  top: 125px;
  left: 142px;
  width: 10px;
  height: 60px;
  background: var(--main-colour);
}

.owl .tail div:nth-child(3) {
  position: absolute;
  top: 125px;
  left: 152px;
  border-left: 20px solid var(--main-colour);
  border-bottom: 60px solid transparent;
}

.owl .legs div {
  position: absolute;
  width: 10px;
  height: 50px;
  background: var(--main-colour);
  transform: skew(15deg);
}

.owl .legs div:nth-child(1) {
  top: 135px;
  left: 180px;
  z-index: 2;
}

.owl .legs div:nth-child(2) {
  top: 135px;
  left: 195px;
}

.owl .feathers div {
  position: absolute;
  width: 18px;
  height: 7px;
  background: var(--bg-colour);
  border-radius: 0 100% 50% 50% / 0 0 100% 100%;
  z-index: 2;
}

.owl .feathers div:nth-child(1) {
  top: 90px;
  left: 173px;
}

.owl .feathers div:nth-child(2) {
  top: 90px;
  left: 208px;
}

.owl .feathers div:nth-child(3) {
  top: 108px;
  left: 190px;
}

.owl .feathers div:nth-child(4) {
  top: 126px;
  left: 173px;
}

.owl .floor {
  position: absolute;
  top: 175px;
  left: 120px;
  height: 10px;
  width: 120px;
  background: var(--main-colour);
}

.owl .extra .leaf {
  position: absolute;
  width: 30px;
  height: 30px;
  background: var(--main-colour);
  border-radius: 80% 0;
}

.owl .extra div:nth-child(1) {
  top: 135px;
  left: 220px;
  transform: rotate(15deg);
}

.owl .extra div:nth-child(2) {
  top: 198px;
  left: 160px;
  transform: rotate(120deg);
}

.owl .extra .circle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #333d3f;
  border-radius: 100%;
}

.owl .extra div:nth-child(3) {
  top: 195px;
  left: 200px;
}

.owl .extra div:nth-child(4) {
  top: 195px;
  left: 130px;
}
</style>
