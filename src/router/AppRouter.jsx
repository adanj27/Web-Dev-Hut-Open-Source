import { Route, Routes } from 'react-router-dom'

import {
  Home,
  LearnRoutes,
  Frontend,
  Backend,
  Other,
  Error404,
  Technology,
  Guide,
} from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rutas" element={<LearnRoutes />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/frontend/:name" element={<Technology />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/backend/:name" element={<Technology />} />
      <Route path="/otros-recursos" element={<Other />} />
      <Route path="/otros-recursos/:name" element={<Technology />} />
      <Route
        path="/guias/:guideIdentifier/:lessonIdentifier?"
        element={<Guide />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
