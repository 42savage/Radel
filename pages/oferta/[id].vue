<template>
  <div>
    <h1>{{ siteTitle }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
import { computed } from "vue";

const siteTitle = computed(() => {
  return route.params.id;
});

onMounted(() => {
  console.log(route);
});
</script>

<style></style>
