<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary" sticky fixed="top">
      <b-navbar-brand href="#">TEST</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Inicio</b-nav-item>
          <b-nav-item href="#products">Productos</b-nav-item>
          <b-nav-item href="#aboutUs">Empresa</b-nav-item>
          <b-nav-item href="#reference">Referencia</b-nav-item>
          <b-nav-item href="#contactUs">Contactanos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>

    <div id="fb-root"></div>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
