<template>
  <div class="nav-wrap">
    <p>LOGO</p>
    <nav>
      <ul>
        <li v-for="nav in navigation" :key="nav.id">
          <nuxt-link :to="nav.linkTo">{{ nav.title }}</nuxt-link>
        </li>
        <a href="tel:123123123" title="Telefon kontaktowy">123-123-123</a>
      </ul>
    </nav>
  </div>
</template>

<script setup>
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
</script>

<style scoped lang="scss"></style>
