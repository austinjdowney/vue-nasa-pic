import { AppState } from '../AppState'
import Nasa from '../models/Nasa'
import { nasaApi } from './AxiosService'

class NasasService {
  async getNasas (query) {
    const res = await nasaApi.get(query)
    AppState.apod = res.data.apod.map(n => new Nasa(n))
  }
}

export const nasasService = new NasasService()
