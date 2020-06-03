<template>
  <div id="app">
    <b-navbar toggleable="lg" fixed="top" class="navbar fixed-top navbar-custom sticky sticky-dark">
      <b-container fluid>
        <b-navbar-brand href="#">TEST</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" v-b-scrollspy>
            <b-nav-item href="#home">Inicio</b-nav-item>
            <b-nav-item href="#products" class="active">Productos</b-nav-item>
            <b-nav-item href="#aboutUs">Empresas</b-nav-item>
            <b-nav-item href="#testimonials">Clientes</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>

  </div>
</template>

<script>
export default {
  created () {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      const scroll = window.scrollY > 50

      if (scroll) {
        document.getElementsByClassName('sticky')[0].classList.add('nav-sticky')
      } else {
        document.getElementsByClassName('sticky')[0].classList.remove('nav-sticky')
      }
    },
    onActivate(target) {
      console.log('Received event: "bv::scrollspy::activate" for target ', target)
    },
    scrollIntoView(evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null

      if (el) {
        this.$refs.content.scrollTop = el.offsetTop
      }
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
}

</style>
