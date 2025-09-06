import { defineStore } from 'pinia'
import { useGameApi } from '~/services/api/game'
import { useStorage } from '~/services/storage'

interface GameState {
    gameUrl: string | null
    isLoading: boolean
    error: string | null
}

export const useGameStore = defineStore('game', {
    state: (): GameState => ({
        gameUrl: null,
        isLoading: false,
        error: null
    }),

    getters: {
        hasGameUrl: (state): boolean => !!state.gameUrl
    },

    actions: {
        setLoading(loading: boolean) {
            this.isLoading = loading
        },

        setError(error: string | null) {
            this.error = error
        },

        setGameUrl(url: string | null) {
            this.gameUrl = url
        },

        async autoLogin(): Promise<string> {
            const { getItem } = useStorage()
            const token = getItem('access_token')

            if (!token) {
                return '/login'
            }

            this.setLoading(true)
            this.setError(null)

            try {
                const { autoLogin } = useGameApi()
                const gameUrl = await autoLogin(token)

                this.setGameUrl(gameUrl)
                return gameUrl

            } catch (error: any) {
                this.setError(error.message)

                // ถ้า token หมดอายุ ให้ลบออก
                if (error.message.includes('Token expired') || error.message.includes('Unauthorized')) {
                    const { removeItem } = useStorage()
                    removeItem('access_token')
                }

                throw error
            } finally {
                this.setLoading(false)
            }
        },

        clearGameData(): void {
            this.gameUrl = null
            this.error = null
        }
    }
})