import { useState } from 'react'

import {
  FilterButton,
  Container,
  IntroductionText,
  Items,
  TechnologyIcons,
} from '../components'

import { backend } from '../data'

export const Backend = () => {
  const allList = ['Todo', ...new Set(backend.map((item) => item.category))]

  const [listItems, setListItems] = useState(backend)
  const [list, setList] = useState(allList)

  const filterItems = (category) => {
    if (category === 'Todo') {
      setListItems(backend)
      return
    }
    const newItems = backend.filter((item) => item.category === category)

    setListItems(newItems)
  }

  return (
    <section className="text-[#f1f1f1] my-16 max-w-7xl mx-auto">
      <Container>
        <div className="grid grid-cols-2 gap-2">
          <IntroductionText />
          <div className="grid flex-1">
            <div className="flex justify-end">
              <TechnologyIcons />
            </div>
          </div>
        </div>

        <div className="my-16 max-w-6xl mx-auto flex flex-wrap justify-center items-start">
          {list.map((category, index) => (
            <FilterButton
              key={index}
              onClick={() => {
                filterItems(category)
              }}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
          <Items listItems={listItems} />
        </div>
      </Container>
    </section>
  )
}
