<template>
  <div class="wrapper">
    <header>
      <p class="name">RADEL.</p>
      <p class="sub-name">Sztukateria elewacyjna</p>
      <NuxtImg src="/o-firmie/hero.jpg" class="hero-image" alt="" />
    </header>
    <main>
      <div class="text">
        <sectionTitle
          :sub-title="'Nasza misja'"
          :color="'#C2C2C2'"
          :title="'Naszą misją jest dostarczanie klientom sprawdzonych rozwiązań w zakresie sztukaterii elewacyjnej, które łączą w sobie tradycyjne rzemiosło z nowoczesnymi technologiami.'"
        />
        <sectionTitle
          :color="'#535353'"
          :title="'Wierzymy, że piękne i trwałe elewacje mogą nie tylko upiększać budynki, ale także podnosić ich wartość oraz prestiż.'"
        />
      </div>
      <div class="cards" v-if="width < 1440">
        <div class="single-card" v-for="card in cards">
          <p class="card-title">{{ card.title }}</p>
          <p class="card-desc">{{ card.desc }}</p>
        </div>
      </div>
      <div class="desktop-cards" v-else>
        <div class="single-desktop-card" v-for="card in cards">
          <p class="card-title-desktop">{{ card.title }}</p>
          <p class="card-desc-desktop">{{ card.desc }}</p>
        </div>
      </div>
      <section>
        <sectionTitle
          :sub-title="'Na czym pracujemy?'"
          :title="'Nasza pracownia wyposażona jest w profesjonalny sprzęt.'"
          :maxWidth="'560px'"
        />
        <button class="cta-link">
          Zobacz go w akcji
          <svg-arrow :width="8" :height="8" :color="'#535353'" />
        </button>
        <div class="machine">
          <div class="top-tiles">
            <div class="single-tile" v-for="tile in topTiles">
              {{ tile.title }}
            </div>
          </div>
          <img src="/o-firmie/machine.jpg" alt="" />
          <div class="bottom-tiles">
            <div class="single-tile" v-for="tile in bottomTiles">
              {{ tile.title }}
            </div>
          </div>
        </div>
      </section>
      <section class="about-us">
        <sectionTitle
          :sub-title="'Kilka słów o nas'"
          :color="'#C2C2C2'"
          :title="'Jesteśmy dumni z tego, że od trzech dekad dostarczamy naszym klientom produkty najwyższej jakości, które zdobią fasady budynków w całej Polsce.'"
        />
        <sectionTitle
          :color="'#535353'"
          :title="'Nasza firma specjalizuje się w tworzeniu eleganckich i trwałych elementów sztukaterii, które podkreślają wyjątkowy charakter każdej nieruchomości.'"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenSize } from "@/composables/screenSize.js";

gsap.registerPlugin(ScrollTrigger);

const { width, height } = useScreenSize();

const cards = ref([
  {
    id: 0,
    title: "30+",
    desc: "lat na rynku",
  },
  {
    id: 1,
    title: "4",
    desc: "Maszyn CNC",
  },
  {
    id: 2,
    title: "500+",
    desc: "Wykonanych projektów",
  },
  {
    id: 3,
    title: "10",
    desc: "Pracowników",
  },
]);

const topTiles = ref([
  {
    id: 0,
    title: "Powierzchnia robocza: 1300x2500mm",
  },
  {
    id: 1,
    title: "Obrabiane materiały: Verolith®",
  },
  {
    id: 2,
    title: "Oprogramowanie CAD/CAM: ZWCAD 2025",
  },
]);

const bottomTiles = ref([
  {
    id: 0,
    title: "Gzymsy",
  },
  {
    id: 1,
    title: "Rzeźby",
  },
  {
    id: 2,
    title: "Ryfle",
  },
]);

let ctx;
const main = ref();

