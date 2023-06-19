import { localAPI } from '../axios'
import { API } from '../constants'

export const getContributors = async () => {
  try {
    const { data: contributors } = await localAPI.get(
      API.ENDPOINTS.CONTRIBUTORS
    )
    return { contributors }
  } catch (err) {
    console.error(err)
  }
}
