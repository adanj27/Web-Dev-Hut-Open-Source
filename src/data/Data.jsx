import javascript from '../assets/cards/javascript.png'
import typescript from '../assets/cards/typescript.png'
import html from '../assets/cards/html5.png'
import angular from '../assets/cards/angular.png'
import react from '../assets/cards/reactjs.png'
import vite from '../assets/cards/vite.png'
import docker from '../assets/cards/docker.png'
import sql from '../assets/cards/sql.png'
import laravel from '../assets/cards/laravel.png'
import apache from '../assets/cards/apache.png'
import graphql from '../assets/cards/graphql.png'
import java from '../assets/cards/java.png'
import python from '../assets/cards/python.png'
import visualstudio from '../assets/cards/visualstudio.png'
import sublimetext from '../assets/cards/sublime.png'
import npm from '../assets/cards/npm.png'
import yarn from '../assets/cards/yarn.png'
import arquitectura from '../assets/cards/arquitectura.png'
import git from '../assets/cards/git.png'
import jest from '../assets/cards/jest.png'
import tuto from '../assets/cards/tuto.png'

import Javascript from '../assets/icons/javascript.svg'
import Typescript from '../assets/icons/typescript.svg'
import Html from '../assets/icons/html5.svg'
import Angular from '../assets/icons/angular.svg'
import React from '../assets/icons/reactjs.svg'
import Vite from '../assets/icons/vite.svg'
import Java from '../assets/icons/java.svg'
import Python from '../assets/icons/python.svg'
import Docker from '../assets/icons/docker.svg'
import Sql from '../assets/icons/sql.svg'
import Laravel from '../assets/icons/laravel.svg'
import Apache from '../assets/icons/apache.svg'
import Graphql from '../assets/icons/graphql.svg'
import Visualstudio from '../assets/icons/visualcode.svg'
import Sublimetext from '../assets/icons/sublimetext.svg'
import Npm from '../assets/icons/npm.svg'
import Yarn from '../assets/icons/yarn.svg'
import Arquitectura from '../assets/icons/arquitectura.svg'
import Git from '../assets/icons/git.svg'
import Jest from '../assets/icons/jest.svg'
import Tuto from '../assets/icons/tuto.svg'

export const frontend = [
  {
    id: 1,
    category: 'Lenguajes de programación',
    title: 'JavaScript',
    description:
      'Lenguaje de programación de alto nivel, interpretado y orientado a objetos.',
    path: '/frontend/javascript',
    logo: Javascript,
    bg: javascript,
  },
  {
    id: 2,
    category: 'Lenguajes de programación',
    title: 'TypeScript',
    description:
      'Lenguaje de programación de alto nivel, interpretado y orientado a objetos.',
    path: '/frontend/typescript',
    logo: Typescript,
    bg: typescript,
  },
  {
    id: 3,
    category: 'Lenguajes de marcado y estilo',
    title: 'HTML',
    description:
      '(HyperText Markup Language) es un lenguaje de marcado utilizado para estructurar y presentar contenido en la web.',
    path: '/frontend/html',
    logo: Html,
    bg: html,
  },
  {
    id: 4,
    category: 'Frameworks',
    title: 'Angular',
    description:
      'Framework web de código abierto basado en TypeScript para construir aplicaciones web de una sola página eficientes y escalables.',
    path: '/frontend/angular',
    logo: Angular,
    bg: angular,
  },
  {
    id: 5,
    category: 'Librerias',
    title: 'React',
    description:
      'Librería JavaScript de código abierto para construir interfaces de usuario interactivas y reutilizables en aplicaciones web de una sola página.',
    path: '/frontend/react',
    logo: React,
    bg: react,
  },
  {
    id: 6,
    category: 'Preprocesadores',
    title: 'Vite',
    description:
      'Herramienta de construcción rápida y ligera para aplicaciones web modernas con enfoque en la productividad y el rendimiento.',
    path: '/frontend/vite',
    logo: Vite,
    bg: vite,
  },
]

