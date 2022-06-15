import { Button } from '../atoms/Button'
import vodicZaKupovinu from './../../assets/images/vodicZaKupovinu.png'
import novi_zdravstveno_ad from './../../mock/images/novi_zdravstveno_ad.png'

export const CarBuyingGuidePreview = () => {
  return (
    <div className='flex md:flex-row flex-col gap-6 items-center'>
      <div className='lg:w-1/2 md:w-2/3 w-full flex gap-6'>
        <img
          className='h-[80px] w-[87px]'
          src={vodicZaKupovinu}
          alt='vodic za kupovinu'
        />
        <div>
          <h1 className='text-2xl font-bold text-baby-blue pb-4'>
            Vodič za kupovinu automobila
          </h1>
          <h2 className='font-semibold text-lg leading-5'>
            Koji model je po tvojoj meri? Koliki su realni troškovi pri
            kupovini? Saznaj šta te sve čeka na putu do tvog idealnog
            automobila.
          </h2>
        </div>
      </div>
      <div className='lg:w-1/4 md:w-1/3 w-full '>
        <Button className='w-full border border-baby-blue text-baby-blue hover:text-white hover:bg-baby-blue transition'>
          PRELISTAJ VODIČ
        </Button>
      </div>
      <div className='w-1/4 lg:block hidden'>
        <a href='/ad'>
          <img src={novi_zdravstveno_ad} alt='ad' />
        </a>
      </div>
    </div>
  )
}
