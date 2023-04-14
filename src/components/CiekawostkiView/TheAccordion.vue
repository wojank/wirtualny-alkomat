<template>
  <div class="form">
    <!--możliwe, że i te dwa style form i wrapper będą musiały gdzieś trafić-->
    <div class="form__wrapper">
      <!--<div v-for="(item, index) in faqData" :key="index">
        <TheAccordionItem :item="item" :index="index" />
      </div>-->
      <TheAccordionItem
        v-for="(item, index) in faqData"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </div>
</template>
<script setup>
import faqData from "../../assets/faq-data.js";
import TheAccordionItem from "./TheAccordionItem.vue";
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion.scss"
  lang="scss"
  scoped
></style>
