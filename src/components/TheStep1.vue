<template>
  <div class="form-controll">
    <p>step 1</p>
    <form action="">
      <fieldset id="gender">
        <legend>Płeć</legend>
        <div class="gender-control">
          <input
            type="radio"
            id="mężczyzna"
            value="mężczyzna"
            name="gender"
            v-model="genderData"
            @change="handleChange"
          />
          <label for="mężczyzna">mężczyzna</label>
        </div>
        <div class="gender-control">
          <input
            type="radio"
            id="kobieta"
            value="kobieta"
            name="gender"
            v-model="genderData"
          />
          <label for="kobieta">kobieta</label>
        </div>
      </fieldset>
      <div class="weight-control">
        <label for="waga">Waga</label>
        <input type="number" id="waga" name="waga" v-model="weight" />
      </div>
    </form>
    <p>{{ genderData }}</p>
    <p>{{ weight }}</p>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
let genderData = ref("");
let weight = ref(69);
const emit = defineEmits(["action"]);
const handleChange = () => {
  emit("action", weight.value);
};
</script>
<style src="" lang="scss" scoped></style>
