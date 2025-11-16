<template>
  <div class="private">
    <div class="fake-bento">
      <carousel>
        <list-project-cards :projects="projects" @focused-project="focusProjectId = $event"/>
      </carousel>

      <project-content-display v-if="project" :project="project"/>

    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/const/projects';

const focusProjectId = ref<string>(projects[0].id)
const project = computed(() => projects.find(project => project.id === focusProjectId.value))
</script>

<style scoped lang="scss">
.private {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
}

.fake-bento {
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 100%;
}

.txt {
  color: #000;
}
</style>