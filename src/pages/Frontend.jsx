import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import reactjsIcon from '../assets/icons/reactjs.svg'
import javaIcon from '../assets/icons/java.svg'
import pythonIcon from '../assets/icons/python.svg'
import rubyIcon from '../assets/icons/ruby.svg'
import { Button, Card, SearchField } from '../components/index'
import typescriptIcon from '../assets/icons/typescript.svg'
import typescriptImage from '../assets/cards/typescript.png'

export const Frontend = () => {
  return (
    <section className="text-white my-16 max-w-7xl mx-auto">
      <div className="flex justify-between">
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
        <div>
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
        </div>
      </div>

      <div className="my-16 max-w-5xl mx-auto flex justify-between">
        <Button className="w-[180px] leading-4">
          Lenguajes de programación
        </Button>
        <Button className="w-[180px] leading-4">
          Lenagajes de maracado y estilo
        </Button>
        <Button className="w-[180px] leading-4">Frameworks</Button>
        <Button className="w-[180px] leading-4">Librerías</Button>
        <Button className="w-[180px] leading-4">Preprocesadores</Button>
      </div>

      <div className="pb-20 grid grid-cols-5 gap-8">
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
          mainImage={typescriptImage}
          iconImage={typescriptIcon}
          title={'TypeScript'}
          description={
            'Lenguaje de programación de código abierto que es una extensión de JavaScript'
          }
          to="#"
          className="from-[#9E80E2] to-[#4F98E5]"
        />
      </div>
    </section>
  )
}
