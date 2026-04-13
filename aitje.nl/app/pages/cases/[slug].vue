<script setup lang="ts">
const route = useRoute();
const mapping: Record<string, string> = {
  "thuiszorg-voice-rapportage": "/use-cases/vergaderingen-en-gesprekken",
  "boekenwinkel-rag-isbn": "/use-cases/interne-kennis-en-beleid",
  "it-beheer-lokale-coding-agents": "/use-cases/maatwerk-en-agentic-workflows",
  "rijschool-whatsapp-notulist": "/use-cases/vergaderingen-en-gesprekken",
};
await navigateTo(mapping[String(route.params.slug)] ?? "/use-cases", { redirectCode: 301 });
</script>
