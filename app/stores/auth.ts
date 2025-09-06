import { defineStore } from 'pinia'
import { useAuthApi } from '~/services/api/auth'
import { useUserApi } from '~/services/api/user'
import { useStorage } from '~/services/storage'

interface CompletedRequest {
    id: number
    type: string
    amount: string
    bonus: string
    total: string
    status: string
    created_at: string
    deleted_at: string | null
    deleted_cause: string
}

interface PromotionIds {
    [key: string]: string
}

interface Settings {
    deposit_min: string
    withdraw_min: string
}

interface User {
    phone: string
    name: string
    bank: string
    account_number: string
    to_bank: string
    to_account_number: string
    to_name: string
    ufabet_username: string
    ufabet_password: string
    ufabet_credit: string
    ufabet_credit_updated_at: string
    ufabet_credit_checking: number
    turnover: string
    turnover_needed: string
    ufabet_turnover_updated_at: string | null
    ufabet_turnover_checking: number
    pending_request: any | null
    completed_requests: CompletedRequest[]
    promotion_ids: PromotionIds
    current_promotion: any | null
    events: any[]
    upline: any | null
    request_lifetime: string
    ig_balance_amount: string
    total_sport: string
    total_bet: string
    ig_balance: string
    ig_balance_updated_at: string
    ufabet_clear_turnover_checking: number
    settings: Settings
    sms_provider_customer_registered: string
    success_deposit_count: string
    ufabet_username_always_show: string
    ufabet_password_always_show: string
    payment_gateway_status: boolean
    register_at: number
}

interface AuthState {
    accessToken: string | null
    user: User | null
    isLoading: boolean
    error: string | null
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        accessToken: null,
        user: null,
        isLoading: false,
        error: null
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.accessToken && !!state.user,
        hasToken: (state): boolean => !!state.accessToken
    },

    actions: {
        setLoading(loading: boolean) {
            this.isLoading = loading
        },

        setError(error: string | null) {
            this.error = error
        },

        setToken(token: string | null) {
            this.accessToken = token
            const { setItem, removeItem } = useStorage()

            if (token) {
                setItem('access_token', token)
            } else {
                removeItem('access_token')
            }
        },

        setUser(user: User | null) {
            this.user = user
        },

        async login(phone: string, password: string): Promise<User> {
            this.setLoading(true)
            this.setError(null)

            try {
                const { login } = useAuthApi()
                const { getProfile } = useUserApi()

                // Login และได้ token
                const loginResponse = await login(phone, password)
                this.setToken(loginResponse.access_token)

                // ดึงข้อมูล user profile
                const userProfile = await getProfile(loginResponse.access_token)
                this.setUser(userProfile)

                return userProfile
            } catch (error: any) {
                this.setError(error.message)
                throw error
            } finally {
                this.setLoading(false)
            }
        },

        async loadUserFromStorage(): Promise<void> {
            console.log('#get profile')
            const { getItem } = useStorage()
            const token = getItem('access_token')

            if (!token) {
                return
            }

            this.setLoading(true)
            this.setToken(token)

            try {
                const { getProfile } = useUserApi()
                const userProfile = await getProfile(token)
                //console.log(userProfile)
                this.setUser(userProfile)
            } catch (error: any) {
                console.error('Token expired or invalid:', error.message)
                this.logout()
            } finally {
                this.setLoading(false)
            }
        },

        async refreshProfile(): Promise<void> {
            console.log('#get profile')
            if (!this.accessToken) {
                throw new Error('No access token available')
            }

            this.setLoading(true)
            try {
                const { getProfile } = useUserApi()
                const userProfile = await getProfile(this.accessToken)
                this.setUser(userProfile)
            } catch (error: any) {
                this.setError(error.message)
                throw error
            } finally {
                this.setLoading(false)
            }
        },

        async forgotPassword(phone: string) {
            console.log('#get forgotPassword')

            try {
                const { forgetPassword } = useAuthApi()
                const res = await forgetPassword(phone)
                return res
            } catch (error: any) {

                throw error
            } finally {

            }
        },

        async forgotPasswordOtp(phone: string, token: string, otp: number) {
            console.log('#get forgotPassword otp')

            try {
                const { forgetPasswordOtp } = useAuthApi()
                const res = await forgetPasswordOtp(phone, token, otp)
                return res
            } catch (error: any) {

                throw error
            } finally {

            }
        },

        async resetPassword(phone: string, game_username: string, token: string, otp: number, password: string, confirm_password: string, bypass_username: false) {
            console.log('#get resetPassword')

            try {
                const { resetPassword } = useAuthApi()
                const res = await resetPassword(phone, game_username, token, otp, password, confirm_password, bypass_username)
                return res
            } catch (error: any) {

                throw error
            } finally {

            }
        },

        // Utility methods for user data
        getUserCredit(): string {
            return this.user?.ufabet_credit || '0.00'
        },

        getTotalBet(): string {
            return this.user?.total_bet || '0.00'
        },

        getFormattedCredit(): string {
            const credit = parseFloat(this.getUserCredit())
            return new Intl.NumberFormat('th-TH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(credit)
        },

        getFormattedTotalBet(): string {
            const totalBet = parseFloat(this.getTotalBet())
            return new Intl.NumberFormat('th-TH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(totalBet)
        },

        getUserBankInfo(): { bank: string; accountNumber: string } {
            return {
                bank: this.user?.bank || '',
                accountNumber: this.user?.account_number || ''
            }
        },

        getUfabetCredentials(): { username: string; password: string } {
            return {
                username: this.user?.ufabet_username_always_show || this.user?.ufabet_username || '',
                password: this.user?.ufabet_password_always_show || this.user?.ufabet_password || ''
            }
        },

        getDepositSettings(): { minDeposit: string; minWithdraw: string } {
            return {
                minDeposit: this.user?.settings?.deposit_min || '50',
                minWithdraw: this.user?.settings?.withdraw_min || '100'
            }
        },

        hasCompletedDeposits(): boolean {
            return this.user?.completed_requests?.some(req => req.status === 'completed' && req.type === 'deposit') || false
        },

        getLastCompletedDeposit(): CompletedRequest | null {
            if (!this.user?.completed_requests) return null

            const completedDeposits = this.user.completed_requests
                .filter(req => req.status === 'completed' && req.type === 'deposit')
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

            return completedDeposits[0] || null
        },

        isPendingRequest(): boolean {
            return !!this.user?.pending_request
        },

        logout(): void {
            this.setToken(null)
            this.setUser(null)
            this.setError(null)

            // รีโหลดหน้าเว็บ
            if (typeof window !== 'undefined') {
                window.location.reload()
            }
        }
    }
})