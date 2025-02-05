<template>
  <div class="wrapper">
    <imageModal
      :src="currentImage"
      :album="currentAlbum"
      :isOpen="modalState"
      @toggleModal="toggleModal"
      @changeImage="changeImage"
    />
    <h1>Zrealizowane projekty</h1>
    <div class="image-wrapper">
      <div class="image-section">
        <div class="image-section" v-for="album in files" :key="album.name">
          <h3>{{ album.name }}</h3>
          <div class="image-box">
            <img
              v-for="img in album.contents"
              :key="img"
              :src="img.path"
              alt="Zdjęcie realizacji"
              draggable="false"
              @click="handleModal({ src: img.path, album: album.contents })"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: galleryData } = await useFetch("/api/images/");
const files = galleryData.value.data;

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
</script>

<style scoped lang="scss">
* {
  color: white;
}
.wrapper {
  margin: 80px 240px;
}
h1 {
  font-size: 56px;
  color: #003049;
  margin-bottom: 32px;
}
h3 {
  color: #535353;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 24px;
  font-weight: 300;
}
.image-box {
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  flex-direction: row;
  margin-bottom: 48px;
  img {
    width: 100%;
    height: 560px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>
