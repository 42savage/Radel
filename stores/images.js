// stores/galleryStore.js
import { defineStore } from "pinia";

export const useGalleryStore = defineStore("gallery", {
  state: () => ({
    images: [],
  }),
  actions: {
    async fetchGalleryData() {
      try {
        const data = $fetch("/api/images");
        this.images = await data;
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    },
  },
  getters: {
    imagesByDirectory: (state) => {
      return state.images.reduce((acc, img) => {
        if (!acc[img.directory]) {
          acc[img.directory] = [];
        }
        acc[img.directory].push(img);
        return acc;
      }, {});
    },
  },
});
