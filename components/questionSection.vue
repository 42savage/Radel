<template>
  <div class="question-wrapper">
    <sectionTitle
      :subTitle="'Pozwól, że odpowiemy na'"
      :title="'Najczęsciej zadawane pytania'"
    />
    <ul class="question-list">
      <li
        class="single-question"
        v-for="question in questions"
        @click="question.showContent = !question.showContent"
      >
        <div class="row-wrap">
          <div class="number">0{{ question.id + 1 }}.</div>
          <p class="question-title" :class="{ active: question.showContent }">
            {{ question.title }}
          </p>
        </div>
        <p class="answer" v-show="question.showContent">
          {{ question.content }}
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
    content:
      "Na koszt zamówienia wpływa wiele czynników. Między innymi metraż, rodzaj wzoru i priorytet produkcji.",
    showContent: false,
  },
  {
    id: 1,
    title: "Ile trwa finalizacja zamówienia?",
    content:
      "Finalizacja zamówienia od wyprodukowania po dostawę zależy od złożoności projektu i jego metrażu. Generalnie dziennie jesteśmy w stanie wyprodukować 100 m2 produktu.",
    showContent: false,
  },
  {
    id: 2,
    title: "Czy przed złożeniem finalnego zamówienia mogę liczyć na próbki?",
    content:
      "Tak, zdecydowanie. Zachęcamy do skontaktowania się w sprawie darmowych próbek.",
    showContent: false,
  },
  {
    id: 3,
    title: "Jak przygotować projekt?",
    content:
      "Wystarczy, że przedstawisz nam swoją wizję i doprecyzujemy szczegóły. Jeżeli jesteś biegły w programach CAD możesz wysłać nam plik DWG, który najlepiej żeby przygotowany był zgodnie z wytycznymi.",
    showContent: false,
  },
  {
    id: 4,
    title: "Czy jesteście zainteresowani stałą współpracą?",
    content:
      "Obecnie współpracujemy z kilkoma firmami na terenie Polski, ale nadal jesteśmy otwarci na propozycje.",
    showContent: false,
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
  flex-direction: column;
  font-size: 14px;

  &:nth-last-child(1) {
    border: none;
  }
}
.row-wrap {
  display: flex;
  flex-direction: row;
}
.question-title {
  cursor: pointer;
}
.number {
  margin-right: 24px;
  font-weight: bold;
  color: $baseColor;
}
.answer {
  padding: 24px 44px;
  max-width: 620px;
}
.active {
  font-weight: bold;
}
</style>
