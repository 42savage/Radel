<template>
  <div class="wrapper">
    <header>
      <sectionTitle :title="'Zrealizowane projekty'" />
    </header>
    <main>
      <div class="realisation-wrapper">
        <div class="realisation-section">
          <p class="realisation-title">Nazwa obiektu</p>
          <div class="realisation-row">
            <img
              v-for="image in images"
              :src="image"
              alt="Zdjęcie przedstawia zrealizowane zamówienie przez firmę Radel"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

let images = ref([]);

function imagesLoader() {
  const images = import.meta.glob(
    "../public/realisations/gallery/ostatnie/*.jpg",
    {
      eager: true,
      import: "default",
    }
  );

  return Object.values(images);
}

onMounted(() => {
  images.value = imagesLoader();
});
</script>

<style scoped lang="scss">
header,
main {
  margin: 60px 24px;
}
.realisation-title {
  position: relative;
  color: #535353;
  margin-bottom: 32px;
}
.realisation-row {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  img {
    width: 248px;
    height: 412px;
    object-fit: cover;
    border-radius: 12px;
    margin: 0 6px;
    flex-shrink: 0;
  }
}
</style>