export const backend = [
  {
    id: 1,
    category: 'Lenguajes de programación',
    title: 'Java',
    description:
      'Lenguaje de programación ampliamente utilizado conocido por su independencia de plataforma y su sólido soporte para la programación orientada a objetos.',
    path: '/backend/java',
    logo: Java,
    bg: java,
  },
  {
    id: 2,
    category: 'Lenguajes de programación',
    title: 'Python',
    description:
      'Lenguaje de programación versátil y fácil de aprender, con una sintaxis clara y legible, utilizado en diversos campos como desarrollo web',
    path: '/backend/python',
    logo: Python,
    bg: python,
  },
  {
    id: 3,
    category: 'Frameworks',
    title: 'Laravel',
    description:
      'Framework de desarrollo web en PHP que facilita la creación de aplicaciones robustas y escalables.',
    path: '/backend/laravel',
    logo: Laravel,
    bg: laravel,
  },
  {
    id: 4,
    category: 'Librerias',
    title: 'Docker',
    description:
      'Plataforma de virtualización que permite crear, distribuir y ejecutar aplicaciones de forma independiente y portátil.',
    path: '/backend/docker',
    logo: Docker,
    bg: docker,
  },
  {
    id: 5,
    category: 'Base de datos',
    title: 'MySql',
    description:
      'Sistema de gestión de bases de datos relacional de código abierto utilizado para almacenar y administrar datos.',
    path: '/backend/mysql',
    logo: Sql,
    bg: sql,
  },
  {
    id: 6,
    category: 'Servidores',
    title: 'Apache',
    description:
      'Servidor web de código abierto ampliamente utilizado que permite alojar y entregar sitios web y aplicaciones en línea.',
    path: '/backend/apache',
    logo: Apache,
    bg: apache,
  },
  {
    id: 7,
    category: 'API',
    title: 'GraphQL',
    description:
      'Lenguaje de consulta y un entorno de tiempo de ejecución para APIs que permite obtener datos de manera eficiente y precisa.',
    path: '/backend/graphql',
    logo: Graphql,
    bg: graphql,
  },
]

export const other = [
  {
    id: 1,
    category: 'Editores de texto',
    title: 'Visual Studio Code',
    description:
      'Visual Studio Code es un editor de texto de código abierto, por lo que cualquiera puede acceder al código del software para verlo, modificarlo y distribuirlo a su gusto',
    path: '/otros-recursos/visualstudio',
    logo: Visualstudio,
    bg: visualstudio,
  },
  {
    id: 2,
    category: 'Editores de texto',
    title: 'Sublime Text',
    description:
      'Sublime Text es la mejor opción para un entorno de desarrollo completo, ya que agrupa código, marcado y prosa en una sola herramienta.',
    path: '/otros-recursos/sublimetext',
    logo: Sublimetext,
    bg: sublimetext,
  },
  {
    id: 3,
    category: 'Package manager',
    title: 'NPM',
    description:
      'NPM se puede considerar como las siglas de Node Package Manager, es decir, gestor de paquetes de NodeJS, un entorno de ejecución multiplataforma para ejecutar Javascript no sólo en un navegador web',
    path: '/otros-recursos/npm',
    logo: Npm,
    bg: npm,
  },
  {
    id: 4,
    category: 'Package manager',
    title: 'Yarn',
    description:
      'YARN es un gestor dependencias de JavaScript, que está enfocado en la velocidad y la seguridad',
    path: '/otros-recursos/yarn',
    logo: Yarn,
    bg: yarn,
  },
  {
    id: 5,
    category: 'Test',
    title: 'Jest',
    description:
      'Amamos las iniciativas sin fines de lucro que promueven el crecimiento de la industria TI, y freeCodeCampes una de ellas.',
    path: '/otros-recursos/jest',
    logo: Jest,
    bg: jest,
  },
  {
    id: 6,
    category: 'Sistema de control de versiones',
    title: 'Git',
    description:
      'Git es un sistema de control de versiones distribuido, lo que significa que un clon local del proyecto es un repositorio de control de versiones completo',
    path: '/otros-recursos/git',
    logo: Git,
    bg: git,
  },
  {
    id: 7,
    category: 'Conceptos y técnicas',
    title: 'Arquitectura cliente-servidor',
    description:
      'Cliente-Servidor es uno de los estilos arquitectónicos distribuidos más conocidos, el cual está compuesto por dos componentes, el proveedor y el consumidor.',
    logo: Arquitectura,
    bg: arquitectura,
  },
  {
    id: 8,
    category: 'Recursos adicionales',
    title: 'Tutoriales y guias de inicio rapido',
    description:
      'Amamos las iniciativas sin fines de lucro que promueven el crecimiento de la industria TI, y freeCodeCampes una de ellas.',
    path: '/otros-recursos/freecode',
    logo: Tuto,
    bg: tuto,
  },
]
