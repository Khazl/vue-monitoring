<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'module-headline',
};
</script>

<style scoped lang="scss">
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 200;
    opacity: .5;
  }
</style>
