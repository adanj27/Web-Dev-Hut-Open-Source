import { Link } from 'react-router-dom'
import { MdAltRoute } from 'react-icons/md'

import { Button } from './'

export function LearnRoutesText({
  className = '',
  hideButton = false,
  ...props
}) {
  return (
    <div className={`text-[#f1f1f1] ${className}`} {...props}>
      <p className="mb-3 sm:text-sm text-xs">
        ¿No estás seguro de qué camino tomar?
      </p>
      <h2 className="font-bold sm:text-5xl text-3xl max-w-xs">
        Rutas de aprendizaje
      </h2>
      <p className="my-3 sm:text-lg text-md max-w-[245px]">
        Aquí presentamos dos rutas de aprendizaje populares para el desarrollo
        web.
      </p>
      {!hideButton && (
        <Link to="#">
          <Button as="span" icon={MdAltRoute}>
            Ver rutas
          </Button>
        </Link>
      )}
    </div>
  )
}
