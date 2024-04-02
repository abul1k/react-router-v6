import { RouteObject } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]

export default routes
