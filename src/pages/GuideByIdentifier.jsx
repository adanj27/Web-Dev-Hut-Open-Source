import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"

import { useAlert } from "../hooks"
import { Guides, Repository } from '../services'
import { Container, Headline, Loading } from '../components'

export function GuideByIdentifier() {
  const { guideIdentifier, lessonIdentifier } = useParams()
  const { AlertContainer, alert } = useAlert()
  const [guide, setGuide] = useState({})
  const [lesson, setLesson] = useState({})
  const [err, setErr] = useState('')

  const setError = (error) => {
    setErr(error)
    alert.error(error)
  }

  const fetchGuide = async () => {
    const { data, error } = await Guides.getByIdentifier(guideIdentifier)
    if (error) setError(error)
    if (!data) return setGuide(null)

    // TODO: Fetch lesson with params name
    const fetchedLesson = fetchLesson(lessonIdentifier.toLowerCase() + '.md')
    if (!fetchedLesson) return setGuide(null)

    setGuide(data)
    return data
  }

  const fetchLesson = async (fileName) => {
    const { data, error } = await Repository.getLessonContent(fileName)
    if (error) setError(error)
    if (!data) setLesson(null)

    setLesson(data)
    return data
  }

  useEffect(() => {
    fetchGuide()
  }, [])

  console.log({ lesson })

  return (
    <Container className="my-16">
      {err && <AlertContainer />}

      {(guide && Object.entries(guide).length === 0 && !err) && <Loading />}

      {(!guide || guide?.lessons?.length === 0 || err) && <Headline size="sm">No hay nada para mostrar</Headline>}

      {lesson && Object.entries(lesson).length > 0 && (
        <>
          <Headline size="sm" className="max-w-xl mb-4">Guías | {guide.name}</Headline>
          <div className="flex justify-between items-stretch flex-wrap">
            <aside className="flex-[0.3] relative before:content-[''] before:w-[1px] before:h-full before:absolute before:right-0 before:top-0 before:bg-[#f1f1f1]">
              <ul>
                {guide.lessons?.map((lesson) => {
                  return (
                    <li key={lesson._id} className="text-white mb-2">
                      <a
                        href={`/guias/${guide.identifier}/${lesson.identifier}`}
                        className={lessonIdentifier.toLowerCase() === lesson.identifier ? 'underline' : ''}>
                        {lesson.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </aside>
          
            <article className="flex-[0.7] pl-10">
              {lesson?.content && (
                <ReactMarkdown className="text-[#f1f1f1]">{atob(lesson.content)}</ReactMarkdown>
              )}
            </article>          
          </div>
        </>
      )}


    </Container>
  )
}
