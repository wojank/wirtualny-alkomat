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
        :class="{ rotate: isVisible === props.index + 1 }"
      ></div>
    </div>
    <Transition>
      <p v-if="props.isVisible === props.index + 1" class="form__el--answer">
        {{ props.item.answer }}
      </p>
    </Transition>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["item", "index", "isVisible"]);
const emit = defineEmits(["open"]);

const showAnswer = (index) => {
  emit("open", index);
  console.log("to jest z propsa", props.isVisible);
};

//jeszcze na chwilę, jak wrócę/ chciałbym sprawdzić czy te dane z propsów
//można inaczej uzyskać skoro zwykłym słowem index je uzyskałem

/* pokazuje nam odpowiedź */
// const isVisible = ref(null);
//czyli to musi wypierdalać do komponentu wyżej, i stamtąd zmieniamy wspólny stan
//i wtedy do v-ifa podajemy w propsie tą zmienną

// const showAnswer = (index) => {
//   !isVisible.value ? (isVisible.value = index + 1) : (isVisible.value = null);
//   console.log(isVisible.value);
// };
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion-item.scss"
  lang="scss"
  scoped
></style>
