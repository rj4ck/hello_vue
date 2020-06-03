<template>
  <section class="section bg-light" id="testimonials">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-4">
            <h3>¿Qué dicen nuestros clientes?</h3>
          </div>
        </div>
      </div>

      <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5" data-width=""></div>

      <div
          class="fb-post"
          data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
          data-width="500"></div>

      <!-- end row -->
      <div class="row">
        <div class="col-lg-4">
          <div class="testi-box mt-4">
            <div class="testi-desc bg-white p-4">
              <p class="text-muted mb-0">" Excellent support for a tricky issue related to our customization of the template. Author kept us updated as he made progress on the issue and emailed us a patch when he was done. "</p>
            </div>
            <div class="p-4">
              <div class="testi-img float-left mr-2">
                <img src="images/testi/img-2.png" alt="" class="rounded-circle">
              </div>
              <div>
                <h5 class="mb-0">Michael Morrell</h5>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-lg-4">
          <div class="testi-box mt-4">
            <div class="testi-desc bg-white p-4">
              <p class="text-muted mb-0">" Flexible, Everything is in, Suuuuuper light, even for the code is much easier to cut and make it a theme for a productive app. "</p>
            </div>
            <div class="p-4">
              <div class="testi-img float-left mr-2">
                <img src="images/testi/img-1.png" alt="" class="rounded-circle">
              </div>
              <div>
                <h5 class="mb-0">John Seidel</h5>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-lg-4">
          <div class="testi-box mt-4">
            <div class="testi-desc bg-white p-4">
              <p class="text-muted mb-0">" Not only the code, design and support are awesome, but they also update it constantly the template with new content, new plugins. I will buy surely another coderthemes template! "</p>
            </div>
            <div class="p-4">
              <div class="testi-img float-left mr-2">
                <img src="images/testi/img-3.png" alt="" class="rounded-circle">
              </div>
              <div>
                <h5 class="mb-0">Robert Taylor</h5>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </section>
</template>

<script>
export default {
  name: 'Testimonial'
}
</script>

<style scoped>

</style>
