import { BrowserRouter } from 'react-router-dom'

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
