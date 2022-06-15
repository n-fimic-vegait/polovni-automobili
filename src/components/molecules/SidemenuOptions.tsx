import { BsHouseFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { BiExport } from 'react-icons/bi'
import { SidemenuOption } from '../atoms/SidemenuOption'

export const SidemenuOptions = () => {
  return (
    <ul className='text-lg'>
      <SidemenuOption href='' iconLeft={<BsHouseFill />}>
        Naslovna
      </SidemenuOption>
      <SidemenuOption href='' iconLeft={<FaEdit />}>
        Postavi oglas
      </SidemenuOption>
      <SidemenuOption href=''> Moj profil </SidemenuOption>
      <SidemenuOption href=''> Sačuvane pretrage </SidemenuOption>
      <SidemenuOption href=''> Ponuda za oglašavanje </SidemenuOption>
      <SidemenuOption href=''> Usluge i krediti </SidemenuOption>
      <SidemenuOption href=''> Prodajem </SidemenuOption>
      <SidemenuOption href=''> Brza pretraga </SidemenuOption>
      <SidemenuOption href=''> Saveti, vesti i video </SidemenuOption>
      <SidemenuOption href='' iconLeft={<BiExport />}>
        Auto osiguranje
      </SidemenuOption>
      <SidemenuOption href=''> Moja garaža </SidemenuOption>
    </ul>
  )
}
