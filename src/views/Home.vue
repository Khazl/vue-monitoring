<template>
  <Container layout="layout-1">
    <div class="module">
      <h2>Hello 1</h2>
      <ModuleChart design="line"></ModuleChart>
    </div>
    <div class="module">
      <h2>Hello 2</h2>
      <ModuleChart design="bar"></ModuleChart>
    </div>
    <div class="module">
      <h2>Hello 3</h2>
      <ModuleChart design="doughnut"></ModuleChart>
    </div>
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
import ModuleChart from '@/components/module/ModuleChart.vue';

export default {
  name: 'home',
  components: {
    Container,
    ModuleChart,
  },
};
</script>
