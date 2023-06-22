import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAlert } from '../../hooks'
import { Guides, Technologies } from '../../services'
import { Container, GuideCard, Headline, Loading } from '../../components'

export const Technology = () => {
  const { name } = useParams()
  const { AlertContainer, alert } = useAlert()
  const [technology, setTechnology] = useState({})
  const [guides, setGuides] = useState([])
  const [err, setErr] = useState('')

  const fetchingTechnology = () => {
    return technology && Object.entries(technology).length === 0
  }

  const fetchingGuides = () => {
    return guides?.length === 0
  }

  const setError = (error) => {
    setErr(error)
    alert.error(error)
  }

  const fetchTechnology = async (name) => {
    const { data, error } = await Technologies.getByName(name) ?? {}
    if (error) setError(error)

    // Technology not found
    if (!data) return setTechnology(null)
    
    // Technology found
    setTechnology(data)
    return data
  }

  const fetchGuides = async () => {
    // Fetch the technology
    const technology = await fetchTechnology(name)

    // Technology not found, cannot fetch guides
    if (!technology) return setGuides(null)
    
    // Technology found, fetch the guides
    const { data, error } = await Guides.getByTechnology(name) ?? {}
    if (error) showError(error)

    // Guides not found
    if (data?.length === 0) return setGuides(null)

    // Guides found
    setGuides(data)
    return data
  }

  useEffect(() => {
    fetchGuides()
  }, [])

  return (
    <Container>
      {(fetchingTechnology() || fetchingGuides() && !err) && <Loading />}

      {(!technology || !guides || err) && (
        <Headline size="sm">No hay guías para mostrar</Headline>
      )}

      {err && <AlertContainer />}

      {guides?.length > 0 && (
        <>
          <Headline
            size="sm"
            className="mb-5">
            Guías de {technology.name}
          </Headline>
          <div className="flex items-start justify-start flex-wrap gap-4">
            {guides.map(({
              _id,
              banner,
              name: title,
              description,
              identifier,
              lessons
            }) => {
              if (lessons.length === 0) return
              return (
                <GuideCard
                  key={_id}
                  thumbnail={banner.img}
                  title={title}
                  description={description}
                  to={`/guias/${identifier}/${lessons[0].identifier}`}
                />
              )
            })}
          </div>
        </>
      )} 
    </Container>
  )
}
