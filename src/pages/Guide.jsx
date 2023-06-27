import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

    setLesson(data)
    return data
  }

  useEffect(() => {
    fetchGuide()
  }, [lessonIdentifier])

  return (
    <Container className="my-16">
      {guide && Object.entries(guide).length === 0 && !err ? <Loading /> : null}

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
          <div className="flex justify-between items-stretch flex-wrap">
            <aside className="flex-[0.3] max-w-[30%] break-all relative">
              <ul className="py-3 bg-[#A2A2A2]/20 rounded-xl">
                {guide.lessons?.map((lesson) => {
                  return (
                    <li key={lesson._id}>
                      <Link
                        className={`block w-full py-0.5 px-2 text-white text-sm font-medium ${
                          lessonIdentifier.toLowerCase() === lesson.identifier
                            ? 'bg-[#3D53A1]'
                            : ''
                        }`}
                        to={`/guias/${guide.identifier}/${lesson.identifier}`}
                      >
                        {lesson.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </aside>

            <div className="flex-[0.7] pl-10">
              {lesson?.content ? (
                <article>
                  <ReactMarkdown
                    className="text-[#f1f1f1]"
                    children={lesson.content}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, '')}
                            style={coldarkDark}
                            customStyle={{
                              background: 'transparent',
                              padding: 0,
                              margin: 0,
                            }}
                            language={match[1]}
                            PreTag="div"
                            showLineNumbers
                          />
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  />
                </article>
              ) : (
                <Headline size="sm">
                  No hay contenido para esta sección
                </Headline>
              )}
            </div>
          </div>
        </>
      ) : null}
    </Container>
  )
}
