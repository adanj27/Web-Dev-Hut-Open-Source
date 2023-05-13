import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

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
      className={`bg-gray-500 bg-gradient-to-b p-4 rounded-3xl w-full max-w-[230px] max-h-[400px] overflow-auto relative [&_img]:select-none [&_img]:pointer-events-none ${className}`}
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
        <div className="font-medium text-white text-center">
          <h4 className="mt-2 sm:text-2xl">{title}</h4>
          <p className="mt-2 sm:text-sm text-[10px] line-clamp-4 break-words">
            {description}
          </p>
        </div>

        {to && (
          <Link
            to={to}
            target={target}
            className="w-7 h-7 bg-[#212D5F] block rounded-[50px] text-white mx-auto mt-4"
          >
            <BiRightArrowAlt className="w-full h-full" />
          </Link>
        )}
      </div>
    </div>
  )
}
