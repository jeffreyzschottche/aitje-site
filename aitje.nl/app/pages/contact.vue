<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />
    <main class="px-6 pb-20 pt-32">
      <div class="mx-auto max-w-7xl">
        <div class="text-center">
          <h1 class="text-5xl font-black">Neem contact op</h1>
          <p class="mt-4 text-xl text-gray-600">We helpen je graag verder met al je vragen over AITJE</p>
        </div>

        <div class="mt-16 grid gap-12 md:grid-cols-2">
          <section class="space-y-8">
            <div class="space-y-6">
              <ContactCard icon="Mail" title="Email">
                <p>info@aitje.nl</p>
                <p>support@aitje.nl</p>
              </ContactCard>
              <ContactCard icon="Phone" title="Telefoon">
                <p>+31 20 123 4567</p>
                <p class="text-sm text-gray-500">Ma-vr: 9:00 - 17:00</p>
              </ContactCard>
              <ContactCard icon="MapPin" title="Adres">
                <p>AI Straat 42</p>
                <p>1234 AB Amsterdam</p>
                <p>Nederland</p>
              </ContactCard>
            </div>
            <div class="rounded-2xl bg-yellow-50 p-6">
              <h3 class="text-xl font-semibold">Openingstijden</h3>
              <div class="mt-4 space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <span>Maandag - Vrijdag</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div class="flex justify-between">
                  <span>Zaterdag</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div class="flex justify-between">
                  <span>Zondag</span>
                  <span>Gesloten</span>
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h2 class="text-3xl font-semibold">Stuur een bericht</h2>
            <form class="mt-6 space-y-4" @submit.prevent="submitContact">
              <FormInput label="Naam *" v-model="formData.name" required placeholder="Je naam" />
              <FormInput label="Email *" v-model="formData.email" type="email" required placeholder="je@email.nl" />
              <FormInput label="Telefoon" v-model="formData.phone" placeholder="+31 6 12345678" />
              <div>
                <label class="block text-sm font-semibold text-gray-700">Bericht *</label>
                <textarea
                  v-model="formData.message"
                  required
                  class="mt-2 h-32 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none"
                  placeholder="Waar kunnen we je mee helpen?"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black transition hover:bg-yellow-500"
              >
                Verstuur bericht
              </button>
            </form>
          </section>
        </div>

        <section class="mt-20 max-w-4xl mx-auto rounded-3xl border border-gray-200 bg-gray-50 p-8">
          <div class="mb-6 flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
              <Calendar class="h-6 w-6" />
            </div>
            <div>
              <h2 class="text-3xl font-semibold">Plan een demo</h2>
              <p class="text-sm text-gray-500">Kies een datum en tijd voor een live demonstratie van AITJE.</p>
            </div>
          </div>
          <form class="grid gap-6 md:grid-cols-2" @submit.prevent="submitBooking">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Kies een datum</label>
              <select
                v-model="selectedDate"
                required
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none"
              >
                <option value="">Selecteer een datum</option>
                <option v-for="date in availableDates" :key="date" :value="date">
                  {{ formatDate(date) }}
                </option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Kies een tijd</label>
              <select
                v-model="selectedTime"
                :disabled="!selectedDate"
                required
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
              >
                <option value="">Selecteer een tijd</option>
                <option v-for="time in availableTimes" :key="time" :value="time">{{ time }}</option>
              </select>
            </div>
            <button
              type="submit"
              :disabled="!selectedDate || !selectedTime"
              class="md:col-span-2 rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Bevestig afspraak
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { Calendar, Mail, MapPin, Phone } from 'lucide-vue-next';

const availableDates = [
  '2025-12-09',
  '2025-12-10',
  '2025-12-11',
  '2025-12-12',
  '2025-12-13',
  '2025-12-16',
  '2025-12-17'
];

const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

const selectedDate = ref('');
const selectedTime = ref('');
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const submitContact = () => {
  if (typeof window !== 'undefined') {
    window.alert('Bedankt! We nemen zo snel mogelijk contact met je op.');
  }
  formData.name = '';
  formData.email = '';
  formData.phone = '';
  formData.message = '';
};

const submitBooking = () => {
  if (selectedDate.value && selectedTime.value && typeof window !== 'undefined') {
    window.alert(`Afspraak ingepland voor ${formatDate(selectedDate.value)} om ${selectedTime.value}`);
  }
  selectedDate.value = '';
  selectedTime.value = '';
};
const icons = { Mail, Phone, MapPin };

const ContactCard = defineComponent({
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true }
  },
  setup(props, { slots }) {
    return () =>
      h('div', { class: 'flex gap-4 rounded-2xl border border-gray-200 p-5 shadow-sm' }, [
        h(icons[props.icon as keyof typeof icons], {
          class: 'mt-1 h-6 w-6 flex-shrink-0 text-yellow-500'
        }),
        h('div', {}, [
          h('h3', { class: 'mb-1 text-xl font-semibold' }, props.title),
          slots.default?.()
        ])
      ]);
  }
});

const FormInput = defineComponent({
  props: {
    label: { type: String, required: true },
    modelValue: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('div', {}, [
        h('label', { class: 'block text-sm font-semibold text-gray-700' }, props.label),
        h('input', {
          class:
            'mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none',
          type: props.type,
          value: props.modelValue,
          required: props.required,
          placeholder: props.placeholder,
          onInput: (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)
        })
      ]);
  }
});
</script>
