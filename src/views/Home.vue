<template>
  <Container layout="layout-1">
    <Module class="first" headline="Hello 1" chartDesign="line" :chartData="chartData">
      <template  v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </template>
    </Module>
    <Module class="second" headline="Hello 2"></Module>
    <Module class="third" headline="Hello 3"></Module>
    <Module class="fourth" headline="Hello 4"></Module>

    <Module class="fifth" headline="Hello 5"></Module>
    <Module class="sixth" headline="Hello 6">
      <template  v-slot:content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </template>
    </Module>

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
  data() {
    return {
      chartData: '',
    };
  },
};
</script>
