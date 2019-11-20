<script>
  export let segment;
</script>

<style lang="scss">
  @import "../styles/theme.scss";
  .navbar {
    border-bottom: 1px solid $gray-color-light;
    font-weight: 300;
    padding: 0 1em;
    justify-content: center;
    background-image: linear-gradient(white, white, rgba(255, 255, 255, 0.5));
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: $secondary-color;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav class="navbar">
  <a class:selected={segment === undefined} href=".">accueil</a>
  <!-- TODO: Casse-couilles -->
  <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
  <a class:selected={segment === 'contact'} href="contact">contact</a>
</nav>
