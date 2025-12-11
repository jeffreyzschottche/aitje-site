<template>
  <div class="h-full overflow-y-auto bg-gray-50">
    <div class="space-y-6 p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Connected Devices</h2>
          <p class="text-sm text-gray-500">Beheer gebruikers en API toegang</p>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
          @click="toggleForm"
        >
          <Plus class="h-5 w-5" />
          Nieuwe gebruiker
        </button>
      </div>

      <section class="grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl border border-gray-200 bg-white p-6">
          <p class="text-sm text-gray-500">Totaal gebruikers</p>
          <p class="mt-2 text-3xl font-bold text-gray-900">{{ devices.length }}</p>
        </div>
        <div class="rounded-2xl border border-gray-200 bg-white p-6">
          <p class="text-sm text-gray-500">API toegang</p>
          <p class="mt-2 text-3xl font-bold text-gray-900">{{ devices.filter((device) => device.apiAccess).length }}</p>
        </div>
        <div class="rounded-2xl border border-gray-200 bg-white p-6">
          <p class="text-sm text-gray-500">Actief vandaag</p>
          <p class="mt-2 text-3xl font-bold text-gray-900">{{ activeToday }}</p>
        </div>
      </section>

      <section v-if="showForm" class="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-semibold">{{ editingId ? 'Gebruiker bewerken' : 'Nieuwe gebruiker' }}</h3>
        <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
          <FormField label="Naam *">
            <input
              v-model="formState.name"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-yellow-400 focus:outline-none"
            />
          </FormField>
          <FormField label="Email *">
            <input
              v-model="formState.email"
              type="email"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-yellow-400 focus:outline-none"
            />
          </FormField>
          <FormField v-if="!editingId" label="Wachtwoord *">
            <input
              v-model="formState.password"
              type="password"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-yellow-400 focus:outline-none"
            />
          </FormField>
          <label class="flex items-center gap-3">
            <input v-model="formState.apiAccess" type="checkbox" class="h-4 w-4" />
            <span class="text-sm text-gray-700">API toegang toestaan</span>
          </label>
          <div class="flex gap-3">
            <button type="submit" class="flex-1 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500">
              {{ editingId ? 'Bijwerken' : 'Toevoegen' }}
            </button>
            <button type="button" class="flex-1 rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-300" @click="cancelForm">
              Annuleren
            </button>
          </div>
        </form>
      </section>

      <section class="space-y-3">
        <article v-for="device in devices" :key="device.id" class="rounded-2xl border border-gray-200 bg-white p-4">
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div class="mb-2 flex items-center gap-3">
                <h3 class="text-lg font-semibold">{{ device.name }}</h3>
                <span
                  v-if="device.apiAccess"
                  class="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                >
                  <Key class="h-3 w-3" />
                  API toegang
                </span>
              </div>
              <p class="text-sm text-gray-600">{{ device.email }}</p>
              <div class="mt-2 flex flex-wrap gap-4 text-xs text-gray-500">
                <span>Aangemaakt: {{ formatDate(device.created) }}</span>
                <span>Laatst actief: {{ formatDate(device.lastActive, true) }}</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                class="rounded-lg p-2 transition"
                :class="device.apiAccess ? 'bg-green-100 hover:bg-green-200' : 'bg-gray-100 hover:bg-gray-200'"
                :title="device.apiAccess ? 'API toegang intrekken' : 'API toegang verlenen'"
                @click="toggleApiAccess(device.id)"
              >
                <Key class="h-5 w-5" :class="device.apiAccess ? 'text-green-700' : 'text-gray-400'" />
              </button>
              <button class="rounded-lg p-2 text-gray-600 hover:bg-gray-100" title="Bewerken" @click="handleEdit(device)">
                <Edit class="h-5 w-5" />
              </button>
              <button class="rounded-lg p-2 text-red-600 hover:bg-gray-100" title="Verwijderen" @click="handleDelete(device.id)">
                <Trash2 class="h-5 w-5" />
              </button>
            </div>
          </div>
        </article>
      </section>

      <section class="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-gray-700">
        <h4 class="font-semibold text-gray-900">Beveiligingstip</h4>
        <p class="mt-2">
          Verleen alleen API toegang aan vertrouwde gebruikers. API keys geven volledige toegang tot de AITJE functies.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit, Key, Plus, Trash2 } from 'lucide-vue-next';
import { computed, defineComponent, h, reactive, ref } from 'vue';

interface Device {
  id: string;
  name: string;
  email: string;
  apiAccess: boolean;
  created: Date;
  lastActive: Date;
}

const devices = reactive<Device[]>([
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@aitje.local',
    apiAccess: true,
    created: new Date('2025-11-01'),
    lastActive: new Date()
  },
  {
    id: '2',
    name: 'Developer',
    email: 'dev@aitje.local',
    apiAccess: true,
    created: new Date('2025-11-15'),
    lastActive: new Date()
  },
  {
    id: '3',
    name: 'Guest User',
    email: 'guest@aitje.local',
    apiAccess: false,
    created: new Date('2025-12-01'),
    lastActive: new Date('2025-12-03')
  }
]);

const showForm = ref(false);
const editingId = ref<string | null>(null);
const formState = reactive({
  name: '',
  email: '',
  password: '',
  apiAccess: false
});

const activeToday = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return devices.filter((device) => device.lastActive >= today).length;
});

const toggleForm = () => {
  showForm.value = !showForm.value;
  if (!showForm.value) resetForm();
};

const resetForm = () => {
  formState.name = '';
  formState.email = '';
  formState.password = '';
  formState.apiAccess = false;
  editingId.value = null;
};

const handleSubmit = () => {
  if (editingId.value) {
    const index = devices.findIndex((device) => device.id === editingId.value);
    if (index !== -1) {
      devices[index] = { ...devices[index], name: formState.name, email: formState.email, apiAccess: formState.apiAccess };
    }
  } else {
    devices.push({
      id: Date.now().toString(),
      name: formState.name,
      email: formState.email,
      apiAccess: formState.apiAccess,
      created: new Date(),
      lastActive: new Date()
    });
  }
  resetForm();
  showForm.value = false;
};

const handleEdit = (device: Device) => {
  editingId.value = device.id;
  formState.name = device.name;
  formState.email = device.email;
  formState.password = '';
  formState.apiAccess = device.apiAccess;
  showForm.value = true;
};

const handleDelete = (id: string) => {
  if (typeof window !== 'undefined' && window.confirm('Weet je zeker dat je deze gebruiker wilt verwijderen?')) {
    const index = devices.findIndex((device) => device.id === id);
    if (index !== -1) {
      devices.splice(index, 1);
    }
  }
};

const toggleApiAccess = (id: string) => {
  const device = devices.find((dev) => dev.id === id);
  if (device) {
    device.apiAccess = !device.apiAccess;
  }
};

const cancelForm = () => {
  resetForm();
  showForm.value = false;
};

const formatDate = (date: Date, withTime = false) =>
  date.toLocaleString('nl-NL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...(withTime && { hour: '2-digit', minute: '2-digit' })
  });

const FormField = defineComponent({
  props: { label: { type: String, required: true } },
  setup(props, { slots }) {
    return () =>
      h('label', { class: 'block text-sm font-semibold text-gray-700' }, [
        props.label,
        h('div', { class: 'mt-2' }, slots.default?.())
      ]);
  }
});
</script>
