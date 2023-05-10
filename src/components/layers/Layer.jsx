import { Navbar, Footer } from '../'

export function Layer({ children }) {
  return (
    <div className="bg-[#201F47] bg-hero-bg bg-no-repeat bg-cover bg-[">
      <div className="px-5 py-10 xl:px-20 xl:py-14">
        <Navbar />
        <div className="relative z-20 min-h-screen">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
