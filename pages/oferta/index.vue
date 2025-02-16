<template>
  <div class="wrapper">
    <breadcrumbs />
    <header>
      <div class="section-title">
        <p class="sub-title">Zapoznaj się z naszą</p>
        <h1 class="title">Oferta</h1>
        <p class="content">
          Marzysz o elewacji, która zachwyci elegancją i stylem? Sztukateria
          elewacyjna to idealne rozwiązanie, które podkreśli wyjątkowy charakter
          Twojego domu. Dzięki naszym produktom Twoja elewacja zyska
          niepowtarzalny wygląd, a Ty będziesz cieszyć się efektem, który
          przyciąga wzrok i dodaje prestiżu.
        </p>
      </div>
      <examples />
    </header>
    <main>
      <section class="offer-section">
        <nuxt-link
          draggable="false"
          v-for="link in offer"
          class="single-offer"
          :to="link.to"
        >
          <img draggable="false" class="link-image" :src="link.url" alt />
          <span class="link-title">{{ link.title }}</span>
        </nuxt-link>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Radel | Oferta",
  meta: [
    {
      name: "description",
      content:
        "Produkujemy wysokiej jakości elementy zdobiące budynki - ryfle, płaskorzeźby, pilastry, profile elewacyjne, kroksztyny i zdobienia okien. Zamów darmowe próbki.",
    },
  ],
});

const offer = ref([
  {
    id: 0,
    title: "Ryfle",
    url: "offer/ryfle.jpg",
    to: "oferta/ryfle",
  },
  {
    id: 1,
    title: "Płaskorzeźby",
    url: "offer/plaskorzezby.jpg",
    to: "oferta/plaskorzezby",
  },
  {
    id: 2,
    title: "Pilastry",
    url: "offer/pilastry.jpg",
    to: "oferta/pilastry",
  },
  {
    id: 3,
    title: "Profile elewacyjne",
    url: "offer/profile_elewacyjne.jpg",
    to: "oferta/profile_elewacyjne",
  },
  {
    id: 4,
    title: "Kroksztyny",
    url: "offer/kroksztyny.jpg",
    to: "oferta/kroksztyny",
  },
  {
    id: 5,
    title: "Zdobienia okien",
    url: "offer/zdobienia_okien.jpg",
    to: "oferta/zdobienia_okien",
  },
]);
</script>

<style scoped lang="scss">
.wrapper {
  padding: 80px 24px;
}
.sub-title {
  color: #535353;
  font-size: 16px;
  position: relative;
  margin-left: 32px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -16px;
    transform: translate(-50%, 0);
    background: #535353;
    width: 24px;
    height: 2px;
  }
}
.title {
  color: #003049;
  font-size: 32px;
}
.content {
  color: #535353;
  font-size: 16px;
  margin-top: 16px;
}
.info {
  background: #f8f8f8;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  margin-top: 24px;
}
.info-title {
  color: #003049;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}
.info-content {
  color: #535353;
  font-size: 16px;
  margin-bottom: 24px;
}
.info-button {
  color: #003049;
  font-size: 16px;
  padding: 8px;
  text-decoration: none;
  background: #eaeaea;
  border-radius: 4px;
  text-align: center;
}
.arrow {
  margin-left: 4px;
}
main {
  margin-top: 148px;
}
.single-offer {
  position: relative;
  margin: 12px 0;
  display: block;
}
.link-image {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.link-title {
  position: absolute;
  right: 16px;
  display: block;
  bottom: 16px;
  font-size: 32px;
  color: #535353;
  font-weight: bold;
}
@media (min-width: 768px) {
  .wrapper {
    padding: 30px 48px;
  }
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 40px 80px;
  }
}
@media (min-width: 1440px) {
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .info,
    .section-title {
      max-width: 522px;
    }
  }
  .offer-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    width: 100%;
  }
  .single-offer {
    margin: initial;
  }
}
@media (min-width: 1920px) {
  .wrapper {
    padding: 60px 240px;
  }
}
</style>
