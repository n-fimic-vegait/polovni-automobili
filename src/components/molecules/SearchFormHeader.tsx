import { GiCityCar, GiCarWheel } from 'react-icons/gi'
import { FaMotorcycle, FaTruck, FaTractor } from 'react-icons/fa'
import { TbBulldozer } from 'react-icons/tb'
import { RiShip2Fill } from 'react-icons/ri'
import { MdOutlinePedalBike } from 'react-icons/md'
import { AiFillTool } from 'react-icons/ai'
import { useState } from 'react'

const iconsProps = {
  className: '-scale-x-100',
  size: '2.5em',
}

const liClassName =
  'flex-grow hover:text-pa-orange hover:bg-white transition bg-gray-300 p-2 py-3 cursor-pointer'
const liClassNameSelected =
  'flex-grow text-pa-orange bg-white transition p-2 py-3 cursor-pointer'

export const SearchFormHeader = () => {
  const [selected, setSelected] = useState(1)

  const handleSelect = (categoryNum: number) => {
    setSelected(categoryNum)
  }

  return (
    <ul className='hidden lg:flex flex-row items-center justify-between text-center'>
      <li
        onClick={() => handleSelect(0)}
        className={
          selected === 0
            ? liClassNameSelected +
              ' flex rounded-tl-lg items-center justify-center gap-1'
            : liClassName +
              ' flex rounded-tl-lg items-center justify-center gap-1'
        }
      >
        <AiFillTool {...iconsProps} size='2em' />
        <GiCarWheel {...iconsProps} size='2em' />
        <span className='leading-5 font-bold'>
          Delovi i <br /> oprema
        </span>
      </li>
      <li
        onClick={() => handleSelect(1)}
        className={selected === 1 ? liClassNameSelected : liClassName}
      >
        <GiCityCar {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(2)}
        className={selected === 2 ? liClassNameSelected : liClassName}
      >
        <FaMotorcycle {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(3)}
        className={selected === 3 ? liClassNameSelected : liClassName}
      >
        <FaTruck {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(4)}
        className={selected === 4 ? liClassNameSelected : liClassName}
      >
        <FaTractor {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(5)}
        className={selected === 5 ? liClassNameSelected : liClassName}
      >
        <TbBulldozer {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(6)}
        className={selected === 6 ? liClassNameSelected : liClassName}
      >
        <RiShip2Fill {...iconsProps} />
      </li>
      <li
        onClick={() => handleSelect(7)}
        className={
          selected === 7
            ? liClassNameSelected + ' rounded-tr-lg'
            : liClassName + ' rounded-tr-lg'
        }
      >
        <MdOutlinePedalBike {...iconsProps} />
      </li>
    </ul>
  )
}
