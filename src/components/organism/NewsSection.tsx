import { MdKeyboardArrowRight } from 'react-icons/md'
import { newsMockData } from '../../data/newsMockData'
import videoSaveti from './../../assets/images/videoSaveti.png'

export const NewsSection = () => {
  return (
    <div className='flex md:flex-row flex-col gap-8 p-2 relative'>
      <img
        className='absolute top-16 -left-28'
        src={videoSaveti}
        alt='video saveti'
      />
      <div className='md:w-1/2 w-full flex flex-col justify-between z-10'>
        <div>
          <div className='md:text-left text-center'>
            <h1 className='text-2xl font-bold py-2'> VIDEO Auto test </h1>
            <h2 className='font-semibold py-2'>
              BMW 520d E60 - Kakva je „petica“ pete generacije? | Auto test
              Polovni automobili
            </h2>
          </div>
          <iframe
            className='aspect-video'
            frameBorder='0'
            allowFullScreen={true}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title='YouTube video player'
            width='100%'
            src='https://www.youtube.com/embed/pTJEcBPW4zo'
          />
        </div>
        <div className='text-right text-baby-blue'>
          <a href='/auto-testovi'>
            Ostali auto testovi <MdKeyboardArrowRight size='1.4em' />
          </a>
        </div>
      </div>
      <div className='flex md:w-1/2 w-full flex-col'>
        <h1 className='text-2xl font-bold py-2 md:text-left text-center'>
          Saveti i vesti
        </h1>
        <div className='flex gap-8'>
          <div className='w-1/2 flex flex-col justify-between'>
            <div>
              <a href='/vest'>
                <img
                  className='border-2 border-white'
                  src={newsMockData[0].image}
                  alt='news'
                />
                <h1 className='text-baby-blue py-3'>{newsMockData[0].title}</h1>
              </a>
              <p className='text-sm'> {newsMockData[0].content} </p>
            </div>
            <div className='text-right text-baby-blue'>
              <a href='/auto-testovi'>
                Pročitaj vest
                <MdKeyboardArrowRight size='1.4em' />
              </a>
            </div>
          </div>

          <div className='w-1/2 flex flex-col justify-between'>
            <div>
              {newsMockData.map((news, index) => (
                <div key={index}>
                  {index !== 0 && (
                    <div
                      className={`flex gap-2 py-4 ${
                        index === 2 ? 'border border-y-gray-400' : ''
                      }`}
                    >
                      <div className='w-1/4'>
                        <img
                          className='border-2 border-white'
                          src={news.image}
                          alt='news'
                        />
                      </div>
                      <h1 className='w-3/4 text-baby-blue'>{news.title}</h1>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='text-right text-baby-blue'>
              <a href='/auto-testovi'>
                Ostali saveti i vesti <MdKeyboardArrowRight size='1.4em' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
