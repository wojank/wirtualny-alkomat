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
</template>
<script setup>
import { ref, defineProps } from "vue";
const activeStepIndex = ref(0);
const props = defineProps({
  steps: [],
});
</script>
<style src="" lang="scss" scoped></style>
