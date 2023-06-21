import { Route, Routes } from 'react-router-dom'

import {
  Home,
  LearnRoutes,
  Frontend,
  Backend,
  Other,
  Error404,
  Php,
  VisualStudioCode,
  Technology,
  GuideByIdentifier,
} from '../pages'

export const AppRouter = () => {
  const backendRoutes = [{ path: '/php', element: <Php /> }]

  const otherRoutes = [
    { path: '/visual-studio-code', element: <VisualStudioCode /> },
  ]

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rutas" element={<LearnRoutes />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/frontend/:name" element={<Technology />} />
      <Route path="/:technology/guides/:guideIdentifier" element={<GuideByIdentifier />} />
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
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
