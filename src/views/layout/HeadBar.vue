<template>
  <div class="headerbar">
    <div>aaaa</div>
    <span class="navbar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" text-color="#409EFF" active-text-color="#ffd04b" mode="horizontal">
        <el-menu-item index="1" @click="$router.push('/')">0000</el-menu-item>
        <el-menu-item index="2" @click="openWindow('https://gitee.com/liuge1988/kitty')">111</el-menu-item>
        <el-menu-item index="3" @click="openWindow('https://gitee.com/liuge1988/kitty/wikis/Home')">222</el-menu-item>
        <el-menu-item index="4" @click="openWindow('https://www.cnblogs.com/xifengxiaoma/')">3333</el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HeadBar',
  data () {
    return {
      activeIndex: '1'
    }
  }
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
