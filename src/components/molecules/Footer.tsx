import { infostudSites } from '../../data/infostudSites'
import { mostSearchedModelsMockData } from '../../data/mostSearchedModelsMockData'
import { Button } from '../atoms/Button'
import { SocialIconsList } from '../atoms/SocialIconsList'
import app_store from './../../assets/images/app-stores/app-store.png'
import google_play from './../../assets/images/app-stores/google-play.png'
import huawei_store from './../../assets/images/app-stores/huawei-store.png'
import logo_anniversary_car1 from './../../assets/images/logo-anniversary-car1.svg'
import infostud_logo from './../../assets/images/infostud-logo.png'
import { FooterQuickLinksList } from '../atoms/FooterQuickLinksList'

export const Footer = () => {
  return (
    <div className='text-white p-3'>
      <div className='flex sm:flex-row flex-col gap-12 border-b-2 border-gray-500 pb-10'>
        <div className='sm:w-1/2 w-full sm:text-left text-center'>
          <h1 className='text-gray-400 text-2xl font-semibold py-3'>
            Najtraženiji modeli
          </h1>
          <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 text-gray-400'>
            {mostSearchedModelsMockData.map((model, index) => (
              <a href={`/${model}`} key={index}>
                <div className='text-center flex items-center justify-center bg-black p-2 hover:text-gray-200 rounded-md'>
                  {model}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='sm:w-1/4 w-full sm:text-left text-center'>
          <h1 className='text-gray-400 text-2xl font-semibold py-3'>
            Brzi linkovi
          </h1>
          <ul className='flex flex-col gap-3 text-sm'>
            <FooterQuickLinksList />
          </ul>
        </div>
        <div className='sm:w-1/4 w-full sm:text-left text-center flex flex-col sm:items-start items-center'>
          <h1 className='text-gray-400 text-2xl font-semibold py-3'>
            Kontakt redakcije sajta
          </h1>
          <Button className='border border-pa-orange text-pa-orange hover:bg-gray-700 w-44'>
            Kontaktiraj nas
          </Button>
          <div className='flex'>
            <SocialIconsList />
          </div>
          <div className='flex flex-col gap-3 mt-6'>
            <img className='w-[123px]' src={google_play} alt='google_play' />
            <img className='w-[123px]' src={app_store} alt='app_store' />
            <img className='w-[123px]' src={huawei_store} alt='huawei_store' />
          </div>
        </div>
      </div>
      <div className='flex text-xs text-center gap-20 pt-8 text-gray-400'>
        <img
          className='w-1/12 sm:block hidden'
          src={logo_anniversary_car1}
          alt='logo'
        />
        <div className='sm:w-11/12 w-full'>
          <p className='mb-4'>
            Sadržaj sajta polovniautomobili.com je vlasništvo Infostuda.
            Zabranjeno je njegovo preuzimanje bez dozvole Infostuda, zarad
            komercijalne upotrebe ili u druge svrhe, osim za lične potrebe
            posetilaca sajta. Sajt Polovni Automobili je deo Infostud grupe.
          </p>
          <div className='mb-4'>
            {infostudSites.map((site) => (
              <a href={site} key={site}>
                {site}
              </a>
            ))}
          </div>
          <div>
            Copyright ©
            <img src={infostud_logo} alt='infostud logo' width='80px' /> 2000 -
            2022
          </div>
        </div>
      </div>
    </div>
  )
}
