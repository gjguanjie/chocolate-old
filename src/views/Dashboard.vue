<template>
  <div class="container">
    <nav-bar></nav-bar>
    <head-bar></head-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from '@/views/layout/NavBar.vue'
import MainContent from '@/views/layout/MainContent.vue'
import HeadBar from '@/views/layout/HeadBar.vue'
export default {
  name: 'home',
  components: {
    NavBar,
    MainContent,
    HeadBar
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
