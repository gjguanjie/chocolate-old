<template>
  <div class="chart-container">
    <line-chart id='dlineChart' :data="tableData" height='100%' width='100%'/>
  </div>
</template>

<script>
import LineChart from '@/components/Charts/DlineChart'

export default {
  components: { LineChart },
  data () {
    return {
      tableData: [],
      dataTime: null
    }
  },
  created () {
    this.randomData()
    setInterval(() => {
      this.otherData()
    }, 1000)
  },
  methods: {
    randomData () {
      var now = new Date(1997, 9, 3)
      var oneDay = 24 * 3600 * 1000
      for (var ii = 0; ii < 1000; ii++) {
        var value = Math.random() * 1000
        now = new Date(+now + oneDay)
        this.dataTime = now
        value = value + Math.random() * 21 - 10
        let dataTmp = {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        }
        this.tableData.push(dataTmp)
      }
    },
    otherData () {
      this.tableData.shift()
      var now = this.dataTime
      var oneDay = 24 * 3600 * 1000
      now = new Date(+now + oneDay)
      var value = Math.random() * 1000 + Math.random() * 21 - 10
      let dataTmp = {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      }
      this.tableData.push(dataTmp)
    }
  }
}
</script>

<style scoped>
  .chart-container{
    position: relative;
    width: 100%;
    height:85vh;
  }
</style>
