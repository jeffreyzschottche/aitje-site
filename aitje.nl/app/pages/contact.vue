<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Contact
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Praat met het team van AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Heb je vragen of wil je meer informatie over onze producten, diensten
          of aanpak? Stuur ons gerust een bericht. We denken graag met je mee
          over wat past bij jouw organisatie.
        </p>
      </section>

      <div
        class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <section class="space-y-6">
          <div
            class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 class="text-2xl font-semibold">Direct contact</h2>
            <p class="mt-2 text-sm text-gray-500">
              Kies het kanaal dat voor jou het prettigst werkt.
            </p>
            <div class="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aitje-bv-a095453b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AITJE op LinkedIn"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
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
                aria-label="AITJE op TikTok"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
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
                aria-label="Mail AITJE"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
              >
                <img
                  :src="gmailIcon"
                  alt=""
                  aria-hidden="true"
                  class="h-5 w-5 object-contain"
                />
              </a>
            </div>
          </div>
          <div class="rounded-3xl bg-[#facc15] p-6 text-[#212121]">
            <h3 class="text-xl font-semibold">
              Veel vragen zijn al beantwoord in de FAQ
            </h3>
            <p class="mt-3 text-sm">
              Bekijk eerst de veelgestelde vragen over privacy, back-ups,
              maatwerk en gebruik. Staat jouw vraag er niet tussen, neem dan
              gewoon contact met ons op.
            </p>
            <NuxtLink
              to="/faq"
              class="mt-5 inline-flex text-sm font-semibold text-black underline decoration-black/40 underline-offset-4 transition hover:decoration-black"
            >
              Naar de FAQ
            </NuxtLink>
          </div>
          <section
            v-if="formData.subject === 'kennismaking'"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Digitale kennismaking
              </p>
              <h3 class="mt-2 text-2xl font-semibold text-gray-900">
                Plan een afspraak
              </h3>
            </div>
            <div class="mt-6 grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700"
                  >Kies een datum *</label
                >
                <input
                  type="date"
                  v-model="selectedDate"
                  :min="bookingWindow.min"
                  :max="bookingWindow.max"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700"
                  >Kies een tijd *</label
                >
                <select
                  v-model="selectedTime"
                  :disabled="!selectedDate"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                >
                  <option value="">Selecteer een tijd</option>
                  <option
                    v-for="time in availableTimes"
                    :key="time"
                    :value="time"
                  >
                    {{ time }}
                  </option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700"
                  >Platform *</label
                >
                <select
                  v-model="meetingPlatform"
                  required
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
                >
                  <option value="">Selecteer een platform</option>
                  <option
                    v-for="platform in platformOptions"
                    :key="platform"
                    :value="platform"
                  >
                    {{ platform }}
                  </option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700"
                  >Verificatie e-mail *</label
                >
                <input
                  type="email"
                  v-model="verificationEmail"
                  required
                  placeholder="waar wil je de afspraakbevestiging ontvangen?"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
                />
              </div>
            </div>
          </section>
        </section>
        <section
          class="flex flex-col rounded-3xl border border-gray-200 bg-[#fafafa] p-8"
        >
          <h2 class="text-3xl font-semibold">Stuur ons een bericht</h2>
          <form
            class="mt-6 flex flex-1 flex-col space-y-4"
            @submit.prevent="submitContact"
          >
            <div
              v-if="submitMessage"
              :class="[
                'rounded-2xl border px-4 py-3 text-sm',
                submitState === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : 'border-red-200 bg-red-50 text-red-800',
              ]"
            >
              {{ submitMessage }}
            </div>
            <FormInput
              label="Naam *"
              v-model="formData.name"
              required
              placeholder="Je naam"
            />
            <FormInput
              label="Email *"
              v-model="formData.email"
              type="email"
              required
              placeholder="je@email.nl"
            />
            <FormInput
              label="Telefoon"
              v-model="formData.phone"
              placeholder="+31 6 12345678"
            />
            <div>
              <label class="block text-sm font-semibold text-gray-700"
                >Onderwerp *</label
              >
              <select
                v-model="formData.subject"
                required
                class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
              >
                <option
                  v-for="option in subjectOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="flex-1">
              <label class="block text-sm font-semibold text-gray-700"
                >Bericht *</label
              >
              <textarea
                v-model="formData.message"
                required
                class="mt-2 h-full w-full min-h-[12rem] rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
                :placeholder="messagePlaceholder"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitDisabled"
              class="mt-8 w-full rounded-full bg-black px-6 py-3 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
            >
              {{
                isSubmitting
                  ? "Bezig met versturen..."
                  : formData.subject === "kennismaking"
                    ? "Bevestig afspraak"
                    : "Verstuur bericht"
              }}
            </button>
          </form>
        </section>
      </div>

      <section
        class="mx-auto mt-16 flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[3rem] bg-[#212121] px-8 py-16 text-white md:flex-row md:items-center"
      >
        <div class="space-y-6 md:w-2/3">
          <p
            class="text-xs font-semibold uppercase tracking-[0.5em] text-gray-300"
          >
            Neem contact op
          </p>
          <h2 class="text-4xl font-black leading-tight">
            We beantwoorden je vragen graag
          </h2>
          <p class="text-lg text-gray-200">
            Bij AITJE doen we ons best om lange strategische relaties aan te
            gaan. Jij focust je op waar jij goed in bent, je business, en wij
            zorgen er voor dat jouw moderne onderneming vlekkeloos AI op een
            veilige manier, toekomstbestendig kan integreren.
          </p>
        </div>
        <img
          src="/images/birds.png"
          alt="Vrije vogel"
          class="h-64 w-full rounded-3xl object-cover shadow-2xl shadow-black/40 md:w-1/3"
        />
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, reactive, ref } from "vue";
import linkedinIcon from "@/assets/images/social/linkedin.png";
import gmailIcon from "@/assets/images/social/gmail.png";

