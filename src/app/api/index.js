import axios from 'axios'

import HttpClient from './HttpClient'

const BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_DOMAIN
const ETC_CODE = import.meta.env.VITE_PUBLIC_ETC

export const instanceWithoutAuth = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const instance = new HttpClient({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authentication: ETC_CODE,
  },
  withCredentials: true,
})
