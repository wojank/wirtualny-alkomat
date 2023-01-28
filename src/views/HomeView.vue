<template>
  <MainKalkulator :steps="steps">
    <template #step-1>
      <TheStep1 @action="handleAction" />
    </template>
    <template #step-2>
      <TheStep2 />
    </template>
    <template #step-3>
      <TheStep3 />
    </template>
  </MainKalkulator>
</template>

<script setup>
import MainKalkulator from "../components/MainKalkulator.vue";
import TheStep1 from "../components/TheStep1.vue";
import TheStep2 from "../components/TheStep2.vue";
import TheStep3 from "../components/TheStep3.vue";
import { ref } from "vue";

const steps = ref([
  { step_no: 1, step_valid: false },
  { step_no: 1, step_valid: false },
  { step_no: 1, step_valid: false },
]);
const handleAction = (x) => {
  console.log("Hej", x);
};
</script>
