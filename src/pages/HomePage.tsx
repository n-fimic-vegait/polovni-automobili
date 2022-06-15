import { CategoryHeader } from '../components/atoms/CategoryHeader'
import { LoadingSpinner } from '../components/atoms/LoadingSpinner'
import { CarBuyingGuidePreview } from '../components/molecules/CarBuyingGuidePreview'
import { CarPreviewsGrid } from '../components/molecules/CarPreviewsGrid'
import {
  ContentSlider,
  ContentSliderType,
} from '../components/molecules/ContentSlider'
import { SearchFormHeader } from '../components/molecules/SearchFormHeader'
import { NewsSection } from '../components/organism/NewsSection'
import { SearchForm } from '../components/organism/SearchForm'
import usePreviewCars from '../hooks/usePreviewCars'
import { businessSellersMockData } from '../mock/businessSellersMockData'
import novi_zdravstveno_ad from './../mock/images/novi_zdravstveno_ad.png'
import prvi_servis_ad from './../mock/images/prvi_servis_ad.png'

export const HomePage = () => {
  const { status, data: carPreviews } = usePreviewCars()

  return (
    <>
      <div className={`bg-[url('./assets/images/searchBackground.png')] pb-8`}>
        <div className={`max-w-screen-xl mx-auto`}>
          <CategoryHeader />
          <div className='flex gap-8'>
            <div className='lg:w-3/4 w-full shadow-2xl'>
              <SearchFormHeader />
              <SearchForm />
            </div>
            <div className='w-1/4 lg:block hidden'>
              <a href='/ad'>
                <img src={prvi_servis_ad} alt='ad' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pa-gray'>
        <div className={`max-w-screen-xl mx-auto`}>
          {status === 'error' && (
            <h1> AN ERROR OCCURED WHILE FETCHING CARS </h1>
          )}
          {status === 'loading' && (
            <div className='relative'>
              <LoadingSpinner />
            </div>
          )}
          {status === 'success' && <CarPreviewsGrid cars={carPreviews} />}
        </div>
      </div>
      <div className={`max-w-screen-xl mx-auto`}>
        <div className='pb-6 bg-white'>
          <ContentSlider
            content={businessSellersMockData}
            title='Biznis prodavci – pravna lica'
            type={ContentSliderType.BUSINESS_SELLERS}
          />
        </div>
      </div>
      <div className='bg-pa-gray py-6'>
        <div className={`max-w-screen-xl mx-auto`}>
          <div className='flex gap-8'>
            <div className='lg:w-3/4 w-full relative'>
              <div className='mb-14'>
                {status === 'loading' && (
                  <h1 className='text-6xl'> LOADING... </h1>
                )}

                {status === 'success' && (
                  <ContentSlider
                    content={carPreviews}
                    title='Vozila sa sniženom cenom u prethodnih 7 dana'
                    type={ContentSliderType.DISCOUNTED_CARS}
                  />
                )}
              </div>
              {status === 'loading' && (
                <h1 className='text-6xl'> LOADING... </h1>
              )}

              {status === 'success' && (
                <ContentSlider
                  content={carPreviews}
                  title='Prodato u poslednja 24h'
                  type={ContentSliderType.SOLD_CARS}
                />
              )}
            </div>
            <div className='w-1/4 lg:block hidden'>
              <a href='/ad'>
                <img src={novi_zdravstveno_ad} alt='ad' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pa-gray'>
        <div className={`max-w-screen-xl mx-auto py-10`}>
          <NewsSection />
        </div>
      </div>

      <div className='p-6'>
        <div className={`max-w-screen-xl mx-auto`}>
          <CarBuyingGuidePreview />
        </div>
      </div>
    </>
  )
}
