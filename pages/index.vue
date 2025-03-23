<template>
  <header>
    <div class="text-wrapper">
      <h1 class="title">
        Wyraź Swój Styl - Wybierz Sztukaterię Elewacyjną Już Dzisiaj!
      </h1>
      <div class="buttons-with-text">
        <p class="sub-title">
          Sztukateria elewacyjna to wyrafinowane detale zdobnicze, które nadają
          fasadzie budynku wyjątkowy charakter i elegancję. Odkryj naszą ofertę
          i nadaj swojej fasadzie niepowtarzalny wygląd, który będzie emanacją
          klasyki i dobrego gustu.
        </p>
        <div>
          <ctaButton :title="'Oferta'" :linkTo="'/oferta'" :main="true" />
          <ctaButton :title="'Realizacje'" :linkTo="'/realizacje'" />
        </div>
      </div>
    </div>
    <div class="image-wrapper">
      <img
        class="header-image"
        src="/header/header-image1.jpg"
        alt="Zdjęcie przedstawia realizację przez firmę Radel"
      />
      <img
        class="header-image"
        src="/header/header-image2.jpg"
        alt="Zdjęcie
      przedstawia Port w Gdyni."
      />
    </div>
  </header>
  <main>
    <div class="why-us">
      <sectionTitle
        :subTitle="'Lepsze decyzje, większa precyzja, oszałamiające rezultaty'"
        :title="'Dlaczego warto zdecydować się na nas?'"
        :maxWidth="'460px'"
        :content="'Sztukateria elewacyjna - Trzydzieści lat w branży. Mamy wypracowaną optymalną strategie, która pomaga mierzyć się nam z codziennymi zleceniami.'"
      />
      <nuxt-link to="/o-firmie" class="about-us-cta"
        >Dowiedz się o nas czegoś więcej</nuxt-link
      >
      <img src="/why.svg" alt="" />
    </div>
    <div class="process">
      <!--Kiedyś wypadałoby to ogarnąć w inny, lepszy sposób-->
      <sectionTitle
        class="mobile"
        :maxWidth="'460px'"
        :title="'Proces realizacji zamówienia - krok po kroku'"
      />
      <!---->
      <div class="text-wrap">
        <sectionTitle
          class="desktop"
          :title="'Proces realizacji zamówienia - krok po kroku'"
          :max-width="'570px'"
        />
        <div class="sub-div">
          <sectionTitle
            class="desktop"
            :content="'Najważniejszym jest określenie czego oczekujesz jako nasz klient. My dołożymy starań aby dostarczyć Ci produkt jakiego pragniesz. Do każdego zamówienia podchodzimy indywidualnie to oczywiste. '"
            :max-width="'570px'"
          />
          <!---->
          <div class="cta-section">
            <p class="cta-title">Sprawdź jakie to proste:</p>
            <nuxt-link class="cta-link" :to="'/wspolpraca'"
              >Złóż zamówienie
              <svg-arrow :width="8" :height="8" :color="'#003049'"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div class="tiles">
        <div class="single-tile" v-for="tile in tiles" :id="tile.id">
          <p class="tile-title">{{ tile.title }}</p>
          <img class="tile-image" :src="tile.img" alt="" />
          <p class="tile-subtitle">{{ tile.subTitle }}</p>
        </div>
      </div>
    </div>
    <sectionTitle
      :subTitle="'Sztuka wypracowywana latami'"
      :title="'Zobacz jak to robimy'"
    />
    <div class="video-wrapper">
      <img class="cover-image" src="/video/cover.jpg" />
      <div class="play-button-wrapper">
        <img src="/svg/triangle.svg" alt="/" />
      </div>
    </div>
    <div class="realisations">
      <sectionTitle
        :subTitle="'A oto efekt naszej pracy, który'"
        :title="'Z dumą chcemy pokazać światu'"
      />
      <div class="realisations-wrap">
        <div class="row">
          <img
            v-for="img in realisations.slice(0, 2)"
            :src="img.src"
            :key="img.id"
            :alt="img.alt"
          />
        </div>

        <div class="column">
          <img
            v-for="img in realisations.slice(2, 4)"
            :src="img.src"
            :key="img.id"
            :alt="img.alt"
          />
        </div>

        <div class="row">
          <img
            v-for="img in realisations.slice(4, 6)"
            :src="img.src"
            :alt="img.alt"
            :key="img.id"
          />
        </div>
        <nuxt-link class="cta-link" to="/realizacje"
          >Realizacje <svg-arrow :width="8" :height="8" :color="'#535353'" />
        </nuxt-link>
      </div>
    </div>
    <div>
      <questionSection />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const tiles = ref([
  {
    id: 0,
    title: "Określenie celu i oczekiwań",
    img: "/tiles/tile01.png",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus.",
  },
  {
    id: 1,
    title: "Przygotowanie projektu i wycena",
    img: "/tiles/tile02.png",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus.",
  },
  {
    id: 2,
    title: "Produkcja",
    img: "/tiles/tile03.png",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus.",
  },
  {
    id: 3,
    title: "Dostawa gotowego produktu",
    img: "/tiles/tile04.png",
    subTitle: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus.",
  },
]);
const realisations = ref([
  {
    id: 0,
    src: "/realisations/img01.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 1,
    src: "/realisations/img02.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 2,
    src: "/realisations/img03.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 3,
    src: "/realisations/img07.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 4,
    src: "/realisations/img05.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 5,
    src: "/realisations/img06.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
]);
</script>

<style scoped lang="scss">
.desktop {
  display: none;
}
header {
  margin: 60px 24px;
  &::before {
    content: "";
    width: 100%;
    height: 524px;
    background: #f8f8f8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
.header-image {
  width: 100%;
  height: 460px;
  border-radius: 24px;
  object-fit: cover;
  &:nth-child(2) {
    width: 200%;
  }
}
.title {
  font-size: 32px;
  color: $baseColor;
  line-height: 36px;
  margin-bottom: 16px;
  letter-spacing: -1.4px;
}
.sub-title {
  font-size: 16px;
  color: $contentColor;
  line-height: 24px;
  font-weight: 300;
  margin-bottom: 24px;
}
.image-wrapper {
  width: 100%;
  border-radius: 24px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  margin-top: 56px;
}
.header-image {
  margin: 0 4px;
  flex-shrink: 0;
  width: 100%;
}
main {
  margin: 60px 24px;
}
.about-us-cta {
  color: $baseColor;
  text-decoration: underline;
}
.why-us {
  position: relative;
  img {
    display: none;
  }
}
.process {
  width: 100%;
  background: #f8f8f8;
  padding: 32px 24px;
  border-radius: 24px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.cta-title {
  color: $baseColor;
  font-size: 16px;
  margin-bottom: 16px;
}
.cta-link {
  text-decoration: none;
  color: $baseColor;
  border: 1px solid #d9d9d9;
  background: #d9d9d9;
  border-radius: 16px;
  padding: 4px 16px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 8px;
  }
}
.tiles {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 56px;
  border-radius: 24px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.single-tile {
  background: #ececec;
  width: 224px;
  height: 280px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 4px;
  flex-shrink: 0;
  position: relative;
}
.tile-image {
  width: 60%;
}
.tile-title {
  color: $baseColor;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  position: absolute;
  top: 32px;
  padding: 0 16px;
}
.tile-subtitle {
  font-size: 12px;
  color: $contentColor;
  margin-top: 16px;
  position: absolute;
  bottom: 32px;
}
.video-wrapper {
  position: relative;
  margin-bottom: 80px;
}
.cover-image {
  width: 100%;
}
.play-button-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(12px);
  border-radius: 80px;
  img {
    margin-left: 8px;
  }
}
.realisations-wrap {
  width: 100%;
  border-radius: 24px;
  margin-bottom: 160px;
  a {
    margin-top: 48px;
  }
}

.row {
  display: flex;
  flex-direction: row;
  &:nth-child(1) {
    margin-bottom: 12px;
  }
  &:nth-child(2) {
    margin-top: 12px;
  }
  img {
    width: calc(50% - 6px);
    border-radius: 8px;
    &:nth-child(1) {
      margin-right: 12px;
    }
  }
}
.column {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 50%;
    border-radius: 8px;
    margin-bottom: 12px;
  }
}
@media (min-width: 744px) {
  header,
  main {
    margin: 60px 48px;
  }
  .image-wrapper::-webkit-scrollbar {
    display: none;
  }
  .image-wrapper img {
    flex-shrink: initial;
  }
  .header-image {
    width: 24%;
    max-height: 600px;
    &:nth-child(2) {
      width: 76%;
      max-height: 600px;
    }
  }
  .title {
    width: 460px;
  }
  .sub-title {
    width: 460px;
  }
  .image-wrapper {
    margin-top: 96px;
  }
}

@media (min-width: 1024px) {
  header::before {
    height: 612px;
  }
  header,
  main {
    margin: 60px 80px;
  }
  .tiles,
  .image-wrapper {
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none;
  }
}

@media (min-width: 1440px) {
  header,
  main {
    margin: 80px;
  }
  header::before {
    content: unset;
  }
  .title {
    font-size: 56px;
    line-height: 64px;
    letter-spacing: -1.6px;
    width: 726px;
  }
  .text-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .why-us {
    overflow: hidden;
    padding: 48px 0;
    img {
      display: initial;
      position: absolute;
      right: 0px;
      bottom: 0;
    }
  }
  // .image-wrapper img {
  //   margin: 0;
  //   height: 446px;
  // }
  // .image-wrapper img:nth-child(2) {
  //   margin-left: 24px;
  // }
  .process {
    padding: 56px 48px;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: flex;
  }
  .text-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tiles {
    justify-content: center;
  }
  .single-tile {
    width: 280px;
    height: 320px;
  }
  .play-button-wrapper {
    width: 240px;
    height: 240px;
    border-radius: 240px;
    cursor: pointer;
  }
  .cover-image {
    height: 586px;
  }
}
@media (min-width: 1920px) {
  main,
  header {
    margin: 80px 240px;
  }
}
</style>
