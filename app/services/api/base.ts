export const useBaseApi = () => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    const createAuthHeaders = (token?: string) => {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        return headers
    }

    interface ApiResponse<T = any> {
        success: boolean
        message: string
        data?: T
        error?: string[]
    }

    const handleApiResponse = async <T>(response: any): Promise<ApiResponse<T>> => {
        // ถ้ามี success อยู่แล้ว → ส่งกลับตามนั้น
        if (typeof response?.success !== "undefined" && response.success === true) {
            // จัดการ response ให้สม่ำเสมอ 
            if (response?.data) { return response.data } return response
        }

        if (response.access_token) {
            return {
                ...response,
                success: true
            }
        }

        // ถ้ามี errors (Laravel-style validation)
        if (response?.errors) {
            const messages = Object.values(response.errors).flat() as string[]
            return {
                success: false,
                message: response.message ?? "Validation failed",
                error: messages
            }
        }

        // ถ้ามี error array ปกติ
        if (response?.error) {
            const messages = Array.isArray(response.error) ? response.error : [response.error]
            return {
                success: false,
                message: response.message ?? "Request failed",
                error: messages
            }
        }

        // fallback
        return {
            success: false,
            message: response?.message ?? "Unknown error",
            error: []
        }
    }

    const handleApiError = (error: any) => {
        console.error("API Error:", error)
        console.log('=== DEBUG ERROR ===')
        console.log('Error status:', error.status)
        console.log('Error statusCode:', error.statusCode)
        console.log('Error data:', error.data)
        console.log('Error response:', error.response)
        console.log('Error message:', error.message)
        console.log('Full error keys:', Object.keys(error))
        console.log('Full error:', JSON.stringify(error, null, 2))
        console.log('===================')

        let message = '';

        if (error.status == 422) {
            if (error.data) {

                message = Object.values(error.data.errors)
                    .flat()                 // รวม array ซ้อน
                    .join(", ")
            }
        }

        return {
            success: false,
            message: message,
            status: error.status,
            error: [String(error)]
        }
    }


    return {
        apiBase,
        createAuthHeaders,
        handleApiResponse,
        handleApiError
    }
}