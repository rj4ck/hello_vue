<template>
  <div class="home">
    <Header />
    <Products />

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Products from './Products.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Products,
    HelloWorld
  }
}
</script>
