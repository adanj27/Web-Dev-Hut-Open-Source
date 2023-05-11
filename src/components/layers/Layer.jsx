import { Navbar, Footer } from '../'

export function Layer({ children }) {
  return (
    <div className="bg-[#201F47] -z-20">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
