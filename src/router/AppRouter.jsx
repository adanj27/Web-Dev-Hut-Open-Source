import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LearnRoutes } from '../pages/LearnRoutes'
import { Frontend } from '../pages/Frontend'
import { Backend } from '../pages/Backend'
import { Other } from '../pages/Other'
import { Html } from '../pages/frontendPages/Html'
import { Php } from '../pages/backendPages/Php'
import { VisualStudioCode } from '../pages/other/VisualStudioCode'

export const AppRouter = () => {
  const frontendRoutes = [{ path: '/html', element: <Html /> }]

  const backendRoutes = [{ path: '/html', element: <Php /> }]

  const otherRoutes = [
    { path: '/visual-studio-code', element: <VisualStudioCode /> },
  ]

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rutas" element={<LearnRoutes />} />
      <Route path="/frontend" element={<Frontend />} />
      {frontendRoutes.map((route) => (
        <Route
          key={route.path}
          path={`/frontend${route.path}`}
          element={route.element}
        />
      ))}
      <Route path="/backend" element={<Backend />} />
      {backendRoutes.map((route) => (
        <Route
          key={route.path}
          path={`/backend${route.path}`}
          element={route.element}
        />
      ))}
      <Route path="/otros-recursos" element={<Other />} />
      {otherRoutes.map((route) => (
        <Route
          key={route.path}
          path={`/otros-recursos${route.path}`}
          element={route.element}
        />
      ))}
    </Routes>
  )
}
