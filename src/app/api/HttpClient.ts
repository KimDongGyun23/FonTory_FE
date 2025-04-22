import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios'

export class HttpClient {
  private readonly client: AxiosInstance
  private accessToken: string | null = null
  private isRefreshing = false
  private failedQueue: Array<{
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
    config: AxiosRequestConfig
  }> = []

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)

    this.onRequest = this.onRequest.bind(this)
    this.onResponse = this.onResponse.bind(this)
    this.onError = this.onError.bind(this)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  get<T>(...args: Parameters<typeof this.client.get>): Promise<T> {
    return this.client.get(...args)
  }

  post<T>(...args: Parameters<typeof this.client.post>): Promise<T> {
    return this.client.post(...args)
  }

  put<T>(...args: Parameters<typeof this.client.put>): Promise<T> {
    return this.client.put(...args)
  }

  patch<T>(...args: Parameters<typeof this.client.patch>): Promise<T> {
    return this.client.patch(...args)
  }

  delete<T>(...args: Parameters<typeof this.client.delete>): Promise<T> {
    return this.client.delete(...args)
  }

  private onRequest(config: InternalAxiosRequestConfig) {
    if (this.accessToken) config.headers.Authorization = this.accessToken
    else config.headers.Authorization = ''

    return config
  }

  private onResponse(response: AxiosResponse) {
    return response.data
  }

  private async onError(error: AxiosError) {
    const originalRequest = error.config as InternalAxiosRequestConfig

    if (isAxiosError(error) && error.response?.status === 401) {
      if (this.isRefreshing) {
        return new Promise((resolve, reject) => {
          this.failedQueue.push({ resolve, reject, config: originalRequest })
        })
      }

      this.isRefreshing = true

      try {
        // 토큰 재발급

        return this.client(originalRequest)
      } catch (refreshError) {
        this.failedQueue.forEach(({ reject }) => reject(refreshError))
        this.failedQueue = []
        sessionStorage.clear()

        throw refreshError
      } finally {
        this.isRefreshing = false
      }
    }

    return Promise.reject<AxiosError>(error)
  }
}
