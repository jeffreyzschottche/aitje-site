<template>
  <div class="flex h-full flex-col bg-gray-50">
    <header class="border-b border-gray-200 bg-white px-6 py-4">
      <h2 class="text-2xl font-semibold">Settings</h2>
      <p class="text-sm text-gray-500">Beheer je AITJE apparaat instellingen</p>
    </header>
    <div class="flex flex-1 overflow-hidden">
      <aside class="w-64 overflow-y-auto border-r border-gray-200 bg-white">
        <nav class="space-y-2 p-4">
          <button
            v-for="tab in subTabs"
            :key="tab.id"
            class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition"
            :class="activeSubTab === tab.id ? 'bg-[#facc15] text-black' : 'text-gray-700 hover:bg-gray-100'"
            @click="activeSubTab = tab.id"
          >
            <component :is="tab.icon" class="h-5 w-5" />
            {{ tab.label }}
          </button>
        </nav>
      </aside>
      <main class="flex-1 overflow-y-auto p-6">
        <form class="space-y-6" @submit.prevent="handleSave">
          <section v-if="activeSubTab === 'device'" class="space-y-6">
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 class="text-xl font-semibold">Apparaat informatie</h3>
              <div class="mt-4 space-y-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700">Apparaatnaam</label>
                  <input v-model="deviceSettings.deviceName" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none" />
                </div>
                <div class="grid gap-4 md:grid-cols-2">
                  <InfoField label="Model versie" :value="deviceSettings.modelVersion" />
                  <InfoField label="IP Adres" :value="deviceSettings.ipAddress" />
                </div>
              </div>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 class="mb-4 flex items-center gap-2 text-xl font-semibold">
                <HardDrive class="h-5 w-5" />
                Opslag
              </h3>
              <div>
                <div class="flex justify-between text-sm text-gray-600">
                  <span>Gebruikt: {{ deviceSettings.storageUsed }}%</span>
                  <span>115 GB / 256 GB</span>
                </div>
                <div class="mt-2 h-3 w-full rounded-full bg-gray-200">
                  <div class="h-3 rounded-full bg-[#facc15]" :style="{ width: `${deviceSettings.storageUsed}%` }"></div>
                </div>
                <label class="mt-4 flex items-center gap-3 text-sm text-gray-700">
                  <input type="checkbox" v-model="aiSettings.autoBackup" class="h-4 w-4" />
                  Automatische backup dagelijks om 03:00
                </label>
              </div>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 class="text-xl font-semibold">Systeem informatie</h3>
              <div class="mt-4 grid gap-4 text-sm md:grid-cols-2">
                <InfoRow label="CPU gebruik" value="23%" />
                <InfoRow label="RAM gebruik" value="8.2 GB / 16 GB" />
                <InfoRow label="Temperatuur" value="42°C" />
                <InfoRow label="Uptime" value="15 dagen, 7 uur" />
                <InfoRow label="Firmware" value="1.2.4" />
                <InfoRow label="Serial" value="AITJE-2025-001" />
              </div>
            </div>
          </section>

          <section v-if="activeSubTab === 'network'" class="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
            <h3 class="text-xl font-semibold">Netwerk instellingen</h3>
            <div>
              <label class="block text-sm font-semibold text-gray-700">Netwerk modus</label>
              <select
                v-model="networkSettings.networkMode"
                class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none"
              >
                <option value="dhcp">DHCP (Automatisch)</option>
                <option value="static">Statisch IP</option>
              </select>
            </div>
            <div v-if="networkSettings.networkMode === 'static'" class="grid gap-4 md:grid-cols-2">
              <TextField label="Statisch IP" v-model="networkSettings.staticIp" />
              <TextField label="Subnet mask" v-model="networkSettings.subnet" />
              <TextField label="Gateway" v-model="networkSettings.gateway" />
              <TextField label="DNS" v-model="networkSettings.dns" />
            </div>
          </section>

          <section v-if="activeSubTab === 'ai-behavior'" class="space-y-6">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 space-y-6">
              <h3 class="text-xl font-semibold">Toon & Persoonlijkheid</h3>
              <div>
                <label class="block text-sm font-semibold text-gray-700">Gesprekstoon</label>
                <select v-model="aiSettings.tone" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none">
                  <option value="professional">Professioneel</option>
                  <option value="friendly">Vriendelijk</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formeel</option>
                  <option value="enthusiastic">Enthousiast</option>
                </select>
              </div>
              <RangeField label="Formaliteit" :value="aiSettings.formalityLevel" @update:value="aiSettings.formalityLevel = $event" />
              <div>
                <label class="block text-sm font-semibold text-gray-700">Doelgroep leeftijd</label>
                <select v-model="aiSettings.targetAge" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none">
                  <option value="child">Kinderen (6-12 jaar)</option>
                  <option value="teen">Tieners (13-17 jaar)</option>
                  <option value="adult">Volwassenen (18+ jaar)</option>
                  <option value="senior">Senioren (65+ jaar)</option>
                  <option value="universal">Universeel</option>
                </select>
              </div>
              <RangeField label="Uitgebreidheid antwoorden" :value="aiSettings.verbosity" @update:value="aiSettings.verbosity = $event" />
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 space-y-6">
              <h3 class="text-xl font-semibold">AI Model parameters</h3>
              <div>
                <label class="block text-sm font-semibold text-gray-700">Max tokens: {{ aiSettings.maxTokens }}</label>
                <input
                  type="range"
                  min="512"
                  max="4096"
                  step="512"
                  v-model.number="aiSettings.maxTokens"
                  class="mt-2 w-full"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700">Temperature: {{ aiSettings.temperature }}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  v-model.number="aiSettings.temperature"
                  class="mt-2 w-full"
                />
              </div>
              <RangeField label="Creativiteit" :value="aiSettings.creativityLevel" @update:value="aiSettings.creativityLevel = $event" />
            </div>
          </section>

          <section v-if="activeSubTab === 'modes'" class="space-y-4">
            <div v-for="mode in modes" :key="mode.id" class="rounded-2xl border border-gray-200 bg-white p-4">
              <div class="flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-2">
                    <h4 class="font-semibold text-gray-900">{{ mode.title }}</h4>
                    <span v-if="modesSettings[mode.id]" :class="mode.badge">{{ mode.badgeText }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ mode.description }}</p>
                </div>
                <label class="relative inline-block h-6 w-12">
                  <input
                    type="checkbox"
                    class="peer sr-only"
                    :checked="modesSettings[mode.id]"
                    @change="modesSettings[mode.id] = !modesSettings[mode.id]"
                  />
                  <span class="absolute inset-0 rounded-full bg-gray-200 transition peer-checked:bg-[#facc15]"></span>
                  <span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                </label>
              </div>
            </div>
            <div class="rounded-2xl border border-[#facc15] bg-[#facc15] p-4 text-sm text-[#212121]">
              <strong>Let op:</strong> Het combineren van meerdere modes kan leiden tot verschillende antwoordstijlen.
            </div>
          </section>

          <section v-if="activeSubTab === 'debug'" class="space-y-4">
            <div class="rounded-2xl border-2 border-red-200 bg-red-50 p-6 space-y-4">
              <div class="flex items-center gap-3">
                <Bug class="h-6 w-6 text-red-600" />
                <h3 class="text-xl font-semibold text-red-900">Debug Mode</h3>
              </div>
              <p class="text-sm text-red-800">
                Waarschuwing: Debug instellingen zijn alleen voor gevorderde gebruikers. Onjuiste configuratie kan leiden tot beveiligingsrisico's of instabiliteit.
              </p>
              <ToggleRow label="Debug Mode" badge="ACTIEF" :active="debugSettings.debugMode" @toggle="debugSettings.debugMode = $event" />
              <div class="rounded-xl border border-red-200 bg-white p-4">
                <ToggleRow label="SSH Access" badge="OPEN" :active="debugSettings.sshAccess" @toggle="debugSettings.sshAccess = $event" />
                <div v-if="debugSettings.sshAccess" class="mt-3 rounded bg-gray-50 p-3 text-xs">
                  <p>ssh root@{{ deviceSettings.ipAddress }}</p>
                  <p>Password: [admin wachtwoord]</p>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700">Log level</label>
                <select v-model="debugSettings.logLevel" class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none">
                  <option value="error">Error</option>
                  <option value="warn">Warn</option>
                  <option value="info">Info</option>
                  <option value="debug">Debug</option>
                  <option value="trace">Trace</option>
                </select>
              </div>
              <ToggleRow label="Telemetry" :active="debugSettings.enableTelemetry" @toggle="debugSettings.enableTelemetry = $event" />
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              <button type="button" class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                View System Logs
              </button>
              <button type="button" class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Export Diagnostics
              </button>
              <button type="button" class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Network Diagnostics
              </button>
              <button type="button" class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Clear Cache
              </button>
            </div>
          </section>

          <div class="flex flex-col gap-4 border-t border-gray-200 pt-4 md:flex-row">
            <button type="submit" class="flex-1 rounded-full bg-[#facc15] px-6 py-3 text-base font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]">
              <Save class="mr-2 inline-block h-5 w-5" />
              Opslaan
            </button>
            <button type="button" class="rounded-full bg-gray-200 px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-300" @click="handleRestart">
              <RotateCw class="mr-2 inline-block h-5 w-5" />
              Herstart apparaat
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Beaker, Bug, Cpu, HardDrive, MessageCircle, RotateCw, Save, Wifi } from 'lucide-vue-next';
import { reactive, ref } from 'vue';