const route = useRoute();

const subjectOptions = [
  { value: "council", label: "Council" },
  { value: "demo", label: "Demo" },
  { value: "kennismaking", label: "Kennismaking" },
  { value: "vraag", label: "Vraag" },
  { value: "partnerschap", label: "Partnerschap" },
  { value: "offerte", label: "Offerte" },
];

const resolveSubjectFromQuery = () => {
  const query = route.query;
  const allowed = new Set(subjectOptions.map((option) => option.value));

  const onderwerpParam = query.onderwerp;
  const onderwerp = Array.isArray(onderwerpParam)
    ? onderwerpParam[0]
    : onderwerpParam;

  if (typeof onderwerp === "string" && allowed.has(onderwerp)) {
    return onderwerp;
  }

  for (const key of Object.keys(query)) {
    if (allowed.has(key)) {
      return key;
    }
  }

  return "kennismaking";
};

const resolveMessageFromQuery = () => {
  const messageParam = route.query.bericht;
  const message = Array.isArray(messageParam) ? messageParam[0] : messageParam;

  if (typeof message === "string" && message.trim().length > 0) {
    return message;
  }

  return "";
};

const formatInputDate = (date: Date) => date.toISOString().slice(0, 10);
const today = new Date();
const maxBookingDate = new Date(today);
maxBookingDate.setDate(today.getDate() + 30);

const bookingWindow = computed(() => ({
  min: formatInputDate(today),
  max: formatInputDate(maxBookingDate),
}));

const availableTimes = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];
const platformOptions = [
  "Google Meet",
  "Microsoft Teams",
  "Discord",
  "Zoom",
  "Telefoon",
];

