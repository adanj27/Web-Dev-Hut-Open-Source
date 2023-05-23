import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Headline, Paragraph } from './'

export function Card({
  mainImage,
  iconImage,
  title,
  description,
  to,
  target = '_self',
  className = '',
  ...props
}) {
  return (
    <div
      className={`bg-gray-500 bg-gradient-to-b p-4 rounded-3xl w-full 2lg:max-w-[230px] max-h-[400px] overflow-auto relative [&_img]:select-none [&_img]:pointer-events-none ${className}`}
      {...props}
    >
      <img
        src={mainImage}
        alt=""
        className="w-full h-[100px] object-contain rounded-3xl"
        draggable="false"
      />
      {iconImage && (
        <div className="absolute top-4 right-4 z-10 w-8 h-8 p-1 rounded-[50px] bg-[#1A1A58]">
          <img
            src={iconImage}
            alt=""
            className="w-full h-full object-contain"
            draggable="false"
          />
        </div>
      )}

      <div>
        <div className="font-medium text-[#f1f1f1] text-center">
          <Headline as="h4" size="sm" className="mt-2 mx-auto">
            {title}
          </Headline>
          <Paragraph className="mt-2 line-clamp-4 break-words">
            {description}
          </Paragraph>
        </div>

        {to && (
          <Link
            to={to}
            target={target}
            className="w-7 h-7 bg-[#212D5F] block rounded-[50px] text-[#f1f1f1] mx-auto mt-4"
          >
            <BiRightArrowAlt className="w-full h-full" />
          </Link>
        )}
      </div>
    </div>
  )
}
