<template>
    <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'DlineEChart',
  props: {
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
      lineData: []
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
    randomData () {
      var data = []
      var now = new Date(1997, 9, 3)
      var oneDay = 24 * 3600 * 1000
      for (var ii = 0; ii < 1000; ii++) {
        var value = Math.random() * 1000
        now = new Date(+now + oneDay)
        value = value + Math.random() * 21 - 10
        let dataTmp = {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        }
        data.push(dataTmp)
      }
      return data
    },
    initData () {
      let tmpData = this.randomData()
      tmpData.forEach((detail) => {
        this.lineData.push(detail)
      })
      const option = {
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
          data: this.lineData
        }]
      }
      this.myChart.setOption(option)
      setInterval(() => {
        this.lineData.shift()
        this.myChart.setOption({
          series: [{
            data: this.lineData
          }]
        })
      }, 1000)
    }
  }
}
</script>

<style lang="sass">

</style>
