import { Link } from 'react-router-dom'
import { MdAltRoute } from 'react-icons/md'

import { Button, Headline, Paragraph } from './'

export function LearnRoutesText({
  className = '',
  hideButton = false,
  ...props
}) {
  return (
    <div className={`text-[#f1f1f1] ${className}`} {...props}>
      <Paragraph className="mb-3 sm:text-sm text-xs">
        ¿No estás seguro de qué camino tomar?
      </Paragraph>
      <Headline as="h2" size="lg">
        Rutas de aprendizaje
      </Headline>
      <Paragraph className="my-3 text-md max-w-[245px]">
        Aquí presentamos dos rutas de aprendizaje populares para el desarrollo
        web.
      </Paragraph>
      {!hideButton && (
        <Link to="/rutas">
          <Button as="span" icon={MdAltRoute}>
            Ver rutas
          </Button>
        </Link>
      )}
    </div>
  )
}
