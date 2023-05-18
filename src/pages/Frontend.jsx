import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import reactjsIcon from '../assets/icons/reactjs.svg'
import javaIcon from '../assets/icons/java.svg'
import pythonIcon from '../assets/icons/python.svg'
import rubyIcon from '../assets/icons/ruby.svg'
import { Button, Container, SearchField } from '../components/index'

import { useState } from 'react'

import { frontend } from '../data/Data'
import { Items } from '../components/Frontend/Items'

export const Frontend = () => {
  const allList = ['Todo', ...new Set(frontend.map((item) => item.category))]

  const [listItems, setListItems] = useState(frontend)
  const [list, setList] = useState(allList)

  const filterItems = (category) => {
    if (category === 'Todo') {
      setListItems(frontend)
      return
    }
    const newItems = frontend.filter((item) => item.category === category)

    setListItems(newItems)
  }

  return (
    <section className="text-white my-16 max-w-7xl mx-auto">
      <Container>
        <div className="grid grid-cols-2 gap-2">
          <div className="max-w-sm sm:max-w-md">
            <span className="text-sm">+20 temas sobre desarrollo web</span>
            <h3 className="text-2xl sm:text-4xl font-medium my-2">
              Aprende sobre las herramientas y tecnologías
            </h3>
            <p>
              Aprende a programar y construir sitios web desde cero, domina las
              herramientas y tecnologías más actuales.
            </p>
          </div>
          <div className="grid flex-1">
            <div className="flex justify-end">
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
            </div>
            <div className="overflow-hidden">
              <SearchField className="float-right" />
            </div>
          </div>
        </div>

        <div className="my-16 max-w-6xl mx-auto grid sm:grid-cols-6 grid-cols-3 gap-2">
          {list.map((category, index) => (
            <Button
              key={index}
              onClick={() => {
                filterItems(category)
              }}
              className="xl:w-[180px] md:text-base lg:w-[160px] md:w-[130px] sm:w-[100px] text-[9px] w-[110px] leading-4"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
          <Items listItems={listItems} />
        </div>
      </Container>
    </section>
  )
}
