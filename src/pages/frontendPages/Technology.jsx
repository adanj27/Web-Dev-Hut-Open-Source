import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ReactLoading from 'react-loading'

import { Guides } from '../../services'
import { Container, GuideCard, Headline } from '../../components'

export const Technology = () => {
  const { name } = useParams()
  const [guides, setGuides] = useState(null)
  const [err, setErr] = useState('')

  const fetchGuides = async () => {
    const { data, error } = await Guides.getByTechnology(name) ?? {}
    setGuides(data)
    if (error) {
      setErr(error)
      toast.error(error)
    }
  }

  useEffect(() => {
    fetchGuides()
  }, [])

  return (
    <Container>
      {!guides && !err && <ReactLoading type="cylon" color="#fff" className="mx-auto" />}
      {(guides?.length === 0 || err) && <Headline>No hay guías para mostrar</Headline>}
      {err && (
        <ToastContainer
          position="bottom-left"
          theme="dark"
        />
      )}

      {guides?.length > 0 && (
        <>
          <Headline
            size="sm"
            className="mb-5">
            Guías de {name}
          </Headline>
          <div className="flex items-start justify-start flex-wrap gap-4">
            {guides.map(({ _id, banner, name: title, description, identifier }) => (
              <GuideCard
                key={_id}
                thumbnail={banner.img}
                title={title}
                description={description}
                to={`/${name}/guides/${identifier}`}
              />
            ))}
          </div>
        </>
      )} 
    </Container>
  )
}
