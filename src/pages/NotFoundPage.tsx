import polovniautomobili_logo from './../assets/images/polovniautomobili-logo.svg'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div
      className={`bg-[url('./assets/images/not-found/background-404.jpg')] w-screen h-screen bg-cover bg-center`}
    >
      <Link to='/'>
        <img
          className='m-8'
          src={polovniautomobili_logo}
          alt='polovniautomobili logo'
        />
      </Link>
      <div
        className={`md:bg-[url('./assets/images/not-found/peugeot-404.jpg')] bg-white md:w-5/6 w-11/12 mx-auto bg-right-bottom bg-no-repeat p-8 rounded-xl`}
      >
        <div className='md:max-w-xs'>
          <h1 className='text-4xl font-semibold'> 404 </h1>
          <div className='text-xl leading-5'>
            <p> Hm... </p>
            <p>
              baš smo se trudili da vam je pronađemo ali strana koju tražite ne
              postoji. Krenite ponovo od
              <Link to='/' className='text-blue-600'>
                {' '}
                naslovne
              </Link>
            </p>
          </div>
          <div className='mt-28 mb-10 p-4 text-sm bg-white bg-opacity-90'>
            <p>Peugeot 404 (1960-1975.)</p>
            <p>
              Peugeot 404 je veliki porodični automobil proizveden od strane
              francuskog proizvođača automobilia "Peugeot" od 1960. do 1975.
              godine. Dizajniran od strane Pininfarine, četristotinečetvorka se
              mogla naći u obliku limuzine, karavana i pick up-a. Popularan kao
              taxi vozilo, Peugeot 404, uživao je u reputaciji vozila izuzetne
              vrednosti i izdržljivosti. Peugeot-ova proizvodnja od 1 847 568.
              komada 404-ke se završila 1975.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
