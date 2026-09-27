<script setup lang="ts">
// Contact page (redesign/pages/contact.md, besluiten 46, 51). Buttons elsewhere prefill ?onderwerp= and ?product=.
import {
  contactProducts,
  contactTopics,
  findContactProduct,
  findTopic,
} from "#shared/contactTopics";
import { contact } from "@/content/site";

usePageSeo({
  title: "Contact",
  description: `Bespreek je AI-vraag met AITJE. Mail ${contact.email} of vul het formulier in. AITJE denkt mee.`,
  breadcrumbs: [{ name: "Contact", path: "/contact" }],
});

const route = useRoute();
const initialTopic =
  findTopic(String(route.query.onderwerp ?? ""))?.key ?? "ai-vraag";
const initialProduct =
  findContactProduct(String(route.query.product ?? ""))?.slug ?? "";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  topic: initialTopic as string,
  product: initialProduct as string,
  message: "",
  website: "",
});

watch(
  () => route.query,
  (query) => {
    form.topic = findTopic(String(query.onderwerp ?? ""))?.key ?? "ai-vraag";
    form.product = findContactProduct(String(query.product ?? ""))?.slug ?? "";
  },
);

const status = ref<"idle" | "sending" | "sent" | "error">("idle");
const errorMessage = ref("");

const needsProduct = computed(() =>
  Boolean(findTopic(form.topic)?.needsProduct),
);
const selectedProduct = computed(() => findContactProduct(form.product));

const heading = computed(() => {
  const name = selectedProduct.value?.name;
  switch (form.topic) {
    case "demo":
      return name ? `Vraag een demo aan van ${name}` : "Vraag een demo aan";
    case "product-regelen":
      return name ? `Laat AITJE ${name} regelen` : "Laat AITJE het regelen";
    case "zelfinstallatie":
      return name
        ? `Bestel ${name} voor zelfinstallatie`
        : "Bestel voor zelfinstallatie";
    case "interesse":
      return name ? `Interesse in ${name}` : "Laat je interesse weten";
    case "ai-scan":
      return "Vraag een AI-scan aan";
    case "samenwerken":
      return "Bespreek een samenwerking";
    default:
      return "Bespreek je AI-vraag";
  }
});

const submit = async () => {
  if (status.value === "sending") return;
  status.value = "sending";
  errorMessage.value = "";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...form, product: needsProduct.value ? form.product : "" },
    });
    status.value = "sent";
    window.gtag?.("event", "generate_lead", {
      topic: form.topic,
      product: form.product || undefined,
    });
  } catch (error: unknown) {
    status.value = "error";
    const data = (error as { data?: { statusMessage?: string } })?.data;
    errorMessage.value =
      data?.statusMessage ??
      "Versturen is niet gelukt. Probeer het opnieuw, of mail of bel AITJE direct.";
  }
};

const inputClass =
  "mt-2 block w-full rounded-2xl border border-line bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-ink focus:ring-4 focus:ring-brand/30";
</script>

