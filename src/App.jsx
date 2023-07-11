import { BrowserRouter } from 'react-router-dom'

import { Layer, ScrollButton } from './components'
import { AppRouter } from './router/AppRouter'
import { useAlert } from './hooks'

function App() {
  const { AlertContainer } = useAlert()

  return (
    <BrowserRouter>
      <Layer>
        <AppRouter />
        <ScrollButton />
        <AlertContainer />
      </Layer>
    </BrowserRouter>
  )
}

export default App
