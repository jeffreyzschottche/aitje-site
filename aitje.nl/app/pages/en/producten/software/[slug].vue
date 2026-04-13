<script setup lang="ts">
const route = useRoute();
const slug = String(route.params.slug);
const mapping: Record<string, string> = {
  "aitje-assistent-os": "/en/producten/aitje-assistent/aitje-os",
  "aitje-assistent-client": "/en/producten/aitje-assistent/aitje-client",
  "aitje-assistent-kennisbank": "/en/producten/aitje-assistent/kennisbank",
  promptpaleis: "https://www.promptpaleis.nl",
};

const target = mapping[slug] ?? "/en/producten";
await navigateTo(target, target.startsWith("http") ? { external: true } : { redirectCode: 301 });
</script>
