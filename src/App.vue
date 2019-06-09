<template>
  <div id="app">
    <DashboardTitle :title="$route.meta.title"></DashboardTitle>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue';
import DashboardTitle from '@/components/layout/DashboardTitle.vue';

export default {
  components: {
    Navigation,
    DashboardTitle,
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
