<template>
  <div
    class="form__el form__el--question"
    :class="{ active: isVisible }"
    @click="showAnswer(props.index)"
  >
    <div class="flexb">
      <h2>{{ props.item.question }}</h2>
      <div
        class="form__el-item form__el-plus form__el-item--icon"
        :class="{ rotate: isVisible }"
      ></div>
    </div>
    <Transition>
      <p v-if="isVisible === index + 1" class="form__el--answer">
        {{ props.item.answer }}
      </p>
    </Transition>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["item", "index"]);

const isVisible = ref(null);

const showAnswer = (index) => {
  !isVisible.value ? (isVisible.value = index + 1) : (isVisible.value = null);
};
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion-item.scss"
  lang="scss"
  scoped
></style>
