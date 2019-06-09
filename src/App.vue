<template>
  <div id="app">
    <Title :title="$route.meta.title"></Title>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue';
import Title from '@/components/layout/Title.vue';

export default {
  components: {
    Navigation,
    Title,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: rgb(233, 233, 233);
    background: $defaultBackgroundColor;
  }

  #app {
    position: relative;
  }
</style>
