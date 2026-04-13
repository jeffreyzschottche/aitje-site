<script setup lang="ts">
const route = useRoute();
const mapping: Record<string, string> = {
  "aitje-assistent": "/en/producten/aitje-assistent",
  "aitje-custom": "/en/producten/aitje-custom",
};
await navigateTo(mapping[String(route.params.slug)] ?? "/en/producten", { redirectCode: 301 });
</script>
