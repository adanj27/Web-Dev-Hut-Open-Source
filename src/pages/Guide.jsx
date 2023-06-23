import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { useAlert } from '../hooks'
import { Guides, Lesson } from '../services'
import { Container, Headline, Loading } from '../components'

export function Guide() {
  const navigate = useNavigate()
  const { guideIdentifier, lessonIdentifier } = useParams()
  const { AlertContainer, alert } = useAlert()
  const [guide, setGuide] = useState({})
  const [lesson, setLesson] = useState({})
  const [err, setErr] = useState('')

  const showError = (error) => {
    setErr(error)
    alert.error(error)
  }

  const fetchGuide = async () => {
    const { data, error } = await Guides.getByIdentifier(guideIdentifier)
    if (error) showError(error)

    // Guide not found, set to null
    if (!data) return setGuide(null)

    // Guide found, no lesson specified
    if (!lessonIdentifier) {
      const firstLessonIdentifier = data.lessons[0].identifier
      return navigate(`/guias/${guideIdentifier}/${firstLessonIdentifier}`)
    }

    const fetchedLesson = fetchLesson(lessonIdentifier)
    if (!fetchedLesson) return setGuide(null)

    setGuide(data)
    return data
  }

  const fetchLesson = async (identifier) => {
    const { data, error } = await Lesson.getByIdentifier(identifier)
    if (error) showError(error)
    if (!data || !data.content) return setLesson(null)

    setLesson(data)
    return data
  }

  useEffect(() => {
    setLesson({}) // trigger loading
    fetchGuide()
  }, [lessonIdentifier])

  return (
    <Container className="my-16">
      {guide && lesson && Object.entries(lesson).length === 0 && !err ? (
        <Loading />
      ) : null}

      {err && <AlertContainer />}

      {!guide || !lesson || err ? (
        <Headline size="sm">No hay contenido para mostrar</Headline>
      ) : null}

      {lesson && Object.entries(lesson).length > 0 && (
        <>
          <Headline size="sm" className="max-w-xl mb-4">
            Guías | {guide.name}
          </Headline>
          <div className="flex justify-between items-stretch flex-wrap">
            <aside className="flex-[0.3] relative before:content-[''] before:w-[1px] before:h-full before:absolute before:right-0 before:top-0 before:bg-[#f1f1f1]">
              <ul>
                {guide.lessons?.map((lesson) => {
                  return (
                    <li key={lesson._id} className="text-white mb-2">
                      <Link
                        to={`/guias/${guide.identifier}/${lesson.identifier}`}
                        className={
                          lessonIdentifier.toLowerCase() === lesson.identifier
                            ? 'underline'
                            : ''
                        }
                      >
                        {lesson.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </aside>

            <article className="flex-[0.7] pl-10">
              <ReactMarkdown className="text-[#f1f1f1]">
                {lesson.content}
              </ReactMarkdown>
            </article>
          </div>
        </>
      )}
    </Container>
  )
}
