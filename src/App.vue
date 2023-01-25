<template>
  <div>
    <header-navigation />
    <router-view />
    <footer-navigation />
  </div>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import FooterNavigation from "./components/FooterNavigation.vue";
export default {
  name: "App",
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
};
</script>

<style src="./styles/main.scss" lang="scss"></style>
