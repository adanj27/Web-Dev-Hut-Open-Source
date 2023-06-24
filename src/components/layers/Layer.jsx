import { Navbar, Footer } from '../'

export function Layer({ children }) {
  return (
    <div className="bg-[#201F47] relative overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        {children}
      </div>
      <Footer className="justify-self-end" />
    </div>
  )
}
