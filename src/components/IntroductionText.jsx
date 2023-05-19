export function IntroductionText({ className = '', ...props }) {
  return (
    <div className={`max-w-sm sm:max-w-md ${className}`} {...props}>
      <span className="text-sm">+20 temas sobre desarrollo web</span>
      <h3 className="text-3xl sm:text-4xl font-medium my-2">
        Aprende sobre las herramientas y tecnologías
      </h3>
      <p>
        Aprende a programar y construir sitios web desde cero, domina las
        herramientas y tecnologías más actuales.
      </p>
    </div>
  )
}
