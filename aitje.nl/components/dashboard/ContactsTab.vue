<template>
  <div class="h-full overflow-y-auto bg-gray-50">
    <div class="space-y-6 p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Contacten</h2>
          <p class="text-sm text-gray-500">Beheer je contacten</p>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-full bg-[#facc15] px-4 py-2 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          @click="toggleForm"
        >
          <Plus class="h-5 w-5" />
          Nieuw contact
        </button>
      </div>

      <div class="relative">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Zoek contacten..."
          class="w-full rounded-full border border-gray-300 px-12 py-3 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
        />
      </div>

      <section v-if="showForm" class="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-semibold">{{ editingId ? 'Contact bewerken' : 'Nieuw contact' }}</h3>
        <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
          <FormGroup label="Naam *">
            <input
              v-model="formData.name"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
              placeholder="Voor- en achternaam"
            />
          </FormGroup>
          <FormGroup label="Email *">
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
              placeholder="email@example.nl"
            />
          </FormGroup>
          <FormGroup label="Telefoon *">
            <input
              v-model="formData.phone"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
              placeholder="+31 6 12345678"
            />
          </FormGroup>
          <FormGroup label="Adres">
            <input
              v-model="formData.address"
              class="w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 transition focus:border-[#facc15] focus:outline-none"
              placeholder="Straat, Stad"
            />
          </FormGroup>
          <div class="flex gap-3">
            <button
              type="submit"
              class="flex-1 rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
            >
              {{ editingId ? 'Bijwerken' : 'Toevoegen' }}
            </button>
            <button
              type="button"
              class="flex-1 rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-300"
              @click="cancelForm"
            >
              Annuleren
            </button>
          </div>
        </form>
      </section>

      <section class="space-y-3">
        <article
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-[#facc15]"
        >
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
              <div class="mt-3 space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <Mail class="h-4 w-4" />
                  <span>{{ contact.email }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Phone class="h-4 w-4" />
                  <span>{{ contact.phone }}</span>
                </div>
                <div v-if="contact.address" class="flex items-center gap-2">
                  <MapPin class="h-4 w-4" />
                  <span>{{ contact.address }}</span>
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="rounded-lg p-2 text-gray-600 hover:bg-gray-100" title="Bewerken" @click="handleEdit(contact)">
                <Edit class="h-5 w-5" />
              </button>
              <button class="rounded-lg p-2 text-red-600 hover:bg-gray-100" title="Verwijderen" @click="handleDelete(contact.id)">
                <Trash2 class="h-5 w-5" />
              </button>
            </div>
          </div>
        </article>
        <div v-if="filteredContacts.length === 0" class="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
          Geen contacten gevonden
        </div>
        <div class="rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
          Totaal: {{ contacts.length }} contact{{ contacts.length === 1 ? '' : 'en' }}
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit, Mail, MapPin, Phone, Plus, Search, Trash2 } from 'lucide-vue-next';
import { computed, defineComponent, h, reactive, ref } from 'vue';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const contacts = reactive<Contact[]>([
  {
    id: '1',
    name: 'Jan de Vries',
    email: 'jan@example.nl',
    phone: '+31 6 12345678',
    address: 'Hoofdstraat 1, Amsterdam'
  },
  {
    id: '2',
    name: 'Maria Jansen',
    email: 'maria@example.nl',
    phone: '+31 6 87654321',
    address: 'Kerkstraat 15, Utrecht'
  },
  {
    id: '3',
    name: 'Piet Bakker',
    email: 'piet@example.nl',
    phone: '+31 6 55512345',
    address: 'Plein 8, Rotterdam'
  }
]);

const showForm = ref(false);
const editingId = ref<string | null>(null);
const searchQuery = ref('');
const formData = reactive<Contact>({
  id: '',
  name: '',
  email: '',
  phone: '',
  address: ''
});

const filteredContacts = computed(() =>
  contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.phone.includes(searchQuery.value)
  )
);

const toggleForm = () => {
  showForm.value = !showForm.value;
  if (!showForm.value) {
    resetForm();
  }
};

const resetForm = () => {
  formData.id = '';
  formData.name = '';
  formData.email = '';
  formData.phone = '';
  formData.address = '';
  editingId.value = null;
};

const handleSubmit = () => {
  if (editingId.value) {
    const index = contacts.findIndex((contact) => contact.id === editingId.value);
    if (index !== -1) {
      contacts[index] = { ...contacts[index], ...formData };
    }
  } else {
    contacts.push({
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address
    });
  }
  resetForm();
  showForm.value = false;
};

const handleEdit = (contact: Contact) => {
  editingId.value = contact.id;
  Object.assign(formData, contact);
  showForm.value = true;
};

const handleDelete = (id: string) => {
  if (typeof window !== 'undefined' && window.confirm('Weet je zeker dat je dit contact wilt verwijderen?')) {
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contacts.splice(index, 1);
    }
  }
};

const cancelForm = () => {
  resetForm();
  showForm.value = false;
};
</script>

const FormGroup = defineComponent({
  props: {
    label: { type: String, required: true }
  },
  setup(props, { slots }) {
    return () =>
      h('div', {}, [
        h('label', { class: 'block text-sm font-semibold text-gray-700' }, props.label),
        h('div', { class: 'mt-2' }, slots.default?.())
      ]);
  }
});
</script>
