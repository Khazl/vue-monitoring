<template>
  <div class="small">

    <bar-chart v-if="design === 'bar'" :chart-data="datacollection"></bar-chart>
    <horizontal-bar-chart v-if="design === 'barHor'" :chart-data="datacollection">
    </horizontal-bar-chart>
    <doughnut-chart v-if="design === 'doughnut'" :chart-data="datacollection"></doughnut-chart>
    <line-chart v-if="design === 'line'" :chart-data="datacollection"></line-chart>
    <pie-chart v-if="design === 'pie'" :chart-data="datacollection"></pie-chart>
    <polar-area-chart v-if="design === 'polar-area'" :chart-data="datacollection">
    </polar-area-chart>
    <radar-chart v-if="design === 'radar'" :chart-data="datacollection"></radar-chart>
    <bubble-chart v-if="design === 'bubble'" :chart-data="datacollection"></bubble-chart>
    <scatter-chart v-if="design === 'scatter'" :chart-data="datacollection"></scatter-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import BarChart from '@/components/module/charts/BarChart.vue';
import HorizontalBarChart from '@/components/module/charts/HorizontalBarChart.vue';
import DoughnutChart from '@/components/module/charts/DoughnutChart.vue';
import LineChart from '@/components/module/charts/LineChart.vue';
import PieChart from '@/components/module/charts/PieChart.vue';
import PolarAreaChart from '@/components/module/charts/PolarAreaChart.vue';
import RadarChart from '@/components/module/charts/RadarChart.vue';
import BubbleChart from '@/components/module/charts/BubbleChart.vue';
import ScatterChart from '@/components/module/charts/ScatterChart.vue';

export default {
  name: 'module-chart',
  components: {
    BarChart,
    HorizontalBarChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    BubbleChart,
    ScatterChart,
  },
  props: {
    design: {
      type: String,
    },
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#ffff00',
            data: [this.getRandomInt(), this.getRandomInt()],
          }, {
            label: 'Data One',
            backgroundColor: '#00ffff',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
