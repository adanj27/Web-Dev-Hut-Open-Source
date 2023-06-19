import axios from 'axios'

import { API } from '../constants'

export const localAPI = axios.create({
  baseURL: API.URL,
  timeout: API.TIMEOUT,
  headers: {
    Accept: 'application/json',
  },
})
