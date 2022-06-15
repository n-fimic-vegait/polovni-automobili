import { SubmitHandler, useForm } from 'react-hook-form'
import {
  allBrandsOptions,
  bodyMockData,
  fuelMockData,
  modelsMockData,
  regionMockData,
  yearsMockData,
} from '../../mock/searchFormMockData'
import { Button } from '../atoms/Button'
import { GiBackwardTime } from 'react-icons/gi'
import { FaInfoCircle } from 'react-icons/fa'
import { MdDirectionsCar, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

type SearchInputs = {
  brand: string
  model: string
  priceUntil: number
  yearFrom: number
  yearUntil: number
  body: string
  fuel: string
  region: string
  condition: string
  credit: boolean
  leasing: boolean
  warranty: boolean
}

const inputStyle =
  'w-full border border-gray-400 rounded-md p-1 hover:bg-orange-100 hover:border-pa-orange focus:bg-orange-100 focus:border-pa-orange bg-white md:mb-0 mb-3'

const formPartsStyle = 'flex md:flex-row flex-col gap-3 md:mb-6 mb-3'

export const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchInputs>()
  const onSubmit: SubmitHandler<SearchInputs> = (data) => console.log(data)

  return (
    <form
      className='w-full md:bg-white bg-pa-gray md:p-6 p-2 rounded-b-xl md:text-sm text-lg'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={formPartsStyle}>
        <select className={inputStyle} {...register('brand')}>
          <option value=''> Sve marke </option>
          {allBrandsOptions.map((brand) => (
            <option key={brand.value} value={brand.value}>
              {brand.name}
            </option>
          ))}
        </select>

        <select className={inputStyle} {...register('model')}>
          <option> Svi modeli </option>
          {modelsMockData.map((model) => (
            <option key={model.value} value={model.value}>
              {model.name}
            </option>
          ))}
        </select>

        <input
          className={inputStyle}
          type='number'
          placeholder='Cena do'
          {...register('priceUntil')}
        />
      </div>
      <div className={formPartsStyle}>
        <div className='flex w-full gap-4'>
          <select className={inputStyle} {...register('yearFrom')}>
            <option> Godište od </option>
            {yearsMockData.map((year) => (
              <option key={year}> {year} </option>
            ))}
          </select>
          <select className={inputStyle} {...register('yearUntil')}>
            <option> do </option>
            {yearsMockData.map((year) => (
              <option key={year}> {year} </option>
            ))}
          </select>
        </div>
        <div className='flex w-full gap-2 items-center'>
          <>
            <select className={inputStyle} {...register('body')}>
              <option> Karoserija </option>
              {bodyMockData.map((body) => (
                <option key={body.value} value={body.value}>
                  {body.name}
                </option>
              ))}
            </select>
            <FaInfoCircle className='text-pa-orange' size='1.3em' />
          </>
        </div>
        <select className={inputStyle} {...register('fuel')}>
          <option> Gorivo </option>
          {fuelMockData.map((fuel) => (
            <option key={fuel.value} value={fuel.value}>
              {fuel.name}
            </option>
          ))}
        </select>
      </div>
      <div className={formPartsStyle}>
        <select className={inputStyle + ' h-fit'} {...register('region')}>
          <option> Region </option>
          {regionMockData.map((region) => (
            <option key={region.value} value={region.value}>
              {region.name}
            </option>
          ))}
        </select>
        <select className={inputStyle + ' h-fit'} {...register('condition')}>
          <option> Polovna i nova vozila </option>
          <option> Samo polovna vozila </option>
          <option> Samo nova vozila </option>
        </select>
        <Button
          className={`w-full bg-pa-orange text-sm my-0 md:block hidden bg-[url('./assets/images/search-image.png')] bg-no-repeat bg-[top_right_2rem]`}
          type='submit'
        >
          PRETRAGA
        </Button>
      </div>
      <div className={formPartsStyle}>
        <div className='flex items-center gap-1 text-sm w-full'>
          <div className='w-full'>
            <input type='checkbox' {...register('credit')} />
            <label> Kredit</label>
          </div>
          <div className='w-full'>
            <input type='checkbox' {...register('leasing')} />
            <label> Lizing</label>
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm w-full'>
          <div className='w-full'>
            <input type='checkbox' {...register('warranty')} />
            <label> Garancija </label>
          </div>
          <div className='w-full flex md:justify-start justify-end'>
            <Link
              to='/najnoviji-oglasi'
              className='text-blue-600 flex items-center gap-1'
            >
              <GiBackwardTime size='1.2em' /> Najnoviji oglasi
            </Link>
          </div>
        </div>
        <Button
          className={`w-full bg-pa-orange text-sm my-0 md:hidden bg-[url('./assets/images/search-image.png')] bg-no-repeat bg-[top_right_3rem]`}
          type='submit'
        >
          PRETRAGA
        </Button>
        <Button
          className='w-full bg-gray-200 my-0 text-sm hover:bg-gray-300 transition'
          type='button'
        >
          DETALJNA PRETRAGA
        </Button>
      </div>
      <div className='flex md:flex-row flex-col gap-3 mb-6 text-sm items-center'>
        <div className='w-full'>
          <Link
            to='/novi-automobili'
            className='text-blue-600 flex items-center gap-1'
          >
            <MdDirectionsCar size='1.3em' /> Novi automobili
          </Link>
        </div>
        <p className='w-full font-semibold text-center'>
          Sačuvaj pretragu i ubrzaj proces kupovine
        </p>
        <Button className='w-full my-0 border border-pa-orange text-pa-orange hover:bg-pa-orange bg-white hover:text-white transition'>
          SAČUVANE PRETRAGE
        </Button>
      </div>
      <div className='flex md:flex-row flex-col items-center gap-3 mb-6 text-sm'>
        <p className='md:w-2/3 w-full font-semibold text-lg text-center'>
          POGLEDAJ AKTUELNU PONUDU
        </p>
        <Button
          iconRight={<MdKeyboardArrowRight size='2em' />}
          className='flex items-center justify-center p-1 my-0 md:w-1/3 w-full font-semibold text-white text-md bg-gradient-to-r from-blue-800 to-blue-400'
        >
          <span> DANI NOVIH VOZILA </span>
        </Button>
      </div>
    </form>
  )
}
