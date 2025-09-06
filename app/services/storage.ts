export const useStorage = () => {
    const setItem = (key: string, value: string): void => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.setItem(key, value)
            }
        } catch (error) {
            console.error('Error saving to localStorage:', error)
        }
    }

    const getItem = (key: string): string | null => {
        try {
            if (typeof window !== 'undefined') {
                return localStorage.getItem(key)
            }
            return null
        } catch (error) {
            console.error('Error reading from localStorage:', error)
            return null
        }
    }

    const removeItem = (key: string): void => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(key)
            }
        } catch (error) {
            console.error('Error removing from localStorage:', error)
        }
    }

    const clear = (): void => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.clear()
            }
        } catch (error) {
            console.error('Error clearing localStorage:', error)
        }
    }

    return {
        setItem,
        getItem,
        removeItem,
        clear
    }
}