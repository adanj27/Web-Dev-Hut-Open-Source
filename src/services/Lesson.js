import { API } from '../constants'
import { localAPI } from '../axios'

export const Lesson = {
  getByIdentifier: (identifier) =>
    localAPI.get(API.ENDPOINTS.LESSON_BY_IDENTIFIER(identifier)),
}
