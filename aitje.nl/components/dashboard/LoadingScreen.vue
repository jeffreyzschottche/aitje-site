<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white">
    <div class="text-center space-y-8">
      <div class="relative inline-block">
        <img src="/images/aitje-logo.png" alt="AITJE loading" class="h-40 w-40 animate-pulse" style="animation-duration: 2s" />
        <svg class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 160 160">
          <path v-if="crackStage >= 1" d="M 80 40 Q 85 60 80 80" stroke="black" stroke-width="2" fill="none" class="animate-crack" />
          <path
            v-if="crackStage >= 2"
            d="M 60 50 Q 70 70 65 90"
            stroke="black"
            stroke-width="2"
            fill="none"
            class="animate-crack"
            style="animation-delay: 0.2s"
          />
          <path
            v-if="crackStage >= 2"
            d="M 100 55 Q 95 75 100 95"
            stroke="black"
            stroke-width="2"
            fill="none"
            class="animate-crack"
            style="animation-delay: 0.3s"
          />
          <path
            v-if="crackStage >= 3"
            d="M 70 35 L 75 55"
            stroke="black"
            stroke-width="1.5"
            fill="none"
            class="animate-crack"
            style="animation-delay: 0.4s"
          />
          <path
            v-if="crackStage >= 3"
            d="M 90 35 L 85 55"
            stroke="black"
            stroke-width="1.5"
            fill="none"
            class="animate-crack"
            style="animation-delay: 0.5s"
          />
        </svg>
      </div>
      <div class="space-y-4">
        <h2 class="text-3xl font-bold text-gray-900">AITJE ontwaakt...</h2>
        <div class="mx-auto w-80 space-y-2">
          <div class="h-4 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              class="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
          <p class="text-sm text-gray-500">{{ progress }}%</p>
        </div>
        <p class="h-6 text-sm text-gray-500">
          {{ statusMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits<{ (event: 'complete'): void }>();
const progress = ref(0);
const crackStage = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

const statusMessage = computed(() => {
  if (progress.value < 25) return 'Lokale AI wordt opgestart...';
  if (progress.value < 50) return 'Neurale netwerk laden...';
  if (progress.value < 75) return 'API endpoints voorbereiden...';
  if (progress.value < 100) return 'Bijna klaar...';
  return 'Welkom! ✓';
});

onMounted(() => {
  timer = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(timer!);
      setTimeout(() => emit('complete'), 500);
      return;
    }
    progress.value += 2;
    if (progress.value > 25) crackStage.value = 1;
    if (progress.value > 50) crackStage.value = 2;
    if (progress.value > 75) crackStage.value = 3;
  }, 50);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
@keyframes crack {
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}
.animate-crack {
  animation: crack 0.5s ease-out forwards;
}
</style>
