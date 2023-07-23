import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  FilterButton,
  Container,
  IntroductionText,
  Items,
  TechnologyIcons,
  Section,
  Loading,
  Headline,
} from '../components'

import { Technologies as TechnologiesService } from '../services'
import { useAlert } from '../hooks'

export const Technologies = () => {
  const area = useLocation().pathname.replace('/', '')
  const [technologies, setTechnologies] = useState([])
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [err, setErr] = useState('')
  const { alert } = useAlert()

  const showError = (error) => {
    setErr(error)
    alert.error(error)
  }

  const fetchTechnologies = async () => {
    const { data, error } = await TechnologiesService.getByArea(area)
    if (error) showError(error)
    if (!data || data?.length === 0) return setTechnologies(null)
    setTechnologies(data)
    return data
  }

  const filterByCategory = (category) => {
    if (category === currentCategory) return resetCategory()
    setCurrentCategory(category)
  }

  const resetCategory = () => setCurrentCategory('')

  useEffect(() => {
    resetCategory()
    fetchTechnologies()
  }, [area])

  useEffect(() => {
    if (!technologies) return

    const fetchedCategories = Array.from(
      new Set(
        technologies
          .map((t) => t.categories)
          .reduce((acc, x) => [...acc, ...x], []) // flatten
      )
    )
    setCategories(fetchedCategories)
  }, [technologies])

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-2">
          <IntroductionText />
          <div className="grid flex-1">
            <div className="flex justify-end">
              <TechnologyIcons />
            </div>
          </div>
        </div>

        {err || !technologies ? (
          <Headline size="sm">No hay tecnologías para mostrar</Headline>
        ) : null}

        {technologies?.length === 0 && <Loading />}

        {technologies?.length > 0 && (
          <>
            {technologies.length > 1 && categories.length > 0 && (
              <div className="my-16 max-w-6xl mx-auto flex flex-wrap justify-center items-start">
                {categories.map((category, index) => (
                  <FilterButton
                    key={index}
                    onClick={() => filterByCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            )}

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
              <Items listItems={technologies} withCategory={currentCategory} />
            </div>
          </>
        )}
      </Container>
    </Section>
  )
}
