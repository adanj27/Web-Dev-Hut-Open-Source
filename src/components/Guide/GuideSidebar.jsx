import { Link } from 'react-router-dom'

export function GuideSidebar({
  guide,
  lessonIdentifier,
  className = '',
  ...props
}) {
  return (
    <aside
      className={`w-[300px] max-w-full break-all relative ${className}`}
      {...props}
    >
      <ul className="py-3 bg-[#a2a2a2]/20 rounded-xl">
        {guide.lessons?.map((lesson) => {
          return (
            <li key={lesson._id}>
              <Link
                className={`block w-full py-0.5 px-2 text-white text-sm font-medium ${
                  lessonIdentifier?.toLowerCase() === lesson.identifier
                    ? 'bg-[#3d53a1]'
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
  )
}
