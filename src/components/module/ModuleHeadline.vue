<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'module-headline',
};
</script>

<style lang="scss">
  h1 {
      color: #f00;
  }
</style>
