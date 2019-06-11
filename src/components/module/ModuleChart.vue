<template>
  <div class="small">
    <component :is="design + '-chart'" :chart-data="datacollection"></component>

    <!--<button @click="fillData()">Randomize</button>-->
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
            backgroundColor: '#FCD116',
            data: [this.getRandomInt(), this.getRandomInt()],
          }, 
          {
            label: 'Data One',
            backgroundColor: '#DD473A',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: 'Data One',
            backgroundColor: '#4C73BE',
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
    margin-top: 1rem;
  }
</style>
