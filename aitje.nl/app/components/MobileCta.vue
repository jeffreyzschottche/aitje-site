<script setup lang="ts">
// Sticky call to action on small screens, hidden on the contact page itself.
import { contact, mainCta } from "@/content/site";

const route = useRoute();
const visible = ref(false);
const hidden = computed(() => route.path.startsWith("/contact"));

const onScroll = () => {
  visible.value = window.scrollY > 480;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-full opacity-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible && !hidden"
      class="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur-lg sm:hidden"
    >
      <UiButton :to="mainCta.to" class="flex-1" arrow>{{
        mainCta.label
      }}</UiButton>
      <a
        :href="`mailto:${contact.email}`"
        class="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-surface"
        aria-label="Mail AITJE"
      >
        <AppIcon name="mail" :size="18" />
      </a>
    </div>
  </Transition>
</template>
