import marco from '../assets/icons/marco.svg'
import desarrollo from '../assets/icons/desarrollo.svg'
import herramientas from '../assets/icons/framework.svg'
import framework from '../assets/icons/libreria.svg'
import ui from '../assets/icons/estilos.svg'
import estilo from '../assets/icons/ui.svg'
import gestion from '../assets/icons/gestion.svg'
import testing from '../assets/icons/testing.svg'
import access from '../assets/icons/access.svg'
import optimizacion from '../assets/icons/optimizacion.svg'
import progress from '../assets/icons/progress.svg'
import { Firstsvg, Thirdsvg } from './Firstarrow'
import { useState } from 'react'
import { Secondsvg } from './Firstarrow'

export const Frontpage = () => {
  const [open, setOpen] = useState(false) //Hook para hacer la funcion de click en el svg
  const handleOnClose = () => setOpen(false) //Hook para el componente Firstsvg re-utilizable

  const [openone, setOpenOne] = useState(false) //Hook para hacer la funcion de click en el svg
  const handleOnCloseOne = () => setOpenOne(false) //Hook para el componente Secondsvg re-utilizable

  const [openthird, setOpenThird] = useState(false) //Hook para hacer la funcion de click en el svg
  const handleOnCloseThird = () => setOpenThird(false) //Hook para el componente Secondsvg re-utilizable

  return (
    <>
      <div className="container">
        <div className="relative hover:cursor-pointer">
          <ul>
            <li>
              <img src={marco} />
            </li>
          </ul>
        </div>
        <div className="absolute flex flex-col top-[27.5rem] right-[32rem]">
          <ul>
            <li>
              <img onClick={() => setOpen(true)} src={desarrollo} />
            </li>
            <li className="absolute top-[13.3rem] right-[0.1rem]">
              <img onClick={() => setOpenThird(true)} src={framework} />
            </li>
            <li className="absolute top-[26.5rem] right-[0.1rem]">
              <img src={estilo} />
            </li>
            <li className="absolute top-[39.8rem] right-[0.1rem]">
              <img src={testing} />
            </li>
            <li className="absolute top-[53rem] right-[0.1rem]">
              <img src={optimizacion} />
            </li>
          </ul>
        </div>
        <div className="absolute flex flex-col top-[34.2rem] right-[24rem]">
          <ul>
            <li>
              <img onClick={() => setOpenOne(true)} src={herramientas} />
            </li>
            <li className="absolute top-[13.3rem]">
              <img src={ui} />
            </li>
            <li className="absolute top-[26.5rem]">
              <img src={gestion} />
            </li>
            <li className="absolute top-[39.8rem]">
              <img src={access} />
            </li>
            <li className="absolute top-[53rem]">
              <img src={progress} />
            </li>
          </ul>
        </div>
      </div>
      <Firstsvg onClose={handleOnClose} visible={open} />
      <Secondsvg onCloseOne={handleOnCloseOne} visibleone={openone} />
      <Thirdsvg onCloseThird={handleOnCloseThird} visiblethird={openthird} />
    </>
  )
}
