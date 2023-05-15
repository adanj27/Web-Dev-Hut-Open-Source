import { Link } from 'react-router-dom'

export function TechnologyItem({
  index,
  title = 'title',
  description = 'description',
  to,
  target = '_self',
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex justify-start items-start mb-5 sm:mb-10 ${className}`}
      {...props}
    >
      {index && (
        <div className="sm:mx-6 mx-4 bg-[#000021] rounded-[50px] text-center min-w-[1.5rem] min-h-[1.5rem">
          <span className="inline-block">{index}</span>
        </div>
      )}

      <div className="w-full max-w-[200px]">
        <div>
          <div className="flex justify-between items-start">
            <h5 className="font-medium text-lg sm:text-xl">{title}</h5>
            {to && (
              <Link
                to={to}
                target={target}
                className="bg-gradient-to-b from-white to-gray-400 rounded-[50px] text-black font-medium text-sm sm:text-base px-3 py-[.15rem] max-w-[120px] line-clamp-1"
              >
                Ver
              </Link>
            )}
          </div>

          <p className="text-sm sm:text-base mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
