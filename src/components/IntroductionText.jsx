import { Headline, Paragraph } from './'

export function IntroductionText({ className = '', ...props }) {
  return (
    <div className={`max-w-sm sm:max-w-md ${className}`} {...props}>
      <span className="text-sm">+20 temas sobre desarrollo web</span>
      <Headline as="h3" className="my-2 max-w-none">
        Aprende sobre las herramientas y tecnologías
      </Headline>
      <Paragraph>
        Adquiere los conocimientos necesarios para programar y construir sitios
        web desde cero, domina las herramientas y tecnologías más actuales.
      </Paragraph>
    </div>
  )
}
