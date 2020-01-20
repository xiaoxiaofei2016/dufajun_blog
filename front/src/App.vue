<template>
  <div id="app">
    <Nav v-if="isShowNav"/>
    <div class="layout">
      <router-view/>
      <Slider v-if="isShowNav" class="slider"/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Slider from '@/components/Slider.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Slider
  },
  data () {
    return {
      isShowNav: false
    }
  },
  watch: {
    $route (val, oldVal) {
      if (val.path === '/' || val.path === '/publishArticle') {
        this.isShowNav = false
      } else {
        this.isShowNav = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
