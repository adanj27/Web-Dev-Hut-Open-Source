import { MdBallot } from 'react-icons/md'

import html5Icon from '../../assets/icons/html5.svg'
import css3Icon from '../../assets/icons/css3.svg'
import javascriptIcon from '../../assets/icons/javascript.svg'
import typescriptIcon from '../../assets/icons/typescript.svg'
import angularIcon from '../../assets/icons/angular.svg'
import reactjsIcon from '../../assets/icons/reactjs.svg'
import nextjsIcon from '../../assets/icons/nextjs.svg'
import nodejsIcon from '../../assets/icons/nodejs.svg'
import javaIcon from '../../assets/icons/java.svg'
import pythonIcon from '../../assets/icons/python.svg'
import rubyIcon from '../../assets/icons/ruby.svg'
import sqlIcon from '../../assets/icons/sql.svg'
import dockerIcon from '../../assets/icons/docker.svg'

import typescriptImage from '../../assets/cards/typescript.png'
import angularImage from '../../assets/cards/angular.png'
import reactjsImage from '../../assets/cards/reactjs.png'
import nextjsImage from '../../assets/cards/nextjs.png'
import nodejsImage from '../../assets/cards/nodejs.png'
import sqlImage from '../../assets/cards/sql.png'
import dockerImage from '../../assets/cards/docker.png'

import { Button, Card, SearchField, TechnologyAreaCard } from '../'

export function FeaturedSection() {
  const technologies = {
    frontend: [
      {
        name: 'HTML',
        description:
          'Lenguaje de marcado - se utiliza para estructurar y dar formato',
        path: '#',
      },
      {
        name: 'CSS',
        description:
          'Lenguaje de estilos - se utiliza para dar estilo y diseño',
        path: '#',
      },
      {
        name: 'JavaScript',
        description:
          'Lenguaje de programación - se utiliza para añadir interactividad',
        path: '#',
      },
    ],
    backend: [
      {
        name: 'PHP',
        description: 'Lenguaje de programación de código abierto especialmente',
        path: '#',
      },
      {
        name: 'Python',
        description: 'Lenguaje de programación de alto nivel de código abierto',
        path: '#',
      },
      {
        name: 'Java',
        description:
          'Lenguaje de programación de alto nivel orientado a objetos',
        path: '#',
      },
    ],
  }

  return (
    <section className="text-white my-16">
      <div className="max-w-sm sm:max-w-md">
        <span className="text-sm">+20 temas sobre desarrollo web</span>
        <h3 className="text-3xl sm:text-4xl font-medium my-2">
          Aprende sobre las herramientas y tecnologías
        </h3>
        <p>
          Aprende a programar y construir sitios web desde cero, domina las
          herramientas y tecnologías más actuales.
        </p>
      </div>

      <ul className="my-10 direct-child:inline-block direct-child:bg-gradient-to-b direct-child:from-white direct-child:to-gray-500 direct-child:p-[0.4rem] direct-child:rounded-[50px] sm:direct-child:mr-6 direct-child:mr-3 [&_img]:w-6 [&_img]:h-6 [&_img]:object-contain [&_img]:select-none [&_img]:pointer-events-none">
        <li>
          <img src={html5Icon} draggable="false" />
        </li>
        <li>
          <img src={css3Icon} draggable="false" />
        </li>
        <li>
          <img src={javascriptIcon} draggable="false" />
        </li>
        <li>
          <img src={reactjsIcon} draggable="false" />
        </li>
        <li>
          <img src={javaIcon} draggable="false" />
        </li>
        <li>
          <img src={pythonIcon} draggable="false" />
        </li>
        <li>
          <img src={rubyIcon} draggable="false" />
        </li>
      </ul>

      <div className="overflow-hidden">
        <SearchField className="float-right" />
      </div>

      <div className="mt-10 direct-child:mb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <TechnologyAreaCard
            title={'Frontend'}
            technologies={technologies.frontend}
            cardOrder={1}
          >
            <Card
              mainImage={reactjsImage}
              iconImage={reactjsIcon}
              title={'React.js - Desarrollo web'}
              description={'Biblioteca de JavaScript para construir interfaces'}
              to="#"
              className="from-[#FFDF6F] to-[#983232] max-w-full sm:max-w-[230px]"
            />
          </TechnologyAreaCard>

          <TechnologyAreaCard
            title={'Backend'}
            technologies={technologies.backend}
            cardOrder={0}
          >
            <Card
              mainImage={nodejsImage}
              iconImage={nodejsIcon}
              title={'Node.js - Desarrollo web'}
              description={'Entorno de ejecución de JavaScript'}
              to="#"
              className="from-[#4BBDFA] to-[#276CDA] max-w-full sm:max-w-[230px]"
            />
          </TechnologyAreaCard>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
          <Card
            mainImage={typescriptImage}
            iconImage={typescriptIcon}
            title={'TypeScript'}
            description={
              'Lenguaje de programación de código abierto que es una extensión de JavaScript'
            }
            to="#"
            className="from-[#9E80E2] to-[#4F98E5]"
          />

          <Card
            mainImage={sqlImage}
            iconImage={sqlIcon}
            title={'SQL'}
            description={
              'Lenguaje de programación utilizado para administrar y manipular bases de datos relacionales'
            }
            to="#"
            className="from-[#59BCF7] to-[#2171DA]"
          />

          <Card
            mainImage={nextjsImage}
            iconImage={nextjsIcon}
            title={'Next.js'}
            description={
              'Framework de React para construir aplicaciones web del lado del servidor (SSR, por sus siglas en inglés)'
            }
            to="#"
            className="from-[#34B3FA] to-[#4b7880]"
          />

          <Card
            mainImage={dockerImage}
            iconImage={dockerIcon}
            title={'Docker'}
            description={
              'Plataforma de software, se utiliza para crear, desplegar, ejecutar aplicaciones en contenedores'
            }
            to="#"
            className="from-[#A7773E] to-[#8E97A6]"
          />

          <Card
            mainImage={angularImage}
            iconImage={angularIcon}
            title={'Angular'}
            description={
              'Framework de desarrollo web que se utiliza para construir aplicaciones web y móviles'
            }
            to="#"
            className="from-[#644285] to-[#8078DF]"
          />
        </div>
      </div>

      <div className="text-center">
        <Button icon={MdBallot}>Ver todo</Button>
      </div>
    </section>
  )
}
