<template>
    <div class='error'>
        <h1>404</h1>  
        <p>Oups, la page que vous cherchiez n'existe pas</p>
        <button @click="goBack">Retour</button>
    </div>
</template>

<script setup lang='ts'>
const goBack = () => {
    window.history.back()
}   
</script>

<style lang='scss' scoped>
  .error{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>