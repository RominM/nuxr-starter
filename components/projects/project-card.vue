<template>
  <div
    :class="['project-card', { hovered: isHovered }]"
    @mouseenter="$emit('hover')"
    @mouseleave="$emit('leave')"
  >
    <img class="project-card__img" :src="picture.src_m" :alt="picture.alt" />
  </div>
</template>

<script setup lang="ts">
import type { TPicture } from '~/types/type/project';

defineProps({
  id: { type: String, required: true },
  picture: { type: Object as PropType<TPicture>, required: true },
  isHovered: { type: Boolean, required: true }
})
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  width: 230px;
  height: 320px;
  border-radius: 14px;
  margin-right: -100px;
  box-shadow: -50px 10px 30px #000000ae;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.hovered {
    transform: translateY(-30px);
    z-index: 0; 
    margin-right: -30px;
  }
}
</style>
