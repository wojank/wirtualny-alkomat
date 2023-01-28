<template>
  <form>
    <div
      v-for="(step, index) in props.steps"
      :key="index"
      :id="'step-' + (index + 1)"
      v-show="activeStepIndex === index"
    >
      <slot :name="'step-' + (index + 1)" />
    </div>
  </form>
  <button :disabled="activeStepIndex === 0" @click="previousStepIndex">
    Previous
  </button>
  <button :disabled="activeStepIndex === 2" @click="nextStepIndex">Next</button>
</template>
<script setup>
import { ref, defineProps } from "vue";
/* stan MainKalkulator */
let activeStepIndex = ref(0);
const props = defineProps({
  steps: [],
});
const nextStepIndex = () => {
  if (activeStepIndex.value < 2) {
    activeStepIndex.value++;
    console.log(activeStepIndex.value);
  }
  /* if activeStepIndex.value = 2 enable disabled atrr */
};
const previousStepIndex = () => {
  if (activeStepIndex.value > 0) {
    activeStepIndex.value--;
    console.log(activeStepIndex.value);
  }
  /* if activeStepIndex.value = 0 enable disabled atrr */
};
/* stan Komponentów */
</script>
<style src="" lang="scss" scoped></style>
