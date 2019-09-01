<template>
    <div :class="className" :data="data" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'DlineEChart',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data () {
    return {
      option: null
    }
  },
  mounted () {
    this.myChart = echarts.init(document.getElementById(this.id))
    this.initData()
  },
  beforeDestroy () {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  methods: {
    initData () {
      this.option = {
        backgroundColor: '#394056',
        title: {
          top: 20,
          text: '动态数据 + 时间坐标轴',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            var date = new Date(params.name)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
          },
          axisPointer: {
            animation: false,
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          top: 100,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          name: '时间',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '数量',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false,
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12

            }
          },
          data: this.data
        }]
      }
      this.myChart.setOption(this.option)
    }
  },
  watch: {
    data () {
      this.data = this.data
      console.log(this.data.length)
      this.myChart.setOption({
        series: [{
          data: this.data
        }]
      })
      // this.myChart.setOption(this.option)
    }
  }
}
</script>

<style lang="sass">

</style>
