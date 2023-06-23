import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAlert } from '../hooks'
import { Guides } from '../services'
import { Container, GuideCard, Headline, Loading } from '../components'

export const Technology = () => {
  const { name } = useParams()
  const { AlertContainer, alert } = useAlert()

  const [guides, setGuides] = useState([])
  const [err, setErr] = useState('')
  
  const showError = (error) => {
    setErr(error)
    alert.error(error)
  }
  
  const fetchGuides = async () => {
    const { data, error } = await Guides.getByTechnology(name) ?? {}
    if (error) showError(error)
    if (data?.length === 0) return setGuides(null)
    
    setGuides(data)
    return data
  }

  useEffect(() => {
    fetchGuides()
  }, [])

  return (
    <Container>
      {guides?.length === 0 && !err ? <Loading /> : null}

      {!guides || err ? (
        <Headline size="sm">No hay guías para mostrar</Headline>
      ) : null}

      {err && <AlertContainer />}

      {guides?.length > 0 && (
        <>
          <Headline
            size="sm"
            className="mb-5">
            Guías para "{name}"
          </Headline>

          <div className="flex items-start justify-start flex-wrap gap-4">
            {guides.map((guide) => {
              if (guide.lessons?.length === 0) return
              return (
                <GuideCard
                  key={guide._id}
                  thumbnail={guide.banner.img}
                  title={guide.title}
                  description={guide.description}
                  to={`/guias/${guide.identifier}`}
                />
              )
            })}
          </div>
        </>
      )} 
    </Container>
  )
}
