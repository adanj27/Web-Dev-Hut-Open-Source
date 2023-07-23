import { API } from '../constants'
import { localAPI } from '../axios'

export const Contributors = {
  getAll: () => localAPI.get(API.ENDPOINTS.CONTRIBUTORS),
}
