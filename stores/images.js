import { defineStore } from "pinia";

export const useImagesStore = defineStore({
  id: "ImagesStore",
  state: () => ({
    images: [],
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 5,
    isLoading: false,
  }),
  actions: {
    async fetchPhotos() {
      return await $fetch("/api/images");
      // this.isLoading = true;
      // try {
      // this.images = await $fetch("/api/images");

      // } catch (error) {
      //   console.error(error);
      // } finally {
      //   this.isLoading = false;
      // }
    },
  },
  // getters: {
  //   getPaginatedPhotos(state) {
  //     const items = [];

  //     for (let i = 0; i < state.itemsPerPage; i++) {
  //       items.push(state.images.data[i]);
  //     }
  //     console.log(state.images.data[0]);
  //     return items;
  //   },
  // },
});
