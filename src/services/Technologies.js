import { API } from '../constants'
import { localAPI } from '../axios'

export const Technologies = {
  getByName: (name) => localAPI.get(API.ENDPOINTS.TECHNOLOGY_BY_NAME(name)),
}
