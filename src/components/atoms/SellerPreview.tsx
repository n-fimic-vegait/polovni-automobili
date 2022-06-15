import { FC } from 'react'
import { ISeller } from '../../model/ISeller'
import { Link } from 'react-router-dom'

interface SellerPreviewProps {
  seller: ISeller
}

export const SellerPreview: FC<SellerPreviewProps> = ({ seller }) => {
  return (
    <Link
      to='/sellerId'
      className='flex flex-col text-center items-center justify-center aspect-square rounded-md gap-1 p-1'
    >
      <img src={seller.image} alt='seller img' width={'100%'} />
      <div className='overflow-hidden text-ellipsis h-6'>
        <h1>{seller.name}</h1>
      </div>
      <span> {seller.numOfAds} oglasa </span>
    </Link>
  )
}
