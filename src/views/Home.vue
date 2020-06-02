<template>
  <div class="home">
    <Header />
    <Products />

    <Comments />

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="485319678157760"
         theme_color="#e68585">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Products from './Products.vue'
import Comments from './Comments.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Products,
    Comments,
    HelloWorld
  },
  mounted () {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v7.0'
      })
    }
  },
  created () {
    //this.$store.dispatch("FB_Parse")
  }
}
</script>
