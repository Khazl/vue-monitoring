<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'dashboard-title',
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
  .title {
    font-size: 2rem;
    padding: .5rem 1rem .5rem 4rem;
    background: darken($defaultBackgroundColor, 2%);
    border-bottom: 1px solid darken($defaultBackgroundColor, 5%);
  }
</style>
