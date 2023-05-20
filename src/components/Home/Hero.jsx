import { BsDiscord } from 'react-icons/bs'

import HeroImage from '../../assets/hero-image.svg'

import { SectionBg } from '../SectionBg'

export const Hero = () => {
  return (
    <div className="pt-32 xl:pt-44 -mt-36 xl:-mt-44 lg:min-h-screen bg-gradient-to-br from-[#31109B] to-[#907EC8]">
      <SectionBg image="/img/hero-bg.svg" />

      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className="w-full flex items-start relative z-10">
          <div>
            <div>
              <h1 className="text-5xl max-w-xs sm:text-6xl sm:max-w-md font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#961946] to-[#322C6F]">
                Explora el mundo del{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#FFBFBF]">
                  desarrollo
                </span>{' '}
                web
              </h1>
            </div>
            <p className="text-[#f1f1f1] text-base sm:text-lg my-5 sm:w-2/3">
              Descubre cómo construir sitios web impresionantes, aprende acerca
              de las mejores prácticas de desarrollo web, y mantente al día con
              las últimas noticias y tendencias del sector, todo en un solo
              lugar.
            </p>
            <button className="sm:w-[250px] w-[180px] bg-gradient-to-b from-[#ffffff] to-[#909090] py-2 px-5 rounded-[15px] flex items-center sm:text-xl text-lg font-semibold">
              <BsDiscord className="text-5xl text-[#3D3D3D]" />
              <span className="leading-6">Comunidad de discord</span>
            </button>
            <p className="text-[#f1f1f1] text-base sm:text-lg my-5 w-1/2">
              Únete a nuestra comunidad de discord para informarte de todas las
              novedades.
            </p>
          </div>

          <div className="w-full lg:block hidden">
            <img src={HeroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
