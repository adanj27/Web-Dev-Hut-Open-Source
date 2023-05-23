import { Link } from 'react-router-dom'

import { Headline, Paragraph } from '../'

export const Contributors = () => {
  const users = [
    {
      name: 'adanj27',
      url: 'https://github.com/adanj27',
      title: 'Adan Jimenez | Frontend',
    },
    {
      name: 'FOWMind',
      url: 'https://github.com/FOWMind',
      title: '',
    },
    {
      name: 'ykIsCoding',
      url: 'https://github.com/ykIsCoding',
      title: '',
    },
  ]

  return (
    <section className="my-10 text-center text-[#f1f1f1]">
      <Headline as="h2" size="md" className="mx-auto">
        Colaboradores
      </Headline>
      <Paragraph className="max-w-sm mx-auto py-5 text-base sm:text-lg">
        Nos gustaría agradecer a todos los colaboradores que han contribuido a
        este proyecto. Sus ideas y esfuerzos han sido fundamentales para hacer
        que este proyecto sea posible.
      </Paragraph>
      <Headline as="h3" size="sm" className="mx-auto">
        Frontend
      </Headline>
      <div className="grid sm:grid-cols-7 grid-cols-6 gap-5 max-w-4xl mx-auto justify-center py-10">
        {users.map((user, i) => (
          <Link key={user.name + i} to={user.url} target="_blank">
            <img
              src={`https://avatars.githubusercontent.com/${user.name}`}
              title={user.title}
              className="w-[90px] bg-black rounded-full"
              alt={`${user.name} image`}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
