<template>
  <div class="min-h-screen bg-gray-100 pt-16">
    <SiteNavigation />
    <LoadingScreen v-if="isLoading" @complete="isLoading = false" />
    <div v-else class="flex h-screen flex-col">
      <header class="flex items-center justify-between bg-black px-6 py-4 text-white">
        <div class="flex items-center gap-4">
          <button class="rounded-lg p-2 hover:bg-gray-800 lg:hidden" @click="sidebarOpen = !sidebarOpen">
            <component :is="sidebarOpen ? X : Menu" class="h-5 w-5" />
          </button>
          <div class="flex items-center gap-3">
            <img src="/images/aitje-logo.png" alt="AITJE" class="h-8 w-8 invert" />
            <span class="text-xl font-semibold">AITJE Dashboard</span>
          </div>
        </div>
        <NuxtLink to="/" class="text-sm font-semibold text-white transition hover:text-yellow-400">
          Terug naar website
        </NuxtLink>
      </header>
      <div class="flex flex-1 overflow-hidden">
        <aside
          class="fixed inset-y-0 left-0 z-40 w-64 border-r border-gray-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0"
          :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
          style="top: 128px"
        >
          <nav class="flex-1 space-y-2 p-4">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition"
              :class="activeTab === tab.id ? 'bg-yellow-400 text-black' : 'text-gray-700 hover:bg-gray-100'"
              @click="selectTab(tab.id)"
            >
              <component :is="tab.icon" class="h-5 w-5" />
              {{ tab.label }}
            </button>
          </nav>
          <div class="border-t border-gray-200 p-4">
            <div class="rounded-xl bg-gray-50 p-3 text-sm">
              <div class="flex items-center gap-2 text-green-600">
                <span class="h-2 w-2 rounded-full bg-green-500"></span>
                Device online
              </div>
              <p class="text-xs text-gray-500">AITJE-001</p>
            </div>
          </div>
        </aside>
        <main class="flex-1 overflow-auto bg-white">
          <component :is="currentTabComponent" />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import {
  BookOpen,
  Code,
  Cpu,
  Map,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X
} from 'lucide-vue-next';

type Tab = 'chat' | 'api' | 'knowledge' | 'contacts' | 'maps' | 'devices' | 'settings';

const tabs = [
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'api', label: 'API Management', icon: Code },
  { id: 'knowledge', label: 'Kennisbank', icon: BookOpen },
  { id: 'contacts', label: 'Contacten', icon: Users },
  { id: 'maps', label: 'Maps', icon: Map },
  { id: 'devices', label: 'Connected Devices', icon: Cpu },
  { id: 'settings', label: 'Settings', icon: Settings }
] as const;

const activeTab = ref<Tab>('chat');
const sidebarOpen = ref(false);
const isLoading = ref(true);

const componentsMap: Record<Tab, string> = {
  chat: 'ChatTab',
  api: 'ApiManagementTab',
  knowledge: 'KnowledgeBaseTab',
  contacts: 'ContactsTab',
  maps: 'MapsTab',
  devices: 'DevicesTab',
  settings: 'SettingsTab'
};

const currentTabComponent = computed(() => componentsMap[activeTab.value]);

const selectTab = (tab: Tab) => {
  activeTab.value = tab;
  if (window.innerWidth < 1024) {
    sidebarOpen.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1200);
});
</script>
