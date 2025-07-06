<template>
  <div class='admin-products'>
    <h1>Only Admin Access</h1>
  </div>
</template>

<script setup lang='ts'>
definePageMeta({ middleware: 'admin-auth' })
</script>

<style lang='scss' scoped>
    .admin-products{
        
    }
</style>