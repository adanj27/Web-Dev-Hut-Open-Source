import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Headline } from '../'

export function GuideLesson({ lesson, className = '', ...props }) {
  return (
    <div className={`w-full xl:w-[70%] ${className}`} {...props}>
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
        <Headline size="sm">No hay contenido para esta sección</Headline>
      )}
    </div>
  )
}
