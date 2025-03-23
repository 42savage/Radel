<template>
  <footer>
    <div class="top">
      <div class="logo">
        <p>Radel.</p>
        <p>sztuketeria</p>
      </div>
    </div>

    <div class="middle">
      <div class="left">
        <p class="title">Dane adresowe</p>
        <p class="address">RADEL Izabela Fiet</p>
        <p class="address">26-600 Radom</p>
        <p class="address">ul. Biznesowa 25,</p>
        <p class="address">NIP: 796-13-52-761</p>
      </div>
      <ul class="right">
        <li class="single-link">
          <nuxt-link to="/">Strona główna</nuxt-link>
        </li>

        <li class="single-link">
          <nuxt-link to="/oferta">Oferta</nuxt-link>
        </li>

        <li class="single-link">
          <nuxt-link to="/o-firmie">O firmie</nuxt-link>
        </li>

        <li class="single-link">
          <nuxt-link to="/realizacje">Realizacje</nuxt-link>
        </li>

        <li class="single-link">
          <nuxt-link to="/wspolpraca">Współpraca</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="author">
        Projekt i realizacja:
        <a href="https://webnieodparady.pl" target="_blank"
          >web nie od parady</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
footer {
  background: #f5f5f5;
  padding-top: 40px;
  padding-bottom: 80px;
  border-radius: 24px;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  p:nth-child(1) {
    font-size: 32px;
    color: $baseColor;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 16px;
    color: $baseColor;
    letter-spacing: 1.2px;
  }
}

.middle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  padding: 0 24px;
}

.right {
  list-style-type: none;
}
.single-link {
  text-align: right;
  margin: 8px 0;
  a {
    text-decoration: none;
    color: $baseColor;
  }
}

.title {
  color: $contentColor;
  font-size: 16px;
  font-weight: bold;
}
.address {
  font-size: 16px;
  margin: 4px 0;
  color: $baseColor;
  &:nth-child(1) {
    margin-top: 12px;
  }
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px;
}
.author {
  color: #b1b1b1;
  font-size: 12px;
  a {
    color: #b1b1b1;
  }
}
@media (min-width: 744px) {
  .middle {
    padding: 0 48px;
  }
}
@media (min-width: 1024px) {
  .middle {
    padding: 0 80px;
  }
}
@media (min-width: 1440px) {
  footer {
    margin: 0 80px;
  }
}
@media (min-width: 1920px) {
  footer {
    margin: 0 240px;
  }
}
</style>
