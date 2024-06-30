<template>
  <div class="imageModal" @click="$emit('close')">
    <img :src="src" alt="alt" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  src: String,
});
const emit = defineEmits(["close"]);

function watchScroll() {
  let currentPosition = window.scrollY;
  if (currentPosition > 0) {
    emit("close");
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", watchScroll);
  }
});
</script>

<style scoped lang="scss">
.imageModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 34, 34, 0.8);
  z-index: 10;
  img {
    max-width: calc(100% - 48px);
    max-height: 100%;
    border-radius: 12px;
  }
}
@media (min-width: 768px) {
  .imageModal img {
    max-height: calc(100% - 80px);
  }
}
</style>
