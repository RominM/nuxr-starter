export default defineNuxtRouteMiddleware((to) => {
  const auth = useAdminStore()
// console.log('Token au montage :', auth.token)
  if (to.path === '/admin/login' && auth.isLoggedIn) {
    return navigateTo('/admin/products')
  }

  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    if (!auth.isLoggedIn) {
      return navigateTo('/admin/login')
    }
  }
})
