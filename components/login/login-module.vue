<template>
  <div class='login-module'>
    <img class="login-module__img" src="../../assets/images/1200x680_foret.jpg.jpg"/>
    <login-form class='login-module__form' />
  </div>
</template>

<script setup lang='ts'>
    
</script>

<style lang='scss' scoped>
.login-module{
  position: relative;
  width: 100%;
  max-width: 360px;
  padding: 50px 20px 20px;
  border-radius: 18px;
  background-color: $dark-surface;
  &__img {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
    border: solid 3px $border;
    box-shadow: 0 0 5px #7b7b7b8e;
  }

  &__form {
  }
}
</style>