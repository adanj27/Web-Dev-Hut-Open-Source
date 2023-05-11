import { Hero, FeaturedSection } from '../components'
import HeroBg from '../../public/img/hero-bg.svg'

export const Home = () => {
  return (
    <>
      <img className="w-full absolute" src={HeroBg} alt="" />
      <Hero />
      <FeaturedSection />
    </>
  )
}
