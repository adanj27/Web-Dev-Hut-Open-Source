import { Headline, TechnologyItem } from './'

export function TechnologyAreaCard({
  title = 'title',
  technologies = [],
  cardOrder = 1,
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`bg-[#0E0F48] p-6 rounded-3xl max-w-2xl mx-auto lg:mx-0 ${className}`}
      {...props}
    >
      <div className="2lg:flex 2lg:justify-between">
        {cardOrder === 0 && children}

        <div className={`${cardOrder === 0 ? '2lg:ml-6' : '2lg:mr-6'}`}>
          <Headline
            as="h4"
            size="sm"
            className={`uppercase ${
              cardOrder === 0 ? 'my-5 sm:mt-0 sm:mb-5' : 'mb-5'
            }`}
          >
            {title}
          </Headline>

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
