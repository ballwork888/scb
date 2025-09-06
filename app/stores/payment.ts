import { defineStore } from 'pinia'
import { usePaymentApi } from '~/services/api/payment'
import { useStorage } from '~/services/storage'

export const usePaymentStore = defineStore('payment', {

    actions: {
        async createQr(amount: number, promotion_id: string) {
            try {
                const { createQr } = usePaymentApi()

                const { getItem } = useStorage()
                const token = getItem('access_token')

                const response = await createQr(amount, promotion_id, token)

                return response

            } catch (error: any) {

                return {
                    status: 'error',
                    message: error.message
                }
            } finally {

            }

        },
        async cancel(id: string) {
            try {
                const { cancelDeposit } = usePaymentApi()

                const { getItem } = useStorage()
                const token = getItem('access_token')

                const response = await cancelDeposit(id, token)

                if (!response.success) {
                    if (response.error && response.error.length > 0) {
                        throw new Error(response.error[0])
                    }
                    throw new Error('Password setup failed')
                }

                return {
                    status: 'success',
                    message: 'cancel deposit successfully!'
                }

            } catch (error: any) {

                return {
                    status: 'error',
                    message: error.message
                }
            } finally {

            }

        },

        async withdraw(amount: number) {
            try {
                const { getWithdraw } = usePaymentApi()

                const { getItem } = useStorage()
                const token = getItem('access_token')
                const phone = getItem('register_phone')

                const response = await getWithdraw(phone, amount, token)
                return response

            } catch (error: any) {

                throw error
            } finally {

            }

        },

        async getPaymentInfo() {
            try {
                const { getPaymentInfo } = usePaymentApi()

                const { getItem } = useStorage()
                const token = getItem('access_token')

                const response = await getPaymentInfo(token)

                if (!response.success) {
                    if (response.error && response.error.length > 0) {
                        throw new Error(response.error[0])
                    }
                    throw new Error('Password setup failed')
                }

                return response

            } catch (error: any) {

                return {
                    status: 'error',
                    message: error.message
                }
            } finally {

            }

        }
    }
})