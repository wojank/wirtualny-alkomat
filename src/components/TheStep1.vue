<template>
  <!--<div class="form">-->
  <!--<div class="form__wrapper">-->
  <!--wydaje mi się, że ten form i form__wrapper są niepotrzebne w chuj-->
  <div class="title">
    <p class="form__title">podaj płeć oraz wagę</p>
  </div>
  <!--<form>-->
  <!--<div class="form-control form-control--gender">-->
  <!--<span class="form-control__title">Płeć</span>-->
  <div class="men">
    <input
      class="form-control__input-radio"
      id="mężczyzna"
      type="radio"
      value="mężczyzna"
      name="gender"
      v-model="genderData"
      @change="handleChange"
    />
    <label class="form-control__option" for="mężczyzna">mężczyzna</label>
  </div>
  <div class="wrapper women">
    <input
      class="form-control__input-radio"
      id="kobieta"
      type="radio"
      value="kobieta"
      name="gender"
      v-model="genderData"
      @change="handleChange"
    />
    <label class="form-control__option" for="kobieta">kobieta</label>
  </div>
  <!--</div>-->
  <div class="form-control form-control--weight weight">
    <label class="form-control__title" for="waga">Waga</label>
    <input
      class="form-control__input-number"
      id="waga"
      type="number"
      name="waga"
      v-model="weight"
      @input="handleChange"
    />
  </div>

  <div class="form-control form-control--weight age">
    <label class="form-control__title" for="waga">Wiek</label>
    <input
      class="form-control__input-number"
      id="waga"
      type="number"
      name="waga"
    />
  </div>
  <!--</form>-->
  <!--</div>-->
  <!--</div>-->
</template>
<script setup>
import { ref, defineEmits } from "vue";

let genderData = ref("");
let weight = ref(69);

const emit = defineEmits(["action"]);
const handleChange = () => {
  emit("action", weight.value, genderData.value);
};
</script>
<style src="../styles/components/_the-step1.scss" lang="scss" scoped></style>