const selectedDate = ref("");
const selectedTime = ref("");
const meetingPlatform = ref("");
const verificationEmail = ref("");
const isSubmitting = ref(false);
const submitState = ref<"success" | "error" | "">("");
const submitMessage = ref("");
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  subject: resolveSubjectFromQuery(),
  message: resolveMessageFromQuery(),
});

const messagePlaceholder = computed(() => {
  switch (formData.subject) {
    case "council":
      return "Vertel ons wat voor council je wilt laten bouwen, welke teams of agents meedoen, welke acties wel of niet mogen en waar human-in-the-loop nodig is.";
    case "demo":
      return "Vertel ons waar je een demo van zou willen.";
    case "kennismaking":
      return "Vertel ons waarom je een kennismaking wilt inplannen.";
    case "vraag":
      return "Vertel ons welke vraag je hebt.";
    case "partnerschap":
      return "Vertel ons waarom je graag met AITJE wilt samenwerken en welke kans je ziet.";
    case "offerte":
      return "Vertel ons voor welke dienst, case of product je een offerte wilt ontvangen.";
    default:
      return "Vertel ons waar we je mee kunnen helpen.";
  }
});

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString("nl-NL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const resetForm = () => {
  formData.name = "";
  formData.email = "";
  formData.phone = "";
  formData.subject = resolveSubjectFromQuery();
  formData.message = "";
  selectedDate.value = "";
  selectedTime.value = "";
  meetingPlatform.value = "";
  verificationEmail.value = "";
};

const submitContact = async () => {
  submitState.value = "";
  submitMessage.value = "";

  if (
    formData.subject === "kennismaking" &&
    (!selectedDate.value ||
      !selectedTime.value ||
      !meetingPlatform.value ||
      !verificationEmail.value)
  ) {
    if (typeof window !== "undefined") {
      window.alert(
        "Vul alle afspraakgegevens in om je kennismaking te plannen.",
      );
    }
    return;
  }

  try {
    isSubmitting.value = true;

    await $fetch("/api/contact", {
      method: "POST",
      body: {
        locale: "nl",
        ...formData,
        meetingDate: selectedDate.value,
        meetingTime: selectedTime.value,
        meetingPlatform: meetingPlatform.value,
        verificationEmail: verificationEmail.value,
      },
    });

    submitState.value = "success";
    submitMessage.value =
      formData.subject === "kennismaking"
        ? `Kennismaking ingepland op ${formatDate(selectedDate.value)} om ${selectedTime.value} via ${meetingPlatform.value}. We antwoorden op ${verificationEmail.value}.`
        : "Bedankt. Je bericht is verzonden en we nemen zo snel mogelijk contact met je op.";

    resetForm();
  } catch (error: unknown) {
    const message =
      typeof error === "object" &&
      error !== null &&
      "data" in error &&
      typeof error.data === "object" &&
      error.data !== null &&
      "statusMessage" in error.data &&
      typeof error.data.statusMessage === "string"
        ? error.data.statusMessage
        : "Versturen mislukt. Probeer het later opnieuw.";

    submitState.value = "error";
    submitMessage.value = message;
  } finally {
    isSubmitting.value = false;
  }
};

const isSubmitDisabled = computed(() => {
  if (isSubmitting.value) return true;
  if (formData.subject !== "kennismaking") return false;
  return (
    !selectedDate.value ||
    !selectedTime.value ||
    !meetingPlatform.value ||
    !verificationEmail.value
  );
});

const FormInput = defineComponent({
  props: {
    label: { type: String, required: true },
    modelValue: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    required: { type: Boolean, default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    return () =>
      h("div", {}, [
        h(
          "label",
          { class: "block text-sm font-semibold text-gray-700" },
          props.label,
        ),
        h("input", {
          class:
            "mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none",
          type: props.type,
          value: props.modelValue,
          required: props.required,
          placeholder: props.placeholder,
          onInput: (event: Event) =>
            emit("update:modelValue", (event.target as HTMLInputElement).value),
        }),
      ]);
  },
});
</script>
