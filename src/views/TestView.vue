<template>
  <div class="container">
    <div class="grid_aco">
      <!-- każdy view ma inną zawartość, ale ramkę taką samą, więc może stworzę osobny komponent jak ViewContainer albo coś-->
      <TestAccordion />
    </div>
  </div>
</template>
<script setup>
import TestAccordion from "../components/TestView/TestAccordion.vue";
</script>
<style
  src="../styles/components/ciekawostki-view/_faq-view.scss"
  lang="scss"
  scoped
></style>
