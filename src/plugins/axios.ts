import { getAccessToken, logout } from '@/jwt/jwtService.js'
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_BACKEND, //server
  timeout: 20000,

  headers: { Accept: 'application/json' },
})

//send token
axiosIns.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token && config.headers) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (
        window.location.pathname !== '/sign-in' &&
        window.location.pathname !== '/sign-up'
      ) {
        window.location.href = '/sign-in'
        logout()
      }
    }

    return Promise.reject(error)
  }
)

export default axiosIns
