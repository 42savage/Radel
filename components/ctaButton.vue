<template>
  <nuxt-link class="cta-button" :to="linkTo" :class="{ main: main }"
    >{{ title }} <svg-arrow :color="bindColor" :width="8" :height="8"
  /></nuxt-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  linkTo: String,
  main: Boolean,
  bindColor: {
    type: String,
    default: "#003049",
  },
});

// const bindColor = computed(() => {
//   if (!props.main) {
//     return "#D9D9D9";
//   } else {
//     return "#003049";
//   }
// });
</script>

<style scoped lang="scss">
.cta-button {
  padding: 4px 16px;
  background: none;
  border: 1px solid #535353;
  text-decoration: none;
  border-radius: 38px;
  font-size: 16px;
  color: $contentColor;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 8px;
  svg {
    margin-left: 8px;
  }
  &:hover {
    background: $baseColor;
    color: #f5f5f5;
  }
}
.main {
  background: #d9d9d9;
  border-color: #d9d9d9;
  color: $baseColor;
  margin-left: 0;
}
</style>