<template>
  <div class="contact-page">
    <section class="relative overflow-hidden pt-28 pb-24 md:pt-36">
      <div
        class="pointer-events-none absolute -top-32 -right-32 -z-10 size-[40rem] rounded-full bg-brand/20 blur-3xl"
      />
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p class="eyebrow text-brand-ink">Contact</p>
          <h1
            class="mt-4 font-heading text-[2.6rem] leading-[1.02] font-bold md:text-[3.8rem]"
          >
            {{ heading }}
          </h1>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Vertel waar je tegenaan loopt of wat je wilt bereiken. AITJE denkt
            mee en laat je weten welke route past.
          </p>

          <div class="contact-scene mt-8 max-w-sm">
            <ServiceScene
              src="/img/redesign/contact.webp"
              alt="Een postduif op een stapel enveloppen naast een koperen brievenbusklep, met het gloeiende AITJE-ei"
            />
          </div>
          <div class="mt-10 space-y-3">
            <a
              v-if="contact.phoneConfirmed"
              :href="contact.phoneHref"
              class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink"
            >
              <span class="grid size-11 place-items-center rounded-xl bg-brand"
                ><AppIcon name="phone" :size="19"
              /></span>
              <span>
                <span class="block text-sm text-muted">Bellen</span>
                <span class="font-semibold">{{ contact.phone }}</span>
              </span>
            </a>
            <a
              :href="`mailto:${contact.email}`"
              class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink"
            >
              <span class="grid size-11 place-items-center rounded-xl bg-brand"
                ><AppIcon name="mail" :size="19"
              /></span>
              <span>
                <span class="block text-sm text-muted">Mailen</span>
                <span class="font-semibold">{{ contact.email }}</span>
              </span>
            </a>
          </div>
          <p class="mt-4 text-sm text-muted">{{ contact.hours }}</p>
          <p class="draft-note">
            Liever bellen? Laat je telefoonnummer achter in het formulier.
          </p>
          <div class="contact-note">
            <AppIcon name="message" :size="23" class="shrink-0" />
            <p>
              Je hoeft je vraag nog niet technisch uit te werken. Vertel wat je
              doet en waar je tegenaan loopt.
            </p>
          </div>

          <div class="on-dark mt-10 rounded-panel bg-ink p-6 text-white">
            <p class="font-heading font-semibold">Klantvraag over AI?</p>
            <p class="mt-1 text-sm text-muted-dark">
              Ben je een IT-bedrijf of bureau? Bekijk hoe AITJE met je
              samenwerkt.
            </p>
            <NuxtLink
              to="/diensten/voor-it-bedrijven"
              class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Voor IT-bedrijven en bureaus
              <AppIcon name="arrow-right" :size="15" />
            </NuxtLink>
          </div>
        </div>

        <div
          class="rounded-xl border border-line bg-surface p-6 shadow-card md:p-10"
        >
          <div v-if="status === 'sent'" class="py-10 text-center" role="status">
            <span
              class="mx-auto grid size-16 place-items-center rounded-full bg-brand"
              ><AppIcon name="check" :size="30" :stroke-width="2.5"
            /></span>
            <h2 class="mt-6 font-heading text-3xl font-bold">Bedankt!</h2>
            <p class="mx-auto mt-3 max-w-sm text-muted">
              Je vraag is binnen en AITJE neemt contact met je op. Je ontvangt
              ook een bevestiging per mail.
            </p>
            <UiButton to="/" variant="secondary" class="mt-8"
              >Terug naar de homepage</UiButton
            >
          </div>

          <form v-else class="space-y-5" @submit.prevent="submit">
            <div class="mb-7 border-b border-line pb-6">
              <p class="eyebrow text-brand-ink">Een eerste kennismaking</p>
              <h2 class="mt-2 font-heading text-2xl font-semibold">
                Vertel het aan AITJE.
              </h2>
            </div>
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="text-sm font-semibold"
                  >Naam <span class="text-brand-ink">*</span></span
                >
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  :class="inputClass"
                />
              </label>
              <label class="block">
                <span class="text-sm font-semibold"
                  >E-mail <span class="text-brand-ink">*</span></span
                >
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  :class="inputClass"
                />
              </label>
              <label class="block">
                <span class="text-sm font-semibold"
                  >Telefoon
                  <span class="font-normal text-muted">(optioneel)</span></span
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  :class="inputClass"
                />
              </label>
              <label class="block">
                <span class="text-sm font-semibold"
                  >Bedrijf
                  <span class="font-normal text-muted">(optioneel)</span></span
                >
                <input
                  v-model="form.company"
                  type="text"
                  name="company"
                  autocomplete="organization"
                  :class="inputClass"
                />
              </label>
            </div>

            <label class="block">
              <span class="text-sm font-semibold"
                >Waar gaat je vraag over?</span
              >
              <select v-model="form.topic" name="topic" :class="inputClass">
                <option
                  v-for="topic in contactTopics"
                  :key="topic.key"
                  :value="topic.key"
                >
                  {{ topic.label }}
                </option>
              </select>
            </label>

            <label v-if="needsProduct" class="block">
              <span class="text-sm font-semibold">Product</span>
              <select v-model="form.product" name="product" :class="inputClass">
                <option value="">Kies een product</option>
                <option
                  v-for="p in contactProducts"
                  :key="p.slug"
                  :value="p.slug"
                >
                  {{ p.name }}
                </option>
              </select>
            </label>

            <label class="block">
              <span class="text-sm font-semibold"
                >Je bericht <span class="text-brand-ink">*</span></span
              >
              <textarea
                v-model="form.message"
                name="message"
                rows="5"
                required
                placeholder="Bijvoorbeeld: we zijn een kantoor met 15 mensen en willen AI gebruiken zonder dat klantgegevens naar buiten gaan."
                :class="inputClass"
              />
            </label>

            <!-- Honeypot -->
            <label class="hidden" aria-hidden="true">
              Website
              <input
                v-model="form.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </label>

            <p
              v-if="status === 'error'"
              class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              role="alert"
            >
              {{ errorMessage }}
            </p>

            <div
              class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <p class="text-xs text-muted">
                Je ontvangt een bevestiging per mail. Een aanvraag is nog geen
                bestelling of afspraak.
              </p>
              <UiButton
                type="submit"
                size="lg"
                arrow
                :disabled="status === 'sending'"
              >
                {{ status === "sending" ? "Versturen…" : "Verstuur je vraag" }}
              </UiButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
