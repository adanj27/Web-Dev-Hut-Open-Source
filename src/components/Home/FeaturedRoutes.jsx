import { Link } from 'react-router-dom'
import { CardRoute } from '../CardRoute'
import { MdAltRoute } from 'react-icons/md'

import { Button } from '../'

export const FeaturedRoutes = () => {
  return (
    <section className="lg:min-h-[90vh] md:min-h-[65vh] min-h-[75vh] items-center grid lg:grid-cols-2">
      <div className="text-white">
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
        <Link to="#">
          <Button as="span" icon={MdAltRoute}>
            Ver rutas
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-10 mt-10">
        <CardRoute />
      </div>
    </section>
  )
}
