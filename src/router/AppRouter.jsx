import { Route, Routes } from 'react-router-dom'

import {
  Home,
  LearnRoutes,
  Frontend,
  Backend,
  Other,
  Error404,
  VisualStudioCode,
  Technology,
  Guide,
} from '../pages'

export const AppRouter = () => {
  const otherRoutes = [
    { path: '/visual-studio-code', element: <VisualStudioCode /> },
  ]

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rutas" element={<LearnRoutes />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/frontend/:name" element={<Technology />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/backend/:name" element={<Technology />} />
      <Route
        path="/guias/:guideIdentifier/:lessonIdentifier?"
        element={<Guide />}
      />
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
