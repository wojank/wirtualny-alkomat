<template>
  <!--<div class="form">-->
  <!--możliwe, że i te dwa style form i wrapper będą musiały gdzieś trafić-->
  <div class="form__wrapper accordion" ref="accordion">
    <h2 class="faq__header">Najczęściej zadawane pytania</h2>
    <p class="faq__paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      odio ad harum tempora? Sit corrupti explicabo, delectus dolorem ea in
      sequi suscipit iusto esse cupiditate ducimus aut dolor et amet! Nihil
      aperiam laboriosam repudiandae maxime labore doloribus autem!
    </p>
    <TheAccordionItem
      v-for="(item, index) in faqData"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
  <!--</div> -->
</template>
<script setup>
// import { onUpdated, ref } from "vue";
import faqData from "../../assets/faq-data.js";
import TheAccordionItem from "./TheAccordionItem.vue";

// const accordion = ref(null);

// onUpdated(() => {
//   accordion.value.scrollTop = accordion.value.clientHeight;
//   console.log("Updatuje się");
// });
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion.scss"
  lang="scss"
  scoped
></style>
