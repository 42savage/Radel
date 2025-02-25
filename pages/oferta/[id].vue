<template>
  <div class="wrapper">
    <breadcrumbs :currentPage="pageData.title" />
    <header>
      <div class="heading-text">
        <h1 class="title">{{ pageData.title }}</h1>
        <p class="sub-title">{{ pageData.subtitle }}</p>
      </div>
      <examples />
    </header>
    <main>
      <div class="image-gallery">
        <img
          class="single-image"
          v-for="image in pageData.imageGallery"
          :src="image"
        />
      </div>
      <div class="benefits">
        <div
          class="single-benefit"
          v-for="benefit in pageData.benefits"
          :id="benefit.id"
        >
          <div class="benefit-icon">
            <img :src="benefit.icon" />
          </div>
          <div>
            <p class="benefit-title">{{ benefit.title }}</p>
            <p class="benefit-subtitle">{{ benefit.subtitle }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useOfferStore } from "@/stores/offer.js";
const store = useOfferStore();
const { offerByTitle } = storeToRefs(store);
let pageData = ref("");
const route = useRoute();
onMounted(() => {
  pageData.value = offerByTitle.value(route.params.id);
});
useHead({
  title: `Radel | Oferta | ${route.params.id} `,
  meta: [
    {
      name: "description",
      content:
        "Produkujemy wysokiej jakości elementy zdobiące budynki - ryfle, płaskorzeźby, pilastry, profile elewacyjne, kroksztyny i zdobienia okien. Zamów darmowe próbki.",
    },
  ],
});
</script>

<style scoped lang="scss">
.wrapper {
  padding: 40px 24px;
}
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.single-image {
  object-fit: cover;
}
.title {
  color: #003049;
  font-size: 32px;
}
.sub-title {
  color: #535353;
  margin-top: 16px;
  max-width: 520px;
}
.image-gallery {
  margin: 80px 0;
  width: 100%;
  img {
    width: 100%;
    border-radius: 8px;
    &:nth-child(1) {
      margin-bottom: 24px;
    }
  }
}
.benefits {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.single-benefit {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
}
.benefit-icon {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #e8e8e8;
  border-radius: 8px;
  margin-right: 16px;
}
.benefit-title {
  font-size: 16px;
  color: #003049;
  font-weight: bold;
  margin-top: 14px;
}
.benefit-subtitle {
  font-size: 14px;
  color: #535353;
  margin-top: 8px;
}

@media (min-width: 744px) {
  .wrapper {
    padding: 40px 48px;
  }
  .image-gallery {
    display: flex;
    flex-direction: row;
    img {
      min-height: 280px;
      max-height: 576px;
      margin: 0 8px;
    }
    img:nth-child(1) {
      width: 33%;
    }
    img:nth-child(2) {
      width: 67%;
    }
  }
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 40px 80px;
  }
  .image-gallery {
    height: 576px;
  }
  .single-image {
    height: 100%;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    padding: 40px 240px;
  }
}
</style>
