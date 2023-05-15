import { Navbar, Footer } from '../'

export function Layer({ children }) {
  return (
    <div className="bg-[#201F47] relative overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
