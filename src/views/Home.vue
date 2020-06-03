<template>
  <div id="home">
    <Header />

    <Products />

    <About />

    <Testimonial />

    <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="485319678157760"
         theme_color="#e68585">
    </div>

    <Footer />

    <!-- Back to top -->
    <a href="#" class="back-to-top" id="back-to-top">
      <i class="mdi mdi-chevron-up"/>
    </a>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Products from './Products.vue'
import About from './About.vue'
import Testimonial from './Testimonial.vue'

export default {
  name: 'Home',
  components: {
    About,
    Header,
    Products,
    Testimonial,
    Footer
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
    // this.$store.dispatch("FB_Parse")
  }
}
</script>
