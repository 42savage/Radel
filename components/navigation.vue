<template>
  <div class="contact-info-stripe">
    <p>
      <span> <img src="/svg/map-pin.svg" alt="" /> </span>26-600 Radom, ul.
      Biznesowa 25
    </p>
    <div>
      <p>
        <span> <img src="/svg/phone.svg" alt="" /> </span>123-456-789
      </p>
      <p>
        <span><img src="/svg/mail.svg" alt="" /> </span>kontakt@radel.pl
      </p>
    </div>
  </div>
  <div class="nav-wrap">
    <nuxt-link to="/" class="logo">Radel. <span>sztukateria</span></nuxt-link>
    <nav class="main-navigation">
      <ul class="link-wrapper">
        <li class="single-link" v-for="nav in navigation" :key="nav.id">
          <nuxt-link :title="nav.title" :to="nav.linkTo">{{
            nav.title
          }}</nuxt-link>
        </li>
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
    linkTo: "/oferta",
  },
  {
    id: 2,
    title: "Realizacje",
    linkTo: "/realizacje",
  },
  {
    id: 3,
    title: "O firmie",
    linkTo: "/o-firmie",
  },
  {
    id: 4,
    title: "Współpraca",
    linkTo: "/wspolpraca",
  },
];

let ctx;
let main = ref();
const tl = gsap.timeline({ paused: true });
const menuState = ref(false);

onMounted(() => {
  if (window.innerWidth < 1024) {
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
  }
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
.contact-info-stripe {
  display: none;
}
.logo {
  font-size: 32px;
  font-weight: bold;
  color: $baseColor;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  z-index: 10;
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #ececec;
  justify-content: center;
  align-items: flex-end;
  padding: 24px;
  z-index: 5;
  a {
    text-decoration: none;
    color: $baseColor;
    font-size: 24px;
  }
}
.single-link {
  margin: 8px 0;
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
  z-index: 10;
  position: relative;
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
@media (min-width: 1024px) {
  .router-link-exact-active {
    font-weight: bold;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -71px;
      left: 50%;
      transform: translate(-50%, 0);
      // width: 40%;
      width: 40px;
      height: 2px;
      background: $baseColor;
    }
  }
  .logo {
    &::before {
      content: unset;
    }
  }
  .contact-info-stripe {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    background: #d9d9d9;
    padding: 0 48px;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 12px;
      font-weight: 300;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $baseColor;
      img {
        margin: 0 8px;
      }
    }
    div {
      display: inherit;
      p {
        margin: 0 16px;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }
  }
  .nav-wrap {
    margin: 0;
    padding: 60px 80px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 0;
      background: #d9d9d9;
      width: calc(100% - 160px);
      height: 1px;
    }
  }
  .link-wrapper {
    padding: 0;
    flex-direction: row;
    display: flex;
    width: 100%;
    height: unset;
    justify-content: flex-end;
    align-items: center;
    position: initial;
    background: none;
    a {
      font-size: 14px;
    }
  }
  .single-link {
    margin: 0 16px;
    &:hover {
      font-weight: bold;
    }
  }
  .hamburger {
    display: none;
  }
}
@media (min-width: 1440px) {
  .nav-wrap {
    padding: 60px 80px;
  }
  .contact-info-stripe {
    padding: 0 80px;
  }
  .nav-wrap {
    &::before {
      width: calc(100% - 160px);
    }
  }
}
@media (min-width: 1920px) {
  .nav-wrap {
    padding: 60px 240px;
    &::before {
      width: calc(100% - 480px);
    }
  }
  .contact-info-stripe {
    padding: 0 240px;
  }
}
</style>
