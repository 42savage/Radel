<template>
  <div class="question-wrapper">
    <sectionTitle
      :subTitle="'Pozwól, że odpowiemy na'"
      :title="'Najczęsciej zadawane pytania'"
    />
    <ul class="question-list">
      <li class="single-question" v-for="question in questions">
        <div class="number">0{{ question.id + 1 }}.</div>
        <p>
          {{ question.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  {
    id: 0,
    title: "Ile będzie kosztować wyprodukowanie mojego zamówienia?",
  },
  {
    id: 1,
    title: "Ile trwa finalizacja zamówienia?",
  },
  {
    id: 2,
    title: "Czy przed złożeniem finalnego zamówienia mogę liczyć na próbki?",
  },
  {
    id: 3,
    title: "Od czego uzależniony jest czas realizacji i ile to czasu?",
  },
  {
    id: 4,
    title: "Jak przygotować projekt?",
  },
  {
    id: 5,
    title: "Czy mogę liczyć na przygotowanie projektu przez Radel?",
  },
  {
    id: 6,
    title: "Czy jesteście zainteresowani stałą współpracą?",
  },
]);
</script>

<style scoped lang="scss">
.question-list {
  list-style-type: none;
}
.single-question {
  color: $contentColor;
  padding: 24px 0;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  &:nth-last-child(1) {
    border: none;
  }
}
.number {
  margin-right: 24px;
  font-weight: bold;
  color: $baseColor;
}
</style>
