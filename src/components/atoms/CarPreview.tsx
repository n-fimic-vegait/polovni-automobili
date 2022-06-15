import { FC } from 'react'
import { ICar } from '../../model/ICar'
import { Link } from 'react-router-dom'

interface CarPreviewProps {
  car: ICar
  discount?: boolean
}

export const CarPreview: FC<CarPreviewProps> = ({ car, discount }) => {
  return (
    <Link
      to='/carId'
      style={{ boxShadow: '2px 2px 10px gray' }}
      className='rounded-lg bg-white h-full'
    >
      {/* <img
        className='rounded-t-lg w-full'
        src={car.images[0]}
        alt='car thumbnail'
      /> */}
      <div
        style={{ backgroundImage: `url(${car.images[0]})` }}
        className={`relative rounded-t-lg bg-cover bg-no-repeat bg-center aspect-video`}
      >
        {discount && (
          <>
            <div className='absolute top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-pa-red'></div>
            <span className='absolute top-2 left-2  bg-pa-red text-white rounded-md p-1'>
              %
            </span>
          </>
        )}
      </div>
      <div className='p-1'>
        <span className='text-sm font-semibold'>
          {car.carBrand} {car.carModel}
        </span>
        <div className='flex justify-between'>
          <span className={`font-bold ${discount ? ' text-pa-red' : ''}`}>
            {car.price} €
          </span>
          <span className='text-sm text-gray-500'>
            {car.productionYear}. god
          </span>
        </div>
      </div>
    </Link>
  )
}
