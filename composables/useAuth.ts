import { werify } from '@werify/id-ts'

const auth = werify()
auth.config.baseURL = 'https://api.trader4.net'

export const useAuth = async (payload: string) => {
    return auth.requestOTP(payload).then(res => {
        return { data: res.results, error: null }
    }).catch(err => {
        return { error: err, data: null }
    })
}