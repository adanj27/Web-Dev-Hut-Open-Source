import { Card } from '../'

export const Items = ({ listItems }) => {
  return (
    <>
      {listItems.map((listItems) => {
        const { id, title, description, path, logo, bg } = listItems
        return (
          <Card
            key={id}
            mainImage={bg}
            iconImage={logo}
            title={title}
            description={description}
            to={path}
            className="from-[#644285] to-[#8078DF]"
          />
        )
      })}
    </>
  )
}
