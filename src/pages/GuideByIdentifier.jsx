import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Guides } from '../services'
import { Container, Headline } from '../components'

export function GuideByIdentifier() {
  const { technology, guideIdentifier } = useParams()
  const [guide, setGuide] = useState({})
  const [err, setErr] = useState('')
  
  const fetchGuide = async () => {
    const { data, error } = await Guides.getByIdentifier(guideIdentifier)
    setGuide(data)
    if (error) {
      setErr(error)
    }
  }

  useEffect(() => {
    fetchGuide()
  }, [])

  console.log({ guide })

  if (!guide || Object.keys(guide).length === 0) {
    return <Headline>No hay nada para mostrar</Headline>
  }

  return (
    <Container>
      <Headline size="sm" className="max-w-xl">Guías de {technology} | {guide.name}</Headline>
      {guide.lessons.length > 0 && guide.lessons.map((lesson) => (
        <li key={lesson._id} className="text-white">{lesson.name}</li>
      ))}
    </Container>
  )
}
