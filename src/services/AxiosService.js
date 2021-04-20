import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=IUVppXRyUWGFrtq65HEODEJwEvomFIutHf7sfGJr&date=',
  timeout: 3000
})
