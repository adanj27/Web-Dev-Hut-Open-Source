import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from '../pages/Home'
import FrontEnd from '../pages/Frontend'
import Routes from '../pages/Routes'

const router = createBrowserRouter([
  {
    path: Home.routename,
    element: <Home />,
  },
  {
    path: FrontEnd.routename,
    element: <FrontEnd />,
  },
  {
    path: Routes.routename,
    element: <Routes />,
  },
])

export default router
