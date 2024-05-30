<template>
  <header>
    <h1 class="title">
      Wyraź Swój Styl - Wybierz Sztukaterię Elewacyjną Już Dzisiaj!
    </h1>
    <p class="sub-title">
      Sztukateria elewacyjna to wyrafinowane detale zdobnicze, które nadają
      fasadzie budynku wyjątkowy charakter i elegancję. Odkryj naszą ofertę i
      nadaj swojej fasadzie niepowtarzalny wygląd, który będzie emanacją klasyki
      i dobrego gustu.
    </p>
    <ctaButton :title="'Oferta'" :linkTo="'/oferta'" :main="true" />
    <ctaButton :title="'Realizacje'" :linkTo="'/realizacje'" />
    <div class="image-wrapper">
      <img
        src="/header/mobile/hero-image1.jpg"
        alt="Zdjęcie przedstawia realizację wykonaną przez firmę Radel"
      />
      <img
        src="/header/mobile/hero-image2.jpg"
        alt="Zdjęcie przedstawia realizację wykonaną przez firmę Radel"
      />
    </div>
  </header>
  <main>
    <sectionTitle
      :subTitle="'Lepsze decyzje, większa precyzja, oszałamiające rezultaty'"
      :title="'Dlaczego warto zdecydować się na nas?'"
      :content="'Sztukateria elewacyjna - Trzydzieści lat w branży. Mamy wypracowaną optymalną strategie, która pomaga mierzyć się nam z codziennymi zleceniami.'"
    />
    <nuxt-link to="/o-firmie" class="about-us-cta"
      >Dowiedz się o nas czegoś więcej</nuxt-link
    >
    <div class="process">
      <sectionTitle
        :title="'Proces realizacji zamówienia jest naprawdę banalny.'"
        :content="'Najważniejszym jest określenie czego oczekujesz jako nasz klient. My dołożymy starań aby dostarczyć Ci produkt jakiego pragniesz. Do każdego zamówienia podchodzimy indywidualnie to oczywiste. '"
      />
      <div class="cta-section">
        <p class="cta-title">Sprawdź jakie to proste:</p>
        <nuxt-link class="cta-link" :to="'/kontakt'"
          >Złóż zamówienie <svg-arrow :width="8" :height="8" :color="'#003049'"
        /></nuxt-link>
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
      <img src="/video/mobile/cover.jpg" alt="" />
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
    src: "/realisations/mobile/img01.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 1,
    src: "/realisations/mobile/img02.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 2,
    src: "/realisations/mobile/img03.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 3,
    src: "/realisations/mobile/img04.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 4,
    src: "/realisations/mobile/img05.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
  {
    id: 5,
    src: "/realisations/mobile/img06.jpg",
    alt: "Zdjęcie przedstawia ...",
  },
]);
</script>

<style scoped lang="scss">
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
  img {
    margin: 0 4px;
  }
}
main {
  margin: 60px 24px;
}
.about-us-cta {
  color: $baseColor;
  text-decoration: underline;
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
  img {
    border-radius: 8px;
  }
  a {
    margin-top: 40px;
  }
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin: 12px;
  }
}
.column {
  margin: 12px 0;
  img:nth-child(1) {
    margin-bottom: 24px;
  }
}
</style>
