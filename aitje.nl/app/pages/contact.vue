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
                href="/contact"
                aria-label="AITJE op LinkedIn"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
              >
                <img
                  src="/images/social/linkedin.png"
                  alt=""
                  aria-hidden="true"
                  class="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="https://wa.me/31201234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp met AITJE"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
              >
                <img
                  src="/images/social/whatsapp.png"
                  alt=""
                  aria-hidden="true"
                  class="h-5 w-5 object-contain"
                />
              </a>
              <a
                href="mailto:info@aitje.nl"
                aria-label="Mail AITJE"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] transition hover:border-[#facc15]"
              >
                <img
                  src="/images/social/gmail.png"
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
        </section>
        <section
          class="flex flex-col rounded-3xl border border-gray-200 bg-[#fafafa] p-8"
        >
          <h2 class="text-3xl font-semibold">Stuur ons een bericht</h2>
          <form
            class="mt-6 flex flex-1 flex-col space-y-4"
            @submit.prevent="submitContact"
          >
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
            <div class="flex-1">
              <label class="block text-sm font-semibold text-gray-700"
                >Bericht *</label
              >
              <textarea
                v-model="formData.message"
                required
                class="mt-2 h-full w-full min-h-[12rem] rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
                placeholder="Vertel ons waar je AITJE voor wilt inzetten"
              ></textarea>
            </div>
            <button
              type="submit"
              class="mt-8 w-full rounded-full bg-black px-6 py-3 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
            >
              Verstuur bericht
            </button>
          </form>
        </section>
      </div>

      <section
        class="mx-auto mt-16 max-w-5xl rounded-[3rem] border border-gray-200 bg-white p-8 shadow-lg"
      >
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Digitale kennismaking
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-gray-900">
            Plan een afspraak
          </h2>
        </div>
        <form
          class="mt-8 grid gap-6 md:grid-cols-2"
          @submit.prevent="submitBooking"
        >
          <div class="space-y-2">
            <label class="text-sm font-semibold text-gray-700"
              >Kies een datum</label
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
              >Kies een tijd</label
            >
            <select
              v-model="selectedTime"
              :disabled="!selectedDate"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            >
              <option value="">Selecteer een tijd</option>
              <option v-for="time in availableTimes" :key="time" :value="time">
                {{ time }}
              </option>
            </select>
          </div>
          <button
            type="submit"
            :disabled="!selectedDate || !selectedTime"
            class="md:col-span-2 rounded-full bg-[#facc15] px-6 py-3 text-base font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15] disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Bevestig afspraak
          </button>
        </form>
      </section>

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
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80"
          alt="Vrije vogel"
          class="h-64 w-full rounded-3xl object-cover shadow-2xl shadow-black/40 md:w-1/3"
        />
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, reactive, ref } from "vue";

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

const selectedDate = ref("");
const selectedTime = ref("");
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString("nl-NL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const submitContact = () => {
  if (typeof window !== "undefined") {
    window.alert("Bedankt! We nemen zo snel mogelijk contact met je op.");
  }
  formData.name = "";
  formData.email = "";
  formData.phone = "";
  formData.message = "";
};

const submitBooking = () => {
  if (
    selectedDate.value &&
    selectedTime.value &&
    typeof window !== "undefined"
  ) {
    window.alert(
      `Afspraak ingepland voor ${formatDate(selectedDate.value)} om ${
        selectedTime.value
      }`,
    );
  }
  selectedDate.value = "";
  selectedTime.value = "";
};

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
