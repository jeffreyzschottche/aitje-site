<script setup lang="ts">
const route = useRoute();
const mapping: Record<string, string> = {
  "thuiszorg-voice-rapportage": "/en/use-cases/meetings-and-conversations",
  "boekenwinkel-rag-isbn": "/en/use-cases/internal-knowledge-and-policy",
  "it-beheer-lokale-coding-agents": "/en/use-cases/custom-and-agentic-workflows",
  "rijschool-whatsapp-notulist": "/en/use-cases/meetings-and-conversations",
};
await navigateTo(mapping[String(route.params.slug)] ?? "/en/use-cases", { redirectCode: 301 });
</script>
