import {
  Hero,
  FeaturedSection,
  FeaturedRoutes,
  Contributors,
  Container,
  SectionBg,
  About,
} from '../components'

export const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <Container className="relative z-10">
        <FeaturedSection />
      </Container>

      <div className="relative z-10">
        <Container>
          <FeaturedRoutes />
          <Contributors />
        </Container>

        <SectionBg image={'/img/routes-bg.svg'} className="-z-10" />
      </div>

      <div className="relative z-10">
        <About />
      </div>
      {/* <Container>
        New content here
      </Container> */}
    </div>
  )
}
