<template>
    <div>
      <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal"
        @select="handleSelect"  background-color="#304156" text-color="#BFCBD9" active-text-color="#ffd04b" router>
        <el-menu-item index="/home"><svg-icon icon-class="user"/>处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><svg-icon icon-class="home"/>我的工作台</template>
          <el-menu-item index="/home/table1" >用户列表</el-menu-item>
          <el-menu-item index="/home/table2">用户分布</el-menu-item>
          <el-menu-item index="/home/echart1">图表分布</el-menu-item>
          <el-menu-item index="/home/echart2">直线分布</el-menu-item>
          <el-menu-item index="/home/dlineChart">动态线图</el-menu-item>
          <el-submenu index="2-3">
            <template slot="title">订单列表</template>
            <el-menu-item index="/home/form1">表单格式</el-menu-item>
            <el-menu-item index="/home/about">关于商品</el-menu-item>
            <el-menu-item index="/home/mixChart">柱图分布</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><svg-icon icon-class="message"/>消息中心</template>
          <el-menu-item index="/home/table3">对话列表</el-menu-item>
          <el-menu-item index="/home/table4">走马灯</el-menu-item>
        </el-submenu>
        <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">百度</a></el-menu-item>
        <el-submenu index="5" class="pull-right">
          <template slot="title"><svg-icon icon-class="user"/></template>
          <el-menu-item index="#/home" >首页</el-menu-item>
          <el-menu-item index="#" @click="logout">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      color1: '#409EFF'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log('进入：' + key)
    },
    logout () {
      sessionStorage.clear()
      this.$router.push('/')
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-container {
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    z-index: 1020;
    .el-menu {
      position:absolute;
      top: 60px;
      bottom: 0px;
      text-align: left;
    }
  }

</style>
