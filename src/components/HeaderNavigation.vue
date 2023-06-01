<template>
  <header class="header">
    <!-- <div class="header__logo">
        <a href="#">
          <img src="" alt="" />
        </a>
      </div> -->
    <div>
      <p class="header__logo">LOGO MOHE</p>
    </div>

    <nav role="navigation" class="header__navigation">
      <ul class="header__navigation-list">
        <li class="header__navigation-element">
          <!--<a class="header__navigation-link" href="/about"
            ><span class="header__navigation-link-element">O projekcie</span></a
          >-->
          <RouterLink class="header__navigation-link-element" to="/about"
            >O projekcie</RouterLink
          >
        </li>
        <li class="header__navigation-element">
          <!-- <a class="header__navigation-link" href="/kalkulator"
            ><span class="header__navigation-link-element">Kalkulator</span></a
          >-->
          <RouterLink class="header__navigation-link-element" to="/kalkulator"
            >Kalkulator</RouterLink
          >
        </li>

        <li class="header__navigation-element">
          <RouterLink class="header__navigation-link-element" to="/ciekawostki"
            >Ciekawostki</RouterLink
          >
        </li>

        <li class="header__navigation-element">
          <RouterLink class="header__navigation-link-element" to="/test"
            >TestView</RouterLink
          >
        </li>
        <!-- to nie musi być żaden kurwa span, wystarczy zwykły a, a ten komponent jest przecież za kulisami zwykłym tagiem <a> -->
      </ul>
    </nav>
    <div class="header__top-header">
      <label for="toggle" class="switch">
        <input
          @click="toggleDarkmode"
          v-model="darkActive"
          id="toggle"
          type="checkbox"
          class="toggle"
        />
        <span class="slider"></span>
      </label>
    </div>
  </header>
</template>

<script>
import { useToggle } from "../composables/useToggle.js";
import { onMounted } from "vue";
export default {
  name: "HeaderNavigation",
  setup() {
    const { darkActive, toggleDarkmode, onStart } = useToggle();
    onMounted(() => {
      console.log("Odpala się nasza funkcja po raz pierwszy");
      onStart();
    });
    return { darkActive, toggleDarkmode, onStart };
  },
};
</script>

<style src="../styles/components/_header-navigation.scss" lang="scss"></style>
