import { Link } from 'react-router-dom'
import { BsDiscord, BsGithub } from 'react-icons/bs'

import { Button, Headline, Paragraph } from '../'

export function About() {
  return (
    <main>
      <section className="my-10 text-center text-[#f1f1f1] dark:text-[#f1f1f1]">
        <div className="container mx-auto px-12 py-10 ">
          <div className="text-center mt-16 my-10">
            <Headline as="h4" size="md" className="mx-auto max-w-md">
              Acerca del Proyecto
            </Headline>

            <Paragraph className="mx-auto mt-4 max-w-lg">
              Este proyecto es una iniciativa de la comunidad web dev, una
              comunidad en línea dedicada a la creación y promoción de recursos
              educativos y herramientas para desarrolladores web. Nuestra misión
              es ayudar a los desarrolladores a aprender y crecer en su carrera,
              así como fomentar una comunidad unida y colaborativa.
            </Paragraph>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 ">
          <div>
            <Paragraph className="mx-auto py-5">
              El proyecto en sí es un sitio web que ofrece recursos educativos y
              noticias relacionadas con el desarrollo web, incluyendo
              tutoriales, guías, noticias, eventos y entrevistas con expertos en
              la industria. Además, tenemos una sección de proyectos de código
              abierto en la que puedes encontrar y contribuir a proyectos
              interesantes de la comunidad.
            </Paragraph>
            <Paragraph className="mx-auto py-5">
              Si te gustaría participar en este proyecto, ¡estamos encantados de
              recibir tu colaboración! Puedes contribuir escribiendo artículos o
              tutoriales, sugiriendo temas de noticias o proyectos para incluir
              en el sitio web, y compartiendo tus conocimientos y experiencias
              en nuestra comunidad en línea. También puedes contribuir a los
              proyectos de código abierto en nuestra sección de proyectos,
              ayudando a mejorar el código, arreglando errores, añadiendo nuevas
              funciones, y más.
            </Paragraph>
          </div>
          <div>
            <Paragraph className="mx-auto py-5">
              Para participar, simplemente únete a nuestra comunidad en línea en
              “Discord”, donde podrás conocer a otros desarrolladores y
              encontrar oportunidades de colaboración. ¡Esperamos verte pronto y
              ver cómo tu colaboración puede ayudar a hacer crecer nuestra
              comunidad!{' '}
            </Paragraph>
            <div className="grid grid-flow-row max-w-sm mx-auto py-5 gap-24 md:grid-cols-2">
              <Link to="#">
                <Button as="span" icon={BsDiscord}>
                  Discord
                </Button>
              </Link>
              <Link to="#">
                <Button as="span" icon={BsGithub}>
                  Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
