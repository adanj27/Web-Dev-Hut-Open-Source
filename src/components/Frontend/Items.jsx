import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Items = ({ listItems }) => {
  return (
    <>
      {listItems.map((listItems) => {
        const { id, title, description, path, logo, bg } = listItems
        return (
          <div
            key={id}
            className="bg-gray-500 bg-gradient-to-b p-4 rounded-3xl w-full max-w-[230px] max-h-[400px] overflow-auto relative [&_img]:select-none [&_img]:pointer-events-none from-[#644285] to-[#8078DF]"
          >
            <img
              src={bg}
              alt=""
              className="w-full h-[100px] object-contain rounded-3xl"
              draggable="false"
            />

            <div className="absolute top-4 right-4 z-10 w-8 h-8 p-1 rounded-[50px] bg-[#1A1A58]">
              <img
                src={logo}
                alt=""
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>

            <div>
              <div className="font-medium text-[#f1f1f1] text-center">
                <h4 className="mt-2 text-xl sm:text-2xl">{title}</h4>
                <p className="mt-2 text-sm sm:text-base line-clamp-4 break-words">
                  {description}
                </p>
              </div>
              <Link
                to={`/${path}`}
                className="w-7 h-7 bg-[#212D5F] block rounded-[50px] text-[#f1f1f1] mx-auto mt-4"
              >
                <BiRightArrowAlt className="w-full h-full" />
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
