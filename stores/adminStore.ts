import { defineStore } from 'pinia'

export const useAdminStore = defineStore('adminAuth', {
  state: (): { token: string | null } => {
    const cookieToken = useCookie<string | null>('access_token').value
    return {
      token: cookieToken,
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token
      useCookie<string | null>('access_token', {
        secure: import.meta.env.PROD,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }).value = token
    },
    logout() {
      this.token = null
      useCookie<string | null>('access_token').value = null
    },
  },
})
