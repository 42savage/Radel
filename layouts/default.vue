<template>
  <EntryCourtain />
  <navigation />
  <CookiesNotification />
  <NuxtPage />
  <contactSection />
  <theFooter />
</template>

<script setup>
import { onMounted } from "vue";
const { animateItems, scrollAnimate } = globalTimeline();

onMounted(() => {
  animateItems();
  scrollAnimate();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: "Inter";
}
</style>
