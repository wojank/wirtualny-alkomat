<template>
  <div class="form-controll">
    <p>Step 2</p>
    <label for="rodzaj-alkoholu" name="alkohol">Rodzaj alkoholu</label>
    <select name="alkohol" id="rodzaj-alkoholu">
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
      <label for="moc">Moc alkoholu (%)</label>
      <input type="number" id="moc" name="mocalkoholu" />
      <label for="objetosc">Objętość porcji (ml)</label>
      <input type="number" id="objetosc" name="objetoscalkoholu" />
      <label for="ilosc">Ilośc porcji (ml)</label>
      <input type="number" id="ilosc" value="1" name="iloscporcjialkoholu" />
    </select>
  </div>
</template>
<script setup></script>
<style src="" lang="scss" scoped></style>
