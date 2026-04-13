<script setup lang="ts">
const route = useRoute();
const mapping: Record<string, string> = {
  "aitje-assistent": "/producten/aitje-assistent",
  "aitje-custom": "/producten/aitje-custom",
};
await navigateTo(mapping[String(route.params.slug)] ?? "/producten", { redirectCode: 301 });
</script>
