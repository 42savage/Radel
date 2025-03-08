<template>
  <div class="wrapper">
    <h1>Zrealizowane projekty</h1>
    <imageModal
      :src="currentImage"
      :album="currentAlbum"
      :isOpen="modalState"
      @toggleModal="toggleModal"
      @changeImage="changeImage"
      ref="modal"
    />
    <div class="images">
      <div v-for="album in files">
        <h3>{{ album.name }}</h3>
        <div class="image-box">
          <img
            class="single-image"
            v-for="img in album.contents"
            :src="img.path"
            draggable="false"
            @click="handleModal({ src: img.path, album: album.contents })"
          />
        </div>
      </div>
    </div>
    <div class="pagination-bar">
      <p>
        Widzisz {{ pagination.current }} z {{ pagination.total }} albumów zdjęć.
      </p>
      <div class="bar-wrapper">
        <div class="bar" :class="{ seen: pagination.current > 15 }"></div>
        <div class="bar" :class="{ seen: pagination.current > 30 }"></div>
        <div class="bar" :class="{ seen: pagination.current > 40 }"></div>
      </div>

      <button
        class="more-images"
        @click="incerasePagination"
        :class="{ disabled: pagination.current === pagination.total }"
      >
        Więcej zdjęć
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useImagesStore } from "@/stores/images.js";
import { useAsyncData } from "#app";
const currentState = defineModel({ default: 5 });

const imageStore = useImagesStore();
const { data } = await useAsyncData(() => imageStore.fetchPhotos());
// const { data: galleryData } = await useFetch("/api/images/");
// const files = galleryData.value.data;
// const files = computed(() => {
//   if (!data.value?.data) return [];
//   const dataSet = [...data.value.data];
//   const arr = [];
//   for (let i = 0; i < currentState.value; i++) {
//     arr.push(dataSet[i]);
//   }
//   return arr;
// });

const files = ref([]);

async function fetchFiles() {
  if (!data.value) return [];
  const dataSet = [...data.value];
  const arr = [];
  for (let i = 0; i < currentState.value; i++) {
    arr.push(dataSet[i]);
  }
  files.value = arr;
}

const pagination = computed(() => {
  return { current: files.value.length, total: data.value.length };
});

function incerasePagination() {
  if (currentState.value < 35) {
    currentState.value =
      currentState.value + Math.round(pagination.value.total / 3) - 5;
  } else {
    currentState.value = pagination.value.total;
  }
  fetchFiles();
}

const currentImage = ref("");
const currentAlbum = ref([]);
const modalState = ref(false);

function handleModal(data) {
  currentImage.value = data.src;
  currentAlbum.value = data.album;
  toggleModal();
}

function changeImage(data) {
  currentImage.value = data;
}

function toggleModal() {
  modalState.value = !modalState.value;
}

onMounted(() => {
  fetchFiles();
});
</script>

<style scoped lang="scss">
.wrapper {
  padding: 40px 24px;
}
.image-wrapper {
  width: 100%;
}
.image-section,
.image-box,
img {
  width: inherit;
  border-radius: 8px;
  cursor: pointer;
}

h1 {
  font-size: 32px;
  color: #003049;
  line-height: 30px;
  margin-bottom: 24px;
}
h3 {
  color: #535353;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 24px;
  margin-top: 56px;
  border-bottom: 1px solid #f5f5f5;
}
.single-image {
  width: 280px;
  height: 520px;
  margin: 8px;
  object-fit: cover;
}
.pagination-bar {
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
}
.bar-wrapper {
  display: flex;
  flex-direction: row;
  width: 250px;
}
.bar {
  width: 33%;
  height: 4px;
  background: gray;
  border-radius: 1px;
}
.seen {
  background: black;
}
.more-images {
  padding: 8px 32px;
  border: 2px solid black;
  background: none;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.33s;
  &:hover {
    background: black;
    color: white;
  }
}
.disabled {
  border: 2px solid gray;
  color: gray;
  &:hover {
    border: 2px solid gray;
    color: gray;
    background: none;
  }
}
.seen {
  background: black;
}

@media (min-width: 744px) {
  .wrapper {
    padding: 40px 48px;
  }
  .image-box {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .wrapper {
    padding: 40px 80px;
  }
}
@media (min-width: 1440px) {
  .image-box {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1920px) {
  .wrapper {
    padding: 40px 240px;
  }
}

// * {
//   color: white;
// }
// .wrapper {
//   margin: 80px 240px;
// }
// h1 {
//   font-size: 56px;
//   color: #003049;
//   margin-bottom: 32px;
// }
// h3 {
//   color: #535353;
//   border-bottom: 1px solid #f5f5f5;
//   margin-bottom: 24px;
//   font-weight: 300;
// }
// .image-box {
//   width: 100%;
//   display: grid;
//   // grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 16px;
//   flex-direction: row;
//   margin-bottom: 48px;
//   img {
//     width: 100%;
//     height: 560px;
//     object-fit: cover;
//     border-radius: 12px;
//     cursor: pointer;
//   }
// }
</style>