onMounted(() => {
  let cards = gsap.utils.toArray(".single-card");
  ctx = gsap.context((self) => {
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: i === cards.length - 1 ? false : true,
        pinSpacing: false,
      });
    });
  }, main.value);
});
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
}
header {
  width: 100%;
  padding: 24px;
  position: relative;
}
.hero-image {
  width: 100%;
  object-fit: cover;
  height: 626px;
  border-radius: 24px;
}
.name,
.sub-name {
  position: absolute;
  color: #f5f5f5;
  font-weight: bold;
}
.sub-name {
  bottom: 48px;
  right: 48px;
  font-size: 24px;
  font-weight: 500;
}
.name {
  font-size: 56px;
  right: 48px;
  bottom: 72px;
}
main {
  margin: 80px 0;
  padding: 0 24px;
}
.text {
  .section-title {
    margin: -32px 0;
  }
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 160px;
}
.single-card {
  width: 300px;
  height: 300px;
  background: #f5f5f5;
  border-radius: 12px;
  margin: 12px 0;
  position: relative;
}
.card-title {
  font-size: 80px;
  color: $baseColor;
  font-weight: bold;
  position: absolute;
  top: 32px;
  left: 24px;
}
.card-desc {
  position: absolute;
  bottom: 32px;
  left: 24px;
  font-size: 24px;
  font-weight: bold;
  color: $contentColor;
}
.cta-link {
  background: none;
  color: $contentColor;
  border: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 1px;
    background: #535353;
  }
  svg {
    margin-left: 8px;
  }
}
.machine {
  margin: 48px 0;
  img {
    width: 100%;
  }
}
.top-tiles,
.bottom-tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.top-tiles {
  .single-tile {
    width: 152px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.bottom-tiles {
  width: 100%;
  justify-content: flex-end;
  .single-tile {
    width: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 42px;
  }
}
.single-tile {
  color: $contentColor;
  font-size: 12px;
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 4px;
  margin: 8px;
}

.about-us {
  margin: 160px 0;
  .section-title {
    margin: -32px 0;
  }
}
@media (min-width: 744px) {
  header {
    padding: 24px 48px;
  }
  .hero-image {
    height: 926px;
  }
  .sub-name {
    bottom: 56px;
    right: 80px;
  }
  .name {
    right: 80px;
    bottom: 60px;
    font-size: 160px;
  }
  main {
    padding: 0 48px;
  }
  .single-card {
    width: 100%;
  }
  .card-desc {
    right: 24px;
    left: unset;
  }
}
@media (min-width: 1024px) {
  header {
    margin: 80px 0;
    padding: 0 80px;
  }
  .hero-image {
    height: 720px;
  }
  .name,
  .sub-name {
    right: 120px;
  }
  main {
    margin: 160px 0;
    padding: 0 80px;
  }
}
@media (min-width: 1440px) {
  .desktop-cards {
    display: flex;
    flex-direction: row;
    margin: 160px 0;
  }
  .single-desktop-card {
    width: 320px;
    height: 320px;
    background: #f5f5f5;
    border-radius: 12px;
    padding: 32px;
    margin: 0 12px;
    position: relative;
  }
  .card-title-desktop {
    position: absolute;
    top: 32px;
    left: 32px;
    font-size: 80px;
    color: $baseColor;
    font-weight: bold;
  }
  .card-desc-desktop {
    position: absolute;
    bottom: 32px;
    right: 32px;
    font-size: 24px;
    color: #535353;
    font-weight: bold;
  }
  .machine {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: -240px;
    img {
      width: 948px;
      z-index: -1;
    }
  }
  .top-tiles {
    display: flex;
    flex-wrap: wrap;
    width: 606px;
    position: absolute;
    right: 120px;
    top: -60px;
    .single-tile {
      width: 260px;
      height: 80px;
      font-size: 16px;
      text-align: center;
    }
  }
  .bottom-tiles {
    display: flex;
    flex-wrap: wrap-reverse;
    width: 606px;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 80px;
    .single-tile {
      width: 260px;
      height: 80px;
      font-size: 16px;
      text-align: center;
    }
  }
}
@media (min-width: 1920px) {
  header,
  main {
    padding: 0 240px;
  }
  .sub-name {
    right: 260px;
    bottom: 80px;
  }
  .name {
    left: 260px;
    bottom: 40px;
  }
}
</style>
