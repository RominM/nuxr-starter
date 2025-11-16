<template>
  <div class="project-content-display">
    <h2 class="project-content-display__name">{{ project.name }}</h2>

    <project-statistic :status="project.status" :level="project.level" :duration="project.duration" />

    <p>{{ project.description }}</p>

    <ul>
      <li v-for="(tech, index) in project.tech" :key="index">{{ tech }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TProject } from '~/types/type/project';

defineProps({
  project: { type: Object as PropType<TProject>, required: true}
})
</script>

<style scoped lang="scss">
.project-content-display {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000;
  &__name {
    text-align: center;
  }
}
</style>