import { Link } from 'react-router-dom'

import { Headline, Paragraph } from '../components'

export const Error404 = () => {
  return (
    <div className="text-center">
      <Headline size="xl" className="mx-auto">
        Ups, no hay nada aquí
      </Headline>

      <img
        src="/img/404.svg"
        alt="illustration"
        width="400"
        height="256"
        className="w-[300px] sm:w-[400px] h-auto max-h-64 object-contain block mx-auto mt-4 mb-6"
      />

      <Paragraph>
        ¿Quieres ir al{' '}
        <Link to="/" className="underline py-2 hover:no-underline">
          inicio
        </Link>
        ?
      </Paragraph>
    </div>
  )
}
