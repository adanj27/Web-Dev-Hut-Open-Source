import { Route, Routes } from 'react-router-dom'

import {
  Home,
  LearnRoutes,
  Technologies,
  Error404,
  Technology,
  Guide,
} from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rutas" element={<LearnRoutes />} />
      <Route path="/frontend" element={<Technologies />} />
      <Route path="/backend" element={<Technologies />} />
      <Route path="/otros-recursos" element={<Technologies />} />
      <Route path="/tecnologia/:name" element={<Technology />} />
      <Route
        path="/guias/:guideIdentifier/:lessonIdentifier?"
        element={<Guide />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
