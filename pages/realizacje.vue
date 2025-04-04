<template>
  <div class="wrapper">
    <h1>Zrealizowane projekty</h1>
    <div v-if="isLoading" class="loading-box">
      <div class="skeleton-box"></div>
      <div class="skeleton-box"></div>
      <div class="skeleton-box"></div>
      <div class="skeleton-box"></div>
    </div>
    <imageModal
      :src="currentImage"
      :album="currentAlbum"
      :isOpen="modalState"
      @toggleModal="toggleModal"
      @changeImage="changeImage"
      ref="modal"
    />
    <div class="images" ref="imagesRef">
      <div v-for="(album, index) in files" :key="index">
        <h3>{{ album.name }}</h3>
        <div class="image-box">
          <img
            class="single-image"
            v-for="(img, index) in album.contents"
            :key="index"
            :src="img.path"
            @load="doTheSkeletonThing"
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

const { handleScrollItems } = globalTimeline();

const imagesRef = ref(null);
const titleRef = ref(null);

const imageStore = useImagesStore();
const { data } = await useAsyncData(() => imageStore.fetchPhotos());

const isLoading = ref(true);
let loadedImages = ref(0);

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

const imageCount = computed(() => {
  let counter = 0;
  files.value.forEach((file) => {
    counter += file.contents.length;
  });
  return counter;
});

function doTheSkeletonThing() {
  loadedImages.value += 1;
  if (loadedImages.value === imageCount.value) {
    isLoading.value = false;
  }
}

onMounted(async () => {
  await nextTick();
  console.log(imagesRef.value.children);
  fetchFiles();
  handleScrollItems();
});
</script>

<style scoped lang="scss">
.wrapper {
  padding: 40px 24px;
  position: relative;
}
.loading-box {
  width: 100vw;
  height: 100vh;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 180px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.skeleton-box {
  width: 280px;
  height: 520px;
  background: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0 16px;
  flex-shrink: 0;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
.image-wrapper {
  width: 100%;
}
.images {
  position: relative;
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
  .loading-box {
    padding: 180px 40px;
  }
}

@media (min-width: 1440px) {
  .wrapper {
    padding: 40px 80px;
  }
  .image-box {
    grid-template-columns: repeat(3, 1fr);
  }
  .loading-box {
    padding: 180px 60px;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    padding: 40px 240px;
  }
  .loading-box {
    padding: 180px 240px;
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
