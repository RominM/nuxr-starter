<template>
  <nuxt-link v-if="link" :to="link" :class="['action-button', `type--${type}`, fill ? 'fill' : 'hug']">
    <button-content :label="label" :icon="icon"/>
  </nuxt-link>

  <button v-else :class="['action-button', `type--${type}`, fill ? 'fill' : 'hug']" @click="$emit('click')">
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
  type: { type: Object as PropType<ButtonType>, default: ButtonType.PRIMARY },
  fill: { type: Boolean, default: false }
})
</script>

<style lang='scss' scoped>
@mixin baseButton {
  border: solid 1px;
  padding: 8px 12px;
  border-radius: 4px;
  min-width: 120px

}

.action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  &.fill {
    width: 100%;
  }
  &.hug {
    width: fit-content;
  }
  &.type {
    &--cta{
      @include baseButton();
      background-color: $success;
    }

    &--destructive {
      @include baseButton();
      background-color: $error;
    }
    &--fab{
      min-width: none;
      padding: 17px;
      height: max-content;
      overflow: hidden;
      aspect-ratio: 1;
      border: solid 1px;
      border-radius: 50%;
    }
  }
}
</style>