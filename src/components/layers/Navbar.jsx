import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { BsDiscord } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'

import { IconButton, Logo } from '../'

export function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => setMenuOpened((x) => !x)

  return (
    <nav className="flex items-center justify-between text-[#D9D9D9] text-lg">
      <div>
        <Logo />
      </div>

      <div className="xl:hidden fixed top-11 right-5 z-50">
        <IconButton
          Icon={menuOpened ? RxCross1 : FiMenu}
          onClick={toggleMenu}
          className="child:w-12 child:h-12 my-auto block"
        />
      </div>

      <div
        className={`${
          menuOpened ? 'block' : 'hidden'
        } fixed right-0 top-0 z-40 w-full max-w-sm h-screen p-10 bg-[#292F4E] text-center xl:flex xl:items-start xl:static xl:w-auto xl:max-w-none xl:h-auto xl:p-0 xl:bg-transparent xl:text-start`}
      >
        <ul className="block mt-12 direct-child:mb-10 [&_a]:px-4 xl:flex xl:items-center xl:justify-start xl:mt-0 xl:direct-child:mr-10 xl:child:inline-block">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Rutas</a>
          </li>
          <li>
            <a href="#">Frontend</a>
          </li>
          <li>
            <a href="#">Backend</a>
          </li>
          <li>
            <a href="#">Otros recursos</a>
          </li>
        </ul>

        <div className="direct-child:inline-block direct-child:mr-10 last:direct-child:mr-0">
          <IconButton Icon={RiSearchLine} />
          <IconButton
            as="a"
            href="https://discord.gg/Hmew77TY"
            target="_blank"
            Icon={BsDiscord}
          />
        </div>
      </div>
    </nav>
  )
}
