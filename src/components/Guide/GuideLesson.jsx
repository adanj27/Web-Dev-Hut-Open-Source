import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MdContentCopy } from 'react-icons/md'

import { copyToClipboard } from '../../utils'
import { useAlert } from '../../hooks'
import { Anchor, Headline, IconButton, ListItem, Loading, Paragraph } from '../'
import { EditorTextArea } from '../EditorTextArea'

const markdownComponents = {
  h1: ({ node, ...props }) => <Headline as="h1" size="md" {...props} />,
  h2: ({ node, ...props }) => <Headline as="h2" size="sm" {...props} />,
  h3: ({ node, ...props }) => <Headline as="h3" size="xs" {...props} />,
  h4: ({ node, ...props }) => <Headline as="h4" size="xs" {...props} />,
  h5: ({ node, ...props }) => <Headline as="h5" size="xs" {...props} />,
  h6: ({ node, ...props }) => <Headline as="h6" size="xs" {...props} />,
  p: ({ node, ...props }) => <Paragraph {...props} />,
  a: ({ target, node, ...props }) => <Anchor target="_blank" {...props} />,
  li: ({ ordered, node, ...props }) => <ListItem {...props} />,
}

export function GuideLesson({
  lesson,
  loadingLesson,
  className = '',
  ...props
}) {
  const { alert } = useAlert()

  const copyCode = (code) => {
    copyToClipboard(
      code,
      () => alert.success('Copiado con éxito'),
      () => alert.error('Error al intentar copiar')
    )
  }

  return (
    <div className={`w-full xl:w-[70%] ${className}`} {...props}>
      {!loadingLesson && lesson?.content ? (
        <article className="lesson-content">
          <ReactMarkdown
            className="text-[#f1f1f1]"
            children={lesson.content}
            components={{
              ...markdownComponents,
              code: ({ node, inline, className, children, ...props }) => {
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
          <EditorTextArea
            htmlContent={'<h1>hola</h1>'}
            jsContent={"function test(){console.log('kiubo')}"}
            cssContent={'h1{color:red;}'}
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
