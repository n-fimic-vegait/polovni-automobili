import { CategoryHeader } from './components/atoms/CategoryHeader'
import { Header } from './components/molecules/Header'
import { SearchFormHeader } from './components/molecules/SearchFormHeader'
import { SearchForm } from './components/organism/SearchForm'
import prvi_servis_ad from './assets/images/prvi_servis_ad.png'
import { CarPreviewsGrid } from './components/molecules/CarPreviewsGrid'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import {
  ContentSlider,
  ContentSliderType,
} from './components/molecules/ContentSlider'
import { carPreviewsMockData } from './data/carPreviewsMockData'
import novi_zdravstveno_ad from './assets/images/novi_zdravstveno_ad.png'
import { businessSellersMockData } from './data/businessSellersMockData'
import { Footer } from './components/molecules/Footer'
import { NewsSection } from './components/organism/NewsSection'
import { CarBuyingGuidePreview } from './components/molecules/CarBuyingGuidePreview'

function App() {
  const [carPreviews, setCarPreviews] = useState([] as any[])

  useEffect(() => {
    const getCarPreviews = async () => {
      // const response = await fetch(
      //   'https://3293-94-230-189-114.eu.ngrok.io/cars'
      // )
      // const cars = await response.json()
      // for (let i = 0; i < 3; i++) {
      //   cars.push(...cars)
      // }
      // const shuffledCars = shuffle(cars)
      // setCarPreviews(shuffledCars)

      const cars = carPreviewsMockData
      const shuffledCars = shuffle(cars)

      setCarPreviews(shuffledCars)
    }
    getCarPreviews()
  }, [])

  return (
    <>
      <Header />
      <div>
        <div
          className={`bg-[url('./assets/images/searchBackground.png')] pb-8`}
        >
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
            <CarPreviewsGrid cars={carPreviews} />
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
                  <ContentSlider
                    content={carPreviews}
                    title='Vozila sa sniženom cenom u prethodnih 7 dana'
                    type={ContentSliderType.DISCOUNTED_CARS}
                  />
                </div>
                <ContentSlider
                  content={carPreviews}
                  title='Prodato u poslednja 24h'
                  type={ContentSliderType.SOLD_CARS}
                />
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

        <div className='bg-gray-900 p-2'>
          <div className={`max-w-screen-xl mx-auto`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
