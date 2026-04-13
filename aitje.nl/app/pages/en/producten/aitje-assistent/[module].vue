<script setup lang="ts">
const route = useRoute();
const moduleSlug = Array.isArray(route.params.module) ? route.params.module[0] : route.params.module;
await navigateTo(`/en/products/aitje-assistent/${moduleSlug}`, { redirectCode: 301 });
</script>
