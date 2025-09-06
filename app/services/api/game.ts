import { useBaseApi } from './base'

interface GameLoginResponse {
    url: string
    success: boolean
    message?: string
}

export const useGameApi = () => {
    const { apiBase, createAuthHeaders, handleApiResponse, handleApiError } = useBaseApi()

    const autoLogin = async (token: string): Promise<string> => {
        try {
            const response = await $fetch(`${apiBase}/customers/login-game`, {
                headers: createAuthHeaders(token),
                responseType: 'json'
            })

            const data = await handleApiResponse<GameLoginResponse>(response)

            if (data.url) {
                return data.url
            }

            throw new Error(data.message || 'Game login failed: No URL returned')
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getGameStatus = async (token: string): Promise<any> => {
        try {
            const response = await $fetch(`${apiBase}/customers/game-status`, {
                headers: createAuthHeaders(token),
                responseType: 'json'
            })

            return await handleApiResponse(response)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    return {
        autoLogin,
        getGameStatus
    }
}