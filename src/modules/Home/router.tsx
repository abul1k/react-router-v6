import { Navigate, RouteObject } from 'react-router-dom'
import { Home } from './views/Home'
import ProtectedRoute from '@/router/ProtectedRoute'

const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]

export default routes
