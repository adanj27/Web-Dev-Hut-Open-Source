import './App.css'
import { Layer, Navbar, Footer } from './components'

function App({children}) {
  return (
    <>
      <Layer>
        <Navbar />
        {children}
      </Layer>
     
      <Footer />
    </>
  )
}

export default App
