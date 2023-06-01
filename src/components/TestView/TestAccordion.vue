<template>
  <div class="form__wrapper accordion" ref="accordion">
    <h2 class="faq__header">To jest testowy accordion</h2>
    <p class="faq__paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      odio ad harum tempora? Sit corrupti explicabo, delectus dolorem ea in
      sequi suscipit iusto esse cupiditate ducimus aut dolor et amet! Nihil
      aperiam laboriosam repudiandae maxime labore doloribus autem!
    </p>
    <p>{{ isVisible }}</p>
    <TestAccordionItem
      v-for="(item, index) in faqData"
      :key="index"
      :item="item"
      :index="index"
      :isVisible="isVisible"
      @open="kolbek"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import faqData from "../../assets/test-data.js";
import TestAccordionItem from "./TestAccordionItem.vue";

//tu ląduje index tego elementu, który został kliknięty
//w ifie childa jest: jeśli ta zmienna ma wartość elementu, który został kliknięty,
//to niech się on pokaże, jeśli jest inna wartość, to pokaże się inny :)
const isVisible = ref(0);

const kolbek = (index) => {
  isVisible.value === index + 1
    ? (isVisible.value = 0)
    : (isVisible.value = index + 1);
  //działa, hihi
};
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion.scss"
  lang="scss"
  scoped
></style>
