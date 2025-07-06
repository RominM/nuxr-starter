import { loginAdmin } from '../endpoints/loginAdmin'

export const useAPI = () => ({
  adminAuth: loginAdmin()
})
