<template>
  <div class="info">
    <p class="info-title">Zamów darmowe próbki i przekonaj się sam!</p>
    <p class="info-content">
      Nie musisz wierzyć nam na słowo – sprawdź jakość naszych produktów na
      własne oczy! Oferujemy darmowe próbki sztukaterii, dzięki którym możesz
      zobaczyć, jak nasze elementy będą wyglądać na Twojej elewacji. To
      doskonała okazja, aby przekonać się o ich jakości i estetyce bez żadnych
      zobowiązań.
    </p>
    <a class="info-button" href="#contact-form"
      >Przejdź do formularza
      <svg-arrow class="arrow" :color="'#003049'" :width="12" :height="12"
    /></a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.info {
  background: #f8f8f8;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  margin-top: 24px;
  max-width: 442px;
  min-width: 240px;
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
</style>
