<template>
  <div class="project-banner">
    <img class="project-banner__img" :src="picture.src_l" :alt="picture.alt" />

     <div class="project-banner--actions">
      <a :href="links.website" target="_blank">
        <button class="visitng cta">
          <h-icon :icon="Cursor02Icon" size="27"/>
          visitng
        </button>
      </a>

      <a v-if="links.code" :href="links.code" target="_blank">
        <button class="view-code cta">
          <h-icon :icon="SourceCodeSquareIcon" size="25"/>
          code base
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Cursor02Icon, SourceCodeSquareIcon } from '@hugeicons/core-free-icons';
import type { TPicture, TProjectLinks } from '~/types/type/project';

defineProps({
  links: { type: Object as PropType<TProjectLinks>, required: true },
  picture: { type: Object as PropType<TPicture>, required: true },
})
</script>

<style scoped lang="scss">
.project-banner {
    position: relative;
    overflow: hidden;

    &__img {
      display: block;
      width: 85vw;
      height: 55vh;
      object-fit: cover;
      border-radius: 20px;
      transition: 0.3s ease;
    }

    &--actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      gap: 20px;
      opacity: 0;
      transition: 0.3s ease;
      z-index: 2;
      .cta {
        width: 250px;
      }

      .visitng {
        background-color: #6B4494;
      }
      .view-code {
        background-color: #EB8744;
      }
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;

      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s ease;
      z-index: 1;
    }

    &:hover {
      &::after {
        background-color: rgba(0, 0, 0, 0.4);
      }
      .project-banner--actions {
        opacity: 1;
      }
    }
  }

</style>