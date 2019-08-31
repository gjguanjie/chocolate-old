<template>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view  :key="key"></router-view>
      </keep-alive>
    </transition>
</template>

<script>
export default {
  name: 'MainContent',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
  .el-main {
    text-align: center;
    line-height: 160px;
  }
</style>
