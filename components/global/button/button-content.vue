<template>
  <p :class="['button-content', icon?.side ? `side-${icon.side}` : 'side-center']"> 
    <span>{{ label }}</span>
    <h-icon v-if="icon" :icon="icon.hugeicons" />
  </p>
</template>

<script setup lang='ts'>
import type { iconProps } from '~/types/type/icon';

defineProps({
  icon: { type: Object as PropType<iconProps>, default: null },
  label: { type: String, default: '' },
})
</script>

<style lang='scss' scoped>
  .button-content{}
</style>