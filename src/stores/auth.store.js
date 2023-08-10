import { defineStore } from 'pinia'
import { HTTP } from '../http-common'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
    phoneNumber: '',
    errorMessage: '',
    isCodeForm: false,
    loading: false,
    useDetail: ''
  }),
  actions: {
    async login(phoneNumber) {
      this.loading = true
      try {
        this.phoneNumber = phoneNumber
        const response = await HTTP.post(`/v1/auth/login`, { phone: phoneNumber })
        this.isCodeForm = true
        this.loading = false
        return response
      } catch (error) {
        this.errorMessage = error.response?.data?.message
        this.loading = false
      }
    },
    async verify(code) {
      this.loading = true
      try {
        const user = await HTTP.post(`/v1/auth/verify`, { code: code, phone: this.phoneNumber })
        this.isCodeForm = true
        this.loading = false

        this.useDetail = user
        this.user = user.data?.user
        localStorage.setItem('user', JSON.stringify(user.data?.user))
        return user
      } catch (error) {
        this.isCodeForm = true
        this.loading = false
        this.errorMessage = error.response?.data?.message
      }
    },
    logOut() {
      if (localStorage.getItem('user') === null) {
        return true
      } else {
        localStorage.removeItem('user');
        window.location.reload()
      }
    }
  }
})
