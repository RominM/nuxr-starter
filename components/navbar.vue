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
const router = useRouter()
const routes = router.getRoutes()
const auth = useAdminStore()

const filteredRoutes = routes.filter(route => {
  return (
    route.meta?.showInNav !== false &&
    !route.path.includes(':') &&
    route.name !== undefined &&
    route.path !== '/404'
  )
})
const adminRoutes = filteredRoutes.filter(route => route.path.includes('/admin'))
const userRoutes = filteredRoutes.filter(route => !route.path.includes('/admin'))

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