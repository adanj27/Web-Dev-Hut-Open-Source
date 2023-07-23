import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Contributors as ContributorsService } from '../../services'

import { Headline, Paragraph } from '../'

export const Contributors = () => {
  const [collaborators, setCollaborators] = useState([])

  const fetchContributors = async () => {
    const { data, error } = await ContributorsService.getAll()
    if (!data) return setCollaborators(null)
    setCollaborators(data)
  }

  useEffect(() => {
    fetchContributors()
  }, [])

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
      <div className="grid sm:grid-cols-7 grid-cols-6 gap-5 max-w-4xl mx-auto justify-center py-10">
        {collaborators?.length > 0 &&
          collaborators.map((collaborator, i) => (
            <Link
              key={collaborator.id}
              to={collaborator.html_url}
              target="_blank"
            >
              <img
                src={collaborator.avatar_url}
                className="w-[90px] bg-black rounded-full"
                alt={`${collaborator.login} image`}
              />
            </Link>
          ))}
      </div>
    </section>
  )
}
