<script setup lang="ts">
// Renders plain text with inline [label](/path) links. Knowledge-centre links get the
// yellow knowledge-link style (context/terminology.md).
const props = defineProps<{ text: string; tag?: string }>();
const { text: translate } = useSiteLanguage();

type Part = { type: "text"; value: string } | { type: "link"; label: string; to: string };

const parts = computed<Part[]>(() => {
  const text = translate(props.text);
  const result: Part[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) result.push({ type: "text", value: text.slice(last, index) });
    result.push({ type: "link", label: match[1]!, to: match[2]! });
    last = index + match[0].length;
  }
  if (last < text.length) result.push({ type: "text", value: text.slice(last) });
  return result;
});

const linkClass = (to: string) =>
  to.startsWith("/kenniscentrum")
    ? "knowledge-link"
    : "font-semibold underline decoration-brand decoration-2 underline-offset-4 hover:decoration-current";

const isPdf = (to: string) => /\.pdf(?:[?#].*)?$/i.test(to);
</script>

<template>
  <component :is="tag ?? 'span'">
    <template v-for="(part, i) in parts" :key="i">
      <template v-if="part.type === 'text'">{{ part.value }}</template>
      <a
        v-else-if="isPdf(part.to)"
        :href="part.to"
        target="_blank"
        rel="noopener noreferrer"
        type="application/pdf"
        :class="linkClass(part.to)"
      >{{ part.label }}</a>
      <NuxtLink v-else :to="part.to" :class="linkClass(part.to)">{{ part.label }}</NuxtLink>
    </template>
  </component>
</template>
