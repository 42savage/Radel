<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-wrapper">
      <img class="main-image" :src="src" alt="Image" />
      <div class="album-wrapper">
        <img
          draggable="false"
          class="album-cover"
          v-for="img in album"
          :src="img.path"
          alt="Image"
          :class="{ active: img.path === src }"
          @click="$emit('changeImage', img.path)"
        />
      </div>
      <button class="close-button" @click="$emit('toggleModal')">X</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  album: Array,
  isOpen: Boolean,
});
const emit = defineEmits(["toggleModal", "changeImage"]);
</script>

<style scoped lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.607);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
}
.main-image {
  width: 70%;
  height: 100%;
  object-fit: cover;
  padding-bottom: 24px;
}
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 24px;
  background: rgba(231, 230, 230, 0.9);
  border-radius: 4px;
}
.album-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.album-cover {
  width: 120px;
  height: 80px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;
}
.close-button {
  position: absolute;
  right: 120px;
  top: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
}
.active {
  border: 4px solid rgb(0, 48, 73);
  cursor: default;
}
</style>
