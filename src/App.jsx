import './App.css'
import { Layer, Navbar, Footer } from './components'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {
  return (
    <>
      <Layer>
        <Navbar />
      </Layer>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
