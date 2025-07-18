<template>
  <div class='default-layout'>
    <navbar />
    <slot />
  </div>
</template>

<script setup lang='ts'>
import navbar from '~/components/navbar.vue'
</script>

<style lang='scss' scoped>
  .default-layout{
    max-width: 100%;
    height: 100vh;
    background-color: $dark-background;
    color: $dark-text-primary;
  }
</style>