import { API } from '../../constants'
import { localAPI } from './'
import { validateError } from '../../utils'

export const localAPIInterceptor = () => {
  // Request
  const updateHeaders = (request) => {
    const newHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    request.headers = newHeaders
  }

  const setBaseUrl = (request) => {
    request.baseURL = API.URL
  }

  const setTimeout = (request) => {
    request.timeout = API.TIMEOUT
  }

  localAPI.interceptors.request.use((request) => {
    setBaseUrl(request)
    setTimeout(request)
    updateHeaders(request)
    return request
  })

  // Response
  const handleSuccess = (response) => response

  const handleError = (error) => {
    return { error: validateError(error.code) }
  }

  localAPI.interceptors.response.use(handleSuccess, handleError)
}
