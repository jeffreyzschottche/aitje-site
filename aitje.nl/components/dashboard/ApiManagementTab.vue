<template>
  <div class="h-full overflow-y-auto bg-gray-50">
    <div class="space-y-6 p-6">
      <header>
        <h2 class="text-2xl font-semibold">API Management</h2>
        <p class="text-sm text-gray-500">Beheer je API keys en bekijk gebruik statistieken</p>
      </header>

      <section class="grid gap-4 md:grid-cols-4">
        <div v-for="stat in statsCards" :key="stat.label" class="rounded-2xl border border-gray-200 bg-white p-6">
          <div class="mb-2 flex items-center justify-between text-sm text-gray-500">
            <span>{{ stat.label }}</span>
            <component :is="stat.icon" class="h-5 w-5 text-[#facc15]" />
          </div>
          <p class="text-3xl font-bold text-gray-900">{{ stat.value }}</p>
          <p class="text-sm" :class="stat.trendColor">{{ stat.trend }}</p>
        </div>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-semibold">API verkeer vandaag</h3>
        <div class="mt-6 h-72 w-full">
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" class="h-full w-full text-[#facc15]">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :points="chartPoints"
            />
            <circle
              v-for="point in chartPointList"
              :key="point.time"
              :cx="point.x"
              :cy="point.y"
              r="0.8"
              class="fill-[#facc15]"
            />
          </svg>
          <div class="mt-4 flex justify-between text-xs text-gray-400">
            <span v-for="item in todayData" :key="item.time">{{ item.time }}</span>
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6">
        <div class="mb-6 flex items-center justify-between">
          <h3 class="text-xl font-semibold">API Keys</h3>
          <button class="rounded-full bg-[#facc15] px-4 py-2 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]">
            Nieuwe key aanmaken
          </button>
        </div>
        <div class="space-y-4">
          <article v-for="apiKey in apiKeys" :key="apiKey.id" class="rounded-2xl border border-gray-200 p-4">
            <div class="mb-3 flex items-start justify-between">
              <div>
                <h4 class="text-lg font-semibold">{{ apiKey.name }}</h4>
                <p class="text-sm text-gray-500">Aangemaakt op {{ formatDate(apiKey.created) }}</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold text-gray-900">{{ apiKey.requests.toLocaleString() }}</p>
                <p class="text-xs text-gray-500">requests</p>
              </div>
            </div>
            <div class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm">
              <code class="flex-1 truncate">
                {{ showKeys[apiKey.id] ? apiKey.key : '••••••••••••••••••••' }}
              </code>
              <div class="ml-3 flex gap-2">
                <button
                  class="rounded-lg p-2 transition hover:bg-gray-200"
                  :title="showKeys[apiKey.id] ? 'Verberg' : 'Toon'"
                  @click="toggleKeyVisibility(apiKey.id)"
                >
                  <component :is="showKeys[apiKey.id] ? EyeOff : Eye" class="h-4 w-4" />
                </button>
                <button class="rounded-lg p-2 transition hover:bg-gray-200" title="Kopieer" @click="copyToClipboard(apiKey.key)">
                  <Copy class="h-4 w-4" />
                </button>
              </div>
            </div>
            <p class="mt-2 text-xs text-gray-500">Laatst gebruikt: {{ formatDate(apiKey.lastUsed, true) }}</p>
          </article>
        </div>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
        <h3 class="text-xl font-semibold">API Documentatie</h3>
        <div>
          <h4 class="text-sm text-gray-500">Endpoint</h4>
          <code class="mt-2 block rounded-lg bg-gray-50 px-3 py-2 text-sm">http://aitje.local/api/v1/chat/completions</code>
        </div>
        <div>
          <h4 class="text-sm text-gray-500">Voorbeeld Request</h4>
          <pre class="mt-2 overflow-x-auto rounded-lg bg-gray-50 px-3 py-2 text-sm">
curl -X POST http://aitje.local/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "aitje-local",
    "messages": [{"role": "user", "content": "Hallo!"}]
  }'
          </pre>
        </div>
        <p class="text-sm text-gray-600">
          De AITJE API is compatibel met het ChatGPT API formaat. Gebruik je bestaande API key en vervang alleen de endpoint URL.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Activity, Clock, Copy, Eye, EyeOff, Key, TrendingUp } from 'lucide-vue-next';
import { computed, reactive } from 'vue';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: Date;
  lastUsed: Date;
  requests: number;
}

const statsCards = [
  { label: 'Vandaag', value: '349', trend: '+12% vs gisteren', trendColor: 'text-green-600', icon: Activity },
  { label: 'Deze week', value: '2.4K', trend: '+8% vs vorige week', trendColor: 'text-green-600', icon: TrendingUp },
  { label: 'Deze maand', value: '19.1K', trend: '+15% vs vorige maand', trendColor: 'text-green-600', icon: Clock },
  { label: 'Actieve keys', value: '2', trend: 'van 10 mogelijk', trendColor: 'text-gray-500', icon: Key }
];

const apiKeys = reactive<ApiKey[]>([
  {
    id: '1',
    name: 'Production',
    key: 'aitje_prod_abc123def456',
    created: new Date('2025-11-01'),
    lastUsed: new Date(),
    requests: 15847
  },
  {
    id: '2',
    name: 'Development',
    key: 'aitje_dev_xyz789uvw012',
    created: new Date('2025-11-15'),
    lastUsed: new Date(),
    requests: 3241
  }
]);

const showKeys = reactive<Record<string, boolean>>({});

const todayData = [
  { time: '00:00', requests: 12 },
  { time: '03:00', requests: 8 },
  { time: '06:00', requests: 15 },
  { time: '09:00', requests: 45 },
  { time: '12:00', requests: 78 },
  { time: '15:00', requests: 92 },
  { time: '18:00', requests: 65 },
  { time: '21:00', requests: 34 }
];

const maxRequests = Math.max(...todayData.map((item) => item.requests));
const chartPointList = computed(() =>
  todayData.map((point, index) => ({
    time: point.time,
    x: (index / (todayData.length - 1)) * 100,
    y: 60 - (point.requests / maxRequests) * 50
  }))
);
const chartPoints = computed(() => chartPointList.value.map((point) => `${point.x},${point.y}`).join(' '));

const copyToClipboard = async (text: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    window.alert('API key gekopieerd!');
  }
};

const toggleKeyVisibility = (id: string) => {
  showKeys[id] = !showKeys[id];
};

const formatDate = (date: Date, withTime = false) =>
  date.toLocaleString('nl-NL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...(withTime && { hour: '2-digit', minute: '2-digit' })
  });
</script>
