<template>
  <div class="courtain" ref="courtainRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { handleItems } = globalTimeline();

const courtainRef = ref(null);

onMounted(() => {
  handleItems(courtainRef.value);
});
</script>

<style scoped lang="scss">
.courtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #003049;
  z-index: 999;
}
</style>
