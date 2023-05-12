import { Link } from 'react-router-dom'

export const Contributors = () => {
  const users = [
    {
      name: 'adanj27',
      url: 'https://github.com/adanj27',
      title: 'Adan Jimenez | Frontend',
    },
  ]

  return (
    <section className="relative max-w-7xl mx-auto my-10 text-center text-white">
      <h2 className="text-[40px] font-semibold">Colaboradores</h2>
      <p className="max-w-sm mx-auto py-5">
        Nos gustaría agradecer a todos los colaboradores que han contribuido a
        este proyecto. Sus ideas y esfuerzos han sido fundamentales para hacer
        que este proyecto sea posible.
      </p>
      <h2 className="text-[32px] font-semibold">Frontend</h2>
      <div className="flex justify-center py-10">
        {users.map((user) => (
          <Link key={user} to={user.url}>
            <img
              src={`https://avatars.githubusercontent.com/${user.name}`}
              title={user.title}
              className="w-[100px] bg-black rounded-full"
              alt={`${user.name} image`}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
