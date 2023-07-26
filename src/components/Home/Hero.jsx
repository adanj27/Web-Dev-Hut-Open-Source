import { BsDiscord } from 'react-icons/bs'

import HeroImage from '../../assets/hero-image.svg'

import { Headline, Paragraph, SectionBg } from '../'

export const Hero = () => {
  return (
    <div className="pt-32 xl:pt-44 -mt-36 xl:-mt-44 lg:min-h-screen bg-gradient-to-br from-[#31109B] to-[#907EC8]">
      <SectionBg image="/img/hero-bg.svg" />

      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <div className="w-full flex items-start relative z-10">
          <div>
            <div>
              <Headline
                as="h1"
                size="xl"
                className="bg-clip-text text-transparent dark:text-transparent bg-gradient-to-b from-[#961946] to-[#322C6F]"
              >
                Explora el mundo del{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#FFBFBF]">
                  desarrollo
                </span>{' '}
                web
              </Headline>
            </div>
            <Paragraph className="my-5 sm:w-2/3">
              Descubre cómo construir sitios web impresionantes, aprende acerca
              de las mejores prácticas de desarrollo web, y mantente al día con
              las últimas noticias y tendencias del sector, todo en un solo
              lugar.
            </Paragraph>
            <button className="sm:w-[250px] w-[180px] bg-gradient-to-b from-[#ffffff] to-[#909090] py-2 px-5 rounded-[15px] flex items-center sm:text-xl text-lg font-semibold">
              <BsDiscord className="text-5xl text-[#3D3D3D]" />
              <a
                href="https://discord.gg/DCrVhFydDW"
                target="_blank"
                className="leading-6"
              >
                Comunidad de discord
              </a>
            </button>
            <Paragraph className="m:text-lg my-5 w-1/2">
              Únete a nuestra comunidad de discord para informarte de todas las
              novedades.
            </Paragraph>
          </div>

          <div className="w-full lg:block hidden">
            <img src={HeroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
