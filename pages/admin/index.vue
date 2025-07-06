<script setup lang='ts'>
const auth = useAdminStore()

if (auth.isLoggedIn) {
  navigateTo('/admin/products')
} else {
  navigateTo('/admin/login')
}
</script>