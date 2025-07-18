<template>
  <nuxt-link v-if="link" :to="link" :class="['action-button', `--type-${type}`]">
    <button-content :label="label" :icon="icon"/>
  </nuxt-link>

  <button v-else :class="['action-button', `--type-${type}`]">
    <button-content :label="label" :icon="icon"/>
  </button>

</template>

<script setup lang='ts'>
import { ButtonType } from '~/types/enum/global/button';
import type { iconProps } from '~/types/type/icon';

defineProps({
  label: { type: String, default: '' },
  link: {type: String, default: null},
  icon: { type: Object as PropType<iconProps>, default: null },
  type: { type: Object as PropType<ButtonType>, default: ButtonType.PRIMARY }
})
</script>

<style lang='scss' scoped>
  .action-button{
      
  }
</style>