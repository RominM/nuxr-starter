<template>
  <div class="glass-bento">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.glass-bento {
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.11);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.3px);
-webkit-backdrop-filter: blur(6.3px);
border: 1px solid rgba(255, 255, 255, 0.12);
}
// .glass-bento {
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(17px);
//   -webkit-backdrop-filter: blur(17px);
//   border-radius: 20px;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 
//     0 8px 32px rgba(0, 0, 0, 0.1),
//     inset 0 1px 0 rgba(255, 255, 255, 0.5),
//     inset 0 -1px 0 rgba(255, 255, 255, 0.1),
//     inset 0 0 14px 7px rgba(255, 255, 255, 0.7);
//   position: relative;
//   overflow: hidden;
// }

// .glass-bento::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 1px;
//   background: linear-gradient(
//     90deg,
//     transparent,
//     rgba(255, 255, 255, 0.8),
//     transparent
//   );
// }

// .glass-bento::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 1px;
//   height: 100%;
//   background: linear-gradient(
//     180deg,
//     rgba(255, 255, 255, 0.8),
//     transparent,
//     rgba(255, 255, 255, 0.3)
//   );
// }
</style>