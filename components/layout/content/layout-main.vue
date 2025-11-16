<template>
  <div class="layout-main">
    <div class='layout-main__personal-sheet'>
      <glass-bento>
        personal-sheet
      </glass-bento>
      <glass-bento>
        network
      </glass-bento>
    </div>
    <glass-bento>
      <slot />
    </glass-bento>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.layout-main {
  display: flex;
  gap: 80px;
  height: calc(100dvh - 160px);
  &__personal-sheet {
    width: 320px;
    min-width: 320px;
  }
}
</style>