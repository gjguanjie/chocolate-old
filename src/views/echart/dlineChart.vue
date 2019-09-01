<template>
  <div class="chart-container">
    <line-chart id='dlineChart' height='100%' width='100%'/>
  </div>
</template>

<script>
import LineChart from '@/components/Charts/DlineChart'

export default {
  components: { LineChart }
}
</script>

<style scoped>
  .chart-container{
    position: relative;
    width: 100%;
    height:85vh;
  }
</style>
