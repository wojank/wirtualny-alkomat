<template>
  <div class="form-controll">
    <p>Step 2</p>
    <form action="">
      <div class="alco-control">
        <label for="rodzaj-alkoholu" name="alkohol">Rodzaj alkoholu</label>
        <select
          name="alkohol"
          id="rodzaj-alkoholu"
          v-model="alcoType"
          @change="handleChange2"
        >
          <option value="">Wybierz alkohol</option>
          <option value="radler">Radler</option>
          <option value="piwojasne">Piwo Jasne</option>
          <option value="piwomocne">Piwo Mocne</option>
          <option value="cydr">Cydr</option>
          <option value="winoslodkie">Wino Słodkie</option>
          <option value="winopolwytrawne">Wino Półwytrawne</option>
          <option value="winowytrawne">Wino Wytrawne</option>
          <option value="likier">Likier</option>
          <option value="nalewki">Nalewki smakowe na bazie wódki</option>
          <option value="whiskybrandykoniak">Whisky, Brandy, Koniak</option>
          <option value="wodkagintequila">Wódka, Gin, Tequila</option>
          <option value="inny">Inny</option>
        </select>
      </div>
      <div class="alco-control">
        <label for="moc">Moc alkoholu (%)</label>
        <input
          type="number"
          id="moc"
          name="mocalkoholu"
          v-model="alcoPower"
          @input="handleChange2"
        />
      </div>
      <div class="alco-control">
        <label for="objetosc">Objętość porcji (ml)</label>
        <input
          type="number"
          id="objetosc"
          name="objetoscalkoholu"
          v-model="alcoVolume"
          @input="handleChange2"
        />
      </div>
      <div class="alco-control">
        <label for="ilosc">Ilośc porcji (ml)</label>
        <input
          type="number"
          id="ilosc"
          name="iloscporcjialkoholu"
          v-model="alcoAmount"
          @input="handleChange2"
        />
      </div>
    </form>
    <p>{{ alcoType }}</p>
    <p>{{ alcoPower }}</p>
    <p>{{ alcoVolume }}</p>
    <p>{{ alcoAmount }}</p>
    <!-- <h1>{{ a }}</h1> -->
  </div>
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
<style src="" lang="scss" scoped></style>
