import { useRequest } from "../api/useRequest";
import { useAdminStore } from "~/stores/adminStore";

export const loginAdmin = () => {
  const request = useRequest()
  const authStore = useAdminStore()

  return {
    login: async (username: string, password: string) => {
      const { data, error } = await request.post<{ token: string }>('/admin/login', { username, password })
      if(!data || error){
        return {data, error}
      }

      authStore.setToken(data.token)
      return {data, error}
    }
  }
}
