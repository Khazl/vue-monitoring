<template>
  <div class="container" :class="'container--' + layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container',
  props: {
    layout: {
      type: String,
      validator: val => ['layout-1', 'layout-2'].includes(val),
    },
  },
};
</script>

<style lang="scss">
  .container {
    padding: 1rem;
    //grid setting here

    &--layout-1 {
      //layout setting here
    }

    &--layout-2 {
      //layout setting here
    }
  }
</style>
