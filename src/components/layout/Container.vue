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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;

    &--layout-1 {
      
      .module {

        &:first-of-type {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
        }
      }
    }

    &--layout-2 {
      //layout setting here
    }
  }

    .module {
      background: darken($defaultBackgroundColor, 2%);
      border-radius: 5px;
      border: 1px solid darken($defaultBackgroundColor, 5%);
      padding: 1rem;
  }
</style>
