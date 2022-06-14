import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { FC } from 'react'
import { ICar } from '../../model/ICar'
import { CarPreview } from '../atoms/CarPreview'
import 'swiper/css'
import 'swiper/css/navigation'
import stampSold from './../../assets/images/stampSold.png'
import { SellerPreview } from '../atoms/SellerPreview'
import { ISeller } from '../../model/ISeller'

export enum ContentSliderType {
  DISCOUNTED_CARS,
  SOLD_CARS,
  BUSINESS_SELLERS,
}

interface ContentSliderProps {
  type?: ContentSliderType
  title?: string
  content: ICar[] | ISeller[]
}

export const ContentSlider: FC<ContentSliderProps> = ({
  content,
  title,
  type,
}) => {
  return (
    <>
      <h1
        className={`${
          type === ContentSliderType.DISCOUNTED_CARS ? 'text-pa-red' : ''
        }  text-2xl md:text-left text-center font-bold py-6`}
      >
        {title}
      </h1>
      {type === ContentSliderType.SOLD_CARS && (
        <img
          className='absolute -left-14 bottom-16'
          src={stampSold}
          alt='sold stamp img'
        />
      )}
      <Swiper
        style={{ padding: '0.5rem' }}
        breakpoints={{
          1: {
            slidesPerView: 2,
          },
          766: {
            slidesPerView: type === ContentSliderType.BUSINESS_SELLERS ? 7 : 4,
          },
        }}
        spaceBetween={25}
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ boxShadow: 'grey 1px 1px 10px' }}
              className='bg-white rounded-md h-5/6'
            >
              {(type === ContentSliderType.DISCOUNTED_CARS ||
                type === ContentSliderType.SOLD_CARS) && (
                <CarPreview
                  car={item as ICar}
                  key={index}
                  discount={type === ContentSliderType.DISCOUNTED_CARS}
                />
              )}
              {type === ContentSliderType.BUSINESS_SELLERS && (
                <SellerPreview seller={item as ISeller} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
