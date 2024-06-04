<template>
  <div class="nav-wrap">
    <p class="logo">Radel. <span>sztukateria</span></p>
    <nav class="main-navigation">
      <ul class="link-wrapper">
        <li class="single-link" v-for="nav in navigation" :key="nav.id">
          <nuxt-link :title="nav.title" :to="nav.linkTo">{{
            nav.title
          }}</nuxt-link>
        </li>
        <a href="tel:123123123" title="Telefon kontaktowy">123-123-123</a>
      </ul>
      <button class="hamburger" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
        <p class="hamburger-text">menu</p>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const navigation = [
  {
    id: 0,
    title: "Strona główna",
    linkTo: "/",
  },
  {
    id: 1,
    title: "Oferta",
    linkTo: "/",
  },
  {
    id: 2,
    title: "Realizacje",
    linkTo: "/",
  },
  {
    id: 3,
    title: "O firmie",
    linkTo: "/",
  },
  {
    id: 4,
    title: "Współpraca",
    linkTo: "/",
  },
];

let ctx;
let main = ref();
const tl = gsap.timeline({ paused: true });
const menuState = ref(false);
onMounted(() => {
  ctx = gsap.context((self) => {
    tl.fromTo(
      ".link-wrapper",
      {
        display: "none",
      },
      {
        display: "flex",
      }
    );
  }, main.value);
});

function toggleMenu() {
  if (!menuState.value) {
    tl.play();
    toggleState();
  } else {
    tl.reverse();
    toggleState();
  }
}

function toggleState() {
  menuState.value = !menuState.value;
}

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped lang="scss">
.logo {
  font-size: 32px;
  font-weight: bold;
  color: $baseColor;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
    font-weight: lighter;
    letter-spacing: 1.2px;
  }
}
.nav-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 60px 24px;
}
.link-wrapper {
  display: none;
  flex-direction: column;
  list-style-type: none;
  a {
    text-decoration: none;
    color: $baseColor;
  }
}
.hamburger {
  width: 48px;
  height: 48px;
  padding: 0 8px;
  border: 1px solid $baseColor;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  div {
    width: 100%;
    height: 2px;
    background: $baseColor;
    margin: 2px;
  }
}
.hamburger-text {
  font-size: 12px;
  color: $baseColor;
}

@media (min-width: 744px) {
  .nav-wrap {
    margin: 60px 48px;
  }
}
</style>
