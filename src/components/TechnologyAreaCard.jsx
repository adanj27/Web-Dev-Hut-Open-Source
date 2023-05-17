import { TechnologyItem } from './'

export function TechnologyAreaCard({
  title = 'title',
  technologies = [],
  cardOrder = 1,
  children,
  className = '',
  ...props
}) {
  return (
    <div className={`bg-[#0E0F48] p-6 rounded-3xl ${className}`} {...props}>
      <div className="sm:flex sm:justify-between">
        {cardOrder === 0 && children}

        <div className={`${cardOrder === 0 ? 'sm:ml-6' : 'sm:mr-6'}`}>
          <h4
            className={`uppercase font-medium text-xl sm:text-2xl ${
              cardOrder === 0 ? 'my-5' : 'mb-5'
            }`}
          >
            {title}
          </h4>

          {technologies?.length > 0 && (
            <div>
              {technologies.map(({ name, description, path }, i) => (
                <TechnologyItem
                  key={name + i}
                  index={i + 1}
                  title={name}
                  description={description}
                  to={path}
                />
              ))}
            </div>
          )}
        </div>

        {cardOrder !== 0 && children}
      </div>
    </div>
  )
}