type SettingsSubTab = 'device' | 'network' | 'ai-behavior' | 'modes' | 'debug';

const activeSubTab = ref<SettingsSubTab>('device');

const deviceSettings = reactive({
  deviceName: 'AITJE-001',
  ipAddress: '192.168.1.100',
  modelVersion: 'v2.1.0',
  storageUsed: 45
});

const networkSettings = reactive({
  networkMode: 'dhcp',
  staticIp: '',
  subnet: '',
  gateway: '',
  dns: ''
});

const aiSettings = reactive({
  maxTokens: 2048,
  temperature: 0.7,
  autoBackup: true,
  tone: 'friendly',
  formalityLevel: 50,
  targetAge: 'adult',
  verbosity: 50,
  creativityLevel: 50
});

const modesSettings = reactive({
  devMode: false,
  researchMode: false,
  safeMode: true,
  verboseLogging: false,
  experimentalFeatures: false
});

const debugSettings = reactive({
  debugMode: false,
  sshAccess: false,
  logLevel: 'info',
  enableTelemetry: false
});

const subTabs = [
  { id: 'device', label: 'Apparaat', icon: Cpu },
  { id: 'network', label: 'Netwerk', icon: Wifi },
  { id: 'ai-behavior', label: 'AI Gedrag', icon: MessageCircle },
  { id: 'modes', label: 'Modes & Guidelines', icon: Beaker },
  { id: 'debug', label: 'Debug', icon: Bug }
] satisfies { id: SettingsSubTab; label: string; icon: any }[];

