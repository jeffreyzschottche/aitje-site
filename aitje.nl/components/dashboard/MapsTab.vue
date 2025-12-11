<template>
  <div class="flex h-full flex-col bg-gray-50">
    <header class="border-b border-gray-200 bg-white px-6 py-4">
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">Maps</h2>
          <p class="text-sm text-gray-500">Bekijk contactlocaties op de kaart</p>
        </div>
        <button class="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500">
          <Plus class="h-5 w-5" />
          Locatie toevoegen
        </button>
      </div>
    </header>
    <div class="flex flex-1 overflow-hidden">
      <div class="relative flex-1">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
          <div
            class="absolute inset-0 opacity-20"
            style="background-image: linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px); background-size: 50px 50px;"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative h-full w-full max-w-4xl">
              <button
                v-for="(contact, index) in contacts"
                :key="contact.id"
                class="absolute -translate-x-1/2 -translate-y-full transition hover:scale-110"
                :style="{ left: `${30 + index * 20}%`, top: `${40 + (index % 2) * 15}%` }"
                @click="selectedContact = contact"
              >
                <MapPin class="h-8 w-8 drop-shadow-lg text-red-500" fill="currentColor" />
                <span class="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-xs shadow opacity-0 transition group-hover:opacity-100">
                  {{ contact.name }}
                </span>
              </button>
            </div>
          </div>
          <div class="absolute top-4 right-4 space-y-2 rounded-2xl bg-white p-2 shadow">
            <button class="flex h-10 w-10 items-center justify-center rounded hover:bg-gray-100">+</button>
            <button class="flex h-10 w-10 items-center justify-center rounded hover:bg-gray-100">−</button>
            <button class="flex h-10 w-10 items-center justify-center rounded hover:bg-gray-100">
              <Navigation class="h-5 w-5" />
            </button>
          </div>
          <div
            v-if="selectedContact"
            class="absolute bottom-4 left-1/2 w-80 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-lg"
          >
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-semibold">{{ selectedContact.name }}</h3>
                <p class="mt-1 text-sm text-gray-600">{{ selectedContact.address }}</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600" @click="selectedContact = null">✕</button>
            </div>
            <p class="mt-3 text-xs text-gray-500">
              Lat: {{ selectedContact.lat.toFixed(4) }}, Lng: {{ selectedContact.lng.toFixed(4) }}
            </p>
          </div>
        </div>
      </div>
      <aside class="w-80 overflow-y-auto border-l border-gray-200 bg-white">
        <div class="p-4">
          <h3 class="mb-4 text-lg font-semibold">Locaties ({{ contacts.length }})</h3>
          <div class="space-y-2">
            <button
              v-for="contact in contacts"
              :key="contact.id"
              class="w-full rounded-2xl border p-3 text-left transition"
              :class="selectedContact?.id === contact.id ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'"
              @click="selectedContact = contact"
            >
              <p class="text-sm font-semibold">{{ contact.name }}</p>
              <p class="text-xs text-gray-500">{{ contact.address }}</p>
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Navigation, Plus } from 'lucide-vue-next';
import { ref } from 'vue';

interface MapContact {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

const contacts = [
  {
    id: '1',
    name: 'Jan de Vries',
    address: 'Hoofdstraat 1, Amsterdam',
    lat: 52.3676,
    lng: 4.9041
  },
  {
    id: '2',
    name: 'Maria Jansen',
    address: 'Kerkstraat 15, Utrecht',
    lat: 52.0907,
    lng: 5.1214
  },
  {
    id: '3',
    name: 'Piet Bakker',
    address: 'Plein 8, Rotterdam',
    lat: 51.9225,
    lng: 4.4792
  }
] as MapContact[];

const selectedContact = ref<MapContact | null>(null);
</script>
