import { Link } from 'react-router-dom'

import { AiFillHome } from 'react-icons/ai'
import {
  MdComputer,
  MdOutlineBackupTable,
  MdAltRoute,
  MdCardGiftcard,
} from 'react-icons/md'
import { BsDiscord, BsGithub } from 'react-icons/bs'

export function Footer({ className = '', ...props }) {
  return (
    <footer
      className={`bg-[#181049] mt-20 p-10 xl:p-20 relative z-20 before:content-[''] before:absolute before:top-0 before:left-0 before:-translate-y-full before:w-full before:h-20 xl:before:h-24 before:bg-footer-wave before:bg-top before:bg-no-repeat before:bg-cover xl:flex xl:justify-center items-center direct-child:mx-auto text-[#f1f1f1] font-medium ${className}`}
      {...props}
    >
      <section className="mr-32 flex items-start justify-center text-lg [&_svg]:text-2xl [&_svg]:mr-2 [&_svg]:align-middle [&_a]:p-2">
        <ul className="mr-10 direct-child:mb-10 [&_svg]:inline-block">
          <li>
            <Link to="/">
              <AiFillHome /> Inicio
            </Link>
          </li>
          <li>
            <Link to="/frontend">
              <MdComputer /> Frontend
            </Link>
          </li>
          <li>
            <Link to="/backend">
              <MdOutlineBackupTable /> Backend
            </Link>
          </li>
          <li>
            <Link to="/rutas">
              <MdAltRoute /> Rutas
            </Link>
          </li>
        </ul>

        <ul className="direct-child:mb-10 [&_svg]:inline-block">
          <li>
            <Link to="https://discord.gg/Hmew77TY" target="_blank">
              <BsDiscord /> Discord
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/adanj27/Web-Dev-Hut-Open-Source"
              target="_blank"
            >
              <BsGithub /> Github
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/adanj27/Web-Dev-Hut-Open-Source/blob/main/LICENSE"
              target="_blank"
            >
              <MdCardGiftcard /> Licencia
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-5 text-center xl:mt-0 direct-child:mb-5 last:direct-child:mb-0 text-md">
        <p>Sitio creado con React, Vite, Tailwind.</p>
        <p>Web Dev Hut v.0.1.0 &copy; 2023</p>

        <div className="direct-child:ml-2 first:direct-child:ml-0">
          <Link to="#">Términos y condiciones del servicio</Link>
          <div className="inline-block mx-2 cursor-default select-none">|</div>
          <Link to="#">Política de privacidad</Link>
        </div>
      </section>
    </footer>
  )
}
