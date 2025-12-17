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
          Praat met de bouwers van het gouden AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          We zijn onafhankelijk, natuurvriendelijk en houden jouw data bij jou.
          Boek een vliegles, vraag een offerte aan of laat ons je helpen met
          prompts.
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
            <p class="mt-2 text-sm text-gray-500">We reageren binnen 24 uur.</p>
            <div class="mt-6 space-y-5">
              <ContactCard icon="Mail" title="Email">
                <p>info@aitje.nl</p>
                <p>support@aitje.nl</p>
              </ContactCard>
              <ContactCard icon="Phone" title="Telefoon">
                <p>+31 20 123 4567</p>
                <p class="text-sm text-gray-500">Ma-vr: 09:00 - 17:00</p>
              </ContactCard>
              <ContactCard icon="MapPin" title="Nest">
                <p>AI Straat 42</p>
                <p>1234 AB Amsterdam</p>
                <p>Nederland</p>
              </ContactCard>
            </div>
          </div>
          <div class="rounded-3xl bg-[#facc15] p-6 text-[#212121]">
            <h3 class="text-xl font-semibold">Waarom contact opnemen?</h3>
            <ul class="mt-4 space-y-3 text-sm">
              <li>
                • Je wilt weten hoe AITJE jouw data lokaal houdt en de natuur
                helpt.
              </li>
              <li>
                • Je zoekt begeleiding voor installatie, kennisupdates of SLA.
              </li>
              <li>• Je wilt promptlessen via de Academy (100,- p/j) boeken.</li>
            </ul>
          </div>
        </section>
        <section
          class="flex flex-col rounded-3xl border border-gray-200 bg-[#fafafa] p-8"
        >
          <h2 class="text-3xl font-semibold">Stuur ons een bericht</h2>
          <p class="mt-2 text-sm text-gray-500">
            We beantwoorden vraagstukken over hardware, diensten, Academy en
            partnerships.
          </p>
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
              class="w-full rounded-full bg-black px-6 py-3 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
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
            Vliegles
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-gray-900">
            Plan een demo of consult
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Laat ons zien welke kennis je wilt inladen of welke prompts je wilt
            verbeteren. We gebruiken dezelfde stappen als in onze
            dienstenpagina.
          </p>
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
            Praat met de bouwers van het gouden AITJE
          </h2>
          <p class="text-lg text-gray-200">
            We zijn onafhankelijk, natuurvriendelijk en houden jouw data bij
            jou. Boek een vliegles, vraag een offerte aan of laat ons je helpen
            met prompts. Geen verkooppraat, wel directe antwoorden.
          </p>
          <div class="grid gap-4 sm:grid-cols-3">
            <div
              v-for="impact in impactPoints"
              :key="impact.title"
              class="rounded-3xl border border-white/10 bg-white/5 p-4"
            >
              <h3 class="text-sm font-semibold text-[#facc15]">
                {{ impact.title }}
              </h3>
              <p class="text-xs text-gray-300">{{ impact.description }}</p>
            </div>
          </div>
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
import { defineComponent, h, reactive, ref } from "vue";
import { Mail, MapPin, Phone } from "lucide-vue-next";

const bookingWindow = {
  min: "2025-12-09",
  max: "2025-12-17",
};

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
      }`
    );
  }
  selectedDate.value = "";
  selectedTime.value = "";
};

const impactPoints = [
  {
    title: "Data blijft van jou",
    description: "Alle vragen, documenten en audio blijven op jouw AITJE.",
  },
  {
    title: "Natuurvriendelijk",
    description: "Elke lokale prompt voorkomt serverwater in het buitenland.",
  },
  {
    title: "Onafhankelijk",
    description: "Geen Amerikaanse corporaties tussen jou en je AI.",
  },
];

const icons = { Mail, Phone, MapPin };

const ContactCard = defineComponent({
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: "flex gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm",
        },
        [
          h(icons[props.icon as keyof typeof icons], {
            class: "mt-1 h-6 w-6 flex-shrink-0 text-[#facc15]",
          }),
          h("div", {}, [
            h("h3", { class: "mb-1 text-xl font-semibold" }, props.title),
            slots.default?.(),
          ]),
        ]
      );
  },
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
          props.label
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
