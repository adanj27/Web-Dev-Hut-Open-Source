import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Card({
  mainImage,
  iconImage,
  title,
  description,
  to,
  ...props
}) {
  return (
    <div
      className="bg-gradient-to-br from-indigo-300 to-indigo-400 p-4 rounded-3xl w-full max-w-[230px] relative"
      {...props}
    >
      <img
        src={mainImage}
        alt=""
        className="w-full h-auto max-h-[200px] object-cover"
      />
      {iconImage && (
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-[50px] direct-child:rounded-[50px] bg-[#1A1A58]">
          <img
            src={iconImage}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      )}

      <div className="font-medium text-white">
        <h4 className="mt-5 text-3xl text-center">{title}</h4>
        <p className="my-5 text-md line-clamp-4">{description}</p>
      </div>

      {to && (
        <Link
          to={to}
          className="w-9 h-9 bg-[#212D5F] block rounded-[50px] text-white mx-auto"
        >
          <BiRightArrowAlt className="w-full h-full" />
        </Link>
      )}
    </div>
  )
}
