import HeroImage from '../../assets/hero-image.svg'
import { BsDiscord } from 'react-icons/bs'

export const Hero = () => {
  return (
    <main className="flex lg:h-screen py-10">
      <div className="w-full flex items-center">
        <div>
          <div>
            <p className="sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#bb2c60] to-[#322c6fa6]">
              Descubre el
            </p>
            <p className="sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6d2c6f] to-[#2b2662] py-1">
              mundo del
            </p>
            <h1 className="sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#FFBFBF]">
              desarrollo{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2b2662] to-[#532c6f]">
                web
              </span>
            </h1>
          </div>
          <p className="text-white sm:text-[16px] text-[12px] font-semibold my-5 sm:w-2/3">
            Descubre cómo construir sitios web impresionantes, aprende acerca de
            las mejores prácticas de desarrollo web, y mantente al día con las
            últimas noticias y tendencias del sector, todo en un solo lugar.
          </p>
          <button className="sm:w-[250px] w-[180px] bg-gradient-to-b from-[#ffffff] to-[#909090] py-2 px-5 rounded-[15px] flex items-center sm:text-xl text-lg font-semibold">
            <BsDiscord className="text-5xl text-[#3D3D3D]" />
            <span className="leading-6">Comunidad de discord</span>
          </button>
          <p className="text-white sm:text-[16px] text-[12px] font-semibold my-5 w-1/2">
            Únete a nuestra comunidad de discord para informarte de todas las
            novedades.
          </p>
        </div>
      </div>
      <div className="w-full lg:flex hidden">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </main>
  )
}
