import { Card } from '../'

export const Items = ({ listItems, withCategory }) => {
  return (
    <>
      {listItems?.length > 0 &&
        listItems.map(
          ({ _id, name, description, categories, images, identifier }) => {
            if (withCategory && !categories.includes(withCategory)) return
            return (
              <Card
                key={_id}
                mainImage={images?.banner}
                iconImage={images?.icon}
                title={name}
                description={description}
                to={`/tecnologia/${identifier}`}
                className="from-[#644285] to-[#8078DF]"
              />
            )
          }
        )}
    </>
  )
}
