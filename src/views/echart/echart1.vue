<template>
  <div class="visitorpie">
    <div id="visitorpie" class="" style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

export default {
  mounted () {
    this.myChart = echarts.init(document.getElementById('visitorpie'))
    this.initData()
  },
  // props: ['pieData'],
  methods: {
    initData () {
      const option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.myChart.setOption(option)
    }
  },
  watch: {
    pieData: function () {
      this.initData()
    }
  }
}
</script>

<style lang="sass">

</style>
