import { useBaseApi } from './base'


interface PendingRequest {
    id: number
    type: string
    bank: string
    account_number: string
    name: string
    amount: string
    status: string
    proofed_at: string | null
    created_at: string
    qr_code?: string
    qr_code_name?: string
    ref?: string
}

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

interface PaymentInfo {
    pending_request: PendingRequest | null
    completed_requests: CompletedRequest[]
    request_lifetime: string
    settings: {
        deposit_min: string
        withdraw_min: string
    }
    success_deposit_count: string
    payment_gateway_status: boolean
}

interface PaymentResponse {
    success: boolean
    data: PaymentInfo
}

export const usePaymentApi = () => {
    const { apiBase, createAuthHeaders, handleApiResponse, handleApiError } = useBaseApi()

    const createQr = async (amount: number, promotion_id: string, token: string) => {
        try {
            const response = await $fetch(`${apiBase}/requests/deposit/payment-gateway`, {
                method: 'POST',
                headers: createAuthHeaders(token),
                body: {
                    amount,
                    promotion_id
                },
                throw: false
            })

            //const data = await handleApiResponse<PaymentResponse>(response)
            return handleApiResponse<PaymentResponse>(response)
        } catch (error) {
            return handleApiError(error)
        }
    }

    const cancelDeposit = async (id: string, token: string) => {
        try {
            const response = await $fetch(`${apiBase}/requests/deposit/${id}/cancel`, {
                method: 'POST',
                headers: createAuthHeaders(token),
                body: {},
                throw: false
            })

            const data = await handleApiResponse<PaymentResponse>(response)
            return data.data || data
        } catch (error) {
            return handleApiError(error)
        }
    }

    const getWithdraw = async (phone: string, amount: number, token: string) => {
        try {
            const response = await $fetch(`${apiBase}/requests/withdraw`, {
                method: 'POST',
                headers: createAuthHeaders(token),
                body: {
                    phone, amount
                },
                throw: false
            })

            return handleApiResponse(response)
        } catch (error) {
            return handleApiError(error)
        }
    }


    const getPaymentInfo = async (token: string): Promise<PaymentInfo> => {
        try {
            const response = await $fetch(`${apiBase}/customers/profile`, {
                headers: createAuthHeaders(token),
                responseType: 'json'
            })

            const data = await handleApiResponse<PaymentResponse>(response)
            return data.data || data
        } catch (error) {
            return handleApiError(error)
        }
    }

    const getPendingRequest = async (token: string): Promise<PendingRequest | null> => {
        try {
            const paymentInfo = await getPaymentInfo(token)
            return paymentInfo.pending_request
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getCompletedRequests = async (token: string): Promise<CompletedRequest[]> => {
        try {
            const paymentInfo = await getPaymentInfo(token)
            return paymentInfo.completed_requests || []
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    /*
    const getLatestTransaction = async (token: string): Promise<CompletedRequest | null> => {
        try {
            const completedRequests = await getCompletedRequests(token)
            if (completedRequests.length === 0) return null

            // เรียงตามวันที่ใหม่สุด
            return completedRequests.sort((a, b) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            )[0]
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }
        */

    const getDepositHistory = async (token: string): Promise<CompletedRequest[]> => {
        try {
            const completedRequests = await getCompletedRequests(token)
            return completedRequests
                .filter(req => req.type === 'deposit')
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getWithdrawHistory = async (token: string): Promise<CompletedRequest[]> => {
        try {
            const completedRequests = await getCompletedRequests(token)
            return completedRequests
                .filter(req => req.type === 'withdraw')
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getSuccessfulDeposits = async (token: string): Promise<CompletedRequest[]> => {
        try {
            const completedRequests = await getCompletedRequests(token)
            return completedRequests
                .filter(req => req.type === 'deposit' && req.status === 'completed')
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getCancelledRequests = async (token: string): Promise<CompletedRequest[]> => {
        try {
            const completedRequests = await getCompletedRequests(token)
            return completedRequests
                .filter(req => req.status === 'cancalled')
                .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getPaymentSettings = async (token: string): Promise<{ deposit_min: string; withdraw_min: string }> => {
        try {
            const paymentInfo = await getPaymentInfo(token)
            return paymentInfo.settings
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const hasPendingRequest = async (token: string): Promise<boolean> => {
        try {
            const pendingRequest = await getPendingRequest(token)
            return !!pendingRequest
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const isPaymentGatewayActive = async (token: string): Promise<boolean> => {
        try {
            const paymentInfo = await getPaymentInfo(token)
            return paymentInfo.payment_gateway_status
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const getTotalDepositAmount = async (token: string): Promise<number> => {
        try {
            const successfulDeposits = await getSuccessfulDeposits(token)
            return successfulDeposits.reduce((total, deposit) => {
                return total + parseFloat(deposit.total)
            }, 0)
        } catch (error) {
            handleApiError(error)
            throw error
        }
    }

    const formatAmount = (amount: string | number): string => {
        const num = typeof amount === 'string' ? parseFloat(amount) : amount
        return new Intl.NumberFormat('th-TH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num)
    }

    const formatDateTime = (dateTime: string): string => {
        const date = new Date(dateTime)
        return new Intl.DateTimeFormat('th-TH', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date)
    }

    const getStatusText = (status: string): string => {
        const statusMap: Record<string, string> = {
            'completed': 'สำเร็จ',
            'cancalled': 'ยกเลิก',
            'pending': 'รอดำเนินการ',
            'wait-for-approval': 'รอการอนุมัติ'
        }
        return statusMap[status] || status
    }

    const getTypeText = (type: string): string => {
        const typeMap: Record<string, string> = {
            'deposit': 'ฝากเงิน',
            'withdraw': 'ถอนเงิน'
        }
        return typeMap[type] || type
    }

    return {
        // Main API calls
        getPaymentInfo,
        getPendingRequest,
        getCompletedRequests,

        // Transaction history

        getDepositHistory,
        getWithdrawHistory,
        getSuccessfulDeposits,
        getCancelledRequests,

        // Settings & Status
        getPaymentSettings,
        hasPendingRequest,
        isPaymentGatewayActive,

        // Calculations
        getTotalDepositAmount,

        // Utility functions
        formatAmount,
        formatDateTime,
        getStatusText,
        getTypeText,

        createQr,
        cancelDeposit,
        getWithdraw
    }
}