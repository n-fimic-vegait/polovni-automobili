import { FC } from 'react'
import { ISeller } from '../../model/ISeller'

interface SellerPreviewProps {
  seller: ISeller
}

export const SellerPreview: FC<SellerPreviewProps> = ({ seller }) => {
  return (
    <a
      href='/sellerId'
      className='flex flex-col text-center items-center justify-center aspect-square rounded-md gap-1 p-1'
    >
      {/* <div
        style={{ backgroundImage: `url(${seller.image})` }}
        className='bg-contain bg-no-repeat bg-center h-full w-full'
      /> */}
      <img src={seller.image} alt='seller img' width={'100%'} />
      <h1>
        {seller.name.length < 13
          ? seller.name
          : seller.name.slice(0, 10) + '...'}
      </h1>
      <span> {seller.numOfAds} oglasa </span>
    </a>
  )
}
