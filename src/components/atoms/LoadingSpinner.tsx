import logo_anniversary_car1 from './../../assets/images/logo-anniversary-car1.svg'

export const LoadingSpinner = () => {
  return (
    <div>
      <img
        src={logo_anniversary_car1}
        className='aspect-square w-28 animate-ping relative top-1/2 left-1/2'
        alt='spinner'
      />
    </div>
  )
}
