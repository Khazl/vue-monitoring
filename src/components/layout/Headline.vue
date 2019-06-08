<template>
  <h1>
      <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'headline',
};
</script>

<style lang="scss">
h1 {
    color: #f00;
}
</style>
