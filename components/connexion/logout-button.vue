<template>
  <button v-if="isLoggedIn" @click="logout">Se déconnecter</button>
</template>

<script setup lang="ts">
import { useAdminStore } from '~/stores/adminStore'

const auth = useAdminStore()

const isLoggedIn = computed(() => auth.isLoggedIn)

const logout = () => {
  auth.logout()
  navigateTo('/')
}
</script>
