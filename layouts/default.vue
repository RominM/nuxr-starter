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
        
    }
</style>