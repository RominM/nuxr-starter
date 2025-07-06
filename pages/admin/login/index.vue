<template>
  <div class="admin-login">
    <h2>Connexion Admin</h2>
    <form @submit.prevent="submit" class="admin-login__form">
      <input v-model="username" placeholder="Utilisateur" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAPI } from '~/composables/api/useApi'

definePageMeta({ middleware: 'admin-auth' })

const router = useRouter()
const auth = useAdminStore()

const username = ref<string>('')
const password = ref<string>('')
const errorMessage = ref<string>('')

async function submit() {
  const { data, error } = await useAPI().adminAuth.login(username.value, password.value)

  if (!data || error) {
    errorMessage.value = error || 'Identifiants invalides'
    return
  }

  auth.setToken(data.token)
  router.push('/admin/products')
}
</script>

<style lang="scss" scoped>
.admin-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
