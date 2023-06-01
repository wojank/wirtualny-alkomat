<template>
  <div
    class="form__el form__el--question"
    :class="{ active: isVisible }"
    @click="showAnswer(props.index)"
    ref="el"
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
import { ref, onUpdated, defineProps } from "vue";

const props = defineProps(["item", "index"]);

/* pokazuje nam odpowiedź */
const isVisible = ref(null);

const showAnswer = (index) => {
  !isVisible.value ? (isVisible.value = index + 1) : (isVisible.value = null);
};

/* skroluje nam do elementu */
const el = ref(null);

onUpdated(() => {
  // el.value.scrollTop = el.value.scrollHeight;
  //tu musielibysmy uzyskac refa do calego body czy cos i faktycznie watch i jak sie stan zmieni to mozna zrobic
  //to z tym scrolltop i zobaczyc co sie stanie albo cientHeight albo scrollHeight
  // el.value.scrollIntoView({ behavior: "smooth", block: "nearest" });
  //chujowy efekt, totalnie szarpie, trzeba spróbować z intersection observer
  // console.log(
  //   "scrollHeight:",
  //   el.value.scrollHeight,
  //   "clientHeight:",
  //   el.value.clientHeight
  // );
});
</script>
<style
  src="../../styles/components/ciekawostki-view/_the-accordion-item.scss"
  lang="scss"
  scoped
></style>
