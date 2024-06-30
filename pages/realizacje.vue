<template>
  <div class="wrapper">
    <header>
      <sectionTitle :title="'Zrealizowane projekty'" />
      <imageModal
        v-show="modalState"
        @close="modalState = false"
        :src="currentImage"
      />
    </header>
    <main>
      <div class="realisation-wrapper">
        <div class="realisation-section">
          <div
            class="realisation-row"
            v-for="(images, directory) in imagesByDirectory"
            :key="directory"
          >
            <h2 class="title-of-section">
              {{ directory_name(directory) }}
            </h2>
            <div v-for="image in images" :key="image.path">
              <img
                :src="`/realisations/gallery/${image.path}`"
                :alt="image.image"
                @click="showModal(`realisations/gallery/${image.path}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
const modalState = ref(false);
const currentImage = ref("");
const images = ref([]);
function directory_name(directory) {
  let words = directory.split("-").join(" ");

  words = words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return words;
}

function showModal(src) {
  modalState.value = !modalState.value;
  currentImage.value = src;
}

///

import { useGalleryStore } from "~/stores/images.js";

const galleryStore = useGalleryStore();

onMounted(async () => {
  await galleryStore.fetchGalleryData();
  images.value = galleryStore.images;
});

const { imagesByDirectory } = storeToRefs(galleryStore);

///
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
  margin-bottom: 56px;
  position: relative;
  padding-top: 56px;
  img {
    width: 248px;
    height: 412px;
    object-fit: cover;
    border-radius: 12px;
    margin: 0 6px;
    flex-shrink: 0;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.title-of-section {
  position: absolute;
  top: 0;
  left: 0;
}
@media (min-width: 1024px) {
  header,
  main {
    margin: 60px 80px;
  }
}
@media (min-width: 1920px) {
  header,
  main {
    margin: 80px 240px;
  }
}
</style>
