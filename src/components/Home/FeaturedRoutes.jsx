import { CardRoute } from '../CardRoute'
import { MdAltRoute } from 'react-icons/md'

export const FeaturedRoutes = () => {
  return (
    <section className="h-[90vh] items-center max-w-7xl mx-auto relative grid grid-cols-2">
      <div className="text-white">
        <p className="mb-3">¡No estás seguro de qué camino tomar?</p>
        <h2 className="font-bold text-5xl ">
          Rutas de <br /> aprendizaje
        </h2>
        <p className="my-3 text-lg">
          Aquí presentamos dos rutas de <br /> aprendizaje populares para <br />{' '}
          el desarrollo web.
        </p>
        <button className="bg-gradient-to-b from-[#ffffff] to-[#909090] py-2 px-8 flex items-center text-black font-semibold rounded-full">
          <MdAltRoute className="mr-3" />
          Ver rutas
        </button>
      </div>
      <div className="grid grid-cols-2">
        <CardRoute />
      </div>
    </section>
  )
}
