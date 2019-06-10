<template>
  <div class="small">
    <component :is="design + '-chart'" :chart-data="data"></component>

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

const colors = [
  '#ffff00',
  '#00ffff',
  '#ff00ff',
  '#0000ff',
  '#00ff00',
  '#ff0000',
  '#ffffff',
  '#000000',
];

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
      data: undefined,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.data = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            data: [this.getRandomInt(), this.getRandomInt()],
          }, {
            label: 'Data One',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
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
