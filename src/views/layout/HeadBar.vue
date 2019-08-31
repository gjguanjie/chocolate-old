<template>
  <div style="margin-top: 5px;margin-bottom: 15px">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'HeadBar'
}
</script>

<style scoped lang="scss">
  .headerbar {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1030;
    height: 75px;
    border-color: #EBEEF5;
    border-left-width: 1px;
    border-left-style: solid;
  }
  .navbar {
    float: left;
  }

</style>
