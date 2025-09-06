import { defineStore } from 'pinia'

export const useSharedStore = defineStore('shared', {
  state: () => ({
    userData: {
      name: '',
      amount: '0.00',
      transactionId: ''
    },
    promotionData: {
      name: '',
      id: '0',
      isPromotionSet: false,
      amount: 50
    },
    forgetPasswordData: {
      phone: '',
      token: '',
      otp: '',
      password: '',
      confirm_password: ''
    },
    isLoading: false
  }),

  actions: {
    updateUserData(data) {
      this.userData = { ...this.userData, ...data }
    },

    updatePromotionData(data) {
      this.promotionData = { ...this.promotionData, ...data }
    },
    updateForgetPasswprdData(data) {
      this.forgetPasswordData = { ...this.forgetPasswordData, ...data }
    },

    setLoading(loading) {
      this.isLoading = loading
    }
  }
})