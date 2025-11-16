<template>
  <nav class='navigation'>
    <nav-list v-if="userRoutes.length > 0" :routes="userRoutes" />
    <div v-if="isLoggedIn" class='navigation__admin'>
      <nav-list v-if="adminRoutes.length > 0" :routes="adminRoutes" />
      <logout-button />
    </div>
  </nav>
</template>

<script setup lang='ts'>
import { useUtils } from '~/composables/global/useUtils'
import { ERoute } from '~/types/enum/global/navigation'

const auth = useAdminStore()

const adminRoutes = useUtils().routes.includes([ERoute.ADMIN])
const userRoutes = useUtils().routes.excludes([ERoute.ADMIN, ERoute.PRIVATE])

const isLoggedIn = computed(() => auth.isLoggedIn)
</script>

<style lang='scss' scoped>
    .navigation,
    .navigation__admin{
      display: flex;
      justify-content: end;
      gap: 10px;
    }
</style>