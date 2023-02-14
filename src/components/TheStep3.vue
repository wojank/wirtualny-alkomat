<template>
  <h1>Twój wynik:</h1>
  <h2>Orientacyjna ilość promili w organiźnie: {{ props.promileResult }}</h2>
  <p>ilość czystego alkoholu: {{ gramyResult }}</p>
  <p>ilosć porcji standardowych: {{ standardResult }}</p>
  <h3>Szacunkowy czas trzeźwienia: {{ fixedSoberTimeResult }}</h3>
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
<style src="" lang="scss" scoped></style>
