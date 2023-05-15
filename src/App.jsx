import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { Layer } from './components'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Layer>
        <AppRouter />
      </Layer>
    </BrowserRouter>
  )
}

export default App
