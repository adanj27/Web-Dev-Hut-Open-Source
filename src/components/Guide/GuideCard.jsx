import { Link } from 'react-router-dom'

import { Headline, Paragraph } from '../'

export function GuideCard({
  thumbnail,
  title,
  description,
  className = '',
  to,
  ...props
}) {
  return (
    <div
      className={`bg-[#352B6B] rounded-2xl w-full max-w-[230px] max-h-[400px] overflow-auto ${className}`}
      {...props}
    >
      <Link to={to} className="inline-block p-4">
        <img
          src={thumbnail}
          alt={title}
          draggable={false}
          className="select-none pointer-events-none rounded-xl w-full h-[120px] object-cover"
        />
        <Headline as="h3" size="sm" className="mt-4">
          {title}
        </Headline>
        <Paragraph className="mt-1">{description}</Paragraph>
      </Link>
    </div>
  )
}
