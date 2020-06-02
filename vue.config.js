module.exports = {
  publicPath: '/hello_vue/dist',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/app.scss";'
      }
    }
  }
}
