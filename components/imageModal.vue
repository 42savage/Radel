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

function watchScroll() {
  let currentPosition = window.scrollY;
  if (currentPosition > 560) {
    emit("toggleModal");
  }
}

watch(
  () => props.isOpen,
  (n, o) => {
    if (n) {
      window.addEventListener("scroll", watchScroll);
    } else {
      window.removeEventListener("scroll", watchScroll);
    }
  }
);
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
  z-index: 10;
}
.main-image {
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  border-radius: 8px;
  object-fit: cover;
}
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 24px;
}
.album-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
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
  right: 32px;
  top: 0px;
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  padding: 12px;
}
.active {
  border: 4px solid rgb(0, 48, 73);
  cursor: default;
}
</style>
