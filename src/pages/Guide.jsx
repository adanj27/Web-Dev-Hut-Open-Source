import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAlert } from '../hooks'
import { Guides, Lesson } from '../services'
import {
  Container,
  GuideLesson,
  GuideSidebar,
  Headline,
  Loading,
} from '../components'

export function Guide() {
  const navigate = useNavigate()
  const { guideIdentifier, lessonIdentifier } = useParams()
  const { AlertContainer, alert } = useAlert()
  const [guide, setGuide] = useState({})
  const [lesson, setLesson] = useState({})
  const [loadingLesson, setLoadingLesson] = useState(false)
  const [err, setErr] = useState('')

  const showError = (error) => {
    setErr(error)
    alert.error(error)
  }

  const fetchGuide = async () => {
    const { data, error } = await Guides.getByIdentifier(guideIdentifier)
    if (error) showError(error)

    // Guide not found, set guide and lesson to null
    if (!data) {
      setGuide(null)
      setLesson(null)
      return
    }

    // Guide found, no lesson specified
    if (!lessonIdentifier) {
      const firstLesson = data.lessons[0]
      if (!firstLesson) return setGuide(null)
      return navigate(`/guias/${guideIdentifier}/${firstLesson.identifier}`)
    }

    const fetchedLesson = fetchLesson(lessonIdentifier)
    if (!fetchedLesson) return setGuide(null)

    setGuide(data)
    return data
  }

  const fetchLesson = async (identifier) => {
    const { data, error } = await Lesson.getByIdentifier(identifier)
    if (error) showError(error)
    if (!data) return setLesson(null)

    setLoadingLesson(false)
    setLesson(data)
    return data
  }

  useEffect(() => {
    setLoadingLesson(true)
    fetchGuide()
  }, [lessonIdentifier])

  return (
    <Container className="my-16">
      {lesson && Object.entries(lesson).length === 0 && !err ? (
        <Loading />
      ) : null}

      {err && <AlertContainer />}

      {!guide || !lesson || err ? (
        <Headline size="sm">No hay contenido para mostrar</Headline>
      ) : null}

      {guide?.lessons?.length > 0 &&
      lesson &&
      Object.entries(lesson).length > 0 ? (
        <>
          <Headline size="sm" className="max-w-xl mb-4">
            Guías | {guide.name}
          </Headline>

          <div className="flex justify-between items-stretch flex-wrap gap-10">
            <GuideSidebar guide={guide} lessonIdentifier={lessonIdentifier} />
            <GuideLesson lesson={lesson} loadingLesson={loadingLesson} />
          </div>
        </>
      ) : null}
    </Container>
  )
}
