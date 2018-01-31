<template>
  <div id="navbar">
    <header class="">
      <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
            src="./../../assets/logo-contaazul.png"
            alt="Conta Azul"
            width="112"
            height="28">
          </a>
            <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {

    };
  },
};
</script>

<style>

:root {
  --blue: #2687E9;
}

header {
  background-color: var(--blue);
  width: 100vw;
}
.navbar {
  background-color: var(--blue);
  margin-bottom: 30px;
}

</style>
