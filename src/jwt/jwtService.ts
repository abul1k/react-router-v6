import $axios from '@/plugins/axios'
import { ILoginData, IRegisterData } from '@/views/auth/interface'
import { IUserData } from './interface'
import { redirect } from 'react-router-dom'
import {
  loginEndpoint,
  refreshEndpoint,
  refreshTokenKeyName,
  registerEndpoint,
  tokenKeyName,
  userKeyName,
} from './jwt.config'

export async function login(
  args: ILoginData
): Promise<{ data: { access: string; refresh: string } }> {
  const { data } = await $axios.post(loginEndpoint, args)
  setAccessToken(data.access)
  setRefreshToken(data.refresh)
  setUserData(data.data)

  return data
}

export function logout() {
  document.cookie = 'access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  redirect('/login')
}

export function register(args: IRegisterData): Promise<IUserData> {
  return $axios.post(registerEndpoint, args)
}

export function setAccessToken(value: object): void {
  setCookie(tokenKeyName, value, 7)
}

export function getAccessToken() {
  return getCookie(tokenKeyName)
}

export function setRefreshToken(value: object): void {
  setCookie(refreshTokenKeyName, value, 7)
}

export function getRefreshToken() {
  return getCookie(refreshTokenKeyName)
}

export function setUserData(value: object): void {
  setCookie(userKeyName, value, 7)
}

export function getUserData() {
  const cookies = document.cookie.split(';')
  const userCookie = cookies.find((cookie) => cookie.includes('user='))

  if (userCookie) return JSON.parse(userCookie.split('=')[1])
}

export function refreshToken() {
  return $axios.post(refreshEndpoint, {
    refresh: getRefreshToken(),
  })
}

function setCookie(name: string, value: object, expirationDays: number) {
  const date = new Date()
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

function getCookie(name: string) {
  const cookieString = document.cookie
  const cookieArray = cookieString.split('; ')
  for (const cookie of cookieArray) {
    const [key, value] = cookie.split('=')
    if (key === name) {
      return value
    }
  }
  return null
}
