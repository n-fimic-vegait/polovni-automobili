import { useQuery } from 'react-query'
import { getCarPreviews } from '../services/carService'

export default function usePreviewCars() {
  return useQuery('previewCars', async () => {
    const { data } = await getCarPreviews()
    return data
  })
}
