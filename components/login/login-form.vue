<template>
  <form @submit.prevent="submit" class="login-form">
    <label class="login-form__label">Utilisateur
      <input v-model="formData.username" class="login-form__input" placeholder="Utilisateur" required />
    </label>
    
    <label class="login-form__label">Mot de passe
      <input v-model="formData.password" class="login-form__input" type="password" placeholder="Mot de passe" required />
    </label>
    
    <p v-if="errorMessage" class="login-form__error">{{ errorMessage }}</p>

    <action-button label="connexion" title="connexion" :type="ButtonType.PRIMARY" @click="submit" fill/>
  </form>
</template>

<script setup lang='ts'>
import { useAPI } from '~/composables/api/useApi'
import { ButtonType } from '~/types/enum/global/button'

const auth = useAdminStore()
const router = useRouter()

const errorMessage = ref<string>('')

const formData = reactive({
  username: '',
  password: ''
})

async function submit() {
  const { data, error } = await useAPI().adminAuth.login(formData.username, formData.password)

  if (!data || error) {
    errorMessage.value = error || 'Identifiants invalides'
    return
  }

  auth.setToken(data.token)
  router.push('/admin/products')
}
</script>

<style lang='scss' scoped>
  .login-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 360px;
    &__label{
      display: flex;
      flex-direction: column;
      width: 100%;
      font-size: 12px;
      color: $dark-text-secondary;
    }
    &__input {
      border: none;
      height: 35px;
      border-radius: 6px;
      padding: 0 6px;
      background-color: $dark-background;
    }
    &__button {
      border-radius: 6px;
      height: 35px;
      background-color: $primary;
      &:hover{
        background-color: $primary-hover;
      }
    }
    &__error {
      text-align: center;
      font-size: 12px;
      color: $error;
    }
  }
</style>