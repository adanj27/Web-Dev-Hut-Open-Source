import { Component, React, useState } from 'react'
import { Button, Container, SearchField } from '../components'
import { IconButton } from '../components'

import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import angularIcon from '../assets/icons/angular.svg'
import reactjsIcon from '../assets/icons/reactjs.svg'
import nextjsIcon from '../assets/icons/nextjs.svg'
import nodejsIcon from '../assets/icons/nodejs.svg'
import javaIcon from '../assets/icons/java.svg'
import pythonIcon from '../assets/icons/python.svg'
import rubyIcon from '../assets/icons/ruby.svg'
import sqlIcon from '../assets/icons/sql.svg'
import dockerIcon from '../assets/icons/docker.svg'

export default function LearnRoutes() {
  const imgStyle = 'rounded-lg z-50 my-20 shadow-md min-w-full min-h-full'
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div className="mx-auto">
      <Container className="relative z-10">
        <div className="text-white flex-col my-10">
          <div className="grid grid-cols-2">
            <div className="text-white">
              <p className="mb-3 sm:text-sm text-xs">
                ¿No estás seguro de qué camino tomar?
              </p>
              <h2 className="font-bold sm:text-5xl text-3xl max-w-xs">
                Rutas de aprendizaje
              </h2>
              <p className="my-3 sm:text-lg text-md max-w-[245px]">
                Aquí presentamos dos rutas de aprendizaje populares para el
                desarrollo web.
              </p>
            </div>

            <div className="grid flex-1">
              <div className="flex justify-end">
                <ul className="my-10 direct-child:inline-block direct-child:bg-gradient-to-b direct-child:from-white direct-child:to-gray-500 direct-child:p-[0.4rem] direct-child:rounded-[50px] sm:direct-child:mr-6 direct-child:mr-3 [&_img]:w-6 [&_img]:h-6 [&_img]:object-contain [&_img]:select-none [&_img]:pointer-events-none">
                  <li>
                    <img src={html5Icon} draggable="false" />
                  </li>
                  <li>
                    <img src={css3Icon} draggable="false" />
                  </li>
                  <li>
                    <img src={javascriptIcon} draggable="false" />
                  </li>
                  <li>
                    <img src={reactjsIcon} draggable="false" />
                  </li>
                  <li>
                    <img src={javaIcon} draggable="false" />
                  </li>
                  <li>
                    <img src={pythonIcon} draggable="false" />
                  </li>
                  <li>
                    <img src={rubyIcon} draggable="false" />
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden mx-6">
                <SearchField className="float-right" />
              </div>
            </div>
          </div>
          <div className="flex grid-cols-2 gap-10 justify-center my-5">
            <Button onClick={() => setImgIndex(0)}>FrontEnd</Button>
            <Button onClick={() => setImgIndex(1)}>BackEnd</Button>
          </div>
        </div>
        <div className="flex justify-center">
          {imgIndex == 0 ? (
            <img
              className={imgStyle}
              src="src\assets\frontend.png"
              alt="foto de ruta"
            />
          ) : (
            <img
              className={imgStyle}
              src="src\assets\backend.png"
              alt="foto de ruta"
            />
          )}
        </div>
      </Container>
    </div>
  )
}
