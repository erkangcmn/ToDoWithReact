import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'

export const BASE_URL = 'http://todoapp.teknozip.com:3000'
// export const BASE_URL = 'http://192.168.1.11:3000'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
})

axiosInstance.interceptors.request.use(async (config) => {
    // const token = await AsyncStorage.getItem('@user_token')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjJiMTQ2M2ZhNTMyMjQ3N2NlYTEwYiIsImlhdCI6MTYxMzExNzg5OX0.MiT48JKluK8Z7wi3R9PMnnjzaObpFukpJmxQBozfiE0"
    if (token !== null && token !== '') {
        config.headers.common['x-access-token'] = token
    }
    return config
},
    err => Promise.reject(err),
)

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    },
)

export { axiosInstance }
