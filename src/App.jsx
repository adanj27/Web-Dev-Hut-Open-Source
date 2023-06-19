import { BrowserRouter } from 'react-router-dom'

import { Layer, ScrollButton } from './components'
import { AppRouter } from './router/AppRouter'

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
