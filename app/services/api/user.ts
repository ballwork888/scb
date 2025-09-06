import { useBaseApi } from './base'

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

interface UserProfile {
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

export const useUserApi = () => {
    const { apiBase, createAuthHeaders, handleApiResponse, handleApiError } = useBaseApi()

    const getProfile = async (token: string): Promise<UserProfile> => {

        try {
            const response = await $fetch(`${apiBase}/customers/profile`, {
                headers: createAuthHeaders(token),
                responseType: 'json'
            })

            return await handleApiResponse<UserProfile>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const updateProfile = async (token: string, profileData: Partial<UserProfile>): Promise<UserProfile> => {
        try {
            const response = await $fetch(`${apiBase}/customers/profile`, {
                method: 'PUT',
                headers: createAuthHeaders(token),
                body: profileData
            })

            return await handleApiResponse<UserProfile>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    return {
        getProfile,
        updateProfile
    }
}