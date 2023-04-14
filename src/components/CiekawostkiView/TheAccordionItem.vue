<template>
  <div
    class="form__el form__el--question"
    :class="{ active: isVisible }"
    @click="showAnswer(props.index)"
  >
    <div class="form__el-item form__el-item--text">
      <h2>{{ props.item.question }}</h2>
      <Transition>
        <p
          v-if="isVisible === index + 1"
          class="form__el--answer"
          ref="paragraf"
        >
          {{ props.item.answer }}
        </p>
      </Transition>
    </div>
    <div class="form__el-item form__el-item--icon">
      <span class="form__el-item__icon"></span>
    </div>
  </div>
  <!--dodałem po wrapperze i cała animacja się zjebała, trzeba popracować nad tym, by X był w question a nie obok -->
</template>
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["item", "index"]);

const isVisible = ref(null);
//pozostaje wymyślić styl, i class/style binding i ten plusik zrobić
//is isVisible funckja zwiększająca wysokość diva
//https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs
//zrobie funkcje która doda klasę i jej zawartość(to chyba niemożliwe) i chuj;
const showAnswer = (index) => {
  !isVisible.value ? (isVisible.value = index + 1) : (isVisible.value = null);
  console.log(isVisible, "działa");
};
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion-item.scss"
  lang="scss"
  scoped
></style>
