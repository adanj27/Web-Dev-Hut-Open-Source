import { AiFillHome } from 'react-icons/ai'
import {
  MdComputer,
  MdOutlineBackupTable,
  MdAltRoute,
  MdContacts,
  MdCardGiftcard,
} from 'react-icons/md'
import { BsDiscord, BsGithub } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="bg-[#181049] p-10 xl:p-20 relative before:content-[''] before:absolute before:top-0 before:left-0 before:-translate-y-full before:w-full before:h-20 xl:before:h-24 before:bg-footer-wave before:bg-top before:bg-no-repeat before:bg-cover xl:flex xl:justify-center items-center direct-child:mx-auto text-white font-medium">
      <section className="mr-32 flex items-start justify-center text-lg [&_svg]:text-2xl [&_svg]:mr-2 [&_svg]:align-middle [&_a]:p-2">
        <ul className="mr-10 direct-child:mb-10 [&_svg]:inline-block">
          <li>
            <a href="#">
              <AiFillHome /> Inicio
            </a>
          </li>
          <li>
            <a href="#">
              <MdComputer /> Frontend
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineBackupTable /> Backend
            </a>
          </li>
          <li>
            <a href="#">
              <MdAltRoute /> Rutas
            </a>
          </li>
        </ul>

        <ul className="direct-child:mb-10 [&_svg]:inline-block">
          <li>
            <a href="#">
              <MdContacts /> Contacto
            </a>
          </li>
          <li>
            <a href="#">
              <BsDiscord /> Discord
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub /> Github
            </a>
          </li>
          <li>
            <a href="#">
              <MdCardGiftcard /> Licencia
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-5 xl:mt-0 direct-child:mb-5 last:direct-child:mb-0 text-md text-center">
        <p>Sitio creado con React.js, Vite, Tailwind, Json-Server.</p>
        <p>Web Dev v.0.1.0 &copy; 2023</p>

        <div className="direct-child:ml-2 first:direct-child:ml-0">
          <a href="#">Términos y condiciones del servicio</a>
          <div className="mx-2 inline-block cursor-default select-none">|</div>
          <a href="#">Política de privacidad</a>
        </div>
      </section>
    </footer>
  )
}
