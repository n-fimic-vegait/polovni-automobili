import { BsHouseFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { BiExport } from 'react-icons/bi'
import { SidemenuOption } from '../atoms/SidemenuOption'

export const SidemenuOptions = () => {
  return (
    <ul className='text-lg'>
      <SidemenuOption iconLeft={<BsHouseFill />}> Naslovna </SidemenuOption>
      <SidemenuOption iconLeft={<FaEdit />}> Postavi oglas </SidemenuOption>
      <SidemenuOption> Moj profil </SidemenuOption>
      <SidemenuOption> Sačuvane pretrage </SidemenuOption>
      <SidemenuOption> Ponuda za oglašavanje </SidemenuOption>
      <SidemenuOption> Usluge i krediti </SidemenuOption>
      <SidemenuOption> Prodajem </SidemenuOption>
      <SidemenuOption> Brza pretraga </SidemenuOption>
      <SidemenuOption> Saveti, vesti i video </SidemenuOption>
      <SidemenuOption iconLeft={<BiExport />}> Auto osiguranje </SidemenuOption>
      <SidemenuOption> Moja garaža </SidemenuOption>
    </ul>
  )
}
