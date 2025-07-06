<template>
  <button @click="logout">Se déconnecter</button>
</template>

<script setup lang="ts">
const auth = useAdminStore()

const logout = () => {
  auth.logout()
  navigateTo('/')
}
</script>
