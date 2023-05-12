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
      <Hero />
      <FeaturedSection />
      <img className="w-full absolute top-[2450px]" src={RoutesBg} alt="" />
      <FeaturedRoutes />
      <Contributors />
    </>
  )
}
