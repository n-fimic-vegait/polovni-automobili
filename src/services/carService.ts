import axios from 'axios'
import { ICar } from '../model/ICar'

export const getCarPreviews = () => {
  return axios.get<ICar[]>(process.env.REACT_APP_BACKEND_URL + '/cars')
}
