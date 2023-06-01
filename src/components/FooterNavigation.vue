<template>
  <footer class="footer">
    <p class="footer__paragraph">Znajdź nas</p>
    <div class="footer__socials">
      <a href="https://www.instagram.com/">
        <font-awesome-icon
          class="footer__social"
          icon="fa-brands fa-twitter"
          size="2x"
        />
      </a>

      <font-awesome-icon
        class="footer__social"
        icon="fa-brands fa-instagram"
        size="2x"
      />
      <font-awesome-icon
        class="footer__social"
        icon="fa-brands fa-facebook-f"
        size="2x"
      />
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterNavigation",
};
</script>
<style
  src="../styles/components/_footer-navigation.scss"
  lang="scss"
  scoped
></style>
