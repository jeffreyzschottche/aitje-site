<template>
  <footer class="bg-black px-6 py-12 text-white">
    <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
          {{ copy.kicker }}
        </p>
        <img
          src="/images/aitje-logo.png"
          alt="AITJE logo"
          class="mt-3 object-contain invert"
          style="width: 100px; height: 80px"
        />
        <p class="mt-4 max-w-md text-sm text-gray-300">
          {{ copy.tagline }}
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
            {{ copy.navigation }}
          </p>
          <div class="mt-4 flex flex-col gap-2">
            <NuxtLink
              v-for="link in footerLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-gray-300 transition hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
            {{ copy.contact }}
          </p>
          <div class="mt-4 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aitje-bv-a095453b4/"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="copy.linkedin"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
            >
              <img :src="linkedinIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
            <a
              href="mailto:aitjebv@gmail.com"
              :aria-label="copy.mail"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
            >
              <img :src="gmailIcon" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
            </a>
          </div>
          <video
            autoplay
            muted
            loop
            playsinline
            aria-label="Aitje animated egg"
            class="mt-5 h-16 w-16 rounded-full bg-black object-contain"
          >
            <source src="/images/aitje-home-animated-egg-boomerang-dark.mp4" type="video/mp4" />
          </video>
          <p class="mt-6 text-xs text-gray-500">© {{ new Date().getFullYear() }} AITJE. {{ copy.rights }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { isEnglish, localePath } = useSiteLocale();

const copy = computed(() =>
  isEnglish.value
    ? {
        kicker: "AITJE - Your partner in (Edge) AI",
        tagline:
          "Local Edge AI for organizations that want more control, lower long-term dependence and practical guidance.",
        navigation: "Navigation",
        contact: "Contact",
        linkedin: "AITJE on LinkedIn",
        mail: "Email AITJE",
        rights: "All rights reserved.",
      }
    : {
        kicker: "AITJE - Je partner in (Edge) AI",
        tagline:
          "Lokale Edge AI voor organisaties die meer regie willen, op de lange termijn minder afhankelijk willen zijn en praktische begeleiding zoeken.",
        navigation: "Navigatie",
        contact: "Contact",
        linkedin: "AITJE op LinkedIn",
        mail: "Mail AITJE",
        rights: "Alle rechten voorbehouden.",
      },
);

const footerLinks = computed(() => [
  { label: isEnglish.value ? "Products" : "Producten", to: localePath("/producten") },
  { label: isEnglish.value ? "Services" : "Diensten", to: localePath("/diensten") },
  { label: "Use Cases", to: localePath("/use-cases") },
  { label: isEnglish.value ? "About AITJE" : "Over AITJE", to: localePath("/over-aitje") },
  { label: "FAQ", to: localePath("/faq") },
  { label: isEnglish.value ? "Contact" : "Contact", to: localePath("/contact") },
]);
</script>
