<template>
  <!--<div class="form">-->
  <!--<div class="form__wrapper">-->
  <div class="title">
    <p class="form__title">Twoje Wyniki</p>
  </div>
  <!--<div class="form-control">-->
  <div class="wrapper limit">
    <p class="form-control__title">Orientacyjna ilość promili w organiźnie:</p>
    <div class="form-control__input-number">
      <p class="form-control__option">{{ props.promileResult }}</p>
    </div>
  </div>
  <!--<div class="form-control__helper">-->
  <div class="wrapper pure">
    <p class="form-control__title">ilość czystego alkoholu:</p>
    <div class="form-control__input-number">
      <p class="form-control__option">{{ props.gramyResult }}</p>
    </div>
  </div>
  <div class="wrapper portion">
    <p class="form-control__title">ilosć porcji standardowych:</p>
    <div class="form-control__input-number">
      <p class="form-control__option">{{ props.standardResult }}</p>
    </div>
  </div>
  <!--</div>-->

  <div class="wrapper time">
    <p class="form-control__title">Szacunkowy czas trzeźwienia:</p>
    <div class="form-control__input-number">
      <p class="form-control__option">{{ fixedSoberTimeResult }}</p>
    </div>
  </div>
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps([
  "promileResult",
  "gramyResult",
  "standardResult",
  "soberTimeResult",
]);

const fixedSoberTimeResult = computed(() => {
  const wynik = props.soberTimeResult.toString().split(".");
  return `${wynik[0]} godzin ${wynik[1]} minut`;
});
</script>
<style src="../styles/components/_the-step3.scss" lang="scss" scoped></style>
