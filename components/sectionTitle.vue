<template>
  <div class="section-title">
    <p v-if="subTitle" class="sub-title">{{ subTitle }}</p>
    <p class="title">{{ title }}</p>
    <p v-if="content" class="content">{{ content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  subTitle: String,
  title: String,
  content: String,
});
</script>

<style scoped lang="scss">
.section-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.sub-title {
  font-size: 12px;
  color: $contentColor;
  position: relative;
  margin-left: 40px;
  font-weight: 300;
  &::before {
    content: "";
    position: absolute;
    left: -24px;
    top: 50%;
    transform: translate(-50%, 0);
    width: 24px;
    height: 1px;
    background: $contentColor;
  }
}
.title {
  font-size: 32px;
  color: $baseColor;
  letter-spacing: -2px;
  line-height: 40px;
  font-weight: bold;
  margin: 16px 0;
}
.content {
  color: $contentColor;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
}

@media (min-width: 744px) {
  .title {
    width: 460px;
  }
  .content {
    width: 460px;
  }
}

@media (min-width: 1440px) {
  .title {
    font-size: 56px;
    line-height: 60px;
    width: 520px;
  }
}
</style>
