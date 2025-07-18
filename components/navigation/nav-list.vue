<template>
  <ul class='nav-list'>
    <button-nav v-for="route in routes" :key="route?.name" :route="route" />
  </ul>
</template>

<script setup lang='ts'>
import type { RouteRecordNormalized } from 'vue-router'
defineProps({routes: {type: Array as PropType<RouteRecordNormalized[]>, required: true}})
</script>

<style lang='scss' scoped>
  .nav-list{
    display: flex;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>