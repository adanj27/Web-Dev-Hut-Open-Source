import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Frontend from '../assets/icons/frontend.svg'
import Backend from '../assets/icons/backend.svg'
import { Link } from 'react-router-dom'

export const CardRoute = () => {
  const routes = [
    {
      title: 'Frontend',
      p: 'La ruta de aprendizaje de frontend se enfoca en las tecnologías y herramientas utilizadas para construir la interfaz de usuario de una aplicación web.',
      to: '/frontend',
      img: Frontend,
    },
    {
      title: 'Backend',
      p: 'La ruta de aprendizaje de backend se enfoca en las tecnologías utilizadas para construir la lógica de negocio y la funcionalidad de una aplicación web.',
      to: '/backend',
      img: Backend,
    },
  ]

  return (
    <>
      {routes.map((rout) => (
        <div
          key={rout}
          className="w-[245px] h-[280px] rounded-[40px] p-4 relative backdrop-blur-lg bg-black bg-opacity-20"
        >
          <div className="absolute top-4 right-4 z-10 p-2 rounded-[50px] bg-[#909090]">
            <img
              src={rout.img}
              alt=""
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold mt-2">{rout.title}</h2>
            <p className="font-normal my-2">{rout.p}</p>
          </div>
          <div className="w-full flex justify-center text-2xl text-[#212D5F] p-2">
            <Link to={rout.to}>
              <BsFillArrowRightCircleFill />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
