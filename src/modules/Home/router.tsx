import { Navigate, RouteObject } from 'react-router-dom'
import { Home } from './views/Home'

const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

export default routes
