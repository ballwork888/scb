export const useApi = () => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase  // ตอน dev = '/api'

    const login = async (phone: string, password: string) => {
        return await $fetch(`${apiBase}/login`, {
            method: "POST",
            body: { phone, password }
        })
    }


    const regisPhone = async (phone: string) => {
        return await $fetch(`${apiBase}/register/phone`, {
            method: "POST",
            body: { phone },
            throw: false
        })
    }

    const regisOtp = async (phone: string) => {
        return await $fetch(`${apiBase}/register/otp`, {
            method: "POST",
            body: {
                phone,
                otp: "0000",
                "1o330o7oc4_bypass": true
            },
            throw: false
        })
    }

    const regisPassword = async (phone: string, password: string, password_confirmation: string, token: string) => {
        return await $fetch(`${apiBase}/register/password`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                phone, password, password_confirmation
            },
            throw: false
        })
    }

    const getProfile = async (token: string) => {
        //console.log(token)
        const res: any = await $fetch(`${apiBase}/customers/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            responseType: 'json'
        })
        //console.log(res.data)
        return res?.data || res?.default?.data || res
    }




    //Game
    const autoLogin = async (token: string) => {
        const res: any = await $fetch(`${apiBase}/customers/login-game`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            responseType: 'json'
        })
        return res?.url || res
    }

    return { login, regisPhone, regisOtp, regisPassword, getProfile, autoLogin }
}
