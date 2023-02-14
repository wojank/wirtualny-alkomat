<template>
  <MainKalkulator :steps="steps">
    <template #step-1>
      <TheStep1 @action="handleAction1" />
    </template>
    <template #step-2>
      <TheStep2 @action2="handleAction2" />
    </template>
    <template #step-3>
      <TheStep3
        :promile-result="promileResult"
        :gramy-result="gramyResult"
        :standard-result="standardResult"
        :sober-time-result="soberTimeResult"
      />
    </template>
  </MainKalkulator>
  <button @click="alcoholCounter">Hej to ja</button>
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

let promileResult = ref("");
let gramyResult = ref("");
let standardResult = ref("");
let soberTimeResult = ref("");

let dataSex = ref("");
let dataWeight = ref(0);

const handleAction1 = (x, y) => {
  dataSex.value = y;
  dataWeight.value = x;
};

let dataType = ref("");
let dataPower = ref(0);
let dataVolume = ref(0);
let dataAmount = ref(0);

const handleAction2 = (w, x, y, z) => {
  dataType.value = w;
  dataPower.value = x;
  dataVolume.value = y;
  dataAmount.value = z;
};

const alcoholCounter = () => {
  const ml = dataVolume.value * dataAmount.value;
  const A = ml * (dataPower.value / 100) * 0.8;
  const K = dataSex.value == "mężczyzna" ? 0.7 : 0.6;
  const W = dataWeight.value;
  const result = A / (K * W);
  const S = dataSex.value == "mężczyzna" ? 11 : 9;
  soberTimeResult.value = (A / S).toFixed(2);
  standardResult.value = A / 10;
  gramyResult.value = A;
  promileResult.value = result.toFixed(2);
  return result;
};

// P = A / (K * W)
// P - zawartość alkoholu w promilach
// A - całkowita ilość wypitego alkoholu w gramach
// K - współczynnik (kobiety : 0,6)(mężczyźni: 0,7)
// W - masa ciała w kg
//  A = ml * (%/100) * 0,8

//mezczyzna pali 10-12g/h , kobieta 8-10g/h czyli m=11g k=9g

//potem będzie przynajmniej jeszcze jedna funkcja obliczająca jak długo będziemy trzeźwieć
//i prawdopodobnie kolejny step z danymi, które według mojego uzania zmodyfikują współczynnik K jak np stan zoladka i dlugosc picia
//wyniki też być może rozszerzyć tak jak są w pijodpowiedzialnie.pl czyli alko w g i w ml i promilach i szacunkowy czas trzezwienia i porcje standardowe
//routing - nazwy np pijodpowiedzialnie.pl/kalkulator/
</script>
