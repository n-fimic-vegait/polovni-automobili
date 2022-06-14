import { FC, useEffect, useRef } from 'react'
import { Button } from '../atoms/Button'
import { FaUserAlt, FaFacebook } from 'react-icons/fa'
import { SidemenuOptions } from '../molecules/SidemenuOptions'

interface SidemenuProps {
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
}

export const Sidemenu: FC<SidemenuProps> = ({ showMenu, setShowMenu }) => {
  const domeNode = useRef<HTMLDivElement>(null)
  const updateState = (event: MouseEvent) => {
    if (domeNode.current?.contains(event.target as Node)) {
      return
    }
    setShowMenu(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', updateState)
    return () => {
      document.removeEventListener('mousedown', updateState)
    }
  }, [])

  return (
    <div
      ref={domeNode}
      className={`${
        showMenu ? 'translate-x-0 ' : 'translate-x-full'
      } fixed top-0 right-0 h-full bg-gray-900 bg-opacity-90 ease-in-out duration-300 text-white z-50`}
    >
      <div className='px-4 border-b border-gray-600'>
        <Button
          className='bg-pa-orange text-black w-full'
          iconRight={<FaUserAlt />}
        >
          Uloguj se
        </Button>
        <Button className='bg-facebook-blue w-full' iconRight={<FaFacebook />}>
          Prijavi se putem Facebook-a
        </Button>
        <p className='text-center'> ili </p>
        <Button className='bg-pa-red w-full'> Registruj se </Button>
      </div>
      <SidemenuOptions />
    </div>
  )
}
