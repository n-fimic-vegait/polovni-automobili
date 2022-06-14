import logo from './../../assets/images/logo-anniversary-car1.svg'
import eighteenYears from './../../assets/images/logo-anniversary-18-1.svg'
import { GiCityCar, GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDownSFill, RiSearchLine } from 'react-icons/ri'
import { Sidemenu } from '../organism/Sidemenu'
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { SocialIconsList } from '../atoms/SocialIconsList'

export const Header = () => {
  const [showSidemenu, setShowSidemenu] = useState(false)

  const handleSetShowMenu = (showMenu: boolean) => {
    setShowSidemenu(showMenu)
  }

  return (
    <>
      <div className='bg-gray-800 text-white'>
        <div className='flex justify-between lg:p-3 px-3 py-1 mx-auto max-w-screen-xl'>
          <div className='flex items-center'>
            <img className='lg:w-16 w-10 mr-3' src={logo} alt='logo' />
            <img
              className='lg:w-44 w-28'
              src={eighteenYears}
              alt='anniversary'
            />
          </div>
          <div className='hidden lg:flex flex-row items-center'>
            <SocialIconsList />
          </div>
          <div>
            <div className='hidden lg:flex items-center text-sm gap-6'>
              <a
                href='/login'
                className='flex items-center gap-1 hover:text-pa-orange'
              >
                <div>
                  <span className='block'>PRIJAVI SE </span>
                  <span className='text-xs'> Moj profil </span>
                </div>
                <RiArrowDownSFill className='text-pa-orange' size='1.5em' />
              </a>
              <a href='/registracija' className='hover:text-pa-orange'>
                REGISTRUJ SE
              </a>
              <Button className='bg-baby-blue px-4 py-3 rounded-md hover:opacity-90 text-shadow'>
                POSTAVI OGLAS
              </Button>
            </div>
            <div className='lg:hidden'>
              <GiCityCar
                className='-scale-x-100 mx-2 text-pa-orange'
                size='3em'
              />
              <RiSearchLine className='mx-2 text-pa-orange' size='1.8em' />
              <GiHamburgerMenu
                className='mx-2 text-pa-orange'
                size='1.8em'
                onClick={() => setShowSidemenu(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Sidemenu showMenu={showSidemenu} setShowMenu={handleSetShowMenu} />
    </>
  )
}
