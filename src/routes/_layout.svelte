<script>
  import Headroom from "svelte-headroom";

  import Banner from "../components/banner.svelte";
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<style lang="scss" global>
  @import "../styles/theme.scss";
  header {
    position: fixed;
    width: 100%;
  }
  main {
    // position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
		box-sizing: border-box;

		section {
			min-height: 60vh;
			padding-top: 150px; // corrects for floating header
  	}
  }
</style>

<Headroom tolerance={10}>
  <Banner />
  <header>
    <Nav {segment} />
  </header>
</Headroom>
<main>
  <slot />
</main>
