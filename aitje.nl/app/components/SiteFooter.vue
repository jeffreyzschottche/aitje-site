<template>
  <footer class="bg-black px-6 py-12 text-center text-white">
    <div class="mx-auto flex max-w-4xl flex-col items-center gap-4">
      <div class="flex items-center gap-3">
        <img
          src="/images/aitje-logo.png"
          alt="AITJE logo"
          class="object-contain invert"
          style="width: 100px; height: 80px"
        />
      </div>
      <div class="flex items-center gap-4">
        <a
          :href="localePath('/contact')"
          :aria-label="copy.linkedin"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
        >
          <img
            :src="linkedinIcon"
            alt=""
            aria-hidden="true"
            class="h-5 w-5 object-contain"
          />
        </a>
        <a
          href="https://wa.me/31201234567"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="copy.whatsapp"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
        >
          <img
            :src="whatsappIcon"
            alt=""
            aria-hidden="true"
            class="h-5 w-5 object-contain"
          />
        </a>
        <a
          href="mailto:info@aitje.nl"
          :aria-label="copy.mail"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
        >
          <img
            :src="gmailIcon"
            alt=""
            aria-hidden="true"
            class="h-5 w-5 object-contain"
          />
        </a>
      </div>
      <p class="text-xs text-gray-500">
        © {{ new Date().getFullYear() }} AITJE. {{ copy.rights }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import whatsappIcon from "@/assets/images/social/whatsapp.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { isEnglish, localePath } = useSiteLocale();

const copy = computed(() =>
  isEnglish.value
    ? {
        linkedin: "AITJE on LinkedIn",
        whatsapp: "WhatsApp AITJE",
        mail: "Email AITJE",
        rights: "All rights reserved.",
      }
    : {
        linkedin: "AITJE op LinkedIn",
        whatsapp: "WhatsApp met AITJE",
        mail: "Mail AITJE",
        rights: "Alle rechten voorbehouden.",
      },
);
</script>
