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
            <button
              type="button"
              :aria-label="copy.phone"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = true"
            >
              <PhoneCall aria-hidden="true" class="h-5 w-5" />
            </button>
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

    <Teleport to="body">
      <div
        v-if="showPhoneNotice"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="phoneNoticeTitleId"
        @click.self="showPhoneNotice = false"
      >
        <div class="w-full max-w-md rounded-3xl border border-white/10 bg-[#111] p-6 text-white shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                {{ copy.phoneKicker }}
              </p>
              <h2 :id="phoneNoticeTitleId" class="mt-3 text-2xl font-semibold">
                {{ copy.phoneTitle }}
              </h2>
            </div>
            <button
              type="button"
              :aria-label="copy.close"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              <X aria-hidden="true" class="h-5 w-5" />
            </button>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">
            {{ copy.phoneBody }}
          </p>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              :to="phoneContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              @click="showPhoneNotice = false"
            >
              {{ copy.phoneCta }}
            </NuxtLink>
            <NuxtLink
              :to="introContactPath"
              class="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#facc15] hover:text-[#facc15]"
              @click="showPhoneNotice = false"
            >
              {{ copy.introCta }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PhoneCall, X } from "lucide-vue-next";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const { isEnglish, localePath } = useSiteLocale();
const showPhoneNotice = ref(false);
const phoneNoticeTitleId = "footer-phone-notice-title";
const phoneContactPath = computed(() => localePath("/contact?onderwerp=belverzoek"));
const introContactPath = computed(() => localePath("/contact?onderwerp=kennismaking"));

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
        phone: "Request a call from AITJE",
        phoneKicker: "Phone contact",
        phoneTitle: "Request a call",
        phoneBody:
          "We no longer publish our phone number because of the increase in spam calls. Leave a call request through the contact form and we will get back to you.",
        phoneCta: "Request a call",
        introCta: "Digital introduction",
        close: "Close",
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
        phone: "Vraag een belverzoek aan bij AITJE",
        phoneKicker: "Telefonisch contact",
        phoneTitle: "Vraag een belverzoek aan",
        phoneBody:
          "We delen ons telefoonnummer niet meer openbaar door de toename van spam calls. Laat via het contactformulier een belverzoek achter, dan nemen we contact met je op.",
        phoneCta: "Belverzoek indienen",
        introCta: "Digitale kennismaking",
        close: "Sluiten",
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
