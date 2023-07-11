import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MdContentCopy } from 'react-icons/md'

import { copyToClipboard } from '../../utils'
import { useAlert } from '../../hooks'
import { Headline, IconButton, Loading } from '../'

export function GuideLesson({
  lesson,
  loadingLesson,
  className = '',
  ...props
}) {
  const { alert } = useAlert()

  const copyCode = (code) => {
    console.log('copiando')
    copyToClipboard(
      code,
      () => alert.success('Copiado con éxito'),
      () => alert.error('Error al intentar copiar')
    )
  }

  return (
    <div className={`w-full xl:w-[70%] ${className}`} {...props}>
      {!loadingLesson && lesson?.content ? (
        <article>
          <ReactMarkdown
            className="text-[#f1f1f1]"
            children={lesson.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <>
                    <SyntaxHighlighter
                      {...props}
                      className="code-box"
                      children={String(children).replace(/\n$/, '')}
                      style={coldarkDark}
                      customStyle={{
                        padding: 0,
                        margin: 0,
                      }}
                      language={match[1]}
                      PreTag="div"
                      showLineNumbers
                    />
                    <IconButton
                      icon={MdContentCopy}
                      className="copy-code-button"
                      onClick={() => copyCode(children)}
                    />
                  </>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </article>
      ) : null}

      {loadingLesson && <Loading />}

      {!lesson.content && !loadingLesson ? (
        <Headline size="sm">No hay contenido para esta sección</Headline>
      ) : null}
    </div>
  )
}
