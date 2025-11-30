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
  height: 40dvh;
  border-radius: 14px;
  margin-right: -120px;
  box-shadow: -25px 10px 30px #00000073;
  overflow: hidden;
  transition: all 0.3s ease;
  transform-style: preserve-3d; 
  transform: scale(0.9) perspective(800px) rotateY(35deg);
  filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.5));
  cursor: pointer;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.hovered {
    transform: translateY(-30px);
    transition-delay: 0.08s;
    z-index: 0; 
    transform: scale(1.1);
    margin-right: -30px;
    &::before {
      left: 150%;
    }
  }
  &:hover {
    transform: translateY(-25px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    transition: 0.6s ease;
    pointer-events: none;
  }
}
</style>
