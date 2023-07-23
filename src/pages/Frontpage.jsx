import marco from '../assets/icons/marco.svg'
import desarrollo from '../assets/icons/desarrollo.svg'
import firstarrow from '../assets/icons/firstarrow.svg'
import herramientas from '../assets/icons/framework.svg'
import secondarrow from '../assets/icons/secondarrow.svg'
import framework from '../assets/icons/libreria.svg'
import thirdarrow from '../assets/icons/thirdarrow.svg'
import ui from '../assets/icons/estilos.svg'
import estilo from '../assets/icons/ui.svg'
import gestion from '../assets/icons/gestion.svg'
import testing from '../assets/icons/testing.svg'
import access from '../assets/icons/access.svg'
import optimizacion from '../assets/icons/optimizacion.svg'
import progress from '../assets/icons/progress.svg'

import { useState } from 'react'

export const Frontpage = () => {
  //Iniciar el hook useState para dar la accion que al darle click al svg cambie
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <div className="container">
      <ul>
        <li>
          <img src={marco} className="relative mb-9 " />
        </li>
        <li>
          <img
            onClick={() =>
              setOpen(!open)
            } /*Evento onClick que llama al hook para abrire */
            src={desarrollo}
            className="absolute -mt-[1085px] ml-[390px] hover:cursor-pointer hover:-translate-y-1.5 duration-500 "
          />
          {open && (
            <img
              src={firstarrow}
              className="absolute -mt-[1165px] ml-[390px] hover:cursor-pointer translate-x-[370px]  "
              onClick={() =>
                setOpen(false)
              } /*Se indica que es false ya que se cierra si lo desea, además de agregar un condicional */
            />
          )}
        </li>
        <li>
          <img
            src={herramientas}
            className="absolute -mt-[980px] ml-[502px] hover:cursor-pointer hover:-translate-y-1.5 duration-500"
            onClick={() => setOpen1(!open1)}
            /*Evento onClick que llama al hook para abrire */
          />
          {open1 && (
            <img
              src={secondarrow}
              className="absolute -mt-[1000px] ml-[135px] hover:cursor-pointer"
              onClick={() => setOpen1(false)}
            /> /*Se indica que es false ya que se cierra si lo desea, además de agregar un condicional */
          )}
        </li>
        <li>
          <img
            /*Evento onClick que llama al hook para abrire */
            onClick={() => setOpen2(!open2)}
            src={framework}
            className="absolute -mt-[875px] ml-[398px] hover:cursor-pointer hover:-translate-y-1.5 duration-500"
          />
          {open2 && (
            <img
              onClick={() =>
                setOpen2(false)
              } /*Se indica que es false ya que se cierra si lo desea, además de agregar un condicional */
              src={thirdarrow}
              className="absolute -mt-[895px] ml-[760px] hover:cursor-pointer"
            />
          )}
        </li>
        <li>
          <img src={ui} className="absolute -mt-[765px] ml-[503px]" />
        </li>
        <li>
          <img src={estilo} className="absolute -mt-[660px] ml-[395px]" />
        </li>
        <li>
          <img src={gestion} className="absolute -mt-[555px] ml-[505px]" />
        </li>
        <li>
          <img src={testing} className="absolute -mt-[450px] ml-[390px]" />
        </li>
        <li>
          <img src={access} className="absolute -mt-[342px] ml-[505px]" />
        </li>
        <li>
          <img src={optimizacion} className="absolute -mt-[238px] ml-[390px]" />
        </li>
        <li>
          <img src={progress} className="absolute -mt-[130px] ml-[505px]" />
        </li>
      </ul>
    </div>
  )
}
