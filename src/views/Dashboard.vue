<template>
  <div class="container">
    <nav-bar></nav-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from '@/views/layout/NavBar.vue'
import MainContent from '@/views/layout/MainContent.vue'
export default {
  name: 'home',
  components: {
    NavBar,
    MainContent
  }
}
</script>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style>
