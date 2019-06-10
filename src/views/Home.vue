<template>
  <Container layout="layout-1">
    <Module headline="Hello 1" :design="chart"></Module>
    <Module headline="Hello 2" :design="chart"></Module>
    <Module headline="Hello 3" :design="chart"></Module>

    <div class="module">Hello</div>
    <div class="module">Hello</div>
    <div class="module">Hello</div>
    <div class="module">Hello</div>
    <div class="module">Hello</div>
    <div class="module">Hello</div>
  </Container>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import Module from '@/components/module/Module.vue';

const charts = [
  'bar',
  'horizontal-bar',
  'doughnut',
  'line',
  'pie',
  'polar-area',
  'radar',
  'bubble',
  'scatter',
];

export default {
  name: 'home',
  components: {
    Container,
    Module,
  },
  data() {
    return {
      chart: undefined,
    };
  },
  mounted() {
    this.getDesign();
  },
  methods: {
    getDesign() {
      this.chart = charts[Math.floor(Math.random() * charts.length)];
    },
  },
};
</script>
