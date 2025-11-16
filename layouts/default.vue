<template>
  <div class='default-layout'>
    <div class="cercle large"></div>
    <div class="cercle small"></div>
    <div class="cercle medium"></div>
    <layout-content>
      <slot/>
    </layout-content>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.default-layout {
  position: relative;
  width: 100dvw;
  height: 100dvh;
  padding: 40px;
  overflow: hidden;
  background: linear-gradient(
    217deg,
    #BEE9E8 4%,
    #9FB0E8 46%,
    #E0BACF 96%
  );
  .cercle {
    position: absolute;
    border-radius: 50%;
    background-color: #0999AC;
    z-index: 0;
  }

  .large {
    top: 80px;
    right: -180px;
    width: 66vh;
    height: 66vh;
  }
  .medium {
    bottom: -80px;
    left: 120px;
    width: 40vh;
    height: 40vh;
  }

  .small {
    top: 50%;
    left: 45vh;
    width: 13vh;
    height: 13vh;
  }
}
</style>