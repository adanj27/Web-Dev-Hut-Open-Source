import { BrowserRouter } from 'react-router-dom'

import { Layer } from './components'
import { AppRouter } from './router/AppRouter'
import ScrollButton from './components/ScrollButton/ScrollButton'

function App() {
  return (
    <BrowserRouter>
      <Layer>
        <AppRouter />
        <ScrollButton />
      </Layer>
    </BrowserRouter>
  )
}

export default App
