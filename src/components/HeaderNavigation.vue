<template>
  <header class="header">
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
      <!-- <div class="header__logo">
        <a href="#">
          <img src="" alt="" />
        </a>
      </div> -->
      <ul class="header__social-icons">
        <li>
          <a href="" class="header__icon-element" title="fb" target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              /></svg
          ></a>
        </li>
        <li>
          <a href="" class="header__icon-element"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg
          ></a>
        </li>
        <li>
          <a href="" class="header__icon-element"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
              /></svg
          ></a>
        </li>
      </ul>
    </div>
    <nav role="navigation" class="header__navigation">
      <ul class="header__navigation-list">
        <li class="header__navigation-element">
          <a class="header__navigation-link" href="/about"
            ><span class="header__navigation-link-element">O projekcie</span></a
          >
        </li>
        <li class="header__navigation-element">
          <a class="header__navigation-link" href="/kalkulator"
            ><span class="header__navigation-link-element">Kalkulator</span></a
          >
        </li>

        <li class="header__navigation-element">
          <a class="header__navigation-link" href="/ciekawostki"
            ><span class="header__navigation-link-element">Faq</span></a
          >
        </li>
      </ul>
    </nav>
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
