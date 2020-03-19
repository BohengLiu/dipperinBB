import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { DEFAULT_TIMEOUT } from 'Global/constants'

/**
 * header config
 */
export interface AxiosInstance {
  basehost?: string
  timeout?: number
  headers?: any
}

export const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

const PREFIX = '/api/v1'

export const createAxiosInstance = (
  token = '',
  { baseURL = PREFIX, timeout = DEFAULT_TIMEOUT, headers = DEFAULT_HEADER }: AxiosRequestConfig
) => {
  const instance = axios.create({
    baseURL,
    headers,
    // method: 'post',
    timeout,
  })
  // const token = window.localStorage.getItem('token')
  instance.interceptors.request.use(
    config => {
      if (token) {
        config.headers.Authorization = token
      }
      return config
    },
    error => Promise.reject(error)
  )

  instance.interceptors.response.use(
    response => Promise.resolve(response.data),
    (error: AxiosError) => {
      // let err: Error
      console.log('request error:', error, error.response)
      return Promise.reject(error.response)
    }
  )
  return instance
}

export const postRequest = (url: string, token?:string, data?: any, config = {}) => {
  const instance = createAxiosInstance(token,config)
  return instance({
    method: 'post',
    url,
    data,
    ...config,
  })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export const getRequest = (url: string, token?: string, params?: any, config = {}) => {
  const instance = createAxiosInstance(token,config)
  return instance({
    method: 'get',
    url,
    params,
    ...config,
  })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}
