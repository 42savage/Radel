<template>
  <div class="breadcrumbs">
    <nuxt-link to="/">Strona główna</nuxt-link> >
    <nuxt-link v-if="currentPage" to="/oferta">Oferta</nuxt-link>
    <span class="current" v-else>Oferta</span>
    <span v-if="currentPage"> > </span>
    <span class="current"> {{ currentPage }}</span>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const props = defineProps({
  currentPage: String,
});
</script>

<style scoped lang="scss">
.breadcrumbs {
  margin-bottom: 24px;
  a {
    color: #003049;
    text-decoration: none;
  }
  .current {
    color: #003049;
    font-weight: bold;
  }
}
</style>
