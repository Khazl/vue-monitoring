<template>
    <div class="module">
        <h2>{{ headline }}</h2>
        <ModuleChart :design="hasDesign" :data="chartData"></ModuleChart>
        <slot name="content"></slot>
    </div>
</template>

<script>
import ModuleChart from '@/components/module/ModuleChart.vue';

const charts = [
  'bar',
  'horizontal-bar',
  'doughnut',
  'line',
  'pie',
  'polar-area',
  // 'radar',
  // 'bubble',
  // 'scatter',
];

export default {
  name: 'module',
  props: {
    headline: String,
    chartDesign: {
      type: String,
      validator: val => ['bar', 'horizontal-bar', 'doughnut', 'line', 'pie', 'polar-area', 'radar', 'bubble', 'scatter'].includes(val),
      default: undefined,
    },
  },
  components: {
    ModuleChart,
  },
  data() {
    return {
      hasDesign: typeof this.chartDesign === 'undefined' ? this.randDesign : this.chartDesign,
      chartData: '',
    };
  },
  computed: {
    randDesign() {
      return charts[Math.floor(Math.random() * charts.length)];
    },
  },
  created() {
    if (typeof this.chartDesign === 'undefined') {
      this.hasDesign = this.randDesign;
    }
  },
};
</script>

<style lang="scss">

</style>
