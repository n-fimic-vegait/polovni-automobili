import { FC } from 'react'
import { ICar } from '../../model/ICar'
import { CarPreview } from '../atoms/CarPreview'

interface CarPreviewsGridProps {
  cars: ICar[]
}

export const CarPreviewsGrid: FC<CarPreviewsGridProps> = ({ cars }) => {
  return (
    <div className='grid lg:grid-cols-6 lg:grid-rows-4 grid-cols-2 md:gap-6 gap-3 md:py-6 py-2'>
      {cars.map((car, index) => (
        <CarPreview car={car} key={index} />
      ))}
    </div>
  )
}
