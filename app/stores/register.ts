import { defineStore } from 'pinia'
import { useAuthApi } from '~/services/api/auth'
import { useStorage } from '~/services/storage'

type RegistrationStep = 'phone' | 'password' | 'bank' | 'completed'

interface ApiResponse {
    status: 'success' | 'error'
    message: string
}

interface RegisterState {
    accessToken: string | null
    phone: string | null
    registrationStep: RegistrationStep
    isLoading: boolean
    error: string | null
}

export const useRegisterStore = defineStore('register', {
    state: (): RegisterState => ({
        accessToken: null,
        phone: null,
        registrationStep: 'phone',
        isLoading: false,
        error: null
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.accessToken,
        hasPhone: (state): boolean => !!state.phone,
        canSetPassword: (state): boolean => !!state.accessToken && !!state.phone
    },

    actions: {
        setLoading(loading: boolean) {
            this.isLoading = loading
        },

        setError(error: string | null) {
            this.error = error
        },

        initialize(): void {
            const { getItem } = useStorage()

            const token = getItem('register_access_token')
            const phone = getItem('register_phone')
            const step = getItem('registration_step') as RegistrationStep

            if (token) this.accessToken = token
            if (phone) this.phone = phone
            if (step) this.registrationStep = step
        },

        clearAll(): void {
            const { removeItem } = useStorage()

            this.accessToken = null
            this.phone = null
            this.registrationStep = 'phone'
            this.error = null

            removeItem('register_access_token')
            removeItem('register_phone')
            removeItem('registration_step')
        },

        updateStep(step: RegistrationStep): void {
            const { setItem } = useStorage()

            this.registrationStep = step
            setItem('registration_step', step)
        },

        async registerPhone(phoneNumber: string): Promise<ApiResponse> {
            this.setLoading(true)
            this.setError(null)

            try {
                const { registerPhone, registerOtp } = useAuthApi()
                const { setItem } = useStorage()

                // ส่งเบอร์โทรไปลงทะเบียน
                const phoneResponse = await registerPhone(phoneNumber)

                if (!phoneResponse.success) {
                    if (phoneResponse.error && phoneResponse.error.length > 0) {
                        throw new Error(phoneResponse.error[0])
                    }
                    throw new Error('Phone registration failed')
                }

                // ส่ง OTP (bypass mode)
                const otpResponse = await registerOtp(phoneNumber)

                if (otpResponse.success && otpResponse.access_token) {
                    this.accessToken = otpResponse.access_token
                    this.phone = phoneNumber
                    this.updateStep('password')

                    setItem('register_access_token', otpResponse.access_token)
                    setItem('register_phone', phoneNumber)

                    return {
                        status: 'success',
                        message: phoneResponse.sms_provider_customer_registered || 'OTP verified successfully'
                    }
                }

                throw new Error('OTP verification failed')

            } catch (error: any) {
                this.setError(error.message)
                return {
                    status: 'error',
                    message: error.message
                }
            } finally {
                this.setLoading(false)
            }
        },

        async setPassword(password: string, passwordConfirmation: string): Promise<ApiResponse> {
            if (!this.canSetPassword) {
                return {
                    status: 'error',
                    message: 'Access token or phone number not found. Please start registration again.'
                }
            }

            this.setLoading(true)
            this.setError(null)

            try {
                const { registerPassword } = useAuthApi()

                const response = await registerPassword(
                    this.phone!,
                    password,
                    passwordConfirmation,
                    this.accessToken!
                )

                if (!response.success) {
                    if (response.error && response.error.length > 0) {
                        throw new Error(response.error[0])
                    }
                    throw new Error('Password setup failed')
                }

                this.updateStep('bank')

                return {
                    status: 'success',
                    message: 'Registration completed successfully!'
                }

            } catch (error: any) {
                this.setError(error.message)
                return {
                    status: 'error',
                    message: error.message
                }
            } finally {
                this.setLoading(false)
            }
        },

        async setBank(bank: string, account_number: string, name: string, line: string): Promise<ApiResponse> {

            this.setLoading(true)
            this.setError(null)

            try {
                const { registerBank } = useAuthApi()

                const response = await registerBank(
                    this.phone!,
                    bank,
                    account_number,
                    name,
                    line,
                    this.accessToken!
                )

                if (!response.success) {
                    if (response.errors && response.errors.length > 0) {
                        throw new Error(response.errors[0])
                    }
                    throw new Error('Bank registration failed')
                }

                this.updateStep('completed')

                return {
                    status: 'success',
                    message: 'Registration completed successfully!'
                }

            } catch (error: any) {
                //console.log(error)

                this.setError(error.message)
                return {
                    status: 'error',
                    message: error.message
                }
            } finally {
                this.setLoading(false)
            }
        },

        getRegistrationStatus() {
            return {
                step: this.registrationStep,
                hasPhone: this.hasPhone,
                hasToken: this.isAuthenticated,
                canSetPassword: this.canSetPassword,
                isLoading: this.isLoading,
                error: this.error
            }
        }
    }
})