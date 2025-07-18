<template>
  <div class="admin-login">
    <login-module />
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 30px /* height of nav */);
  background-color: $dark-background;
}
</style>
