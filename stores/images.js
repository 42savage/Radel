// stores/galleryStore.js
import { defineStore } from "pinia";

export const useGalleryStore = defineStore("gallery", {
  state: () => ({
    images: [],
    pagination: 10,
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
    setPagination() {
      this.pagination = this.pagination + 10;
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
    getPaginatedData: (state) => {
      return state.images.slice(0, state.pagination);
    },
  },
});