const modes = [
  {
    id: 'devMode' as const,
    title: 'DEV MODE',
    description: 'Geoptimaliseerd voor programmeren en development.',
    badge: 'inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700',
    badgeText: 'Actief'
  },
  {
    id: 'researchMode' as const,
    title: 'RESEARCH MODE',
    description: 'Academische modus met uitgebreide bronvermelding.',
    badge: 'inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700',
    badgeText: 'Actief'
  },
  {
    id: 'safeMode' as const,
    title: 'SAFE MODE',
    description: 'Extra filters voor veilige content.',
    badge: 'inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700',
    badgeText: 'Actief'
  },
  {
    id: 'verboseLogging' as const,
    title: 'VERBOSE LOGGING',
    description: 'Uitgebreide logging van AI beslissingen.',
    badge: 'inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700',
    badgeText: 'Actief'
  },
  {
    id: 'experimentalFeatures' as const,
    title: 'EXPERIMENTAL FEATURES',
    description: 'Toegang tot beta functies en experimentele capabilities.',
    badge: 'inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-700',
    badgeText: 'Actief'
  }
];

const handleSave = () => {
  if (typeof window !== 'undefined') {
    window.alert('Instellingen opgeslagen!');
  }
};

const handleRestart = () => {
  if (typeof window !== 'undefined' && window.confirm('Weet je zeker dat je het apparaat wilt herstarten?')) {
    window.alert('Apparaat wordt herstart...');
  }
};
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export const InfoRow = defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
  setup(props) {
    return () =>
      h('div', { class: 'flex justify-between border-b border-gray-100 pb-2 text-sm text-gray-600' }, [
        h('span', props.label),
        h('span', { class: 'font-semibold text-gray-900' }, props.value)
      ]);
  }
});

export const InfoField = defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
  setup(props) {
    return () =>
      h('div', {}, [
        h('label', { class: 'text-sm font-semibold text-gray-700' }, props.label),
        h('div', { class: 'mt-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900' }, props.value)
      ]);
  }
});

export const TextField = defineComponent({
  props: {
    label: { type: String, required: true },
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('div', {}, [
        h('label', { class: 'text-sm font-semibold text-gray-700' }, props.label),
        h('input', {
          class: 'mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:border-[#facc15] focus:outline-none',
          value: props.modelValue,
          onInput: (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)
        })
      ]);
  }
});

export const RangeField = defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: Number, required: true }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    return () =>
      h('div', {}, [
        h('label', { class: 'block text-sm font-semibold text-gray-700' }, `${props.label}: ${props.value}%`),
        h('input', {
          type: 'range',
          min: 0,
          max: 100,
          value: props.value,
          class: 'mt-2 w-full',
          onInput: (event: Event) => emit('update:value', parseInt((event.target as HTMLInputElement).value, 10))
        })
      ]);
  }
});

export const ToggleRow = defineComponent({
  props: {
    label: { type: String, required: true },
    badge: { type: String, default: '' },
    active: { type: Boolean, required: true }
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    return () =>
      h('div', { class: 'flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4' }, [
        h('div', { class: 'flex items-center gap-2' }, [
          h('h4', { class: 'text-sm font-semibold text-gray-900' }, props.label),
          props.active && props.badge ? h('span', { class: props.badge }, 'Actief') : null
        ]),
        h('label', { class: 'relative inline-block h-6 w-12' }, [
          h('input', {
            type: 'checkbox',
            class: 'peer sr-only',
            checked: props.active,
            onChange: (event: Event) => emit('toggle', (event.target as HTMLInputElement).checked)
          }),
          h('span', { class: 'absolute inset-0 rounded-full bg-gray-200 transition peer-checked:bg-[#facc15]' }),
          h('span', { class: 'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-6' })
        ])
      ]);
  }
});
</script>
