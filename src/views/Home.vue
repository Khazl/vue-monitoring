<template>
  <Container layout="layout-1">
    <Module headline="Hello 1" chart="line"></Module>
    <Module headline="Hello 2" chart="bar"></Module>
    <Module headline="Hello 3"></Module>

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

export default {
  name: 'home',
  components: {
    Container,
    Module,
  },
};
</script>
