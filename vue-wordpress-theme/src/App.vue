<template>
  <div id="app">
    <div class="container main-content">
      <wpheader></wpheader>
      <div id="content">
        <router-view></router-view>
      </div>
      <wpfooter></wpfooter>
    </div>
  </div>
</template>

<script>
import wpheader from './components/global/Header.vue'
import wpfooter from './components/global/Footer.vue'

export default {
  name: 'app',

  components: {
    wpheader,
    wpfooter
  }
}
</script>

<style src="./sass/global.scss" lang="scss"></style>
