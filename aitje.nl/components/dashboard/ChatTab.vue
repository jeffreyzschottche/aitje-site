<template>
  <div class="flex h-full flex-col bg-white">
    <header class="border-b border-gray-200 px-6 py-4">
      <h2 class="text-2xl font-semibold">Chat</h2>
      <p class="text-sm text-gray-500">Praat met je lokale AI-assistent</p>
    </header>

    <div class="flex-1 space-y-4 overflow-y-auto p-6">
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex gap-4"
        :class="message.role === 'user' ? 'flex-row-reverse' : 'flex-row'"
      >
        <div
          class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
          :class="message.role === 'user' ? 'bg-gray-200' : 'bg-yellow-400'"
        >
          <component :is="message.role === 'user' ? User : Bot" class="h-5 w-5" />
        </div>
        <div :class="message.role === 'user' ? 'text-right' : 'text-left'">
          <div
            class="inline-block rounded-lg px-4 py-3"
            :class="message.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'"
          >
            {{ message.content }}
          </div>
          <p class="mt-1 text-xs text-gray-500">{{ formatTime(message.timestamp) }}</p>
        </div>
      </div>

      <div v-if="isTyping" class="flex gap-4">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400">
          <Bot class="h-5 w-5" />
        </div>
        <div class="rounded-lg bg-gray-100 px-4 py-3">
          <div class="flex gap-1">
            <span v-for="dot in 3" :key="dot" class="h-2 w-2 animate-bounce rounded-full bg-gray-400" :style="{ animationDelay: `${(dot - 1) * 0.15}s` }"></span>
          </div>
        </div>
      </div>
      <div ref="messagesEndRef" />
    </div>

    <form class="border-t border-gray-200 bg-gray-50 p-6" @submit.prevent="handleSend">
      <div class="flex gap-4">
        <input
          v-model="input"
          type="text"
          placeholder="Typ je bericht..."
          class="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-yellow-400 focus:outline-none"
        />
        <button
          type="submit"
          :disabled="!input.trim() || isTyping"
          class="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <Send class="h-5 w-5" />
          Verstuur
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Bot, Send, User } from 'lucide-vue-next';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const messages = ref<Message[]>([
  {
    id: '1',
    role: 'assistant',
    content: 'Hallo! Ik ben AITJE, jouw lokale AI-assistent. Hoe kan ik je vandaag helpen?',
    timestamp: new Date()
  }
]);

const input = ref('');
const isTyping = ref(false);
const messagesEndRef = ref<HTMLDivElement | null>(null);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const scrollToBottom = async () => {
  await nextTick();
  messagesEndRef.value?.scrollIntoView({ behavior: 'smooth' });
};

watch(messages, scrollToBottom, { deep: true });

const formatTime = (date: Date) =>
  date.toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  });

const handleSend = () => {
  if (!input.value.trim()) return;
  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content: input.value,
    timestamp: new Date()
  };
  messages.value.push(userMessage);
  input.value = '';
  isTyping.value = true;

  timeoutId = setTimeout(() => {
    const responses = [
      'Dat is een goede vraag! Als lokale AI kan ik je helpen met verschillende taken zonder dat je data de deur uit gaat.',
      'Interessant! Laat me daar eens over nadenken. Omdat ik volledig lokaal draai, heb ik toegang tot al je data zonder privacy-zorgen.',
      'Ik begrijp je vraag. Als AITJE werk ik volledig op jouw eigen hardware, wat betekent dat alles supersnel gaat.',
      'Uitstekende vraag! Laat me je daar meer over vertellen...'
    ];
    messages.value.push({
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date()
    });
    isTyping.value = false;
  }, 1000 + Math.random() * 1000);
};

onMounted(scrollToBottom);

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>
