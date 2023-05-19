import { CardRoute, LearnRoutesText } from '../'

export const FeaturedRoutes = () => {
  return (
    <section className="lg:min-h-[90vh] md:min-h-[65vh] min-h-[75vh] items-center grid lg:grid-cols-2">
      <LearnRoutesText />
      <div className="grid grid-cols-2 gap-2 sm:gap-10 mt-10">
        <CardRoute />
      </div>
    </section>
  )
}
