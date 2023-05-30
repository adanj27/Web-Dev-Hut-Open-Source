import './App.css'
import { Layer, Navbar, Footer } from './components'
import ScrollToTopButtonComponent from './components/ScrollToTopButtonComponent/ScrollToTopButtonComponent'

function App() {
  return (
    <>
      <Layer>
        <Navbar />
      </Layer>
      <Footer />
      <ScrollToTopButtonComponent />
    </>
  )
}

export default App
