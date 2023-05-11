import { Navbar, Footer } from '../'

export function Layer({ children }) {
  return (
    <div className="bg-[#201F47] bg-hero-bg bg-no-repeat bg-cover">
      <div className="px-5 py-10 xl:px-20 xl:py-14 max-w-screen-2xl mx-auto">
        <Navbar />
        <div className="relative z-20 min-h-screen">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
