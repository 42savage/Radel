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
  </main>
</template>

<script setup></script>

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
</style>
