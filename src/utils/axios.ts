import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_URL,
})

api.interceptors.request.use(config => {
    const key = import.meta.env.VITE_TMDB_KEY
    config.headers.Authorization = `Bearer ${key}`
    return config
})

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error)
        return error
    }
)
