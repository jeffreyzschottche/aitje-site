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
          href="https://www.linkedin.com/in/aitje-bv-a095453b4/"
          target="_blank"
          rel="noopener noreferrer"
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
          href="https://www.tiktok.com/@aitje.bv"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="copy.tiktok"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="h-5 w-5 fill-current"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.38V2h-3.13v12.38a2.67 2.67 0 1 1-2.67-2.67c.31 0 .61.05.9.15V8.67a5.8 5.8 0 0 0-.9-.07A5.8 5.8 0 1 0 15.82 14V7.73a7.9 7.9 0 0 0 4.77 1.6V6.2c-.34 0-.67-.03-1-.11Z" />
          </svg>
        </a>
        <a
          href="mailto:aitjebv@gmail.com"
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
import gmailIcon from "@/assets/images/social/gmail.png";

const { isEnglish, localePath } = useSiteLocale();

const copy = computed(() =>
      isEnglish.value
    ? {
        linkedin: "AITJE on LinkedIn",
        tiktok: "AITJE on TikTok",
        mail: "Email AITJE",
        rights: "All rights reserved.",
      }
    : {
        linkedin: "AITJE op LinkedIn",
        tiktok: "AITJE op TikTok",
        mail: "Mail AITJE",
        rights: "Alle rechten voorbehouden.",
      },
);
</script>
