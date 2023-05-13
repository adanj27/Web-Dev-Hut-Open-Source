import {
  Hero,
  FeaturedSection,
  FeaturedRoutes,
  Contributors,
} from '../components'
import HeroBg from '../../public/img/hero-bg.svg'
import RoutesBg from '../assets/routes-bg.svg'

export const Home = () => {
  return (
    <>
      <img className="w-full absolute" src={HeroBg} alt="" />
      <img
        className="w-full absolute xl:top-[2450px] lg:top-[2750px] md:top-[3350px] top-[3200px]"
        src={RoutesBg}
        alt=""
      />
      <div className="px-5 relative max-w-7xl mx-auto">
        <Hero />
        <FeaturedSection />
        <FeaturedRoutes />
        <Contributors />
      </div>
    </>
  )
}
