<template>
  <div class="step-container">
    <div class="step-container__form">
      <!-- każdy view ma inną zawartość, ale ramkę taką samą, więc może stworzę osobny komponent jak ViewContainer albo coś-->
      <TheAccordion />
    </div>
  </div>
</template>
<script setup>
import TheAccordion from "../components/CiekawostkiView/TheAccordion.vue";
</script>
<style src="../styles/components/_main-kalkulator.scss" lang="scss"></style>
