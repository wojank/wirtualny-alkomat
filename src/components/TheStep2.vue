<template>
  <!--<div class="form">-->
  <!--<div class="form__wrapper">-->
  <div class="title">
    <p class="form__title">wybierz rodzaj oraz ilość spożytego alkoholu</p>
  </div>
  <!--<form>-->
  <!--<div class="form-control">-->
  <!-- <span class="form-control__title">Alko</span> -->
  <div class="wrapper type">
    <label class="form-control__title" for="alkohol">Rodzaj alkoholu</label>
    <select
      class="form-control__input-select"
      id="rodzaj-alkoholu"
      name="alkohol"
      v-model="alcoType"
      @change="handleChange2"
    >
      <!--tutaj v-for dla option powinno poleciec-->
      <option class="form-control__select-option" value="">
        Wybierz alkohol
      </option>
      <option class="form-control__select-option" value="radler">Radler</option>
      <option class="form-control__select-option" value="piwojasne">
        Piwo Jasne
      </option>
      <option class="form-control__select-option" value="piwomocne">
        Piwo Mocne
      </option>
      <option class="form-control__select-option" value="cydr">Cydr</option>
      <option class="form-control__select-option" value="winoslodkie">
        Wino Słodkie
      </option>
      <option class="form-control__select-option" value="winopolwytrawne">
        Wino Półwytrawne
      </option>
      <option class="form-control__select-option" value="winowytrawne">
        Wino Wytrawne
      </option>
      <option class="form-control__select-option" value="likier">Likier</option>
      <option class="form-control__select-option" value="nalewki">
        Nalewki smakowe na bazie wódki
      </option>
      <option class="form-control__select-option" value="whiskybrandykoniak">
        Whisky, Brandy, Koniak
      </option>
      <option class="form-control__select-option" value="wodkagintequila">
        Wódka, Gin, Tequila
      </option>
      <option class="form-control__select-option" value="inny">Inny</option>
    </select>
  </div>
  <!--</div>-->
  <div class="form-control power">
    <label class="form-control__title" for="moc">Moc alkoholu (%)</label>
    <input
      class="form-control__input-number"
      id="moc"
      type="number"
      name="mocalkoholu"
      v-model="alcoPower"
      @input="handleChange2"
    />
  </div>
  <div class="form-control volume">
    <label class="form-control__title" for="objetosc"
      >Objętość porcji (ml)</label
    >
    <input
      class="form-control__input-number"
      id="objetosc"
      type="number"
      name="objetoscalkoholu"
      v-model="alcoVolume"
      @input="handleChange2"
    />
  </div>
  <div class="form-control amount">
    <label class="form-control__title" for="ilosc">Ilośc porcji (ml)</label>
    <input
      class="form-control__input-number"
      id="ilosc"
      type="number"
      name="iloscporcjialkoholu"
      v-model="alcoAmount"
      @input="handleChange2"
    />
  </div>
  <!--</form>-->
  <!--</div>-->
  <!--</div>-->
</template>
<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["action2"]);
const handleChange2 = () => {
  emit(
    "action2",
    alcoType.value,
    alcoPower.value,
    alcoVolume.value,
    alcoAmount.value
  );
};
let alcoType = ref("");
let alcoPower = ref(0);
let alcoVolume = ref(0);
let alcoAmount = ref(0);
//let a = ref(alcoVolume.value + alcoAmount.value);
// const a = computed(() => {
//   return alcoVolume.value * alcoAmount.value;
// });
</script>
<style src="../styles/components/_the-step2.scss" lang="scss" scoped></style>
