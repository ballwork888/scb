import { defineStore } from 'pinia'
import { useBaseApi } from './base'

interface LoginResponse {
    access_token: string
    token_type: string
    expires_in: number
}

interface RegisterPhoneResponse {
    success: boolean
    message: string
    sms_provider_customer_registered?: string
    error?: string[]
}

interface RegisterOtpResponse {
    success: boolean
    access_token: string
    message: string
    error?: string[]
}

interface RegisterPasswordResponse {
    success: boolean
    message: string
    error?: string[]
}

interface RegisterBankResponse {
    success: boolean
    message: string
    error?: string[]
}

interface forgetPssswordRes {
    success: boolean
    token: string
    message: string
    error?: string[]
}

export const useAuthApi = () => {
    const { apiBase, createAuthHeaders, handleApiResponse, handleApiError } = useBaseApi()

    const login = async (phone: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await $fetch(`${apiBase}/login`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: { phone, password }
            })

            return await handleApiResponse<LoginResponse>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const registerPhone = async (phone: string): Promise<RegisterPhoneResponse> => {
        try {
            const response = await $fetch(`${apiBase}/register/phone`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: { phone },
                throw: false
            })

            return await handleApiResponse<RegisterPhoneResponse>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const registerOtp = async (phone: string, otp: string = '0000'): Promise<RegisterOtpResponse> => {
        try {
            const response = await $fetch(`${apiBase}/register/otp`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: {
                    phone,
                    otp,
                    '1o330o7oc4_bypass': true
                },
                throw: false
            })

            return await handleApiResponse<RegisterOtpResponse>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const registerPassword = async (
        phone: string,
        password: string,
        password_confirmation: string,
        token: string
    ): Promise<RegisterPasswordResponse> => {
        try {
            const response = await $fetch(`${apiBase}/register/password`, {
                method: 'POST',
                headers: createAuthHeaders(token),
                body: {
                    phone,
                    password,
                    password_confirmation
                },
                throw: false
            })

            return await handleApiResponse<RegisterPasswordResponse>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const registerBank = async (phone: string, bank: string, account_number: string, name: string, line: string, token: string): Promise<RegisterBankResponse> => {
        try {
            const response = await $fetch(`${apiBase}/register/bank-account`, {
                method: 'POST',
                headers: createAuthHeaders(token),
                body: {
                    phone,
                    bank,
                    account_number,
                    name,
                    line
                },
                throw: false
            })

            return await handleApiResponse<RegisterBankResponse>(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }


    const forgetPassword = async (phone: string): Promise<forgetPssswordRes> => {
        try {
            const response = await $fetch(`${apiBase}/reset-password/start`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: {
                    phone,
                    bypass_username: true
                },
                throw: false
            })

            return await handleApiResponse<forgetPssswordRes>(response)
        } catch (error) {
            return handleApiError(error)
        }
    }

    const forgetPasswordOtp = async (phone: string, token: string, otp: number): Promise<forgetPssswordRes> => {
        //console.log('forgetPasswordOtp')

        try {
            const response = await $fetch(`${apiBase}/reset-password/confirm-otp`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: {
                    phone,
                    token,
                    otp,
                    bypass_username: true
                },
                throw: false
            })

            //return await handleApiResponse<forgetPssswordRes>(response)
            return handleApiResponse(response)
        } catch (error) {
            //handleApiError(error)
            //throw error
            //console.log('catch')
            return handleApiError(error)
        }
    }

    const resetPassword = async (phone: string, game_username: string, token: string, otp: number, password: string, password_confirmation: string, bypass_username: false): Promise<forgetPssswordRes> => {
        //console.log('forgetPasswordOtp')

        try {
            const response = await $fetch(`${apiBase}/reset-password/confirm-password`, {
                method: 'POST',
                headers: createAuthHeaders(),
                body: {
                    phone,
                    game_username,
                    token,
                    otp,
                    password,
                    password_confirmation,
                    bypass_username
                },
                throw: false
            })

            //return await handleApiResponse<forgetPssswordRes>(response)
            return handleApiResponse(response)
        } catch (error) {
            //handleApiError(error)
            //throw error
            //console.log('catch')
            return handleApiError(error)
        }
    }




    return {
        login,
        registerPhone,
        registerOtp,
        registerPassword,
        registerBank,
        forgetPassword,
        forgetPasswordOtp,
        resetPassword
    }
}