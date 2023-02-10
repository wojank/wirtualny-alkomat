<template>
  <MainKalkulator :steps="steps">
    <template #step-1>
      <TheStep1 @action="handleAction1" />
    </template>
    <template #step-2>
      <TheStep2 @action2="handleAction2" />
    </template>
    <template #step-3>
      <TheStep3 />
    </template>
  </MainKalkulator>
  <button @click="alcoholCounter">Hej to ja</button>
  <h1>{{ ml }}</h1>
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
//najpierw stan dla każdego z osobna, potem sprawdzę czy można to zrobić w ramach jednego obiektu
let dataSex = ref("");
let dataWeight = ref(0);
const handleAction1 = (x, y) => {
  dataSex.value = y;
  dataWeight.value = x;
  console.log("(HomeView) payload z (Step1) : ", x, y);
  console.log("(HomeView) stan1 : ", dataSex, dataWeight);
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
  console.log("(HomeView) payload z (Step2) : ", w, x, y, z);
  console.log(
    "(HomeView) stan2 : ",
    dataType,
    dataPower,
    dataVolume,
    dataAmount
  );
};
// P = A / (K * W)
// P - zawartość alkoholu
// A - całkowita ilość wypitego alkoholu w gramach
// K - współczynnik (kobiety : 0,6)(mężczyźni: 0,7)
// W - masa ciała w kg
//  A = ml * (%/100) * 0,8
// let ml = computed(() => {
//   return dataVolume.value * dataAmount.value;
// });
// let alcoholCounter = () => {
//   console.log(dataVolume, dataAmount, ml.value);
// };
const alcoholCounter = () => {
  const ml = dataVolume.value * dataAmount.value;
  console.log("(HomeView) Ilość ml", ml);
  const A = ml * (dataPower.value / 100) * 0.8;
  console.log("(HomeView) Zmienna A", A);
  const K = dataSex.value == "mężczyzna" ? 0.7 : 0.6;
  console.log("(HomeView) Płeć: ", dataSex.value);
  console.log("(HomeView) Zmienna K", K);
  const W = dataWeight.value;
  console.log("(HomeView) Zmienna W", W);
  const result = A / (K * W);
  console.log("(HomeView) Główny wynik", result);
  return result;
};
//potem będzie przynajmniej jeszcze jedna funkcja obliczająca jak długo będziemy trzeźwieć
//i prawdopodobnie kolejny step z danymi, które według mojego uzania zmodyfikują współczynnik K jak np stan zoladka i dlugosc picia
//wyniki też być może rozszerzyć tak jak są w pijodpowiedzialnie.pl czyli alko w g i w ml i promilach i szacunkowy czas trzezwienia i porcje standardowe
//routing - nazwy np pijodpowiedzialnie.pl/kalkulator/
</script>
